// Portion glyph: a bowl filled to a level (0 = empty). Decorative; the grams next to it carry the meaning.
export function Bowl({ level, color }: { level: 0 | 1 | 2 | 3; color: string }) {
  const h = [0, 7, 13, 19][level];
  return (
    <svg width="40" height="28" viewBox="0 0 40 28" aria-hidden className="mx-auto">
      <defs><clipPath id={`bowl-${level}`}><path d="M3 6h34c0 11-8 19-17 19S3 17 3 6z" /></clipPath></defs>
      {level > 0 && <rect x="0" y={25 - h} width="40" height={h + 2} fill={color} clipPath={`url(#bowl-${level})`} />}
      <path d="M3 6h34c0 11-8 19-17 19S3 17 3 6z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}
