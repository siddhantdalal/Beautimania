export type CategorySlug = "soaps" | "face" | "lips" | "body" | "hair" | "gifts" | "diy-supplies";

export type SoapType = "cold-process" | "glycerine";

export type Concern =
  | "acne"
  | "tan"
  | "pigmentation"
  | "dullness"
  | "dryness"
  | "oily-skin"
  | "sensitive-skin"
  | "ageing"
  | "sun-protection"
  | "chapped-lips"
  | "hair-fall"
  | "frizz";

export type FreeFrom =
  | "sulphates"
  | "parabens"
  | "artificial-fragrance"
  | "artificial-colour"
  | "mineral-oil"
  | "petroleum-jelly"
  | "preservatives";

export type Attribute =
  | "handmade"
  | "vegan"
  | "cruelty-free"
  | "plant-based"
  | "cured-6-weeks"
  | "kid-friendly"
  | "waterless"
  | "non-comedogenic";

/** Product content as authored in src/data/products/*.json (images are attached separately). */
export interface ProductData {
  /** New clean URL slug, e.g. "neem-tulsi-soap" */
  slug: string;
  /** Slug on the old Wix site (/product-page/<legacySlug>), used for redirects */
  legacySlug: string;
  /** Clean display name without size, e.g. "Neem & Tulsi Soap" */
  name: string;
  /** Short product-type line shown above/below the name, e.g. "Cold-process soap" */
  subtitle: string;
  category: CategorySlug;
  soapType?: SoapType;
  /** Net quantity as text, e.g. "100 g", "8 g", "400 ml", "3 × 125 g". Omit when unknown. */
  size?: string;
  /** Current selling price in INR */
  price: number;
  /** Original price in INR when the product is on sale */
  compareAtPrice?: number;
  inStock: boolean;
  /** One or two sentences, max ~160 characters, for cards and SEO */
  shortDescription: string;
  /** 1–3 short paragraphs */
  description: string[];
  benefits: string[];
  ingredients: string[];
  /** true when the old site gave no full ingredient list, so only key ingredients are known */
  keyIngredientsOnly?: boolean;
  howToUse?: string[];
  freeFrom: FreeFrom[];
  attributes: Attribute[];
  concerns: Concern[];
  /** For kits and gift boxes: what's inside */
  includes?: string[];
  /** Extra practical notes, e.g. "Patch test before first use" */
  notes?: string[];
  /** Customisation / bulk / white-label mentioned for this product on the old site */
  customisable?: boolean;
  /** Things the owner must confirm before launch (internal, never shown to shoppers) */
  needsReview?: string[];
}

export interface Product extends ProductData {
  /** Public image paths, first one is the main image */
  images: string[];
}

export interface Category {
  slug: CategorySlug;
  name: string;
  /** One line for tiles and page intros */
  tagline: string;
  /** Used as the meta description of the collection page */
  description: string;
  /** Tile image (public path) */
  image: string;
}
