# Portfolio — Gurmohit Singh

A personal portfolio website showcasing selected projects, experience, and links.

- **Live site:** (add your URL here)
- **Mode toggle:** Fancy ↔ Simple (accessible fallback)

---

## Highlights

- **Fancy UI mode** with premium project cards:
  - cursor-following glow + sheen on hover (desktop)
  - subtle lift/hover transitions
  - custom cursor (desktop only)
- **Simple UI mode** for a clean, no-effects experience
- Content is centralized and easy to update (projects/links/about)

---

## Tech Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS

---

## Pages

- `/` — Fancy mode (effects enabled)
- `/simple-no-effects` — Simple mode (effects disabled)

---

## Updating Content

Portfolio content (about text, links, and project list) is defined in:

- `src/lib/Bio.tsx`

The resume is served as a static file from:

- `public/resume/`

---

## License

Licensed under the **GNU GPLv3**. See `LICENSE` for details.