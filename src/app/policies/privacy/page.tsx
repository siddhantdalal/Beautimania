import type { Metadata } from "next";
import { ContentPage } from "@/components/ui/ContentPage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: `What personal information ${site.name} collects and how it is used.`,
  alternates: { canonical: "/policies/privacy" },
};

export default function PrivacyPolicyPage() {
  return (
    <ContentPage
      title="Privacy policy"
      updated="2 October 2026"
      intro={
        <p>
          This policy explains what information {site.name} ({site.company}) receives when you use this
          website or order from us, and how we use it.
        </p>
      }
    >
      <h2>On this website</h2>
      <p>
        You don&apos;t need an account to shop with us. Your cart is saved only in your own browser so
        it&apos;s still there when you come back; it isn&apos;t sent to us until you choose to send your
        order. We don&apos;t use advertising or tracking cookies. Our hosting provider keeps standard
        technical logs (such as IP addresses) to keep the site secure and running.
      </p>

      <h2>When you order or contact us</h2>
      <p>
        When you send an order or enquiry on WhatsApp or by email, we receive the details you include:
        typically your name, phone number, delivery address and the products you want. We use these only to:
      </p>
      <ul>
        <li>confirm, pack and deliver your order</li>
        <li>contact you about your order, payment or delivery</li>
        <li>reply to your questions and enquiries</li>
      </ul>

      <h2>Who we share it with</h2>
      <p>
        We share your name, phone number and address with our courier partner so your parcel can be delivered.
        We don&apos;t sell or rent your personal information. Messages sent on WhatsApp are also handled by
        WhatsApp under its own privacy policy.
      </p>

      <h2>Your choices</h2>
      <p>
        You can ask us to show, correct or delete the personal information we hold about you by messaging us
        on WhatsApp ({site.phone.display}) or emailing <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </ContentPage>
  );
}
