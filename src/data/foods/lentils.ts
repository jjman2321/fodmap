import type { FoodInput } from "../schema";

const food: FoodInput = {
  slug: "lentils", name: "lentils", aliases: ["lentil", "green lentils", "red lentils", "canned lentils"], category: "legumes", regions: ["middle-eastern", "south-asian", "mediterranean"], illustration: "lentils",
  tier: "lab-tested",
  answer: "In small amounts. Boiled green lentils are low at a quarter cup (23 g) in Monash's fibre guide. Canned lentils, drained and rinsed, allow a bit more, because GOS wash out into the can liquid.",
  groups: ["gos"],
  servings: [
    { form: "green lentils, boiled", lowMaxG: 23, moderateFromG: null, highFromG: null, scaleMaxG: 80, groups: ["gos"], household: "¼ cup", sourceIds: ["mon-fibre-2021"] },
    { form: "canned, drained and rinsed", lowMaxG: 46, moderateFromG: null, highFromG: null, scaleMaxG: 120, groups: ["gos"], household: "about ¼ cup", sourceIds: ["kk-beans"] },
  ],
  disagreements: [{ text: "Canned lentils: 46 g (Karlijn's Kitchen, 2025) vs up to 76 g (George Eats, 2026). It's unclear whether that's a retest or a different way of reporting.", sourceIds: ["kk-beans", "ge-beans"] }],
  notes: [
    { text: "Cooking lentils for more than 30 minutes cut their FODMAPs by about 13% in lab testing.", sourceIds: ["mon-vegan-2018", "tuck-2018"] },
    { text: "FODMAP Friendly also lists small amounts of canned lentils as low.", sourceIds: ["ff-list"] },
  ],
  swaps: [{ name: "Canned chickpeas, rinsed", slug: "chickpeas" }, { name: "Firm tofu" }],
  faq: [{ q: "Is lentil soup low FODMAP?", a: "Only if the lentils per bowl stay near their low serve and the soup has no onion or garlic. Most lentil soups have both." }],
  published: "2026-11-18", checked: "2026-11-18", status: "verified",
};
export default food;
