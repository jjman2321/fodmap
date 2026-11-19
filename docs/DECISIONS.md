# Decisions

Every owner answer goes here, quoted and dated. **This file wins over any plan** where they differ.
Format: `## Topic (owner, YYYY-MM-DD)`, then the owner's words, then what it means. Mark old entries "superseded by…" instead of deleting them.

---

## 0. Fixed by the project brief (owner, 2026-11-18)

Source: `MMTEST/research/ibs-app-2026-11/ISITLOWFODMAP-NEW-CHAT-PROMPT.md` (branch `claude/vigilant-ritchie-oyu33k`).

- **What:** isitlowfodmap.com, **website only, no app yet**. Domain owned since 2026-11-08 (registered at Spaceship).
- **Goal:** the #1 result for every "is X low FODMAP" search, for single foods and common combos from every region, and cited in AI answers (ChatGPT, Google AI Overviews, Perplexity).
- **Stack:** Next.js App Router, TypeScript, Tailwind, shadcn/ui, static generation for food pages, Cloudflare Workers via OpenNext, data in typed repo files (no live DB in v1), cookieless analytics + Sentry, all UI text in translation files (English first, Arabic later), `SITE_INDEXING=off` until launch day, Lighthouse ≥ 95 mobile, Zod + Vitest, lint + typecheck + tests before every commit.
- **Data rules (non-negotiable):**
  - Never copy Monash's or FODMAP Friendly's databases; never use "Monash", "Certified" or "FODMAP Friendly" as our claim, or their logos.
  - Core data: published lab papers with DOIs, USDA FoodData Central (public domain), Open Food Facts (ODbL, with attribution).
  - Every food page shows grams for low / moderate / high, the FODMAP group, source + test date, source disagreements with "what changed", a stacking note and the 3 diet phases. Never a bare yes/no.
  - Foods without lab data are labelled "estimated from ingredients" with uncertainty shown; they may say "probably high", never "low".
  - Combos/meals: stacking worked out from each ingredient, labelled as an estimate, linked to each ingredient.
  - Education, not diagnosis. A "see a dietitian / doctor" box. Name a reviewer only if they really reviewed the page. No fake experts or reviews.
- **SEO:** avoid scaled-content abuse. Phase 1 = 100–150 excellent pages; grow in batches only after quality checks and Search Console data. Regional collections are the moat. Structure: `/food/<slug>`, category + region hubs, comparison pages, meal/combo pages, an interactive checker (search + portion slider), printable lists, a "what changed" changelog. Short answers at the top, honest structured data, `llms.txt`.
- **Competitors to beat (never copy their text):** Fig (foodisgood.com), FODMAP Everyday, Gourmend, Casa de Sante, Karlijn's Kitchen, George Eats.
- **Look:** clean, calm, trustworthy food-science look. Signature piece: a portion traffic-light diagram per food (green / amber / red by grams), FODMAP-group icons, simple charts. Original illustrations only; no stock photos.
- **Process:** interview (15–20 questions, 5 at a time) → 3 identity directions side by side with scores → `docs/plans/M1-foundation.md` and wait for OK → clickable designs (home + checker, garlic, Middle Eastern hub, printable list) and wait for approval → build.
- **How the owner works:** plain language, click-through checklist + screenshots after every step, keys never in chat, options side by side with honest scores /10 and a pick. Usual corrections: "too much text", "looks mid".

---

## Interview answers

_(Added below as the owner answers, batch by batch.)_

## Look and feel references (owner, 2026-11-18)
Owner: "from mobbin i like monarch, tripadvisor, givingli, mindtrip, buy me a coffee, lassie, ease etc but make sure everything fits our icp and target audience".
- What these share (checked on Mobbin): warm off-white or white backgrounds, lots of space, one confident accent colour, rounded cards and pill chips, a search box as the hero (Tripadvisor, Mindtrip), a soft serif headline over a clean sans body (Monarch), friendly flat illustration (Lassie, Givingli, Buy Me a Coffee).
- Fit to the audience: the main reader is a woman aged 20–45, newly told to "try low FODMAP" and overwhelmed (research track 01, persona B1/B3). So the look should be **warm and reassuring rather than clinical**, with the food-science precision kept in the numbers and diagrams. This replaces option A/B/C from batch 1; the 3 identity directions will all sit inside this warm, friendly, search-first family.
- References: [Monarch](https://mobbin.com/screens/f988984b-caf0-46e4-82d6-cfc2b70ccd15), [Mindtrip explore](https://mobbin.com/screens/fcbb9c94-6246-4c32-a4c1-55784f78426a), [Mindtrip detail](https://mobbin.com/screens/e6ebda06-534d-4104-82e9-8da850243e07), [Tripadvisor](https://mobbin.com/screens/f4cf4e82-4d0b-4e44-95c5-aee2116a697d).

## Owner's name on pages (owner, 2026-11-18)
Owner: "no name". No personal name on any page, byline or About page.
- Risk said once: Google holds health pages to a higher standard and looks for a named author. Owner accepts it.
- How we make up for it: a "How we check foods" methodology page, a source and test date next to every number, a public changelog, and a real dietitian reviewer named only once they truly review pages. The publisher is shown as Grasp Labs LLC.

## Batch 1 answers (owner, 2026-11-18)
- **Traffic-light colours:** "Tuned + shapes + labels". Softer accessible green / amber / red, each with its own shape and a text label ("Low up to 75 g"). Red means "high at this amount", never "bad food".
- **Tone:** "Calm expert friend". Short plain sentences, grams first, says when sources disagree or data is missing.
- **Repo:** "Build in 'fodmap'". Build in `jjman2321/fodmap` (it can be renamed on GitHub later).
- **Name/logo:** owner: "show me #1 + #2? and how to make 10/10". Comparison sheet made: `docs/design-refs/logo/logo-options.png`. Waiting for the pick.

## Batch 2 answers (owner, 2026-11-18)
- **Logo:** owner: "combine the gauge with the lowercase one". The wordmark is `isitlowfodmap` in a bold sans, with the "o" in "low" drawn as an open-bottom green/amber/red portion gauge. The gauge alone is the tab and app icon. Sheet: `docs/design-refs/logo/logo-combined.png`. Colour variant pending (green "low" vs all ink). A pro polish pass comes later (letter fit, 16 px icon, colour-blind check).
- **First ~150 pages:** "Top + Middle East + contested". About 70 most-searched foods, 30 Middle Eastern and Egyptian foods, 20 contested foods, 20 "X vs Y" pages. Final list chosen with DataForSEO data.
- **Dietitian reviewer:** owner: "just cite etc". No reviewer for now. Trust comes from sources next to every number, a methodology page, a changelog and correction links. The reviewer system is built switched off (PeptideTrack pattern) in case one is added later. Said once: weaker for Google on a health topic; owner accepts.
- **Units:** "Grams + household measure". "Low up to 75 g (about ½ cup)". US spelling, with UK/AU names as aliases.

## SEO data (owner, 2026-11-18)
Owner: "also use dataforseo so we know how we can rank so good". The keys already exist in the environment (`DATAFORSEO_LOGIN` / `DATAFORSEO_PASSWORD`). The balance was $0.22 (trial credit) on 2026-11-18. $0.18 was spent on US Google search volumes for 3,000 FODMAP queries. Results go in `research/dataforseo/`.

## Interview format (owner, 2026-11-18)
Owner: "for question do it with the interactive claude questions". Remaining questions are asked with the interactive picker.

## Logo, checker, Monash quotes, DataForSEO: owner unsure (owner, 2026-11-18)
Owner: "not sure tbh research and gimme more ideas" and "u can use higgsfield if needed".
- 6 more logo mark concepts made with Higgsfield (1.5 credits): `docs/design-refs/logo/more-ideas.png`. All avoid traffic-light dots, which Monash's own app uses.
- First US volume finding (DataForSEO, 2026-11-18): about 300 foods get 100+ searches a month each, roughly 200k a month in total. US demand for Middle Eastern foods is small (hummus 1,300, lentils 1,000, pistachio 720, couscous 320, falafel 110, halloumi 40, labneh 30), so the 30 Middle Eastern slots go to the ones with real volume. Data: `research/dataforseo/us-search-volume-2026-11-18.csv`.

## Logo direction (owner, 2026-11-18)
Owner: "dont like it just use the lowercase version it fits our niche and just make it clean and different".
- **Superseded:** the gauge "o" and all 6 icon marks are dropped. The logo is the lowercase wordmark `isitlowfodmap` only, with no separate symbol.
- 6 clean lowercase treatments for the pick: `docs/design-refs/logo/lowercase-options.png`.

## Wordmark chosen (owner, 2026-11-18)
Owner: "i like rounder". The logo is **A3**: `isitlowfodmap` in **Outfit**, with "isit" and "fodmap" at weight 300 in ink (#1E2A23) and "low" at weight 700 in green (#2E8B57; #4CB27A on dark). The tab/app icon is a green rounded tile with "low" in white. Sheet: `docs/design-refs/logo/a-refined.png`. Outfit also becomes the heading font candidate for the identity directions.

## Batch 3 answers (owner, 2026-11-18)
- **Checker at launch:** all four. Portion slider, meal stacker, swap finder, and eating out by cuisine. The cuisine guides tie into the regional hubs.
- **Monash / FODMAP Friendly public statements:** "Yes, short + linked". One attributed sentence per source from public material (blog, papers, press) with a link. Never from their apps. A "Not affiliated with Monash University or FODMAP Friendly" line in the footer, plus links to their apps.
- **Email:** "Free printable list". Email in exchange for the printable low FODMAP list (PDF), shown after the answer, never as a pop-up. Stored in Cloudflare D1, welcome email through Resend.
- **Going live to Google:** "ASAP, ~100 pages". Indexable as soon as the first ~100 pages pass quality checks, aiming for mid-December 2026, before the January diet peak.

## Batch 4 answers (owner, 2026-11-18)
- **Languages:** "English only, decide in 3 mo". US English at launch, all UI text in `src/messages/en.json` from day one. The next language is picked from Search Console data around Feb–Mar 2027, with real reviewed translations only.
- **Analytics:** "Cloudflare Web Analytics". Cookieless, dashboard switch, no banner. Plus Google Search Console, Bing Webmaster Tools, and Sentry for errors.
- **Disclaimer:** "Short + red-flag line". One quiet line per page, a footer line, a short `/disclaimer` page, and a calm "See a doctor first if…" box (bleeding, weight loss without trying, night symptoms, new symptoms after 45–50) on key pages.
- **Domain / Cloudflare:** owner: "we'll do this at the end yeah". The DNS move and Workers connection go in the launch checklist.

## Interview complete (2026-11-18)
19 questions over 4 batches. Next: 3 identity directions side by side (logo, colours, type, sample food page) with scores → owner picks → `docs/plans/M1-foundation.md`.

## Identity direction (owner delegated, 2026-11-18)
Owner: "research and lmk". Claude's call after research, open to owner change: **Direction 1 "Market fresh"**, with one idea borrowed from direction 2.
- **Evidence:** competitor food pages screenshotted at phone size on 2026-11-18 (`research/competitors/`):
  - Fig: a plain grey text box, no grams above the fold.
  - Gourmend and George Eats: editorial serif, which direction 2 would blend into.
  - FODMAP Everyday and Karlijn's Kitchen: photo-heavy blogs with newsletter and supplement pushes.
  - Monash: navy and institutional, with a chat widget.
  - Nobody shows a warm, illustrated page with the answer in grams at the top. That gap is direction 1.
- **Audience fit:** the main reader is anxious and newly told to "try low FODMAP" (track 01). Warm paper, friendly flat food illustrations and a calm green fit better than clinical white.
- **Borrowed from direction 2:** below the answer card, sources, stacking and details use hairline rows instead of more cards, so pages stay uncluttered.
- **Tokens:** paper #FBF8F3, ink #1E2A23, green #2E8B57, amber #E8A93A, coral #DE6B55. Outfit for headings and the wordmark, DM Sans for body. Radius 20 px for cards, pills for chips and buttons. Zones also differ by shape and label (decided earlier).

## M1 plan approved (owner, 2026-11-18)
Owner chose "Yes, build M1". Direction 1 "Market fresh" plus direction 2's hairline rows is confirmed. Build per `docs/plans/M1-foundation.md`.

## M1 review: "looks mid" (owner, 2026-11-19)
Owner picked "Looks mid" on the M1 screenshots. Claude's diagnosis:
1. The answer isn't the hero: the grams sit in a small chip and a paragraph.
2. Pictures repeat: 4 foods share one bowl, and pomegranate reuses the strawberry.
3. The portion bar is thin, with no labels.
4. Every block is the same white card, and the home page is 10 identical rows.

3 food-page hero options were mocked up: `docs/designs/m1-polish/hero-options.png`. A "Big answer" (BitePal/Oura) 9/10, B "Picture header" (Julienne) 8/10, C "Portion plate" 7.5/10. Waiting for the pick.

## Food page hero: A "Big answer" (owner, 2026-11-19)
Owner chose "A Big answer". The grams are the biggest thing on the page ("75 g", household measure beside it), with a thick, labelled, segmented scale under it. Every food gets its own drawing; home and hub are redone in the same style. Based on BitePal and Oura (Mobbin).

## Visuals not clear enough (owner, 2026-11-19)
Owner: "the visuals aren't clear enough as well".
- **New illustration set:** made with Higgsfield (GPT Image 2.6, 0.25 credits each) in one style: thick ink outline, flat fills, cream background, instantly recognisable. Z Image (cheaper) was tested and was less clear. Recraft vector costs 2.5 credits each, too much for ~3,500 foods.
- **Style prompt:** "Flat vector food illustration of …, instantly recognizable. Thick dark ink outline (#1E2A23), simple flat colour fills with one soft shadow tone, no gradients, no text, no plate. Centered on a plain warm cream background (#FBF8F3) with generous empty padding. Friendly modern editorial illustration style, crisp shapes, readable at small sizes."
- **Done:** garlic, chickpeas, sweet potato, avocado, strawberries, tahini, hummus (480 px WebP, 9–20 KB each, `public/art/`).
- **Waiting on Higgsfield credits:** pomegranate, lentils and feta (about 0.75 credits) still use the simple drawings. M2's ~100 foods need about 25 credits.

## Still cluttered, answer not clear (owner, 2026-11-19)
Owner: "nah needs work again feels kinda cluttered and does actual answer the fodmap clearly".
- **Diagnosis:** the page opens with "LOW UP TO 75 g", not a yes/no, and the first screen holds too much (long paragraph, busy bar with a striped part, 3 chips, swaps card, button).
- **Proposal:** a big Yes / No / Small amounts only, one line with the grams, then 3 traffic-light boxes (Low / Moderate / High, each with its grams). Everything else moves below the answer.
- Mock-ups: `docs/designs/m1-clarity/answer-options.png`. Option 1 (3 traffic lights) 9.5/10, option 2 (simple bar) 8/10. Waiting for the pick.

## Answer-first hero: option 1 (owner, 2026-11-19)
Owner chose "1 · 3 traffic lights". The food page top is a big Yes / No (estimated foods get their own word, e.g. "Usually not"), one sentence with the grams, then Low / Moderate / High boxes each with its grams, then one "watch for" line with the source. The portion slider, swaps and details move below. Tiles lead with Yes/No too.

## Verdict must say low or high (owner, 2026-11-19)
Owner: "ppl must understand tho if its high or not etc". The big word is now **Low FODMAP** / **High FODMAP** (estimates: their own word, e.g. "Usually high", and a test blocks "low" in it), not a bare Yes/No. Tiles show "Low"/"High" plus the grams. Foods without lab data hide the portion slider.

## Improve diagrams, cleaner home (owner, 2026-11-19)
Owner: "not bad improve the diagrams and maybe on the home page aswell make it cleaner".
- **Answer boxes:** each gets a bowl that fills with the amount (a third, two thirds, full), so "more food = more FODMAP" reads at a glance.
- **Portion slider:** no stripes (untested is plain grey and labelled), a bigger readout, and tap buttons for the tested amounts.
- **Home:** search plus "try" chips, calmer tiles (picture, name, one Low/High pill), and one quiet row of links instead of extra cards and paragraphs.
