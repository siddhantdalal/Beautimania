import type { Attribute, Category, CategorySlug, Concern, FreeFrom, SoapType } from "@/lib/types";

/** Display order is the order of this array. */
export const categories: Category[] = [
  {
    slug: "soaps",
    name: "Handmade Soaps",
    tagline: "Cold-process and herbal glycerine bars, made in small batches.",
    description:
      "Handmade cold-process and herbal glycerine soaps with neem, turmeric, goat milk, essential oils and more. Free from sulphates and parabens.",
    image: "/images/products/rose-goat-milk-soap/1.webp",
  },
  {
    slug: "face",
    name: "Face Care",
    tagline: "Serums, sunscreen, ubtan and gentle cleansers.",
    description:
      "Herbal face care including Vitamin C serum, Skin Repair Elixir, SPF 50 sunscreen, ubtan powder, aloe vera gel and an anti-acne face wash.",
    image: "/images/products/skin-repair-elixir/1.jpg",
  },
  {
    slug: "lips",
    name: "Lip Care",
    tagline: "Nourishing balms and a sugar scrub for soft lips.",
    description:
      "Handmade lip balms made with shea butter, cocoa butter and plant oils (beetroot, vanilla, orange, mint, chocolate, blueberry) and a blueberry sugar lip scrub.",
    image: "/images/products/mint-lip-balm/1.webp",
  },
  {
    slug: "body",
    name: "Body Care",
    tagline: "Body wash, moisturiser and a rich body butter.",
    description:
      "Herbal body care: lavender body wash, peach milk moisturiser and Saffron Shine body butter, free from sulphates and parabens.",
    image: "/images/products/saffron-shine-body-butter/1.webp",
  },
  {
    slug: "hair",
    name: "Hair Care",
    tagline: "Rosemary shampoo and a keratin conditioner.",
    description:
      "Sulphate- and paraben-free herbal hair care: rosemary shampoo and the Keratin & More conditioner.",
    image: "/images/products/rosemary-shampoo-400ml/1.webp",
  },
  {
    slug: "gifts",
    name: "Gift Sets & Kits",
    tagline: "Curated kits and customisable gift boxes.",
    description:
      "Skincare kits and customisable gift boxes from Beautimania, put together for gifting and seasonal care.",
    image: "/images/products/skin-repair-kit/2.webp",
  },
  {
    slug: "diy-supplies",
    name: "DIY & Maker Supplies",
    tagline: "Soap bases, lip balm base and packaging for makers.",
    description:
      "Melt-and-pour glycerine and goat milk soap bases, ready-to-use lip balm base and soap shrink-wrap for DIY makers and small brands.",
    image: "/images/products/goat-milk-soap-base-1kg/1.webp",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export const categoryNames: Record<CategorySlug, string> = Object.fromEntries(
  categories.map((category) => [category.slug, category.name]),
) as Record<CategorySlug, string>;

export const soapTypeLabels: Record<SoapType, string> = {
  "cold-process": "Cold-process",
  glycerine: "Herbal glycerine",
};

export const concernLabels: Record<Concern, string> = {
  acne: "Acne & breakouts",
  tan: "Sun tan",
  pigmentation: "Pigmentation",
  dullness: "Dullness",
  dryness: "Dryness",
  "oily-skin": "Oily skin",
  "sensitive-skin": "Sensitive skin",
  ageing: "Fine lines",
  "sun-protection": "Sun protection",
  "chapped-lips": "Dry, chapped lips",
  "hair-fall": "Hair fall",
  frizz: "Frizz",
};

export const freeFromLabels: Record<FreeFrom, string> = {
  sulphates: "Sulphates",
  parabens: "Parabens",
  "artificial-fragrance": "Artificial fragrance",
  "artificial-colour": "Artificial colour",
  "mineral-oil": "Mineral oil",
  "petroleum-jelly": "Petroleum jelly",
  preservatives: "Preservatives",
};

export const attributeLabels: Record<Attribute, string> = {
  handmade: "Handmade",
  vegan: "Vegan",
  "cruelty-free": "Cruelty-free",
  "plant-based": "Plant-based",
  "cured-6-weeks": "Cured for 6 weeks",
  "kid-friendly": "Kid-friendly",
  waterless: "Waterless formula",
  "non-comedogenic": "Non-comedogenic",
};
