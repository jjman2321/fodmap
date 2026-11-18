import { z } from "zod";

// Email list for the printable PDF. Stored in Cloudflare D1 once the database exists (wrangler.jsonc).
// Until then: 503 "opens soon", so the form never pretends to work.
const Body = z.object({ email: z.email().max(254) });

export async function POST(req: Request) {
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return Response.json({ error: "invalid" }, { status: 400 });
  return Response.json({ message: "opens soon" }, { status: 503 });
}
