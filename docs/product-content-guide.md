# Product Content Guide

How product data in `src/data/products/*.json` is written. The type is `ProductData` in `src/lib/types.ts`.
The source text for every product is in `docs/02-product-catalogue.md`, and slugs and categories are fixed in `docs/product-mapping.tsv`.

## Golden rules
1. **Never invent facts.** No new ingredients, sizes, benefits, certifications or prices that the old site doesn't support. You may rephrase, reorder, condense and fix grammar.
2. **Prices are copied exactly.** `price` = what the customer pays today (the sale price if on sale). `compareAtPrice` = the regular price, and only when there is a sale. Use numbers (`999.99`, not `"₹999.99"`).
3. **Unknown means omit + flag.** If size or a full ingredient list is missing, leave it out (or use the key ingredients named in the text with `keyIngredientsOnly: true`) and add a `needsReview` line.
4. **Plain text only.** No emoji, no fancy Unicode bold/italic, no hashtags, no ALL CAPS.
5. **Indian/British spelling:** colour, moisturiser, moisturising, flavour, fibre. "Sulphate" (not sulfate).

## Claims (cosmetics rules: ASCI / Drugs & Cosmetics Act)
| Don't write | Write instead |
|---|---|
| cures / treats / heals (acne, eczema, psoriasis, dermatitis, infections, wounds, warts, cold sores) | "helps reduce the look of acne", "soothes", "calms", or drop the line |
| whitening, fairness, fairer skin, skin lightening | "brightening", "helps even out skin tone", "radiance" |
| chemical-free / 100% chemical free / no nasties | the specific free-froms: "free from sulphates and parabens" |
| guaranteed results ("visible in 1 week") | "with regular use" |
| "FDA approved" (for an ingredient or product) | drop it, or "lip-safe colour" |

Phrase benefits as cosmetic effects with "helps" where needed. When you remove a notable claim, add it to `needsReview` as `Removed claim: "…"` so the owner knows.

## Field-by-field
- **name**: clean, title case, no size, no "Herbal & Handmade -" prefix. E.g. "Neem & Tulsi Soap", "Rose Cold Process Soap", "Vitamin C & Aloe Vera Face Serum".
- **subtitle**: short type line, e.g. "Cold-process soap", "Herbal glycerine soap", "Tinted lip balm", "Face serum", "Melt & pour soap base".
- **size**: "100 g", "8 g", "125 g", "400 ml", "35 ml", "1 kg", "3 × 125 g". Only if stated on the old site (name or text).
- **shortDescription**: one or two sentences, at most ~160 characters, benefit-led.
- **description**: 1–3 short paragraphs in a warm, clear and premium (not salesy) voice. Mention handmade / process details when the source does (e.g. cold process, cured 6 weeks).
- **benefits**: 3–6 short phrases (start with a capital, no full stop).
- **ingredients**: in the order given, spelling fixed (see the glossary below). If the site only names key ingredients in prose, list those and set `keyIngredientsOnly: true`.
- **howToUse**: steps from the site. For soaps, lip balms and lip scrubs with none given, generic steps are fine (lather on wet skin, massage, rinse / apply to clean lips).
- **freeFrom / attributes**: only values stated for that product. `handmade` applies to all finished products described as handmade or "Herbal & Handmade" (not packaging or soap bases).
- **concerns**: only clearly supported ones, from the allowed list in `types.ts`.
- **includes**: kits and gift boxes, one item per line, with size if stated.
- **notes**: practical extras from the source, e.g. "Patch test before first use", "Gift packing available", "Bottle colour may vary".
- **customisable**: `true` if the source mentions customisation, bulk, reselling or white labelling for this product.
- **needsReview**: short, actionable lines for the owner (missing weight, missing ingredient list, odd price, name/ingredient mismatch, possible duplicate, removed claims, seasonal item, SPF test report…).

## Ingredient spelling glossary
Polyquatrenium 7 / Polyquat 7 → Polyquaternium-7 · D panthanol / D.panthanol → D-Panthenol · Ceteryl alcohol → Cetearyl alcohol · BTMS 50 → BTMS-50 · CAPB → Cocamidopropyl betaine (CAPB) · SCI → Sodium cocoyl isethionate (SCI) · NaOH → Sodium hydroxide · Diminaralized water → Demineralised water · iscarguard PEG / Iscaguard PEG → Iscaguard PEG (preservative) · Presevative Eco / preservative eco → Preservative Eco · E.O / E.0 → essential oil · Manjista → Manjistha · Ren lentils → Red lentil · avacado → avocado · Aloevera / Alovera → Aloe vera · vit E → Vitamin E · Frankincense E.0 → Frankincense essential oil · Bees wax / Soft Beeswax pallets → Beeswax (pellets)

## Example (product #42)
```json
{
  "slug": "neem-soap",
  "legacySlug": "neem-soap",
  "name": "Neem Soap",
  "subtitle": "Herbal glycerine soap",
  "category": "soaps",
  "soapType": "glycerine",
  "price": 90,
  "inStock": true,
  "shortDescription": "A purifying handmade bar with neem leaves and neem oil for oily and acne-prone skin.",
  "description": [
    "Neem has been a trusted part of Indian skincare for generations. This handmade bar blends neem leaves and neem oil to gently cleanse away excess oil and impurities, leaving skin feeling fresh and balanced.",
    "Free from sulphates and parabens, it's a simple everyday bar for skin that tends to break out."
  ],
  "benefits": [
    "Helps reduce the look of acne and blemishes",
    "Helps control excess oil",
    "Cleanses without stripping moisture",
    "Suitable for everyday use"
  ],
  "ingredients": ["Neem leaves", "Neem oil"],
  "keyIngredientsOnly": true,
  "howToUse": [
    "Wet your skin and work the bar into a lather.",
    "Massage gently over face or body.",
    "Rinse well and pat dry."
  ],
  "freeFrom": ["sulphates", "parabens"],
  "attributes": ["handmade"],
  "concerns": ["acne", "oily-skin"],
  "needsReview": [
    "Confirm net weight (similar glycerine soaps list 100 g)",
    "Full ingredient list needed",
    "Removed claims: \"treat eczema and other skin conditions\", \"heals scars\""
  ]
}
```
