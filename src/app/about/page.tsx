import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ContentPage } from "@/components/ui/ContentPage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About us",
  description: `${site.name} is the herbal and handmade skincare brand of ${site.company}, based in Pune, India.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <ContentPage
      title="About Beautimania"
      intro={
        <p>
          {site.name} is the herbal and handmade skincare brand of {site.company}, based in{" "}
          {site.address.city}. We believe beauty should never come at the cost of your health, so we make our
          products with herbs, butters and plant oils, and keep them free from sulphates and parabens.
        </p>
      }
    >
      <h2>What we make</h2>
      <p>
        Our range covers handmade soaps and everyday care for face, lips, body and hair. You&apos;ll find{" "}
        <Link href="/collections/soaps?type=cold-process">cold-process soaps</Link> made the traditional way
        and cured for weeks, a wide range of{" "}
        <Link href="/collections/soaps?type=glycerine">herbal glycerine soaps</Link>, and{" "}
        <Link href="/collections/face">face</Link>, <Link href="/collections/lips">lip</Link>,{" "}
        <Link href="/collections/body">body</Link> and <Link href="/collections/hair">hair care</Link>.
      </p>

      <h2>Ingredients you know</h2>
      <p>
        Many of our products are built around ingredients Indian homes have trusted for generations: neem,
        tulsi, turmeric, sandalwood and the herbs of a traditional ubtan. We pair them with nourishing shea
        and cocoa butters, cold-pressed oils and essential oils, and we list ingredients on every product page
        so you know exactly what you&apos;re using.
      </p>

      <h2>Beyond our own shelves</h2>
      <p>
        Alongside our retail range, we make bulk and personalised orders, offer white-label products and
        third-party manufacturing, and supply melt-and-pour soap bases and lip balm base to makers.{" "}
        <Link href="/wholesale">Learn about wholesale and private label</Link>.
      </p>

      <div className="flex flex-wrap gap-3 pt-6">
        <ButtonLink href="/shop">Shop the range</ButtonLink>
        <ButtonLink href="/contact" variant="secondary">
          Get in touch
        </ButtonLink>
      </div>
    </ContentPage>
  );
}
