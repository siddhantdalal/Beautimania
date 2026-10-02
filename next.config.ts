import type { NextConfig } from "next";
import { products } from "./src/data/products";

/**
 * Permanent redirects from the old Wix site's URLs, so existing search rankings
 * and links shared on social media keep working after the switch.
 */
const legacyRedirects = [
  { source: "/home", destination: "/" },
  { source: "/face", destination: "/collections/face" },
  { source: "/lips", destination: "/collections/lips" },
  { source: "/body", destination: "/collections/body" },
  { source: "/best-sellers", destination: "/wholesale" },
  { source: "/shipping-and-returns", destination: "/policies/shipping" },
  { source: "/store-policy", destination: "/policies/terms" },
  { source: "/cart-page", destination: "/cart" },
  ...products.map((product) => ({
    source: `/product-page/${product.legacySlug}`,
    destination: `/products/${product.slug}`,
  })),
];

const nextConfig: NextConfig = {
  async redirects() {
    return legacyRedirects.map((redirect) => ({ ...redirect, permanent: true }));
  },
};

export default nextConfig;
