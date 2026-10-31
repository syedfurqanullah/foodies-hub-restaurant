
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Search,
  ShoppingBag,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

import { useCart } from "../context/CartContext";
import Container from "../ui/Container";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#100F0D]/95 text-white backdrop-blur-xl">
      <Container size="wide">
        <div className="flex h-20 items-center justify-between gap-5">

          {/* Logo */}
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-3"
          >
            <div className="relative h-11 w-11 overflow-hidden rounded-full border border-white/10 transition duration-300 group-hover:scale-105 group-hover:border-brand-accent">
              <Image
                src="/logo/foodies-hub-logo.png"
                alt="Foodies Hub"
                fill
                sizes="44px"
                className="object-cover"
              />
            </div>

            <span className="text-xl font-bold tracking-tight transition-colors duration-300 group-hover:text-brand-accent">
              Foodies{" "}
              <span className="text-brand-accent">Hub.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative py-2 text-sm font-medium text-white/70 transition-colors duration-300 hover:text-brand-accent"
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
              href="/menu"
              aria-label="Search menu"
              className="text-white/75 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-brand-accent"
            >
              <Search size={21} />
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              aria-label={`Shopping cart with ${cartCount} items`}
              className="group relative text-white/75 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-brand-accent"
            >
              <ShoppingBag size={22} />

              {cartCount > 0 && (
                <span className="absolute -right-2.5 -top-2.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-accent px-1 text-[10px] font-bold text-white transition-transform duration-300 group-hover:scale-110">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Link>

            {/* Order Now */}
            <Link
              href="/menu"
              className="group inline-flex items-center gap-2 rounded-xl bg-brand-accent px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-lg hover:shadow-brand-accent/20"
            >
              Order Now

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-4 lg:hidden">

            {/* Mobile Search */}
            <Link
              href="/menu"
              aria-label="Search menu"
              className="text-white/80 transition-colors duration-300 hover:text-brand-accent"
            >
              <Search size={21} />
            </Link>

            {/* Mobile Cart */}
            <Link
              href="/cart"
              aria-label={`Shopping cart with ${cartCount} items`}
              className="relative text-white/80 transition-colors duration-300 hover:text-brand-accent"
            >
              <ShoppingBag size={22} />

              {cartCount > 0 && (
                <span className="absolute -right-2.5 -top-2.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-accent px-1 text-[10px] font-bold text-white">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              className="rounded-lg border border-white/20 p-2 text-white transition-all duration-300 hover:border-brand-accent hover:text-brand-accent"
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
            <nav className="flex flex-col gap-5">
              {navigationLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
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
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-accent px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-orange-600"
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
