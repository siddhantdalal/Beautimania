import type { Metadata } from "next";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WholesaleEnquiryForm } from "@/components/wholesale/WholesaleEnquiryForm";
import { site } from "@/data/site";
import { getProductsByCategory, toSummary } from "@/lib/products";

export const metadata: Metadata = {
  title: "Wholesale, private label & custom orders",
  description:
    "Bulk and personalised orders, white-label products, third-party manufacturing and DIY soap and lip balm bases from Beautimania.",
  alternates: { canonical: "/wholesale" },
};

const SERVICES = [
  {
    title: "Bulk orders",
    text: "Our soaps and skincare in larger quantities for gifting, events and celebrations.",
  },
  {
    title: "Custom & personalised",
    text: "Pick the products that go in, from single soaps to complete customised gift boxes.",
  },
  {
    title: "White label & private label",
    text: "Our formulations under your brand name, including third-party manufacturing.",
  },
  {
    title: "Reselling",
    text: "Stock selected Beautimania products in your store or online shop.",
  },
];

export default function WholesalePage() {
  const supplies = getProductsByCategory("diy-supplies").map(toSummary);

  return (
    <div className="page-container py-10 lg:py-14">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Wholesale" }]} />

      <div className="mt-8 max-w-3xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-sage uppercase">For businesses</p>
        <h1 className="mt-2 text-4xl sm:text-5xl">Wholesale, private label &amp; custom orders</h1>
        <p className="mt-5 text-lg text-muted">
          Beyond our own shelves, we make herbal and handmade products for gifting, events, retailers and
          other brands. Tell us what you need and we&apos;ll take it from there on WhatsApp.
        </p>
      </div>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service) => (
          <li key={service.title} className="rounded-2xl border border-line bg-white p-6">
            <h2 className="text-2xl">{service.title}</h2>
            <p className="mt-2 text-sm text-muted">{service.text}</p>
          </li>
        ))}
      </ul>

      <section className="mt-20">
        <SectionHeading
          eyebrow="For makers"
          title="DIY & maker supplies"
          description="Ready-to-use melt-and-pour soap bases, lip balm base and soap packaging, delivered across India."
        />
        <div className="mt-8">
          <ProductGrid products={supplies} />
        </div>
      </section>

      <section
        id="enquiry"
        className="mt-20 grid gap-10 rounded-[2rem] bg-blush p-6 sm:p-10 lg:grid-cols-[1fr_1.4fr]"
      >
        <div>
          <h2 className="text-4xl">Send an enquiry</h2>
          <p className="mt-4 text-muted">
            Share a few details and WhatsApp opens with your enquiry ready to send. Prefer email? Write to{" "}
            <a href={`mailto:${site.email}`} className="font-medium text-forest underline underline-offset-4">
              {site.email}
            </a>
            .
          </p>
        </div>
        <WholesaleEnquiryForm />
      </section>
    </div>
  );
}
