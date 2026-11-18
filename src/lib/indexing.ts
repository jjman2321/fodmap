// Pre-launch switch. SITE_INDEXING=off (Cloudflare build variable) → every page noindex + robots.txt blocks all.
// Delete the variable on launch day and retry the build. Pages are static, so this is read at build time.
export function indexingOn(): boolean {
  return (process.env.SITE_INDEXING ?? "").toLowerCase() !== "off";
}
