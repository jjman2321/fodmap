import type { Food } from "@/data/schema";
import { verdict } from "@/lib/fodmap";

// The hero answer (option A, based on BitePal/Oura): the grams are the biggest thing on the page.
export function BigAnswer({ food }: { food: Food }) {
  const s = food.servings[0];
  const v = verdict(food);
  const label =
    v === "depends" ? { t: "● Low up to", c: "text-brand-ink" } :
    v === "low" ? { t: "● Low at", c: "text-brand-ink" } :
    v === "high" ? { t: "■ No low amount found", c: "text-high-ink" } :
    { t: "○ Not lab-tested", c: "text-muted" };
  const big = v === "depends" || v === "low" ? `${s.lowMaxG} g` : v === "high" ? "High" : "Not tested";
  const side = v === "depends" || v === "low" ? s.household : v === "high" && s.highFromG ? `even at ${s.highFromG} g` : undefined;
  return (
    <div>
      <p className={`text-[13px] font-bold uppercase tracking-[0.06em] ${label.c}`}>{label.t}</p>
      <p className="mt-1 flex flex-wrap items-baseline gap-x-3">
        <span className={`font-display font-extrabold leading-none tracking-[-0.04em] ${big.length > 6 ? "text-[44px]" : "text-[64px]"}`}>{big}</span>
        {side && <span className="text-[17px] text-muted">{side}</span>}
      </p>
    </div>
  );
}
