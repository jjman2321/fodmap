// "Is garlic low FODMAP?" vs "Are cherries low FODMAP?" (people search both ways; plurals read wrong with "Is").
const SINGULAR_S = new Set(["hummus", "couscous", "asparagus", "molasses", "ful medames", "swiss chard", "miso", "brussels"]);
export function isPlural(name: string): boolean {
  const n = name.toLowerCase().trim();
  if (SINGULAR_S.has(n)) return false;
  return /[^s]s$/.test(n) || /ies$/.test(n);
}
export const question = (name: string) => `${isPlural(name) ? "Are" : "Is"} ${name} low FODMAP?`;
