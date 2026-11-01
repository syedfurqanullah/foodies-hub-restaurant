
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShoppingBag,
  ShoppingCart,
  Search,
  Check,
  X,
} from "lucide-react";

import Container from "@/app/components/ui/Container";
import { popularDishes } from "../components/data/popularDishes";
import { useCart } from "../components/context/CartContext";
import Reveal from "../components/ui/Reveal";

const menuCategories = [
  "All",
  "Burgers",
  "Pizza",
  "Pasta",
  "BBQ",
  "Desserts",
  "Drinks",
];
const dietaryFilters = [
  "All",
  ...new Set(popularDishes.flatMap((dish) => dish.dietaryTags ?? [])),
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeDietaryTag, setActiveDietaryTag] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [addedDishId, setAddedDishId] = useState<string | null>(null);
  const [highlightedDishId, setHighlightedDishId] = useState<string | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const { addToCart, cartCount } = useCart();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requestedCategory = params.get("category");
    const category = menuCategories.find(
      (item) => item.toLowerCase() === requestedCategory?.toLowerCase()
    );
    const query = params.get("q");
    const itemId = params.get("item");

    if (params.get("focus") === "search" || query) {
      window.requestAnimationFrame(() => searchInputRef.current?.focus());
    }

    window.setTimeout(() => {
      if (category) setActiveCategory(category);
      if (query) setSearchQuery(query);
    }, 0);

    if (itemId && popularDishes.some((dish) => dish.id === itemId)) {
      window.setTimeout(() => {
        setHighlightedDishId(itemId);
        document.getElementById(`dish-${itemId}`)?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 0);
      window.setTimeout(() => setHighlightedDishId(null), 2400);
    }
  }, []);

  const filteredDishes = useMemo(() => {
    const searchTerm = searchQuery.trim().toLowerCase();

    return popularDishes.filter((dish) => {
      const matchesCategory =
        activeCategory === "All" ||
        dish.category.toLowerCase() === activeCategory.toLowerCase();

      const matchesDietary =
        activeDietaryTag === "All" ||
        dish.dietaryTags?.includes(activeDietaryTag) === true;

      const matchesSearch =
        dish.name.toLowerCase().includes(searchTerm) ||
        dish.description.toLowerCase().includes(searchTerm) ||
        dish.category.toLowerCase().includes(searchTerm) ||
        (dish.dietaryTags ?? []).some((tag) => tag.toLowerCase().includes(searchTerm)) ||
        (dish.allergens ?? []).some((allergen) => allergen.toLowerCase().includes(searchTerm));

      return matchesCategory && matchesDietary && matchesSearch;
    });
  }, [activeCategory, activeDietaryTag, searchQuery]);

  const handleAddToCart = (dish: (typeof popularDishes)[number]) => {
    addToCart(dish);
    setAddedDishId(dish.id);

    window.setTimeout(() => {
      setAddedDishId((currentId) =>
        currentId === dish.id ? null : currentId
      );
    }, 1200);
  };

  const resetFilters = () => {
    setActiveCategory("All");
    setActiveDietaryTag("All");
    setSearchQuery("");
  };

  const hasActiveFilters =
    activeCategory !== "All" || activeDietaryTag !== "All" || Boolean(searchQuery.trim());

  return (
    <>
      <main className="min-h-screen bg-[#171713] text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-white/10 bg-[#171713] py-20 sm:py-28">
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#B89A62]/10 blur-3xl" />

          <Container size="wide">
            <div className="relative">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent">
                Freshly Prepared
              </span>

              <h1 className="section-heading mt-5 text-[clamp(2.25rem,9vw,3.75rem)] sm:text-6xl lg:text-7xl">
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

              <div>
                <Link
                  href="/cart"
                  className="mt-8 inline-flex items-center gap-3 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold transition hover:border-brand-accent"
                >
                  <ShoppingBag size={18} className="text-brand-accent" />
                  View Cart
                  <span className="rounded-full bg-brand-accent px-2 py-0.5 text-xs text-[#171713]">
                    {cartCount}
                  </span>
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* Menu Section */}
        <section className="py-16 sm:py-20">
          <Container size="wide">
            {/* Section Heading */}
            <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent">
                  Sample Menu and Prices
                </span>

                <h2 className="section-heading mt-3 text-3xl sm:text-4xl">
                  Discover Our Dishes
                </h2>
              </div>

              <div className="flex items-center gap-4 text-sm">
                <p aria-live="polite" className="text-white/50">
                  {filteredDishes.length}{" "}
                  {filteredDishes.length === 1 ? "dish" : "dishes"} found
                </p>
                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="min-h-11 font-semibold text-brand-accent underline-offset-4 hover:underline"
                  >
                    Clear filters
                  </button>
                )}
              </div>
            </div>

            {/* Search Bar */}
            <div className="mt-10">
              <div className="flex max-w-xl items-center gap-3 rounded-xl border border-white/10 bg-[#171713] px-4 py-3 transition focus-within:border-brand-accent">
                <Search
                  size={19}
                  className="shrink-0 text-brand-accent"
                />

                <input
                  id="menu-search"
                  ref={searchInputRef}
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search burgers, pizza, desserts..."
                  aria-label="Search menu dishes"
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35"
                />

                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search"
                    className="flex h-11 w-11 items-center justify-center text-white/50 transition hover:text-brand-accent"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>
            </div>

            {/* Category Filters */}
            <div className="mt-7 flex flex-wrap gap-3">
              {menuCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                  className={`min-h-11 rounded-full border px-5 py-3 text-sm font-medium transition ${
                    activeCategory === category
                    ? "border-brand-accent bg-brand-accent text-[#171713]"
                      : "border-white/15 text-white/65 hover:border-brand-accent hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {dietaryFilters.length > 1 ? (
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <span className="mr-1 text-xs font-semibold uppercase tracking-wider text-white/45">
                  Dietary
                </span>
                {dietaryFilters.slice(1).map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setActiveDietaryTag(activeDietaryTag === tag ? "All" : tag)}
                    aria-pressed={activeDietaryTag === tag}
                    className={`min-h-11 rounded-full border px-4 py-2 text-xs font-medium transition ${
                      activeDietaryTag === tag
                        ? "border-brand-accent bg-brand-accent text-[#171713]"
                        : "border-white/15 text-white/60 hover:border-brand-accent hover:text-white"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            ) : (
              <p className="mt-5 text-xs leading-5 text-white/40">
                Dietary and allergen details will be shown once confirmed by the restaurant.
              </p>
            )}

            {/* Dish Cards */}
            {filteredDishes.length > 0 ? (
              <div className="cards-grid-food mt-8 grid gap-3 sm:mt-10 sm:gap-5">
                {filteredDishes.map((dish, index) => (
                  <Reveal key={dish.id} delay={index * 0.05}>
                  <article
                    data-card-3d
                    id={`dish-${dish.id}`}
                    className={`group flex h-full flex-col overflow-hidden rounded-xl border bg-[#171713] transition duration-300 hover:border-brand-accent/50 ${highlightedDishId === dish.id ? "border-brand-accent ring-2 ring-brand-accent/40" : "border-white/10"}`}
                  >
                    {/* Dish Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#211D19]">
                      <Image
                        src={dish.image}
                        alt={dish.name}
                        fill
                        sizes="(max-width: 379px) 100vw, (max-width: 1279px) 50vw, 25vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />

                      {dish.badge && (
                        <span className="absolute left-2 top-2 rounded-full bg-brand-accent px-2 py-1 text-[9px] font-bold text-[#171713] sm:left-3 sm:top-3 sm:px-2.5 sm:text-[10px]">
                          {dish.badge}
                        </span>
                      )}
                    </div>

                    {/* Dish Details */}
                    <div className="flex flex-1 flex-col p-3 sm:p-4">
                      <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-brand-accent sm:text-[10px]">
                        {dish.category}
                      </p>

                      <h3 className="mt-1.5 line-clamp-2 min-h-10 text-sm font-semibold sm:mt-2 sm:min-h-12 sm:text-base">
                        {dish.name}
                      </h3>

                      <p className="mt-1.5 line-clamp-2 min-h-8 text-xs leading-4 text-white/50 sm:mt-2 sm:min-h-9 sm:text-sm sm:leading-5">
                        {dish.description}
                      </p>

                      {(dish.dietaryTags?.length || dish.allergens?.length) && (
                        <p className="mt-3 text-xs leading-5 text-white/45">
                          {dish.dietaryTags?.length ? `Dietary: ${dish.dietaryTags.join(", ")}` : null}
                          {dish.dietaryTags?.length && dish.allergens?.length ? " · " : null}
                          {dish.allergens?.length ? `Contains: ${dish.allergens.join(", ")}` : null}
                        </p>
                      )}

                      <div className="mt-auto flex flex-col items-stretch gap-2 pt-3 min-[480px]:flex-row min-[480px]:items-center min-[480px]:justify-between sm:pt-4">
                        <span className="text-base font-bold text-brand-accent sm:text-lg">
                          Rs. {dish.price.toLocaleString("en-PK")}
                        </span>

                        <button
                          type="button"
                          onClick={() => handleAddToCart(dish)}
                          className={`inline-flex min-h-9 w-full items-center justify-center gap-1.5 rounded-lg px-2 py-2 text-[11px] font-bold transition min-[480px]:w-auto min-[480px]:px-2.5 sm:min-h-10 sm:gap-2 sm:px-3 sm:text-xs ${
                            addedDishId === dish.id
                              ? "bg-green-700 text-white"
                              : "bg-brand-accent text-[#171713] hover:bg-amber-700"
                          }`}
                        >
                          {addedDishId === dish.id ? (
                            <>
                              <Check size={15} />
                              Added
                            </>
                          ) : (
                            <>
                              <ShoppingCart size={16} aria-hidden="true" />
                              Add to Cart
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </article>
                  </Reveal>
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="py-20 text-center">
                <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-white/5">
                  <Search size={27} className="text-brand-accent" />
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  No dishes found
                </h3>

                <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-white/50">
                  We couldn&apos;t find any dishes matching your search.
                  Try another name or select a different category.
                </p>

                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-6 rounded-lg bg-brand-accent px-5 py-3 text-sm font-bold text-[#171713] transition hover:bg-amber-700"
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
