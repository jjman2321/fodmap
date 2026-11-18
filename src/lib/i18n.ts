import en from "@/messages/en.json";

export const messages = en;
export type Messages = typeof en;

// Tiny template helper: fmt("Is {name} low FODMAP?", { name: "garlic" })
export function fmt(template: string, vars: Record<string, string | number> = {}): string {
  return template.replace(/\{(\w+)\}/g, (_, k: string) => (k in vars ? String(vars[k]) : `{${k}}`));
}
