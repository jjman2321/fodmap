"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Item = { href: string; label: string };

// Small island: opens a sheet with the nav. Escape and link taps close it.
export function MobileMenu({ items, labels }: { items: Item[]; labels: { menu: string; close: string } }) {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); button.current?.focus(); } };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <div className="md:hidden">
      <button ref={button} type="button" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}
        className="grid h-11 w-11 place-items-center rounded-full hover:bg-chip" aria-label={open ? labels.close : labels.menu}>
        <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>
      {open && (
        <nav id="mobile-nav" aria-label="Main" className="absolute inset-x-0 top-full z-40 border-b border-line bg-paper px-4 pb-5 pt-2 shadow-sm">
          <ul className="flex flex-col">
            {items.map((i) => (
              <li key={i.href}><Link href={i.href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 text-lg hover:bg-chip">{i.label}</Link></li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
