// Accessibility scan (axe-core) on key pages, phone size, light + dark. Usage: node scripts/a11y.cjs [baseUrl]
const { chromium } = require("playwright");
const axe = require("axe-core");
const base = process.argv[2] || "http://localhost:3000";
const PAGES = ["/", "/food/garlic", "/food/sweet-potato", "/food/hummus", "/region/middle-eastern", "/printable", "/check?add=tahini", "/how-we-check"];
(async () => {
  const b = await chromium.launch(); let total = 0;
  for (const scheme of ["light", "dark"]) {
    const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, colorScheme: scheme });
    for (const p of PAGES) {
      const page = await ctx.newPage(); await page.goto(base + p, { waitUntil: "networkidle" });
      await page.addScriptTag({ content: axe.source });
      const r = await page.evaluate(async () => (await window.axe.run(document, { runOnly: ["wcag2a", "wcag2aa", "wcag21aa"] })).violations.map((v) => `${v.id} (${v.nodes.length}): ${v.nodes.slice(0, 2).map((n) => n.target.join(" ")).join(" | ")}`));
      if (r.length) { total += r.length; console.log(scheme, p, r); }
      await page.close();
    }
    await ctx.close();
  }
  console.log(total ? `${total} issues` : "0 issues"); await b.close(); process.exit(total ? 1 : 0);
})();
