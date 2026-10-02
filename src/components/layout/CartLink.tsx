"use client";

import Link from "next/link";
import { BagIcon } from "@/components/icons";
import { useCartCount } from "@/lib/cart-store";

export function CartLink() {
  const count = useCartCount();
  const label = count === 0 ? "Cart, empty" : `Cart, ${count} ${count === 1 ? "item" : "items"}`;

  return (
    <Link
      href="/cart"
      aria-label={label}
      className="relative inline-flex size-11 items-center justify-center rounded-full text-forest-dark transition-colors hover:bg-mint"
    >
      <BagIcon width={22} height={22} />
      {count > 0 && (
        <span className="absolute top-1 right-0.5 flex min-w-5 items-center justify-center rounded-full bg-rose px-1 text-[11px] leading-5 font-semibold text-white">
          {count}
        </span>
      )}
    </Link>
  );
}
