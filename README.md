# Neo Junk City Guide

Unofficial English fan guide for [Neo Junk City](https://store.steampowered.com/app/2378230/Neo_Junk_City/) (Steam AppID **2378230**), aimed at **neojunkcity.wiki**.

Not affiliated with Starblade Games, Josh Hano, Valve, or Steam. The site does not sell the game or recover accounts.

## Build

```bash
npm install
npm run dev      # http://localhost:4329
npm run build
npm run preview  # http://localhost:4329
```

Node 22. The build is a static Astro site (`dist/`). `astro.config.mjs` sets `site` to `https://neojunkcity.wiki`.

## Layout

| Layer | Path | Role |
| --- | --- | --- |
| Site config | `sites/neojunkcity/site.config.ts` | Domain, Steam AppID, theme, nav |
| Ads | `sites/neojunkcity/ads.config.ts` | Ad slot left empty for this domain |
| Active site | `sites/active` → `neojunkcity` | What the build reads |
| Framework | `framework/` | Layout, SEO, ad slot |
| Content | `content/neojunkcity/` | Guide pages and JSON |
| Routes | `src/pages/` | Home, guide slug, 404 |

`analytics.gaId` is `G-Z2CVFHMYE5`, so the base layout loads GA4 on content pages. The Adsterra Native Banner after Quick Answer is enabled for this domain. See [ADS.md](ADS.md).

Steam art lives in `public/images/official/steam/` with `ATTRIBUTION.txt`. This repository does not buy a domain, edit DNS, or deploy. Vercel can serve the static `dist/` output.
