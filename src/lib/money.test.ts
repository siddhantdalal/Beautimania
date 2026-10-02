import { describe, expect, it } from "vitest";
import { discountPercent, formatINR, formatPaise, toPaise } from "./money";

describe("toPaise", () => {
  it("converts rupees with paise without floating-point drift", () => {
    expect(toPaise(999.99)).toBe(99999);
    expect(toPaise(799.2)).toBe(79920);
    expect(toPaise(0.1 + 0.2)).toBe(30);
  });
});

describe("formatINR", () => {
  it("drops .00 for whole rupees and uses Indian digit grouping", () => {
    expect(formatINR(90)).toBe("₹90");
    expect(formatINR(1299)).toBe("₹1,299");
    expect(formatINR(129999)).toBe("₹1,29,999");
  });

  it("keeps paise when present", () => {
    expect(formatINR(999.99)).toBe("₹999.99");
    expect(formatINR(799.2)).toBe("₹799.20");
  });

  it("formats integer paise amounts", () => {
    expect(formatPaise(79920)).toBe("₹799.20");
  });
});

describe("discountPercent", () => {
  it("rounds the saving to a whole percent", () => {
    expect(discountPercent(999, 1299)).toBe(23);
  });

  it("returns null when there is no real discount", () => {
    expect(discountPercent(199)).toBeNull();
    expect(discountPercent(199, 199)).toBeNull();
    expect(discountPercent(199, 150)).toBeNull();
  });
});
