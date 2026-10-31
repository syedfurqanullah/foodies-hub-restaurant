
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Tag } from "lucide-react";

import Container from "../ui/Container";
import { deals } from "../data/deals";

export default function DealsSection() {
  return (
    <section className="section-padding bg-[#171512]">
      <Container size="wide">
        {/* Section Heading */}
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-brand-accent">
              Special Offers
            </span>

            <h2 className="section-heading text-3xl text-[#F4EFE5] sm:text-4xl lg:text-5xl">
              Deals You <span className="text-brand-accent">Will Love</span>
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 text-white/60 sm:text-base">
              Enjoy delicious food and exciting offers made for every occasion.
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
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {deals.map((deal) => (
            <article
              key={deal.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#211E1A] transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/50"
            >
              {/* Deal Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={deal.image}
                  alt={deal.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Discount Badge */}
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-brand-accent px-3 py-2 text-xs font-bold text-white shadow-lg">
                  <Tag size={13} />
                  {deal.badge}
                </span>
              </div>

              {/* Deal Details */}
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold text-[#F4EFE5]">
                  {deal.name}
                </h3>

                <p className="mt-2 min-h-10 text-sm leading-6 text-white/55">
                  {deal.description}
                </p>

                {/* Price and Order Button */}
                <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                  <div>
                    <span className="text-xs text-white/40 line-through">
                      Rs. {deal.originalPrice.toLocaleString("en-PK")}
                    </span>

                    <p className="mt-1 text-lg font-bold text-brand-accent">
                      Rs. {deal.discountedPrice.toLocaleString("en-PK")}
                    </p>
                  </div>

                  <Link
                    href={`/deals?deal=${deal.id}`}
                    className="inline-flex items-center gap-2 rounded-button bg-brand-accent px-4 py-3 text-xs font-semibold text-white transition-colors hover:bg-orange-600"
                  >
                    Order Now
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
