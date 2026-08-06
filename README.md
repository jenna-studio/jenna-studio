# Jenna Studio

The redesigned portfolio for [jenna-studio.dev](https://jenna-studio.dev),
built with Next.js and exported as a static site for GitHub Pages.

## Prerequisites

- Node.js `>=22.13.0`

## Local development

```bash
npm install
npm run dev
npm run build
```

The development site is available at `http://localhost:3000`. The production
build is written to `out/`.

## Routes

- `/` — homepage and featured work
- `/about/` — biography, education, experience, skills, and journey
- `/projects/` — full project catalog and live GitHub contribution activity
- `/portfolios/` — research, design, tools, music, 3D work, and travel journal
- `/contact/` — Formspree contact form

Legacy `/html/*.html` URLs remain available as redirects so existing links keep
working.

## GitHub Pages deployment

Push to `main` to run `.github/workflows/deploy-pages.yml`. In the repository
settings, select **GitHub Actions** as the Pages source. The static export
includes `public/CNAME` for the `jenna-studio.dev` custom domain.

The project uses root-relative asset paths because it is deployed to a custom
domain. If it is later hosted under a repository subpath, add the matching
`basePath` and `assetPrefix` in `next.config.ts`.

## Commands

- `npm run dev` — start Next.js locally
- `npm run build` — create the static production export
- `npm run lint` — run ESLint
- `npm test` — run the production build check
