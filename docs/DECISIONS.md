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
