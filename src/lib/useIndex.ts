"use client";
import { useCallback, useState } from "react";
import type { IndexItem } from "./match";

// Loads /search-index.json once, on first use.
let cache: Promise<IndexItem[]> | null = null;
export function useIndex(initial: IndexItem[] = []) {
  const [items, setItems] = useState<IndexItem[]>(initial);
  const load = useCallback(() => {
    if (items.length) return;
    cache ??= fetch("/search-index.json").then((r) => r.json());
    cache.then(setItems).catch(() => { cache = null; });
  }, [items.length]);
  return { items, load };
}
