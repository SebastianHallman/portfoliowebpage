# Project files

Each `*.mdx` file here becomes a project. Files that start with `_` (this README’s sibling `_template.mdx`) are ignored by `getProjects()`.

Copy `_template.mdx` to `<slug>.mdx`. The slug is the filename. Homepage cards in `data/projectsData.js` match on `id === slug`.

## Frontmatter

`title`, `summary`, `stack`, `links` (`github` / `live` / `play` and any other URL), `cover`, `imageFit` (`cover` or `contain`, default `cover`), `featured`, `date`.

`cover` is the default for photos. Use `contain` for a logo or screenshot where a 16:9 crop would cut off the artwork. Homepage cards in `data/projectsData.js` use the same `imageFit` field.

## Empty body vs write-up

Whether the file has a detail page is derived from the MDX body. No extra flag.

`/projects` always shows the homepage cards from `data/projectsData.js` (same visuals and modal). An MDX file is optional.

- **No MDX file**: the `projectsData` card still appears. Clicking it opens the same modal as the homepage.
- **Frontmatter only** (nothing after the closing `---`): same card chrome, no “coming soon” badge. `featured: true` can also show a new slug on the homepage if it is not already in `projectsData`. There is no `/projects/<slug>` route, no sitemap entry, and the card links out (`live`, then `play`, then `github`).
- **Body with content**: same card, but it links to `/projects/<slug>`. That slug is statically generated and added to the sitemap.

Comments and headings count as a body. For a listing-only project, delete everything below the frontmatter.
