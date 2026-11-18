import { Food, Source, type FoodInput } from "./schema";
import { SOURCES } from "./sources";
import { FOODS_RAW } from "./foods";

export const sources = SOURCES.map((s) => Source.parse(s));
const sourceById = new Map(sources.map((s) => [s.id, s]));
export const getSource = (id: string) => sourceById.get(id);

export const allFoods: Food[] = (FOODS_RAW as FoodInput[]).map((f) => Food.parse(f));
// Only verified foods get a page (DitchSubs lesson: unverified rows never publish).
export const foods = allFoods.filter((f) => f.status === "verified").sort((a, b) => a.name.localeCompare(b.name));
const bySlug = new Map(foods.map((f) => [f.slug, f]));
export const getFood = (slug: string) => bySlug.get(slug);

// Every source a food cites, in first-use order, so pages can number them [1], [2]…
export function citedSources(food: Food) {
  const ids: string[] = [];
  const add = (xs: string[]) => xs.forEach((x) => { if (!ids.includes(x)) ids.push(x); });
  food.servings.forEach((s) => add(s.sourceIds));
  food.changes.forEach((c) => add(c.sourceIds));
  food.disagreements.forEach((d) => add(d.sourceIds));
  food.notes.forEach((n) => add(n.sourceIds));
  return ids.map((id) => sourceById.get(id)!).filter(Boolean);
}

// Related foods: share a FODMAP group, then same region, then same category. Computed, not hand-picked.
export function related(food: Food, n = 8): Food[] {
  const score = (o: Food) =>
    (o.groups.some((g) => food.groups.includes(g)) ? 3 : 0) + (o.regions.some((r) => food.regions.includes(r)) ? 2 : 0) + (o.category === food.category ? 1 : 0);
  return foods.filter((o) => o.slug !== food.slug).map((o) => ({ o, s: score(o) })).filter((x) => x.s > 0).sort((a, b) => b.s - a.s).slice(0, n).map((x) => x.o);
}

export function sameGroup(food: Food) {
  return foods.filter((o) => o.slug !== food.slug && o.groups.some((g) => food.groups.includes(g)));
}
