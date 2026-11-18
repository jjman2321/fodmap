import type { FoodInput } from "../schema";

const food: FoodInput = {
  slug: "avocado", name: "avocado", aliases: ["avocados", "hass avocado", "guacamole"], category: "fruit", regions: ["global", "latin-american"], illustration: "avocado",
  tier: "lab-tested",
  answer: "Yes, in small amounts. After Monash's 2024 retest, about 60 g of Hass avocado (roughly 3 tablespoons) is low. From about 80 g it becomes moderate in perseitol, a polyol, and high from about 90 g.",
  groups: ["other-polyol"],
  servings: [{ form: "Hass avocado flesh", lowMaxG: 60, moderateFromG: 80, highFromG: 90, scaleMaxG: 120, groups: ["other-polyol"], household: "about 3 tbsp", sourceIds: ["kk-avo", "alby-avo"], note: "Grams as reported by dietitian sites from Monash's 2024 data." }],
  changes: [{ date: "26 Feb 2024", text: "Monash retested avocado. The polyol turned out to be perseitol, not sorbitol, and the low serve went from 30 g to 60 g.", sourceIds: ["mon-avo-2024", "kk-avo"] }],
  disagreements: [{ text: "FODMAP Friendly's lab reportedly found no FODMAPs in ripe Hass avocado, while Monash still finds perseitol in larger servings. Both may be right for different fruit and ripeness.", sourceIds: ["fe-avo", "mon-avo-2024"] }],
  notes: [{ text: "Unripe avocado had more perseitol than ripe avocado in Monash's testing, so riper fruit is the gentler choice.", sourceIds: ["mon-avo-2024"] }],
  swaps: [],
  faq: [{ q: "Is guacamole low FODMAP?", a: "Avocado itself is fine in small amounts, but most guacamole has garlic and onion. Make it with lime, salt, chili and spring onion greens instead." }],
  published: "2026-11-18", checked: "2026-11-18", status: "verified",
};
export default food;
