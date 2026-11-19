"use client";
import { useId, useState } from "react";
import type { Serving } from "@/data/schema";
import { GROUP_LABEL } from "@/lib/groups";
import { bands, zoneFor } from "@/lib/fodmap";
import { ZONE_STYLE } from "./ZoneChip";
import { messages as m } from "@/lib/i18n";

const SHORT = { low: "Low", moderate: "Mod", high: "High", untested: "Untested" } as const;

// The signature scale (DECISIONS 2026-11-19, option A): thick segments with labels, based on BitePal/Oura.
// Server-rendered at the start amount, so the HTML already carries the answer.
export function PortionSlider({ serving, start }: { serving: Serving; start?: number }) {
  const id = useId();
  const first = start ?? serving.lowMaxG ?? serving.highFromG ?? Math.round(serving.scaleMaxG / 2);
  const [g, setG] = useState(first);
  const z = zoneFor(serving, g);
  const pct = (g / serving.scaleMaxG) * 100;
  const step = serving.scaleMaxG <= 20 ? 0.5 : serving.scaleMaxG <= 60 ? 1 : 5;
  const groups = serving.groups.map((x) => GROUP_LABEL[x]).join(" + ");
  const segs = bands(serving);
  const picks = [serving.lowMaxG, serving.moderateFromG, serving.highFromG].filter((x): x is number => x !== null);
  const ticks = [0, serving.lowMaxG ?? serving.highFromG, serving.scaleMaxG]
    .filter((t): t is number => t !== null && t <= serving.scaleMaxG)
    .filter((t, i, a) => a.indexOf(t) === i)
    .filter((t, i, a) => i === 0 || (t - a[i - 1]) / serving.scaleMaxG >= 0.09 || t === serving.scaleMaxG);
  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <label htmlFor={id} className="font-display text-[32px] font-extrabold leading-none tracking-[-0.03em] tabular-nums">{g} g<span className="sr-only"> portion</span></label>
        <span role="status" aria-live="polite" className={`rounded-full px-3 py-1.5 text-[16px] font-bold ${ZONE_STYLE[z].cls}`}>
          <span aria-hidden className="mr-1">{ZONE_STYLE[z].shape}</span>{m.zone[z]}{z !== "untested" && z !== "low" && groups ? ` in ${groups.toLowerCase()}` : ""}
        </span>
      </div>
      <div className="relative mt-4 h-5">
        <div className="absolute inset-0 flex gap-1" aria-hidden>
          {segs.map((b, i) => (<div key={b.zone + b.from} className={`${ZONE_STYLE[b.zone].bar} ${i === 0 ? "rounded-l-full" : "rounded-l-[4px]"} ${i === segs.length - 1 ? "rounded-r-full" : "rounded-r-[4px]"}`} style={{ flexGrow: b.to - b.from, flexBasis: 0 }} />))}
        </div>
        <div aria-hidden className="pointer-events-none absolute top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-ink bg-card shadow-md" style={{ left: `${pct}%` }} />
        <input id={id} type="range" min={0} max={serving.scaleMaxG} step={step} value={g} onChange={(e) => setG(Number(e.target.value))}
          aria-valuetext={`${g} grams: ${m.zone[z]}`} className="absolute inset-0 h-full w-full cursor-pointer opacity-0" />
      </div>
      <div className="mt-2 flex gap-1 text-[12.5px] font-semibold" aria-hidden>
        {segs.map((b) => (<span key={b.zone + b.from} className={`truncate ${b.zone === "low" ? "text-brand-ink" : b.zone === "moderate" ? "text-mid-ink" : b.zone === "high" ? "text-high-ink" : "text-muted"}`} style={{ flexGrow: b.to - b.from, flexBasis: 0 }}>
          {b.to - b.from >= (b.zone === "untested" ? 0.24 : 0.12) ? `${ZONE_STYLE[b.zone].shape} ${SHORT[b.zone]}` : ""}</span>))}
      </div>
      <div className="relative mt-1 h-4 text-[12px] text-muted tabular-nums" aria-hidden>
        {ticks.map((t, i) => (<span key={t} className="absolute whitespace-nowrap" style={{ left: `${(t / serving.scaleMaxG) * 100}%`, transform: i === 0 ? "none" : i === ticks.length - 1 ? "translateX(-100%)" : "translateX(-50%)" }}>{t} g</span>))}
      </div>
      {picks.length > 1 && (
        <div className="mt-4 flex flex-wrap gap-2" aria-label="Tested amounts">
          {picks.map((p) => (<button key={p} type="button" onClick={() => setG(p)} aria-pressed={g === p}
            className={`rounded-full border px-3 py-1.5 text-[14px] font-semibold tabular-nums ${g === p ? "border-ink bg-ink text-paper" : "border-line bg-card hover:border-brand"}`}>{p} g</button>))}
        </div>
      )}
    </div>
  );
}
