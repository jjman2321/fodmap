"use client";
import { useEffect, useMemo, useState } from "react";
import type { Food } from "@/data/schema";
import { GROUP_LABEL, type Group } from "@/lib/groups";
import { stack, stackStatus, zoneFor } from "@/lib/fodmap";
import { matches, type IndexItem } from "@/lib/match";
import { ZONE_STYLE } from "./ZoneChip";
import { fmt, messages as m } from "@/lib/i18n";

type Line = { slug: string; grams: number };
const STATUS = { ok: { zone: "low", label: "Within one low serving" }, watch: { zone: "moderate", label: "May add up: watch this group" }, high: { zone: "high", label: "High" } } as const;

// Meal stacker: add foods + grams, see each FODMAP group's estimated load. Always labelled an estimate.
export function MealChecker({ items }: { items: IndexItem[] }) {
  const [lines, setLines] = useState<Line[]>([]);
  const [q, setQ] = useState("");
  const bySlug = useMemo(() => new Map(items.map((i) => [i.slug, i])), [items]);
  useEffect(() => {
    const add = new URLSearchParams(window.location.search).get("add");
    const it = add ? bySlug.get(add) : undefined;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- read the ?add= link once on load
    if (it) setLines([{ slug: it.slug, grams: it.servings[0].lowMaxG ?? it.servings[0].highFromG ?? 10 }]);
  }, [bySlug]);
  const add = (it: IndexItem) => { if (lines.length < 5 && !lines.some((l) => l.slug === it.slug)) setLines([...lines, { slug: it.slug, grams: it.servings[0].lowMaxG ?? 10 }]); setQ(""); };
  const res = matches(items, q).filter((i) => !lines.some((l) => l.slug === i.slug)).slice(0, 5);
  const loads = stack(lines.map((l) => ({ food: { name: bySlug.get(l.slug)!.name, servings: bySlug.get(l.slug)!.servings } as unknown as Food, servingIndex: 0, grams: l.grams })));

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div>
        <label htmlFor="meal-q" className="text-sm font-semibold">{m.checker.add}</label>
        <input id="meal-q" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder={m.checker.placeholder} autoComplete="off"
          className="mt-1 w-full rounded-full border border-line bg-card px-4 py-3 text-[16px] outline-none focus:border-brand" disabled={lines.length >= 5} />
        {q && (<ul className="mt-2 space-y-1">{res.map((it) => (<li key={it.slug}><button type="button" onClick={() => add(it)} className="w-full rounded-xl px-3 py-2 text-left hover:bg-chip">+ {it.name}</button></li>))}{res.length === 0 && <li className="px-3 py-2 text-[15px] text-muted">{fmt(m.checker.noResults, { q })}</li>}</ul>)}
        <ul className="mt-4 space-y-3">
          {lines.length === 0 && <li className="rounded-2xl bg-chip px-4 py-3 text-[15px] text-muted">{m.checker.empty}</li>}
          {lines.map((l, i) => {
            const it = bySlug.get(l.slug)!; const s = it.servings[0]; const z = zoneFor(s as Food["servings"][number], l.grams);
            return (
              <li key={l.slug} className="rounded-2xl border border-line bg-card px-4 py-3">
                <div className="flex items-center justify-between"><span className="font-medium">{it.name}</span>
                  <button type="button" onClick={() => setLines(lines.filter((x) => x.slug !== l.slug))} aria-label={fmt(m.checker.remove, { name: it.name })} className="grid h-9 w-9 place-items-center rounded-full hover:bg-chip">×</button></div>
                <div className="mt-1 flex items-center gap-3">
                  <input type="range" min={0} max={s.scaleMaxG} step={s.scaleMaxG <= 20 ? 0.5 : 1} value={l.grams} aria-label={`${it.name} grams`} aria-valuetext={`${l.grams} grams: ${m.zone[z]}`}
                    onChange={(e) => setLines(lines.map((x, j) => (j === i ? { ...x, grams: Number(e.target.value) } : x)))} className="w-full accent-[var(--brand)]" />
                  <span className="w-28 text-right text-[14px] tabular-nums">{l.grams} g · <span aria-hidden>{ZONE_STYLE[z].shape}</span> {m.zone[z]}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div aria-live="polite">
        <h3 className="text-sm font-semibold">By FODMAP group</h3>
        <ul className="mt-2 space-y-2">
          {loads.map((g) => { const st = STATUS[stackStatus(g)]; return (
            <li key={g.group} className="rounded-2xl border border-line bg-card px-4 py-3">
              <div className="flex items-center justify-between"><b>{GROUP_LABEL[g.group as Group]}</b><span className="text-[14px] font-semibold"><span aria-hidden className="mr-1">{ZONE_STYLE[st.zone].shape}</span>{st.label}</span></div>
              {Number.isFinite(g.load) && <div className="mt-2 h-2 overflow-hidden rounded-full bg-chip" aria-hidden><div className={`h-full ${ZONE_STYLE[st.zone].bar}`} style={{ width: `${Math.min(100, (g.load / 2) * 100)}%` }} /></div>}
              <p className="mt-1 text-[13px] text-muted">From {g.foods.join(", ")}{Number.isFinite(g.load) ? ` · ${Math.round(g.load * 100)}% of one low serving` : ""}</p>
            </li>); })}
        </ul>
        <p className="mt-3 text-[13px] text-muted">{m.checker.estimate}</p>
      </div>
    </div>
  );
}
