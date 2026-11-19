# Batch 6 notes: milks, proteins and oils (researched 2026-11-19)

No data was taken from the Monash or FODMAP Friendly apps. Some numbers come from dietitian blogs that cite the Monash app. Each one is labelled as secondary in the JSON.

## Applies to the whole batch

- **ml shown as grams.** Every milk source gives its amounts in ml. The schema stores grams, so the JSON uses the ml value and treats 1 ml as about 1 g. Each such serving has a note saying so. Milk is about 1.03 g per ml, so the error is around 3%. A display unit (ml) for drinks would be the cleaner fix.
- **Stacking risk for FODMAP-free foods.** Eggs, chicken, beef and salmon follow brief rule 7: lowMaxG 100, plus a note. Olive oil and garlic-infused oil use 20 g, the Monash example-meal serve. `stack()` in `src/lib/fodmap.ts` adds grams ÷ lowMaxG to the fructans load, so 200 g of chicken counts as two full fructan serves. Consider skipping these foods in the meal checker, for example when the serving note says "no FODMAPs".
- **Eggs.** Monash's text gives only "a regular egg (41 g)". Using 41 g as lowMaxG would make two eggs look untested, so the rule-7 default of 100 g is used instead. The 41 g egg weight is kept as a note.

## Per food

| Food | Verdict | Main grams | Confidence | Not verified |
|---|---|---|---|---|
| kefir | Estimated, "Usually high" | none | Medium | Monash rates kefir high (Fermented foods blog, 2017) but gives no serve size, so brief rule 6 makes it "estimated". It could also be tier "high" if you prefer. No public lab serve for lactose-free kefir. Water kefir not covered. |
| lactose-free milk | Low | 250 (1 cup) | High (verdict), medium (number) | The 250 ml comes from secondary sources only (A Little Bit Yummy and Karlijn's Kitchen, both citing Monash). Monash's Step 1 guide and FODMAP Friendly's list say "low" with no amount. |
| almond milk | Low | 250 (1 cup) | High (verdict), medium (number) | The 250 ml is secondary (A Little Bit Yummy, citing Monash). Karlijn's Kitchen says 240 ml and George Eats gives a 500 g maximum, both in disagreements. A search snippet claims FODMAP Friendly allows 416 ml; it was not verified and is left out. GOS as the group comes from George Eats' almonds page, not a milk source. |
| oat milk | Low up to 104, high at 250 | 104 / – / 250 | High | Primary: Monash, Feb 2024. Monash gave no moderate start. Secondary sites say 120–121 ml, and UK figures differ (125 ml vs 30 ml), so these are in disagreements. Groups (fructans and GOS) come from the secondary sites. |
| soy milk | Soy protein: low. Whole bean: 30 low, 125 high. Hulled: 60 low | 250; 30/–/125; 60 | Medium-high (protein vs whole-bean split is primary); medium (numbers) | All the ml numbers are secondary. The 125 ml high figure is Karlijn's "soybean-based" line, applied to whole-bean milk only. No household measure is given for the whole-bean serve, because no source states one for exactly 30 ml. A Little Bit Yummy says the numbers vary by country. |
| coconut milk | UHT carton: 180 low, 250 moderate. Canned: 60 low, 120 moderate | 180/250; 60/120 | Medium-high (UHT), medium (canned) | Monash says "¾ cup" low; the 180 ml conversion is Karlijn's. Canned figures are secondary only (Karlijn's Kitchen and A Little Bit Yummy agree). Sorbitol as the group comes from Karlijn's Kitchen. Light canned coconut milk (a snippet said 500 g) and coconut cream were not verified and are left out. |
| eggs | Low (no FODMAPs) | 100 (rule-7 default) | High | No public portion other than the 41 g egg weight. |
| chicken | Low (no FODMAPs) | 100 (default) | High | Monash names chicken explicitly. No portion given. |
| beef | Low (no FODMAPs) | 100 (default) | High | Monash names beef explicitly. No portion given. |
| salmon | Low (no FODMAPs) | 100 (default) | High | Monash names salmon explicitly. FODMAP Friendly says "fish". No portion given. |
| tofu | Firm: 170 low, 175 moderate. Silken: 39 low, 46 moderate | 170/175; 39/46 | Medium-high (firm), medium (silken) | Monash's own 2015 post gives no grams: firm is low and silken high "at a standard serve". Search summaries claimed a Monash table saying "170 g (1 cup, cubed)", but I could not find it on the page (the only image is a photo), so "1 cup cubed" is not used. A snippet claim that FODMAP Friendly rates firm tofu low at 100 g was not verified. No extra-firm data. |
| olive oil | Low (no FODMAPs) | 20 (1 tbsp) | High | 20 g is the olive oil serve in Monash's Step 1 example meal, which was garlic-infused olive oil. A 100 g default would be unrealistic for oil. |
| garlic-infused oil | Low | 20 (1 tbsp) | High | No upper limit is published. Homemade oil storage and food safety are not covered by any source read, so nothing is said about them. |

## Sources read directly (fetched)

Monash: Milk alternatives (2016), Dairy alternatives (2024), Meat, seafood, eggs and cooking fats (2024), Tofu and FODMAPs (2015), Fermented foods (2017), Dairy vs lactose (2018), Plant-based swaps (2026), Infused oils (2023), Step 1 PDF.

Others: FODMAP Friendly food list; A Little Bit Yummy (milk, soy, probiotic foods); Karlijn's Kitchen (milk, soy); George Eats (tofu, almonds).

No search-snippet-only facts are used in the JSON.
