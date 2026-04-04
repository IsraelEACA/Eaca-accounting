# EACA Accounting Website

Marketing website and lead-generation platform for Elevare Advisory & Certified Accountants, built with Next.js App Router, TypeScript, Tailwind CSS, and a Resend-powered contact API.

## Overview

This project provides:

- A multi-page public website for accounting and advisory services
- A local-data blog with category filtering and dynamic slug pages
- A contact form that submits to a server route and sends email notifications via Resend
- Shared UI components and motion-based interactions for a consistent, responsive UX

The app primarily uses the App Router (`app/`) for routing, while reusable page compositions live in `pages/` and are re-exported through `exports/exports.tsx`.

## Tech Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS v4
- Radix UI + shadcn-style component primitives
- Framer Motion (animations)
- Resend (email delivery in contact form workflow)
- Vercel Analytics

## Project Structure

```text
.
├── app/
│   ├── (website)/            # Public route entries (home, about, services, etc.)
│   ├── api/contact/route.ts  # Contact form API endpoint
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── container/            # Section-level page components
│   ├── others/               # Cross-page components (e.g. contact form, CTA)
│   ├── ui/                   # Reusable UI primitives
│   └── animations/
├── constant/
│   └── image.ts              # Centralized image exports
├── helpers/
│   ├── homepage.helpers.ts   # Header/footer/service/pricing/static content data
│   └── blog-helpers.tsx      # Blog post metadata and rich JSX content
├── pages/                    # Reusable page compositions consumed by app routes
├── exports/exports.tsx       # Barrel exports for pages/layout components
└── public/                   # Static assets (images, logos, fonts)
```

## Routes

Public website routes:

- `/`
- `/about`
- `/services`
- `/pricing`
- `/blog`
- `/blog/[slug]`
- `/contact`
- `/privacy`
- `/terms-of-use`

API route:

- `POST /api/contact`

## Contact API

`app/api/contact/route.ts` expects JSON in this shape:

```json
{
  "name": "Jane Doe",
  "company": "Example Ltd",
  "email": "jane@example.com",
  "phone": "+44...",
  "service": "tax-planning",
  "message": "Hello..."
}
```

On success, it sends an email notification via Resend and returns:

```json
{ "success": true }
```

## Prerequisites

- Node.js 20+ (recommended for Next.js 16)
- npm or yarn

## Environment Variables

Create a `.env.local` file in the project root:

```bash
RESEND_API_KEY=your_resend_api_key_here
```

Without `RESEND_API_KEY`, the contact API route cannot send email.

## Getting Started

Install dependencies (use one package manager consistently):

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev` - start local development server
- `npm run build` - build production bundle
- `npm run start` - run production server
- `npm run lint` - run ESLint checks

## Content Management Notes

- Header nav, services, pricing plans, and comparison content are defined in `helpers/homepage.helpers.ts`.
- Footer navigation is defined in `helpers/footer-helpers.ts`.
- Blog metadata/content (including slugs and rich article content) is defined in `helpers/blog-helpers.tsx`.
- Static image imports are centralized in `constant/image.ts`.

## Deployment

Typical production flow:

```bash
npm run build
npm run start
```

The project also includes Vercel Analytics integration (`@vercel/analytics`), so deployment to Vercel is straightforward.

## Current Implementation Notes

- `pages/privacy-policy.tsx` and `pages/termsOfuse.tsx` currently contain minimal placeholder content.
- `app/not-found.tsx` is currently a basic placeholder.
- No automated test suite is configured yet.
