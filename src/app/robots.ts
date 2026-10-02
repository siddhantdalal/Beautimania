import type { MetadataRoute } from "next";
import { site } from "@/data/site";

// Required for the static (GitHub Pages) export; these files never change at runtime.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/cart" },
    sitemap: new URL("/sitemap.xml", site.url).href,
  };
}
