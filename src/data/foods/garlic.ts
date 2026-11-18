import type { FoodInput } from "../schema";

const food: FoodInput = {
  slug: "garlic", name: "garlic", aliases: ["garlic clove", "fresh garlic"], category: "vegetables", regions: ["global", "middle-eastern", "mediterranean"], illustration: "garlic",
  tier: "lab-tested",
  answer: "No. Fresh garlic is high in fructans even in small amounts: Monash uses just 3 g of garlic as its example of a high-fructan serve. Garlic-infused oil is the easy way to keep the flavour, because fructans don't dissolve in oil.",
  groups: ["fructans"],
  servings: [{ form: "fresh garlic", lowMaxG: null, moderateFromG: null, highFromG: 3, scaleMaxG: 12, groups: ["fructans"], sourceIds: ["mon-fructans-2020"], note: "No low serve has been published for fresh garlic." }],
  notes: [
    { text: "In lab tests garlic had more fructans than any other vegetable measured: about 17 g per 100 g, ahead of artichoke, shallots, leek and onion.", sourceIds: ["muir-2007", "molecules-2023"] },
    { text: "Fructans are water-soluble but not oil-soluble, so oil infused with garlic carries the taste without the fructans.", sourceIds: ["mon-oils-2023", "mon-faq"] },
    { text: "You can fry whole garlic pieces in oil for a minute or two and take them out before adding other ingredients. This works in oil-based dishes, not in soups or sauces where water pulls the fructans out.", sourceIds: ["mon-faq", "mon-myths-2015"] },
  ],
  swaps: [{ name: "Garlic-infused oil" }, { name: "Spring onion greens" }, { name: "Asafoetida" }],
  faq: [
    { q: "Is garlic-infused oil low FODMAP?", a: "Yes, as long as the garlic pieces are strained out. The fructans stay behind in the garlic, not in the oil." },
    { q: "How much garlic is too much?", a: "There's no published low amount for fresh garlic. Even 3 g, less than a typical clove, counts as high in fructans." },
  ],
  published: "2026-11-18", checked: "2026-11-18", status: "verified",
};
export default food;
