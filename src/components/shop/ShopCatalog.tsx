"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { ProductGrid } from "@/components/product/ProductGrid";
import { categories, concernLabels, soapTypeLabels } from "@/data/categories";
import type { ProductSummary } from "@/lib/products";
import type { CategorySlug, Concern, SoapType } from "@/lib/types";

const SORTS = {
  featured: "Featured",
  "price-asc": "Price: low to high",
  "price-desc": "Price: high to low",
  name: "Name: A to Z",
} as const;

type SortKey = keyof typeof SORTS;

/** Returns the param only if it's one of the allowed values, so bad URLs fall back to "no filter". */
function pick<T extends string>(value: string | null, allowed: readonly T[]): T | undefined {
  return allowed.find((option) => option === value);
}

function unique<T>(values: (T | undefined)[]): T[] {
  return [...new Set(values.filter((value): value is T => value !== undefined))];
}

interface ShopCatalogProps {
  products: ProductSummary[];
  /** Only on /shop; collection pages are already a single category. */
  showCategoryFilter?: boolean;
}

/**
 * Filters and sorting live in the URL (?category=&type=&concern=&sort=) so filtered
 * views can be shared and the back button works. Must render inside <Suspense>.
 */
export function ShopCatalog({ products, showCategoryFilter = false }: ShopCatalogProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const categoryOptions = useMemo(
    () => categories.filter((category) => products.some((product) => product.category === category.slug)),
    [products],
  );
  const soapTypeOptions = useMemo(() => unique<SoapType>(products.map((p) => p.soapType)), [products]);
  const concernOptions = useMemo(
    () =>
      (Object.keys(concernLabels) as Concern[]).filter((c) => products.some((p) => p.concerns.includes(c))),
    [products],
  );

  const category = showCategoryFilter
    ? pick<CategorySlug>(
        searchParams.get("category"),
        categoryOptions.map((option) => option.slug),
      )
    : undefined;
  const showSoapTypeFilter = soapTypeOptions.length > 1 && (!showCategoryFilter || category === "soaps");
  const soapType = showSoapTypeFilter ? pick(searchParams.get("type"), soapTypeOptions) : undefined;
  const concern = pick(searchParams.get("concern"), concernOptions);
  const sort = pick(searchParams.get("sort"), Object.keys(SORTS) as SortKey[]) ?? "featured";
  const hasFilters = Boolean(category || soapType || concern);

  const visible = useMemo(() => {
    const filtered = products.filter(
      (product) =>
        (!category || product.category === category) &&
        (!soapType || product.soapType === soapType) &&
        (!concern || product.concerns.includes(concern)),
    );
    switch (sort) {
      case "price-asc":
        return [...filtered].sort((a, b) => a.price - b.price);
      case "price-desc":
        return [...filtered].sort((a, b) => b.price - a.price);
      case "name":
        return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
      default:
        return filtered;
    }
  }, [products, category, soapType, concern, sort]);

  function update(changes: Record<string, string | undefined>) {
    const params = new URLSearchParams(searchParams);
    for (const [key, value] of Object.entries(changes)) {
      if (value) params.set(key, value);
      else params.delete(key);
    }
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  const selectClass =
    "mt-1 w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink focus:border-forest";

  return (
    <div>
      <div className="flex flex-wrap items-end gap-4 border-b border-line pb-6">
        {showCategoryFilter && (
          <label className="w-full text-xs font-medium text-muted sm:w-48">
            Category
            <select
              className={selectClass}
              value={category ?? ""}
              // Soap type only applies to soaps, so drop it when the category changes.
              onChange={(event) => update({ category: event.target.value || undefined, type: undefined })}
            >
              <option value="">All categories</option>
              {categoryOptions.map((option) => (
                <option key={option.slug} value={option.slug}>
                  {option.name}
                </option>
              ))}
            </select>
          </label>
        )}
        {showSoapTypeFilter && (
          <label className="w-full text-xs font-medium text-muted sm:w-48">
            Soap type
            <select
              className={selectClass}
              value={soapType ?? ""}
              onChange={(event) => update({ type: event.target.value || undefined })}
            >
              <option value="">All soaps</option>
              {soapTypeOptions.map((option) => (
                <option key={option} value={option}>
                  {soapTypeLabels[option]}
                </option>
              ))}
            </select>
          </label>
        )}
        {concernOptions.length > 0 && (
          <label className="w-full text-xs font-medium text-muted sm:w-48">
            Skin or hair concern
            <select
              className={selectClass}
              value={concern ?? ""}
              onChange={(event) => update({ concern: event.target.value || undefined })}
            >
              <option value="">Any concern</option>
              {concernOptions.map((option) => (
                <option key={option} value={option}>
                  {concernLabels[option]}
                </option>
              ))}
            </select>
          </label>
        )}
        <label className="w-full text-xs font-medium text-muted sm:ml-auto sm:w-48">
          Sort by
          <select
            className={selectClass}
            value={sort}
            onChange={(event) =>
              update({ sort: event.target.value === "featured" ? undefined : event.target.value })
            }
          >
            {(Object.entries(SORTS) as [SortKey, string][]).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* Keeps the heading outline h1 → h2 → product names (h3) for screen readers. */}
      <h2 className="sr-only">Products</h2>
      <div className="flex items-center justify-between py-5 text-sm text-muted">
        <p aria-live="polite">
          {visible.length} {visible.length === 1 ? "product" : "products"}
        </p>
        {hasFilters && (
          <button
            type="button"
            onClick={() => update({ category: undefined, type: undefined, concern: undefined })}
            className="font-medium text-forest underline decoration-sage underline-offset-4"
          >
            Clear filters
          </button>
        )}
      </div>

      {visible.length > 0 ? (
        <ProductGrid products={visible} />
      ) : (
        <p className="rounded-2xl border border-dashed border-line py-16 text-center text-muted">
          No products match these filters.
        </p>
      )}
    </div>
  );
}
