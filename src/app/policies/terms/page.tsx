import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/ui/ContentPage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of use",
  description: `Terms for using the ${site.name} website and ordering our products.`,
  alternates: { canonical: "/policies/terms" },
};

export default function TermsPage() {
  const { address } = site;

  return (
    <ContentPage
      title="Terms of use"
      updated="2 October 2026"
      intro={
        <p>
          This website is run by {site.company} ({site.name}), {address.street}, {address.city},{" "}
          {address.region} {address.postalCode}. By using the site or placing an order, you agree to these
          terms.
        </p>
      }
    >
      <h2>Orders and prices</h2>
      <ul>
        <li>
          Prices are shown in Indian rupees (₹). Shipping is charged separately and confirmed before payment.
        </li>
        <li>
          Sending your cart on WhatsApp is an order request. An order is accepted only once we confirm it with
          you.
        </li>
        <li>
          We may correct pricing or product errors and update prices or availability at any time; this
          doesn&apos;t affect orders we&apos;ve already confirmed.
        </li>
      </ul>

      <h2>Products</h2>
      <ul>
        <li>
          Our products are cosmetics for external use only. They are not intended to diagnose or treat any
          condition.
        </li>
        <li>
          Natural ingredients can cause reactions in some people. Patch test before first use and stop using a
          product if irritation occurs. If you have a skin condition, are pregnant or have allergies, check
          with your doctor first.
        </li>
        <li>
          Handmade products vary slightly in colour, pattern and scent from batch to batch and from the
          photos.
        </li>
      </ul>

      <h2>Returns</h2>
      <p>
        Returns and refunds are covered by our <Link href="/policies/returns">returns policy</Link>.
      </p>

      <h2>Website content</h2>
      <p>
        All text, photos and logos on this site belong to {site.name} and may not be copied or reused without
        our permission.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms? Message us on WhatsApp ({site.phone.display}) or email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </ContentPage>
  );
}
