# M2 batch 2: research notes (2026-11-19)

23 foods. No app data was used. All numbers trace to a public URL in `batch-2.json`. The file passes `JSON.parse` and the project's Zod `Food` and `Source` schemas. Every cited id exists, and gram fields are in order and within `scaleMaxG`.

## How sources were read
- **Monash public pages** were read directly: blogs, the FAQ, the Step 1 PDF, the 2026 3-step info sheet PDF and the shopping list. I also read the image tables in the 2025 reintroduction blog (downloaded and viewed). Monash's public pages rarely give grams for this batch. The exceptions are the shopping list (75 g serves), the 2026 sheet (zucchini 65 g), the fibre blog (red capsicum 75 g, 2021) and the sauerkraut posts (1 tbsp low, 1 cup high).
- **FODMAP Everyday was readable this time.** A direct HTTPS download returned 200, so its pages were read in full, not as search snippets, and are cited as normal secondary sources. Many main gram numbers come from FE, Karlijn's Kitchen (KK) or George Eats (GE), each reporting Monash data. The serving `note` says so in each case.
- **Rule 4 applied.** `servings[0]` uses the standard serve. "Largest still-low" amounts (GE's 74 g zucchini, 144 g fennel, 195 g edamame, 39 g jalapeño, 500 g chives and KK's 500 g arugula) are in `disagreements`.
- **New source ids** use the `b2-` prefix. These existing ids were reused: mon-shop-2025, mon-fibre-2021, mon-step1, mon-faq, mon-oils-2023, mon-fructans-2020, mon-hummus-blog, muir-2007, molecules-2023, ff-list and ge-beans. They are not repeated in `sources`.
- **"Fructans" as a placeholder group** is used where no source names a group: arugula, ginger, cinnamon, cilantro, basil, cumin and chives. Each serving note says "The source names no FODMAP group."

## Per food

| Food | Verdict | Main grams | Confidence | Not verified / caveats |
|---|---|---|---|---|
| pumpkin | depends | kabocha 75 low / 162 mod / 162→206 high; canned 75/105/128 (⅓ cup) | High | 75 g is on Monash's own page. Moderate and high come from FE and GE (Monash data). Canned pumpkin variety unknown. |
| arugula | low | 35 g (1 cup), trace FODMAPs | Medium | Only FE (2020) gives the 35 g serve. KK gives 500 g max. No current Monash public page. |
| bok-choy | depends | 75 low (Monash) / 100 mod sorbitol | High (75 g); medium (100 g, KK only) | No high amount found. |
| leek | low (leaves) | leaves 75 g (1 cup); white bulb 14 g | Medium | Bulb 14 g is FE only (updated Mar 2026). Monash's diet sheets still list "leek" as high without naming the part, so this is flagged in disagreements. |
| onion | high | brown/white: high from 30 g (FODMAP Friendly via FE); red 10 g low; large pickled 60 g low | Medium | Monash has published no public low serve for white or brown onion. The 30 g high point is FODMAP Friendly's, shown so the bar isn't blank (as with garlic's 3 g). Pickled onion serves vary: 45 g, 60 g and 84 g are all reported. |
| spring-onion | depends | greens 75 g (¾ cup) / 97 g mod fructose; bulb 32 g low | High (greens); medium (bulb) | Bulb 32 g is FE only. One GE page says the greens are "negligible", which conflicts with GE's own 97 g figure. |
| shallots | high | none (no low serve; no public high gram) | High (verdict); n/a grams | All gram fields are null, so the bar shows "untested". Muir's 8.9 g/100 g is via the Molecules review and the ALBY table; the original paper table was not read. |
| fennel | depends | bulb 75 g (¾ cup) / 145 / 195; fronds 15 / 325 / 409 | Medium-high | All from FE (Oct 2024, citing Monash retest). KK confirms 75 g. |
| bell-pepper | depends | green 75 / 250 / 310; red 43 (⅓ cup) / 57 / 75; yellow 35/47/75; orange 38/51/75 | High (green 75, red trio); medium (yellow, orange) | Green 75 g is Monash's own figure. Red's retest is reported by KK and FE. KK gives yellow and orange together as 38/51/75. |
| zucchini | depends | 65 / 75 / 87 | High (65 g from the Monash 2026 sheet); medium (75/87 from FE) | GE reports 74 g max-low (Aug 2026). |
| edamame | low | 75 g | Medium-low | No primary source. Reports conflict: 90 g low and 210 g high (2023–24), 75 g (KK list 2025), up to 195 g (GE 2026). Moderate and high are left null on purpose. |
| jalapeno | depends | raw 30 g (1 small chile) / 40 mod; pickled 15 g (trace, low to 500 g) | Medium | 30 g is from FE (Sep 2024). 40 g moderate is from GE (2026), which gives 39 g max-low. |
| sauerkraut | depends | 23 g (2 tbsp) / 35 mod mannitol | Medium | Grams are KK only. Monash says 1 tbsp low and 1 cup high, with no grams for the cup. |
| kimchi | depends | 47 / 71 mod mannitol | Medium-low | KK only (Apr 2024, from the Monash app). No Monash public page found. Garlic and onion in kimchi recipes weren't sourced, so I left them out. |
| ginger | low | 5 g (no upper limit) | Medium-high | From GE and FE. FODMAP Friendly found none. No data for ground ginger. |
| cinnamon | estimate ("Likely fine") | none | Low | FE says Monash tested "≤1 tsp" but gives no grams. Other sites (½ tsp = 2 g, 1 tsp = 5 g, 6 g) are not allowed sources and conflict, so they were not used. |
| cilantro | low | 16 g (1 cup) | Medium | FE list (2023) only. Dried coriander (20 g) is a note, not a serving. |
| basil | low | 16 g (1 cup) | Medium | FE list (2023) only. |
| paprika | low | 2 g (1 tsp) | Medium | GE (2026) says Monash added a 7 g threshold for regular paprika. Smoked paprika at 5 g is reported as both low and moderate by different GE pages. |
| cumin | low | 2 g | Medium | FE (2022) only. No upper limit published. Whole cumin seed not tested separately. |
| garlic-powder | estimate ("Usually high") | none | High (verdict) | Monash lists it as a high-fructan label ingredient (2017) but no lab amount is public. |
| onion-powder | estimate ("Usually high") | none | High (verdict) | Same as garlic powder. |
| chives | low | 4 g (no FODMAPs detected) | Medium-high | From FE (2025). GE says up to 500 g. Dried chives 2 g and Asian chives 80 g are in the answer text only, from FE. |

## Things for the importer or owner to know
- **onion** uses `highFromG: 30` from FODMAP Friendly (via FE) on `servings[0]`, with `lowMaxG: null`. The verdict is "high". FODMAP Friendly's 26 g low figure is in disagreements so the data isn't cherry-picked.
- **shallots** has all three gram fields null with `tier: "lab-tested"`. The verdict shows "high" and the bar shows "untested".
- **leek** `servings[0]` is the leaves, so the verdict shows "low". The answer text explains the bulb.
- **Category choices:** sauerkraut and kimchi are "condiments", edamame is "legumes", and ginger is "herbs-spices".
- **Not used:** the Monash 2024 fructose-changes blog (its tables are images; only broccolini is named in the text). Casa de Sante, Gourmend, Fody, Noisy Guts and spice-seller pages are not allowed sources.
