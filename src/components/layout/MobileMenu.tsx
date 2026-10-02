"use client";

import Link from "next/link";
import { useRef } from "react";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { footerNav, mainNav, site } from "@/data/site";

/**
 * The header's navigation on screens narrower than `lg` (1024px).
 * Uses a native modal <dialog>: focus trapping, Escape to close and an inert
 * background come for free.
 */
export function MobileMenu() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const close = () => dialogRef.current?.close();

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        aria-label="Open menu"
        aria-haspopup="dialog"
        className="-ml-2 inline-flex size-11 items-center justify-center rounded-full text-forest-dark hover:bg-mint"
      >
        <MenuIcon width={22} height={22} />
      </button>

      <dialog
        ref={dialogRef}
        aria-label="Menu"
        onClick={(event) => {
          // A click on the backdrop targets the dialog element itself.
          if (event.target === event.currentTarget) close();
        }}
        className="m-0 h-dvh max-h-none w-[min(22rem,88vw)] max-w-none bg-cream p-0 text-ink backdrop:bg-ink/40"
      >
        <div className="flex h-full flex-col overflow-y-auto px-6 pt-4 pb-8">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={close}
              aria-label="Close menu"
              className="-mr-2 inline-flex size-11 items-center justify-center rounded-full hover:bg-mint"
            >
              <CloseIcon width={22} height={22} />
            </button>
          </div>

          <nav aria-label="Mobile">
            <ul className="space-y-1">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={close}
                    className="block py-2 font-display text-2xl font-semibold text-forest-dark"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-8 space-y-3 border-t border-line pt-6 text-sm">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={close} className="text-muted hover:text-forest">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <p className="mt-auto pt-8 text-sm text-muted">
            Questions? Call or WhatsApp{" "}
            <a href={`tel:${site.phone.e164}`} className="font-medium text-forest">
              {site.phone.display}
            </a>
          </p>
        </div>
      </dialog>
    </div>
  );
}
