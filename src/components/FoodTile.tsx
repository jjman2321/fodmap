import Link from "next/link";
import type { Food } from "@/data/schema";
import { verdict } from "@/lib/fodmap";
import { FoodArt } from "./FoodArt";

// One food as a tile: picture, name and the answer in grams (same system as the food page hero).
export function FoodTile({ food }: { food: Food }) {
  const s = food.servings[0];
  const v = verdict(food);
  const big = v === "depends" || v === "low" ? `${s.lowMaxG} g` : v === "high" ? "High" : "Not tested";
  const small = v === "depends" ? "low up to" : v === "low" ? "low at" : v === "high" ? "no low amount" : "not lab-tested";
  const color = v === "high" ? "text-high-ink" : v === "estimate" || v === "unknown" ? "text-muted" : "text-brand-ink";
  return (
    <Link href={`/food/${food.slug}`} className="group flex flex-col rounded-[var(--radius-card)] border border-line bg-card p-3 transition-colors hover:border-brand sm:p-4">
      <FoodArt name={food.illustration} size={96} label="" />
      <span className="mt-2 font-display text-[17px] font-semibold leading-tight">{food.name[0].toUpperCase() + food.name.slice(1)}</span>
      <span className={`mt-1 text-[12px] font-semibold uppercase tracking-[0.05em] ${color}`}>{small}</span>
      <span className={`font-display text-[26px] font-extrabold leading-none tracking-[-0.03em] ${color}`}>{big}</span>
    </Link>
  );
}
