# M2 batch 4 notes: grains and Middle Eastern foods

Researched 2026-11-19. Data file: `research/m2/batch-4.json` (20 foods, 33 new sources with the prefix `b4-`). It passes `JSON.parse` and the real Zod `Food` / `Source` schema (checked with tsx against `src/data/schema.ts`).

Things reused from `research/food-facts/food-facts-2026-11-18.json`: the bulgur numbers (mon-fibre-2021, the archived Monash bourghal post), the GE yoghurt and nuts pages, the halloumi pages (KK cheese, mon-faq) and the broad bean data (ge-beans, kk-beans). Every page reused was fetched again today and the figures were re-checked. The one exception is the archived bourghal post: web.archive.org rate-limited us today, so it keeps its 2026-11-18 access date.

New primary sources found today:
- **Monash fibre guide (mon-fibre-2021).** Gives gram serves for rolled oats, brown rice, quinoa and buckwheat.
- **Biesiekierski 2011 (Monash lab, DOI).** Rice had 0 g fructan per portion and couscous had the most, 1.12 g.
- **Pejcz 2024 (Molecules, DOI).** A 50 g dry serve of couscous held 1.02 g of fructans, against a cut-off of 0.3 g. Rice and buckwheat came in under the cut-off.
- **Monash's sprouting post.** Barley grain was rated red, and sprouting turned it green.
- **Monash 2015 "10 foods" post.** Wheat pasta is low at ½ cup cooked (74 g) and red at a full serve.
- **Monash's sourdough and grains posts.**
- **FODMAP Friendly's 2017 wheat bread post.** Says ½ cup of wheat pasta is low.
- **An NHS Cambridge diet sheet.** Puts freekeh, pearl barley, bulgur, couscous and pitta on its avoid list. It suggests limiting halloumi to 2 slices (40 g) and lists millet and sprouted pearl barley as suitable.

| Food | Verdict (main serve) | Confidence | Not verified / caveats |
|---|---|---|---|
| sourdough-bread | Low: 109 g, 2 slices of white wheat sourdough. Also wholemeal 97 g, and oat sourdough 26 g (moderate from 52 g). | Medium | The grams come from secondary sites (KK and ALBY, both fetched). Monash's own posts only say "meets low criteria" or "2 slices" for spelt, with no grams. Spelt sourdough at 41 g (KK) looks odd. |
| oats | Low: 52 g, ½ cup of uncooked rolled oats (primary). Quick oats 23 g, moderate from 47 g (KK). | High | We found no moderate or high figure for rolled oats. The "¾ cup (78 g) moderate" and "FF 43 g" figures were in search snippets only, so we left them out. |
| rice | Low: 190 g, 1 cup cooked white rice (ALBY citing Monash). | High (verdict), medium (grams) | No primary gram figure for white rice. GE (2026) says up to 500 g; that's in disagreements. |
| brown-rice | Low: 180 g, 1 cup cooked (primary). | High | GE gives 500 g as the maximum, which is in disagreements. |
| quinoa | Low: 155 g, 1 cup cooked (primary). | High | GE gives a maximum of 500 g (421 g for red quinoa), which is in disagreements. The fructans group comes from GE's red quinoa entry. |
| pasta (wheat) | Low: 74 g, ½ cup cooked. High from 148 g. | High (low), medium (high) | The 148 g is our arithmetic. Monash says the full serve (twice the 74 g half serve) is red but never prints the grams. If you'd rather not derive it, drop `highFromG`. |
| buckwheat | Low: 135 g, ¾ cup cooked groats (primary). Flour 100 g (secondary). | High | FF's 143 g flour figure is quoted by GE, not seen first-hand. |
| couscous | High from 50 g dry (Pejcz 2024 lab data, plus the Monash and FF high lists). No low serve. | High (verdict), medium (grams) | The 50 g is dry weight and is over the 0.3 g cut-off. The paper calls this "surpasses the cut-off", which is not exactly Monash's "high" band. A "65 g cooked is low" figure circulates on low-quality sites only, so it isn't used. |
| barley | High. No grams (Monash says barley is a high-fructan grain, and its lab rated barley grain red). | Medium | The ⅛ cup (28 g) cooked low serve for pearl barley is from a search snippet only and is in disagreements. The sprouted pearl barley grams (½ cup, 100 g) are also snippet-only and were left out. The serving bar has no grams. |
| corn-tortillas | Low up to 133 g (about 5½ tortillas) with added gum or fibre. Up to 425 g without (GE, Aug 2026). | Medium-low | **Please decide.** No standard serve in grams could be fetched. KK (fetched) says 2 tortillas with gum and 3 without, with no grams. The 47 g and 57 g weights appear in search snippets only (FODMAP Everyday, Fun Without FODMAPs, both blocked). GE's figures are the only fetched gram numbers, but they are "maximum still-low" style. Brief rule 4 would normally put those in disagreements. The conservative alternative is lowMaxG 47 with household "2 tortillas", but that number is snippet-only. |
| millet | Low: 100 g millet flour (KK). Monash lists the grain and flour as tested low but gives no grams. | Medium | No verified gram serve for cooked millet ("1 cup cooked" is snippet-only). Flour is servings[0] only because it has the one verified number. No source names millet's FODMAP group, so fructans is shown with a note. |
| bulgur | Low: 44 g, ¼ cup uncooked (primary). High from 88 g (GE, consistent with Monash calling a full serve high). | High (44 g), medium (88 g) | It's unclear whether secondary sites mean cooked or dry. |
| pita-bread | Estimated, "Probably high". | Low-medium | No public pita or Lebanese bread lab data. This is an analogy with wheat bread (24 g, 1 slice) plus the NHS avoid list. |
| zaatar | Estimated, "Not tested". | Low | No data for the blend. Monash's shopping list covers herbs, most spices and sesame. We did not verify whether commercial blends add garlic, onion or wheat; the text only says "check". |
| sumac | Estimated, "Not tested". | Low | FODMAP Everyday says Monash tested sumac (snippet only, page blocked). The "1 tsp (2 g)" figure is on low-quality sites only. The group is a placeholder (fructans). |
| falafel | Estimated, "Probably high". | Medium | Based on GE (soaked chickpeas low only at 29 g; chickpea flour high), ge-beans (no fava serve) and Open Food Facts ingredient lists. Nearly all the falafel products listed include onion, and many include garlic or wheat. That count was done by hand on a 40-product search page and is stated without a number. |
| halloumi | Low 40 g (2 slices), moderate from 60 g, high from 220 g. | Medium | Secondary only (KK, fetched, citing Monash) plus the NHS sheet (40 g). Monash's FAQ confirms "moderate lactose" but gives no grams. The FF 15 g figure is still unverified and not used. |
| labneh | Estimated, "Not tested". | Low | No lab data. The related figures are Greek yoghurt (23 g low, 93 g moderate) and natural yoghurt (170 g high). |
| freekeh | Estimated, "Probably high". | Low-medium | No lab data from Monash or FF. The answer's "made from young wheat" is general knowledge with no cited source. The NHS avoid list is the main evidence. |
| ful-medames | Estimated, "Probably high". | Medium | Broad beans: Monash gives no low serve, while FF gives 21 g (fructose). Both come via GE, which we fetched. The dish and canned ful are untested. Groups are GOS and fructose. |

## Other flags for the merger
- The scratchpad was shared with other batch helpers at the same time, so batch 4 worked in its own `scratchpad/b4/`.
- WebFetch and web.archive.org were rate-limited (429), and fodmapeveryday.com, funwithoutfodmaps.com and healthylife.com.au blocked fetching.
- **New source kinds.** `b4-nhs-cuh` is an NHS hospital dietetics leaflet, filed as "secondary" (it doesn't cite Monash). `b4-off-falafel` is Open Food Facts, filed as "dataset".
- **Swap slug check.** The swap slugs `sesame-seeds`, `edamame`, `mozzarella`, `cheddar` and `lemon` are all on the master list.
