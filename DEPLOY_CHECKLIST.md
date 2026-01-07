# Pre-Deployment Checklist

## ✅ Files Ready
- [x] index.html - Main landing page
- [x] styles.css - All styles
- [x] script.js - Form handling
- [x] privacy.html - Privacy Policy
- [x] terms.html - Terms of Service
- [x] logo.png - Company logo
- [x] boulders-logo.png - Trust badge
- [x] .gitignore - Git ignore file
- [x] README.md - Updated with deployment info

## 🔧 Configuration Check

### Formspree
- [x] Form ID configured: `xpqwvloz`
- [x] Verify Formspree account is active
- [x] Test form submission after deployment

### Domain & DNS
- [ ] Domain `rochabouldering.com` registered
- [ ] Domain added to Cloudflare account
- [ ] DNS records configured (Cloudflare will auto-configure)

### Cloudflare Pages Setup
- [ ] Git repository created (GitHub/GitLab/Bitbucket)
- [ ] Code pushed to repository
- [ ] Cloudflare Pages project created
- [ ] Repository connected to Cloudflare Pages
- [ ] Custom domain `rochabouldering.com` added
- [ ] SSL certificate issued (automatic, wait 5-10 min)

## 🚀 Deployment Steps

1. **Initialize Git** (if not done):
   ```bash
   cd "/Users/rami/Code Project/Coding/RochaBC"
   git init
   git add .
   git commit -m "Initial commit - Rocha Bouldering landing page"
   ```

2. **Create GitHub Repository**:
   - Go to github.com
   - Create new repository: `rochabouldering`
   - Don't initialize with README
   - Copy repository URL

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/rochabouldering.git
   git branch -M main
   git push -u origin main
   ```

4. **Deploy to Cloudflare Pages**:
   - Login to https://dash.cloudflare.com
   - Go to **Pages** → **Create a project**
   - Connect GitHub account
   - Select repository: `rochabouldering`
   - Build settings:
     - Framework: None
     - Build command: (empty)
     - Output directory: `/`
   - Click **Save and Deploy**

5. **Add Custom Domain**:
   - In Pages project → **Custom domains**
   - Click **Set up a custom domain**
   - Enter: `rochabouldering.com`
   - Cloudflare will auto-configure DNS

6. **Wait for SSL**:
   - SSL certificate issues automatically
   - Wait 5-10 minutes
   - Site will be live at https://rochabouldering.com

## 🧪 Post-Deployment Testing

- [ ] Homepage loads correctly
- [ ] Logo displays properly
- [ ] "For Gyms" button opens modal
- [ ] Contact form submits successfully
- [ ] Privacy page loads (privacy.html)
- [ ] Terms page loads (terms.html)
- [ ] Footer links work
- [ ] Mobile responsive (test on phone)
- [ ] SSL certificate active (https://)
- [ ] Formspree receives test submission

## 📝 Notes

- Cloudflare Pages is free for unlimited sites
- Automatic deployments on git push
- SSL certificates are free and automatic
- No build process needed (static site)
- Formspree free tier: 50 submissions/month

## 🔗 Useful Links

- Cloudflare Dashboard: https://dash.cloudflare.com
- Formspree Dashboard: https://formspree.io/forms
- Cloudflare Pages Docs: https://developers.cloudflare.com/pages/

