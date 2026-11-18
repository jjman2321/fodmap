import type { Food, Group, Serving } from "@/data/schema";

export type Zone = "low" | "moderate" | "high" | "untested";

// Which zone a given amount falls in. Gaps between tested amounts stay "untested": we never guess.
export function zoneFor(s: Serving, g: number): Zone {
  if (s.lowMaxG !== null && g <= s.lowMaxG) return "low";
  if (s.highFromG !== null && g >= s.highFromG) return "high";
  if (s.moderateFromG !== null && g >= s.moderateFromG) return "moderate";
  return "untested";
}

export type Verdict = "low" | "depends" | "high" | "estimate" | "unknown";

// The headline answer for the main form (first serving).
export function verdict(food: Food): Verdict {
  if (food.tier === "estimated") return "estimate";
  if (food.tier === "unknown") return "unknown";
  const s = food.servings[0];
  if (s.lowMaxG === null) return "high";
  if (s.highFromG === null && s.moderateFromG === null) return "low";
  return "depends";
}

// Bands for drawing the portion bar, as fractions 0..1 of scaleMaxG.
export function bands(s: Serving): { zone: Zone; from: number; to: number }[] {
  const max = s.scaleMaxG;
  const cut = (n: number | null) => (n === null ? null : Math.min(n, max) / max);
  const out: { zone: Zone; from: number; to: number }[] = [];
  let at = 0;
  const low = cut(s.lowMaxG), mod = cut(s.moderateFromG), high = cut(s.highFromG);
  if (low !== null) { out.push({ zone: "low", from: 0, to: low }); at = low; }
  const nextTested = mod ?? high ?? 1;
  if (nextTested > at) { out.push({ zone: low === null && mod === null && high !== null && high <= 0.02 ? "high" : "untested", from: at, to: nextTested }); at = nextTested; }
  if (mod !== null && high !== null && high > mod) { out.push({ zone: "moderate", from: mod, to: high }); at = high; }
  else if (mod !== null && high === null) { out.push({ zone: "moderate", from: mod, to: 1 }); at = 1; }
  if (high !== null && at < 1) out.push({ zone: "high", from: Math.max(at, high), to: 1 });
  return out.filter((b) => b.to - b.from > 0.0001);
}

// Meal stacking estimate. Each food's load in a group = grams eaten / its low limit for that form.
// A load of 1.0 means "a full low serving of that FODMAP". Loads in the same group add up.
// No lab has tested meals, so the result is always labelled an estimate.
export type MealItem = { food: Food; servingIndex: number; grams: number };
export type GroupLoad = { group: Group; load: number; foods: string[]; anyHigh: boolean };

export function stack(items: MealItem[]): GroupLoad[] {
  const by = new Map<Group, GroupLoad>();
  for (const it of items) {
    const s = it.food.servings[it.servingIndex] ?? it.food.servings[0];
    const z = zoneFor(s, it.grams);
    for (const g of s.groups) {
      const cur = by.get(g) ?? { group: g, load: 0, foods: [], anyHigh: false };
      const load = s.lowMaxG ? it.grams / s.lowMaxG : Number.POSITIVE_INFINITY;
      cur.load += load;
      cur.foods.push(it.food.name);
      cur.anyHigh ||= z === "high" || s.lowMaxG === null;
      by.set(g, cur);
    }
  }
  return [...by.values()].sort((a, b) => b.load - a.load);
}

export function stackStatus(l: GroupLoad): "ok" | "watch" | "high" {
  if (l.anyHigh) return "high";
  return l.load <= 1 ? "ok" : "watch";
}
