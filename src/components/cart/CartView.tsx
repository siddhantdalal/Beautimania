"use client";

import Link from "next/link";
import { MinusIcon, PlusIcon } from "@/components/icons";
import { buttonClass } from "@/components/ui/ButtonLink";
import { SiteImage } from "@/components/ui/SiteImage";
import { MAX_QUANTITY } from "@/lib/cart";
import { cartActions, useCartLines, useHasHydrated } from "@/lib/cart-store";
import { formatINR, formatPaise, toPaise } from "@/lib/money";
import type { ProductSummary } from "@/lib/products";
import { orderSubtotalPaise, type OrderItem } from "@/lib/whatsapp";
import { CheckoutForm } from "./CheckoutForm";

/**
 * `catalogue` comes from the server, so prices are always current; the stored
 * cart only holds slugs and quantities. Lines for products that no longer exist
 * or are out of stock are shown separately and left out of the order.
 */
export function CartView({ catalogue }: { catalogue: Record<string, ProductSummary> }) {
  const hydrated = useHasHydrated();
  const lines = useCartLines();

  if (!hydrated) {
    return <p className="py-16 text-center text-muted">Loading your cart…</p>;
  }

  const entries = lines.flatMap((line) => {
    const product = catalogue[line.slug];
    return product ? [{ product, quantity: line.quantity }] : [];
  });
  const orderable = entries.filter((entry) => entry.product.inStock);
  const unavailable = entries.filter((entry) => !entry.product.inStock);

  if (entries.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-line py-16 text-center">
        <p className="font-display text-2xl text-forest-dark">Your cart is empty</p>
        <p className="mt-2 text-muted">Browse our herbal and handmade range to get started.</p>
        <Link href="/shop" className={buttonClass("primary", "mt-6")}>
          Shop all products
        </Link>
      </div>
    );
  }

  const orderItems: OrderItem[] = orderable.map(({ product, quantity }) => ({
    name: product.name,
    size: product.size,
    quantity,
    price: product.price,
  }));
  const subtotal = orderSubtotalPaise(orderItems);

  return (
    <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-start">
      <section aria-labelledby="cart-items-heading">
        <h2 id="cart-items-heading" className="sr-only">
          Items in your cart
        </h2>
        <ul className="divide-y divide-line border-y border-line">
          {entries.map(({ product, quantity }) => (
            <li key={product.slug} className="flex gap-4 py-5">
              <Link
                href={`/products/${product.slug}`}
                tabIndex={-1}
                aria-hidden="true"
                className="relative size-24 shrink-0 overflow-hidden rounded-xl bg-white"
              >
                <SiteImage src={product.image} alt="" fill sizes="96px" className="object-cover" />
              </Link>
              <div className="flex flex-1 flex-col gap-2">
                <div className="flex justify-between gap-4">
                  <div>
                    <Link
                      href={`/products/${product.slug}`}
                      className="font-medium text-ink hover:text-forest"
                    >
                      {product.name}
                    </Link>
                    <p className="text-sm text-muted">
                      {[product.size, formatINR(product.price)].filter(Boolean).join(" · ")}
                    </p>
                  </div>
                  <p className="font-medium">
                    {product.inStock ? formatPaise(toPaise(product.price) * quantity) : "—"}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  {product.inStock ? (
                    <div
                      role="group"
                      aria-label={`Quantity of ${product.name}`}
                      className="inline-flex items-center rounded-full border border-line bg-white"
                    >
                      <button
                        type="button"
                        onClick={() => cartActions.setQuantity(product.slug, quantity - 1)}
                        aria-label={`Decrease quantity of ${product.name}`}
                        className="inline-flex size-9 items-center justify-center rounded-full hover:bg-mint"
                      >
                        <MinusIcon width={14} height={14} />
                      </button>
                      <output className="w-7 text-center text-sm">{quantity}</output>
                      <button
                        type="button"
                        onClick={() => cartActions.setQuantity(product.slug, quantity + 1)}
                        disabled={quantity >= MAX_QUANTITY}
                        aria-label={`Increase quantity of ${product.name}`}
                        className="inline-flex size-9 items-center justify-center rounded-full hover:bg-mint disabled:opacity-40"
                      >
                        <PlusIcon width={14} height={14} />
                      </button>
                    </div>
                  ) : (
                    <p className="text-sm text-rose">Out of stock, not included in your order</p>
                  )}
                  <button
                    type="button"
                    onClick={() => cartActions.remove(product.slug)}
                    className="text-sm text-muted underline underline-offset-4 hover:text-ink"
                  >
                    Remove<span className="sr-only"> {product.name}</span>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {unavailable.length > 0 && (
          <p className="mt-4 text-sm text-muted">
            Items marked out of stock stay in your cart but won&apos;t be added to the order.
          </p>
        )}
      </section>

      <aside
        aria-labelledby="order-heading"
        className="rounded-2xl border border-line bg-white p-6 lg:sticky lg:top-28"
      >
        <h2 id="order-heading" className="text-2xl">
          Order summary
        </h2>
        <dl className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <dt className="text-muted">Subtotal</dt>
            <dd className="font-medium">{formatPaise(subtotal)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-muted">Shipping</dt>
            <dd className="text-muted">Confirmed on WhatsApp</dd>
          </div>
        </dl>
        {orderItems.length > 0 ? (
          <CheckoutForm items={orderItems} />
        ) : (
          <p className="mt-6 text-sm text-muted">Add an in-stock item to place an order.</p>
        )}
      </aside>
    </div>
  );
}
