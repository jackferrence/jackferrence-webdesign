# Jack Ferrence — Websites for Service Companies in SoCal

A production-ready, fully static marketing website built with Astro and Tailwind CSS. It has no CMS, database, server runtime, or client-side framework payload. The contact form is handled by Netlify Forms.

## Included

- Six public marketing pages: Home, Services, Work, Process, About, and Contact
- Contact success page and custom 404 page
- Mobile-first responsive layout with a sticky tap-to-call bar
- Netlify Forms contact form with a honeypot field
- Per-page title, description, canonical, Open Graph, and X metadata
- `ProfessionalService`, `Service`, and `FAQPage` structured data
- Sitemap, `robots.txt`, `llms.txt`, favicon, and social card
- Netlify build, cache, redirect, and security header configuration
- Build verification for routes, form markup, and structured data

## Stack

- Astro 7
- Tailwind CSS 4 through the official Vite plugin
- TypeScript
- Netlify static hosting and Netlify Forms

## Local development

Requirements: Node.js 22 or newer.

```bash
npm install
npm run dev
```

Astro prints the local URL in the terminal.

## Production checks

```bash
npm run check
npm run build
npm test
```

The production site is written to `dist/`.

## Deploy to Netlify

1. Push this directory to a GitHub, GitLab, or Bitbucket repository.
2. In Netlify, choose **Add new project → Import an existing project**.
3. Select the repository and deploy.

No Netlify settings need to be entered manually. `netlify.toml` supplies:

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 22

After the first deploy, open **Forms** in Netlify. The `contact` form will be detected automatically. Add an email notification in the form settings so Jack receives each submission.

## Launch details to confirm

The project builds without environment variables. Before announcing the site, confirm these centralized details:

1. Contact information in `src/data/site.ts`:
   - Phone: `(702) 817-8753`
   - Email: `jackferrence11@gmail.com`
2. If the final domain is not `https://jackferrence.com`, update:
   - `url` in `src/data/site.ts`
   - `site` in `astro.config.mjs`
   - the sitemap URL in `public/robots.txt`
   - the page URLs in `public/llms.txt`

The centralized values in `src/data/site.ts` feed the header, footer, mobile call bar, contact page, canonical tags, social tags, and structured data.

## Content edits

Reusable business data, packages, bundles, demos, and FAQs live in:

```text
src/data/site.ts
```

Pages live in `src/pages/`. Shared sections and cards live in `src/components/`. Global design tokens and responsive styles live in `src/styles/global.css`.

The projects shown on the Work page are intentionally labeled **Demo build**. Replace them with real project details only when those claims and links can be verified.

## Project structure

```text
.
├── public/
│   ├── favicon.svg
│   ├── llms.txt
│   ├── manifest.webmanifest
│   ├── og-card.png
│   └── robots.txt
├── scripts/
│   └── verify-build.mjs
├── src/
│   ├── components/
│   │   ├── CTASection.astro
│   │   ├── DemoCard.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── MobileCallBar.astro
│   │   ├── PackageCard.astro
│   │   └── PageHero.astro
│   ├── data/
│   │   └── site.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── 404.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── index.astro
│   │   ├── process.astro
│   │   ├── services.astro
│   │   ├── thanks.astro
│   │   └── work.astro
│   └── styles/
│       └── global.css
├── .env.example
├── .gitignore
├── .nvmrc
├── astro.config.mjs
├── netlify.toml
├── package-lock.json
├── package.json
└── tsconfig.json
```

## Notes

- The site intentionally uses a native font stack and no external assets, which keeps it fast and avoids font or image requests from third parties.
- Google Business Profile rankings are never guaranteed in the copy.
- The Netlify form is present in generated static HTML, which is required for form detection.
