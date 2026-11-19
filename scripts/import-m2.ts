// Merge research/m2/batch-*.json into src/data/generated/{foods,sources}.json.
// - Sources are de-duplicated by URL (existing ids in src/data/sources.ts win).
// - Each food is checked against the schema and the data rules; failures are skipped and listed in research/m2/import-report.md.
// Usage: npx tsx scripts/import-m2.ts
import fs from "node:fs";
import path from "node:path";
import { Food, Source, type FoodInput } from "../src/data/schema";
import { SOURCES } from "../src/data/sources";
import { FOODS_RAW } from "../src/data/foods";

const dir = "research/m2";
const files = fs.readdirSync(dir).filter((f) => /^batch-\d+\.json$/.test(f)).sort();
const byUrl = new Map(SOURCES.map((s) => [norm(s.url), s.id]));
const outSources = new Map<string, Source>();
const outFoods: FoodInput[] = [];
const report: string[] = [];
const existing = new Set(FOODS_RAW.map((f) => f.slug));
const BANNED = [/\bsafe\b/i, /\bcures?\b/i, /\btreats?\b/i, /ibs[- ]friendly/i, /\bcertified\b/i, /monash[- ]approved/i, /\bguaranteed?\b/i];

// Editorial decisions applied on import (DECISIONS 2026-11-19):
// - plain meat, fish, eggs and plain oils contain no FODMAPs → noFodmaps (no fake gram limit, ignored by the meal check);
// - milks and drinks are measured in ml;
// - kefir: Monash's public rating is "high" (lab data without a gram figure) → lab-tested, high.
const NO_FODMAP = new Set(["eggs", "chicken", "beef", "salmon", "olive-oil"]);
const NOT_PUBLIC = new Set(["green-tea", "kombucha"]);
const TRACE = new Set(["butter", "parmesan"]);
const ML = new Set(["lactose-free-milk", "almond-milk", "oat-milk", "soy-milk", "coconut-milk", "kefir"]);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function curate(f: any) {
  if (NO_FODMAP.has(f.slug)) { f.noFodmaps = true; f.groups = []; for (const s of f.servings) s.groups = []; }
  if (ML.has(f.slug) || f.category === "drinks") for (const s of f.servings) s.unit = "ml";
  if (f.slug === "kefir") { f.tier = "lab-tested"; delete f.estimateAnswer; }
  // Lab-tested by Monash, but no public gram amount: say exactly that, never "not lab-tested".
  if (NOT_PUBLIC.has(f.slug)) f.tier = "amount-not-public";
  // Placeholder groups (no source names the limiting FODMAP) must not be shown as findings.
  for (const s of f.servings) if (/placeholder|no source names|name no FODMAP|don.t name|doesn.t name|not named|I chose|we chose/i.test(s.note ?? "")) s.groupUnknown = true;
  // Butter and parmesan: only traces of lactose, no realistic gram limit published.
  if (TRACE.has(f.slug)) { f.noFodmaps = true; f.freeNote = { label: "Trace lactose", line: "Only traces of lactose, so normal amounts are low FODMAP." }; f.groups = []; for (const s of f.servings) s.groups = []; }
}

function norm(u: string) { return u.trim().replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "").toLowerCase(); }

for (const file of files) {
  const raw = JSON.parse(fs.readFileSync(path.join(dir, file), "utf8"));
  const remap = new Map<string, string>();
  for (const s0 of raw.sources ?? []) {
    const s = Source.safeParse({ ...s0, accessed: s0.accessed ?? "2026-11-19" });
    if (!s.success) { report.push(`- ${file}: source ${s0.id} invalid: ${s.error.issues[0].message}`); continue; }
    const key = norm(s.data.url);
    const known = byUrl.get(key);
    if (known) { remap.set(s.data.id, known); continue; }
    let id = s.data.id;
    if ([...outSources.keys()].includes(id) || SOURCES.some((x) => x.id === id)) id = `${file.replace(".json", "")}-${id}`;
    outSources.set(id, { ...s.data, id });
    byUrl.set(key, id);
    remap.set(s.data.id, id);
  }
  const fix = (ids: string[]) => ids.map((i) => remap.get(i) ?? i);
  for (const f0 of raw.foods ?? []) {
    if (existing.has(f0.slug) || outFoods.some((f) => f.slug === f0.slug)) { report.push(`- ${file}: ${f0.slug} skipped (already on the site)`); continue; }
    const f1 = {
      ...f0,
      servings: (f0.servings ?? []).map((s: { sourceIds: string[] }) => ({ ...s, sourceIds: fix(s.sourceIds ?? []) })),
      changes: (f0.changes ?? []).map((c: { sourceIds: string[] }) => ({ ...c, sourceIds: fix(c.sourceIds ?? []) })),
      disagreements: (f0.disagreements ?? []).map((c: { sourceIds: string[] }) => ({ ...c, sourceIds: fix(c.sourceIds ?? []) })),
      notes: (f0.notes ?? []).map((c: { sourceIds: string[] }) => ({ ...c, sourceIds: fix(c.sourceIds ?? []) })),
    };
    curate(f1);
    const p = Food.safeParse(f1);
    const problems: string[] = [];
    if (!p.success) problems.push(...p.error.issues.slice(0, 3).map((i) => `${i.path.join(".")}: ${i.message}`));
    else {
      const f = p.data;
      const allIds = [...f.servings.flatMap((s) => s.sourceIds), ...f.changes.flatMap((c) => c.sourceIds), ...f.disagreements.flatMap((d) => d.sourceIds), ...f.notes.flatMap((n) => n.sourceIds)];
      for (const id of allIds) if (!outSources.has(id) && !SOURCES.some((s) => s.id === id)) problems.push(`unknown source ${id}`);
      if ((f.tier === "estimated" || f.tier === "unknown") && f.servings.some((s) => s.lowMaxG !== null)) problems.push("estimate with a low amount");
      if (f.tier === "estimated" && !f.estimateAnswer) problems.push("estimate without estimateAnswer");
      if (f.estimateAnswer && /\blow\b/i.test(f.estimateAnswer.word)) problems.push("estimate word says low");
      for (const s of f.servings) {
        const pts = [s.lowMaxG, s.moderateFromG, s.highFromG].filter((x): x is number => x !== null);
        if (pts.some((x, i) => i && x < pts[i - 1])) problems.push(`${s.form}: zones out of order`);
        if (pts.some((x) => x > s.scaleMaxG)) problems.push(`${s.form}: zone beyond scale`);
        if (!s.groups.length && !f.noFodmaps) problems.push(`${s.form}: no group`);
      }
      const text = [f.answer, ...f.notes.map((n) => n.text), ...f.faq.flatMap((q) => [q.q, q.a])].join(" ");
      for (const b of BANNED) if (b.test(text)) problems.push(`banned word ${b}`);
    }
    if (problems.length) { report.push(`- ${file}: **${f0.slug} skipped**: ${problems.join("; ")}`); continue; }
    outFoods.push(f1);
  }
}
// Swap slugs that don't exist become plain names.
const slugs = new Set([...existing, ...outFoods.map((f) => f.slug)]);
for (const f of outFoods) f.swaps = (f.swaps ?? []).map((s) => (s.slug && !slugs.has(s.slug) ? { name: s.name, why: s.why } : s));
// Only keep sources that some food cites.
const used = new Set(outFoods.flatMap((f) => [...f.servings.flatMap((s) => s.sourceIds), ...(f.changes ?? []).flatMap((c) => c.sourceIds), ...(f.disagreements ?? []).flatMap((d) => d.sourceIds), ...(f.notes ?? []).flatMap((n) => n.sourceIds)]));
const keptSources = [...outSources.values()].filter((s) => used.has(s.id));
fs.writeFileSync("src/data/generated/foods.json", JSON.stringify(outFoods, null, 1));
fs.writeFileSync("src/data/generated/sources.json", JSON.stringify(keptSources, null, 1));
fs.writeFileSync(path.join(dir, "import-report.md"), `# M2 import report\n\nImported ${outFoods.length} foods and ${keptSources.length} new sources from ${files.length} batch files.\n\n${report.join("\n") || "No problems."}\n`);
console.log(`foods ${outFoods.length}, sources ${keptSources.length}, problems ${report.filter((r) => r.includes("skipped**")).length}`);
