import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { ContentPage } from "@/components/ui/ContentPage";
import { Disclosure } from "@/components/ui/Disclosure";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Frequently asked questions",
  description: `Answers about ordering, shipping, returns, ingredients and wholesale at ${site.name}.`,
  alternates: { canonical: "/faq" },
};

const FAQS: { question: string; answer: ReactNode }[] = [
  {
    question: "How do I place an order?",
    answer: (
      <p>
        Add products to your cart, fill in your delivery details and tap{" "}
        <strong>Send order on WhatsApp</strong>. WhatsApp opens with your order written out; press send and
        we&apos;ll reply to confirm availability, shipping and payment.
      </p>
    ),
  },
  {
    question: "How do I pay?",
    answer: (
      <p>
        Once we&apos;ve confirmed your order on WhatsApp, we share the payment options with you. Nothing is
        charged before that.
      </p>
    ),
  },
  {
    question: "How much is shipping and how long does delivery take?",
    answer: (
      <p>
        We deliver across India. Shipping charges depend on your location and order size, and we confirm them,
        along with the expected delivery time, before you pay. See our{" "}
        <Link href="/policies/shipping">shipping policy</Link>.
      </p>
    ),
  },
  {
    question: "Can I return or exchange a product?",
    answer: (
      <p>
        If an item arrives damaged, message us within 7 days of delivery with an unboxing video and we&apos;ll
        help. As these are personal-care products, we can&apos;t accept returns of opened or used items.
        Details are in our <Link href="/policies/returns">returns policy</Link>.
      </p>
    ),
  },
  {
    question: "What's the difference between cold-process and glycerine soap?",
    answer: (
      <>
        <p>
          <strong>Cold-process soap</strong> is made from scratch by combining plant oils such as olive and
          coconut with lye, then left to cure for several weeks before use. Each bar has its own texture and
          character.
        </p>
        <p>
          <strong>Herbal glycerine soap</strong> is made with a ready glycerine soap base, enriched with
          herbs, extracts, oils and essential oils. It&apos;s gentle and ready to use sooner.
        </p>
      </>
    ),
  },
  {
    question: "Are your products free from sulphates and parabens?",
    answer: (
      <p>
        That&apos;s our standard, and each product page lists exactly what that product is free from, along
        with its ingredients.
      </p>
    ),
  },
  {
    question: "Are your products suitable for sensitive skin?",
    answer: (
      <p>
        Many of our products are gentle, but natural ingredients can still cause reactions in some people.
        Please do a patch test on a small area before first use, and stop using a product if irritation
        occurs.
      </p>
    ),
  },
  {
    question: "Do you take bulk, custom or private-label orders?",
    answer: (
      <p>
        Yes. We make bulk and personalised orders, white-label products and offer third-party manufacturing.
        Visit our <Link href="/wholesale">wholesale page</Link> to send an enquiry.
      </p>
    ),
  },
];

export default function FaqPage() {
  return (
    <ContentPage
      title="Frequently asked questions"
      intro={
        <p>
          Can&apos;t find your answer? <Link href="/contact">Contact us</Link> and we&apos;ll be happy to
          help.
        </p>
      }
    >
      <div className="space-y-3">
        {FAQS.map((faq) => (
          <Disclosure
            key={faq.question}
            summary={faq.question}
            className="rounded-2xl border border-line bg-white px-5 py-4"
          >
            <div className="mt-3 space-y-3">{faq.answer}</div>
          </Disclosure>
        ))}
      </div>
    </ContentPage>
  );
}
