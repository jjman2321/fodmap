import Image from "next/image";

// Illustrated set (generated in one style, 480 px WebP in public/art). Others show a letter tile until drawn.
const RASTER = new Set(["garlic", "chickpeas", "sweet-potato", "avocado", "strawberries", "tahini", "hummus"]);

const LETTER_TINTS = ["#E4F0D6", "#FBE6D2", "#F6E7CC", "#FBE1DE", "#E6EEDB", "#EEF0EA", "#F1ECDF"];

// Placeholder until a food has its picture: a calm tile with the first letter (clearer than a rough drawing).
function LetterTile({ name, size }: { name: string; size: number }) {
  const n = name.replace(/-/g, " ");
  const tint = LETTER_TINTS[[...n].reduce((a, c) => a + c.charCodeAt(0), 0) % LETTER_TINTS.length];
  return (
    <span aria-hidden className="grid shrink-0 place-items-center rounded-[24%] font-display font-bold text-ink/70" style={{ width: size, height: size, background: tint, fontSize: size * 0.42 }}>
      {n[0]?.toUpperCase()}
    </span>
  );
}

export function FoodArt({ name, size = 84, label = "", priority = false }: { name: string; size?: number; label?: string; priority?: boolean }) {
  if (RASTER.has(name)) {
    return <Image src={`/art/${name}.webp`} width={size} height={size} alt={label} priority={priority} className="shrink-0 rounded-[24%] bg-[#FBF8F3]" />;
  }
  return <LetterTile name={name} size={size} />;
}
