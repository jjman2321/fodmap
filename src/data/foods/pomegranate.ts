import type { FoodInput } from "../schema";

const food: FoodInput = {
  slug: "pomegranate", name: "pomegranate", aliases: ["pomegranate seeds", "pomegranate arils"], category: "fruit", regions: ["middle-eastern", "south-asian"], illustration: "strawberries",
  tier: "lab-tested",
  answer: "Yes, as a topping. A quarter cup of pomegranate seeds (45 g) is low in Monash's published fibre guide. The FODMAP that limits it is reported as fructans.",
  groups: ["fructans"],
  servings: [{ form: "fresh seeds (arils)", lowMaxG: 45, moderateFromG: null, highFromG: null, scaleMaxG: 100, groups: ["fructans"], household: "¼ cup", sourceIds: ["mon-fibre-2021", "ge-fruits"] }],
  disagreements: [{ text: "Monash: 45 g low. FODMAP Friendly reportedly lists 66 g as low. George Eats gives up to 52 g as the most that stays low.", sourceIds: ["mon-fibre-2021", "fe-pomegranate", "ge-fruits"] }],
  swaps: [{ name: "Strawberries (small bowl)", slug: "strawberries" }, { name: "Blueberries" }],
  faq: [{ q: "Is pomegranate molasses low FODMAP?", a: "We haven't found lab data for pomegranate molasses yet, so we can't say." }],
  published: "2026-11-18", checked: "2026-11-18", status: "verified",
};
export default food;
