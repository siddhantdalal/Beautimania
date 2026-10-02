import type { Metadata } from "next";
import { Suspense } from "react";
import { ProductGrid } from "@/components/product/ProductGrid";
import { ShopCatalog } from "@/components/shop/ShopCatalog";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getAllProducts, toSummary } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop all products",
  description:
    "Shop all Beautimania herbal and handmade products: soaps, face, lip, body and hair care, gift sets and DIY supplies.",
  alternates: { canonical: "/shop" },
};

export default function ShopPage() {
  const products = getAllProducts().map(toSummary);

  return (
    <div className="page-container py-10 lg:py-14">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Shop all" }]} />
      <div className="mt-6 mb-8">
        <SectionHeading
          as="h1"
          title="Shop all products"
          description="Herbal and handmade care for face, lips, body and hair, plus gift sets and maker supplies."
        />
      </div>
      {/* The fallback is the full, unfiltered grid, so the static HTML lists every product. */}
      <Suspense fallback={<ProductGrid products={products} />}>
        <ShopCatalog products={products} showCategoryFilter />
      </Suspense>
    </div>
  );
}
