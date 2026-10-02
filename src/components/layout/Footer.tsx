import Link from "next/link";
import { footerNav, site } from "@/data/site";

function FooterLinks({ title, links }: { title: string; links: readonly { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="font-sans text-xs font-semibold tracking-[0.18em] text-cream/60 uppercase">{title}</h2>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-cream/85 transition-colors hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const { address } = site;

  return (
    <footer className="mt-24 bg-forest-dark text-cream">
      <div className="page-container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="max-w-sm">
          <p className="font-display text-3xl font-semibold text-white">{site.name}</p>
          <p className="mt-1 text-xs tracking-[0.18em] text-cream/60 uppercase">{site.tagline}</p>
          <address className="mt-6 space-y-1.5 text-sm text-cream/85 not-italic">
            <p>
              <a href={`tel:${site.phone.e164}`} className="hover:text-white">
                {site.phone.display}
              </a>{" "}
              (call or WhatsApp)
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </p>
            <p className="pt-2 text-cream/70">
              {address.street}, {address.city}, {address.region} {address.postalCode}
            </p>
          </address>
          <ul className="mt-6 flex gap-5 text-sm">
            {Object.values(site.social).map((social) => (
              <li key={social.url}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/85 underline decoration-cream/30 underline-offset-4 hover:text-white"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <FooterLinks title="Shop" links={footerNav.shop} />
        <FooterLinks title="Company" links={footerNav.company} />
        <FooterLinks title="Policies" links={footerNav.policies} />
      </div>
      <div className="border-t border-cream/10">
        <p className="page-container py-6 text-xs text-cream/60">
          © {new Date().getFullYear()} {site.name}, a brand of {site.company}. Handmade in India.
        </p>
      </div>
    </footer>
  );
}
