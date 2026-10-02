import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ProductGrid } from "@/components/product/ProductGrid";
import { ShopCatalog } from "@/components/shop/ShopCatalog";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { categories, getCategory } from "@/data/categories";
import { getProductsByCategory, toSummary } from "@/lib/products";

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: PageProps<"/collections/[slug]">): Promise<Metadata> {
  const category = getCategory((await params).slug);
  if (!category) return {};
  return {
    title: category.name,
    description: category.description,
    alternates: { canonical: `/collections/${category.slug}` },
  };
}

export default async function CollectionPage({ params }: PageProps<"/collections/[slug]">) {
  const category = getCategory((await params).slug);
  if (!category) notFound();

  const products = getProductsByCategory(category.slug).map(toSummary);

  return (
    <div className="page-container py-10 lg:py-14">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Shop", href: "/shop" }, { label: category.name }]}
      />
      <div className="mt-6 mb-8">
        <SectionHeading as="h1" title={category.name} description={category.tagline} />
      </div>
      <Suspense fallback={<ProductGrid products={products} />}>
        <ShopCatalog products={products} />
      </Suspense>
    </div>
  );
}
