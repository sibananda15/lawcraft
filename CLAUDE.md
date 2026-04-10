# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

- `npm run dev` — Start development server
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — Run ESLint

No test framework is configured.

## Tech Stack

- **Next.js 16** with App Router, React 19, TypeScript (strict mode)
- **Tailwind CSS 4** via PostCSS (no tailwind.config — uses CSS variables in `app/globals.css`)
- Static site — no database, no external APIs, no auth

## Architecture

This is a law firm website for **Lawcraft Advocates** (New Delhi). All content is static, defined in TypeScript data files.

### Key directories

- `app/` — Next.js App Router pages. Dynamic route at `app/practice/[slug]/page.tsx` uses `generateStaticParams` for static generation of all practice area pages.
- `components/` — Organized into `layout/` (Header, Footer, StickyMobileCTA), `sections/` (full-page sections), `content/` (cards/items), and `ui/` (Container, Breadcrumb).
- `data/` — Site configuration and content: `siteConfig.ts` (firm name, phone, WhatsApp), `lawyerProfile.ts`, `practiceAreas.ts` (3 categories, 25+ items with slugs), `whyChoose.ts`.

### Patterns

- **Path alias**: `@/*` maps to project root
- **Fonts**: Inter (body via `--font-body`) and Playfair Display (headings via `--font-heading`), loaded via `next/font/google` in root layout
- **Color scheme**: Dark navy `#0f172a`, gold accent `#b08d57`, stone neutrals. CSS variables `--brand` and `--muted` defined in globals.css
- **Styling**: Inline Tailwind utilities throughout; section-level classes (`.section`, `.section-dark`, `.section-light`, `.section-muted`) in globals.css
- **Responsive**: Mobile-first with `sm`/`md`/`lg` breakpoints. Header has mega menu on desktop, hamburger with collapsible submenu on mobile
- **Practice areas data**: Use `getAllPracticeItems()`, `getPracticeItemBySlug()`, `getPracticeCategoryBySlug()` helpers from `data/practiceAreas.ts`
