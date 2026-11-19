import { describe, expect, it } from "vitest";
import { allFoods, foods, getSource, citedSources } from "@/data";
import { headline } from "@/lib/verdict";
import { fmt, messages as m } from "@/lib/i18n";
import en from "@/messages/en.json";

const DAY = 86_400_000;
// Copy lint (LESSONS §7): health claims we never make.
const BANNED = [/\bsafe\b/i, /\bcures?\b/i, /\btreats?\b/i, /safe for ibs/i, /ibs[- ]friendly/i, /\bcertified\b/i, /monash[- ]approved/i, /\bguaranteed?\b/i];

describe("data rules (DECISIONS §0)", () => {
  it("has seed foods", () => expect(foods.length).toBeGreaterThanOrEqual(5));

  for (const f of allFoods) {
    describe(f.slug, () => {
      it("every source id resolves", () => {
        const ids = [...f.servings.flatMap((s) => s.sourceIds), ...f.changes.flatMap((c) => c.sourceIds), ...f.disagreements.flatMap((d) => d.sourceIds), ...f.notes.flatMap((n) => n.sourceIds)];
        for (const id of ids) expect(getSource(id), `${f.slug} cites unknown source ${id}`).toBeDefined();
      });
      it("only lab data may say low", () => {
        if (f.tier === "estimated" || f.tier === "unknown") for (const s of f.servings) expect(s.lowMaxG, `${f.slug} ${s.form}`).toBeNull();
        for (const s of f.servings) if (s.lowMaxG !== null) expect(getSource(s.sourceIds[0])!.kind).not.toBe("dataset");
      });
      it("an estimate's big word never says low", () => {
        if (f.estimateAnswer) expect(f.estimateAnswer.word.toLowerCase()).not.toMatch(/\blow\b/);
        if (f.tier === "estimated") expect(f.estimateAnswer, `${f.slug} needs an estimateAnswer`).toBeDefined();
      });
      it("zones are in order and on the scale", () => {
        for (const s of f.servings) {
          const pts = [s.lowMaxG, s.moderateFromG, s.highFromG].filter((x): x is number => x !== null);
          expect([...pts].sort((a, b) => a - b)).toEqual(pts);
          for (const p of pts) expect(p).toBeLessThanOrEqual(s.scaleMaxG);
          expect(s.groups.length, `${f.slug} ${s.form} needs a FODMAP group`).toBeGreaterThan(0);
        }
      });
      it("swap links point to real pages", () => {
        for (const s of f.swaps) if (s.slug) expect(foods.some((o) => o.slug === s.slug), `${f.slug} → ${s.slug}`).toBe(true);
      });
      it("title ≤ 60 characters", () => {
        expect(`${fmt(m.food.title, { name: f.name })} ${headline(f).short}`.slice(0, 60).length).toBeLessThanOrEqual(60);
      });
      it("copy lint: no health claims", () => {
        const text = [f.answer, ...f.notes.map((n) => n.text), ...f.faq.flatMap((q) => [q.q, q.a]), ...f.swaps.map((s) => s.why ?? "")].join(" ");
        for (const b of BANNED) expect(text, `${f.slug}: ${b}`).not.toMatch(b);
      });
      it("verified foods were checked in the last 180 days", () => {
        if (f.status === "verified") expect(Date.now() - Date.parse(f.checked)).toBeLessThan(180 * DAY);
      });
      it("cites at least one source", () => expect(citedSources(f).length).toBeGreaterThan(0));
    });
  }
});

describe("UI text", () => {
  it("copy lint on messages", () => { const t = JSON.stringify(en); for (const b of BANNED.filter((x) => !/treats?/.test(x.source))) expect(t).not.toMatch(b); });
});

// Safe-page test (LESSONS §5): food pages must not be near-duplicates of each other.
describe("unique text between food pages", () => {
  const shingles = (s: string) => { const w = s.toLowerCase().replace(/[^a-z0-9 ]/g, " ").split(/\s+/).filter(Boolean); const out = new Set<string>(); for (let i = 0; i + 5 <= w.length; i++) out.add(w.slice(i, i + 5).join(" ")); return out; };
  const text = (f: (typeof foods)[number]) => [f.answer, ...f.notes.map((n) => n.text), ...f.changes.map((c) => c.text), ...f.disagreements.map((d) => d.text), ...f.faq.flatMap((q) => [q.q, q.a])].join(" ");
  it("each food's own text is ≥ 50% unique against every other food", () => {
    for (const a of foods) for (const b of foods) {
      if (a === b) continue;
      const A = shingles(text(a)), B = shingles(text(b));
      if (!A.size) continue;
      const shared = [...A].filter((x) => B.has(x)).length;
      expect(shared / A.size, `${a.slug} vs ${b.slug}`).toBeLessThan(0.5);
    }
  });
});
