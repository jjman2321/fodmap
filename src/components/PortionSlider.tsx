"use client";
import { useId, useState } from "react";
import type { Serving } from "@/data/schema";
import { GROUP_LABEL } from "@/lib/groups";
import { bands, zoneFor } from "@/lib/fodmap";
import { ZONE_STYLE } from "./ZoneChip";
import { messages as m } from "@/lib/i18n";

// The signature diagram. Server-rendered with the start amount, so the HTML already carries the answer.
export function PortionSlider({ serving, start }: { serving: Serving; start?: number }) {
  const id = useId();
  const first = start ?? serving.lowMaxG ?? serving.highFromG ?? Math.round(serving.scaleMaxG / 2);
  const [g, setG] = useState(first);
  const z = zoneFor(serving, g);
  const pct = (g / serving.scaleMaxG) * 100;
  const step = serving.scaleMaxG <= 20 ? 0.5 : serving.scaleMaxG <= 60 ? 1 : 5;
  const groups = serving.groups.map((x) => GROUP_LABEL[x]).join(" + ");
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="text-sm font-semibold">{m.food.slider}: <span className="tabular-nums">{g} g</span></label>
        <span role="status" aria-live="polite" className="text-sm">
          <span aria-hidden className="mr-1">{ZONE_STYLE[z].shape}</span>
          <b>{m.zone[z]}</b>{z !== "untested" && z !== "low" && groups ? ` in ${groups.toLowerCase()}` : ""}
        </span>
      </div>
      <div className="relative mt-3 h-4">
        <div className="absolute inset-0 flex overflow-hidden rounded-full" aria-hidden>
          {bands(serving).map((b) => (<div key={b.zone + b.from} className={ZONE_STYLE[b.zone].bar} style={{ width: `${(b.to - b.from) * 100}%` }} />))}
        </div>
        <div aria-hidden className="pointer-events-none absolute top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-ink bg-card shadow" style={{ left: `${pct}%` }} />
        <input id={id} type="range" min={0} max={serving.scaleMaxG} step={step} value={g} onChange={(e) => setG(Number(e.target.value))}
          aria-valuetext={`${g} grams: ${m.zone[z]}`} className="absolute inset-0 h-full w-full cursor-pointer opacity-0" />
      </div>
      <div className="mt-2 flex justify-between text-[12.5px] text-muted tabular-nums" aria-hidden>
        <span>0 g</span>{serving.lowMaxG !== null && <span>{serving.lowMaxG} g</span>}<span>{serving.scaleMaxG} g</span>
      </div>
      <p className="mt-1 text-[12.5px] text-muted">{m.food.sliderHelp}</p>
    </div>
  );
}
