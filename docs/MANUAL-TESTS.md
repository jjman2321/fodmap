# Manual tests

Your click-through list. One section per feature. Test on phone and laptop, in light and dark mode.
Preview: run locally (see STATUS "How to run") until Cloudflare is connected.

## M1: foundation (2026-11-18)

### Home + search
- [ ] Open `/`. You see "Is it low FODMAP?", a search box, "Try: garlic · avocado · hummus · sweet potato", then 10 food tiles (picture and name only, no answer), then 3 quiet links.
- [ ] Type `gar` → "Garlic →" appears; tapping it opens the garlic page.
- [ ] Type `zaatar` → "We haven't checked "zaatar" yet."
- [ ] Type `houmous` (UK spelling) → Hummus appears.

### Food page (try `/food/sweet-potato`)
- [ ] Big green **Low FODMAP**, then "In a portion up to 75 g (about ½ cup). High from 112 g.", then 3 boxes with bowls that fill up: ● Low 75 g / ▲ Moderate 100 g / ■ High 112 g+.
- [ ] `/food/garlic` says big red **High FODMAP**; `/food/hummus` says **Usually high** and has no portion slider.
- [ ] Under "Check your portion": a big gram number, a coloured scale (grey = not tested), and buttons 75 g / 100 g / 112 g that jump the slider. The scale has thick coloured segments with Low / High labels under them. Drag it: 75 g says **● Low**; 90 g **○ Not tested**; 105 g **▲ Moderate**; 120 g **■ High**.
- [ ] Tap a small [1] → it jumps to the matching source at the bottom; the link opens Monash's page.
- [ ] "What changed" explains the 2025 retest reported by dietitian sites.
- [ ] "See a doctor first if" box is there, calm amber, not red.
- [ ] "Add sweet potato to a meal check" opens the meal check with sweet potato already added.

### Meal check (`/check`)
- [ ] Add tahini, chickpeas and lentils. The "GOS" row turns **▲ May add up** once their amounts together pass one low serving.
- [ ] Remove a food with ×. Add garlic → "Fructans ■ High".

### Middle Eastern hub (`/region/middle-eastern`)
- [ ] 7 foods with chips and a short line each; "Eating out: what to ask" tips at the bottom.

### Printable list (`/printable`)
- [ ] "Print or save as PDF" opens your print dialog; the printout has no header, footer or email box.
- [ ] The email form says "The email list opens soon" (the list isn't connected yet; that's expected).

### Everywhere
- [ ] Phone menu (☰) opens and closes; Escape closes it on a laptop.
- [ ] Footer has the disclaimer line, "Not affiliated with Monash University or FODMAP Friendly" and © Grasp Labs LLC.

## M2: 143 foods (2026-11-19)
- [ ] Home says "All 143 foods →" and shows "Popular checks" plus "Browse by type" with counts.
- [ ] `/category/fruit` lists 23 fruits with a pill each.
- [ ] `/food/cherries`: title "Are cherries low FODMAP?", amber **Small amounts only**, "Low FODMAP only up to 20 g".
- [ ] `/food/celery`: amber **Moderate FODMAP**, "Moderate at 75 g … No low amount found."
- [ ] `/food/oat-milk`: amounts in **ml** (104 ml low, 250 ml+ high).
- [ ] `/food/chicken`: **Low FODMAP**, "contains no FODMAPs", box "No FODMAPs · any amount", no slider.
- [ ] `/food/butter`: box "Trace lactose · normal amounts".
- [ ] `/food/green-tea`: says "Lab-tested, amount not public", never "not lab-tested".
- [ ] `/food/zaatar`: grey **Not tested**, no "Watch for" group.
- [ ] Meal check: add chicken + garlic → only "Fructans ■ High" appears (chicken adds nothing).

## Known issues
- 136 foods show a letter tile until their picture is made (needs Higgsfield credits).
- Email list returns "opens soon" until the D1 database is set up.

## Reporting a problem
Send a screenshot, what you clicked, the page address, phone or laptop, and light or dark mode.
