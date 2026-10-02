# Beautimania

Website for **Beautimania**, a herbal & handmade skincare brand from Pune (a brand of Koyal Herbal World).
It replaces the old Wix store at www.beautimania.com.

Shoppers browse the catalogue, add products to a cart and send the order on **WhatsApp**, where the
order is confirmed with shipping and payment details. There is no online payment yet (see [Roadmap](#roadmap)).

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router) with TypeScript and React 19
- Tailwind CSS 4
- Vitest for unit tests, ESLint and Prettier for code quality
- No database or CMS: the catalogue is a typed data file, and every page is pre-rendered as static HTML

## Getting started

Requires Node.js 24 (LTS).

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script                        | What it does                             |
| ----------------------------- | ---------------------------------------- |
| `npm run dev`                 | Development server                       |
| `npm run build` / `npm start` | Production build / serve it              |
| `npm test`                    | Unit and catalogue tests                 |
| `npm run typecheck`           | Generates route types and runs `tsc`     |
| `npm run lint`                | ESLint                                   |
| `npm run format`              | Prettier (`format:check` to verify only) |

Before pushing, run `npm run typecheck && npm run lint && npm test && npm run build`.

## Project structure

```
src/
  app/                 Routes (each folder is a URL)
    page.tsx           Homepage
    shop/              All products with filters
    collections/[slug] One page per category
    products/[slug]    One page per product
    cart/              Cart and WhatsApp checkout
    wholesale/ about/ contact/ faq/ policies/
    sitemap.ts robots.ts
  components/          UI components (layout, product, cart, shop, ui)
  data/
    products.ts        The product catalogue
    categories.ts      Categories and labels for concerns, free-from and attributes
    site.ts            Contact details, social links, navigation
  lib/                 Logic: products lookup, cart, money, WhatsApp messages, types
public/images/products/<slug>/   Product photos (1.webp is the main image)
docs/                  Audit of the old site, original catalogue, owner checklists
```

## Editing content

**Products** live in `src/data/products.ts`. Each product has a `slug` (its URL), prices in rupees,
stock status, copy and ingredient lists. TypeScript checks every field, and `npm test` checks for
duplicate slugs, missing images and invalid prices.

- **Change a price or stock:** edit `price`, `compareAtPrice` (the original price when on sale) or `inStock`.
- **Add a product:** add an entry, then put its photos in `public/images/products/<slug>/` and list
  them in `images` (the first is the main photo).
- **Remove a product:** delete its entry and image folder.

`needsReview` on a product holds open questions for the owner. It is never shown on the site.
**Contact details, phone/WhatsApp number and navigation** are in `src/data/site.ts`.

## How ordering works

1. The cart (product slugs and quantities) is saved in the shopper's browser (`localStorage`).
   Names and prices are always read from the catalogue, so a saved cart never shows stale prices.
2. At checkout the shopper enters delivery details, and WhatsApp opens with the order written out
   (`src/lib/whatsapp.ts`). Totals are calculated in paise to avoid rounding errors.
3. The business replies on WhatsApp to confirm shipping, payment and dispatch.

## Moving from the old site

Old Wix URLs permanently redirect to their new pages (`next.config.ts`), including every
`/product-page/...` link, so search rankings and shared links keep working.

## Before launch

- [ ] Owner reviews product details: `docs/03-product-review-checklist.md`
- [ ] Owner confirms the policy pages (shipping, returns, privacy, terms). They are drafted from the old
      store's stated policies.
- [ ] Owner confirms certifications (FDA licence, GMP, ISO) before any are shown on the site
- [ ] Point the `beautimania.com` domain to the new hosting

## Roadmap

- Online payments (Razorpay: UPI, cards, COD) once shipping and returns policies are final
- Journal/blog: migrate the useful posts from the old site
- Product reviews and an Instagram feed
- Courses page, if the course offering is active again
