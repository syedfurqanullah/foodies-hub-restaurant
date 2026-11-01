
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Check, ShoppingCart } from "lucide-react";

import Container from "../components/ui/Container";
import { deals } from "../components/data/deals";
import { useCart } from "../components/context/CartContext";
import Reveal from "../components/ui/Reveal";

export default function DealsPage() {
  const { addToCart } = useCart();
  const [addedDealId, setAddedDealId] = useState<string | null>(null);
  const [highlightedDealId, setHighlightedDealId] = useState<string | null>(null);

  useEffect(() => {
    const dealId = new URLSearchParams(window.location.search).get("deal");
    if (!dealId || !deals.some((deal) => deal.id === dealId)) return;

    window.setTimeout(() => {
      setHighlightedDealId(dealId);
      document.getElementById(`deal-${dealId}`)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 0);
    window.setTimeout(() => setHighlightedDealId(null), 2400);
  }, []);

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
      <main className="min-h-screen bg-[#171713] text-white">
        {/* Hero Section */}
        <section className="border-b border-white/10 bg-[#171713] py-20 sm:py-28">
          <Container size="wide">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent">
              Special Offers
            </span>

            <h1 className="section-heading mt-5 text-[clamp(2.25rem,9vw,3.75rem)] sm:text-6xl lg:text-7xl">
              Delicious Deals.
              <span className="block text-brand-accent">
                Better Moments.
              </span>
            </h1>

            <p className="mt-6 max-w-xl leading-8 text-white/60">
              Example bundles for the restaurant concept. Every offer and price on this page is sample content, not a live promotion.
            </p>

            <Link
              href="/menu"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-accent px-6 py-3 text-sm font-bold text-[#171713] transition hover:bg-amber-700"
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
              Sample Offers
              </span>

              <h2 className="section-heading mt-3 text-3xl sm:text-4xl">
                Our Special Deals
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/50">
                Bundle contents, discounts, prices, and availability are illustrative and must be confirmed by a restaurant before use.
              </p>
            </div>

            <div className="cards-grid-deals mx-auto grid max-w-6xl gap-3 sm:gap-5">
              {deals.map((deal, index) => {
                const isAdded = addedDealId === deal.id;

                return (
                  <Reveal key={deal.id} delay={index * 0.06}>
                  <article
                    data-card-3d
                    id={`deal-${deal.id}`}
                    className={`group flex h-full flex-col overflow-hidden rounded-xl border bg-[#211f1a] text-[#F4EFE5] shadow-lg shadow-black/20 transition duration-300 hover:border-brand-accent/55 ${highlightedDealId === deal.id ? "border-brand-accent ring-2 ring-brand-accent/40" : "border-white/10"}`}
                  >
                    {/* Deal Image */}
                    <div className="relative aspect-[16/9] overflow-hidden bg-[#211D19]">
                      <Image
                        src={deal.image}
                        alt={deal.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* Deal Details */}
                    <div className="flex flex-1 flex-col p-3 sm:p-4">
                      <h2 className="min-h-10 font-display text-sm font-semibold leading-5 text-[#F4EFE5] sm:text-lg">{deal.name}</h2>
                      <p className="mt-1 line-clamp-2 min-h-8 text-[10px] leading-4 text-white/60 sm:mt-2 sm:min-h-9 sm:text-xs sm:leading-5">
                        {deal.description}
                      </p>
                      <p className="mt-1 line-clamp-2 min-h-8 text-[8px] leading-4 text-white/40 sm:mt-2 sm:text-[10px]">{deal.terms}</p>

                      <div className="mt-auto flex items-end justify-between gap-3 border-t border-white/10 pt-4">
                        <div>
                          <span className="block text-[8px] font-semibold uppercase tracking-wider text-white/40 sm:text-[9px]">Sample price · PKR</span>
                          <span className="text-[9px] text-white/40 line-through sm:text-[10px]">Rs. {deal.originalPrice.toLocaleString("en-PK")}</span>
                          <p className="text-lg font-bold text-brand-accent sm:text-xl">Rs. {deal.discountedPrice.toLocaleString("en-PK")}</p>
                        </div>
                      </div>

                      {/* Add to Cart */}
                      <button
                        type="button"
                        onClick={() => handleAddToCart(deal)}
                        className={`mt-4 flex min-h-11 w-full items-center justify-center gap-2 rounded-button px-5 py-3 text-sm font-semibold transition ${
                          isAdded
                            ? "bg-green-700 text-white"
                            : "bg-brand-accent text-[#171713] hover:bg-amber-700"
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
                  </Reveal>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/cart"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent transition hover:text-amber-300"
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
