import type { FoodInput } from "../schema";

const food: FoodInput = {
  slug: "feta", name: "feta", aliases: ["feta cheese"], category: "dairy", regions: ["middle-eastern", "mediterranean"], illustration: "bowl",
  tier: "lab-tested",
  answer: "Yes. Feta has almost no lactose: Monash measured just 0.13 g of lactose in a 125 g serve and rates it low. Like other ripened cheeses, most of the lactose is gone by the time it's eaten.",
  groups: ["lactose"],
  servings: [{ form: "feta cheese", lowMaxG: 125, moderateFromG: null, highFromG: null, scaleMaxG: 200, groups: ["lactose"], sourceIds: ["mon-lactose-2016"] }],
  disagreements: [{ text: "George Eats reports Monash's current upper amount for feta as 500 g. Either way, a normal portion is well within the low range.", sourceIds: ["ge-feta"] }],
  notes: [{ text: "Monash's FAQ groups feta with other ripened cheeses that are low in lactose.", sourceIds: ["mon-faq"] }],
  swaps: [],
  faq: [{ q: "What about halloumi?", a: "Halloumi is a different cheese with its own lactose level. We are checking the public data for it next." }],
  published: "2026-11-18", checked: "2026-11-18", status: "verified",
};
export default food;
