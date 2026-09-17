# Pratham Goyal — Portfolio

Personal portfolio built with [Astro](https://astro.build). Dark, minimal, single-page.
Inspired by [ankit-roy.netlify.app](https://ankit-roy.netlify.app/) but rewritten from scratch.

## Local dev

```bash
npm install
npm run dev
```

Opens at http://localhost:4321.

## Build

```bash
npm run build
npm run preview
```

## Structure

```
src/
  data/site.ts        # single source of truth — edit content here
  layouts/Base.astro  # HTML shell, fonts, meta
  components/         # Hero, Projects, Stats, Terminal, Skills, ...
  pages/index.astro   # composes the sections
  styles/global.css   # tokens + all styling (no framework)
public/
  favicon.svg
```

## Editing content

Everything user-visible lives in `src/data/site.ts`:

- `site` — name, role, tagline, socials, contact
- `projects` — title, year, status, description, tech, links
- `stats`, `skills`, `experience`, `education`, `achievements`

Add a resume at `public/resume.pdf` so the "Resume ↗" button works.

## Deploy

- **Netlify / Vercel**: connect the repo, framework preset "Astro", done.
- **GitHub Pages**: `npm run build`, publish `dist/`.
