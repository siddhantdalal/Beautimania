import { existsSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { categories } from "./categories";
import { products } from "./products";
import { trustBadges } from "./site";

/**
 * The catalogue is edited by hand, so guard the mistakes that would break pages:
 * duplicate URLs, missing images, impossible prices, unknown categories.
 */

const publicFile = (src: string) => path.join(process.cwd(), "public", src);

describe("product catalogue", () => {
  it("has unique slugs and legacy slugs", () => {
    const slugs = products.map((product) => product.slug);
    const legacySlugs = products.map((product) => product.legacySlug);
    expect(new Set(slugs).size).toBe(slugs.length);
    expect(new Set(legacySlugs).size).toBe(legacySlugs.length);
  });

  it("uses URL-safe slugs", () => {
    for (const product of products) {
      expect(product.slug, product.slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
    }
  });

  it("belongs to a known category", () => {
    const known = new Set(categories.map((category) => category.slug));
    for (const product of products) {
      expect(known.has(product.category), product.slug).toBe(true);
    }
  });

  it("has a positive price, and a sale price below the regular price", () => {
    for (const product of products) {
      expect(product.price, product.slug).toBeGreaterThan(0);
      if (product.compareAtPrice !== undefined) {
        expect(product.compareAtPrice, product.slug).toBeGreaterThan(product.price);
      }
    }
  });

  it("has at least one image, and every image exists in /public", () => {
    for (const product of products) {
      expect(product.images.length, product.slug).toBeGreaterThan(0);
      for (const image of product.images) {
        expect(existsSync(publicFile(image)), image).toBe(true);
      }
    }
  });

  it("has the copy every product page needs", () => {
    for (const product of products) {
      expect(product.name.trim(), product.slug).not.toBe("");
      expect(product.shortDescription.trim(), product.slug).not.toBe("");
      expect(product.description.length, product.slug).toBeGreaterThan(0);
    }
  });
});

describe("categories", () => {
  it("each has a tile image that exists and at least one product", () => {
    for (const category of categories) {
      expect(existsSync(publicFile(category.image)), category.image).toBe(true);
      expect(
        products.some((product) => product.category === category.slug),
        category.slug,
      ).toBe(true);
    }
  });
});

describe("trust badges", () => {
  it("each has a logo that exists", () => {
    for (const badge of trustBadges) {
      expect(existsSync(publicFile(badge.image)), badge.image).toBe(true);
    }
  });
});
