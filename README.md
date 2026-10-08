# Better Tomorrow School

Website for **Better Tomorrow School** — a community school serving children in Vumilia Slum, Donholm, Embakasi East, Nairobi County, Kenya.

## About the school

| | |
|---|---|
| **Founded** | 2019 |
| **Location** | Vumilia Slum, Donholm, Embakasi East, Nairobi County, Kenya |
| **Ages / grades** | 3–15 years · Playgroup through Grade 6 |
| **Roll** | Around 350 pupils |
| **Staff** | 13 (4 men, 9 women), including 10 teachers |
| **Funding** | The founder, friends of the school and small termly contributions from parents |

The school exists so that children in the settlement can learn in a safe place, on a full stomach, with adults who know them by name. Its four standing programs are:

- **Quality education** — the full curriculum from playgroup to Grade 6
- **Feeding programme** — regular meals, often the reason a child stays in class
- **Guiding & counselling** — pastoral care and mentoring
- **Community clean-ups** — clean-up and health drives across the neighbourhood

Volunteer placements are arranged through its partner organisations: [CIVS Kenya](https://civskenya.org/), HeyLocals, [Grenzenlos / volunteering.at](https://volunteering.at/) and Associazione Joint. The school is on [Facebook](https://www.facebook.com/people/Better-Tomorrow-School/100087755767222/).

## The website

A single-page marketing site: hero → key numbers → about → the four programs → photo gallery → get involved → contact footer.

- Fully static, no CMS, no backend, no database
- SEO: title/description, Open Graph tags and `EducationalOrganization` JSON-LD
- Logo doubles as the favicon
- Responsive at 940px and 640px breakpoints

## Tech stack

| Layer | Choice |
|---|---|
| Framework | [Next.js](https://nextjs.org) 16.4 — App Router, Turbopack |
| UI | React 19, React Compiler enabled |
| Language | JavaScript (`src/`), ESLint via `eslint-config-next` |
| Styling | Plain CSS — design tokens and component classes in `src/app/globals.css` (no Tailwind, no CSS-in-JS) |
| Routing | One route: `src/app/page.js` (root layout in `src/app/layout.js`) |
| Images | `next/image` with `images.unoptimized: true`; originals in `public/photos/` |
| Build output | Static export (`output: 'export'`) → `out/` |
| Hosting | Netlify static publish, configured in `netlify.toml` (Node 22, cache headers) |

Because the build is a static export there is no server: `next start` and SSR/server-only features are unavailable, and `next build` writes a plain HTML/CSS/JS site to `out/`.

> **Config note:** `cacheComponents` and `partialPrefetching` are set to `false` — PPR cannot run in export mode. Both were `true` in the starter template.

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
  page.js        # the full single page
  globals.css    # design tokens + all component styles
  robots.js      # robots.txt (allow all + sitemap URL)
  sitemap.js     # sitemap.xml
  favicon.ico    # logo as favicon (16/32/48) + icon.png + apple-icon.png
src/lib/
  site.js        # site URL, WhatsApp number, shared links
src/components/
  SiteNav.js     # responsive header with hamburger menu
  WhatsAppWidget.js  # floating WhatsApp chat button
scripts/
  indexnow.mjs   # pings Bing/Yandex with the site URL after each build
public/
  photos/        # 19 photographs including logo.jpeg (favicon source)
  <key>.txt      # IndexNow verification key (do not rename or delete)
netlify.toml     # build command, publish dir, cache headers
next.config.mjs  # output: 'export', images.unoptimized
README.md
```

## Deploying

Netlify builds from `main` with `npm run build` and publishes `out/`.

```bash
npx netlify-cli login
npx netlify-cli sites:create --name better-tomorrow-school
npx netlify-cli link --id <site-id>
npx netlify-cli deploy --dir=out --prod
```

The site name sets the domain: `better-tomorrow-school.netlify.app`.

If the deploy 404s after a successful build, Netlify's Next.js Runtime is fighting the static export — turn it off under **Site settings → Build & deploy → Enable Next.js runtime**. Drag-and-drop of the `out/` folder also works, but skips the cache headers in `netlify.toml`.

## SEO and Google Search Console

All SEO URLs come from one constant: `SITE_URL` in `src/lib/site.js` (currently `https://better-tomorrow-school.netlify.app`). If the site name or domain changes, edit that file and rebuild.

| Item | Where |
|---|---|
| Canonical URL | `alternates.canonical` in `src/app/layout.js` |
| `metadataBase` | `src/app/layout.js` — absolute URLs for OG/Twitter images |
| `sitemap.xml` | `src/app/sitemap.js` → `out/sitemap.xml` |
| `robots.txt` | `src/app/robots.js` → `out/robots.txt` (allows all, points at sitemap) |
| Google verification | `verification.google` in `src/app/layout.js` |
| Favicon + app icons | `src/app/favicon.ico`, `icon.png`, `apple-icon.png` (generated from `public/photos/logo.jpeg`) |
| Structured data | `EducationalOrganization` JSON-LD in `src/app/layout.js` |
| Open Graph + Twitter cards | `openGraph` / `twitter` metadata |
| IndexNow (Bing/Yandex) | `public/<key>.txt` + `scripts/indexnow.mjs`, pinged by `postbuild` |

To verify in Search Console: add the property as **URL prefix** `https://better-tomorrow-school.netlify.app`, then either re-check the HTML tag (it is already in the page `<head>`) or use DNS. After that, submit `https://better-tomorrow-school.netlify.app/sitemap.xml`.

### Bing / IndexNow

1. Open [bing.com/webmasters](https://www.bing.com/webmasters) → **Add site** → easiest is **Import from Google Search Console** (auto-verifies, no extra tag needed). Manual alternatives: an `msvalidate.01` meta tag or a `CNAME` DNS record.
2. Submit `https://better-tomorrow-school.netlify.app/sitemap.xml` under **Sitemaps**.
3. Every build now pings IndexNow (`postbuild` → `scripts/indexnow.mjs`), which tells Bing the URL changed; it returned `202 Accepted` when last run. Run it manually with `npm run indexnow`.
4. If URL Inspection reports **Blocked** while robots.txt allows all and the page returns 200 to `bingbot`, Bing has not finished evaluating it yet — use **Request indexing** on that URL and re-check in a few days.

## Photos and credits

All images are in `public/photos/`:

| Source | Files |
|---|---|
| HeyLocals — "Childcare in Nairobi" project page | `heylocals-*` |
| CIVS Kenya project page | `civs-better-tomorrow.jpg` |
| volunteering.at (Grenzenlos) | `volunteering-at-*.jpg` |
| YouTube — headmaster speech, morning devotion | `youtube-*-maxresdefault.jpg` |
| School logo | `logo.jpeg` |

Credits appear in the footer. **Confirm usage rights before going live** — the school's Facebook photo album could not be retrieved (blocked to automated access), so the gallery does not yet contain the school's own photos.

## Open items

- Contact is WhatsApp (`+254 113 053 129` via the floating widget and footer) and Facebook — no email address published yet
- Pupil numbers conflict across sources (290 in one CIVS listing, 350 elsewhere); the site says 350
- `sitemap.js` hard-codes `lastModified: '2026-10-08'`; bump it when the page content changes
- `public/photos` is ~5.4 MB; `sharp` is already installed if you want to downscale and recompress
