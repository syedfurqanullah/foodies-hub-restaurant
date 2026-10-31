
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Search, ShoppingBag } from "lucide-react";

import { navigationLinks } from "../config/navigation";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="relative z-[120] lg:hidden">
      {/* Menu Toggle */}
      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        className="relative z-[120] flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-[#F4EFE5] transition-all duration-300 hover:border-brand-accent hover:text-brand-accent"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {isOpen && (
        <>
          {/* Background Overlay */}
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMenu}
            className="fixed inset-0 z-[100] bg-black/65 backdrop-blur-sm"
          />

          {/* Mobile Navigation Panel */}
          <div
            id="mobile-navigation"
            className="fixed inset-x-0 top-[76px] z-[110] max-h-[calc(100dvh-76px)] overflow-y-auto border-t border-white/10 bg-[#171512] px-5 pb-8 pt-5 text-[#F4EFE5] shadow-2xl sm:top-20 sm:max-h-[calc(100dvh-80px)] sm:px-8"
          >
            {/* Mobile Navigation Links */}
            <nav aria-label="Mobile navigation">
              <ul className="flex flex-col">
                {navigationLinks.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        aria-current={isActive ? "page" : undefined}
                        className={`flex items-center justify-between border-b border-white/10 py-4 text-base font-medium transition-colors duration-300 ${
                          isActive
                            ? "text-brand-accent"
                            : "text-white/75 hover:text-brand-accent"
                        }`}
                      >
                        {link.label}

                        {isActive && (
                          <span className="size-1.5 rounded-full bg-brand-accent" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Mobile Quick Actions */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <Link
                href="/menu"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 rounded-button border border-white/15 px-3 py-3 text-sm font-medium text-white/85 transition-colors hover:border-brand-accent hover:text-brand-accent"
              >
                <Search size={17} />
                Search
              </Link>

              <Link
                href="/menu"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 rounded-button border border-white/15 px-3 py-3 text-sm font-medium text-white/85 transition-colors hover:border-brand-accent hover:text-brand-accent"
              >
                <ShoppingBag size={17} />
                My Cart
              </Link>
            </div>

            {/* Order CTA */}
            <Link
              href="/menu"
              onClick={closeMenu}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-button bg-brand-accent px-5 py-4 font-semibold text-white shadow-lg shadow-orange-950/25 transition-all duration-300 hover:bg-orange-600"
            >
              Order Now
              <ArrowUpRight size={18} />
            </Link>

            {/* Brand Tagline */}
            <p className="mt-6 text-center text-[10px] font-medium uppercase tracking-[0.22em] text-[#C49A54]">
              Good Food. Great Moments.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
