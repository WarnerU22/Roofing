# Appalachian Roofing Website

A production-ready, responsive marketing website for **Appalachian Roofing**, built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Features

- Modern, responsive UI with sticky navigation and mobile menu
- Homepage with hero, image carousel, service highlights, testimonials, and CTA banner
- Dedicated Services, About, and Contact pages
- Contact form ready for backend integration
- SEO-friendly metadata, robots, and sitemap routes
- Optimized image handling via `next/image`
- Vercel-ready project setup

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React icons

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

### 3. Lint the project

```bash
npm run lint
```

### 4. Create a production build

```bash
npm run build
npm run start
```

## Project Structure

```text
src/
  app/
    about/
    contact/
    services/
    globals.css
    layout.tsx
    page.tsx
    robots.ts
    sitemap.ts
  components/
    Footer.tsx
    Header.tsx
    ImageCarousel.tsx
    ServiceCard.tsx
    TestimonialCard.tsx
  data/
    site.ts
```
