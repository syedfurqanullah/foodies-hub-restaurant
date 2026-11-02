
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Container from "../ui/Container";
import { deals } from "../data/deals";
import Reveal from "../ui/Reveal";
import { formatPrice } from "../utils/formatPrice";

export default function DealsSection() {
  return (
    <section className="section-padding bg-[#171713]">
      <Container size="wide">
        {/* Section Heading */}
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-brand-accent">
              House Combinations
            </span>

            <h2 className="section-heading text-3xl text-[#F4EFE5] sm:text-4xl lg:text-5xl">
              Sample <span className="text-brand-accent">Meal Deals</span>
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 text-white/60 sm:text-base">
              Example bundles and prices for this preview.
            </p>
          </div>

          <Link
            href="/deals"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#F4EFE5] transition-colors hover:text-brand-accent"
          >
            View All Deals
            <ArrowUpRight size={18} />
          </Link>
        </div>

        {/* Deals Cards */}
        <div className="cards-grid-deals mx-auto grid max-w-6xl gap-3 sm:gap-5">
          {deals.map((deal, index) => (
            <Reveal key={deal.id} delay={index * 0.06}>
            <article
              data-card-hover
              className="group flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-[#211f1a] text-[#F4EFE5] shadow-lg shadow-black/20 transition-all duration-300 hover:border-brand-accent/55"
            >
              {/* Deal Image */}
              <div className="relative aspect-[16/8] overflow-hidden">
                <Image
                  src={deal.image}
                  alt={deal.name}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-[#171713]/85 px-3 py-1.5 text-xs font-semibold text-brand-accent backdrop-blur-sm">
                  {deal.badge}
                </span>
              </div>

              {/* Deal Details */}
              <div className="flex flex-1 flex-col p-3 sm:p-3.5">
                <h3 className="line-clamp-2 min-h-10 font-display text-sm font-semibold leading-5 text-[#F4EFE5] sm:text-lg">{deal.name}</h3>
                <p className="mt-1 line-clamp-2 min-h-8 text-xs leading-5 text-white/60 sm:mt-2 sm:min-h-9 sm:text-sm">
                  {deal.description}
                </p>
                <p className="mt-1 line-clamp-2 min-h-8 text-[11px] leading-5 text-white/50 sm:mt-2 sm:text-xs">{deal.terms}</p>

                <div className="mt-auto flex flex-col items-stretch gap-2 border-t border-white/10 pt-2.5 sm:flex-row sm:items-end sm:justify-between sm:pt-3">
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-white/55">Sample price · PKR</span>
                    <span className="text-xs text-white/50 line-through sm:text-sm">{formatPrice(deal.originalPrice)}</span>
                    <p className="flex items-center gap-2 text-base font-bold text-brand-accent sm:text-lg">
                      {formatPrice(deal.discountedPrice)}
                      <span className="rounded bg-brand-accent/10 px-1.5 py-0.5 text-[10px] font-semibold">{deal.discount}</span>
                    </p>
                  </div>
                  <Link
                    href={`/deals?deal=${deal.id}`}
                    className="inline-flex min-h-9 w-full items-center justify-center gap-1 rounded-button bg-brand-accent px-2 py-2 text-[10px] font-semibold text-[#171713] transition-colors hover:bg-amber-700 sm:w-auto sm:gap-2 sm:px-3 sm:py-2.5 sm:text-xs"
                  >
                    View Deal
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
