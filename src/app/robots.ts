import type { MetadataRoute } from "next";
import { indexingOn } from "@/lib/indexing";
import { abs } from "@/lib/site";

export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots {
  if (!indexingOn()) return { rules: { userAgent: "*", disallow: "/" } };
  return { rules: { userAgent: "*", allow: "/", disallow: "/api/" }, sitemap: abs("/sitemap.xml") };
}
