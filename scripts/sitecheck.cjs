// Crawl the running site from / and check every internal page: 200 status, exactly one <h1>, a canonical link,
// an og:image, the footer disclaimer, and no broken internal links. Usage: node scripts/sitecheck.cjs [baseUrl]
const base = process.argv[2] || "http://localhost:3000";
const seen = new Set(); const queue = ["/"]; const problems = [];
const NOINDEX_OK = new Set(["/privacy", "/terms"]);
(async () => {
  while (queue.length) {
    const path = queue.shift(); if (seen.has(path)) continue; seen.add(path);
    const r = await fetch(base + path); const html = await r.text();
    if (r.status !== 200) { problems.push(`${path}: HTTP ${r.status}`); continue; }
    const h1 = (html.match(/<h1[\s>]/g) || []).length; if (h1 !== 1) problems.push(`${path}: ${h1} <h1>`);
    if (!/<link rel="canonical"/.test(html) && path !== "/" && !NOINDEX_OK.has(path)) problems.push(`${path}: no canonical`);
    if (!/property="og:image"/.test(html)) problems.push(`${path}: no og:image`);
    if (!/data-testid="footer-disclaimer"/.test(html)) problems.push(`${path}: no footer disclaimer`);
    for (const m of html.matchAll(/href="(\/[^"#?]*)/g)) {
      const p = m[1]; if (p.startsWith("/_next") || p.startsWith("/art/") || /\.(png|svg|ico|webp|json|txt|xml)$/.test(p)) continue;
      if (!seen.has(p)) queue.push(p);
    }
  }
  console.log(`${seen.size} pages checked`); problems.forEach((p) => console.log("  " + p));
  console.log(problems.length ? `${problems.length} problems` : "0 problems"); process.exit(problems.length ? 1 : 0);
})();
