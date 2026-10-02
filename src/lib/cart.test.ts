import { describe, expect, it } from "vitest";
import { cartReducer, countItems, MAX_QUANTITY, parseStoredCart, type CartLine } from "./cart";

const cart: CartLine[] = [
  { slug: "neem-soap", quantity: 2 },
  { slug: "beetroot-lip-balm", quantity: 1 },
];

describe("cartReducer", () => {
  it("adds a new line", () => {
    expect(cartReducer([], { type: "add", slug: "neem-soap" })).toEqual([{ slug: "neem-soap", quantity: 1 }]);
  });

  it("merges quantity into an existing line", () => {
    const next = cartReducer(cart, { type: "add", slug: "neem-soap", quantity: 3 });
    expect(next[0]).toEqual({ slug: "neem-soap", quantity: 5 });
    expect(next).toHaveLength(2);
  });

  it("caps quantities at MAX_QUANTITY", () => {
    const next = cartReducer(cart, { type: "add", slug: "neem-soap", quantity: 100 });
    expect(next[0].quantity).toBe(MAX_QUANTITY);
  });

  it("sets an exact quantity, and removes the line when it drops below 1", () => {
    expect(cartReducer(cart, { type: "setQuantity", slug: "neem-soap", quantity: 4 })[0].quantity).toBe(4);
    expect(cartReducer(cart, { type: "setQuantity", slug: "neem-soap", quantity: 0 })).toEqual([
      { slug: "beetroot-lip-balm", quantity: 1 },
    ]);
  });

  it("removes and clears", () => {
    expect(cartReducer(cart, { type: "remove", slug: "beetroot-lip-balm" })).toEqual([
      { slug: "neem-soap", quantity: 2 },
    ]);
    expect(cartReducer(cart, { type: "clear" })).toEqual([]);
  });

  it("does not mutate the previous state", () => {
    const before = structuredClone(cart);
    cartReducer(cart, { type: "add", slug: "neem-soap" });
    expect(cart).toEqual(before);
  });
});

describe("parseStoredCart", () => {
  it("restores a valid cart", () => {
    expect(parseStoredCart(JSON.stringify(cart))).toEqual(cart);
  });

  it("ignores missing, corrupt or malformed data", () => {
    expect(parseStoredCart(null)).toEqual([]);
    expect(parseStoredCart("{not json")).toEqual([]);
    expect(parseStoredCart(JSON.stringify({ slug: "x" }))).toEqual([]);
    expect(
      parseStoredCart(
        JSON.stringify([
          { slug: 1, quantity: 1 },
          { slug: "ok", quantity: 2 },
        ]),
      ),
    ).toEqual([{ slug: "ok", quantity: 2 }]);
  });

  it("normalises stored quantities", () => {
    expect(parseStoredCart(JSON.stringify([{ slug: "a", quantity: 2.7 }]))).toEqual([
      { slug: "a", quantity: 2 },
    ]);
    expect(parseStoredCart(JSON.stringify([{ slug: "a", quantity: 500 }]))).toEqual([
      { slug: "a", quantity: MAX_QUANTITY },
    ]);
  });
});

describe("countItems", () => {
  it("sums quantities", () => {
    expect(countItems(cart)).toBe(3);
    expect(countItems([])).toBe(0);
  });
});
