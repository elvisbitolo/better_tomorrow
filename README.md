# Better Tomorrow School — website

Single-page site for **Better Tomorrow School**, a community school in Vumilia Slum, Donholm, Embakasi East, Nairobi County, Kenya.

- Founded **2019**
- Around **350 children**, playgroup through **Grade 6** (ages 3–15)
- 10 teachers, 13 staff in total
- Programs: quality education, feeding programme, guiding & counselling, community clean-ups
- Funded by the founder, friends and small termly contributions from parents

## Stack

| | |
|---|---|
| Framework | Next.js 16.4 (App Router) + React 19 |
| Language | JavaScript (no TypeScript) |
| Styling | Plain CSS in `src/app/globals.css` (no framework) |
| Output | Static export (`output: 'export'`) → `out/` |
| Hosting | Netlify (static), config in `netlify.toml` |

Because the build is a static export, there is no server: `next start` and SSR features are unavailable. `next/image` runs with `unoptimized: true`, so images ship as the files in `public/photos/`.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # static export into out/
npm run lint     # eslint
```

## Project structure

```
src/app/
  layout.js      # root layout: header/nav, footer, metadata, JSON-LD
  page.js        # the whole single page (hero, about, programs, gallery, get involved)
  globals.css    # design tokens + all component styles
public/
  photos/        # 18 photographs + logo.jpeg (also used as favicon)
netlify.toml     # build command, publish dir, cache headers
next.config.mjs  # output: 'export', images.unoptimized
```

Sections: hero → stats → about → four programs → photo gallery → get involved → footer contact.

## Deploying to Netlify

```bash
npx netlify-cli login
npx netlify-cli sites:create --name better-tomorrow-school
npx netlify-cli link --id <site-id>
npx netlify-cli deploy --dir=out --prod
```

Site name determines the domain: `better-tomorrow-school.netlify.app`.

If the Netlify build fails complaining about the Next.js runtime, turn it off — this project publishes plain static files:

> Site settings → Build & deploy → **Enable Next.js runtime** → off

Alternatively, drag the built `out/` folder onto [app.netlify.com/drop](https://app.netlify.com/drop) (skips the cache headers defined in `netlify.toml`).

## Photos and credits

All images live in `public/photos/` and were collected from public sources:

| Source | Files |
|---|---|
| HeyLocals — "Childcare in Nairobi" project page | `heylocals-*` (hero, description, why-participate, weekend, poster) |
| CIVS Kenya project page | `civs-better-tomorrow.jpg` |
| volunteering.at (Grenzenlos) | `volunteering-at-*.jpg` |
| YouTube — headmaster speech, morning devotion | `youtube-*-maxresdefault.jpg` |
| School-provided logo | `logo.jpeg` |

Photo credits are shown in the footer. **Confirm usage rights before going live** — the Facebook photo album could not be retrieved (blocked to automated access), so the gallery does not yet contain the school's own album.

## Open content items

- Phone / email are not published anywhere yet — the footer routes contact to Facebook
- Pupil numbers conflict across sources (290 in one CIVS listing, 350 elsewhere); the site currently says 350
- `metadataBase` is unset in `src/app/layout.js`, so Open Graph images resolve to `localhost` until a production domain is added
- `out/photos` is ~5.4 MB; `sharp` is already installed if you want to downscale and recompress
