# AGENTS.md

## Deployment

- Deploy from GitHub to Vercel: Vite static build (`dist`), with SPA fallback and cache/ security headers configured in `vercel.json`.
  - Why: Vercel serves the app and has no Apache, so `public/.htaccess` would be dead weight; routing and caching must live in `vercel.json` instead.
- Keep `vercel.json` as the single source of routing/caching rules. Do not reintroduce Apache (`
  .htaccess`) or nginx config files.
- The production domain is `idealnienawymiar.pl`; canonical URLs, `robots.txt` sitemap entry and JSON-LD `url` fields must all use it, never a `*.lovable.app` preview host.
  - Why: mixed hosts split SEO signals between the preview and the real site.

## Environment

- The site currently makes no backend calls, so a Vercel build needs no project environment variables to work. If backend use is added later, set `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` in Vercel project settings (the committed `.env` already carries the same values).
  - Why: the Supabase client reads them at build time; missing values produce a site with a dead backend.


## Content rules

- Marketing copy must stay honest: never claim architectural qualifications or "wieloletnie doświadczenie".
  - Why: the owner is a carpenter who designs and builds custom furniture, and false claims are both a trust and a liability risk.
- Advertising landing pages under `/oferta/...` stay `noindex` and out of the sitemap; indexable service pages live under `/uslugi/...`.
  - Why: paid-traffic pages must not compete with organic pages or dilute the sitemap.
