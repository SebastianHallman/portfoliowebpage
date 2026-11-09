# Active portfolio — Next.js

This directory contains the current portfolio and blog for [sebastianhallman.com](https://sebastianhallman.com). The previous Vite implementation in `../vite/` is archived and unused.

The app uses Next.js App Router, React, Tailwind CSS, and repository-authored MDX content. Page typography uses Fraunces and Inter through `next/font`.

## Local development

Use npm and a supported Node.js LTS release that meets the installed Next.js package's engine requirement (currently `>=20.9.0`). Run these commands from this directory:

```sh
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000).

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Run ESLint |
| `npm run build` | Create a production build in `.next/` |
| `npm run start` | Serve an existing production build locally |

The active app currently needs no application API keys or database credentials. Font loading during builds can require network access.

## Editing the site

| Location | Purpose |
| --- | --- |
| `app/` | Page routes, layouts, metadata, robots, and sitemap |
| `components/` | Shared interface and homepage sections |
| `data/projectsData.js` | Portfolio cards, project details, and collaborators |
| `data/workExperienceData.js` | Work history |
| `data/socialLinks.js` | Contact/profile links |
| `posts/*.mdx` | Blog posts, with frontmatter for titles, dates, and previews |
| `content/projects/*.mdx` | Optional project write-ups and additional project listings |
| `public/img/` | Images served at `/img/...` |

For a project write-up, match its filename slug to the card's `id`. Files beginning with `_` in `content/projects/` are excluded from project listings and write-up routes, but remain ordinary repository files. See the [project content guide](content/projects/README.md) and its template for frontmatter and listing behavior.

MDX is executable content: review it as code before building or publishing. Check personal information, image metadata, and asset permissions before adding content. Files in `public/` are publicly served when deployed.

## Deployment

The repository root [`netlify.toml`](../netlify.toml) selects this directory as its base, runs `npm run build`, and sets `.next` as the publish directory. Hosting settings and the live deployment must be checked separately from this configuration file.

The `/resume` and `/cv` redirects are defined in `next.config.ts` and point to a PDF maintained in a separate repository.
