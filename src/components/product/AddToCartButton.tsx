"use client";

import { useEffect, useState } from "react";
import { cartActions } from "@/lib/cart-store";

interface AddToCartButtonProps {
  slug: string;
  productName: string;
  quantity?: number;
  inStock: boolean;
  className?: string;
}

const FEEDBACK_MS = 1800;

export function AddToCartButton({
  slug,
  productName,
  quantity = 1,
  inStock,
  className = "",
}: AddToCartButtonProps) {
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!added) return;
    const timer = setTimeout(() => setAdded(false), FEEDBACK_MS);
    return () => clearTimeout(timer);
  }, [added]);

  if (!inStock) {
    return (
      <button type="button" disabled className={`cursor-not-allowed bg-line text-muted ${className}`}>
        Out of stock
      </button>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => {
          cartActions.add(slug, quantity);
          setAdded(true);
        }}
        className={`bg-forest text-cream transition-colors hover:bg-forest-dark ${className}`}
      >
        {added ? "Added ✓" : "Add to cart"}
      </button>
      <span role="status" className="sr-only">
        {added ? `${productName} added to cart` : ""}
      </span>
    </>
  );
}
