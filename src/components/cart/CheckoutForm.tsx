"use client";

import { useState, type FormEvent } from "react";
import { ChatIcon } from "@/components/icons";
import { buttonClass } from "@/components/ui/ButtonLink";
import { cartActions } from "@/lib/cart-store";
import {
  buildOrderMessage,
  openWhatsApp,
  whatsappUrl,
  type CustomerDetails,
  type OrderItem,
} from "@/lib/whatsapp";

const inputClass =
  "mt-1 w-full rounded-lg border border-line bg-cream/40 px-3 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:border-forest focus:bg-white";
const labelClass = "block text-sm font-medium text-ink";

function readCustomer(form: HTMLFormElement): CustomerDetails {
  const data = new FormData(form);
  const value = (key: string) => String(data.get(key) ?? "");
  return {
    name: value("name"),
    phone: value("phone"),
    address: value("address"),
    city: value("city"),
    pincode: value("pincode"),
    notes: value("notes"),
  };
}

/** Uses native form validation; on submit, opens WhatsApp with the order pre-filled. */
export function CheckoutForm({ items }: { items: OrderItem[] }) {
  const [sentUrl, setSentUrl] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const url = whatsappUrl(buildOrderMessage(items, readCustomer(event.currentTarget)));
    openWhatsApp(url);
    setSentUrl(url);
  }

  if (sentUrl) {
    return (
      <div role="status" className="mt-6 space-y-4 text-sm">
        <p className="rounded-xl bg-mint px-4 py-3 text-forest-dark">
          Your order is ready in WhatsApp. Press <strong>send</strong> there to place it, and we&apos;ll reply
          to confirm shipping and payment.
        </p>
        <a
          href={sentUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass("secondary", "w-full")}
        >
          Open WhatsApp again
        </a>
        <button
          type="button"
          onClick={() => {
            cartActions.clear();
            setSentUrl(null);
          }}
          className="w-full text-center text-muted underline underline-offset-4 hover:text-ink"
        >
          I&apos;ve sent it, clear my cart
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <p className="text-sm text-muted">Where should we deliver?</p>
      <label className={labelClass}>
        Full name
        <input name="name" required autoComplete="name" className={inputClass} />
      </label>
      <label className={labelClass}>
        Mobile number
        <input
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          inputMode="tel"
          pattern="(\+91 ?)?[6-9][0-9]{9}"
          title="A 10-digit Indian mobile number"
          placeholder="98765 43210"
          className={inputClass}
        />
      </label>
      <label className={labelClass}>
        Address
        <textarea
          name="address"
          required
          rows={3}
          autoComplete="street-address"
          placeholder="House / flat, street, area"
          className={inputClass}
        />
      </label>
      <div className="grid grid-cols-2 gap-3">
        <label className={labelClass}>
          City
          <input name="city" required autoComplete="address-level2" className={inputClass} />
        </label>
        <label className={labelClass}>
          PIN code
          <input
            name="pincode"
            required
            autoComplete="postal-code"
            inputMode="numeric"
            pattern="[1-9][0-9]{5}"
            maxLength={6}
            title="A 6-digit PIN code"
            className={inputClass}
          />
        </label>
      </div>
      <label className={labelClass}>
        Notes <span className="font-normal text-muted">(optional)</span>
        <textarea name="notes" rows={2} placeholder="Gift wrap, delivery timing…" className={inputClass} />
      </label>
      <button type="submit" className={buttonClass("primary", "w-full")}>
        <ChatIcon width={18} height={18} />
        Send order on WhatsApp
      </button>
      <p className="text-xs text-muted">
        WhatsApp opens with your order written out. Nothing is charged until we confirm with you.
      </p>
    </form>
  );
}
