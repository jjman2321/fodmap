// Screenshots for owner review: phone 390×844 and desktop 1280×900, light and dark.
// Usage: start the site (npm run build && npm start), then: node scripts/shots.cjs [baseUrl] [outDir]
const { chromium } = require("playwright");
const base = process.argv[2] || "http://localhost:3000";
const out = process.argv[3] || "docs/designs/m1";
const PAGES = ["/", "/food/garlic", "/food/sweet-potato", "/region/middle-eastern", "/printable", "/check?add=sweet-potato"];
(async () => {
  const b = await chromium.launch();
  for (const scheme of ["light", "dark"]) for (const [dev, vp] of [["phone", { width: 390, height: 844 }], ["desktop", { width: 1280, height: 900 }]]) {
    const ctx = await b.newContext({ viewport: vp, deviceScaleFactor: 2, colorScheme: scheme });
    for (const p of PAGES) {
      const page = await ctx.newPage();
      await page.goto(base + p, { waitUntil: "networkidle" });
      const name = (p === "/" ? "home" : p.replace(/^\//, "").replace(/[/?=]/g, "-")) + `-${dev}-${scheme}.png`;
      await page.screenshot({ path: `${out}/${name}`, fullPage: true });
      await page.close();
    }
    await ctx.close();
  }
  await b.close();
})();
