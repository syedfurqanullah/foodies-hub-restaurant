
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Check, ShoppingCart, Tag } from "lucide-react";

import Navbar from "../components/layout/Navbar";
import Container from "../components/ui/Container";
import { deals } from "../components/data/deals";
import { useCart } from "../components/context/CartContext";

export default function DealsPage() {
  const { addToCart } = useCart();
  const [addedDealId, setAddedDealId] = useState<string | null>(null);

  const handleAddToCart = (deal: (typeof deals)[number]) => {
    addToCart({
      id: `deal-${deal.id}`,
      name: deal.name,
      description: deal.description,
      price: deal.discountedPrice,
      image: deal.image,
      category: "deals",
      originalPrice: deal.originalPrice,
      discount: deal.discount,
      isDeal: true,
    });

    setAddedDealId(deal.id);

    window.setTimeout(() => {
      setAddedDealId(null);
    }, 1800);
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#100F0D] text-white">
        {/* Hero Section */}
        <section className="border-b border-white/10 bg-[#171512] py-20 sm:py-28">
          <Container size="wide">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent">
              Special Offers
            </span>

            <h1 className="section-heading mt-5 text-5xl sm:text-6xl lg:text-7xl">
              Delicious Deals.
              <span className="block text-brand-accent">
                Better Moments.
              </span>
            </h1>

            <p className="mt-6 max-w-xl leading-8 text-white/60">
              Enjoy your favorite flavors with our special food offers.
              Great food makes every moment better.
            </p>

            <Link
              href="/menu"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-accent px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
            >
              Explore Full Menu
              <ArrowRight size={17} />
            </Link>
          </Container>
        </section>

        {/* Deals Section */}
        <section className="py-16 sm:py-20">
          <Container size="wide">
            <div className="mb-10 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent">
                Limited Time Offers
              </span>

              <h2 className="section-heading mt-3 text-3xl sm:text-4xl">
                Our Special Deals
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/50">
                Discover delicious combinations and enjoy special
                prices on selected favorites.
              </p>
            </div>

            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {deals.map((deal) => {
                const isAdded = addedDealId === deal.id;

                return (
                  <article
                    key={deal.id}
                    className="group overflow-hidden rounded-2xl border border-white/10 bg-[#171512] transition duration-300 hover:-translate-y-1 hover:border-brand-accent/50"
                  >
                    {/* Deal Image */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#211D19]">
                      <Image
                        src={deal.image}
                        alt={deal.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition duration-700 group-hover:scale-110"
                      />

                      <span className="absolute left-4 top-4 rounded-full bg-brand-accent px-3 py-1.5 text-xs font-bold text-white">
                        {deal.discount}
                      </span>

                      <span className="absolute bottom-4 right-4 rounded-full bg-black/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                        {deal.badge}
                      </span>
                    </div>

                    {/* Deal Details */}
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-accent">
                        <Tag size={14} />
                        Special Deal
                      </div>

                      <h3 className="mt-3 text-xl font-bold text-[#F4EFE5]">
                        {deal.name}
                      </h3>

                      <p className="mt-3 min-h-12 text-sm leading-6 text-white/50">
                        {deal.description}
                      </p>

                      {/* Pricing */}
                      <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-5">
                        <span className="text-xl font-bold text-brand-accent">
                          Rs. {deal.discountedPrice.toLocaleString("en-PK")}
                        </span>

                        <span className="text-sm text-white/40 line-through">
                          Rs. {deal.originalPrice.toLocaleString("en-PK")}
                        </span>
                      </div>

                      {/* Add to Cart */}
                      <button
                        type="button"
                        onClick={() => handleAddToCart(deal)}
                        className={`mt-5 flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold text-white transition ${
                          isAdded
                            ? "bg-green-700"
                            : "bg-brand-accent hover:bg-orange-600"
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check size={17} />
                            Added to Cart
                          </>
                        ) : (
                          <>
                            <ShoppingCart size={17} />
                            Add to Cart
                          </>
                        )}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/cart"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent transition hover:text-orange-400"
              >
                View Your Cart
                <ArrowRight size={16} />
              </Link>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
