# Launch checklist

**You** = owner, **Claude** = me, **Both** = together. Target: indexable around mid-December 2026 with ~100 pages.

## Before launch
- [ ] **Claude:** first ~100 food pages pass the quality checks (sources, dates, 5-point safe-page test)
- [ ] **Claude:** technical SEO (sitemaps, JSON-LD, llms.txt, share images, IndexNow script)
- [ ] **You:** move isitlowfodmap.com DNS to Cloudflare (guide comes in `docs/setup/`)
- [ ] **You:** connect the GitHub repo to Cloudflare Workers; set variables (`SITE_INDEXING=off` until launch)
- [ ] **You:** turn on Cloudflare Web Analytics; confirm "Block AI bots" is off
- [ ] **You:** optional DataForSEO top-up ($50) for difficulty and AI Overview research

- [ ] **You:** confirm the 2 snippet-only facts on your phone (STATUS → Open questions)
- [ ] **Claude:** Lighthouse ≥ 95 on phone settings (median of 3) for home, a food page and the hub
- [ ] **Claude:** legal wording review list for privacy/terms (they say "draft" until you approve)

## Launch day
- [ ] **You:** delete `SITE_INDEXING` and retry the build
- [ ] **Both:** Search Console (Domain property) + sitemap; Bing Webmaster Tools import; request indexing for ~10 key pages
- [ ] **Claude:** watch errors for 48 h
