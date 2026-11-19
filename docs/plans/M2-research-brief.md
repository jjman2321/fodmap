# M2 research brief (for research helpers)

You are researching foods for isitlowfodmap.com, a health-education site that answers "is X low FODMAP?" in grams. Every number we publish must trace to a PUBLIC source with a URL. Accuracy beats coverage: if you can't verify something, leave it out or mark the food as an estimate. Never guess a number.

## Hard rules
1. **Never use data from the Monash FODMAP app or the FODMAP Friendly app.** Their terms forbid extraction.
2. **Allowed sources, in order of preference:**
   - Monash University's public website and blog (monashfodmap.com/blog/…, FAQ, public PDFs, recipes)
   - FODMAP Friendly's public website and blog
   - peer-reviewed papers with a DOI (Muir 2007/2009, Biesiekierski 2011, Tuck 2018, Varney 2017, Liljebo 2020 and others)
   - reputable dietitian sites that cite Monash or FODMAP Friendly (Karlijn's Kitchen, A Little Bit Yummy, George Eats, FODMAP Everyday). These are kind "secondary".
3. **Prefer primary over secondary.** fodmapeveryday.com blocks automated fetching. If a fact comes only from a search snippet, write "(search snippet)" in that source's title, and use it only for "disagreements", never for the main numbers.
4. **The main numbers (`servings[0]`) use the standard low serve from the most primary public source.** Example: Monash blog "65 g strawberries is low, 75 g moderate, 100 g high". If a secondary site gives a "maximum still-low amount" (e.g. "up to 74 g"), put it in `disagreements`, not in the main numbers. Don't mix the two.
5. **No invented household measures.** Use `household` ("½ cup", "2 tbsp", "5 medium berries") only when the source states it. The same applies to clove, slice and piece weights.
6. **Foods with no public lab number:** set `"tier": "estimated"`, all three gram fields `null`, and add `"estimateAnswer": { "word": "...", "line": "..." }`.
   - `word` is at most 14 characters and must never contain "low". Use e.g. "Usually high", "Not tested", "Depends".
   - `line` is at most 120 characters.
   - Base it on public evidence such as ingredient lists, and cite it.
7. **Foods with no FODMAPs at all** (plain meat, fish, eggs, most oils, butter): if Monash or FODMAP Friendly publicly say they contain no or negligible FODMAPs, use `"tier": "lab-tested"` with `lowMaxG` set to a normal portion the source mentions. If the source names no portion, use `lowMaxG: 100` (scaleMaxG 200) and put a `note` on the serving: "Contains no FODMAPs according to the source; the amount shown is a normal portion, not a limit." Leave moderate and high `null`.
8. **Write in your own words. Don't copy sentences.** Plain, calm, short. Never use: cure(s), treat(s), safe, IBS-friendly, certified, guaranteed, Monash-approved.

## Output: one JSON file per batch
Write `research/m2/batch-<N>.json`:
```json
{
  "sources": [
    { "id": "mon-xyz-2021", "kind": "public-statement", "title": "…", "publisher": "Monash University (FODMAP blog)", "url": "https://…", "published": "14 Jan 2021", "accessed": "2026-11-19" }
  ],
  "foods": [ { …one Food object per food… } ]
}
```
- **Source `kind`:** "public-statement" (Monash or FODMAP Friendly sites), "paper" (add `doi`), "secondary" (dietitian sites) or "dataset".
- **Source ids:** lowercase letters, numbers and hyphens. **Reuse these existing ids** when you cite the same URL: mon-fructans-2020, mon-oils-2023, mon-myths-2015, mon-faq, mon-step1, mon-stack-2016, mon-shop-2025, mon-avo-2024, mon-fibre-2021, mon-stackexpl-2022, mon-hummus-recipe, mon-hummus-blog, mon-straw-2021, mon-legumes-2016, mon-lactose-2016, mon-vegan-2018, ff-five-2020, ff-list, muir-2007, molecules-2023, tuck-2018, kk-beans, ge-beans, ge-fruits. Their URLs are in `src/data/sources.ts`. Give any new source a new, unique id with a batch prefix, e.g. `b3-mon-banana-2018`.

**Food object.** It must match `src/data/schema.ts` exactly. Study `src/data/foods/sweet-potato.ts`, `garlic.ts` and `hummus.ts` as examples.
```json
{
  "slug": "banana", "name": "banana", "aliases": ["bananas", "firm banana"],
  "category": "fruit",
  "regions": ["global"],
  "illustration": "banana",
  "tier": "lab-tested",
  "answer": "≤ 320 characters, our words, answers the question in the first words with grams…",
  "groups": ["fructans"],
  "servings": [
    { "form": "firm (unripe) banana", "lowMaxG": 100, "moderateFromG": null, "highFromG": null, "scaleMaxG": 200,
      "groups": ["fructans"], "household": "1 medium", "sourceIds": ["…"], "note": "optional" }
  ],
  "changes": [ { "date": "2018", "text": "…", "sourceIds": ["…"] } ],
  "disagreements": [ { "text": "…", "sourceIds": ["…"] } ],
  "notes": [ { "text": "…", "sourceIds": ["…"] } ],
  "swaps": [ { "name": "Blueberries", "slug": "blueberries" } ],
  "faq": [ { "q": "…", "a": "…" } ],
  "published": "2026-11-19", "checked": "2026-11-19", "status": "verified"
}
```
**Field rules:**
- **`category`:** one of vegetables, fruit, nuts-seeds, dairy, grains, legumes, condiments, herbs-spices, protein, drinks. Meat, fish, eggs and tofu → "protein". Plant milks → "dairy". Coffee, tea, kombucha → "drinks". Oils, sweeteners, sauces → "condiments".
- **`regions`:** any of middle-eastern, south-asian, east-asian, latin-american, mediterranean, african, global.
- **`groups`:** fructans, gos, lactose, fructose, sorbitol, mannitol, other-polyol. Every serving needs at least one group: use the FODMAP that rises with the amount, or the one the source names. For FODMAP-free foods, use the group the source mentions, or "fructans" with a note.
- **Gram fields:** must be in increasing order (low ≤ moderate ≤ high) and ≤ scaleMaxG. Pick scaleMaxG about 1.4× the highest number shown.
- **`servings[0]`** is the most common form. Add more forms (canned, cooked, juice…) only when a source gives numbers for them.
- **`swaps`:** use slugs only for foods in your batch or the master list below; otherwise just `name`.
- **`faq`:** 1–2 real questions people search (e.g. "Is banana bread low FODMAP?"). Answers must not invent numbers.
- **Unique text:** don't reuse the same sentences across foods.

**Also write `research/m2/batch-<N>-notes.md`:** per food, a confidence rating (high/medium/low) plus what you couldn't verify.

**Master list of slugs on the site** (usable as swap slugs): garlic, sweet-potato, avocado, tahini, strawberries, chickpeas, hummus, pomegranate, lentils, feta, plus every slug in all M2 batches: broccoli, corn, tomatoes, potatoes, cabbage, carrots, green-beans, mushrooms, peas, celery, spinach, beetroot, asparagus, cauliflower, cucumber, kale, brussels-sprouts, butternut-squash, eggplant, lettuce, red-cabbage, pumpkin, arugula, bok-choy, leek, onion, spring-onion, shallots, fennel, bell-pepper, zucchini, edamame, jalapeno, sauerkraut, kimchi, ginger, cinnamon, cilantro, basil, paprika, cumin, garlic-powder, onion-powder, chives, banana, grapes, pineapple, blueberries, dates, apple, raspberries, cherries, orange, cantaloupe, mango, kiwi, cranberries, lemon, papaya, raisins, honeydew, olives, coconut, watermelon, sourdough-bread, oats, rice, brown-rice, quinoa, pasta, buckwheat, couscous, barley, corn-tortillas, millet, bulgur, pita-bread, zaatar, sumac, falafel, halloumi, labneh, freekeh, ful-medames, peanut-butter, almonds, peanuts, cashews, walnuts, pistachios, pumpkin-seeds, chia-seeds, flaxseed, sesame-seeds, macadamia-nuts, almond-butter, almond-flour, butter, cottage-cheese, greek-yogurt, mozzarella, parmesan, cheddar, cream-cheese, sour-cream, goat-cheese, kefir, lactose-free-milk, almond-milk, oat-milk, soy-milk, coconut-milk, eggs, chicken, beef, salmon, tofu, olive-oil, garlic-infused-oil, honey, maple-syrup, soy-sauce, ketchup, mustard, coffee, dark-chocolate, agave, green-tea, kombucha, apple-cider-vinegar, balsamic-vinegar, mayonnaise, miso.

**Earlier research to reuse:** `research/food-facts/food-facts-2026-11-18.json` already holds verified sources for dates, couscous, pistachios, halloumi, labneh, za'atar, sumac, bulgur, ful medames and pita. Reuse its URLs.

**Before finishing:** validate your JSON. Run `node -e "JSON.parse(require('fs').readFileSync('research/m2/batch-<N>.json','utf8'))"` from /home/user/fodmap. Don't modify any other files in the repo.
