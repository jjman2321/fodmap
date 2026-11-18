# M1: Foundation + clickable designs (waiting for owner OK)

**Goal:** real Next.js pages with real, sourced data for a few foods, screenshotted on phone and desktop, for your approval. After approval, M2 fills ~100 foods and M3 does the launch SEO.

## 1. What gets built in M1
| Page | Address | Notes |
|---|---|---|
| Home + checker | `/` | Search box first, portion slider, meal stacker, swap finder |
| Food page | `/food/garlic`, `/food/sweet-potato` (+3 more seed foods) | The template every food uses |
| Region hub | `/region/middle-eastern` | Foods, eating-out tips, links into each food |
| Printable list | `/printable` | Print-friendly page + PDF, email box after the list |
| Quiet pages | `/how-we-check`, `/changes`, `/disclaimer`, `/privacy`, `/terms` | Short, numbered sections |

Seed foods (each tests a different case): **garlic** (high at any tested amount), **sweet potato** (3 zones), **avocado** (retested 2024: "what changed"), **tahini** (Middle Eastern, few sources), **strawberries** (sources disagree: 140 g → 65 g).

## 2. One food record (typed, checked with Zod at build)
About 25 fields per food, in `src/data/foods/<slug>.ts`:
- **Identity:** slug, name, aliases (US/UK/AU names), category, regions, forms (raw, cooked, canned, oil…), illustration.
- **Answer:** evidence tier (`lab-tested` / `depends-on-amount` / `high` / `estimated` / `unknown`), zones in grams (low up to, moderate from, high from) per form, FODMAP groups, household measure per gram.
- **Proof:** sources (paper with DOI, public statement with URL, or dataset), year tested, date we checked, and disagreements (source A vs B, what changed, when).
- **Help:** swaps (other food slugs), stacking group (computed), regional and cuisine notes, 3–5 FAQs from real searches.
- **Nutrition:** USDA FoodData Central id → fibre and kcal per 100 g (public domain).
- **History:** published date, checked date, changelog entries (feed `/changes`).

**Hard rules in code:**
- No `low` verdict unless the tier is lab-tested.
- `estimated` foods can say "probably high", never "low".
- Every number needs a source id, or the build fails.

## 3. The food page template (top to bottom)
1. H1 "Is sweet potato low FODMAP?" + illustration.
2. **Answer card:** verdict chip + one sentence in grams + household measure + FODMAP group. This is the first ~50 words, written for Google's AI Overviews and ChatGPT to quote.
3. **Portion slider** on the green/amber/red bar (small interactive island; the numbers are also in plain HTML for crawlers).
4. **Try instead** swaps, then **Add to a meal check**.
5. Hairline rows:
   - forms table (raw/cooked/…)
   - sources disagree / what changed
   - stacking note (foods that share the group)
   - the 3 diet phases (one line)
   - sources with dates
6. "See a doctor first if…" box (key pages), FAQs, 5–15 links to related foods (same group, same region, swaps), then the hub.
7. Footer: disclaimer line, "Not affiliated with Monash University or FODMAP Friendly", © Grasp Labs LLC.

## 4. Quality gates (tests that block a page)
- Required fields filled; sources resolve; checked within 90 days (else a banner), 180 days (else noindex).
- **Safe-page test:** at least 50% of visible text unique against sibling pages (5-word shingles, as on DitchSubs), 5–15 internal links, linked from a hub, no orphans.
- One H1, a share image, the footer disclaimer, canonical, title ≤ 60 characters.
- A copy lint bans "cures", "treats", "safe for IBS", "IBS-friendly", "certified", "Monash-approved".
- Before each batch of pages: a manual sample of 10% of the pages; if more than 5% fail, stop and fix.

## 5. SEO built in from page one
- **Structured data:** JSON-LD graph (Organization with corrections policy, WebSite, BreadcrumbList, Article with `citation` and `dateModified`).
- **Crawling:** a sitemap per hub, `llms.txt`, IndexNow on deploy.
- **Checker URLs:** meal-checker states are URL parameters with a canonical link, not new pages.
- **Launch switch:** `SITE_INDEXING=off` until launch.

## 6. Stack (from LESSONS.md)
- **Core:** Next.js 16.4 (App Router, static pages), React 19.3, TypeScript, Tailwind v4.
- **Components:** shadcn only for the search box, slider and dialogs.
- **Fonts:** Outfit + DM Sans, subset, with only the first-screen font preloaded.
- **Hosting:** Cloudflare Workers via OpenNext. Cache Components off, `middleware.ts` (trailing-slash 308, indexing switch).
- **Emails:** D1 for the email list, Resend for the welcome email.
- **Monitoring and text:** Sentry, Cloudflare Web Analytics, UI text in `src/messages/en.json`.
- **Food data:** stays out of the Worker bundle. Pages are prerendered, and the checker loads a small search index as a static file.

## 7. How it's tested
- Before every commit: `npm run lint && npm run typecheck && npm test` (Vitest: data rules, gates, copy lint, link graph).
- Playwright: every page loads, slider and stacker work with a keyboard, axe accessibility pass.
- Lighthouse, mobile, median of 3: target ≥ 95.
- The OpenNext Cloudflare build is run, not just `next build`.
- Screenshots at 390×844 and 1280×900, light and dark, saved in `docs/designs/m1/`.
- Your click-through list goes in `docs/MANUAL-TESTS.md`.

## 8. Not in M1
The ~100-food batch (M2, chosen with DataForSEO data), compare and meal pages, eating-out guides, the DNS move and deploy (end, per your answer).

## Decisions for you
1. OK to build M1 as above?
