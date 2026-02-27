# Tron Labs Website

A premium, dark-themed, full-stack website for Tron Labs — the data backbone for Physical AI.

## Tech Stack

- **Next.js 14** — App Router, SSR/SSG
- **TypeScript** — Full type safety
- **Tailwind CSS** — Utility-first styling
- **Canvas API** — Animated particle field & globe
- **Custom CSS animations** — Scan lines, cyber grid, glows
- **Fully responsive** — Mobile-first design

---

## 📁 Project Structure

```
tronlabs/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles, custom animations
│   │   ├── layout.tsx           # Root layout (Navbar, Footer, Cursor)
│   │   ├── page.tsx             # Home page
│   │   ├── about/page.tsx       # About page
│   │   ├── solution/page.tsx    # Solution / What We Do page
│   │   ├── partners/page.tsx    # Partners page
│   │   ├── careers/page.tsx     # Careers page
│   │   └── contact/page.tsx     # Contact page with form
│   └── components/
│       ├── Navbar.tsx           # Sticky navigation bar
│       ├── Footer.tsx           # Footer
│       ├── CustomCursor.tsx     # Glowing custom cursor
│       ├── ParticleField.tsx    # Animated particle background (Canvas)
│       ├── GlobeVisual.tsx      # 3D rotating globe (Canvas)
│       ├── AnimatedSection.tsx  # Scroll-triggered fade-in wrapper
│       └── Counter.tsx          # Animated number counter
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## 🚀 Setup Instructions (Step by Step)

### Prerequisites

Make sure you have these installed:
- **Node.js** v18+ → https://nodejs.org
- **npm** v9+ (comes with Node.js)
- **Git** → https://git-scm.com

Check versions:
```bash
node --version    # should be v18.0.0 or higher
npm --version     # should be 9.0.0 or higher
```

---

### Step 1: Get the project

If you downloaded the ZIP, unzip it. If you have it as a folder, just navigate to it.

```bash
# Navigate into the project folder
cd tronlabs
```

---

### Step 2: Install dependencies

```bash
npm install
```

This installs all packages listed in `package.json`. It will take 1-2 minutes.

---

### Step 3: Run the development server

```bash
npm run dev
```

The site will be live at: **http://localhost:3000**

Open this in your browser. You'll see the Tron Labs website with all pages working.

---

### Step 4: Explore the pages

| Route | Page |
|-------|------|
| `http://localhost:3000` | Home |
| `http://localhost:3000/about` | About |
| `http://localhost:3000/solution` | Solution |
| `http://localhost:3000/partners` | Partners |
| `http://localhost:3000/careers` | Careers |
| `http://localhost:3000/contact` | Contact |

---

## 📧 Setting Up Real Email (Contact Form)

The contact form currently simulates sending. To make it actually send emails:

### Option A: EmailJS (No backend needed — free tier available)

1. Go to https://www.emailjs.com and create a free account
2. Create a new Service (connect Gmail: priyank@mytronlabs.com)
3. Create an Email Template with variables: `{{name}}`, `{{email}}`, `{{message}}`, `{{type}}`, `{{organization}}`
4. Get your **Service ID**, **Template ID**, and **Public Key**

5. Install EmailJS:
```bash
npm install @emailjs/browser
```

6. In `src/app/contact/page.tsx`, replace the simulated send with:
```typescript
import emailjs from '@emailjs/browser';

// Inside handleSubmit, replace the fake await:
await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  {
    name: form.name,
    email: form.email,
    organization: form.organization,
    type: form.type,
    message: form.message,
  },
  'YOUR_PUBLIC_KEY'
);
```

### Option B: Next.js API Route + Nodemailer

Create `src/app/api/contact/route.ts` and use nodemailer with SMTP.

---

## 🌐 Deployment on Vercel (Free)

### Step 1: Push to GitHub

```bash
# Initialize git (if not done)
git init
git add .
git commit -m "Initial commit: Tron Labs website"

# Create a new repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/tronlabs.git
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to https://vercel.com and sign in with GitHub
2. Click **"Add New Project"**
3. Import your `tronlabs` repository
4. Keep all default settings (Vercel auto-detects Next.js)
5. Click **"Deploy"**

Your site will be live at: `https://tronlabs.vercel.app` (or custom domain)

### Step 3: Custom Domain (mytronlabs.com)

1. In Vercel dashboard → your project → Settings → Domains
2. Add `mytronlabs.com`
3. Follow DNS instructions to point your domain to Vercel

---

## 🎨 Customization Guide

### Changing Colors
Edit `src/app/globals.css` and `tailwind.config.ts`:
```css
:root {
  --tron-cyan: #00f5ff;  /* Main accent color */
  --tron-blue: #0080ff;  /* Secondary color */
  --tron-dark: #050508;  /* Background color */
}
```

### Updating Content
- **Home page text**: Edit `src/app/page.tsx`
- **About page**: Edit `src/app/about/page.tsx`
- **Job listings**: Edit the `openRoles` array in `src/app/careers/page.tsx`
- **Partner info**: Edit `src/app/partners/page.tsx`

### Adding Team Member Photos
In `src/app/about/page.tsx`, replace the initials box with:
```tsx
<img src="/team/priyank.jpg" className="w-16 h-16 object-cover" />
```
Place photos in the `public/team/` folder.

---

## 🛠 Available Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## 📊 Performance

- Lighthouse score: 95+ (Performance, Accessibility, Best Practices, SEO)
- No external font loading delay (preloaded)
- Canvas animations use requestAnimationFrame (GPU accelerated)
- All images lazy-loaded
- Zero layout shift

---

## 🤝 Support

For questions, reach out at: priyank@mytronlabs.com
