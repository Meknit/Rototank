# Rototank Stores — Water Storage Tanks (Kenya)

A fast, animated marketing site for a Kenyan water‑storage tank supplier — browse the full tank range with live prices and order directly over WhatsApp. Built with the Next.js App Router, TypeScript and Tailwind CSS v4, and deployed on Vercel with a custom domain.

🔗 **Live site:** https://www.rototanks.com.ng

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss&logoColor=white)
![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?logo=vercel&logoColor=white)

---

## Features

- **Animated, responsive UI** — staggered hero entrance, scroll‑progress bar, count‑up statistics, an auto‑scrolling industries marquee, and reveal‑on‑scroll sections (powered by **Motion**).
- **Full product catalogue** — 11 tank sizes (1,000L–24,000L) with live prices, a "popular" highlight, and real product photography.
- **WhatsApp‑first ordering** — every product card, the contact form, and floating call/WhatsApp buttons deep‑link to WhatsApp with a pre‑filled message.
- **SEO‑ready** — per‑page metadata, Open Graph tags, `sitemap.xml`, `robots.txt`, and `LocalBusiness` / `FAQPage` JSON‑LD structured data.
- **Accessible & themeable** — semantic markup, keyboard focus states, `prefers-reduced-motion` support, and a centralised design‑token system.
- **Content from one place** — all copy, contacts, products and FAQs live in a single [`lib/site.ts`](lib/site.ts) file.

## Tech stack

| Area | Choice |
|------|--------|
| Framework | Next.js 16 (App Router, React Server Components) |
| Language | TypeScript, React 19 |
| Styling | Tailwind CSS v4 (`@theme` tokens) |
| Animation | Motion (`motion/react`) |
| Icons | lucide-react |
| Fonts | Space Grotesk + Inter (`next/font`) |
| Hosting | Vercel |

## Getting started

```bash
# install dependencies
npm install

# run the dev server
npm run dev
# → http://localhost:3000
```

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # lint
```

## Project structure

```
app/
  layout.tsx        # root layout, metadata, fonts, JSON-LD
  page.tsx          # home (hero, stats, range, products, industries, CTA)
  products/         # full catalogue + prices
  about/ contact/ faq/
  sitemap.ts        # generated sitemap.xml
  robots.ts         # generated robots.txt
components/         # Hero, ProductCard, Navbar, Footer, animated helpers…
lib/site.ts         # single source of truth: copy, contacts, products, FAQs
public/media/       # product & brand photography
```

## Deployment

Deployed on **Vercel** (`next build`, zero config) with a custom domain (`rototanks.com.ng`) and automatic HTTPS. To ship an update:

```bash
npx vercel --prod
```

---

Built by [collinsjuma2000](https://github.com/collinsjuma2000).
