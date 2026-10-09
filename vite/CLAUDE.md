# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite HMR)
npm run build     # Production build → dist/
npm run preview   # Preview production build
npm run lint      # ESLint
```

No test suite is configured.

## Stack

- **React 19** + **Vite 7** (JSX, no TypeScript)
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin (imported as `@import "tailwindcss"` in `src/index.css`)
- **lucide-react** and **react-icons** for icons

## Architecture

Single-page portfolio. `App.jsx` composes a fixed left sidebar (`SideBar`) and a vertically scroll-snapping main column with five full-screen sections in order: `Hero → About → WorkExperience → Projects → Contact`.

**Layout pattern:** On large screens the sidebar occupies `w-[10%]` fixed on the left; the main content is offset with `lg:ml-[10%]`. On small screens the sidebar becomes a hamburger menu overlay.

**Color palette (reused throughout):**
- Yellow accent: `#DDD92A` / `#EAE151`
- Background: `bg-black` / `bg-slate-950`
- Text: `#FAFDF6`

### Data files (`src/data/`)

All content is stored as plain JS exports — edit these to update site content:

- `projectsData.js` — array of project objects. Each has `id`, `title`, `subtitle`, `tech[]`, `collaborators[]`, `descriptionShort`, `descriptionLong`, optional `dates`, `image`, optional `imagePosition`/`imageScale`, and `links` (`demo`, `repo`, `article`, `site`). Only non-empty link values are rendered.
- `workExperienceData.js` — array of work entries with `id`, `company`, `role`, `dates`, `description`.
- `socialLinks.js` — array of `{ id, label, href, Icon }` entries used in the sidebar and contact sections.

### Static assets

- `src/assets/` — images imported directly into JS (bundled by Vite).
- `public/img/` — images referenced by URL string (e.g. `'/img/thesis.jpg'`); use this for larger files that shouldn't be inlined.

### Projects flow

`Projects.jsx` manages `selectedProject` state, renders `ProjectCard` components from `projectsData`, and opens a `ProjectModal` when a card is clicked. The modal closes on backdrop click or `Escape` key.
