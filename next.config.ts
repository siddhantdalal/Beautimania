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

/**
 * GitHub Pages build, used for test deployments (see .github/workflows/deploy-pages.yml).
 * Pages only serves static files under /<repo>, so the site is exported as plain HTML,
 * images are served as-is and server-side redirects are left out.
 */
const pagesBasePath = process.env.PAGES_BASE_PATH;

const nextConfig: NextConfig =
  pagesBasePath !== undefined
    ? {
        output: "export",
        basePath: pagesBasePath,
        images: { unoptimized: true },
        env: { NEXT_PUBLIC_BASE_PATH: pagesBasePath },
      }
    : {
        async redirects() {
          return legacyRedirects.map((redirect) => ({ ...redirect, permanent: true }));
        },
      };

export default nextConfig;
