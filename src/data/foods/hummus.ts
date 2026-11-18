import type { FoodInput } from "../schema";

const food: FoodInput = {
  slug: "hummus", name: "hummus", aliases: ["houmous", "hommus", "humus"], category: "condiments", regions: ["middle-eastern", "mediterranean"], illustration: "bowl",
  tier: "estimated",
  answer: "Usually not when store-bought: most hummus combines chickpeas with garlic, and Monash says shop hummus is usually not FODMAP friendly. No lab has published a tested serve. Homemade with rinsed canned chickpeas and garlic-infused oil is the lower-FODMAP route.",
  groups: ["gos", "fructans"],
  servings: [{ form: "store-bought hummus", lowMaxG: null, moderateFromG: null, highFromG: null, scaleMaxG: 100, groups: ["gos", "fructans"], sourceIds: ["mon-hummus-blog"], note: "Not lab-tested. Estimated from its ingredients." }],
  notes: [
    { text: "Monash's low FODMAP hummus recipe uses canned chickpeas, hulled tahini and garlic-infused oil instead of garlic, and serves 6 to 8.", sourceIds: ["mon-hummus-recipe"] },
    { text: "Monash also bulks hummus out with roasted pepper and pumpkin, which lowers the chickpea share per spoon.", sourceIds: ["mon-hummus-blog"] },
  ],
  swaps: [{ name: "Plain tahini", slug: "tahini" }, { name: "Canned chickpeas, rinsed", slug: "chickpeas" }],
  faq: [{ q: "How much homemade low FODMAP hummus can I eat?", a: "No lab has tested a hummus serve. A portion of a recipe that serves 6 to 8 keeps the chickpeas near their low serve." }],
  published: "2026-11-18", checked: "2026-11-18", status: "verified",
};
export default food;
