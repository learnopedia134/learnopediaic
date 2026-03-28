from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, EmailStr, Field
from typing import List
import uuid
from datetime import datetime, timezone
import asyncio
import resend

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend configuration
resend.api_key = os.environ.get('RESEND_API_KEY', '')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
RECIPIENT_EMAIL = os.environ.get('RECIPIENT_EMAIL', 'office.learnopedia@gmail.com')

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Define Models
class Lead(BaseModel):
    model_config = {"extra": "ignore"}
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: str
    message: str = ""
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class LeadCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    message: str = ""

# Routes
@api_router.get("/")
async def root():
    return {"message": "Learnopedia API is running"}

@api_router.post("/submit-lead", response_model=Lead)
async def submit_lead(input: LeadCreate):
    try:
        # Create lead object
        lead_dict = input.model_dump()
        lead_obj = Lead(**lead_dict)
        
        # Save to MongoDB
        doc = lead_obj.model_dump()
        doc['timestamp'] = doc['timestamp'].isoformat()
        await db.leads.insert_one(doc)
        
        # Send email notification
        if resend.api_key and resend.api_key != 're_placeholder_add_your_key_here':
            html_content = f"""
            <html>
                <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                    <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
                        <h2 style="color: #7C3AED; border-bottom: 3px solid #FF6B35; padding-bottom: 10px;">New Lead from Learnopedia Website</h2>
                        <div style="margin: 20px 0;">
                            <p><strong style="color: #7C3AED;">Name:</strong> {lead_obj.name}</p>
                            <p><strong style="color: #7C3AED;">Email:</strong> {lead_obj.email}</p>
                            <p><strong style="color: #7C3AED;">Phone:</strong> {lead_obj.phone}</p>
                            <p><strong style="color: #7C3AED;">Message:</strong></p>
                            <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">{lead_obj.message or 'No message provided'}</p>
                            <p style="color: #666; font-size: 12px; margin-top: 20px;">Submitted on: {lead_obj.timestamp.strftime('%B %d, %Y at %I:%M %p')}</p>
                        </div>
                    </div>
                </body>
            </html>
            """
            
            params = {
                "from": SENDER_EMAIL,
                "to": [RECIPIENT_EMAIL],
                "subject": f"New Lead: {lead_obj.name} - Learnopedia",
                "html": html_content
            }
            
            try:
                email_result = await asyncio.to_thread(resend.Emails.send, params)
                logger.info(f"Email sent successfully: {email_result.get('id')}")
            except Exception as e:
                logger.error(f"Failed to send email: {str(e)}")
                # Don't fail the request if email fails
        else:
            logger.warning("Resend API key not configured - email not sent")
        
        return lead_obj
    except Exception as e:
        logger.error(f"Error submitting lead: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@api_router.get("/leads", response_model=List[Lead])
async def get_leads(skip: int = 0, limit: int = 100):
    try:
        # Validate pagination parameters
        if skip < 0:
            skip = 0
        if limit < 1 or limit > 100:
            limit = 100
            
        # Fetch leads with pagination and field projection
        leads = await db.leads.find(
            {}, 
            {"_id": 0}
        ).sort("timestamp", -1).skip(skip).limit(limit).to_list(limit)
        
        # Convert ISO string timestamps back to datetime objects
        for lead in leads:
            if isinstance(lead['timestamp'], str):
                lead['timestamp'] = datetime.fromisoformat(lead['timestamp'])
        
        return leads
    except Exception as e:
        logger.error(f"Error fetching leads: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()