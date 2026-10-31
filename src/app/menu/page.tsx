
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShoppingBag,
  Check,
} from "lucide-react";

import Navbar from "@/app/components/layout/Navbar";
import Container from "@/app/components/ui/Container";
import { popularDishes } from "../components//data/popularDishes";
import { useCart } from "../components/context/CartContext";

const menuCategories = [
  "All",
  "Burgers",
  "Pizza",
  "Pasta",
  "BBQ",
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const { addToCart, cartCount } = useCart();

  const filteredDishes =
    activeCategory === "All"
      ? popularDishes
      : popularDishes.filter(
          (dish) =>
            dish.category === activeCategory.toLowerCase()
        );

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#100F0D] text-white">
        {/* Hero Section */}
        <section className="border-b border-white/10 bg-[#171512] py-20 sm:py-28">
          <Container size="wide">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent">
              Freshly Prepared
            </span>

            <h1 className="section-heading mt-5 text-5xl sm:text-6xl lg:text-7xl">
              Explore Our{" "}
              <span className="text-brand-accent">Menu.</span>
            </h1>

            <p className="mt-6 max-w-xl leading-8 text-white/60">
              Discover delicious flavors, carefully prepared dishes,
              and something special for every craving.
            </p>

            <Link
              href="/"
              className="mt-7 inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-brand-accent"
            >
              Back to Home
              <ArrowRight size={16} />
            </Link>

            {/* Cart Shortcut */}
            <Link
              href="/cart"
              className="mt-8 inline-flex items-center gap-3 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold transition hover:border-brand-accent"
            >
              <ShoppingBag size={18} className="text-brand-accent" />
              View Cart
              <span className="rounded-full bg-brand-accent px-2 py-0.5 text-xs text-white">
                {cartCount}
              </span>
            </Link>
          </Container>
        </section>

        {/* Menu Section */}
        <section className="py-16 sm:py-20">
          <Container size="wide">
            <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent">
                  Our Selection
                </span>

                <h2 className="section-heading mt-3 text-3xl sm:text-4xl">
                  Discover Our Dishes
                </h2>
              </div>

              <p className="text-sm text-white/50">
                {filteredDishes.length} dishes available
              </p>
            </div>

            {/* Category Filters */}
            <div className="mt-10 flex flex-wrap gap-3">
              {menuCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                  className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                    activeCategory === category
                      ? "border-brand-accent bg-brand-accent text-white"
                      : "border-white/15 text-white/65 hover:border-brand-accent hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Dish Cards */}
            <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {filteredDishes.map((dish) => (
                <article
                  key={dish.id}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-[#171512] transition duration-300 hover:-translate-y-1 hover:border-brand-accent/50"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#211D19]">
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    {dish.badge && (
                      <span className="absolute left-4 top-4 rounded-full bg-brand-accent px-3 py-1 text-xs font-bold text-white">
                        {dish.badge}
                      </span>
                    )}
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-bold">
                      {dish.name}
                    </h3>

                    <p className="mt-2 min-h-12 text-sm leading-6 text-white/50">
                      {dish.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between gap-3">
                      <span className="text-lg font-bold text-brand-accent">
                        Rs. {dish.price.toLocaleString("en-PK")}
                      </span>

                      <button
                        type="button"
                        onClick={() => addToCart(dish)}
                        className="inline-flex items-center gap-2 rounded-lg bg-brand-accent px-3 py-2.5 text-xs font-bold text-white transition hover:bg-orange-600"
                      >
                        <ShoppingBag size={15} />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Empty State */}
            {filteredDishes.length === 0 && (
              <div className="py-20 text-center">
                <h3 className="text-xl font-bold">
                  No dishes found
                </h3>

                <p className="mt-3 text-sm text-white/50">
                  No dishes are currently available in this category.
                </p>

                <button
                  type="button"
                  onClick={() => setActiveCategory("All")}
                  className="mt-6 rounded-lg bg-brand-accent px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
                >
                  View All Dishes
                </button>
              </div>
            )}
          </Container>
        </section>
      </main>
    </>
  );
}
