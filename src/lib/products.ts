import { products } from "@/data/products";
import type { CategorySlug, Concern, Product, SoapType } from "@/lib/types";

const productsBySlug = new Map(products.map((product) => [product.slug, product]));

export function getAllProducts(): readonly Product[] {
  return products;
}

export function getProduct(slug: string): Product | undefined {
  return productsBySlug.get(slug);
}

export function getProductsByCategory(category: CategorySlug): Product[] {
  return products.filter((product) => product.category === category);
}

/** Looks up products in the given order, skipping unknown slugs. */
export function getProductsBySlugs(slugs: readonly string[]): Product[] {
  return slugs.flatMap((slug) => productsBySlug.get(slug) ?? []);
}

/** Same category first, ranked by shared concerns; in-stock items before out-of-stock ones. */
export function getRelatedProducts(product: Product, limit = 4): Product[] {
  const sharedConcerns = (other: Product) =>
    other.concerns.filter((concern) => product.concerns.includes(concern)).length;

  return products
    .filter((other) => other.slug !== product.slug && other.category === product.category)
    .map((other) => ({ other, score: sharedConcerns(other) + (other.inStock ? 10 : 0) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ other }) => other);
}

/** The minimum a product card or the cart needs. Keeps client bundles/payloads small. */
export interface ProductSummary {
  slug: string;
  name: string;
  subtitle: string;
  size?: string;
  price: number;
  compareAtPrice?: number;
  inStock: boolean;
  image: string;
  category: CategorySlug;
  soapType?: SoapType;
  concerns: Concern[];
}

export function toSummary(product: Product): ProductSummary {
  return {
    slug: product.slug,
    name: product.name,
    subtitle: product.subtitle,
    size: product.size,
    price: product.price,
    compareAtPrice: product.compareAtPrice,
    inStock: product.inStock,
    image: product.images[0],
    category: product.category,
    soapType: product.soapType,
    concerns: product.concerns,
  };
}

/**
 * An image of a known product, for editorial sections (hero, banners).
 * Throws during the build if the product or image is missing, so it can't ship broken.
 */
export function getProductImage(slug: string, index = 0): string {
  const image = getProduct(slug)?.images[index];
  if (!image) throw new Error(`No image #${index} for product "${slug}"`);
  return image;
}
