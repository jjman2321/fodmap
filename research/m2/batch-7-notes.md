# Batch 7 notes (condiments, sweeteners, drinks)

Researched 2026-11-19. 14 foods, 33 sources. JSON checked with `JSON.parse` and against the Zod `Food` and `Source` schemas (all pass).

How pages were read: Monash, Karlijn's Kitchen, A Little Bit Yummy and George Eats pages were fetched and read in full. FODMAP Everyday blocks fetching, and so does Rachel Pauls Food here. Facts from those two appear only in `disagreements`, and their source titles say "(search snippet)". The Monash app and the FODMAP Friendly app were not used. Several secondary sites say their numbers come from the Monash app. We cite the secondary page, as the brief allows.

## Per food

| Food | Verdict | Main grams (low / mod / high) | Confidence |
|---|---|---|---|
| honey | depends | 7 / 14 / 28 (1 tsp) | high |
| maple-syrup | depends | 50 / 55 / – (2 tbsp) | medium |
| soy-sauce | low | 42 (2 tbsp); kecap manis 20 | high |
| ketchup | depends | US 13 / 19 / 26; AU sauce 13 / 26 / – | medium |
| mustard | low | Dijon 23 (1 tbsp) | high |
| coffee | low | espresso 60 ml (double shot) | medium |
| dark-chocolate | depends | 30 / 90 / – (5 squares) | high |
| agave | low at 5 g only | 5 / – / – | medium |
| green-tea | estimated | none shown | low (for numbers) |
| kombucha | estimated | none shown | medium (for the verdict) |
| apple-cider-vinegar | low | 40 (2 tbsp) | high |
| balsamic-vinegar | depends | 21 / 42 / – (1 tbsp) | medium |
| mayonnaise | low | 40 (2 tbsp) | high |
| miso | low | 12 | medium |

### honey (high)
- 7 / 14 / 28 g comes from Karlijn's Kitchen (2024, citing Monash data). George Eats (2026) gives the same 7 g, plus 3 g for clover honey. Monash's own food list names honey as a high FODMAP sugar, and FODMAP Friendly lists it as high. These fit together: honey is low only at 1 tsp.
- Not verified: FODMAP Friendly's "no low serve" for generic honey (FODMAP Everyday snippet only), the avocado honey figure (1 g, snippet only, left out) and manuka honey (no data found).

### maple-syrup (medium)
- The 50 g (2 tbsp) low serve is from Karlijn's Kitchen (2024). The 55 g moderate amount (fructans) is from George Eats (Aug 2026), who also gives "low up to 54 g". Monash and FODMAP Friendly public lists both name maple syrup as low.
- Not verified: FODMAP Everyday (search snippet, June 2026) says Monash now shows 1 tbsp (20 ml) as low and 2 tbsp (40 ml) as moderate. If that's right, the main low serve should probably drop to about 1 tbsp. 40 ml weighs roughly the same as 54 g, so this fits George Eats' moderate amount. Recheck before launch. The fructans group comes from George Eats only. Another snippet says different batches showed different FODMAPs.

### soy-sauce (high)
- 42 g (2 tbsp) and kecap manis 20 g (1 tbsp) are from Karlijn's Kitchen. A Little Bit Yummy (2025) gives the same tablespoon amounts. Monash names soy sauce as low on its food list and in its 2026 plant-based post.
- Not verified: which FODMAP limits soy sauce. Fructans is our choice because soy sauce is brewed with wheat. A snippet says kecap manis turns moderate for fructans at 50 g; we left that out. Tamari hasn't been tested.

### ketchup (medium)
- Numbers come from Monash's Oct 2014 blog table, reproduced by A Little Bit Yummy. Monash's original post now returns 404 and couldn't be fetched from the archive here. The 19 g moderate amount for US ketchup is in that table. A Little Bit Yummy marks the table as coming from both the Monash blog and the Monash app (2014), so the 19 g may have come from the app. Drop it if needed; the 13 g low and 26 g high amounts are in the blog text.
- Not verified: anything newer than 2014. Ketchup from other countries hasn't been tested. There's no brand data.

### mustard (high)
- The 23 g (1 tbsp) Dijon serve is from George Eats (Aug 2026). A Little Bit Yummy gives the same 1 tbsp. Monash lists mustard (2025 shopping list) and Dijon (2026 swaps) as low.
- In `notes`: mild German mustard low up to 77 g and moderate from 78 g; mustard powder low up to 7 g and moderate from 8 g. Both are George Eats' "up to" amounts and are not used in the main numbers. The 500 g "up to" amounts for French Dijon and wholegrain are in `disagreements`.

### coffee (medium)
- Monash (2024) says coffee itself is low in FODMAPs. The 30 ml and 60 ml espresso serves are from Karlijn's Kitchen and A Little Bit Yummy, citing the Monash app. Gram fields hold ml (1 ml counted as 1 g), which the note says. The group "fructans" is a placeholder, because no source names one.
- Not verified: the instant coffee amount. Karlijn's Kitchen says 1 full tsp in 230 ml; a FODMAP Everyday snippet says 2 heaped tsp (4 g). No grams appear on a page we could read, so there's no instant coffee serving. Brewed/filter coffee is described as low with no amount.

### dark-chocolate (high)
- The 30 g (5 squares) low serve is from Monash's own 2015 Easter post. The 90 g moderate amount (lactose) is from A Little Bit Yummy, citing Monash.
- Not verified: the 85% cacao figures (20 g vs 350 g, both from FODMAP Everyday snippets) and any newer Monash retest.

### agave (medium)
- The 5 g low amount is from Karlijn's Kitchen (two 2024 pages). A Little Bit Yummy says Monash rates it high above 1 tsp. FODMAP Friendly's public list says high.
- Not verified: the weight of the "high" tablespoon, so `highFromG` is null. As a result the site will show "Low at 5 g" with no high band. We did not add a household measure, because no source pairs 5 g with "1 tsp".

### green-tea (low confidence for numbers; set to estimated)
- Dietitians (Kate Scarlata 2017, A Little Bit Yummy 2025) say Monash tested green tea and rated it low. The only amounts (Monash: 250 ml strong, 1 bag; FODMAP Friendly: 1 bag, 1.5 g) come from FODMAP Everyday snippets. Following brief rule 6, the tier is "estimated" with null grams.
- **Issue for the owner:** `headline()` shows "Not lab-tested yet" for every estimated food. That is wrong for green tea and kombucha, which were lab-tested but have no public amount. We suggest a new tier or a different chip text, such as "Tested, amount not public".
- Not verified: matcha (no public lab result), and whether brew strength matters for green tea.

### kombucha (medium for the verdict; set to estimated)
- Monash's 2017 post says shop-bought kombucha contains fructans and a full serve may not suit people sensitive to them. It gives no amount and points readers to the app.
- Not verified: the often-quoted "180 ml is low" figure. It appears only on brand and content-farm sites (Casa de Sante, Gourmend, ntro.it.com), none of them on the allowed list, so we left it out. We couldn't fetch Healthylife's dietitian page (HTTP 429).

### apple-cider-vinegar (high)
- The 40 g (2 tbsp) serve is from George Eats (Aug 2026), which covers white, red, apple cider, malt and rice wine vinegar. A Little Bit Yummy gives 2 tbsp. Monash's shopping list includes vinegar.
- In `disagreements`: the 500 g "up to" amount (George Eats) and FODMAP Friendly's 20 ml (Rachel Pauls snippet). The fructose group comes from A Little Bit Yummy's explanation of the fermentation.

### balsamic-vinegar (medium)
- A Little Bit Yummy says low at 1 tbsp and moderate (fructose) at 2 tbsp. George Eats says moderate at 42 g (2 tbsp) and low up to 41 g. **We worked out 21 g** as 1 tbsp from George Eats' own 2 tbsp = 42 g; the serving note says so. A FODMAP Everyday snippet also gives "1 Aus tbsp or 21 g".
- Not verified: FODMAP Friendly's 50 ml (snippet only), and balsamic glaze (no public data).

### mayonnaise (high)
- The 40 g (2 tbsp) serve is from Karlijn's Kitchen (2024). George Eats (Aug 2026) says Monash lists regular, light and Kewpie mayo as low up to 500 g. A Monash research dietitian explains, through A Little Bit Yummy (2026), that 500 g means negligible FODMAPs. Monash names mayonnaise as low on its public list.
- The group "fructans" is a placeholder (from added garlic or onion), and the serving note says so.

### miso (medium)
- The 12 g amount is from Karlijn's Kitchen (2024) and A Little Bit Yummy (2019). Monash lists miso paste as a low FODMAP condiment (Oct 2026). The sources disagree on the spoon size (2 tbsp, 2 sachets or 1 tbsp), so there's no household measure.
- Not verified: which type of miso was tested, and the limiting FODMAP. GOS is our choice because miso is made from soybeans. A snippet mentions GOS at 2 tbsp, but it comes from a non-allowed site.

## Other things to know
- Category: dark chocolate, agave, honey, maple syrup, vinegars, mayo, miso, mustard, ketchup and soy sauce are all "condiments" (sweeteners and sauces). Coffee, green tea and kombucha are "drinks".
- The agave slug is `agave`, but its `name` is "agave syrup" so it reads well in sentences.
- No `changes` entries were written. The only dated retests found (maple syrup in 2026, mayonnaise in 2026) are either snippet-only or have no older public number to compare with.
- Three new Monash pages may be useful to other batches: `b7-mon-highlow` (the public high/low food list), `b7-mon-plant-2026` (plant-based swaps, 29 Oct 2026) and `b7-mon-nonfodmap-2024`.
