import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ChatIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { site } from "@/data/site";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact us",
  description: `Contact ${site.name} on WhatsApp, phone or email for orders, product questions and wholesale enquiries.`,
  alternates: { canonical: "/contact" },
};

function ContactCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-line bg-white p-6">
      <h2 className="font-sans text-xs font-semibold tracking-[0.18em] text-muted uppercase">{title}</h2>
      <div className="mt-3 text-ink">{children}</div>
    </div>
  );
}

export default function ContactPage() {
  const { address } = site;

  return (
    <div className="page-container py-10 lg:py-14">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      <div className="mt-8 max-w-2xl">
        <h1 className="text-4xl sm:text-5xl">Contact us</h1>
        <p className="mt-4 text-lg text-muted">
          The quickest way to reach us is WhatsApp, for orders, product questions, custom gifting or
          wholesale.
        </p>
        <div className="mt-8">
          <ButtonLink href={whatsappUrl(`Hello ${site.name}! `)} external>
            <ChatIcon width={18} height={18} />
            Chat on WhatsApp
          </ButtonLink>
        </div>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <ContactCard title="Phone & WhatsApp">
          <a href={`tel:${site.phone.e164}`} className="hover:text-forest">
            {site.phone.display}
          </a>
        </ContactCard>
        <ContactCard title="Email">
          <a href={`mailto:${site.email}`} className="break-all hover:text-forest">
            {site.email}
          </a>
        </ContactCard>
        <ContactCard title="Address">
          <address className="not-italic">
            {address.street}
            <br />
            {address.city}, {address.region} {address.postalCode}
          </address>
        </ContactCard>
        <ContactCard title="Follow us">
          <ul className="space-y-1">
            {Object.values(site.social).map((social) => (
              <li key={social.url}>
                <a href={social.url} target="_blank" rel="noopener noreferrer" className="hover:text-forest">
                  {social.label} <span className="text-muted">{social.handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </ContactCard>
      </div>
    </div>
  );
}
