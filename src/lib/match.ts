// Client-safe: no food data imported here (it would ship to phones).
export type IndexItem = {
  slug: string; name: string; aliases: string[]; chip: string; zone: string; art: string;
  servings: { form: string; lowMaxG: number | null; moderateFromG: number | null; highFromG: number | null; scaleMaxG: number; groups: string[]; unit: string }[];
  swaps: { name: string; slug?: string }[];
};

// Normalise only for matching, never for display.
export const norm = (s: string) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();
export function matches(items: IndexItem[], q: string): IndexItem[] {
  const n = norm(q);
  if (!n) return [];
  const score = (it: IndexItem) => {
    const names = [it.name, ...it.aliases].map(norm);
    if (names.some((x) => x === n)) return 3;
    if (names.some((x) => x.startsWith(n))) return 2;
    if (names.some((x) => x.includes(n) || n.includes(x))) return 1;
    return 0;
  };
  return items.map((it) => ({ it, s: score(it) })).filter((x) => x.s > 0).sort((a, b) => b.s - a.s || a.it.name.localeCompare(b.it.name)).map((x) => x.it);
}
