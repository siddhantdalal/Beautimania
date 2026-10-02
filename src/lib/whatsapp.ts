import { site } from "@/data/site";
import { formatPaise, toPaise } from "@/lib/money";

export function whatsappUrl(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export interface OrderItem {
  name: string;
  size?: string;
  quantity: number;
  /** Unit price in rupees */
  price: number;
}

export interface CustomerDetails {
  name: string;
  phone: string;
  address: string;
  city: string;
  pincode: string;
  notes?: string;
}

export function orderSubtotalPaise(items: OrderItem[]): number {
  return items.reduce((total, item) => total + toPaise(item.price) * item.quantity, 0);
}

/** The order text the shopper sends us on WhatsApp. Shipping is confirmed in the chat. */
export function buildOrderMessage(items: OrderItem[], customer: CustomerDetails): string {
  const lines = items.map((item, index) => {
    const label = item.size ? `${item.name} (${item.size})` : item.name;
    const lineTotal = formatPaise(toPaise(item.price) * item.quantity);
    return `${index + 1}. ${label} × ${item.quantity} = ${lineTotal}`;
  });

  const notes = customer.notes?.trim();

  return [
    `Hello ${site.name}! I'd like to place an order:`,
    "",
    ...lines,
    "",
    `Subtotal: ${formatPaise(orderSubtotalPaise(items))}`,
    "Shipping: to be confirmed",
    "",
    "Deliver to:",
    customer.name.trim(),
    customer.phone.trim(),
    customer.address.trim(),
    `${customer.city.trim()} - ${customer.pincode.trim()}`,
    ...(notes ? ["", `Notes: ${notes}`] : []),
  ].join("\n");
}

export function buildProductEnquiryMessage(productName: string, size?: string): string {
  const label = size ? `${productName} (${size})` : productName;
  return `Hello ${site.name}! I'm interested in ${label}. Could you share more details?`;
}
