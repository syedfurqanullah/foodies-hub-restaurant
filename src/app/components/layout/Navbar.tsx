
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  ShoppingBag,
  ArrowUpRight,
} from "lucide-react";

import Container from "../ui/Container";
import MobileMenu from "../layout/MobileMenu";
import { navigationLinks } from "../config/navigation";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#171512]/95 text-[#F4EFE5] shadow-lg shadow-black/10 backdrop-blur-xl">
      <Container size="wide">
        <div className="flex h-[76px] items-center justify-between gap-4 sm:h-20">

          {/* Restaurant Logo */}
          <Link
            href="/"
            aria-label="Foodies Hub home"
            className="flex shrink-0 items-center"
          >
             <span className="flex size-14 items-center justify-center overflow-hidden rounded-full border border-[#C49A54]/50">
    <Image
      src="/logo/foodies-hub-logo.png"
      alt="Foodies Hub"
      width={56}
      height={56}
      priority
      className="h-full w-full rounded-full object-contain"
    />
  </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-6 lg:flex xl:gap-8"
          >
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative py-2 text-sm font-medium text-white/75 transition-colors duration-300 hover:text-brand-accent"
              >
                {link.label}

                <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-brand-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden shrink-0 items-center gap-3 lg:flex">

            {/* Search */}
            <Link
              href="/menu"
              aria-label="Search menu"
              className="flex size-10 items-center justify-center rounded-full text-white/80 transition-colors duration-300 hover:bg-white/10 hover:text-brand-accent"
            >
              <Search size={19} strokeWidth={1.8} />
            </Link>

            {/* Shopping Bag */}
            <Link
              href="/menu"
              aria-label="Open shopping bag"
              className="flex size-10 items-center justify-center rounded-full text-white/80 transition-colors duration-300 hover:bg-white/10 hover:text-brand-accent"
            >
              <ShoppingBag size={19} strokeWidth={1.8} />
            </Link>

            {/* Order Button */}
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 rounded-button bg-brand-accent px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-950/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600"
            >
              Order Now
              <ArrowUpRight size={17} />
            </Link>
          </div>

          {/* Mobile Navigation */}
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
