
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Container from "../ui/Container";
import { deals } from "../data/deals";
import Reveal from "../ui/Reveal";

export default function DealsSection() {
  return (
    <section className="section-padding bg-[#171713]">
      <Container size="wide">
        {/* Section Heading */}
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-brand-accent">
              Sample Offers
            </span>

            <h2 className="section-heading text-3xl text-[#F4EFE5] sm:text-4xl lg:text-5xl">
              Deals You <span className="text-brand-accent">Will Love</span>
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 text-white/60 sm:text-base">
              Example combos and sample prices for the concept preview; these are not live restaurant offers.
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
              data-card-3d
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[#211f1a] text-[#F4EFE5] shadow-lg shadow-black/20 transition-all duration-300 hover:border-brand-accent/55"
            >
              {/* Deal Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={deal.image}
                  alt={deal.name}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Deal Details */}
              <div className="flex flex-1 flex-col p-3 sm:p-4">
                <h3 className="line-clamp-2 min-h-10 font-display text-sm font-semibold leading-5 text-[#F4EFE5] sm:text-lg">{deal.name}</h3>
                <p className="mt-1 line-clamp-2 min-h-8 text-[10px] leading-4 text-white/60 sm:mt-2 sm:min-h-9 sm:text-xs sm:leading-5">
                  {deal.description}
                </p>
                <p className="mt-1 line-clamp-2 min-h-8 text-[8px] leading-4 text-white/40 sm:mt-2 sm:text-[10px]">{deal.terms}</p>

                <div className="mt-auto flex flex-col items-stretch gap-2 border-t border-white/10 pt-2.5 sm:flex-row sm:items-end sm:justify-between sm:pt-3">
                  <div>
                    <span className="block text-[9px] font-semibold uppercase tracking-wider text-white/40 sm:text-[10px]">Sample price · PKR</span>
                    <span className="text-[10px] text-white/40 line-through sm:text-xs">Rs. {deal.originalPrice.toLocaleString("en-PK")}</span>
                    <p className="text-base font-bold text-brand-accent sm:text-lg">Rs. {deal.discountedPrice.toLocaleString("en-PK")}</p>
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
