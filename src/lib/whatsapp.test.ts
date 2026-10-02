import { describe, expect, it } from "vitest";
import {
  buildOrderMessage,
  orderSubtotalPaise,
  whatsappUrl,
  type CustomerDetails,
  type OrderItem,
} from "./whatsapp";

const items: OrderItem[] = [
  { name: "Neem Soap", size: "100 g", quantity: 2, price: 90 },
  { name: "Skin Repair Elixir", size: "35 ml", quantity: 1, price: 999.99 },
  { name: "Rosemary Shampoo", quantity: 3, price: 799.2 },
];

const customer: CustomerDetails = {
  name: " Asha Patil ",
  phone: "9876543210",
  address: "Flat 4, Green Park",
  city: "Pune",
  pincode: "411001",
};

describe("orderSubtotalPaise", () => {
  it("adds line totals exactly in paise", () => {
    // 2 × 90 + 999.99 + 3 × 799.20 = 3577.59
    expect(orderSubtotalPaise(items)).toBe(357759);
  });
});

describe("buildOrderMessage", () => {
  it("lists every line with quantity and line total, then the subtotal and address", () => {
    const message = buildOrderMessage(items, customer);

    expect(message).toContain("1. Neem Soap (100 g) × 2 = ₹180");
    expect(message).toContain("2. Skin Repair Elixir (35 ml) × 1 = ₹999.99");
    expect(message).toContain("3. Rosemary Shampoo × 3 = ₹2,397.60");
    expect(message).toContain("Subtotal: ₹3,577.59");
    expect(message).toContain("Shipping: to be confirmed");
    expect(message).toContain("Asha Patil\n9876543210\nFlat 4, Green Park\nPune - 411001");
  });

  it("only includes notes when provided", () => {
    expect(buildOrderMessage(items, customer)).not.toContain("Notes:");
    expect(buildOrderMessage(items, { ...customer, notes: "  Gift wrap please " })).toContain(
      "Notes: Gift wrap please",
    );
  });
});

describe("whatsappUrl", () => {
  it("targets the business number and URL-encodes the text", () => {
    const url = new URL(whatsappUrl("Hi & thanks\nLine 2"));
    expect(url.origin + url.pathname).toBe("https://wa.me/917718082547");
    expect(url.searchParams.get("text")).toBe("Hi & thanks\nLine 2");
  });
});
