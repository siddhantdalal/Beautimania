import type { ReactNode } from "react";

interface DisclosureProps {
  summary: ReactNode;
  children: ReactNode;
  open?: boolean;
  className?: string;
}

/** Native <details>/<summary>: accessible and works without JavaScript. */
export function Disclosure({ summary, children, open, className = "" }: DisclosureProps) {
  return (
    <details open={open} className={`group ${className}`}>
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-ink [&::-webkit-details-marker]:hidden">
        {summary}
        <span
          aria-hidden="true"
          className="text-xl leading-none text-muted transition-transform group-open:rotate-45"
        >
          +
        </span>
      </summary>
      {children}
    </details>
  );
}
