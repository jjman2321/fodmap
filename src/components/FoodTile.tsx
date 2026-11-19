import Link from "next/link";
import type { Food } from "@/data/schema";
import { verdict } from "@/lib/fodmap";
import { FoodArt } from "./FoodArt";
import { ZoneChip } from "./ZoneChip";
import { amt } from "@/lib/units";

// One food: picture, name, one Low/High pill with the grams. Kept quiet so a grid of them stays calm.
export function FoodTile({ food, showAnswer = true }: { food: Food; showAnswer?: boolean }) {
  const s = food.servings[0];
  const v = verdict(food);
  const chip =
    v === "free" ? { zone: "low" as const, label: food.freeNote?.label ?? "No FODMAPs" } :
    v === "moderate" ? { zone: "moderate" as const, label: "Moderate" } :
    v === "small" ? { zone: "moderate" as const, label: `Small amounts · ${amt(s, s.lowMaxG)}` } :
    v === "depends" ? { zone: "low" as const, label: `Low · up to ${amt(s, s.lowMaxG)}` } :
    v === "low" ? { zone: "low" as const, label: `Low · ${amt(s, s.lowMaxG)}` } :
    v === "high" ? { zone: "high" as const, label: "High" } :
    { zone: "untested" as const, label: food.estimateAnswer?.word ?? "Not tested" };
  return (
    <Link href={`/food/${food.slug}`} className="flex flex-col items-center rounded-[var(--radius-card)] border border-line bg-card px-3 pb-4 pt-3 text-center transition-colors hover:border-brand">
      <FoodArt name={food.illustration} size={88} label="" />
      <span className="mt-2 font-display text-[17px] font-semibold leading-tight">{food.name[0].toUpperCase() + food.name.slice(1)}</span>
      {showAnswer && <span className="mt-2"><ZoneChip zone={chip.zone} label={chip.label} /></span>}
    </Link>
  );
}
