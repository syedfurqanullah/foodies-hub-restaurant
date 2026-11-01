
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import {
  Search,
  ShoppingCart,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

import { useCart } from "../context/CartContext";
import Container from "../ui/Container";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Deals", href: "/deals" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const { cartCount } = useCart();
  const pathname = usePathname();

  useEffect(() => {
    if (!isMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  const focusMenuSearch = (event: MouseEvent<HTMLAnchorElement>) => {
    const searchInput = document.getElementById("menu-search");
    if (!searchInput) return;

    event.preventDefault();
    searchInput.scrollIntoView({ behavior: "smooth", block: "center" });
    searchInput.focus({ preventScroll: true });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#171713]/95 text-white backdrop-blur-xl">
      <Container size="wide">
        <div className="flex h-20 items-center justify-between gap-3 sm:gap-5">

          {/* Logo */}
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-2"
          >
            <div
              className="shrink-0 overflow-hidden rounded-full border border-brand-accent/65 bg-[#11110F] shadow-lg shadow-brand-accent/10 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-rotate-3 group-hover:border-brand-accent group-hover:shadow-brand-accent/30"
              style={{ width: 56, height: 56, flex: "0 0 56px", overflow: "hidden", borderRadius: "50%" }}
            >
              <Image
                src="/logo/foodies-hub-logo.png?v=2"
                alt="Foodies Hub"
                width={1536}
                height={1024}
                priority
                unoptimized
                style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }}
              />
            </div>
            <span className="whitespace-nowrap text-sm font-semibold tracking-tight text-[#F4EFE5] transition-colors duration-300 group-hover:text-brand-accent sm:text-base">
              Foodies <span className="text-brand-accent">Hub.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`group relative py-2 text-sm font-medium transition-colors duration-300 hover:text-brand-accent ${pathname === link.href ? "text-brand-accent" : "text-white/70"}`}
              >
                {link.label}

                {/* Animated Underline */}
                <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-brand-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-5 lg:flex">

            {/* Search */}
            <Link
              href="/menu?focus=search"
              onClick={focusMenuSearch}
              aria-label="Search menu"
              className="flex h-11 w-11 items-center justify-center rounded-xl text-white/75 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-brand-accent"
            >
              <Search size={21} />
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              aria-label={`Shopping cart with ${cartCount} items`}
              className="group relative text-white/75 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-brand-accent"
            >
              <ShoppingCart size={22} aria-hidden="true" />

              {cartCount > 0 && (
                <span className="absolute -right-2.5 -top-2.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-accent px-1 text-[10px] font-bold text-[#171713] transition-transform duration-300 group-hover:scale-110">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Link>

            {/* Order Now */}
            <Link
              href="/menu"
              className="group inline-flex items-center gap-2 rounded-xl bg-brand-accent px-5 py-3 text-sm font-bold text-[#171713] transition-all duration-300 hover:-translate-y-1 hover:bg-amber-700 hover:shadow-lg hover:shadow-brand-accent/20"
            >
              Order Now

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 sm:gap-4 lg:hidden">

            {/* Mobile Search */}
            <Link
              href="/menu?focus=search"
              onClick={focusMenuSearch}
              aria-label="Search menu"
              className="flex h-11 w-11 items-center justify-center rounded-xl text-white/80 transition-colors duration-300 hover:text-brand-accent"
            >
              <Search size={21} />
            </Link>

            {/* Mobile Cart */}
            <Link
              href="/cart"
              aria-label={`Shopping cart with ${cartCount} items`}
              className="relative flex h-11 w-11 items-center justify-center text-white/80 transition-colors duration-300 hover:text-brand-accent"
            >
              <ShoppingCart size={22} aria-hidden="true" />

              {cartCount > 0 && (
                <span className="absolute -right-2.5 -top-2.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-accent px-1 text-[10px] font-bold text-[#171713]">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 text-white transition-all duration-300 hover:border-brand-accent hover:text-brand-accent"
            >
              {isMenuOpen ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t border-white/10 py-6 lg:hidden">
            <nav id="mobile-navigation" aria-label="Mobile navigation" className="flex flex-col gap-5">
              {navigationLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={pathname === link.href ? "page" : undefined}
                  style={{
                    animationDelay: `${index * 60}ms`,
                  }}
                  className="animate-[fadeIn_0.3s_ease-out_both] text-sm font-medium text-white/75 transition-all duration-300 hover:translate-x-2 hover:text-brand-accent"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/menu"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-accent px-5 py-3 text-sm font-bold text-[#171713] transition-all duration-300 hover:bg-amber-700"
              >
                Order Now
                <ArrowRight size={16} />
              </Link>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
