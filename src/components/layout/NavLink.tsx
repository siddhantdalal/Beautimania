"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export function NavLink({ href, children }: { href: string; children: ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className="text-sm font-medium tracking-wide text-ink/80 transition-colors hover:text-forest aria-[current=page]:text-forest aria-[current=page]:underline aria-[current=page]:decoration-sage aria-[current=page]:underline-offset-8"
    >
      {children}
    </Link>
  );
}
