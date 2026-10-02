import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { ChatIcon } from "@/components/icons";
import { Price } from "@/components/product/Price";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductGrid } from "@/components/product/ProductGrid";
import { PurchasePanel } from "@/components/product/PurchasePanel";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { attributeLabels, categoryNames, freeFromLabels } from "@/data/categories";
import { site } from "@/data/site";
import { getAllProducts, getProduct, getRelatedProducts, toSummary } from "@/lib/products";
import type { Product } from "@/lib/types";
import { buildProductEnquiryMessage, whatsappUrl } from "@/lib/whatsapp";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllProducts().map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps<"/products/[slug]">): Promise<Metadata> {
  const product = getProduct((await params).slug);
  if (!product) return {};
  return {
    title: product.size ? `${product.name} (${product.size})` : product.name,
    description: product.shortDescription,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: { images: [{ url: product.images[0], alt: product.name }] },
  };
}

function productJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    image: product.images.map((image) => new URL(image, site.url).href),
    brand: { "@type": "Brand", name: site.name },
    category: categoryNames[product.category],
    offers: {
      "@type": "Offer",
      url: new URL(`/products/${product.slug}`, site.url).href,
      priceCurrency: "INR",
      price: product.price.toFixed(2),
      availability: product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    },
  };
}

function DetailSection({ title, open, children }: { title: string; open?: boolean; children: ReactNode }) {
  return (
    <details open={open} className="group border-b border-line py-5">
      <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-ink [&::-webkit-details-marker]:hidden">
        {title}
        <span
          aria-hidden="true"
          className="text-xl leading-none text-muted transition-transform group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <div className="mt-3 text-sm leading-relaxed text-muted">{children}</div>
    </details>
  );
}

export default async function ProductPage({ params }: PageProps<"/products/[slug]">) {
  const product = getProduct((await params).slug);
  if (!product) notFound();

  const related = getRelatedProducts(product).map(toSummary);
  const badges = [
    ...product.attributes.map((attribute) => attributeLabels[attribute]),
    ...product.freeFrom.map((item) => `No ${freeFromLabels[item].toLowerCase()}`),
  ];

  return (
    <div className="page-container py-10 lg:py-14">
      <script
        type="application/ld+json"
        // Escape "<" so product text can never close the script tag.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd(product)).replace(/</g, "\\u003c") }}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: categoryNames[product.category], href: `/collections/${product.category}` },
          { label: product.name },
        ]}
      />

      <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <ProductGallery images={product.images} name={product.name} />

        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-sage uppercase">{product.subtitle}</p>
          <h1 className="mt-2 text-4xl sm:text-5xl">{product.name}</h1>
          {product.size && <p className="mt-2 text-muted">{product.size}</p>}

          <div className="mt-5">
            <Price price={product.price} compareAtPrice={product.compareAtPrice} size="lg" />
            <p className="mt-1 text-xs text-muted">Shipping charges are confirmed on WhatsApp.</p>
          </div>

          <p className="mt-6 text-lg leading-relaxed text-ink/85">{product.shortDescription}</p>

          <div className="mt-8">
            <PurchasePanel slug={product.slug} productName={product.name} inStock={product.inStock} />
          </div>

          <a
            href={whatsappUrl(buildProductEnquiryMessage(product.name, product.size))}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-forest hover:underline"
          >
            <ChatIcon width={18} height={18} />
            Ask about this product on WhatsApp
          </a>

          {product.customisable && (
            <p className="mt-4 rounded-xl bg-mint px-4 py-3 text-sm text-forest-dark">
              Available for bulk and custom orders.{" "}
              <Link href="/wholesale" className="font-medium underline underline-offset-4">
                Wholesale enquiries
              </Link>
            </p>
          )}

          {badges.length > 0 && (
            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Product highlights">
              {badges.map((badge) => (
                <li
                  key={badge}
                  className="rounded-full border border-line bg-white px-3 py-1 text-xs text-ink/80"
                >
                  {badge}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-8 border-t border-line">
            <DetailSection title="Description" open>
              <div className="space-y-3">
                {product.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </DetailSection>
            {product.benefits.length > 0 && (
              <DetailSection title="Benefits">
                <ul className="list-disc space-y-1 pl-5">
                  {product.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </DetailSection>
            )}
            {product.includes && product.includes.length > 0 && (
              <DetailSection title="What's inside">
                <ul className="list-disc space-y-1 pl-5">
                  {product.includes.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </DetailSection>
            )}
            {product.ingredients.length > 0 && (
              <DetailSection title={product.keyIngredientsOnly ? "Key ingredients" : "Ingredients"}>
                <p>{product.ingredients.join(", ")}</p>
              </DetailSection>
            )}
            {product.howToUse && product.howToUse.length > 0 && (
              <DetailSection title="How to use">
                <ol className="list-decimal space-y-1 pl-5">
                  {product.howToUse.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </DetailSection>
            )}
            {product.notes && product.notes.length > 0 && (
              <DetailSection title="Good to know">
                <ul className="list-disc space-y-1 pl-5">
                  {product.notes.map((note, index) => (
                    <li key={index}>{note}</li>
                  ))}
                </ul>
              </DetailSection>
            )}
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <SectionHeading
            title="You may also like"
            action={{
              label: `See all ${categoryNames[product.category]}`,
              href: `/collections/${product.category}`,
            }}
          />
          <div className="mt-8">
            <ProductGrid products={related} />
          </div>
        </section>
      )}
    </div>
  );
}
