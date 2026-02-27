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

## Deployment (Vercel)

1. Push this repository to GitHub.
2. In Vercel, click **New Project** and import the repository.
3. Framework preset should auto-detect as **Next.js**.
4. Keep default build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
5. Click **Deploy**.

## Customization Notes

- Replace Unsplash placeholder image URLs in `src/data/site.ts` and page files as needed.
- Update contact details and social links in `src/data/site.ts` and `src/components/Footer.tsx`.
- Connect the contact form in `src/app/contact/page.tsx` to your preferred backend/API endpoint.
