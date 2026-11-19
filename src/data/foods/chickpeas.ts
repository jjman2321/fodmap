import type { FoodInput } from "../schema";

const food: FoodInput = {
  slug: "chickpeas", name: "chickpeas", aliases: ["chickpea", "garbanzo beans", "chick peas", "canned chickpeas"], category: "legumes", regions: ["middle-eastern", "south-asian", "mediterranean"], illustration: "chickpeas",
  tier: "lab-tested",
  answer: "Canned chickpeas are, in a small serve. Monash and FODMAP Friendly both list a quarter cup (42 g), drained and rinsed, as low. Chickpeas cooked from dry are far higher in GOS.",
  groups: ["gos"],
  servings: [{ form: "canned, drained and rinsed", lowMaxG: 42, moderateFromG: null, highFromG: null, scaleMaxG: 120, groups: ["gos"], household: "¼ cup", sourceIds: ["mon-fibre-2021", "ff-five-2020"] }],
  changes: [{ date: "2025–2026", text: "Newer dietitian reports give larger low serves for canned chickpeas: 80 g and up to 95 g, with fructans as the limit. We haven't found a public Monash post on a retest yet.", sourceIds: ["kk-beans", "ge-beans"] }],
  disagreements: [{ text: "Canned chickpeas: 42 g (Monash's public posts and FODMAP Friendly) vs 80 g (Karlijn's Kitchen, 2025) vs 95 g (George Eats, 2026).", sourceIds: ["mon-fibre-2021", "ff-five-2020", "kk-beans", "ge-beans"] }],
  notes: [
    { text: "GOS dissolve into the canning liquid, so draining and rinsing removes part of them.", sourceIds: ["mon-legumes-2016"] },
    { text: "Canning was one of the processing methods that cut FODMAPs the most in lab tests.", sourceIds: ["tuck-2018"] },
  ],
  swaps: [{ name: "Canned lentils", slug: "lentils" }, { name: "Firm tofu" }],
  faq: [{ q: "Are dried chickpeas worse than canned?", a: "Yes. Cooked from dry, chickpeas keep their GOS, so the low serve is much smaller. Canned and rinsed is the easier choice." }],
  published: "2026-11-18", checked: "2026-11-18", status: "verified",
};
export default food;
