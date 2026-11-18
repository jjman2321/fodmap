// Regional hubs. M1 builds Middle Eastern; the rest follow by search demand (DECISIONS batch 2).
export type Region = { slug: string; name: string; title: string; intro: string; eatingOut: { title: string; text: string }[] };

export const REGIONS: Region[] = [
  {
    slug: "middle-eastern",
    name: "Middle Eastern",
    title: "Middle Eastern foods: which are low FODMAP?",
    intro: "Tahini, hummus, halloumi, dates, pita and more, with the amounts in grams. Many Middle Eastern dishes are built on garlic, onion and chickpeas, so portion size matters more than the dish name.",
    eatingOut: [
      { title: "Sauces and dips", text: "Garlic sauce (toum) and most hummus contain garlic. Plain tahini is the safer dip to ask for." },
      { title: "Grills", text: "Grilled meat, chicken and fish are FODMAP-free on their own. Ask whether the marinade has garlic or onion." },
      { title: "Sides", text: "Plain rice is a good base. Bulgur, freekeh, couscous and pita are wheat, so keep portions small." },
      { title: "Salads", text: "Fattoush and tabbouleh are mostly vegetables and herbs. Ask for no onion; check the bread and bulgur amounts." },
    ],
  },
];
export const getRegion = (slug: string) => REGIONS.find((r) => r.slug === slug);
