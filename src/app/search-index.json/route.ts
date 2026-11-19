import { checkerIndex } from "@/lib/index-data";

// Static search index, fetched by the search box and meal check on first use (keeps pages light).
export const dynamic = "force-static";
export function GET() { return Response.json(checkerIndex()); }
