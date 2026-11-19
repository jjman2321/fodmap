import Image from "next/image";

// Illustrated set (generated in one style, 480 px WebP in public/art). Others fall back to the simple drawings below.
const RASTER = new Set(["garlic", "chickpeas", "sweet-potato", "avocado", "strawberries", "tahini", "hummus"]);

// Original flat food drawings (no stock photos, DECISIONS §0). One simple shape set, ink outline + soft fill.
const S = { stroke: "var(--ink)", strokeWidth: 3, strokeLinejoin: "round" as const, strokeLinecap: "round" as const };

const ART: Record<string, React.ReactNode> = {
  garlic: (<g><path d="M60 26c-2 5-2 9 0 13" {...S} fill="none" /><path d="M60 38c-18 4-30 18-30 34 0 15 13 24 30 24s30-9 30-24c0-16-12-30-30-34z" fill="#FFF8EC" {...S} /><path d="M60 40c-7 12-8 34-3 54M60 40c7 12 8 34 3 54M60 40c-13 7-19 26-16 48M60 40c13 7 19 26 16 48" {...S} strokeWidth={2} fill="none" opacity=".5" /></g>),
  "sweet-potato": (<g transform="rotate(-28 60 62)"><path d="M18 62c0-14 18-24 42-24s44 9 44 22-18 24-44 24S18 76 18 62z" fill="#F2B27A" {...S} /><path d="M36 53c4 2 6 2 9 0M62 49c3 2 6 2 8 0M50 72c3 2 6 2 9 0M78 66c3 2 5 2 8 0" {...S} strokeWidth={2} fill="none" opacity=".55" /><path d="M104 60l10-2M16 63l-8 3" {...S} /></g>),
  avocado: (<g><path d="M60 22c-14 0-20 18-26 34-6 14-8 30 4 40 6 5 14 6 22 6s16-1 22-6c12-10 10-26 4-40-6-16-12-34-26-34z" fill="#7DB86B" {...S} /><path d="M60 36c-9 0-13 14-17 26-4 11-4 22 4 28 4 3 8 4 13 4s9-1 13-4c8-6 8-17 4-28-4-12-8-26-17-26z" fill="#E4F0B5" stroke="none" /><circle cx="60" cy="74" r="13" fill="#9A6A3D" {...S} /></g>),
  tahini: (<g><rect x="34" y="34" width="52" height="64" rx="10" fill="#E9CFA4" {...S} /><rect x="30" y="24" width="60" height="14" rx="5" fill="#2E8B57" {...S} /><path d="M38 60c8-4 14 4 22 0s14-4 22 0" {...S} strokeWidth={2} fill="none" opacity=".5" /><rect x="44" y="66" width="32" height="16" rx="4" fill="#FFF8EC" {...S} strokeWidth={2} /></g>),
  strawberries: (<g><path d="M60 42c-20 0-30 10-28 24 3 20 18 34 28 36 10-2 25-16 28-36 2-14-8-24-28-24z" fill="#E4584A" {...S} /><path d="M44 40c6-6 10-6 16 0 6-6 10-6 16 0-4 6-10 8-16 6-6 2-12 0-16-6z" fill="#3A9B66" {...S} strokeWidth={2.5} /><path d="M60 34v-8" {...S} />{[[48,58],[60,56],[72,58],[52,72],[68,72],[60,86]].map(([x,y]) => (<ellipse key={`${x}${y}`} cx={x} cy={y} rx="1.8" ry="2.6" fill="#FFE7A8" />))}</g>),
  chickpeas: (<g>{[[44,52],[64,46],[80,58],[50,74],[70,70],[58,90],[38,90],[82,82]].map(([x,y]) => (<g key={`${x}${y}`}><circle cx={x} cy={y} r="11" fill="#EBC98E" {...S} strokeWidth={2.5} /><path d={`M${x - 4} ${y - 5}c3 3 3 7 0 10`} {...S} strokeWidth={1.8} fill="none" opacity=".45" /></g>))}</g>),
  feta: (<g><path d="M28 54l40-18 26 14v32L54 100 28 86z" fill="#FFFDF6" {...S} /><path d="M28 54l26 14 40-18M54 68v32" {...S} fill="none" /><circle cx="40" cy="74" r="2.5" fill="var(--ink)" opacity=".3" /><circle cx="72" cy="78" r="2.5" fill="var(--ink)" opacity=".3" /><circle cx="78" cy="60" r="2" fill="var(--ink)" opacity=".3" /></g>),
  hummus: (<g><ellipse cx="60" cy="70" rx="40" ry="24" fill="#FFFDF6" {...S} /><ellipse cx="60" cy="66" rx="30" ry="15" fill="#EBCB95" {...S} strokeWidth={2.5} /><path d="M40 66c8-8 32-8 40 0" {...S} strokeWidth={2} fill="none" opacity=".5" /><circle cx="60" cy="64" r="6" fill="#C9A227" stroke="none" opacity=".8" />{[[52,60],[68,62],[60,70]].map(([x,y]) => (<circle key={`${x}${y}`} cx={x} cy={y} r="3" fill="#EBC98E" {...S} strokeWidth={1.5} />))}<circle cx="74" cy="70" r="1.8" fill="#C0392B" /><circle cx="46" cy="70" r="1.8" fill="#C0392B" /></g>),
  lentils: (<g><path d="M24 58h72c0 20-16 34-36 34S24 78 24 58z" fill="#FFFDF6" {...S} />{[[40,54],[50,50],[60,48],[70,50],[80,54],[46,58],[56,56],[66,56],[76,58],[52,62],[62,62],[70,62]].map(([x,y]) => (<ellipse key={`${x}${y}`} cx={x} cy={y} rx="5" ry="3.4" fill="#7FA35A" {...S} strokeWidth={1.5} />))}</g>),
  pomegranate: (<g><path d="M60 30l-6 8h12z" fill="#C0392B" {...S} strokeWidth={2.5} /><circle cx="60" cy="70" r="32" fill="#D9473C" {...S} /><path d="M50 36l4-10 6 8 6-8 4 10" fill="#D9473C" {...S} strokeWidth={2.5} />{[[50,64],[60,60],[70,66],[56,76],[66,78],[46,76],[74,78]].map(([x,y]) => (<circle key={`${x}${y}`} cx={x} cy={y} r="3" fill="#F7B3AE" stroke="none" />))}</g>),
  bowl: (<g><path d="M24 58h72c0 20-16 36-36 36S24 78 24 58z" fill="#F3E3C3" {...S} /><path d="M38 56c4-10 14-14 22-12 8-2 18 2 22 12" {...S} fill="#E9CFA4" /><circle cx="56" cy="50" r="2.4" fill="var(--ink)" /><circle cx="66" cy="52" r="2.4" fill="var(--ink)" /></g>),
  leaf: (<g><path d="M30 88C30 52 52 30 92 28c0 40-22 62-58 62" fill="#7DB86B" {...S} /><path d="M34 86c14-18 30-34 50-48" {...S} strokeWidth={2} fill="none" /></g>),
};

const TINT: Record<string, string> = { garlic: "#F1ECDF", "sweet-potato": "#FBE6D2", avocado: "#E4F0D6", tahini: "#F6E7CC", strawberries: "#FBE1DE", chickpeas: "#F7EBD3", feta: "#EEF0EA", hummus: "#F6E9D2", lentils: "#E6EEDB", pomegranate: "#FBE1DE" };
export const artTint = (name: string) => TINT[name] ?? "var(--soft)";

export function FoodArt({ name, size = 84, label = "", priority = false }: { name: string; size?: number; label?: string; priority?: boolean }) {
  if (RASTER.has(name)) {
    return <Image src={`/art/${name}.webp`} width={size} height={size} alt={label} priority={priority} className="shrink-0 rounded-[24%] bg-[#FBF8F3]" />;
  }
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} role={label ? "img" : undefined} aria-label={label || undefined} aria-hidden={label ? undefined : true}>
      <circle cx="60" cy="60" r="58" fill={artTint(name)} />
      {ART[name] ?? ART.bowl}
    </svg>
  );
}
export const ART_NAMES = Object.keys(ART);
