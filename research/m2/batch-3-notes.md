# M2 batch 3 notes (fruit), 2026-11-19

All 20 foods are `tier: "lab-tested"` and pass `Food`/`Source` from `src/data/schema.ts` (checked with tsx). Reused ids: mon-fibre-2021, mon-straw-2021, mon-step1, mon-faq, mon-shop-2025, ff-list, ge-fruits (same URLs as `src/data/sources.ts`). New ids start with `b3-`.

## Read this first: problems for the owner or the lead

1. **Headline verdict "low" on cherries and raisins.** `verdict()` returns "low" when a serving has only `lowMaxG`. Cherries (20 g) and raisins (4 g) have no public moderate or high gram figure, so their pages would show "low" even though Monash and FODMAP Friendly list both as high at a normal serve. The answer text says "Mostly no" / "Only a pinch", but the chip could still mislead. Options: change the verdict logic for tiny low serves, or find a moderate/high figure later. Lemon, cranberries, kiwi, papaya, blueberries and olives also come out "low", which is correct for them.
2. **Newer secondary numbers used where a Monash public number is out of date.** The brief says the main numbers come from the most primary source. I broke that rule in five places, because dietitian sites agree Monash has since retested, and showing the old primary number would put a high amount in green:
   - **grapes:** Monash 2021 post said 6 grapes (32 g) low. Since June 2024, dietitian sites report 2 grapes (11 g green, 10 g red). The 2021 numbers are in `changes`.
   - **mango:** 40 g (2018–2023 listings) → 7 g (Diet vs Disease, late 2024) and moderate from 9 g (George Eats, Aug 2026). No public Monash post on the retest.
   - **raisins:** Monash 2015 said 13 g → 4 g (Diet vs Disease; Karlijn's Kitchen updated Dec 2025).
   - **banana (firm):** Monash 2021 fibre guide said 100 g → 95 g low, 100 g moderate (Diet vs Disease; George Eats Aug 2026). Small change, but 100 g is now on the moderate line.
   - **dried cranberries:** 22 g (Diet vs Disease) chosen over 15 g (Karlijn's Kitchen 2023) and the preliminary 9 g Monash figure from 2015 (a Finnish freeze-dried sample). Low confidence.
   If the owner prefers the strict rule, swap these back to the primary numbers and move the newer ones to `changes`.
3. **Blueberries, papaya, olives use `lowMaxG: 500`.** That is the largest amount dietitian sites say Monash still rates low ("no upper limit"). It's not a standard serve. Each serving has a note saying so. None of the sources names a limiting FODMAP for these three. So the food-level `groups` is `[]`, and the serving uses "fructans" as a placeholder (brief rule), with a note.
4. **Diet vs Disease stacking guide** (`b3-dvd-stacking`) is used a lot. It's a dietitian PDF that lists Monash green serves by FODMAP group (v1.8 Oct 2024, file dated Oct 2025). It isn't on the brief's named list of secondary sites, but it's the only fetched public listing of several post-2023 numbers. Its figures matched Monash's public ones wherever both exist (strawberries 65 g, pineapple 140 g, orange 130 g, kiwi 150 g, cantaloupe 121 vs 120 g).
5. **Archive.org could not be reached** this session (connection reset), so I didn't re-read the 2021 grapes post itself. The 2021 grape figures (32/48/75 g green, 28/42/75 g red) were confirmed on Ward Nutrition's 2022 summary of that post. A search snippet of the Monash post gave the same numbers.

## Per food

| Food | Verdict (computed) | Main grams (low / mod / high) | Confidence | Couldn't verify |
|---|---|---|---|---|
| banana | depends | firm 95 / 100 / –; ripe 37 / 47 / – | medium-high | No public Monash post with the 95 g figure; ripe 47 g moderate is George Eats only. "⅓ banana" for ripe is Monash 2017. |
| grapes | depends | green 11 / 15 / 75; red 10 / 14 / 75 | medium | No primary source for the 2024 retest; "2 grapes" grams come from Season Health (RDN site). Moderate cut-offs are George Eats only. |
| pineapple | depends | 140 / 195 / – | high (low), medium (moderate) | Moderate is 195 g (George Eats 2026) vs 200 g (Karlijn's Kitchen 2024). Canned figures only in a note. |
| blueberries | low | 500 / – / – | medium | No gram figure for the "1 cup" standard serve (FODMAP Everyday snippet says 125 g, not used). Limiting FODMAP unknown. |
| dates | depends | dried 30 / 46 / 61; Medjool 20 / 40 / 60 | medium | All grams secondary (Karlijn's Kitchen 2024, matching the earlier research). Fresh dates: no data. |
| apple | depends | Pink Lady unpeeled 20 / 31 / 200 | medium-high | Granny Smith differs (25 g vs 42 g), so it's in disagreements only. No primary gram figure. |
| raspberries | depends | 60 / 75 / – | high | Moderate 75 g is George Eats only. |
| cherries | **low (misleading, see 1)** | 20 / – / – | low | Only Diet vs Disease gives 20 g. No moderate/high grams anywhere public. FODMAP Friendly: "not FODMAP Friendly". |
| orange | depends | 130 / 152 / – | high (low), medium (moderate) | Moderate 152 g is George Eats only (navel). |
| cantaloupe | depends | 120 / 150 / – | high | No high figure. |
| mango | depends | 7 / 9 / – | medium-low | No primary post on the retest; old high figure (140 g) dropped as stale. FODMAP Friendly's mango result was snippet-only, not used. |
| kiwi | low | green 150; gold 150 | high | Moderate cut-offs (275 g green, 178 g gold, George Eats) are worded ambiguously ("exceed"), so they're kept in disagreements. |
| cranberries | low | dried 22 / – / – | low | Dried figures range from 9 to 22 g. Fresh cranberries: 90 g vs 50 g, so no bar is shown. |
| lemon | low | juice 20 / – / – | medium | 20 g is Monash's example green serve (Step 1 PDF), not a limit. Others report 125–177 g. Whole fruit: no data. |
| papaya | low | 500 / – / – | medium | No standard serve in grams from a fetched source (140 g appears only in search snippets). |
| raisins | **low (misleading, see 1)** | raisins 4; sultanas 7 | medium-low | No moderate/high grams. Karlijn's Kitchen still has 13 g on an older page. |
| honeydew | depends | 90 / 116 / 150 | medium-high | All secondary (Karlijn's Kitchen 2024); George Eats agrees on 116 g moderate. |
| olives | low | 500 / – / – | medium | No public Monash statement; George Eats and Karlijn's Kitchen both say 500 g; FODMAP Friendly lists olives low. Kalamata not tested. |
| coconut | depends | fresh 64 / 96 / –; shredded 30 / – / – | high (fresh low), medium (rest) | Shredded moderate differs (45 g vs 35 g), so it's left null. Fresh: Diet vs Disease says 81 g. |
| watermelon | depends | 18 / 24 / 150 | medium-high | All grams secondary (Karlijn's Kitchen 2024); George Eats agrees on 24 g moderate. "3 teaspoons" is Karlijn's wording. |

## Sources not used (and why)
- fodmapeveryday.com: blocks fetching. Its snippets (banana 95 g, blueberries 125 g, FODMAP Friendly mango) are not cited.
- Gourmend Foods grapes page: says 150 g grapes are low (contradicts every other source), so it's treated as unreliable.
- Web archive: unreachable this session.
- FODMAP Friendly app data: not used directly. Season Health reports FODMAP Friendly grape figures, which appear only in `disagreements`.
