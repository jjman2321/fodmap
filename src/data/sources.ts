import type { Source } from "./schema";
import generated from "./generated/sources.json";

// Every source the site cites. Public material only: never the Monash or FODMAP Friendly apps (DECISIONS §0).
// Gathered and checked 2026-11-18: research/food-facts/food-facts-2026-11-18.json (quotes + how each was read).
const A = "2026-11-18";
const mon = (id: string, title: string, url: string, published?: string): Source => ({ id, kind: "public-statement", title, publisher: "Monash University (FODMAP blog)", url, published, accessed: A });
const sec = (id: string, title: string, publisher: string, url: string, published?: string): Source => ({ id, kind: "secondary", title, publisher, url, published, accessed: A });

export const SOURCES: Source[] = [
  mon("mon-fructans-2020", "Fructans and FODMAP reintroduction", "https://monashfodmap.com/blog/fructans-fodmap-reintroduction/", "10 Jun 2020"),
  mon("mon-oils-2023", "All about onion, garlic and infused oils on the low FODMAP diet", "https://monashfodmap.com/blog/all-about-onion-garlic-and-infused-oils-on-the-low-fodmap-diet", "2 May 2023"),
  mon("mon-myths-2015", "Cooking with onion and garlic: myths and facts", "https://monashfodmap.com/blog/cooking-with-onion-and-garlic-myths-and/", "1 Jun 2015"),
  { id: "mon-faq", kind: "public-statement", title: "Frequently asked questions", publisher: "Monash University", url: "https://www.monashfodmap.com/faq/", accessed: A },
  { id: "mon-step1", kind: "public-statement", title: "Step 1: the low FODMAP diet (patient resource, PDF)", publisher: "Monash University", url: "https://monashfodmap.com/documents/207/Monash_FODMAP_Resource_-_Step_1_Low_FODMAP_Diet.pdf", accessed: A },
  mon("mon-stack-2016", "FODMAP stacking: can I overeat 'green' foods?", "https://monashfodmap.com/blog/fodmap-stacking-can-i-overeat-green/", "11 Oct 2016"),
  mon("mon-shop-2025", "Low FODMAP shopping list", "https://www.monashfodmap.com/blog/low-fodmap-shopping-list/", "3 Feb 2025"),
  mon("mon-avo-2024", "Avocado and FODMAPs: a smashing new discovery", "https://monashfodmap.com/blog/avocado-and-fodmaps-a-smashing-new-discovery/", "26 Feb 2024"),
  mon("mon-fibre-2021", "Getting enough fibre on a low FODMAP diet", "https://www.monashfodmap.com/blog/getting-enough-fibre/", "14 Jan 2021"),
  mon("mon-stackexpl-2022", "FODMAP stacking explained", "https://monashfodmap.com/blog/fodmap-stacking-explained/", "3 Oct 2022"),
  { id: "mon-hummus-recipe", kind: "public-statement", title: "Hummus (low FODMAP recipe)", publisher: "Monash University", url: "https://monashfodmap.com/recipe/hummus/", accessed: A },
  mon("mon-hummus-blog", "4 ways to enjoy roasted red pepper", "https://monashfodmap.com/blog/4-ways-to-enjoy-roasted-red-pepper"),
  { id: "mon-straw-2021", kind: "public-statement", title: "Retested foods just in time for Aussie summer: strawberries and grapes (archived copy)", publisher: "Monash University (FODMAP blog)", url: "https://web.archive.org/web/20240616111907/https://www.monashfodmap.com/blog/retested-foods-just-in-time-for-aussie-summer-strawberries-grapes/", published: "14 Dec 2021", accessed: A },
  mon("mon-legumes-2016", "Including legumes on a low FODMAP diet", "https://www.monashfodmap.com/blog/including-legumes-on-low-fodmap-diet/", "18 Oct 2016"),
  mon("mon-lactose-2016", "What is lactose intolerance?", "https://monashfodmap.com/blog/what-is-lactose-intolerance", "10 Apr 2016"),
  mon("mon-vegan-2018", "New research: FODMAP content of common plant-based and processed foods (part 2)", "https://www.monashfodmap.com/blog/new-research-fermentable-short-chain-carbohydrate-fodmap-content-common-plant-based-foods-and-processed-foods-suitable-vegetarian-and-vegan-based-eating-patterns-part-2/", "16 Apr 2018"),
  { id: "ff-five-2020", kind: "public-statement", title: "High or low FODMAP? Your guide to five foods that are both", publisher: "FODMAP Friendly", url: "https://fodmapfriendly.com/blog-posts/high-or-low-fodmap-your-guide-to-five-foods-that-are-both/", published: "5 Aug 2020", accessed: A },
  { id: "ff-list", kind: "public-statement", title: "Foods high and low in FODMAPs", publisher: "FODMAP Friendly", url: "https://fodmapfriendly.com/for-consumers/foods-high-low-fodmap/", accessed: A },
  { id: "muir-2007", kind: "paper", title: "Fructan and free fructose content of common Australian vegetables and fruit (Muir et al., J Agric Food Chem 55:6619)", publisher: "American Chemical Society", url: "https://doi.org/10.1021/jf070623x", doi: "10.1021/jf070623x", published: "2007", accessed: A },
  { id: "molecules-2023", kind: "paper", title: "Review citing Muir et al. for garlic fructans (Molecules 28:1613)", publisher: "MDPI", url: "https://doi.org/10.3390/molecules28041613", doi: "10.3390/molecules28041613", published: "2023", accessed: A },
  { id: "tuck-2018", kind: "paper", title: "FODMAP content of plant-based and processed foods (Tuck et al., J Hum Nutr Diet)", publisher: "Wiley", url: "https://doi.org/10.1111/jhn.12546", doi: "10.1111/jhn.12546", published: "2018", accessed: A },
  sec("kk-sweetpot", "Are sweet potatoes low FODMAP?", "Karlijn's Kitchen", "https://www.karlijnskitchen.com/en/are-sweet-potatoes-low-fodmap/", "updated 29 Sep 2025"),
  sec("ge-potato", "Are potatoes low FODMAP?", "George Eats", "https://georgeats.com/posts/resources/are-potatoes-low-fodmap/", "updated 12 Aug 2026"),
  sec("kk-avo", "Is avocado low FODMAP? (2024 update)", "Karlijn's Kitchen", "https://www.karlijnskitchen.com/?p=31586", "updated 15 Mar 2024"),
  sec("alby-avo", "Avocado and FODMAPs (2024 update)", "A Little Bit Yummy", "https://alittlebityummy.com/?p=24265", "updated 7 Mar 2024"),
  sec("fe-avo", "Avocado, not avocado (search snippet)", "FODMAP Everyday", "https://www.fodmapeveryday.com/avocado-not-avocado/", "2024"),
  sec("ge-tahini", "Is tahini low FODMAP?", "George Eats", "https://georgeats.com/posts/resources/is-tahini-low-fodmap/", "reviewed Aug 2026"),
  sec("alby-straw", "Strawberries and FODMAPs", "A Little Bit Yummy", "https://alittlebityummy.com/?p=14698", "updated 16 Dec 2021"),
  sec("kk-straw", "Are strawberries low FODMAP?", "Karlijn's Kitchen", "https://www.karlijnskitchen.com/?p=38885", "updated 1 Apr 2024"),
  sec("kk-beans", "Which beans are allowed on the FODMAP diet?", "Karlijn's Kitchen", "https://www.karlijnskitchen.com/en/what-beans-fodmap-diet/", "updated 24 May 2025"),
  sec("ge-beans", "Low FODMAP beans", "George Eats", "https://georgeats.com/recipes/low-fodmap-beans/", "updated 8 Aug 2026"),
  sec("ge-fruits", "Low FODMAP fruits", "George Eats", "https://georgeats.com/posts/resources/low-fodmap-fruits-recipes-that-use-them/", "updated 12 Aug 2026"),
  sec("fe-pomegranate", "Roasted delicata squash salad with pomegranate (search snippet)", "FODMAP Everyday", "https://www.fodmapeveryday.com/recipes/low-fodmap-roasted-delicata-squash-arugula-salad-with-goat-cheese-and-pomegranate/"),
  sec("ge-feta", "Winter citrus salad with feta and fennel (search snippet)", "George Eats", "https://georgeats.com/recipes/winter-citrus-salad-with-feta-and-fennel/"),
];

// M2 research batches (scripts/import-m2.ts).
export const ALL_SOURCES: Source[] = [...SOURCES, ...(generated as Source[])];
