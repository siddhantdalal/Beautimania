"use client";

import { useState, type FormEvent } from "react";
import { ChatIcon } from "@/components/icons";
import { buttonClass } from "@/components/ui/ButtonLink";
import { buildWholesaleEnquiryMessage, openWhatsApp, whatsappUrl } from "@/lib/whatsapp";

const ENQUIRY_INTERESTS = [
  "Bulk order",
  "Custom or personalised products",
  "White label / private label",
  "Third-party manufacturing",
  "Reselling our products",
  "DIY supplies (soap & lip balm bases)",
] as const;

const inputClass =
  "mt-1 w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:border-forest";
const labelClass = "block text-sm font-medium text-ink";

export function WholesaleEnquiryForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (key: string) => String(data.get(key) ?? "");
    openWhatsApp(
      whatsappUrl(
        buildWholesaleEnquiryMessage({
          name: value("name"),
          business: value("business"),
          interest: value("interest"),
          quantity: value("quantity"),
          details: value("details"),
        }),
      ),
    );
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelClass}>
          Your name
          <input name="name" required autoComplete="name" className={inputClass} />
        </label>
        <label className={labelClass}>
          Business name <span className="font-normal text-muted">(optional)</span>
          <input name="business" autoComplete="organization" className={inputClass} />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelClass}>
          I&apos;m interested in
          <select name="interest" required defaultValue={ENQUIRY_INTERESTS[0]} className={inputClass}>
            {ENQUIRY_INTERESTS.map((interest) => (
              <option key={interest}>{interest}</option>
            ))}
          </select>
        </label>
        <label className={labelClass}>
          Approximate quantity <span className="font-normal text-muted">(optional)</span>
          <input name="quantity" placeholder="e.g. 200 soaps" className={inputClass} />
        </label>
      </div>
      <label className={labelClass}>
        Tell us more <span className="font-normal text-muted">(optional)</span>
        <textarea
          name="details"
          rows={4}
          placeholder="Products, fragrances, packaging, timeline…"
          className={inputClass}
        />
      </label>
      <button type="submit" className={buttonClass("primary")}>
        <ChatIcon width={18} height={18} />
        Send enquiry on WhatsApp
      </button>
      {sent && (
        <p role="status" className="text-sm text-forest-dark">
          WhatsApp opened with your enquiry. Press send there and we&apos;ll get back to you.
        </p>
      )}
    </form>
  );
}
