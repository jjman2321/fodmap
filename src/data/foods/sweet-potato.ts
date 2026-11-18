import type { FoodInput } from "../schema";

const food: FoodInput = {
  slug: "sweet-potato", name: "sweet potato", aliases: ["sweet potatoes", "kumara", "yam"], category: "vegetables", regions: ["global", "latin-american", "african"], illustration: "sweet-potato",
  tier: "lab-tested",
  answer: "Yes, at a standard serve. Monash rates half a cup (75 g) of sweet potato low. In its published testing, bigger servings turned moderate above 100 g and high above 112 g, from the polyol mannitol.",
  groups: ["mannitol"],
  servings: [{ form: "sweet potato", lowMaxG: 75, moderateFromG: 101, highFromG: 113, scaleMaxG: 160, groups: ["mannitol"], household: "about ½ cup", sourceIds: ["mon-stack-2016", "mon-shop-2025"] }],
  changes: [{ date: "2025", text: "Dietitian sites report that Monash retested sweet potato: it's now listed for fructans instead of mannitol, low up to about 149 g. We haven't found Monash's own public post on this yet, so the bar above still shows the published 2016 numbers.", sourceIds: ["kk-sweetpot", "ge-potato"] }],
  disagreements: [{ text: "Monash doesn't say whether the 75 g is raw or cooked weight, and secondary sites differ on it.", sourceIds: ["mon-stack-2016", "mon-shop-2025"] }],
  notes: [{ text: "To make a bigger bowl of sweet potato soup or mash, Monash suggests bulking it out with parsnip, potato and carrot.", sourceIds: ["mon-stack-2016"] }],
  swaps: [{ name: "Potato" }, { name: "Carrot" }, { name: "Parsnip" }],
  faq: [{ q: "Can I eat sweet potato fries?", a: "Keep to about 75 g of sweet potato per sitting, or mix sweet potato with regular potato for a bigger plate." }],
  published: "2026-11-18", checked: "2026-11-18", status: "verified",
};
export default food;
