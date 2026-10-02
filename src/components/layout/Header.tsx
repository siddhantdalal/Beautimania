import Image from "next/image";
import Link from "next/link";
import wordmark from "@/assets/beautimania-wordmark.png";
import { mainNav } from "@/data/site";
import { CartLink } from "./CartLink";
import { MobileMenu } from "./MobileMenu";
import { NavLink } from "./NavLink";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/85">
      <div className="page-container flex h-16 items-center gap-4 lg:h-20 lg:gap-8">
        <MobileMenu />
        <Link href="/" className="shrink-0" aria-label="Beautimania home">
          <Image
            src={wordmark}
            alt="Beautimania"
            loading="eager"
            className="h-[2.1rem] w-auto lg:h-[2.7rem]"
          />
        </Link>
        <nav aria-label="Main" className="hidden flex-1 justify-center lg:flex">
          <ul className="flex items-center gap-7">
            {mainNav.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-auto flex items-center lg:ml-0">
          <CartLink />
        </div>
      </div>
    </header>
  );
}
