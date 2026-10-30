
import Link from "next/link";
import { ShoppingBag, ArrowUpRight } from "lucide-react";

import Container from "../ui/Container";
import MobileMenu from "../layout/MobileMenu";
import { navigationLinks } from "../config/navigation";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <Container>
        <div className="relative flex h-20 items-center justify-between gap-6">
          {/* Restaurant Branding */}
          <Link
            href="/"
            aria-label="Foodies Hub home"
            className="flex shrink-0 items-center gap-2.5"
          >
            <span className="flex size-11 items-center justify-center rounded-xl bg-brand-accent text-xl font-bold text-white">
              F
            </span>

            <span className="flex flex-col">
              <span className="text-lg font-bold leading-tight tracking-tight text-brand-primary">
                Foodies Hub
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
                Good Food. Great Moments.
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-7 lg:flex"
          >
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted transition-colors hover:text-brand-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <Link
              href="/menu"
              aria-label="Explore menu"
              className="flex size-11 items-center justify-center rounded-full border border-border text-brand-primary transition-colors hover:border-brand-accent hover:text-brand-accent"
            >
              <ShoppingBag size={19} />
            </Link>

            <Link
              href="/menu"
              className="inline-flex items-center gap-2 rounded-button bg-brand-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-700"
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
