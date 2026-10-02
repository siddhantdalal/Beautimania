import Link from "next/link";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  eyebrow?: string;
  description?: ReactNode;
  action?: { label: string; href: string };
  /** Heading level; pages own their single h1. */
  as?: "h1" | "h2";
}

export function SectionHeading({
  title,
  eyebrow,
  description,
  action,
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div className="max-w-2xl">
        {eyebrow && <p className="text-xs font-semibold tracking-[0.2em] text-sage uppercase">{eyebrow}</p>}
        <Heading className={`${eyebrow ? "mt-2" : ""} text-3xl sm:text-4xl`}>{title}</Heading>
        {description && <div className="mt-3 text-muted">{description}</div>}
      </div>
      {action && (
        <Link
          href={action.href}
          className="text-sm font-medium text-forest underline decoration-sage underline-offset-4 hover:decoration-forest"
        >
          {action.label}
        </Link>
      )}
    </div>
  );
}
