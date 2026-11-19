import { z } from "zod";

import { GROUPS, GROUP_LABEL, type Group as GroupT } from "@/lib/groups";

// FODMAP groups as Monash splits them (oligosaccharides into fructans + GOS; polyols into sorbitol + mannitol).
export { GROUPS, GROUP_LABEL };
export const Group = z.enum(GROUPS);
export type Group = GroupT;

// How sure the answer is. Only lab data may ever say "low" (DECISIONS §0).
export const Tier = z.enum(["lab-tested", "depends-on-amount", "high", "estimated", "unknown", "amount-not-public"]);
export type Tier = z.infer<typeof Tier>;

export const Source = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  kind: z.enum(["paper", "public-statement", "secondary", "dataset"]),
  title: z.string().min(5),
  publisher: z.string().min(2),
  url: z.url(),
  doi: z.string().optional(),
  published: z.string().optional(), // year or ISO date, as the source shows it
  accessed: z.iso.date(),
});
export type Source = z.infer<typeof Source>;

const grams = z.number().positive().max(2000);

// One amount band for one form of the food (raw, cooked, canned and drained…).
export const Serving = z.object({
  form: z.string().min(2),
  lowMaxG: grams.nullable(),        // null = no tested amount is low
  moderateFromG: grams.nullable(),
  highFromG: grams.nullable(),      // null = no upper limit found at normal amounts
  scaleMaxG: grams,                  // right end of the portion bar
  groups: z.array(Group),            // the FODMAP(s) that rise with the amount (empty only for noFodmaps foods)
  unit: z.enum(["g", "ml"]).default("g"), // drinks and milks are measured in ml
  groupUnknown: z.boolean().default(false), // no source names the limiting FODMAP; the group is a placeholder
  household: z.string().optional(),  // "about ½ cup" for lowMaxG
  sourceIds: z.array(z.string()).min(1),
  note: z.string().optional(),
});
export type Serving = z.infer<typeof Serving>;

export const Food = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  name: z.string().min(2),           // as used in a sentence: "sweet potato"
  aliases: z.array(z.string()).default([]),
  category: z.enum(["vegetables", "fruit", "nuts-seeds", "dairy", "grains", "legumes", "condiments", "herbs-spices", "protein", "drinks"]),
  regions: z.array(z.enum(["middle-eastern", "south-asian", "east-asian", "latin-american", "mediterranean", "african", "global"])).min(1),
  illustration: z.string(),
  tier: Tier,
  answer: z.string().min(20).max(320), // the first sentence(s), our words; quoted by AI answers
  // Only for foods without lab data: the plain one-word answer and line shown in the hero ("Usually not").
  estimateAnswer: z.object({ word: z.string().max(14), line: z.string().max(120) }).optional(),
  groups: z.array(Group),
  // Plain meat, fish, eggs, most oils: no FODMAPs at all. Shown as "No FODMAPs", ignored by the meal check.
  noFodmaps: z.boolean().default(false),
  // For noFodmaps foods that have traces (butter, parmesan): the box label and sentence shown instead of "No FODMAPs".
  freeNote: z.object({ label: z.string().max(16), line: z.string().max(120) }).optional(),
  servings: z.array(Serving).min(1),
  changes: z.array(z.object({ date: z.string(), text: z.string(), sourceIds: z.array(z.string()).min(1) })).default([]),
  disagreements: z.array(z.object({ text: z.string(), sourceIds: z.array(z.string()).min(1) })).default([]),
  notes: z.array(z.object({ text: z.string(), sourceIds: z.array(z.string()).min(1) })).default([]),
  swaps: z.array(z.object({ name: z.string(), slug: z.string().optional(), why: z.string().optional() })).default([]),
  faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  published: z.iso.date(),
  checked: z.iso.date(),
  status: z.enum(["verified", "draft"]),
});
export type Food = z.infer<typeof Food>;
export type FoodInput = z.input<typeof Food>;
