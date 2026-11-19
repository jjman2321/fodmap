# Status: read this first in a new session

Branch: `claude/inspiring-allen-2ijetv` in `jjman2321/fodmap` (the isitlowfodmap.com site; the repo can be renamed later).
Start of every session: read this file, then `docs/DECISIONS.md` (it wins over any plan), `docs/LESSONS.md` and `docs/LAUNCH-CHECKLIST.md`.

## Where we are (2026-11-19)
- **M2 done:** 143 foods (10 hand-built + 133 from 7 research batches), 185+ public sources, 10 category hubs, a Middle Eastern hub, home with popular checks + browse by type.
- **Answer types:** Low FODMAP / Small amounts only / Moderate / High / No FODMAPs (or trace lactose) / Usually high, Not tested (estimates) / Lab-tested, amount not public. Milks and drinks in ml. Is/Are titles.
- **Checks:** 1,296 tests; a site crawl of 163 pages (0 problems); axe 0 issues; Worker 2.14 MB gzip (free plan OK).
- **Lighthouse (phone, median of 3):** home 97, food page 97, category 99; accessibility 100; SEO 100 with indexing on.
- **Spot-check:** 28 foods vs Monash's fibre guide: 26 exact, tofu corrected, banana kept (newer retest). See DECISIONS 2026-11-19.
- **Pictures:** only 7 foods have the illustrated pictures; 136 show a letter tile. Needs ~35 Higgsfield credits.

## Next
1. ⏳ Owner reviews M2 (`docs/designs/m2/review-m2.png`) and decides on pictures (Higgsfield top-up) and Greek yogurt (200 g vs 23 g lead).
2. M3 launch: Cloudflare DNS + Workers deploy guide, re-measure speed on the Worker, IndexNow on deploy, legal wording review, D1 email list, Search Console + Bing, then switch indexing on (target mid-December).
3. After launch: X-vs-Y comparison pages and more regional hubs, picked from Search Console data.

## How to run locally
```
npm install
npm run check                       # lint + typecheck + tests
SITE_INDEXING=off npx next build && npx next start -p 3000
node scripts/shots.cjs http://localhost:3000 docs/designs/m1   # screenshots
node scripts/a11y.cjs http://localhost:3000                    # accessibility
node scripts/sitecheck.cjs http://localhost:3000               # crawl: links, H1, canonical, share image
scripts/lighthouse.sh http://localhost:3000 / /food/garlic     # speed, median of 3
npx tsx scripts/import-m2.ts                                   # import research/m2 batches → src/data/generated
npx opennextjs-cloudflare build && npx wrangler deploy --dry-run --outdir /tmp/wr   # Worker build + size
```

## Open questions
- Higgsfield credits are used up (0.08 left). About 35 credits give all 143 foods a picture (0.25 each).
- Greek yogurt: page leads with FODMAP Friendly's public 200 g; Monash data (via George Eats) says 23 g. Lead with the stricter one?
- DataForSEO top-up ($50 minimum; $0.04 left) for difficulty, top-10 competitors, AI Overviews, UK/AU volumes.
- Facts seen only in search snippets (FODMAP Everyday blocks automated reading): avocado (FODMAP Friendly: no FODMAPs in ripe Hass) and pomegranate (FODMAP Friendly 66 g). Owner to open those two pages on a phone and confirm, or we drop them.

## How the owner likes to work
Plain short language; after every step: what changed + click-through checklist + phone and PC screenshots. Options side by side with scores /10 and a pick, asked with the interactive question picker. Keys never in chat. Usual corrections: "too much text", "looks mid".
