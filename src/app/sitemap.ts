import type { MetadataRoute } from "next";
import { categories } from "@/data/categories";
import { site } from "@/data/site";
import { getAllProducts } from "@/lib/products";

const STATIC_PATHS = [
  "/",
  "/shop",
  "/wholesale",
  "/about",
  "/contact",
  "/faq",
  "/policies/shipping",
  "/policies/returns",
  "/policies/privacy",
  "/policies/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...STATIC_PATHS,
    ...categories.map((category) => `/collections/${category.slug}`),
    ...getAllProducts().map((product) => `/products/${product.slug}`),
  ];
  return paths.map((path) => ({ url: new URL(path, site.url).href }));
}
