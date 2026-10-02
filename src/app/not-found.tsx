import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div className="page-container py-24 text-center">
      <p className="text-xs font-semibold tracking-[0.2em] text-sage uppercase">404</p>
      <h1 className="mt-3 text-4xl sm:text-5xl">We couldn&apos;t find that page</h1>
      <p className="mx-auto mt-4 max-w-md text-muted">
        It may have moved when we refreshed our website. Our full range is still here.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/shop">Shop all products</ButtonLink>
        <ButtonLink href="/" variant="secondary">
          Go to homepage
        </ButtonLink>
      </div>
    </div>
  );
}
