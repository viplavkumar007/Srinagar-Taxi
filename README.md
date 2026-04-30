# Srinagar Taxi Service — Website

A modern, conversion-focused single-page React website for **Srinagar Taxi Service by Aman**.

## Tech Stack
- **React 18** (JavaScript)
- **Vite 5** — build tool
- **Tailwind CSS 3** — styling
- **Framer Motion 11** — animations
- **Lucide React** — icons

## Project Structure
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── ServiceCard.jsx
│   ├── CTA.jsx
│   ├── FAQAccordion.jsx
│   ├── ContactForm.jsx
│   ├── Footer.jsx
│   └── Toast.jsx
├── sections/
│   ├── Services.jsx
│   ├── Destinations.jsx
│   ├── About.jsx
│   ├── Testimonials.jsx
│   ├── FAQ.jsx
│   └── Contact.jsx
├── data/
│   └── siteContent.js   ← All content lives here
├── App.jsx
├── main.jsx
└── index.css
```

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploy to Vercel (Recommended)

1. Push the project to a GitHub repository
2. Go to https://vercel.com and sign in
3. Click **"Add New Project"** → Import your GitHub repo
4. Vercel auto-detects Vite — just click **Deploy**
5. Done! You'll get a live URL instantly.

## Deploy to Netlify

1. Run `npm run build` locally
2. Go to https://netlify.com → **"Add new site"** → **"Deploy manually"**
3. Drag and drop the `dist/` folder
4. Done!

OR connect GitHub: Site settings → Build command: `npm run build`, Publish directory: `dist`

## Customizing Content

All text, contact info, services, testimonials, FAQs, and destinations are in:
```
src/data/siteContent.js
```

Edit this file to update any website content without touching component code.

## Logo
The site uses the logo from: `brand.logoUrl` in `siteContent.js`
Replace with a local file in `/public/logo.png` and update the URL to `/logo.png` for production use.
