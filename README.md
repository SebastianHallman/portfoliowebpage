# Sebastian Hällman — Portfolio

Personal portfolio and blog for myself.

Website: [sebastianhallman.com](https://sebastianhallman.com)

## Features

- **Personal portfolio:** an introduction, skills, work experience, and contact links.
- **Project showcase:** featured projects and an expandable archive, with screenshots, technology tags, collaborators, and links to demos, source code, and articles.
- **Project details and write-ups:** quick previews in dialogs, plus dedicated MDX pages for longer project stories.
- **MDX blog:** posts with images, categories, publication dates, and syntax-highlighted code examples.
- **Responsive navigation:** a sticky navigation bar, active-section indicators, and a collapsible mobile menu.
- **Keyboard and motion support:** visible focus styles, Escape-to-close controls, focus management in project dialogs, and reduced-motion handling for animations.
- **Page and image transitions:** animated navigation and project previews in supported browsers.
- **Search and sharing metadata:** canonical URLs, Open Graph and Twitter previews, a generated social image, sitemap, and robots route.
- **Resume shortcuts:** `/resume` and `/cv` redirect to the separately maintained resume PDF.
- **File-based content:** update project data and MDX files directly, without an application database or CMS.

## Active app and archive

| Directory | Status | Contents |
| --- | --- | --- |
| [`next/`](next/README.md) | Active | Next.js portfolio, project write-ups, and MDX blog |
| [`vite/`](vite/README.md) | Archived, unused | Previous React/Vite implementation, retained for reference |

Make site changes in `next/`. The two apps have separate dependencies and lockfiles; there is no root npm workspace or root install command.

## Run the active site locally

Use npm and a supported Node.js LTS release that meets Next.js's engine requirement (currently `>=20.9.0`). From the repository root:

```sh
cd next
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). See the [active app guide](next/README.md) for build commands and content locations.

## Deployment

The root [`netlify.toml`](netlify.toml) configures `next/` as the build base, `npm run build` as the build command, and `.next` as the publish directory. The archived Vite configuration is not used by this root configuration.

## Environment files

The active app currently requires no application API keys or database credentials. `.env*` files are ignored throughout the repository, including example files. Keep credentials out of source files and browser bundles; document variable names with placeholder values if configuration is added later.

## License

The original application code, build configuration, and technical documentation in this repository are licensed under the [MIT License](LICENSE).

The MIT license does **not** cover my blog posts, project write-ups, photographs, screenshots, personal portfolio text, or personal branding, including content embedded in source/data files. This includes the content in `next/posts/`, `next/content/projects/`, and `vite/src/posts/`, and the images in either app. All rights to my excluded content are reserved unless stated otherwise; contact me before reusing it.

Third-party code, fonts, images, logos, and other assets remain subject to their owners' licenses and permissions. Bundled Fraunces fonts include their [SIL Open Font License](next/assets/fonts/OFL.txt); dependency licenses remain with their respective packages. This repository's MIT license does not grant additional rights to third-party material.
