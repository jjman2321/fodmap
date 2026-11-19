# M2 batch 1: research notes (2026-11-19)

Data: `batch-1.json` (21 foods, 40 sources). No app data was used. Every Monash and FODMAP Friendly figure comes from their public blogs, PDFs or pages. The image tables in two Monash posts were read directly: the 2024 fructose-change table and the 2025 reintroduction-update tables 1 and 3.

## Key public sources found in this batch

- **Monash, "Reintroduction update" (28 Apr 2025), table 1.** This retest gives the current rating at 1 standard serve for asparagus (high, fructose), beetroot (now low), Brussels sprouts (now low), savoy cabbage (now low), white cauliflower (now low), celery stalk (now moderate), frozen green peas (high, fructans) and sugar snap peas (now low). Monash's traffic-light post (10 Sep 2024) defines 1 serve of vegetable as 75 g, which is how "1 serve" becomes 75 g in our data.
- **Monash, "Fructose changes for vegetables" (22 Jul 2024).** The image tables give cucumber at 75 / 132 / 178 g (previously 75 / 360 / 545 g) and butter lettuce at 65 g (previously 75 g).
- **Monash, "Getting enough fibre" (14 Jan 2021).** This table gives low serves with household measures: whole broccoli ¾ cup (75 g), carrot 1 medium (75 g), potato ½ medium (75 g), green beans 15 beans (75 g), eggplant 1 cup (75 g), kale ½ cup chopped (75 g), baby spinach 1½ cups (75 g) and corn ½ cob (38 g).
- **Monash, "Low FODMAP shopping list" (3 Feb 2025).** It lists these vegetables as low at a standard 75 g serve: lettuce, spinach, red and white cabbage, kale, carrot, potato, snow pea, green bean, eggplant, cucumber, pickled beetroot, canned tomato, broccoli head, corn kernels and oyster mushroom.
- **Monash, "FODMAP stacking: can I overeat green foods?" (2016).** It gives red cabbage as low at 75 g, moderate above 150 g and high above 180 g (fructans). It says eggplant becomes amber and then red in sorbitol, and that carrot, potato and parsnip stay green whatever the amount.

## Per food

| Food | Verdict | Main grams (servings[0]) | Confidence | Not verified / caveats |
|---|---|---|---|---|
| Broccoli | Low at standard serve | Whole: low 75 g (¾ cup), fructose. Heads: 75 g low, moderate 240 g. Stalks: 45 g low, 50 g moderate. | High (whole/heads low); medium (240/45/50 g, secondary KK) | Monash gives the "1 cup" serve without grams. The stalk numbers come only from Karlijn's Kitchen; Monash just says "avoid >65 g stalks". |
| Corn | Small amounts | Fresh: 38 g (½ cob) low, moderate 63 g (KK), sorbitol. Canned kernels: 75 g low, moderate 250 g (KK), fructans. | High (38 g); medium (canned, 63/250 g) | Monash's shopping list says "corn kernels" without naming canned or fresh, so I read it as canned (matches KK). No grams for a whole cob. |
| Tomatoes | Small amounts | Common: 65 g (½ medium) low, 75 g moderate, fructose (KK). Cherry: 45 g (3) low (Monash), 60 g moderate (KK). Canned: 75 g (Monash list). | Medium | No Monash public gram figure for a common tomato; the main number is secondary. Sources disagree on canned (75 g Monash list vs 100 g on ALBY/KK). Monash Step 1 lists "tomato" as high, while FODMAP Friendly says fresh tomato is low. |
| Potatoes | Low | 75 g (½ medium), no upper limit per Monash 2016 | High | Group shown as "fructans" as a placeholder (rule 7 style); no source names a FODMAP. The "up to 500 g" figure is secondary (GE, KK). |
| Cabbage | Low at standard serve | White: 75 g low (Monash), moderate 100 g sorbitol (KK). Savoy: 75 g low (Monash 2025). | High (75 g); medium (100 g) | Monash 2017 says "1 cup" of common cabbage is low, but gives no grams, so the household measure was left out. |
| Carrots | Low | 75 g (1 medium), no upper limit | High | Placeholder group as for potatoes. The 500 g figure is secondary (GE Aug 2026). |
| Green beans | Low at standard serve | 75 g (15 beans) low; 125 g (25 beans) moderate, sorbitol | High (75 g); medium (125 g, ALBY + KK comment) | High threshold (≈180 g) seen only in search snippets, so it was left out. |
| Mushrooms | Mostly high | Button: 7 g low, 10 g moderate (KK Jan 2024). Oyster: 75 g low (Monash list). Canned button: 75 g (KK). | Medium (button grams secondary and pre-dating the 2025 retest); high (oyster) | No public Monash gram figure for button mushrooms; Monash Step 1 just lists them as high. Canned: KK says 75 g, ALBY says "6 mushrooms". |
| Peas | High (green); low (sugar snap) | Frozen green peas: high at 75 g, no low amount. Sugar snap: 75 g low. | High (ratings); low (any green-pea low amount) | No public low amount for green peas. Snippets give 15 g or 33 g; they disagree and were not used. KK's "canned peas up to 54 g" is only in the disagreements. Snow peas: 2025 Monash list gives 75 g (2015 gave 16 g); they are in changes, not a serving, because no source names their FODMAP group. |
| Celery | Moderate at standard serve | Moderate at 75 g (mannitol); low null | Medium | No current public low amount. KK's pre-retest figure (10 g low, 15 g moderate, 75 g high) conflicts with Monash 2025 (moderate at 75 g). KK's Sep 2025 list says "51 g", which may be a maximum. Both are only in the disagreements. |
| Spinach | Low | Baby: 75 g (1½ cups) low, moderate 150 g fructans (KK). English: 75 g. | High (75 g); medium (150 g) | Group for English spinach is a placeholder (fructans). "Up to 500 g" for mature spinach comes only from KK's list. |
| Beetroot | Low at standard serve (since 2025) | Fresh: 75 g low (GOS, fructans in larger serves). Pickled: 75 g. | High (rating); medium (no upper amounts) | No moderate or high grams published. Search summaries mention "1 small or ½ large" but this was not verified, so it was not used. |
| Asparagus | High at standard serve | High at 75 g (fructose); low null | High (rating); low (any small low amount) | Low amounts disagree: ⅔ spear (KK 2024), 42 g (KK list 2025), 12 g (snippets). None is from Monash's public pages. |
| Cauliflower | Low at standard serve (since 2025) | 75 g low, fructans in larger serves | High (75 g rating) | Monash (29 Oct 2026) says there was a newer retest with a "larger low serve" but gives no number, so this page may soon be out of date. ALBY gives "¾ cup" without grams, so no household measure was used. FODMAP Friendly's public list still says high. |
| Cucumber | Low | 75 g low, 132 g moderate, 178 g high (fructose) | High | All numbers come from a Monash public image table (2024). |
| Kale | Low | 75 g (½ cup chopped) low; moderate 222 g GOS (KK) | High (75 g); medium (222 g) | None. |
| Brussels sprouts | Low at standard serve (since 2025) | 75 g low, fructans in larger serves | High (rating) | No sprout count verified (snippets say 3 or 4). No moderate/high grams. |
| Butternut squash | Small amounts | 63 g (⅓ cup) low, 75 g moderate, 85 g high (fructose, fructans) | Medium | Secondary only (George Eats Aug 2026 and KK 2024 agree). GE's page is self-contradictory about whether Monash lists unpeeled butternut. Raw vs cooked is unclear. No Monash public page found. |
| Eggplant | Low | 75 g (1 cup) low; moderate 178 g sorbitol (KK) | High (75 g); medium (178 g) | Snippets give 182 g moderate and 260 g high; these were not used. |
| Lettuce | Low | 75 g (general, Monash list); butter lettuce 65 g (Monash 2024) | High | The general-lettuce group (fructose) is borrowed from Monash's butter-lettuce data. Iceberg/cos are not separately confirmed by Monash's public pages. |
| Red cabbage | Low at standard serve | 75 g (½ cup) low, 150 g moderate, 180 g high (fructans) | High | 2016 data. No newer public Monash figure, but KK (2024, citing the app) shows the same 75/150 g. |

## Things to know when merging

- **Reused ids:** mon-shop-2025, mon-fibre-2021, mon-stack-2016, mon-stackexpl-2022, mon-fructans-2020, mon-vegan-2018, mon-step1, ff-five-2020, ff-list, tuck-2018, kk-beans and ge-potato. All URLs were checked against `src/data/sources.ts`.
- **New ids** all start with `b1-`.
- **Validation:** the JSON parses, and every source and food passes `Source.safeParse` / `Food.safeParse` from `src/data/schema.ts` (checked with tsx).
- **Repeated notes:** three short provenance notes repeat across foods on purpose, the same way avocado does. They are "Grams as reported by dietitian sites from Monash's data.", "Low amount from Monash; the moderate amount is as reported by Karlijn's Kitchen…" and the placeholder-group note. Reword them if the uniqueness check also covers serving notes.
- **Placeholder "fructans" groups:** potatoes, carrots and English spinach carry "fructans" as a placeholder group because no source names a FODMAP that rises with the amount. The UI shouldn't present this as a real finding.
- **Tier:** all 21 foods are `lab-tested`, because every food has at least one public lab rating. Celery, asparagus and green peas have `lowMaxG: null` because no public low amount was found.
