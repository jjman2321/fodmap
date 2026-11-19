// Category hubs. Order = how people browse; art = a food that has a picture.
export const CATEGORIES = [
  { slug: "vegetables", name: "Vegetables", title: "Which vegetables are low FODMAP?", art: "sweet-potato" },
  { slug: "fruit", name: "Fruit", title: "Which fruits are low FODMAP?", art: "strawberries" },
  { slug: "grains", name: "Grains and bread", title: "Which grains and breads are low FODMAP?", art: "bowl" },
  { slug: "legumes", name: "Beans and lentils", title: "Which beans and lentils are low FODMAP?", art: "chickpeas" },
  { slug: "nuts-seeds", name: "Nuts and seeds", title: "Which nuts and seeds are low FODMAP?", art: "tahini" },
  { slug: "dairy", name: "Dairy and milks", title: "Which dairy foods and milks are low FODMAP?", art: "feta" },
  { slug: "protein", name: "Meat, fish and eggs", title: "Are meat, fish and eggs low FODMAP?", art: "bowl" },
  { slug: "condiments", name: "Sauces, oils and sweeteners", title: "Which sauces, oils and sweeteners are low FODMAP?", art: "hummus" },
  { slug: "herbs-spices", name: "Herbs and spices", title: "Which herbs and spices are low FODMAP?", art: "garlic" },
  { slug: "drinks", name: "Drinks", title: "Which drinks are low FODMAP?", art: "bowl" },
] as const;
export type CategorySlug = (typeof CATEGORIES)[number]["slug"];
export const getCategory = (slug: string) => CATEGORIES.find((c) => c.slug === slug);

// Most-searched first (DataForSEO US volumes, 2026-11-18). Foods not on the site are skipped.
export const POPULAR = ["broccoli", "corn", "peanut-butter", "tomatoes", "avocado", "sourdough-bread", "banana", "eggs", "grapes", "potatoes", "sweet-potato", "butter", "cabbage", "pineapple", "blueberries", "carrots", "dates", "green-beans", "mushrooms", "oats", "garlic", "hummus", "strawberries", "tahini", "chickpeas", "lentils", "feta", "pomegranate"];
