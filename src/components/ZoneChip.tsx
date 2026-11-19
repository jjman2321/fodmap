import type { Zone } from "@/lib/fodmap";
import { messages as m } from "@/lib/i18n";

// Colour + shape + word, so zones never rely on colour alone (DECISIONS batch 1).
export const ZONE_STYLE: Record<Zone, { shape: string; cls: string; bar: string }> = {
  low: { shape: "●", cls: "bg-low/15 text-brand-ink", bar: "bg-low" },
  moderate: { shape: "▲", cls: "bg-mid/20 text-mid-ink", bar: "bg-mid" },
  high: { shape: "■", cls: "bg-high/15 text-high-ink", bar: "bg-high" },
  untested: { shape: "○", cls: "bg-chip text-muted", bar: "bg-line" },
};

export function ZoneChip({ zone, label }: { zone: Zone; label?: string }) {
  const s = ZONE_STYLE[zone];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[13px] font-semibold ${s.cls}`}>
      <span aria-hidden>{s.shape}</span>{label ?? m.zone[zone]}
    </span>
  );
}
