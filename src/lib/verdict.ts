import type { Food } from "@/data/schema";
import { verdict } from "./fodmap";
import type { Zone } from "./fodmap";

// The verdict chip and the ≤60-char title phrase for a food, from its main serving.
export function headline(food: Food): { zone: Zone; chip: string; short: string } {
  const s = food.servings[0];
  switch (verdict(food)) {
    case "low": return { zone: "low", chip: "Low", short: "Low at normal servings" };
    case "depends": return { zone: "low", chip: `Low up to ${s.lowMaxG} g`, short: `Low up to ${s.lowMaxG} g` };
    case "high": return { zone: "high", chip: "High", short: "High, even in small amounts" };
    case "estimate": return { zone: "untested", chip: "Estimate", short: "Estimated, not lab-tested" };
    default: return { zone: "untested", chip: "No lab data yet", short: "No lab data yet" };
  }
}

export const fmtDate = (iso: string) => new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", { month: "short", year: "numeric", timeZone: "UTC" });
