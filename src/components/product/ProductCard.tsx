import Link from "next/link";
import { SiteImage } from "@/components/ui/SiteImage";
import type { ProductSummary } from "@/lib/products";
import { AddToCartButton } from "./AddToCartButton";
import { Price } from "./Price";

export function ProductCard({ product }: { product: ProductSummary }) {
  const href = `/products/${product.slug}`;
  const onSale = product.inStock && product.compareAtPrice !== undefined;

  return (
    <article className="group flex w-full flex-col">
      {/* The name below is the accessible link; the image link is a mouse/touch shortcut only. */}
      <Link
        href={href}
        tabIndex={-1}
        aria-hidden="true"
        className="relative block aspect-square overflow-hidden rounded-xl bg-white"
      >
        <SiteImage
          src={product.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 23vw, (min-width: 640px) 31vw, 46vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {!product.inStock && (
          <span className="absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-muted">
            Out of stock
          </span>
        )}
        {onSale && (
          <span className="absolute top-3 left-3 rounded-full bg-rose px-2.5 py-1 text-xs font-semibold text-white">
            Sale
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col pt-3">
        <p className="text-xs tracking-wide text-muted">
          {product.subtitle}
          {product.size && ` · ${product.size}`}
        </p>
        <h3 className="mt-1 font-sans text-[0.95rem] leading-snug font-medium text-ink">
          <Link href={href} className="hover:text-forest">
            {product.name}
          </Link>
        </h3>
        <div className="mt-1.5">
          <Price price={product.price} compareAtPrice={product.compareAtPrice} />
        </div>
        <div className="mt-auto pt-3">
          <AddToCartButton
            slug={product.slug}
            productName={product.name}
            inStock={product.inStock}
            className="w-full rounded-full px-4 py-2.5 text-sm font-medium"
          />
        </div>
      </div>
    </article>
  );
}
