
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navigationLinks } from "../config/navigation";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="relative z-[120] lg:hidden">
      {/* Hamburger / Close Button */}
      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        className="relative z-[120] flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-brand-primary transition-colors hover:bg-brand-secondary"
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
            className="fixed inset-0 z-[100] bg-black/40"
          />

          {/* Navigation Panel */}
          <div
            id="mobile-navigation"
            className="fixed inset-x-0 top-[88px] z-[110] border-t border-border bg-surface px-5 pb-6 pt-4 shadow-xl sm:px-8"
          >
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
                        className={`flex items-center justify-between border-b border-border py-4 text-base font-medium transition-colors ${
                          isActive
                            ? "text-brand-accent"
                            : "text-brand-primary hover:text-brand-accent"
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

            {/* Menu CTA */}
            <Link
              href="/menu"
              onClick={closeMenu}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-button bg-brand-accent px-5 py-3.5 font-semibold text-white transition-colors hover:bg-orange-700"
            >
              Explore Our Menu
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
