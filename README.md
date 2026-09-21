# Portfolio - Gurmohit Singh

A personal portfolio website for showcasing selected software, systems, AI, and simulation projects.

- **Live site:** https://gurmo.vercel.app/
- **Resume:** served from `public/resume/`
- **Project content:** managed in `src/lib/Bio.tsx`

---

## Current Features

- Responsive portfolio homepage with About, links, resume access, email contact, and project cards.
- Animated project cards with cursor-following glow, hover sheen, and subtle lift effects.
- Centralized profile, link, and project data in `src/lib/Bio.tsx`.
- Full-width project cards grouped into AI/ML, Systems, Games, and Miscellaneous sections.
- Dynamic project routes at `/projects/[slug]`.
- Static generation for all project slugs from the project list.
- Per-project metadata generated from each project name and description.
- Source and live-demo buttons on project pages when links are available.

---

## Projects Included

- **Aviation Damage Risk Predictor** - ML pipeline for predicting aircraft damage risk from aviation incident records.
- **Pacman AI Project Suite** - AI projects covering search, planning, learning, inference, and classification.
- **Energy-Efficient Graphics API Benchmark** - GPU API efficiency comparison across Vulkan, Direct3D 12, and OpenGL.
- **ARM Visualizer** - Web visualization for AArch64 system components and execution flow.
- **Cloud Scheduler Simulator** - C++ cloud scheduling and distributed resource simulation project.
- **QARDS - THE Quantum Card Game** - Quantum-inspired card game built with Python, Qiskit, and PySide6.
- **Tau** - Discord bot for math utilities.
- **This Portfolio!** - The website in this repository.

---

## Pages

- `/` - Main portfolio homepage.
- `/projects/[slug]` - Per-project pages generated from `src/lib/Bio.tsx`.

Per-project pages currently exist as basic generated pages with the project description, tech stack, source link, and optional live link. Richer dedicated writeups, images, case studies, and project-specific layouts still need to be added.

---

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS

---

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run linting:

```bash
npm run lint
```

---

## Updating Content

Most portfolio content is defined in:

- `src/lib/Bio.tsx`

Update this file to change:

- name, title, location, email, and about text
- header links
- project names, slugs, descriptions, tech stacks, live links, and source links

Projects are organized in `projectLists`. Each list has a `name` (the homepage
section heading) and a `projects` array. To add a category, add another object
to `projectLists`:

```tsx
{
  name: "New Category",
  projects: [
    {
      slug: "new-project",
      name: "New Project",
      description: "Project description.",
      tech: ["TypeScript"],
      liveHref: null,
      sourceHref: "https://github.com/your-name/your-project",
    },
  ],
},
```

List and project order follow the arrays. Use a unique name for each list and a
unique slug for each project. The combined `projects` export is derived
automatically, so new lists also supply project pages and metadata without any
changes to the page components.

Static resume files live in:

- `public/resume/`

---

## TODO

- Build out richer per-project pages.
- Add project-specific screenshots, diagrams, or demos where appropriate.
- Decide which private or non-public project files should stay behind external access links.
- Improve README/project docs as the site structure settles.

---

## License

Licensed under the **GNU GPLv3**. See `LICENSE` for details.
