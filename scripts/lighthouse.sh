#!/usr/bin/env bash
# Lighthouse, phone settings, median of 3 runs per page. Usage: scripts/lighthouse.sh http://localhost:3000 /food/garlic /
set -euo pipefail
BASE=$1; shift
CHROME_PATH=${CHROME_PATH:-$(find /opt/pw-browsers -name chrome -type f | head -1)}
export CHROME_PATH
for P in "$@"; do
  scores=()
  for i in 1 2 3; do
    npx lighthouse "$BASE$P" --quiet --only-categories=performance,accessibility,best-practices,seo --form-factor=mobile \
      --chrome-flags="--headless=new --no-sandbox" --output=json --output-path=/tmp/lh.json >/dev/null 2>&1 || true
    s=$(node -e "const r=require('/tmp/lh.json');const c=r.categories;console.log([c.performance,c.accessibility,c['best-practices'],c.seo].map(x=>Math.round(x.score*100)).join(' ')+' LCP '+Math.round(r.audits['largest-contentful-paint'].numericValue)+'ms TBT '+Math.round(r.audits['total-blocking-time'].numericValue)+'ms CLS '+r.audits['cumulative-layout-shift'].numericValue.toFixed(3))")
    scores+=("$s")
  done
  echo "$P"; printf '  %s\n' "${scores[@]}"
done
