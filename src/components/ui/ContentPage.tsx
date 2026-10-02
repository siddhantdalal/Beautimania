import type { ReactNode } from "react";
import { Breadcrumbs } from "./Breadcrumbs";

interface ContentPageProps {
  title: string;
  intro?: ReactNode;
  /** Shown under the title on policy pages, e.g. "2 October 2026" */
  updated?: string;
  children: ReactNode;
}

/** Layout for text pages: about, FAQ and policies. */
export function ContentPage({ title, intro, updated, children }: ContentPageProps) {
  return (
    <div className="page-container py-10 lg:py-14">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: title }]} />
      <div className="mx-auto mt-8 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl">{title}</h1>
        {updated && <p className="mt-3 text-sm text-muted">Last updated: {updated}</p>}
        {intro && <div className="mt-5 text-lg leading-relaxed text-ink/85">{intro}</div>}
        <div className="prose-content mt-8">{children}</div>
      </div>
    </div>
  );
}
