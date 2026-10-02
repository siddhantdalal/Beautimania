/**
 * Prices are stored in rupees (some have paise, e.g. 999.99), but arithmetic is
 * done in integer paise so totals never pick up floating-point errors.
 */

export function toPaise(rupees: number): number {
  return Math.round(rupees * 100);
}

const inrFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  trailingZeroDisplay: "stripIfInteger",
});

/** ₹1,299 / ₹999.99 */
export function formatINR(rupees: number): string {
  return inrFormatter.format(rupees);
}

/** Formats an integer paise amount as rupees. */
export function formatPaise(paise: number): string {
  return formatINR(paise / 100);
}

export function discountPercent(price: number, compareAtPrice?: number): number | null {
  if (!compareAtPrice || compareAtPrice <= price) return null;
  return Math.round((1 - price / compareAtPrice) * 100);
}
