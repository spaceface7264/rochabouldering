# Rocha Bouldering Landing Page

A minimal, modern landing page for rochabouldering.com - B2B chalk and bouldering essentials.

## Features

- Minimal dark gradient background
- Responsive design (desktop and mobile friendly)
- Contact form modal for B2B sales inquiries
- Privacy Policy and Terms of Service pages
- Vanilla HTML/CSS/JavaScript (no frameworks)

## Files

- `index.html` - Main landing page
- `styles.css` - All styling and responsive design
- `script.js` - Form handling and modal functionality
- `privacy.html` - Privacy Policy
- `terms.html` - Terms of Service
- `logo.png` - Company logo
- `boulders-logo.png` - Trust badge logo

## Deployment to Cloudflare Pages

### Prerequisites
1. Cloudflare account (free tier works)
2. Domain: rochabouldering.com
3. Git repository (GitHub, GitLab, or Bitbucket)

### Steps

1. **Push code to Git repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to **Pages** → **Create a project**
   - Connect your Git repository
   - Build settings:
     - **Framework preset:** None
     - **Build command:** (leave empty)
     - **Build output directory:** `/` (root)
   - Click **Save and Deploy**

3. **Custom Domain Setup**
   - In your Cloudflare Pages project, go to **Custom domains**
   - Click **Set up a custom domain**
   - Enter: `rochabouldering.com`
   - Cloudflare will automatically configure DNS

4. **DNS Configuration**
   - In Cloudflare DNS settings for your domain:
     - Ensure `rochabouldering.com` has a CNAME record pointing to your Pages deployment
     - Or use Cloudflare's automatic DNS setup
   - Cloudflare Pages will provide the exact DNS records needed

5. **SSL/TLS**
   - Cloudflare automatically provides SSL certificates
   - Ensure SSL/TLS encryption mode is set to **Full** or **Full (strict)**

### Post-Deployment Checklist
- [ ] Test form submission (Formspree endpoint configured)
- [ ] Verify all links work (Privacy, Terms)
- [ ] Test on mobile devices
- [ ] Check SSL certificate is active
- [ ] Verify domain redirects (www vs non-www)

## Form Configuration

The contact form uses Formspree. Ensure the form ID in `index.html` matches your Formspree form:
- Current form ID: `xpqwvloz`
- Formspree dashboard: https://formspree.io/forms

## Browser Support

Works on all modern browsers (Chrome, Firefox, Safari, Edge).

