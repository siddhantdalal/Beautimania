import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { ProductGrid } from "@/components/product/ProductGrid";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SiteImage } from "@/components/ui/SiteImage";
import { categories, concernLabels } from "@/data/categories";
import { site, trustBadges } from "@/data/site";
import { getAllProducts, getProductImage, getProductsBySlugs, toSummary } from "@/lib/products";
import type { Concern } from "@/lib/types";

const FEATURED = [
  "skin-repair-elixir",
  "vitamin-c-aloe-vera-face-serum",
  "beetroot-lip-balm",
  "anti-tan-cold-process-soap-pack-of-3",
];

const HOME_CONCERNS: Concern[] = ["acne", "tan", "pigmentation", "dryness", "oily-skin", "sensitive-skin"];

const ORDER_STEPS = [
  { title: "Add to cart", text: "Pick your products and quantities." },
  { title: "Send on WhatsApp", text: "Your order arrives as a ready-to-send message." },
  { title: "We confirm & dispatch", text: "We share shipping and payment details, then pack your order." },
];

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  legalName: site.company,
  url: site.url,
  logo: new URL("/brand/beautimania-logo-circle.jpg", site.url).href,
  email: site.email,
  telephone: site.phone.e164,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  sameAs: Object.values(site.social).map((social) => social.url),
};

export default function HomePage() {
  const featured = getProductsBySlugs(FEATURED).map(toSummary);
  const retailCategories = categories.filter((category) => category.slug !== "diy-supplies");
  const products = getAllProducts();
  const concerns = HOME_CONCERNS.filter((concern) =>
    products.some((product) => product.concerns.includes(concern)),
  );

  return (
    <>
      <JsonLd data={organizationJsonLd} />

      {/* Hero */}
      <section className="page-container grid items-center gap-10 pt-10 pb-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pt-16 lg:pb-24">
        <div>
          <p className="text-xs font-semibold tracking-[0.25em] text-sage uppercase">{site.tagline}</p>
          <h1 className="mt-4 text-5xl leading-[1.05] sm:text-6xl">
            Skincare made by hand, from ingredients you know.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted">
            Slow-cured cold-process soaps, herbal face and lip care, and gentle body and hair care, free from
            sulphates and parabens.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/shop">Shop all products</ButtonLink>
            <ButtonLink href="/collections/soaps" variant="secondary">
              Explore soaps
            </ButtonLink>
          </div>
        </div>
        <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-blush">
          <SiteImage
            src={getProductImage("cherry-blossom-cold-process-soap")}
            alt="Handmade cherry blossom cold-process soap bars on a wooden ledge"
            fill
            preload
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Trust badges */}
      <section aria-label="Our standards" className="border-y border-line bg-white/60">
        <ul className="page-container grid grid-cols-2 gap-x-6 gap-y-8 py-10 sm:grid-cols-4">
          {trustBadges.map((badge) => (
            <li key={badge.label} className="flex flex-col items-center text-center">
              <SiteImage src={badge.image} alt="" width={256} height={246} className="h-20 w-auto" />
              <p className="mt-3 max-w-[12rem] text-sm font-medium text-forest-dark">{badge.label}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Categories */}
      <section className="page-container py-16 lg:py-24">
        <SectionHeading eyebrow="Shop by category" title="Find what your skin needs" />
        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {retailCategories.map((category) => (
            <li key={category.slug}>
              <Link href={`/collections/${category.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white">
                  <SiteImage
                    src={category.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 15vw, (min-width: 640px) 31vw, 46vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <p className="mt-3 font-display text-xl font-semibold text-forest-dark group-hover:text-forest">
                  {category.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Featured */}
      <section className="page-container pb-16 lg:pb-24">
        <SectionHeading
          eyebrow="Featured"
          title="Our skincare highlights"
          action={{ label: "View all products", href: "/shop" }}
        />
        <div className="mt-10">
          <ProductGrid products={featured} />
        </div>
      </section>

      {/* Cold-process story */}
      <section className="bg-blush">
        <div className="page-container grid items-center gap-10 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] lg:order-2">
            <SiteImage
              src={getProductImage("neem-tulsi-aloe-vera-cold-process-soap")}
              alt="A green-swirled neem, tulsi and aloe vera cold-process soap held in a hand"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-sage uppercase">Slow-made soap</p>
            <h2 className="mt-2 text-4xl">Why cold-process soap feels different</h2>
            <div className="mt-5 space-y-4 text-muted">
              <p>
                Our cold-process bars are made the traditional way: plant oils such as olive and coconut are
                blended by hand, poured into moulds and left to cure for weeks until the bar is firm, mild and
                long-lasting.
              </p>
              <p>
                Ingredients like turmeric, neem, activated charcoal and sandalwood go straight into the bar,
                so every soap has its own colour, texture and character.
              </p>
            </div>
            <div className="mt-8">
              <ButtonLink href="/collections/soaps?type=cold-process">Shop cold-process soaps</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Concerns */}
      <section className="page-container py-16 lg:py-24">
        <SectionHeading eyebrow="Shop by concern" title="Care for what matters to you" />
        <ul className="mt-8 flex flex-wrap gap-3">
          {concerns.map((concern) => (
            <li key={concern}>
              <Link
                href={`/shop?concern=${concern}`}
                className="inline-block rounded-full border border-line bg-white px-5 py-2.5 text-sm font-medium text-forest-dark transition-colors hover:border-forest hover:bg-mint"
              >
                {concernLabels[concern]}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Wholesale */}
      <section className="page-container">
        <div className="grid items-center gap-8 overflow-hidden rounded-[2rem] bg-forest text-cream lg:grid-cols-[1.2fr_1fr]">
          <div className="p-8 sm:p-12">
            <p className="text-xs font-semibold tracking-[0.2em] text-mint/80 uppercase">For businesses</p>
            <h2 className="mt-2 text-4xl text-white">Wholesale, private label &amp; custom orders</h2>
            <p className="mt-4 max-w-xl text-cream/85">
              Bulk and personalised orders for gifting and events, white-label products and third-party
              manufacturing, plus soap and lip balm bases for makers.
            </p>
            <div className="mt-8">
              <ButtonLink href="/wholesale" variant="light">
                Explore wholesale
              </ButtonLink>
            </div>
          </div>
          <div className="relative hidden aspect-[4/3] h-full lg:block">
            <SiteImage
              src={getProductImage("goat-milk-soap-base-1kg")}
              alt=""
              fill
              sizes="40vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* How ordering works */}
      <section className="page-container pt-16 lg:pt-24">
        <SectionHeading eyebrow="How ordering works" title="Simple, personal ordering" />
        <ol className="mt-10 grid gap-6 sm:grid-cols-3">
          {ORDER_STEPS.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-line bg-white p-6">
              <span className="font-display text-4xl font-semibold text-sage">{index + 1}</span>
              <p className="mt-2 font-medium text-ink">{step.title}</p>
              <p className="mt-1 text-sm text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
