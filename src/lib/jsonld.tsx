import { SITE, abs } from "./site";

export const ORG_ID = `${SITE.url}/#org`;

export function orgGraph() {
  return [
    {
      "@type": "Organization", "@id": ORG_ID, name: SITE.name, legalName: SITE.company, url: SITE.url,
      publishingPrinciples: abs("/how-we-check"), correctionsPolicy: abs("/how-we-check#corrections"),
    },
    { "@type": "WebSite", "@id": `${SITE.url}/#site`, url: SITE.url, name: "isitlowfodmap", alternateName: "Is it low FODMAP?", publisher: { "@id": ORG_ID } },
  ];
}

export function breadcrumbs(items: { name: string; path: string }[]) {
  return { "@type": "BreadcrumbList", itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: abs(it.path) })) };
}

export function JsonLd({ graph }: { graph: object[] }) {
  const data = { "@context": "https://schema.org", "@graph": [...orgGraph(), ...graph] };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
