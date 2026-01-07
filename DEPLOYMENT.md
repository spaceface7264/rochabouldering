# Cloudflare Pages Deployment Guide

## Quick Start

### 1. Initialize Git Repository

```bash
git init
git add .
git commit -m "Initial commit"
```

### 2. Push to GitHub/GitLab/Bitbucket

```bash
# Create a new repository on GitHub, then:
git remote add origin https://github.com/yourusername/rochabouldering.git
git branch -M main
git push -u origin main
```

### 3. Deploy to Cloudflare Pages

1. **Login to Cloudflare Dashboard**
   - Go to https://dash.cloudflare.com
   - Navigate to **Pages** → **Create a project**

2. **Connect Repository**
   - Click **Connect to Git**
   - Authorize Cloudflare to access your Git provider
   - Select your repository

3. **Configure Build Settings**
   - **Project name:** rochabouldering (or your choice)
   - **Production branch:** main
   - **Framework preset:** None
   - **Build command:** (leave empty)
   - **Build output directory:** `/` (root directory)
   - **Root directory:** `/` (root)

4. **Deploy**
   - Click **Save and Deploy**
   - Wait for deployment to complete (~2 minutes)

### 4. Set Up Custom Domain

1. **In Cloudflare Pages Project:**
   - Go to **Custom domains** tab
   - Click **Set up a custom domain**
   - Enter: `rochabouldering.com`
   - Click **Continue**

2. **DNS Configuration:**
   Cloudflare will automatically add the necessary DNS records:
   - CNAME record: `rochabouldering.com` → `your-project.pages.dev`
   - Or A record if preferred

3. **SSL Certificate:**
   - Cloudflare automatically provisions SSL certificates
   - Wait 5-10 minutes for certificate to be issued
   - Your site will be available at https://rochabouldering.com

### 5. Optional: WWW Redirect

If you want www.rochabouldering.com to redirect to rochabouldering.com:

1. In Cloudflare DNS:
   - Add CNAME: `www` → `rochabouldering.com`
   - Enable **Proxy** (orange cloud)

2. In Cloudflare Pages:
   - Add `www.rochabouldering.com` as custom domain
   - Set up redirect rule (if needed)

## Environment Variables (if needed)

If you add environment variables later:
- Go to **Settings** → **Environment variables**
- Add variables for production/preview

## Continuous Deployment

Cloudflare Pages automatically deploys on every push to your main branch:
- Push to `main` → Automatic deployment
- Preview deployments for pull requests

## Troubleshooting

**Site not loading:**
- Check DNS propagation (can take up to 24 hours)
- Verify SSL certificate is active
- Check Cloudflare Pages deployment logs

**Form not working:**
- Verify Formspree form ID is correct
- Check browser console for errors
- Ensure Formspree account is verified

**Domain issues:**
- Ensure domain is added to Cloudflare (not just DNS)
- Check DNS records are correct
- Verify SSL/TLS mode is set to Full

## Support

- Cloudflare Pages Docs: https://developers.cloudflare.com/pages/
- Cloudflare Community: https://community.cloudflare.com/

