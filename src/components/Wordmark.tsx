// The chosen wordmark (DECISIONS 2026-11-18, option A3): Outfit, light "isit"/"fodmap", bold green "low".
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display tracking-[-0.03em] ${className}`}>
      <span className="sr-only">isitlowfodmap</span>
      <span aria-hidden className="font-light">isit</span>
      <span aria-hidden className="font-bold text-brand">low</span>
      <span aria-hidden className="font-light">fodmap</span>
    </span>
  );
}
