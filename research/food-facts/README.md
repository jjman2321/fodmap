# Food facts: research summary (2026-11-18)

The full data is in `food-facts-2026-11-18.json`. It has one object per food, and every fact carries its source URL, type, date, access method and a short quote.

## How to read this

- **Source types**
  - **primary**: monashfodmap.com blog posts, PDFs or FAQ, or fodmapfriendly.com.
  - **paper**: peer-reviewed, with a DOI.
  - **secondary**: Karlijn's Kitchen, A Little Bit Yummy, George Eats or FODMAP Everyday, each attributing figures to Monash or FODMAP Friendly.
- **Access labels**
  - **fetched**: the page was read directly.
  - **snippet only**: FODMAP Everyday returns 403, so the text came from a search-engine snippet.
  - **archived**: the Monash page now returns 404, so it was read from a Wayback Machine copy.
- **"Standard serve" and "max low" are different numbers.** The Monash blogs give a standard green serve, for example 65 g of strawberries. George Eats often gives the largest amount that is still low, for example "up to 74 g". These don't contradict each other, but don't mix them on one page without saying which is which.
- **Legal note.** Many secondary figures originally come from the Monash or FODMAP Friendly apps, as reported by those blogs. Your rules allow them, but prefer the primary-blog numbers when publishing. Label secondary figures as "reported by X, citing Monash".
- **No app data was accessed.**

## Seed foods

| Food | Verdict | Grams | FODMAP group | Confidence | Gaps |
|---|---|---|---|---|---|
| Garlic | High | High at 3 g (Monash 2020). No public low serve. Infused oil: 1 tbsp (20 g) is a green serve in a Monash example meal. Lab value: about 17.4 g fructans per 100 g fresh weight (Muir 2007, via two citing papers). | Fructans | High (verdict); medium-high (17.4 g) | Muir's full table not read directly. Garlic powder not verified. |
| Sweet potato | Depends on amount | Low at 75 g, the standard serve (Monash 2016 and 2025). Current secondary data: max low 149 g (orange/purple) or 139 g (white), moderate fructans from 150 g. Old Monash data (2016): moderate above 100 g, high above 112 g, both mannitol. | Fructans now (secondary); mannitol before | High (75 g); medium (fructans) | The 2025 retest is reported only by secondary sources. Raw vs cooked is not stated. |
| Avocado (Hass) | Depends on amount | Low at 60 g, about 3 tbsp. Moderate ("average") at 80 g, high ("large") from 90 g (secondary, citing Monash). George Eats: max low 79 g. FODMAP Friendly: no FODMAPs in ripe Hass; unripe passed at 80 g (snippet). | Perseitol (a polyol, shown under sorbitol) | High (mechanism); medium (grams) | The Monash 2024 blog gives no grams. |
| Tahini | Low | Low at 2 tbsp (30 g), unhulled (Monash 2021 and 2022). Secondary max low: 183 g hulled, 102 g unhulled. High at 217 g hulled and 119 g unhulled (FE snippet). | GOS | High (30 g); medium (upper limits) | No FODMAP Friendly figure. |
| Strawberries | Depends on amount | Low at 65 g (5 medium). Moderate at 75 g (6), high at 100 g (8) (Monash, 14 Dec 2021). FODMAP Friendly: 50 g (snippet). | Excess fructose | High | The old Monash gram figure was not verified; it was "eat freely". |

**Sweet potato wording confirmed.** The post is "FODMAP stacking – can I overeat 'green' foods??" (11 Oct 2016) at `monashfodmap.com/blog/fodmap-stacking-can-i-overeat-green/`. Its exact wording:

- "A standard serve of sweet potato, ½ cup (75g), is low in FODMAPs"
- "servings larger than 100g, contain moderate amounts of the polyol mannitol"
- "servings more than 112g are high in mannitol"

The longer URL slug ending in `-green-foods` returns 404.

**Strawberry date.** The Monash retest blog is dated 14 Dec 2021, not 2022. The app was updated around then.

**Avocado date.** The Monash blog is dated 26 Feb 2024. Secondary sites report the change from 30 g to 60 g in March 2024.

## Middle Eastern / Egyptian hub foods

| Food | Verdict | Grams | FODMAP group | Confidence | Gaps |
|---|---|---|---|---|---|
| Hummus | Depends on amount | No tested serve. Monash says store-bought hummus is "usually not FODMAP friendly". Their recipe uses 400 g canned chickpeas, ½ cup hulled tahini and ⅓ cup garlic-infused oil, and serves 6-8. | GOS, fructans | Medium | No lab data for hummus itself. |
| Chickpeas | Depends on amount | Canned and drained: 42 g, ¼ cup (Monash 2016 and 2021; FODMAP Friendly also says ¼ cup). Newer secondary figures: 80 g (Karlijn 2025), 95 g (George Eats 2026, fructans). Dried and boiled: 29-33 g (secondary). | GOS, fructans | High (42 g); low-medium (newer) | No primary source for the retest. |
| Halloumi | Depends on amount | Low at 40 g, about 2 slices. Moderate at 60 g (secondary, citing Monash). The Monash FAQ calls haloumi a moderate-lactose cheese. | Lactose | Medium | No primary grams. The FODMAP Friendly 15 g figure is unverified. |
| Pita (wheat) | No public data | Pita has not been tested. Analogy only: wholemeal wheat bread is low at 24 g, 1 slice (Monash 2017), and wheat breads are high at typical serves. | Fructans (+GOS) | Low | No pita data. |
| Dates | Depends on amount | Dried: low at 30 g (5 dates). Moderate at 46 g, high at 61 g (Karlijn 2024). Max low 45 g (George Eats 2026). Medjool: 20 g (1 date) low, 40 g moderate (secondary). Fresh dates: no data. | Fructans, sorbitol | Medium | No primary grams. No fresh-date data. |
| Couscous (wheat) | High | Not verified. The "65 g cooked" figure appears only on low-quality sites. Monash and FODMAP Friendly both list it as high; it is a Monash fructan challenge food. | Fructans | High (verdict); none (grams) | No grams. |
| Za'atar | No public data | Blend not tested. Sesame seeds are low up to 51 g (secondary). | Unknown | Low | Sumac grams not verified. |
| Labneh | No public data | Not tested. Regular Greek yoghurt is low only at 23 g (secondary); natural yoghurt is high at 170 g (Monash 2016). | Lactose (presumed) | Low | No lab data. |
| Pomegranate | Depends on amount | Low at ¼ cup seeds, 45 g (Monash 2021). Max low 52 g (George Eats). FODMAP Friendly: 66 g (snippet). | Fructans (secondary) | High (45 g) | No high threshold. The FODMAP group comes from a secondary source. |
| Pistachios | High | Listed high by Monash and FODMAP Friendly. Secondary data: low at 5 g (about 7 nuts), moderate GOS at 6 g, high GOS and fructans at 30 g. | GOS, fructans | High (verdict); medium (grams) | No primary grams. |
| Lentils | Depends on amount | Boiled green: ¼ cup, 23 g (Monash 2021). Canned is a Monash low alternative; 46 g (Karlijn) or 76 g (George Eats). Boiled red: 23 g (Karlijn); George Eats gives both 36 g and 57 g. | GOS, fructans | High (23 g); medium (canned) | Canned grams come only from secondary sources, which disagree. |
| Feta | Low | 0.13 g lactose per 125 g serve, rated low (Monash 2016). George Eats: low up to 500 g (snippet). | Lactose (negligible) | High | None significant. |
| Ful medames / fava | High | Monash has no low serve for broad beans. FODMAP Friendly reportedly allows 21 g (both via George Eats). The dish itself is untested. | GOS (legumes); FODMAP Friendly reportedly says fructose | Medium | No primary source. Canned ful is untested. |
| Sumac | No public data | FODMAP Everyday says Monash tested it, but no grams were found. The "1 tsp (2 g)" figure is unverified. | Unknown | Low | Grams. |
| Bulgur | Depends on amount | Low at ¼ cup, 44 g, labelled "uncooked" by Monash (2021). High at 88 g (George Eats). A full serve is high in oligos (Monash 2014). | Fructans, GOS | High (44 g) | Monash labels the 44 g as uncooked, but secondary sites call it cooked. |

## Useful general notes (all primary)

- **Garlic-infused oil.** Fructans dissolve in water, not oil (Monash FAQ, Step 1 PDF, 2023 blog). Fry whole cloves for 1-2 minutes, then throw them away. Removing the garlic doesn't work in soups.
- **Canned and rinsed legumes.** GOS leach into the brine, so discard it and rinse (Monash FAQ, 2016 legumes blog). Pickling and canning gave the largest FODMAP reductions in Tuck et al. 2018 (DOI 10.1111/jhn.12546). Pickling cut FODMAPs by 89-97% in onion, beetroot and garlic.
- **Aged and hard cheeses** are naturally low in lactose (Monash Step 1 PDF and FAQ).
- **Dried fruit.** Drying concentrates FODMAPs, and Monash found fructans in some dried fruits that are not present in the fresh fruit (Monash FAQ).
