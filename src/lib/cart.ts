/**
 * Cart state is just product slugs + quantities. Names and prices are always
 * looked up from the catalogue at render time, so a stored cart can never show
 * a stale price.
 */

export const MAX_QUANTITY = 20;

export interface CartLine {
  slug: string;
  quantity: number;
}

export type CartAction =
  | { type: "add"; slug: string; quantity?: number }
  | { type: "setQuantity"; slug: string; quantity: number }
  | { type: "remove"; slug: string }
  | { type: "clear" }
  | { type: "replace"; lines: CartLine[] };

function clampQuantity(quantity: number): number {
  if (!Number.isFinite(quantity)) return 1;
  return Math.min(MAX_QUANTITY, Math.max(1, Math.floor(quantity)));
}

export function cartReducer(lines: CartLine[], action: CartAction): CartLine[] {
  switch (action.type) {
    case "add": {
      const quantity = action.quantity ?? 1;
      const existing = lines.find((line) => line.slug === action.slug);
      if (!existing) {
        return [...lines, { slug: action.slug, quantity: clampQuantity(quantity) }];
      }
      return lines.map((line) =>
        line.slug === action.slug ? { ...line, quantity: clampQuantity(line.quantity + quantity) } : line,
      );
    }
    case "setQuantity":
      if (action.quantity < 1) {
        return lines.filter((line) => line.slug !== action.slug);
      }
      return lines.map((line) =>
        line.slug === action.slug ? { ...line, quantity: clampQuantity(action.quantity) } : line,
      );
    case "remove":
      return lines.filter((line) => line.slug !== action.slug);
    case "clear":
      return [];
    case "replace":
      return action.lines;
  }
}

/** Parses a cart saved in localStorage, dropping anything malformed. */
export function parseStoredCart(raw: string | null): CartLine[] {
  if (!raw) return [];
  try {
    const value: unknown = JSON.parse(raw);
    if (!Array.isArray(value)) return [];
    return value
      .filter(
        (item): item is CartLine =>
          typeof item === "object" &&
          item !== null &&
          typeof item.slug === "string" &&
          typeof item.quantity === "number",
      )
      .map((item) => ({ slug: item.slug, quantity: clampQuantity(item.quantity) }));
  } catch {
    return [];
  }
}

export function countItems(lines: CartLine[]): number {
  return lines.reduce((total, line) => total + line.quantity, 0);
}
