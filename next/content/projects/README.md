# Project files

Each `*.mdx` file here becomes a project. Files that start with `_` (this README’s sibling `_template.mdx`) are ignored by `getProjects()`.

Copy `_template.mdx` to `<slug>.mdx`. The slug is the filename. Homepage cards in `data/projectsData.js` match on `id === slug`.

## Frontmatter

`title`, `summary`, `stack`, `links` (`github` / `live` / `play` and any other URL), `cover`, `featured`, `date`.

## Empty body vs write-up

Whether the file has a detail page is derived from the MDX body. No extra flag.

- **Frontmatter only** (nothing after the closing `---`): listed on `/projects` like any other card. `featured: true` can also show it on the homepage. There is no `/projects/<slug>` route, no sitemap entry, and the card links out (`live`, then `play`, then `github`). No badge or “coming soon” label — same card, different href.
- **Body with content**: same listing card, but it links to `/projects/<slug>`. That slug is statically generated and added to the sitemap.

Comments and headings count as a body. For a listing-only project, delete everything below the frontmatter.
