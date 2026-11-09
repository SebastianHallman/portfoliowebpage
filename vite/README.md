# Archived portfolio — React + Vite

This is the previous implementation of Sebastian Hällman's portfolio. It is **archived and unused**, retained for reference.

The active website lives in [`../next/`](../next/README.md). Follow the [root README](../README.md) to run and maintain the current site.

## Historical setup

This folder has its own `package.json` and lockfile. Its historical commands, run from this directory, are:

| Command | Purpose |
| --- | --- |
| `npm ci` | Install this archive's dependencies |
| `npm run dev` | Start the Vite development server |
| `npm run lint` | Run the archive's ESLint checks |
| `npm run build` | Build the archive into `dist/` |
| `npm run preview` | Preview an existing archive build |

The local `netlify.toml` describes the old SPA deployment. The repository root configuration now builds `next/` instead.

## Archived chatbot

The old portfolio includes a browser-side OpenRouter chatbot. Do not configure it with a provider secret: `VITE_` environment values are exposed to the browser. Reintroducing the chatbot would require server-side credential handling and a fresh review.
