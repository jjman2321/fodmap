import type { Food } from "@/data/schema";
import { verdict } from "./fodmap";
import type { Zone } from "./fodmap";

// The verdict chip and the ≤60-char title phrase for a food, from its main serving.
export function headline(food: Food): { zone: Zone; chip: string; short: string } {
  const s = food.servings[0];
  switch (verdict(food)) {
    case "low": return { zone: "low", chip: `Low at ${s.lowMaxG} g`, short: `Low at ${s.lowMaxG} g` };
    case "depends": return { zone: "low", chip: `Low up to ${s.lowMaxG} g`, short: `Low up to ${s.lowMaxG} g` };
    case "high": return { zone: "high", chip: "High", short: "High, even in small amounts" };
    case "estimate": return { zone: "untested", chip: "Not lab-tested", short: "Not lab-tested yet" };
    default: return { zone: "untested", chip: "No lab data yet", short: "No lab data yet" };
  }
}

export const fmtDate = (iso: string) => new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", { month: "short", year: "numeric", timeZone: "UTC" });

// One short line under a food name in lists: form/measure + the FODMAP to watch.
const GL: Record<string, string> = { fructans: "fructans", gos: "GOS", lactose: "lactose", fructose: "fructose", sorbitol: "sorbitol", mannitol: "mannitol", "other-polyol": "polyol" };
export function subline(food: Food): string {
  const s = food.servings[0];
  const what = s.household && s.lowMaxG !== null ? `${s.household}, ${s.form}` : s.form;
  return `${what[0].toUpperCase()}${what.slice(1)} · ${s.groups.map((g) => GL[g]).join(", ")}`;
}
export const formLabel = (food: Food, form: string) => (form.toLowerCase().includes(food.name.toLowerCase()) ? "" : form);
