import Link from "next/link";
import type { ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors";

const variants = {
  primary: "bg-forest text-cream hover:bg-forest-dark",
  secondary: "border border-forest text-forest hover:bg-forest hover:text-cream",
  light: "bg-cream text-forest-dark hover:bg-white",
} as const;

export type ButtonVariant = keyof typeof variants;

/** Shared so <button> elements can match links visually. */
export function buttonClass(variant: ButtonVariant = "primary", extra = ""): string {
  return `${base} ${variants[variant]} ${extra}`.trim();
}

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  /** Opens in a new tab (WhatsApp, social links). */
  external?: boolean;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external,
}: ButtonLinkProps) {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={buttonClass(variant, className)}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={buttonClass(variant, className)}>
      {children}
    </Link>
  );
}
