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
- Full-width project cards grouped into AI/ML, Systems, Quantum Computing, Games, Infrastructure, and Miscellaneous sections.
- Dynamic project routes at `/projects/[slug]`.
- Static generation for all project slugs from the project list.
- Per-project metadata generated from each project name and description.
- Labeled project links for sources, demos, notebooks, Discord, servers, and presentations, including separate sources for multi-project suites.

---

## Projects Included

- **Self-Hosted LLM & Remote Assistants** - Ollama-hosted gpt-oss:20b on headless Ubuntu, accessed through OpenClaw, OpenCode, and Discord.
- **Aviation Damage Risk Predictor** - ML pipeline for predicting aircraft damage risk from aviation incident records.
- **Pacman AI Project Suite** - AI projects covering search, planning, learning, inference, and classification.
- **Energy-Efficient Graphics API Benchmark** - GPU API efficiency comparison across Vulkan, Direct3D 12, and OpenGL.
- **ARM Visualizer** - Web visualization for AArch64 system components and execution flow.
- **Pintos Operating System** - CS439 projects 1-4 covering kernel threads, user programs, virtual memory, and file systems.
- **Unix Shell** - CS439 project 0 covering command execution, processes, and redirection.
- **Command Interpreter**, **Dynamic Memory Allocator**, **ARM Assembly Programming**, and **Pipelined Processor Emulator** - Four separate CS429 projects.
- **Quantum Optics Research** - VQOL simulations and Python analysis of quantum states and Bell-CHSH correlations.
- **Cloud Scheduler Simulator** - C++ cloud scheduling and distributed resource simulation project.
- **QARDS - THE Quantum Card Game** - Quantum-inspired card game built with Python, Qiskit, and PySide6.
- **3D Physics Simulator**, **Mac Switch Mods**, and **2D Platformer** - Interactive simulation, assembly-based mods, and a Unity game.
- **Self-Hosted Gitea Server** - Git hosting on a headless Ubuntu home server with SSH and Tailscale access.
- **Tau** - Discord bot for math utilities.
- **This Portfolio!** - The website in this repository.

---

## Pages

- `/` - Main portfolio homepage.
- `/projects/[slug]` - Per-project pages generated from `src/lib/Bio.tsx`.

Per-project pages contain a description, technology and skill tags, and a configurable list of labeled links. Richer dedicated writeups, images, case studies, and project-specific layouts still need to be added.

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
- project names, slugs, descriptions, technology/skill tags, and labeled links

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
      links: [
        { label: "Source", href: "https://github.com/your-name/your-project" },
        { label: "Live", href: null },
      ],
    },
  ],
},
```

List and project order follow the arrays. Use a unique name for each list and a
unique slug for each project. The combined `projects` export is derived
automatically, so new lists also supply project pages and metadata without any
changes to the page components.

Each project's `links` array controls its buttons. Use unique labels within a
project, such as `Source`, `P1: Threads - Source`, `Discord Server`, or
`Gitea Server`. Set `href` to the actual URL to enable a link; `null`, an empty
string, or whitespace leaves it disabled. Use `links: []` for no buttons.
Never use `#` as a placeholder URL. The old `sourceHref` and `liveHref` fields
have been replaced by this array.

Pintos and Pacman have individual source slots for each subproject. Pacman's
existing shared folder is retained separately as `Project Folder`. New URLs
are intentionally unset, and the quantum archive is not published with the
site. Add your own repository, Discord, server, and presentation URLs when ready.

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
