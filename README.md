# Portfolio — Gurmohit Singh

Personal portfolio website built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.  
Includes a **Fancy** mode (hover glow + sheen + custom cursor on desktop) and a **Simple** fallback mode (minimal/no effects).

---

## Features

- **Two page modes**
  - **Fancy** (`/`): premium project cards (cursor-following glow + sheen) + custom cursor (desktop)
  - **Simple** (`/simple-no-effects`): high-clarity fallback layout with effects disabled
- **Reusable UI components**
  - `ProjectCard` for premium cards
  - `Link` for glowing contact buttons
  - `PageToggle` to switch between modes
- **Content-driven**
  - All portfolio content lives in `src/lib/Bio.tsx` (about, links, projects, etc.)
- **Resume as a static asset**
  - Serve PDF from `public/resume/...` and link as `/resume/...pdf`

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev