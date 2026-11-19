# M2 batch 5: nuts, seeds and dairy (research notes, 2026-11-19)

The data is in `batch-5.json` (25 sources, 22 foods). It passes `JSON.parse` and the Zod `Food`/`Source` schemas.

## Where the numbers come from
- **Monash's own pages give few grams for nuts and dairy.** The best primary source is the Monash fibre post (`mon-fibre-2021`, 14 Jan 2021). Its table is headed "Low FODMAP Serving Size" and gives almonds 10 nuts (12 g), almond meal ¼ cup (24 g), peanuts 32 nuts (28 g), walnuts 10 halves (30 g), macadamias 20 nuts (40 g), flaxseed 1 tbsp (15 g) and chia 2 tbsp (24 g). Those figures are `servings[0]` for those foods.
- **Dairy primary source:** the Monash lactose post (`mon-lactose-2016`, NUTTAB lactose data). Cheddar 40 g / 2 slices is low (0.04 g lactose). Cottage cheese 36 g is low (0.7 g). Cream cheese 80 g is moderate (2.0 g). Sour cream 125 ml is moderate (3.13 g). Natural yoghurt 170 g is high.
- **High/low verdicts with no grams** come from Monash's high/low food list, its 3-step sheet (2026), its Step 1 PDF and shopping list, and FODMAP Friendly's list.
- **Newer Monash numbers (2025–26)** are only on George Eats (updated Aug 2026), which reports them from the Monash app. I used them only for moderate/high amounts that the primary source doesn't give, or in `changes` and `disagreements`. Each such serving has a note saying so.

## Per food

| Food | Verdict | Main grams | Confidence | Couldn't verify |
|---|---|---|---|---|
| peanut-butter | low | 50 g (2 tbsp); American-style 32 g | medium | No primary gram figure. Grams come from Karlijn's Kitchen and George Eats (both cite Monash). The upper limit has been removed in Monash's data, per GE. The recipe PDFs that use 2 tbsp were seen as search snippets only. |
| almonds | depends | 12 g (10 nuts) low, moderate 25 g | high (12 g), medium (25 g) | GE gives two current low figures on two pages (22 g and 24 g). Monash's Step 1 PDF puts "Almond" in the high column (a usual serve). |
| peanuts | low | 28 g (32 nuts) | high | Group: no source names the FODMAP for peanuts. I used GOS because Monash says nuts' main FODMAPs are GOS and fructans. **Please review.** |
| cashews | depends | 3 g (about 2 nuts) low, high 30 g; activated 16 g | high (verdict), medium (grams) | Grams are secondary only (GE). |
| walnuts | depends | 30 g (10 halves) low, moderate 31 g | high (30 g), medium (31 g) | The "fructans → GOS" change appeared only in a search snippet, so I left it out. GE also lists a second moderate figure at 36 g. |
| pistachios | depends | 5 g (about 7 nuts), moderate 6 g, high 30 g | high (verdict), medium (grams) | Grams are secondary only (GE). These match the 2026-11-18 food-facts research. |
| pumpkin-seeds | depends | 81 g, moderate 82 g | medium | No standard serve. 81 g is GE's "up to" amount. Older snippets said 23 g (2 tbsp) and high at 100 g. Karlijn's Kitchen says 60 g. Snippets were not used. |
| chia-seeds | depends | 24 g (2 tbsp), moderate 37 g | high (24 g), medium (37 g) | none |
| flaxseed | depends | 15 g (1 tbsp), moderate 17 g | high (15 g), medium (17 g) | none |
| sesame-seeds | depends | 51 g, moderate 52 g | medium-low | No standard serve and no primary gram figure. 51 g is GE's "up to" amount. Karlijn's Kitchen says 30 g. |
| macadamia-nuts | low | 40 g (20 nuts) | high | GE says Monash's current serve is 30 g (moderate from 328 g). I left moderate null and put this in `disagreements`. |
| almond-butter | depends | 20 g (1 tbsp), moderate 21 g | medium | Secondary only. The moderate figure differs: GE 21 g, Karlijn's Kitchen 32 g. |
| almond-flour | depends | 24 g (¼ cup almond meal), moderate 39 g | high (24 g), medium (39 g) | Monash tested almond meal; I found no separate figure for fine blanched almond flour. GE gives 33 g and 38 g on two pages. |
| butter | low | 100 g (placeholder, rule 7) | high (verdict) | **Please review.** Monash says butter is "naturally low" / "very low" in lactose but names no portion, so rule 7's 100 g placeholder applies. 100 g is not a normal portion of butter. The Monash app's "1 tbsp (19 g)" appears only in a FODMAP Everyday snippet, so I did not use it. I changed the rule-7 note wording to "Only traces of lactose…" because Monash doesn't say butter has *no* FODMAPs. |
| cottage-cheese | low | 36 g | high | Larger serves aren't rated in public data. Karlijn's Kitchen's 40 g/60 g figures are her own label checks. |
| greek-yogurt | low (two bars) | FODMAP Friendly 200 g (⅘ cup); Monash data (via GE) 23 g, moderate 93 g | medium | **Please review.** Following the brief, FODMAP Friendly's public blog outranks a secondary site, so `servings[0]` = 200 g and the headline says "Low at 200 g". Monash-based data is ~9× stricter. I added it as a second bar and in the answer. If you prefer the cautious figure as the headline, swap the two servings. |
| mozzarella | low | 40 g (about ¼ cup) | medium | Secondary only (GE, Karlijn's Kitchen). |
| parmesan | low | 40 g (normal portion, not a limit) | medium-high | 40 g comes from Karlijn's Kitchen; Monash names hard cheeses without grams. A "500 g" figure appeared only in a commercial snippet and was not used. |
| cheddar | low | 40 g (2 slices) | high | none |
| cream-cheese | depends | 40 g low, moderate 80 g | medium-high | The 40 g low figure is secondary (Karlijn's Kitchen); the 80 g moderate figure is Monash's. |
| sour-cream | estimated ("Depends") | none | medium | The often-quoted "2 tbsp (40 g) low" from Monash appears only in snippets on commercial sites (Casa de Sante etc.). Karlijn's Kitchen has no sour cream page (404). So there's no lab low figure and the tier is `estimated`, with the moderate lactose data in notes. |
| goat-cheese | depends | 40 g soft goat cheese, moderate 250 g | low-medium | Only Karlijn's Kitchen gives these, and it doesn't clearly say they come from Monash. Aged goat cheese is untested. |

## Other notes
- No Monash or FODMAP Friendly app data was read directly. App figures appear only where a dietitian site reports them, and only in `changes` or `disagreements`.
- **New source ids (prefix `b5-`):**
  - b5-mon-highlow, b5-mon-3step, b5-mon-gos-enzyme-2017, b5-mon-dairy-2018, b5-mon-plantswaps-2026
  - b5-ff-lactose-2021
  - b5-ge-nuts, b5-ge-almonds, b5-ge-pb, b5-ge-mozz, b5-ge-yoghurt
  - b5-kk-nuts, b5-kk-pb, b5-kk-butter, b5-kk-cheese
  - b5-alby-nuts, b5-alby-dairy
- `b5-mon-highlow` has the same URL as `MON_FOODLIST` in `research/food-facts/food-facts-2026-11-18.json`. `b5-ge-nuts` has the same URL as `GE_NUTS`.
- `b5-ge-yoghurt` uses the `?p=23797` URL I fetched. The page's own path is `/recipes/low-fodmap-yoghurt-varieties-recipes/`.
- The FODMAP Friendly lactose blog was fetched at `/blogpost/lactose`. The page gives `/blog-posts/lactose/` as its URL, and that is the one stored.
