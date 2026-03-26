# 🚀 DEPLOYMENT GUIDE - Learnopedia Landing Page

## Quick Summary

Your **Learnopedia landing page** is now fully built and ready for deployment!

✅ **Deep Purple & Vibrant Orange** branding
✅ **WhatsApp button** (https://wa.me/919426875138)
✅ **Email notifications** to office.learnopedia@gmail.com (needs API key)
✅ **All services** displayed (Study Abroad, Career Counseling, etc.)
✅ **Student testimonials** (Taikhum & Malkesh Patel)
✅ **Contact form** with lead capture

---

## 🎯 BEFORE DEPLOYMENT - ACTION REQUIRED

### Add Your Resend API Key (5 minutes)

The email notification system is configured but needs your API key:

**Steps:**

1. Go to https://resend.com and sign up (free tier available)
2. Create an API key in the dashboard
3. Open `/app/backend/.env` file
4. Find this line: `RESEND_API_KEY=re_placeholder_add_your_key_here`
5. Replace with: `RESEND_API_KEY=re_your_actual_key_here`
6. Save the file
7. Restart backend: `sudo supervisorctl restart backend`

**Without this:** Forms will work and save to database, but emails won't be sent.
**With this:** You'll receive email notifications at office.learnopedia@gmail.com for every form submission.

---

## 🌐 HOW TO GET YOUR STABLE PUBLIC URL

### ⭐ Option 1: Emergent Native Deployment (EASIEST & RECOMMENDED)

**This gives you a permanent, stable URL perfect for ad campaigns:**

1. **Click the "Deploy" button** in the Emergent interface (top right)
2. **Click "Deploy Now"**
3. Wait 10-15 minutes for deployment to complete
4. **You'll receive a stable production URL** like:
   - `https://learnopedia.emergentagent.app`
   - OR your custom domain after linking

**Benefits:**
- ✅ Permanent URL (never changes)
- ✅ Perfect for ad campaigns
- ✅ 24/7 availability
- ✅ Managed infrastructure
- ✅ SSL/HTTPS included
- ✅ Can link custom domain
- ✅ One-click deployment
- Cost: 50 credits/month

**This is what you need for stable ad campaigns!**

---

### Option 2: Self-Host on Vercel/Netlify

If you prefer to manage hosting yourself:

**Step 1: Save to GitHub**
- Use Emergent's "Save to GitHub" feature
- This will push all your code to a GitHub repository

**Step 2: Deploy to Vercel**
- Connect your GitHub repo to Vercel
- Deploy the `/app/frontend` directory
- Set environment variables in Vercel dashboard

**Step 3: Deploy Backend**
- Deploy backend to Railway, Render, or similar
- Update `REACT_APP_BACKEND_URL` in frontend
- Redeploy frontend

**Note:** This requires more technical setup compared to Option 1.

---

## ✅ DEPLOYMENT CHECKLIST

Before clicking Deploy, verify:

- [ ] Resend API key added to `/app/backend/.env`
- [ ] Backend restarted after adding API key
- [ ] Test form submission works
- [ ] WhatsApp button opens correctly
- [ ] All images loading properly
- [ ] Contact information is correct

---

## 🧪 TEST YOUR LANDING PAGE

**Current Preview URL:**
https://learnopedia-deploy.preview.emergentagent.com

**Test these features:**

1. **WhatsApp Button**
   - Click any "WhatsApp Us" button
   - Should open WhatsApp to +91 94268 75138
   - Pre-filled message should appear

2. **Contact Form**
   - Fill out the form
   - Submit successfully
   - Check if email arrives at office.learnopedia@gmail.com (if API key added)
   - Lead should be saved to database

3. **Navigation**
   - Click "Our Services" - should scroll
   - Click "Contact Us" - should scroll to form
   - All sections visible and styled correctly

4. **Responsive Design**
   - Test on mobile view
   - Test on tablet view
   - Test on desktop view

---

## 📧 EMAIL NOTIFICATION FORMAT

When someone submits the contact form, you'll receive:

**Subject:** New Lead: [Name] - Learnopedia

**Content:**
- Name
- Email
- Phone Number
- Message
- Submission timestamp

All in a beautifully formatted HTML email with your purple/orange branding.

---

## 🎨 BRAND COLORS USED

- **Primary (Deep Purple):** #7C3AED
- **Accent (Vibrant Orange):** #FF6B35
- **Success (Green for WhatsApp):** #10B981

These match your logo at thelearnopedia.com

---

## 📱 WHAT HAPPENS AFTER DEPLOYMENT

Once you deploy using Emergent Native Deployment:

1. You get a **permanent URL** (e.g., `learnopedia.emergentagent.app`)
2. URL stays live 24/7
3. Perfect for:
   - Google Ads campaigns
   - Facebook/Instagram ads
   - Email marketing
   - Social media profiles
   - Business cards
4. You can add a **custom domain** later (yoursite.com)
5. Can redeploy anytime with updates
6. Can rollback to previous versions

---

## 🚨 TROUBLESHOOTING

**Form not sending emails?**
- Check if Resend API key is added
- Verify backend is restarted
- Check backend logs: `tail -f /var/log/supervisor/backend.err.log`

**WhatsApp not opening?**
- Verify number is correct: +91 94268 75138
- Test on different devices

**Images not loading?**
- Check internet connection
- Verify Unsplash/Pexels URLs are accessible

---

## 💡 RECOMMENDED NEXT STEPS

1. **TODAY:**
   - Add Resend API key
   - Test form submission
   - Click Deploy in Emergent

2. **AFTER DEPLOYMENT:**
   - Save the stable URL
   - Update ad campaigns with new URL
   - Link custom domain (optional)
   - Monitor form submissions via email

3. **ONGOING:**
   - Check emails for new leads
   - Respond to inquiries via WhatsApp
   - Monitor website analytics

---

## 📊 WHAT'S INCLUDED

**Frontend Pages:**
- Landing page with hero section
- Services showcase (4 services)
- Student testimonials (2 testimonials)
- Contact form
- Footer with contact info

**Backend APIs:**
- POST /api/submit-lead (save + email)
- GET /api/leads (view all submissions)
- GET /api/ (health check)

**Integrations:**
- WhatsApp Click-to-Chat
- Resend Email API
- MongoDB database

**Design:**
- Fully responsive
- Modern UI/UX
- Fast loading
- SEO-friendly
- Accessible

---

## 🎉 READY TO LAUNCH?

Your landing page is production-ready! 

**To get your stable public URL:**
👉 **Click the "Deploy" button in Emergent**

That's it! In 10-15 minutes, you'll have a permanent URL perfect for your ad campaigns.

---

**Questions?**
- Contact Emergent Support through the platform
- All technical setup is complete and ready to go! 🚀

**Your stable URL will work perfectly for:**
✅ Google Ads
✅ Facebook/Instagram Ads  
✅ LinkedIn Marketing
✅ Email Campaigns
✅ Social Media Bios
✅ Business Cards
✅ Any marketing materials

**NO MORE PREVIEW LINK ISSUES! 🎯**
