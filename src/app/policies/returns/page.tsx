import type { Metadata } from "next";
import { ContentPage } from "@/components/ui/ContentPage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Returns & refunds",
  description: `${site.name}'s policy for damaged items, returns and refunds.`,
  alternates: { canonical: "/policies/returns" },
};

export default function ReturnsPolicyPage() {
  return (
    <ContentPage title="Returns & refunds" updated="2 October 2026">
      <p>
        Our products are handmade personal-care items, so for hygiene reasons we can only accept returns when
        something has gone wrong with your delivery.
      </p>

      <h2>Damaged items</h2>
      <p>If a product arrives damaged, we&apos;ll make it right. To raise a request:</p>
      <ol>
        <li>Record an unboxing video when you open your parcel. We need it to process any claim.</li>
        <li>
          Message us within <strong>7 days of delivery</strong> on WhatsApp ({site.phone.display}) or email{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> with your name, order details and the video.
        </li>
        <li>Once we&apos;ve reviewed it, we&apos;ll arrange a replacement or refund for the damaged item.</li>
      </ol>

      <h2>What we can&apos;t accept</h2>
      <ul>
        <li>Opened or used products</li>
        <li>Returns for change of mind</li>
        <li>Requests made more than 7 days after delivery, or without an unboxing video</li>
      </ul>

      <h2>Handmade variation</h2>
      <p>
        Because every batch is made by hand, colour, pattern and scent can vary slightly from the photos. This
        is a natural part of handmade products and isn&apos;t considered a defect.
      </p>
    </ContentPage>
  );
}
