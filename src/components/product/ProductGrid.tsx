import type { ProductSummary } from "@/lib/products";
import { ProductCard } from "./ProductCard";

export function ProductGrid({ products }: { products: ProductSummary[] }) {
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4">
      {products.map((product) => (
        <li key={product.slug} className="flex">
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
