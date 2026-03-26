# Learnopedia Landing Page

A professional, modern landing page for Learnopedia - Education Consultancy Services

## 🎨 Design Features

- **Deep Purple (#7C3AED)** primary branding
- **Vibrant Orange (#FF6B35)** call-to-action buttons
- Fully responsive design
- Modern, clean UI with smooth animations
- Professional imagery

## ✨ Key Features

### 1. Hero Section
- Compelling headline: "Turn Your Global Dreams Into Reality"
- Clear value proposition for Surat to UK/Latvia pathway
- Prominent WhatsApp and Contact CTAs

### 2. Services
- **Overseas Education Consulting** - UK, Latvia, and more
- **Career Counselling & Assessment** - Psychometric testing
- **Test Preparation & Language Training** - IELTS, TOEFL
- **Upskilling & Placement Programs** - Career support

### 3. Student Testimonials
- Taikhum Patel (IELTS Student)
- Malkesh Patel (Career Assessment)

### 4. Contact Form
- Lead capture with email notifications
- WhatsApp integration
- Email sent to: office.learnopedia@gmail.com

### 5. WhatsApp Integration
- Floating WhatsApp button
- Pre-filled message for easy engagement
- Opens: https://wa.me/919426875138

## 🚀 Tech Stack

**Frontend:**
- React 19
- Tailwind CSS
- Lucide React Icons
- Axios

**Backend:**
- FastAPI
- MongoDB
- Resend (Email API)

## 📧 Email Configuration

The application uses **Resend** for sending email notifications.

### Current Status:
- ✅ Backend API fully configured
- ⚠️ **ACTION REQUIRED:** Add your Resend API key

### How to Add Resend API Key:

1. **Get your Resend API Key:**
   - Sign up at https://resend.com (free tier available)
   - Go to Dashboard → API Keys
   - Create a new API key (starts with `re_...`)

2. **Add the key to your environment:**
   - Open `/app/backend/.env`
   - Replace `RESEND_API_KEY=re_placeholder_add_your_key_here`
   - With your actual key: `RESEND_API_KEY=re_your_actual_key_here`

3. **Restart the backend:**
   ```bash
   sudo supervisorctl restart backend
   ```

**Note:** Until you add the real Resend API key, form submissions will work but emails won't be sent. The leads will still be saved to the database.

## 🧪 Testing

### Test the Backend API:
```bash
# Health check
curl http://localhost:8001/api/

# Submit a test lead
curl -X POST http://localhost:8001/api/submit-lead \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+91 98765 43210",
    "message": "Interested in studying abroad"
  }'

# View all leads
curl http://localhost:8001/api/leads
```

### Test WhatsApp:
Click any "WhatsApp Us" button - should open WhatsApp with:
- Number: +91 94268 75138
- Pre-filled message about Learnopedia services

## 📱 Preview

Your landing page is currently accessible at:
**https://learnopedia-deploy.preview.emergentagent.com**

⚠️ **Note:** This is a PREVIEW URL (not stable for production/ads)

## 🌐 Deploy to Production (Stable URL)

### Option 1: Emergent Native Deployment (Recommended)

**Get your stable, permanent public URL:**

1. **Click the "Deploy" button** in the Emergent interface
2. **Click "Deploy Now"**
3. Wait 10-15 minutes for deployment
4. **You'll receive a stable production URL** (e.g., `yourapp.emergentagent.app`)
5. This URL stays live 24/7 - perfect for ad campaigns
6. Cost: 50 credits per month

**Before deployment:**
- ✅ Add your Resend API key (see Email Configuration above)
- ✅ Test the form submission
- ✅ Verify WhatsApp button works

**After deployment:**
- You can link a custom domain (yoursite.com)
- URL never changes (stable for ads)
- 24/7 availability
- Managed infrastructure

### Option 2: Deploy to Vercel/Netlify (Self-Hosted)

**If you prefer Vercel or Netlify:**

1. **Save to GitHub:**
   - Use Emergent's "Save to GitHub" feature
   - Push this codebase to your GitHub repository

2. **Deploy Frontend to Vercel:**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy from /app/frontend
   cd /app/frontend
   vercel
   ```

3. **Deploy Backend:**
   - Backend needs to be deployed separately (Railway, Render, etc.)
   - Update `REACT_APP_BACKEND_URL` in frontend/.env
   - Redeploy frontend

**Note:** Self-hosting requires more setup and maintenance compared to Emergent's one-click deployment.

## 📊 Features Summary

| Feature | Status |
|---------|--------|
| Hero Section | ✅ Complete |
| Services Section | ✅ Complete |
| Testimonials | ✅ Complete |
| Contact Form | ✅ Complete |
| WhatsApp Integration | ✅ Complete |
| Email Notifications | ⚠️ Needs API Key |
| MongoDB Storage | ✅ Complete |
| Responsive Design | ✅ Complete |
| Deep Purple Branding | ✅ Complete |
| Vibrant Orange CTAs | ✅ Complete |

## 🎯 Next Steps

1. **Add Resend API Key** (see Email Configuration section above)
2. **Test form submission** with your email
3. **Click Deploy** in Emergent for your stable production URL
4. **Launch your ad campaigns** with the permanent URL! 🚀

## 📞 Support

For any questions about deployment or configuration:
- Contact Emergent Support through the platform
- Or reach out to Learnopedia team

---

**Built with ❤️ for Learnopedia - Empowering Global Education Dreams**
