import type { FoodInput } from "../schema";

const food: FoodInput = {
  slug: "tahini", name: "tahini", aliases: ["tahina", "tehina", "sesame paste"], category: "nuts-seeds", regions: ["middle-eastern", "mediterranean"], illustration: "tahini",
  tier: "lab-tested",
  answer: "Yes. Two tablespoons (30 g) of unhulled tahini is a low FODMAP serve in Monash's published lists. Very large amounts add GOS, and hulled tahini is gentler than unhulled.",
  groups: ["gos"],
  servings: [
    { form: "unhulled tahini", lowMaxG: 30, moderateFromG: null, highFromG: null, scaleMaxG: 60, groups: ["gos"], household: "2 tbsp", sourceIds: ["mon-fibre-2021", "mon-stackexpl-2022"] },
    { form: "hulled tahini", lowMaxG: 183, moderateFromG: null, highFromG: null, scaleMaxG: 250, groups: ["gos"], household: "about ¾ cup", sourceIds: ["ge-tahini"] },
  ],
  disagreements: [{ text: "Monash's public posts use 2 tbsp (30 g) as the standard low serve. George Eats reports much larger low amounts for hulled tahini, up to 183 g. The first is a typical portion; the second is the most that still tests low.", sourceIds: ["mon-fibre-2021", "ge-tahini"] }],
  notes: [
    { text: "In Monash's stacking example, 30 g of tahini on rice cakes is a green-light snack, but piling on more GOS foods in the same meal can add up.", sourceIds: ["mon-stackexpl-2022"] },
    { text: "Monash's own low FODMAP hummus recipe uses hulled tahini.", sourceIds: ["mon-hummus-recipe"] },
  ],
  swaps: [{ name: "Hummus made with garlic-infused oil", slug: "hummus" }],
  faq: [{ q: "Is tahini sauce low FODMAP?", a: "Plain tahini is. Restaurant tahini sauce often has garlic, so ask for it without, or make it with lemon, water and salt." }],
  published: "2026-11-18", checked: "2026-11-18", status: "verified",
};
export default food;
