/** Business details used across the site. Single source of truth for contact info. */
export const site = {
  name: "Beautimania",
  company: "Koyal Herbal World",
  tagline: "Herbal & Handmade",
  description:
    "Herbal and handmade skincare from India: cold-process and herbal soaps, face, lip, body and hair care, free from sulphates and parabens.",
  url: "https://www.beautimania.com",
  phone: {
    display: "+91 77180 82547",
    e164: "+917718082547",
  },
  /** Digits only, as wa.me expects */
  whatsappNumber: "917718082547",
  email: "info@thebeautimania.com",
  address: {
    street: "Silver Gracia, Celestial City Road, Ravet",
    city: "Pune",
    region: "Maharashtra",
    postalCode: "412101",
    country: "IN",
  },
  social: {
    instagram: {
      label: "Instagram",
      handle: "@thebeautimania",
      url: "https://www.instagram.com/thebeautimania",
    },
    youtube: {
      label: "YouTube",
      handle: "@BeautimaniaSkincare",
      url: "https://www.youtube.com/@BeautimaniaSkincare",
    },
    pinterest: {
      label: "Pinterest",
      handle: "thebeautimania",
      url: "https://in.pinterest.com/thebeautimania/",
    },
  },
} as const;

export const mainNav = [
  { label: "Shop all", href: "/shop" },
  { label: "Soaps", href: "/collections/soaps" },
  { label: "Face", href: "/collections/face" },
  { label: "Lips", href: "/collections/lips" },
  { label: "Body", href: "/collections/body" },
  { label: "Hair", href: "/collections/hair" },
  { label: "Gifts", href: "/collections/gifts" },
  { label: "Wholesale", href: "/wholesale" },
] as const;

export const footerNav = {
  shop: [
    { label: "Shop all", href: "/shop" },
    { label: "Handmade soaps", href: "/collections/soaps" },
    { label: "Face care", href: "/collections/face" },
    { label: "Lip care", href: "/collections/lips" },
    { label: "Body care", href: "/collections/body" },
    { label: "Hair care", href: "/collections/hair" },
    { label: "Gift sets & kits", href: "/collections/gifts" },
    { label: "DIY supplies", href: "/collections/diy-supplies" },
  ],
  company: [
    { label: "About us", href: "/about" },
    { label: "Wholesale & private label", href: "/wholesale" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
  ],
  policies: [
    { label: "Shipping", href: "/policies/shipping" },
    { label: "Returns & refunds", href: "/policies/returns" },
    { label: "Privacy", href: "/policies/privacy" },
    { label: "Terms", href: "/policies/terms" },
  ],
} as const;
