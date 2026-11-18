# Status: read this first in a new session

Branch: `claude/inspiring-allen-2ijetv` in `jjman2321/fodmap` (the isitlowfodmap.com site; the repo can be renamed later).
Start of every session: read this file, then `docs/DECISIONS.md` (it wins over any plan), `docs/LESSONS.md` and `docs/LAUNCH-CHECKLIST.md`.

## Where we are (2026-11-18)
- Interview done; identity picked (direction 1 "Market fresh" + hairline rows); M1 plan approved.
- **M1 built, waiting for owner approval:** home + search, 10 food pages, meal check, Middle Eastern hub, printable list, how-we-check, changes, disclaimer, privacy, terms, sitemap, robots, llms.txt, share images.
- Foods (every number sourced, research in `research/food-facts/`): garlic, sweet potato, avocado, tahini, strawberries, chickpeas, hummus (not lab-tested), pomegranate, lentils, feta.
- Checks: lint, typecheck, 88 tests, axe accessibility 0 issues (8 pages, light + dark), Cloudflare build OK, Worker 1.99 MB gzip (free plan limit 3 MB).
- Screenshots: `docs/designs/m1/` (phone 390×844 + desktop 1280×900, light + dark).
- Not measured yet: Lighthouse speed (planned for M3, median of 3 on phone settings).

## Next
1. ⏳ Owner reviews the M1 screenshots → changes or approval.
2. M2: pick ~100 foods from DataForSEO volumes + the plan mix; research and verify each; build in batches with a 10% manual sample.
3. M3: technical SEO pass, Lighthouse ≥ 95, Cloudflare setup guide, launch (target mid-December).

## How to run locally
```
npm install
npm run check                       # lint + typecheck + tests
SITE_INDEXING=off npx next build && npx next start -p 3000
node scripts/shots.cjs http://localhost:3000 docs/designs/m1   # screenshots
node scripts/a11y.cjs http://localhost:3000                    # accessibility
npx opennextjs-cloudflare build && npx wrangler deploy --dry-run --outdir /tmp/wr   # Worker build + size
```

## Open questions
- DataForSEO top-up ($50 minimum; $0.04 left) for difficulty, top-10 competitors, AI Overviews, UK/AU volumes.
- Facts seen only in search snippets (FODMAP Everyday blocks automated reading): avocado (FODMAP Friendly: no FODMAPs in ripe Hass) and pomegranate (FODMAP Friendly 66 g). Owner to open those two pages on a phone and confirm, or we drop them.

## How the owner likes to work
Plain short language; after every step: what changed + click-through checklist + phone and PC screenshots. Options side by side with scores /10 and a pick, asked with the interactive question picker. Keys never in chat. Usual corrections: "too much text", "looks mid".
