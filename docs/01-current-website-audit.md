# Beautimania: Current Website Audit (Notes for the Revamp)

> **Site reviewed:** https://www.beautimania.com (and `/home`)
> **Date of review:** 2 Oct 2026
> **Purpose:** Record everything on the current site (content, products, structure, brand, problems) so we can rebuild it as a professional e-commerce site.

### Files in this folder

| File | What it is |
|---|---|
| `01-current-website-audit.md` | **This file.** What's on the site, how it's structured, what's broken, what to keep, questions for the owner |
| `02-product-catalogue.md` | All **81 products** with prices, stock, SKU, category and the full original description/ingredients text |
| `reference/screenshots/` | "Before" screenshots of the old site (home, shop, course site) |
| `reference/brand-assets/` | High-resolution copies of the existing logos pulled from the site (BM circle logo, B mark, hero wordmark) |

### How the review was done
- Pulled the site's sitemaps and fetched **every listed URL**: 11 pages, 81 product pages, 4 blog posts, 1 blog index. Also tried common unlisted pages (`/about`, `/contact`, `/shop`, `/wholesale`), and they all return 404.
- Extracted all text, links, image names, SEO tags, structured data, theme colours and fonts from each page.
- Took desktop screenshots in Chrome and checked every external link (social, article, course, WhatsApp, alternate domain).
- **Not tested:** checkout/payment (would need a real order), the logged-in member area, and mobile layout (the automated mobile capture didn't render reliably, so it should be checked by hand on a phone).

---

## 1. Business snapshot

| Item | Detail |
|---|---|
| Brand | **Beautimania**, spelled "BeautiMania" in some places and "Beatutimania" in one file name |
| Company | "Beautimania, **Brand of Koyal Herbal World**". The footer also says "Promoted By KoyalHerbal World" |
| Positioning | "**Herbal & Handmade**". Sulphate- and paraben-free skincare, soaps, lip care and hair care |
| Registered address | Silver Gracia, Celestial City Road, Ravet, Pune, Maharashtra 412101 |
| Phone / WhatsApp | **+91 77180 82547** (also used for "Bulk Enquiry" and the wa.link button) |
| Email | info@thebeautimania.com |
| Instagram | https://instagram.com/thebeautimania (the homepage displays the handle wrongly as "@beautimania") |
| YouTube | https://youtube.com/@BeautimaniaSkincare |
| Pinterest | https://in.pinterest.com/thebeautimania/ |
| Facebook / Twitter | Icons exist but **link to Wix's own pages** (`facebook.com/wix`, `twitter.com/wix`), left over from the template |
| Platform | **Wix** (Wix Stores, Wix Blog, Wix Forms, Wix Members login) |
| Currency | INR (₹) |
| Domains | `beautimania.com` → redirects to `www.beautimania.com` ✅. `thebeautimania.com` is used for email (Cloudflare mail routing) but has **no website**, and `www.thebeautimania.com` does not resolve at all |
| Store last updated | Product sitemap modified 25 Sep 2026, so the store is actively maintained |

### What the business actually does (from product texts and pages)
1. **Retail (B2C):** handmade soaps (the bulk of the range), face care, lip care, body care, hair care.
2. **Gifting:** customisable gift boxes (Rakhi), kits, and "gift packing available" on several products.
3. **B2B / wholesale:** bulk orders, **customisation, white labelling, third-party manufacturing, reselling** (mentioned across many product descriptions), plus a Bulk Order enquiry form.
4. **DIY / maker supplies:** melt-and-pour soap bases (1 kg), lip balm base (100 g / 1 kg) with recipe steps, soap shrink-wrap rolls.
5. **Education:** a "Course" offering hosted on an external Classplus app/site.
6. **Ordering via WhatsApp / DM** is clearly a big real-world channel ("DM to know more", "What's app for customisation and bulk order").

> 💡 The new site should treat **B2B/private label** and **DIY supplies** as their own sections. Right now they're mixed in with retail products and the "Bulk Order" page is half-broken.

---

## 2. Brand identity (what exists today)

### Logos
- **Primary logo:** a circular badge with a large green **"BM" monogram**. The B is drawn with a woman's face profile and flowing hair, and the M is formed from leaves. "Beautimania" sits underneath in a serif wordmark with leaf accents, with a ™ mark. The original file is 1875×1875 JPEG with an off-white background (no transparent version found).
- **Icon / favicon:** just the "B" with the face profile inside a thin green circle. A huge 6518 px PNG exists.
- **Hero wordmark:** "Beauti" in deep green + "mania" in black with leaf flourishes, under a green script "Herbal & Handmade". About 2891×629 PNG.
- Copies are saved in `reference/brand-assets/`. These are web exports, so we should ask for the **original vector files (AI/SVG/PDF)**.

### Colour palette (from the Wix theme settings)
| Role | Colour | Hex |
|---|---|---|
| Page background (blush pink) | very light pink | `#FCF1F8` |
| Light mint (cards/tiles) | mint green | `#C2E5C2` |
| Soft green | sage | `#9CCA9C` |
| Button green (Add to Cart, ribbons) | bright green | `#60B060` |
| Brand forest green (section bands, headings) | forest | `#336633` |
| Darkest green | deep forest | `#203B20` |
| Body text | charcoal | `#323032` |

Product packaging adds its own colours: magenta/pink (Beetroot lip balm), orange (Vitamin C serum), gold/brown (Anti-pigmentation cream). The **green + blush pink** direction fits "herbal + feminine" well and is worth keeping in a refined form.

### Typography (inconsistent)
At least **9 font families** are used across the site: Playfair Display (main headings), Cormorant Garamond, Poppins, Lato / Lato Light, Didot Italic, Libre Baskerville, Helvetica, Avenir and DIN Next, plus a script font baked into the hero image. A professional site should use **2 fonts at most** (one serif for headings, one clean sans for body).

### Voice & taglines in use
- "Herbal & Handmade"
- "say goodbye to harsh chemicals & hello to glowing skin"
- "Elevate your beauty with nature-based care from Beautimania."
- "Join to get exclusive offers & discounts"
- Product copy is mostly informal, with heavy emoji and Instagram-style fancy Unicode bold/italic letters, and it's inconsistent in tone and quality (see §6).

### Imagery
- **Good:** a few professional 3D product mock-ups (Beetroot lip balm on a pink podium, Vitamin C serum with oranges, Anti-pigmentation cream, Skin Repair Elixir).
- **Weak:** many phone photos with varied backgrounds, poster-style images with text baked in (prices, "Rs.150/-"), the same photo reused for different products (both lip balm base sizes), and 10 products with only one photo.
- **Generic stock photos** of models with leaves (file names like `closeup-beauty-portrait-…`, `beautiful-natural-young-woman-portrait.jpg`) that have nothing to do with the products.
- **Free clip-art PNGs** for decoration (file names `—Pngtree—pink allamanda flower…`, `toppng.com-tree-no-leaves…`, `pngegg.png`). They look amateur and their licensing is unclear.

### Trust badges shown on the homepage
GMP (Good Manufacturing Practice) Certified · Sulphate and Paraben Free · **FDA Approved** · ISO (icon; "ISO Certified" text elsewhere) · Cruelty Free · Made in India
→ None of them have certificate or licence numbers. See §7 on the "FDA Approved" wording.

---

## 3. Site structure (sitemap as it exists)

| # | Page | URL | In menu? | What's on it | Status |
|---|---|---|---|---|---|
| 1 | **Shop All** (the site root) | `/` | "SHOP ALL" | Grid of all 81 products, 20 per page + "Load More", sort dropdown, top banner | Works. But the domain opens on a product grid, not the brand homepage |
| 2 | **Home** (brand landing page) | `/home` | "HOME" (5th item!) | Hero, badges, new releases, collections, about, subscribe | Works, but has broken buttons (§5) |
| 3 | Face | `/face` | ✅ | 10 products | Works. Generic stock banner `5169546.jpg` (same on all category pages) |
| 4 | Lips | `/lips` | ✅ | **Only 4** lip products (missing Chocolate, Mint lip balm and Lip scrub) | Incomplete |
| 5 | Body | `/body` | ✅ | 45 products (mostly soaps), 3 pages | Works |
| 6 | Course | `/course` | ✅ | Only a "JOIN US" button → `voivlf.courses.store` (Classplus) | ❌ External site shows **"No Content here"** |
| 7 | Article | external | ✅ "ARTICLE" | Link to a Times Release press article | ❌ **404 Page Not Found** |
| 8 | Blog | `/blog` | ✅ | 4 posts | Works, but sparse (§4.9) |
| 9 | Bulk Order | `/best-sellers` (!) | ✅ "BULK ORDER" | Says "We don't have any products to show here right now." + enquiry form | ⚠️ Half-broken, and the URL is wrong |
| 10 | FAQ | `/faq` | footer only | **Wix placeholder text** ("How do I add a new question & answer?") | ❌ Placeholder |
| 11 | Shipping & Returns | `/shipping-and-returns` | footer only | **Wix placeholder text** ("I'm a Shipping Policy section…") | ❌ Placeholder |
| 12 | Store Policy | `/store-policy` | footer only | **Wix placeholder text** + Payment Methods list | ❌ Placeholder |
| 13 | Cart | `/cart-page` | cart icon | Standard Wix cart | Works |
| 14 | Product pages | `/product-page/<slug>` | — | 81 pages | Work (content issues in §6) |
| 15 | Member login | "Log In" | header | Wix Members | Exists (purpose unclear) |
| — | **About / Our Story** | — | — | — | ❌ **Doesn't exist** |
| — | **Contact** | — | — | Only a phone number in the header/footer | ❌ **Doesn't exist** |
| — | Privacy Policy / Terms / Refund Policy | — | — | — | ❌ **Don't exist** (needed for trust and for payment gateways like Razorpay) |

### Header (desktop)
`Search bar | SHOP ALL · FACE · LIPS · BODY · HOME · COURSE · ARTICLE · BLOG · BULK ORDER (overflows into "More") | Cart | Log In | "Contact Us +91 7718082547"`
- On a 1440 px screen the "Contact Us" phone number is **cut off** at the right edge.
- On the homepage the top-left shows a search box rather than the logo.
- 9 menu items, with "HOME" sitting in the middle of the menu, which is confusing.

### Footer
- **Newsletter:** "Are you on the list? Join to get exclusive offers & discounts", with an email box and Join button.
- **Shop:** All Products · New (same link as All Products) · Bulk Order · Lips · Body · Face. The "Shop" heading itself links to WhatsApp.
- **Our Store:** "Beautimania, Brand of Koyal Herbal World", address, phone, email. The phone number wraps badly ("+91 771808254" / "7").
- **Policy:** Shipping & Returns · Store Policy · Payment Methods (just links to Store Policy) · FAQ. All three pages are placeholders.
- **Customer Service:** phone + email (duplicated from "Our Store").
- **Social icons:** Instagram ✅, Facebook ❌ (Wix), YouTube ✅, Twitter ❌ (Wix), Pinterest ✅.
- "Promoted By KoyalHerbal World".

---

## 4. Page-by-page content

### 4.1 Home (`/home`), sections top to bottom
1. **Hero:** "Herbal & Handmade" script + big Beautimania wordmark. Headline: *"say goodbye to harsh chemicals & hello to glowing skin"*. **Shop** button. Decorated with clip-art flowers and monstera leaves, plus an arch graphic with a product photo.
2. **Trust badge strip:** GMP Certified · Sulphate & Paraben Free · FDA Approved · ISO · Cruelty Free · Made in India.
3. **New Release, Beetroot Lip Balm:** "Soothing Beetroot *Lip Care*. Revitalize your lips with beetroot care." → Shop button **broken** (points to `www.thebeautimania.com`).
4. **New Release, Vitamin C Face Serum:** "The Complete *Solution* for *Radiant Skin*. Unleash your skin's radiance with all-in-one Vitamin C." → Shop button **broken** (same domain issue).
5. **Anti-Pigmentation Cream:** "Revive your skin's natural glow with our anti-pigmentation face cream. Powered by nature's best ingredients. Our formula helps diminish dark spots and blemishes, revealing a more youthful and even complexion." → Shop button **broken**.
6. **Discover More:** 3 stock model photos with "SHOP BODY / SHOP FACE / SHOP LIPS".
7. **Explore Our Collections:** a slideshow (soap photos), "Glycerine Soaps, Shop", "ISO Certified".
8. **DON'T MISS OUT, User's Favourite:** 5 tiles, each with "View Collection": Cold Processed Soaps → /body · Glycerine based Soaps → /body · Vitamin C Face Serum → /face · Herbal Lip Balms → /lips · Alovera Gel → /body. The tiles **don't go to matching collections** (both soap types land on the generic Body page).
9. **About block:** "Elevate your beauty with nature-based care from Beautimania." Full copy:
   > Welcome to Beautimania, where nature meets beauty. Our company is dedicated to providing the highest quality skin care products made exclusively from natural ingredients. We believe that beauty should never come at the cost of your health, which is why we use only the finest herbs, plants, and botanicals to create our products.
   >
   > Our commitment to using only the best natural ingredients ensures that our products are not only safe but also highly effective. From our nourishing face serums to our hydrating face masks, we have something for every skin type and concern. Whether you are looking to reduce the appearance of fine lines and wrinkles, brighten your complexion, or soothe dry and irritated skin, we have the perfect product for you.

   (Note: it mentions "hydrating face masks", which aren't sold. The text is generic, with no founder story.)
10. **Follow Us**, "@beautimania" (wrong handle shown) and a "Google Review" label with **no reviews displayed**.
11. Newsletter signup → footer.

**Visual notes (from the screenshot):** large empty forest-green blocks around the model photos and the collections slideshow, a green box overlapping the slideshow image, mixed button styles (dark green rectangle, plain text link, pale green pills, outlined boxes), and lots of whitespace. Some of the empty areas may be scroll-triggered animations that hadn't played in the capture. Either way the page feels disjointed.

### 4.2 Shop All (`/`, the actual landing page of the domain)
- Banner image (`IMG_20260529_185157.png`), "All Products", "Sort by".
- Product cards: image, **ribbon** (used as a pseudo-category, e.g. "Cold process soap", "Lipcare", "Summer essentials"), name, price (strikethrough when on sale), quantity stepper, bright-green **Add to Cart** / grey "Out of Stock".
- 20 products per page, 5 pages, "Load More".
- **First product shown is the Rakhi Gift Box**, a seasonal item still featured in October.

### 4.3 Category pages
| Page | Products | Notes |
|---|---|---|
| Face | 10 | Includes 5 soaps, aloe gel, sunscreen, serum, anti-pigmentation cream, face wash |
| Lips | 4 | Blueberry, Vanilla, Orange, Beetroot. **Missing:** Chocolate lip balm, Mint lip balm, Blueberry lip scrub |
| Body | 45 | Mostly soaps + moisturiser + sunscreen |
| *(none)* | **28 products are in no category at all** | Reachable only via Shop All. Includes all **hair care**, the **₹999 Skin Repair Elixir**, body washes, body butter, Ubtan, kits, cold-process soaps, DIY bases |

There are **no categories** for Soaps (51 of 81 products!), Hair Care, Gift Sets/Kits, or DIY/B2B supplies, and no filtering by skin concern (acne, tan, pigmentation, dryness).

### 4.4 Product page template
Gallery → long description (everything crammed into one text block: benefits, ingredients, directions, hashtags) → product name → SKU (rarely) → price → Quantity → **Add to Cart** · **Buy Now** · **Bulk Enquiry** (WhatsApp link).
- No reviews/ratings, no structured tabs (Ingredients / How to use / Benefits), no "free-from" icons, no size selector (the only option-like field seen is an optional "Lavender Body wash-100 ml" add-on on the 400 ml body wash).
- A few products show a return policy line under the price, e.g. *"Only damaged items can be returned within 7 days after receiving. Opening video must be necessary for return."* This is the **only real policy information on the entire site**.

### 4.5 Bulk Order (`/best-sellers`)
- Heading "BULK ORDER", then an empty product gallery with the message *"We don't have any products to show here right now."*
- **"BULK ORDER ENQUIRY" form:** First name*, Last name*, Email*, Phone*, Which Product You Are Looking For?*, Requirement Estimate Quantity*, then an **"Order Now"** button.
- SEO description: "We specialize in bulk orders of beauty and herbal beauty products. Find high-quality products for your business needs."

### 4.6 Course (`/course`)
- Only a "JOIN US" button linking to `https://voivlf.courses.store/`, a **Classplus** white-label course store branded "Beautimania" with Google Play / App Store badges and Login. The public page shows **"No Content here"**.

### 4.7 Article (menu item)
- Links to `timesrelease.com/natures-beauty-secret-beautimanias-100-natural-herbal-handmade-skincare-products/`, which now returns **404**. Worth asking whether there's a new link or a PDF of the coverage, since press mentions are good trust signals.

### 4.8 FAQ, Shipping & Returns, Store Policy
- All three still contain **Wix's default template text** ("I'm a Shipping Policy section. I'm a great place to update your customers…", "How do I add a new question & answer? … Click 'Manage FAQs'…").
- Store Policy lists payment methods: *Credit / Debit Cards, PAYPAL, Offline Payments*. PayPal is unusual for an Indian D2C brand, so we need to confirm what's actually set up (UPI? COD? Razorpay?).

### 4.9 Blog (`/blog`), 4 posts
| Date | Title | Author shown | Notes |
|---|---|---|---|
| 28 Oct 2023 | The Science of Natural Skincare: Nurturing Your Skin with Nature's Wisdom | "info5148182" (auto username) | Generic natural-vs-chemical article |
| 3 Nov 2023 | Glow All Year: Seasonal Skincare Tips and Organic Delights for Every Season | Koyal Herbal World | Outline-style; promises a series that never came |
| 11 Jan 2024 | 𝑶𝒓𝒂𝒏𝒈𝒆 𝒘𝒉𝒊𝒑𝒑𝒆𝒅 𝒃𝒐𝒅𝒚 𝒃𝒖𝒕𝒕𝒆𝒓 - delightful treat for skin | Koyal Herbal World | Title in fancy Unicode; URL slug is just `/post/_skin`; promotes a body butter that's now renamed "Saffro Shine" |
| 8 Jun 2026 | Why the Future of Indian Skincare Is Herbal — And Why Big Brands Are Playing Catch-Up | Koyal Herbal World | Best post. Market stats (₹35,000 Cr by 2027, 22% growth, 68% prefer herbal). Sources not cited |

---

## 5. Broken things & quick facts (priority list)

### 🔴 Critical (hurts trust or sales right now)
1. **Policy pages are template placeholders**: Shipping & Returns, Store Policy, FAQ. Customers (and payment gateways) see no real shipping, returns or privacy terms.
2. **Homepage "Shop" buttons are dead**: Beetroot Lip Balm, Vitamin C Serum and Anti-Pigmentation Cream all link to `www.thebeautimania.com`, which doesn't exist.
3. **"ARTICLE" menu item → 404.**
4. **"COURSE" → external page showing "No Content here."**
5. **Facebook & Twitter icons link to Wix's own accounts.**
6. **Bulk Order page** shows "We don't have any products to show here right now", and its URL is `/best-sellers`.
7. **No About page, no Contact page, no Privacy/Terms/Refund pages.**
8. **The domain root opens on a raw product grid**, not the brand homepage. The real homepage is at `/home`, listed 5th in the menu.

### 🟠 Structure / navigation
- 28 of 81 products sit in no category, including the newest and most premium items.
- The Lips page shows only 4 of 7 lip products.
- No Soap, Hair, Gifts/Kits or B2B/DIY categories, even though soaps are 51 of 81 products.
- "Ribbons" are used as categories, inconsistently ("Summer essentials" on a vanilla lip balm, "Lipcare" on 1 kg lip balm base, "Body" on a soap). 44 products have no ribbon.
- Seasonal items left live and prominent: the Rakhi box is the #1 product in October, plus the "Summer essentials" label and a kit whose URL still says "after-holi".
- 9 menu items overflow into "More".
- The footer's "New" link is the same as "All Products". "Payment Methods" just opens Store Policy.

### 🟡 Design / consistency
- ~9 font families, multiple button styles, mixed photo styles.
- Clip-art PNGs from free sites + unrelated stock model photos.
- Header phone number cut off; footer phone number broken across two lines.
- Big empty coloured blocks and overlapping boxes on the homepage.
- Inconsistent product photography (backgrounds, lighting, posters with text, reused photos).

### 🟡 SEO / technical
- Homepage `<title>`: **"beauty products | hearbal soup"** (typo, and "soup" instead of soap). The root page title is just "Beautimania".
- Meta description typos ("earn about the store policy…", "herbal soup,alovera gel").
- Blog and Course pages have no meta description.
- Fancy Unicode text in titles and descriptions is unreadable to Google and screen readers.
- The Vitamin C Soap page is missing product structured data (empty JSON-LD).
- Image alt text is mostly file names ("WhatsApp Image 2024-09-03…", "pngegg.png") or empty.

---

## 6. Product catalogue: overview & content issues

**81 products, ₹90 to ₹2,000.** Full detail is in `02-product-catalogue.md`.

| Type (our grouping) | Count | Price range |
|---|---|---|
| Soaps: glycerine / melt-and-pour ("Herbal & Handmade …") | 42 | ₹90 to ₹150 (one 16-soap bundle ₹299 sale) |
| Soaps: cold process (cured 6 weeks) | 9 | ₹199 each; packs ₹300 to ₹499 |
| Face care (Vit C serum, Skin Repair Elixir, sunscreen, anti-pigmentation cream, face wash, Ubtan, aloe gels) | 8 | ₹99 to ₹1,199 (Elixir on sale at ₹999.99) |
| Lip care (Beetroot, Blueberry, Vanilla, Orange, Chocolate, Mint balms + Blueberry lip scrub) | 7 | ₹199 |
| B2B / DIY supplies (glycerine & goat-milk soap bases 1 kg, lip balm base 100 g / 1 kg, shrink-wrap roll) | 5 | ₹180 to ₹2,000 |
| Body care (Lavender body wash 100/400 ml, Peach Milk moisturiser 400 g, Saffro Shine body butter) | 4 | ₹299 to ₹1,299 regular; all 4 currently on sale |
| Gift boxes / kits (Rakhi box, Anti-tan kit, Skin Repair kit, Shampoo+Conditioner pack) | 4 | all ₹999 (kits "reduced" from ₹1,246 to ₹1,498) |
| Hair care (Rosemary shampoo 400 ml, Keratin & More conditioner 100 g) | 2 | ₹499 to ₹999 (shampoo on sale at ₹799.20) |

- **Out of stock (4):** Grape Blueberry Soap, Anti-tan Kit, Skin Repair Kit, Charcoal-Lemon Soap (pack of 2).
- **On sale (11):** discounts produce odd prices like ₹999.99, ₹799.20, ₹749.25, ₹449.10.
- **SKUs:** only 10 of 81 have one, in at least 5 different formats (`CP028`, `BM027`, `EBB 511`, `629778242827`, `33049910 IN KHW201`…).
- **Photos:** 10 products have only one photo.
- **Descriptions:** 26 products have one generic sentence or nothing at all (e.g. Cherry Blossom soap has no description). The best ones (Skin Repair Elixir, Anti-tan soap, Rosemary shampoo, lip balm base) have full ingredient lists, which is a real strength to build on.

### Content problems in product data
- **Naming is inconsistent:** "Herbal & Handmade - Neem Soap" vs "Lemon Soap" vs "Cold Process Cherry Blossom soap -125gm" vs "Herbal & Handmade - ORANGE SOAP - sulphate & paraben free".
- **Size formats are inconsistent:** "-8gm", "- 08gm", "-100gms", "125 gm", "-400 ml", "1 kg I No Sulphate I No Paraben".
- **Spelling:** Brightning, Rosemery, Alovera/Aloevera (both used), Jasmin, Loofha, Sun-sheild, Harmones, Diminaralized, Purfume, Presevative, "Leather" (should be lather), Beautimani's, Beautimanian's, parsel, Hygeine, blemishesh, Avacado, Panthanol.
- **Mismatches:**
  - URL `orange-whipped-body-butter-50-gm` → product is "**Saffro Shine** Emulsified Body Butter **-100 gm**", and its page has two different ingredient lists.
  - URL `after-holi-skincare-kit…` → product is "Skin Repair kit".
  - Orange Lip Balm text says "**Just at 99/-**" but the price is ₹199.
  - "Spirulina **Neem Tulsi** Soap": the ingredient list contains no neem or tulsi.
  - "Cold process Turmeric and Honey soap": the description switches to talking about a "Haldi Chandan Soap".
  - The Rakhi box includes a "Mini Purfume" and "Candle" that aren't sold separately.
- **Fancy Unicode bold/italic text and heavy emoji** in many descriptions.

---

## 7. Claims worth reviewing before relaunch ⚠️
*Not legal advice, just things a reviewer or regulator could question. Worth fixing while we rewrite the copy anyway.*

- **"FDA Approved" badge:** in India, cosmetics are made under a **state FDA manufacturing licence**, not "approved" product by product. A safer wording is "Manufactured under FDA licence no. ____". The GMP and ISO badges likewise need certificate numbers.
- **Disease-treatment claims on cosmetics:** "Cures dermatitis", "Cures acne", "Heals wounds", "Treat genital infection and irritation", "Prevent eczema, Psoriasis, Skin asthma, Wart", "Heals scars". Claims like these can make a cosmetic count as a drug, and they conflict with ASCI advertising guidelines.
- **Fairness / whitening language:** "Skin whitening", "Fairer Skin Complexion", "Skin lightening". The industry and ASCI are moving away from this, so "brightening / even tone" is safer.
- **"Chemical free" / "100% chemical free":** the ingredient lists include sodium hydroxide, CAPB, SCI, polyquaternium, preservatives and so on. Factual "free-from" claims ("No sulphates · No parabens · No artificial fragrance") are more accurate and still strong.
- **Sunscreen:** claims "SPF 50 PA++" and "No hormone disruptor", yet lists **benzophenone-3 (oxybenzone)**, which is commonly flagged as a possible endocrine disruptor. SPF/PA claims (and "SPF 15" on the Peach Milk moisturiser) should be backed by lab test reports.
- Other absolute claims: "Suitable for kids and pregnant women", "food grade", "edible", "Visible return in 1 week", "FDA approved lip colour".

---

## 8. What's working (keep & build on)
- ✅ **A genuinely large, real handmade range** (81 SKUs), including cold-process soaps cured 6 weeks and detailed ingredient transparency on the best listings.
- ✅ **A distinctive logo** (the BM monogram with face profile and leaves) that's recognisable and works as an icon.
- ✅ **A green + blush-pink palette** that suits "herbal, handmade, feminine". It needs refining, not replacing.
- ✅ Some **professional product mock-ups** already exist (Beetroot, Vitamin C, Anti-pigmentation, Skin Repair Elixir).
- ✅ **A real B2B arm** (white label, third-party manufacturing, soap and lip balm bases) is a differentiator most small herbal brands don't have.
- ✅ **WhatsApp ordering** is clearly how customers like to buy, so keep a prominent WhatsApp button.
- ✅ Active Instagram, YouTube and Pinterest accounts.
- ✅ The latest blog post (Jun 2026) shows a good direction for content: Indian herbal heritage + market trend.

---

## 9. Early ideas for the new site (to discuss, not decided)

**Proposed structure**
- **Home:** clear hero + bestsellers + shop by category / by concern + "why herbal & handmade" + founder story teaser + reviews + Instagram feed + B2B banner
- **Shop** with proper categories and filters:
  - Soaps → Cold Process · Glycerine/Herbal
  - Face · Lips · Body · Hair · Gift Sets & Kits
  - Filter by **concern** (Acne, Tan, Pigmentation, Dryness, Sensitive) and by **key ingredient** (Neem, Turmeric, Vitamin C, Goat milk…)
- **Product page template:** gallery (consistent photos), price/size, key benefits, **Ingredients**, **How to use**, free-from icons, reviews, "Buy on WhatsApp", related products
- **Wholesale & Private Label (B2B):** MOQ, white label, third-party manufacturing, customisation, enquiry form
- **DIY Supplies:** soap bases, lip balm base, packaging (possibly linked with Courses)
- **Courses / Learn:** only if the course is active; otherwise drop it
- **About / Our Story** (founder, Koyal Herbal World, how products are made) · **Journal/Blog** · **Contact**
- **Policies:** Shipping · Returns & Refunds · Privacy · Terms · FAQ (real content)

**Design direction:** one consistent type pair, the refined green/blush palette, consistent product photography (same background and lighting), no clip-art, real people and real process photos (soap-making, ingredients) instead of stock models.

**Platform:** open question. Options are rebuilding on Wix, moving to Shopify, or a custom site (e.g. Next.js) with Razorpay/UPI/COD. The choice depends on who manages it day to day and the budget.

---

## 10. Questions to ask (things only the owner can answer)

**Products**
1. Which of the 81 products are still made and sold? Any to discontinue or add?
2. Correct final names, sizes and prices for each (and should glycerine soaps be ₹90 or ₹120 tiers)?
3. Are better or consistent product photos available, or should we plan a photoshoot?
4. Full ingredient lists for the 26 products with weak or no descriptions.

**Policies & operations**
5. Real shipping policy: courier, delivery time, charges, free-shipping threshold, COD yes/no, all-India/international?
6. Real returns policy (the product pages say: damaged items only, within 7 days, unboxing video required). Is that correct?
7. Which payment methods are actually live (UPI, cards, COD, PayPal)?
8. Licence and certificate details: FDA manufacturing licence no., GMP, ISO (copies if possible).

**Brand & story**
9. The founder story: who, when, why. Beautimania's relationship to Koyal Herbal World. Photos of the founder and workspace.
10. Original logo files (vector), any brand guidelines or packaging files.
11. The Times Release article: is there a working link or screenshot? Any other press, awards or exhibitions?
12. Customer reviews or testimonials, and the Google Business Profile link.

**Business lines**
13. B2B: MOQ, white-label process, lead time, price tiers, past clients?
14. Course: is it active? Topics, price, format? Keep it on Classplus or bring it onto the site?
15. Is she on any marketplaces (Amazon, Flipkart, Meesho, Nykaa)?
16. Do Facebook / X (Twitter) accounts exist, or should they be removed?

**Technical**
17. Who has access to Wix and the domain registrar for `beautimania.com` and `thebeautimania.com`? Which domain is primary going forward?
18. Who will update products and orders day to day, and how comfortable are they with tech? This drives the platform choice.
