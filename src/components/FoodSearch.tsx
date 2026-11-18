"use client";
import Link from "next/link";
import { useId, useState } from "react";
import { matches, type IndexItem } from "@/lib/match";
import { ZONE_STYLE } from "./ZoneChip";
import { fmt, messages as m } from "@/lib/i18n";

// Search + instant answer + swap finder. Results are plain links, so it works with a keyboard and screen readers.
export function FoodSearch({ items, autoFocus = false }: { items: IndexItem[]; autoFocus?: boolean }) {
  const id = useId();
  const [q, setQ] = useState("");
  const res = matches(items, q).slice(0, 6);
  return (
    <div>
      <label htmlFor={id} className="sr-only">{m.nav.search}</label>
      <div className="flex items-center gap-2 rounded-full border border-line bg-card px-4 py-3 shadow-sm focus-within:border-brand">
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden fill="none" stroke="currentColor" strokeWidth="2" className="text-muted"><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></svg>
        <input id={id} type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder={m.checker.placeholder} autoComplete="off" autoFocus={autoFocus}
          className="w-full bg-transparent text-[17px] outline-none placeholder:text-muted" />
      </div>
      <div role="status" aria-live="polite" className="sr-only">{q ? `${res.length} results` : ""}</div>
      {q && (
        <ul className="mt-3 space-y-2">
          {res.length === 0 && <li className="rounded-2xl bg-chip px-4 py-3 text-[15px]">{fmt(m.checker.noResults, { q })}</li>}
          {res.map((it) => (
            <li key={it.slug} className="rounded-2xl border border-line bg-card px-4 py-3">
              <Link href={`/food/${it.slug}`} className="flex items-center justify-between gap-3">
                <span className="text-[17px] font-medium">{it.name[0].toUpperCase() + it.name.slice(1)}</span>
                <span className="text-[14px] font-semibold"><span aria-hidden className="mr-1">{ZONE_STYLE[it.zone as keyof typeof ZONE_STYLE].shape}</span>{it.chip}</span>
              </Link>
              {it.zone === "high" && it.swaps.length > 0 && (
                <p className="mt-1.5 text-[14px] text-muted">{m.food.tryInstead}: {it.swaps.map((s, i) => (<span key={s.name}>{i ? ", " : ""}{s.slug ? <Link href={`/food/${s.slug}`} className="text-brand-ink underline">{s.name}</Link> : s.name}</span>))}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
