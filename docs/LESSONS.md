# Lessons carried over from AnkiDecks, Wird, DitchSubs and PeptideTrack

Read once at the start of a session. Distilled 2026-11-18 from: `wird/docs/LESSONS-FROM-ANKIDECKS.md` (read in full), AnkiDecks branch `claude/happy-bell-qo9u3g`, the DitchSubs **website** (`ditch/web`, `ditch/docs/website/*`, not the app), PeptideTrack (`pepsi`) and Wird. If this file and `docs/DECISIONS.md` disagree, **DECISIONS wins**.

## 1. How the owner works
- Plain, short language. After every step: what changed, a click-through checklist, phone + PC screenshots ("i always mean pc and mobile").
- Choices as **side-by-side screenshots with honest scores /10 and a marked pick**. He answers tersely ("yep", "2+", "add all"). Record every answer in DECISIONS with his words and the date.
- Most common correction: **"too much text"**. Start short: no bylines, "built by" lines, tip rows, proof bullets, founder notes or hero small print. He removed all of these on earlier sites.
- **Push back honestly** on fake reviews, fake counters and untrue claims. Trust lines must be literally true (Ditch changed "checked by hand" to "from each service's own page" because scripts did the checking).
- Keys never in chat: give a "where to add it" box with exact dashboard clicks.
- Approval gates: plan in `docs/plans/` → OK → build. Keep STATUS, DECISIONS, LAUNCH-CHECKLIST and MANUAL-TESTS from day one. No pull requests unless he asks.
- Always reference Mobbin, and say which apps a design borrows from.

## 2. Design preferences
- Liked: warm paper or cream backgrounds, one confident accent, serif headlines over a clean sans, plain rows over heavy cards, lots of space. Mobbin picks across sites: Monarch, Givingli, Tripadvisor, Mindtrip, Lassie, Buy Me a Coffee, Ease, Spellbook, Remote.
- Rejected: gradients, sparkle emoji, stock photos, italic or handwritten words in headings, chat widgets, drawn stamps that "don't fit the vibe", busy pictures, credit lines that aren't required, links to pages that don't exist yet, fake logos or counts.
- Wird's first design got "this is very very very bad, look at mobbin… i want something simple and clean". Research on Mobbin **before** the first design.
- Keep the design system small: few corner radii, at most ~5 elements per section, the accent colour in at most ~3 blocks per page (Ditch `design-system.md`).
- Motion 150–300 ms, transform/opacity only, respects reduced motion. Animations need their own approval.
- Owner wants no personal name on pages (DECISIONS 2026-11-18).

## 3. Stack, confirmed against the repos
- **Next.js 16.4.x** (App Router), React 19.3, `@opennextjs/cloudflare` ^1.20.16, wrangler ^4.15x, Tailwind v4, TypeScript, Zod 4, Vitest + Playwright + axe + Lighthouse (median of 3, phone settings).
- **shadcn/ui** was used only on AnkiDecks. Ditch, PeptideTrack and Wird use hand-written CSS tokens. Here: shadcn only for interactive parts (search, slider, dialogs); food pages stay server-rendered HTML.
- **Analytics:** Cloudflare Web Analytics (cookieless, no banner, dashboard switch, no code) on Ditch and Wird. PostHog only on AnkiDecks.
- **Sentry:** only AnkiDecks (`@sentry/nextjs` via a `worker.ts` wrapper).
- **i18n:** hand-rolled `src/messages/<locale>.json` + `Intl.PluralRules` + a `pageMeta()` helper for canonical/hreflang (Wird). No library.
- Email lists in **D1** ("collect only"), rate-limited with a Workers `ratelimits` binding.

## 4. Cloudflare / OpenNext gotchas
- **Cache Components OFF** (AnkiDecks Worker hung). If ever on, add Ditch's soft-404 worker (404 + noindex for any URL not in the sitemap).
- `open-next.config.ts`: `staticAssetsIncrementalCache` + `enableCacheInterception: true` (pages became near-instant).
- Pages send `Cache-Control: public, max-age=0, must-revalidate` so new deploys show at once.
- `workers_dev: false`, `preview_urls: false` in production (no duplicate addresses). Use `middleware.ts`, not `proxy.ts`. Trailing slash → 308 to one address.
- Worker size: the free plan allows 3 MB compressed. **Never import big food JSON into Worker code**: prerender pages and serve the data as static assets.
- `SITE_INDEXING=off` at build **and** runtime until launch day. `NEXT_PUBLIC_*` variables go in both build and runtime settings; every change needs a "Retry build".
- `staticPageGenerationTimeout: 180`. Move `.env.local` aside before production builds.
- "Last checked" banners computed at build time need a **weekly rebuild** (GitHub Action with `CLOUDFLARE_API_TOKEN`).
- Owner must confirm Cloudflare's "Block AI bots" is **off** by hand; the API can't read it. Allow Googlebot, Bingbot, OAI-SearchBot, Claude-SearchBot, PerplexityBot.
- Free `hello@` / `privacy@` addresses via Cloudflare Email Routing.

## 5. SEO: what worked and what had to be redone
- **A page only exists if it carries facts a searcher can't get in one click elsewhere, every number sourced and dated** (Ditch rule). Ditch measured uniqueness with 5-word shingles: guides at 28% unique text were a P0 finding. Use the 5-point safe-page test (bookmark-worthy, has something no sibling has, ≥50% unique text, linked from a human hub, survives side-by-side).
- **Variants are anchors or URL parameters, not new indexed pages** (PeptideTrack: dose × water → one canonical calculator). Here: portion sizes and forms are sections or slider states on `/food/<slug>`, never their own URLs.
- **Publishing gates in the build:** unverified rows fail the build; 90+ days since checking shows a "may have changed" banner; 180+ days means noindex. Add a test so every template imports the rule (Ditch's price pages forgot).
- Titles ≤ 60 characters, search phrase first, phrased how people search (from autocomplete or DataForSEO, ~$1–2 a month). The H1 stays clean. **Don't shorten headlines "for SEO" without asking** (reverted on AnkiDecks).
- AI crawlers don't run JavaScript: every tool needs a server-rendered answer table and a worked example.
- AI Overviews showed on 17 of 21 checked searches. ChatGPT search leans on Bing → **IndexNow on every deploy** (changed pages only). Contradicting facts across pages get punished: one source of truth per number.
- Structured data: one JSON-LD `@graph` per page (Organization with `publishingPrinciples` / `correctionsPolicy`, WebSite, BreadcrumbList, Article with `citation` and `dateModified` = checked date, `Dataset` on /data). FAQ rich results are gone, but keep FAQs for readers and AI. **No rating or Product markup we don't own.**
- Internal links: Ditch's home passed 0 links to guides. Use footer columns, hubs, two-way links between related pages, and no orphans.
- `llms.txt`: shipped by Ditch and PeptideTrack, skipped by AnkiDecks (no evidence it's used). Cheap, so ship it. Don't add `Content-Signal` to robots.txt (Lighthouse SEO flags it).
- One share image per page (1200×630, key text in the centre square for WhatsApp); a test fails if one is missing. A banned-phrase copy lint fails the build.
- New domains: ~3 months of impressions, first clicks at 3–6 months. Launch in batches.
- Mistakes to avoid: no canonical, a missing share image on key pages, an 89-character title, near-duplicate pages merged twice, licences checked too late, nav links to unbuilt pages, a weak focus ring, poor dark-mode contrast.

## 6. Health-content trust (from PeptideTrack)
- Reviewer system ships **switched off** (`REVIEWERS = []`); reviewer lines and `reviewedBy` markup render nothing until a real person has reviewed. "Never list someone who hasn't actually reviewed the pages." Here the target is a registered dietitian.
- Editorial policy page: source order (lab papers with DOI → regulators/public datasets → public statements by testing bodies), says what kind of study each number comes from, and has an honest AI-use line ("every number is checked against the primary source before publishing").
- Numbered `<Cite n>` superscripts → references list with "accessed" dates. A short-answer box (3–5 facts) at the top is what AI answers quote. `changes` notes feed a public `/changes` log.
- Every page: "Spotted a mistake? Tell us. We aim to fix factual errors within two working days." The link pre-fills the page.
- Voice: answer first, be straight about what isn't known, "check with your dietitian or doctor" (not "consult your healthcare provider"), no "simply" / "easy" / "don't worry". Warnings in a calm amber "Please check" box, never red pop-ups.
- Disclaimer: one line per page, one footer line, a short `/disclaimer`. Here add a red-flag symptoms line (bleeding, weight loss without trying, night symptoms, new symptoms after 45–50) instead of an emergency section.
- No affiliate links on food pages.

## 7. Applied to isitlowfodmap.com
- One typed, sourced food data file (food, serving thresholds, FODMAP groups, source + DOI, tested and checked dates, status) with build gates. Unverified foods never get a page.
- Licences first: Monash / FODMAP Friendly data is off-limits (research track 03). Published papers, USDA FDC (CC0), Open Food Facts (ODbL, attribution, keep tables separate).
- Copy lint bans "cures", "treats", "safe for IBS", "IBS-friendly", "certified", "Monash-approved".
- Day-one tests: one H1 per page, footer disclaimer line on every page, share image per page, no broken internal links, every number has a source, no "low" verdict without lab data.
