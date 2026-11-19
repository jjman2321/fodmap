import Link from "next/link";
import type { Food } from "@/data/schema";
import { verdict } from "@/lib/fodmap";
import { FoodArt } from "./FoodArt";

// One food as a tile: picture, name and the answer in grams (same system as the food page hero).
export function FoodTile({ food }: { food: Food }) {
  const s = food.servings[0];
  const v = verdict(food);
  const big = v === "depends" || v === "low" ? "Low" : v === "high" ? "High" : (food.estimateAnswer?.word ?? "Not tested");
  const small = v === "depends" ? `up to ${s.lowMaxG} g` : v === "low" ? `at ${s.lowMaxG} g` : v === "high" ? "even small amounts" : "not lab-tested";
  const color = v === "high" ? "text-high-ink" : v === "estimate" || v === "unknown" ? "text-muted" : "text-brand-ink";
  return (
    <Link href={`/food/${food.slug}`} className="group flex flex-col rounded-[var(--radius-card)] border border-line bg-card p-3 transition-colors hover:border-brand sm:p-4">
      <FoodArt name={food.illustration} size={96} label="" />
      <span className="mt-2 font-display text-[17px] font-semibold leading-tight">{food.name[0].toUpperCase() + food.name.slice(1)}</span>
      <span className={`mt-1 font-display text-[24px] font-extrabold leading-none tracking-[-0.03em] ${color}`}>{big}<span className="sr-only"> FODMAP</span></span>
      <span className="mt-1 text-[13px] text-muted">{small}</span>
    </Link>
  );
}
