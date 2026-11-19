import type { Food } from "@/data/schema";
import { GROUP_LABEL } from "@/lib/groups";
import { verdict } from "@/lib/fodmap";

// Answer-first hero (DECISIONS 2026-11-19, option 1): a big Yes/No, one sentence with grams, 3 traffic lights.
type Light = { tone: "low" | "mid" | "high" | "none"; label: string; grams: string; sub?: string };
const TONE = {
  low: { box: "bg-low/15", text: "text-brand-ink", shape: "●" },
  mid: { box: "bg-mid/20", text: "text-mid-ink", shape: "▲" },
  high: { box: "bg-high/15", text: "text-high-ink", shape: "■" },
  none: { box: "bg-chip", text: "text-muted", shape: "○" },
};

export function answerWord(food: Food) {
  const v = verdict(food);
  if (v === "estimate" || v === "unknown") return { word: food.estimateAnswer?.word ?? "Not tested", tone: "none" as const };
  if (v === "high") return { word: "High FODMAP", tone: "high" as const };
  return { word: "Low FODMAP", tone: "low" as const };
}

export function AnswerCard({ food, cite }: { food: Food; cite: (ids: string[]) => React.ReactNode }) {
  const s = food.servings[0];
  const v = verdict(food);
  const { word, tone } = answerWord(food);
  const groups = s.groups.map((g) => (g === "gos" ? "GOS" : GROUP_LABEL[g].toLowerCase())).join(" and ");
  const amount = s.lowMaxG !== null ? `${s.lowMaxG} g${s.household ? ` (${s.household})` : ""}` : "";
  const line =
    v === "depends" ? <>In a portion up to <b>{amount}</b>.{s.highFromG ? <> High from {s.highFromG} g.</> : s.moderateFromG ? <> Moderate from {s.moderateFromG} g.</> : null}</> :
    v === "low" ? <>At <b>{amount}</b>, the amount tested.</> :
    v === "high" ? <>{s.highFromG ? <>Even at <b>{s.highFromG} g</b>, </> : null}from {groups}. No low amount found.</> :
    <>{food.estimateAnswer?.line ?? "No lab has published a tested serve yet."}</>;

  const lights: Light[] = [];
  if (v === "estimate" || v === "unknown") lights.push({ tone: "none", label: "Low", grams: "not tested" });
  else {
    lights.push(s.lowMaxG !== null ? { tone: "low", label: "Low", grams: `${s.lowMaxG} g`, sub: s.household } : { tone: "none", label: "Low", grams: "none", sub: "no low amount" });
    if (s.moderateFromG !== null) lights.push({ tone: "mid", label: "Moderate", grams: `${s.moderateFromG} g` });
    if (s.highFromG !== null) lights.push({ tone: "high", label: "High", grams: `${s.highFromG} g+`, sub: s.lowMaxG === null ? "smallest tested" : undefined });
    if (s.moderateFromG === null && s.highFromG === null) lights.push({ tone: "none", label: "More", grams: "not tested", sub: `above ${s.lowMaxG} g` });
  }
  const textTone = TONE[tone].text;

  return (
    <section aria-label="Answer" className="mt-5 rounded-[var(--radius-card)] border border-line bg-card p-5 sm:p-6">
      <p className={`font-display text-[44px] font-extrabold leading-none tracking-[-0.035em] sm:text-[56px] ${textTone}`}>{word}</p>
      <p className="mt-2 text-[19px] leading-snug">{line}</p>
      <ul className="mt-4 flex gap-2">
        {lights.map((l) => (
          <li key={l.label} className={`flex-1 rounded-2xl px-2 py-2.5 text-center ${TONE[l.tone].box}`}>
            <p className={`text-[13px] font-bold ${TONE[l.tone].text}`}><span aria-hidden>{TONE[l.tone].shape} </span>{l.label}</p>
            <p className="font-display text-[21px] font-extrabold leading-tight">{l.grams}</p>
            {l.sub && <p className="text-[12px] leading-tight text-muted">{l.sub}</p>}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-[14px] text-muted">
        Watch for: <b className="text-ink">{groups}</b> · {v === "estimate" || v === "unknown" ? "Estimated from ingredients" : "Lab data"}{cite(s.sourceIds)}
      </p>
    </section>
  );
}
