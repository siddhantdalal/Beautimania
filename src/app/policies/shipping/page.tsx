import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/ui/ContentPage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Shipping policy",
  description: `How ${site.name} confirms, packs and ships orders across India.`,
  alternates: { canonical: "/policies/shipping" },
};

export default function ShippingPolicyPage() {
  return (
    <ContentPage title="Shipping policy" updated="2 October 2026">
      <h2>Where we deliver</h2>
      <p>We deliver across India.</p>

      <h2>How your order is confirmed</h2>
      <p>
        Orders are placed by sending your cart to us on WhatsApp. Before you pay, we reply to confirm product
        availability, the shipping charge for your location and the expected delivery time.
      </p>

      <h2>Shipping charges</h2>
      <p>
        Shipping charges depend on your delivery location and the size and weight of your order. You&apos;ll
        always know the full amount before paying.
      </p>

      <h2>Dispatch and tracking</h2>
      <p>
        Once payment is received, your order is packed and handed to our courier partner. We share tracking
        details on WhatsApp where available.
      </p>

      <h2>Bulk and custom orders</h2>
      <p>
        Timelines for bulk, personalised and private-label orders are agreed individually. See{" "}
        <Link href="/wholesale">wholesale</Link>.
      </p>

      <h2>Questions</h2>
      <p>
        Message us on WhatsApp at {site.phone.display} or email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </ContentPage>
  );
}
