import { discountPercent, formatINR } from "@/lib/money";

interface PriceProps {
  price: number;
  compareAtPrice?: number;
  size?: "sm" | "lg";
}

export function Price({ price, compareAtPrice, size = "sm" }: PriceProps) {
  const discount = discountPercent(price, compareAtPrice);

  return (
    <p className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
      <span className={size === "lg" ? "text-2xl font-semibold text-ink" : "font-semibold text-ink"}>
        {discount !== null && <span className="sr-only">Sale price </span>}
        {formatINR(price)}
      </span>
      {discount !== null && compareAtPrice !== undefined && (
        <>
          <s className="text-sm text-muted">
            <span className="sr-only">Regular price </span>
            {formatINR(compareAtPrice)}
          </s>
          <span className="text-xs font-semibold text-rose">{discount}% off</span>
        </>
      )}
    </p>
  );
}
