import type { Metadata } from "next";
import { CartView } from "@/components/cart/CartView";
import { getAllProducts, toSummary, type ProductSummary } from "@/lib/products";

export const metadata: Metadata = {
  title: "Your cart",
  robots: { index: false },
};

export default function CartPage() {
  // Only the summary fields go to the client, keyed by slug for lookups.
  const catalogue: Record<string, ProductSummary> = Object.fromEntries(
    getAllProducts().map((product) => [product.slug, toSummary(product)]),
  );

  return (
    <div className="page-container py-10 lg:py-14">
      <h1 className="text-4xl sm:text-5xl">Your cart</h1>
      <div className="mt-8">
        <CartView catalogue={catalogue} />
      </div>
    </div>
  );
}
