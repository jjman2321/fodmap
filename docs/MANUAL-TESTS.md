# Manual tests

Your click-through list. One section per feature. Test on phone and laptop, in light and dark mode.
Preview: run locally (see STATUS "How to run") until Cloudflare is connected.

## M1: foundation (2026-11-18)

### Home + search
- [ ] Open `/`. You see "Is it low FODMAP?", a search box, "Try: garlic · avocado · hummus · sweet potato", then 10 food tiles (picture, name, one Low/High pill), then 3 quiet links.
- [ ] Type `gar` → Garlic appears with "■ High" and "Try instead: Garlic-infused oil, Spring onion greens, Asafoetida".
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

## Known issues
- Food search only knows the 10 checked foods (more come in M2).
- Email list returns "opens soon" until the D1 database is set up.

## Reporting a problem
Send a screenshot, what you clicked, the page address, phone or laptop, and light or dark mode.
