# Avoria - Premium Digital Strategy Agency Website

A cinematic, luxury dark-themed agency website built for maximum impact. Features immersive animations, interactive components, and a premium user experience.

## 🎯 Overview

Avoria is a fully responsive, production-ready website featuring:
- **Immersive Hero Section** with animated particle nebula background
- **Smooth Animations** powered by Framer Motion and GSAP
- **Interactive Components** like ROI calculator, portfolio filters, modals
- **Dark Luxury Design** with electric cyan/magenta accents
- **Glassmorphism UI** for a premium aesthetic
- **Mobile Optimized** with beautiful hamburger navigation
- **Static Export** ready for Cloudflare Pages deployment

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone or download the project
cd avoria

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
avoria/
├── app/
│   ├── layout.tsx           # Root layout with Navigation & Footer
│   ├── page.tsx             # Home page
│   ├── services/page.tsx    # Services page with ROI calculator
│   ├── work/page.tsx        # Portfolio with masonry grid
│   ├── insights/page.tsx    # Blog/insights section
│   ├── about/page.tsx       # About page with story & values
│   ├── contact/page.tsx     # Contact form
│   └── globals.css          # Global styles
├── components/
│   ├── Navigation.tsx       # Header navigation (with logo 7-click easter egg)
│   └── Footer.tsx          # Footer
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json           # TypeScript config
├── next.config.ts          # Next.js config (static export)
└── wrangler.toml           # Cloudflare Pages config
```

## ✨ Key Features

### 🎨 Design System
- **Dark luxury** cinematic aesthetic
- **Gradient text** with cyan/magenta accents
- **Glassmorphism** components
- **Smooth transitions** throughout
- **Responsive grid layouts**

### 🎬 Animations
- Particle nebula background on hero
- Mouse parallax depth effect
- Scroll-triggered reveals
- Smooth page transitions
- Hover states with transforms
- Typing effect on hero text
- Confetti on form submission

### 🛠️ Interactive Elements
- **ROI Calculator** with real-time projections
- **Portfolio Grid** with category filters
- **Modal Case Studies** with project details
- **Newsletter Signup** with confetti animation
- **Contact Form** with success state
- **Expandable Service Cards**

### 🔐 Easter Eggs
- Click logo 7 times → "Avoria Origin" sequence
- Press Ctrl+V on work page → Unlock secret project
- Visit all pages → Unlock "Avoria Vault"

## 🎯 Pages

| Page | Path | Features |
|------|------|----------|
| Home | `/` | Hero, trust bar, services teaser, stats, CTA |
| Services | `/services` | Service pillars, expandable details, ROI calculator |
| Work | `/work` | Masonry portfolio, filter by category, modal case studies |
| Insights | `/insights` | Article grid, reading time, newsletter signup |
| About | `/about` | Founder story, values, timeline, team |
| Contact | `/contact` | Contact form, next steps, calendly embed |

## 🎨 Customization

### Update Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  cyan: { 400: '#22d3ee', 500: '#06b6d4' },
  magenta: { 500: '#ec4899', 600: '#db2777' },
}
```

### Update Copy
All text is in the page components (`app/*/page.tsx`). Edit directly in the `.tsx` files.

### Add Images
Place images in `public/` folder:
```tsx
<img src="/your-image.png" alt="Description" />
```

### Change Domain
1. Update OG image URL in `app/layout.tsx`
2. Connect custom domain in Cloudflare Pages
3. Update email in footer/contact

## 📊 Performance

Target metrics:
- ⚡ Lighthouse: 95+
- 🎯 Core Web Vitals: All Green
- 📱 Mobile: Fully responsive
- 🌐 SEO: Schema markup ready

## 🚀 Deployment

### Cloudflare Pages (Recommended)

1. **Push to GitHub**:
```bash
git init
git add .
git commit -m "Initial commit"
git push -u origin main
```

2. **Connect to Cloudflare**:
- Dashboard → Pages → Create project
- Select your GitHub repo
- Build settings:
  - Command: `npm run build`
  - Output: `out`
- Deploy!

3. **Add Custom Domain**:
- Project settings → Custom domain
- Follow DNS setup

### Manual Deployment

```bash
npm run build
wrangler pages deploy out --project-name avoria
```

## 📦 Tech Stack

- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Framer Motion 12** - React animations
- **GSAP 3** - Advanced animations
- **Three.js** - 3D graphics (ready to implement)
- **Vanilla Tilt** - 3D tilt effects

## 🔧 Environment Setup

Create `.env.local` for development:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

For production, update in `app/layout.tsx` OG tags.

## 📈 SEO Checklist

- ✅ Meta tags and descriptions
- ✅ Open Graph setup
- ✅ Mobile responsive
- ✅ Fast loading (static export)
- ✅ Semantic HTML
- ⚪ Google Analytics (add as needed)
- ⚪ Sitemap.xml (auto-generated by Next.js)
- ⚪ Schema markup (add JSON-LD for services)

## 🐛 Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Build errors with animations?**
- Framer Motion and GSAP are all Client components
- Use `'use client'` directive at top of animated components
- Already configured in all component files

**Static export issues?**
- All pages are static (no dynamic routes)
- Images use `unoptimized={true}` in Image component
- Client-side only features (modals, forms) work fine

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP Docs](https://gsap.com/docs/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)

## 📝 License

Built for Avoria. Customize and deploy as needed.

## 🚀 Ready to Deploy?

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

---

**Built with ⚡ for premium digital agencies.**
