# Avoria - Deployment Guide

## Overview
Avoria is a premium digital strategy agency website built with Next.js, Framer Motion, GSAP, and Tailwind CSS. The site is fully static-exportable and ready for Cloudflare Pages deployment.

## Site Features
✨ **Built-in Features:**
- Cinematic dark luxury design with electric cyan/magenta accents
- Responsive particle nebula backgrounds
- Smooth page transitions and scroll animations
- Glassmorphism UI components
- ROI calculator on Services page
- Portfolio grid with modal case studies
- Newsletter signup with animations
- Scroll-triggered animations throughout
- Mobile-optimized hamburger navigation
- Easter eggs (Logo clicks, Ctrl+V for secret project)

## Pages Included
- **Home** (`/`) - Hero with particles, services teaser, results showcase
- **Services** (`/services`) - Detailed service pillars with ROI calculator
- **Work** (`/work`) - Masonry portfolio grid with filters and modals
- **Insights** (`/insights`) - Blog-style articles with newsletter signup
- **About** (`/about`) - Founder story, values, timeline
- **Contact** (`/contact`) - Contact form with success animation

## Deploy to Cloudflare Pages

### Option 1: Git-Based Deployment (Recommended)

1. **Initialize git repo** (if not done):
   ```bash
   git init
   git add .
   git commit -m "Initial Avoria commit"
   ```

2. **Push to GitHub/GitLab**:
   ```bash
   git remote add origin https://github.com/yourusername/avoria.git
   git branch -M main
   git push -u origin main
   ```

3. **Connect to Cloudflare Pages**:
   - Go to Cloudflare Dashboard → Pages
   - Click "Create a project" → "Connect to Git"
   - Select your repository
   - Set build settings:
     - **Build command**: `npm run build`
     - **Build output directory**: `out`
   - Deploy!

### Option 2: Direct Deployment

1. **Build the site**:
   ```bash
   npm run build
   ```

2. **Deploy using Wrangler**:
   ```bash
   npx wrangler pages deploy out --project-name avoria
   ```

3. **Create project first** (if needed):
   - Create project via Cloudflare dashboard
   - Then run deploy command above

## Configuration

### Customize Content
Edit these files to update placeholder content:
- `app/page.tsx` - Home page content, stats, services
- `app/services/page.tsx` - Service descriptions, ROI calculator
- `app/work/page.tsx` - Portfolio projects, case studies
- `app/insights/page.tsx` - Blog articles
- `app/about/page.tsx` - Company story, values, team
- `components/Footer.tsx` - Footer links and social
- `components/Navigation.tsx` - Navigation items

### Custom Domain
1. In Cloudflare Pages → Project Settings
2. Add custom domain
3. Update DNS records (Cloudflare will provide)
4. Update OG image path in `app/layout.tsx` if hosting at custom domain

### Environment Variables
Create `.env.local` for development:
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run start
```

## Performance Optimizations

✅ **Already Implemented:**
- Static HTML export (no server needed)
- Optimized animations with GPU acceleration
- Lazy-loaded images
- Minimal dependencies
- CSS-in-JS optimized
- Zero JavaScript libraries except animations

**Target Metrics:**
- Lighthouse Performance: 95+
- Core Web Vitals: All Green

## Customization

### Colors
Update color values in `tailwind.config.ts`:
- Primary: Cyan (#06b6d4, #22d3ee)
- Secondary: Magenta (#ec4899, #db2777)
- Dark backgrounds: Dark navy/black gradients

### Animations
- Framer Motion: Page transitions, scroll reveals
- GSAP: Advanced animations (hero parallax, counters)
- CSS keyframes: Global animations (glow, pulse)

### Copy
All marketing copy is in the page components. Update copy directly in the `.tsx` files.

## SEO

✅ **Pre-optimized for:**
- Open Graph meta tags
- Mobile responsive
- Fast loading
- Semantic HTML
- Structured data ready (add JSON-LD as needed)

**To enhance SEO:**
1. Add actual brand names and content
2. Create blog content strategy
3. Build backlink profile
4. Monitor Core Web Vitals
5. Add XML sitemap

## Monitoring

After deployment:
1. Check Core Web Vitals in PageSpeed Insights
2. Monitor analytics (add Google Analytics 4)
3. Set up error tracking (Sentry, LogRocket, etc.)
4. Track form submissions

## Support

Built with:
- Next.js 16
- React 19
- Framer Motion 12
- GSAP 3
- Tailwind CSS 4
- TypeScript 5

## Next Steps

1. ✅ Deploy to Cloudflare Pages
2. 🔄 Connect Google Analytics
3. 🔄 Update placeholder content with real company info
4. 🔄 Connect contact form to email service (Resend, SendGrid, etc.)
5. 🔄 Set up blog CMS or static blog updates
6. 🔄 Monitor performance and Core Web Vitals
7. 🔄 Launch marketing campaigns

---

**Site is production-ready!** Deploy and customize to your needs.
