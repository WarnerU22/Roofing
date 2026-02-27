# Appalachian Roofing Website

A modern marketing website for a high-end roof repair company, built for performance, clarity, and production deployment.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS

## Features

- Professional, responsive marketing pages (Home, Services, About, Contact)
- Homepage hero and image slider showcasing roofing work
- Contact page with a structured, backend-ready form
- Sticky navigation with mobile menu
- SEO essentials with metadata, `robots.txt`, and `sitemap.xml`
- Optimized image delivery through `next/image` with external host allow-listing

## Setup

### 1) Install dependencies

```bash
npm install
```

### 2) Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 3) Lint

```bash
npm run lint
```

### 4) Build for production

```bash
npm run build
```

### 5) Start production server locally

```bash
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
