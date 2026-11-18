import type { FoodInput } from "../schema";

const food: FoodInput = {
  slug: "strawberries", name: "strawberries", aliases: ["strawberry"], category: "fruit", regions: ["global"], illustration: "strawberries",
  tier: "lab-tested",
  answer: "Yes, in a small bowl. Since Monash's December 2021 retest, 65 g (about 5 medium strawberries) is low. Six berries (75 g) is moderate and eight (100 g) is high, in excess fructose.",
  groups: ["fructose"],
  servings: [{ form: "fresh strawberries", lowMaxG: 65, moderateFromG: 75, highFromG: 100, scaleMaxG: 140, groups: ["fructose"], household: "about 5 medium berries", sourceIds: ["mon-straw-2021"] }],
  changes: [{ date: "14 Dec 2021", text: "Strawberries used to be an 'eat freely' fruit with no upper limit. Monash's retest found more fructose and set the 65 g low serve.", sourceIds: ["mon-straw-2021", "alby-straw", "kk-straw"] }],
  notes: [
    { text: "Monash suggests sweeter modern varieties may explain the extra fructose. If strawberries never bothered you, it says there's no reason to change.", sourceIds: ["mon-straw-2021"] },
  ],
  swaps: [{ name: "Blueberries" }, { name: "Kiwi fruit" }, { name: "Pineapple" }],
  faq: [{ q: "Why do older lists say strawberries are free?", a: "They were, until the 2021 retest. Lists printed before then are out of date for strawberries." }],
  published: "2026-11-18", checked: "2026-11-18", status: "verified",
};
export default food;
