// One place for the brand. Never hard-code these elsewhere.
export const SITE = {
  name: "isitlowfodmap",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://isitlowfodmap.com").replace(/\/$/, ""),
  company: "Grasp Labs LLC",
  email: "hello@isitlowfodmap.com",
} as const;

export const abs = (path: string) => `${SITE.url}${path === "/" ? "" : path}`;
