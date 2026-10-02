"use client";

import Link from "next/link";
import { useState } from "react";
import { MinusIcon, PlusIcon } from "@/components/icons";
import { MAX_QUANTITY } from "@/lib/cart";
import { AddToCartButton } from "./AddToCartButton";

interface PurchasePanelProps {
  slug: string;
  productName: string;
  inStock: boolean;
}

export function PurchasePanel({ slug, productName, inStock }: PurchasePanelProps) {
  const [quantity, setQuantity] = useState(1);

  const stepperButton =
    "inline-flex size-11 items-center justify-center text-forest-dark hover:bg-mint disabled:opacity-40 disabled:hover:bg-transparent";

  return (
    <div className="space-y-3">
      <div className="flex gap-3">
        {inStock && (
          <div
            role="group"
            aria-label="Quantity"
            className="inline-flex items-center overflow-hidden rounded-full border border-line bg-white"
          >
            <button
              type="button"
              onClick={() => setQuantity((q) => q - 1)}
              disabled={quantity <= 1}
              aria-label="Decrease quantity"
              className={stepperButton}
            >
              <MinusIcon width={16} height={16} />
            </button>
            <output aria-live="polite" className="w-8 text-center text-sm font-medium">
              {quantity}
            </output>
            <button
              type="button"
              onClick={() => setQuantity((q) => q + 1)}
              disabled={quantity >= MAX_QUANTITY}
              aria-label="Increase quantity"
              className={stepperButton}
            >
              <PlusIcon width={16} height={16} />
            </button>
          </div>
        )}
        <AddToCartButton
          slug={slug}
          productName={productName}
          quantity={quantity}
          inStock={inStock}
          className="flex-1 rounded-full px-6 py-3 text-sm font-medium"
        />
      </div>
      {inStock && (
        <p className="text-sm text-muted">
          Ready to order?{" "}
          <Link href="/cart" className="font-medium text-forest underline underline-offset-4">
            Go to cart
          </Link>
        </p>
      )}
    </div>
  );
}
