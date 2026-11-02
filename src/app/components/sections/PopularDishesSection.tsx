
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Container from "../ui/Container";
import { popularDishes } from "../data/popularDishes";
import Reveal from "../ui/Reveal";
import { formatPrice } from "../utils/formatPrice";

export default function PopularDishesSection() {
  const featuredIds = ["ember-house-burger", "charred-garden-pizza", "pesto-farfalle", "smoky-grill-platter"];
  const featuredDishes = featuredIds
    .map((id) => popularDishes.find((dish) => dish.id === id))
    .filter((dish) => dish !== undefined);

  return (
    <section className="section-padding bg-[#171713]">
      <Container size="wide">
        {/* Section Heading */}
        <div className="mb-10 text-center lg:mb-12">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-brand-accent">
          Signature Plates
          </span>

          <h2 className="section-heading text-3xl text-[#F4EFE5] sm:text-4xl lg:text-5xl">
            Popular <span className="text-brand-accent">Dishes</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
            A few dishes from the sample menu. Browse the full menu for more options.
          </p>
        </div>

        {/* Dish Cards */}
        <div className="cards-grid-food grid gap-3 sm:gap-5">
          {featuredDishes.map((dish, index) => (
            <Reveal key={dish.id} delay={index * 0.06}>
            <article
              data-card-hover
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[#1B1916] transition-all duration-300 hover:border-brand-accent/50"
            >
              {/* Dish Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#25221E]">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  sizes="(max-width: 379px) 100vw, (max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Optional Badge */}
                {dish.badge && (
                  <span className="absolute left-2 top-2 rounded-full bg-brand-accent px-2 py-1 text-[9px] font-semibold uppercase tracking-wider text-[#171713] sm:left-3 sm:top-3 sm:px-2.5 sm:text-[10px]">
                    {dish.badge}
                  </span>
                )}
              </div>

              {/* Dish Details */}
              <div className="flex flex-1 flex-col p-3 sm:p-4">
                <h3 className="line-clamp-2 min-h-10 font-display text-sm font-semibold text-[#F4EFE5] sm:min-h-12 sm:text-base">
                  {dish.name}
                </h3>

                <p className="mt-1.5 line-clamp-2 min-h-8 text-[11px] leading-4 text-white/55 sm:mt-2 sm:min-h-9 sm:text-xs sm:leading-5">
                  {dish.description}
                </p>

                <div className="mt-auto flex items-center justify-between gap-2 border-t border-white/10 pt-3">
                  <span className="text-sm font-bold text-brand-accent sm:text-base">
                    {formatPrice(dish.price)}
                  </span>

                  <Link
                    href={`/menu?item=${dish.id}`}
                    aria-label={`View ${dish.name}`}
                    className="flex size-9 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-300 hover:border-brand-accent hover:bg-brand-accent"
                  >
                    <ArrowUpRight size={17} />
                  </Link>
                </div>
              </div>
            </article>
            </Reveal>
          ))}
        </div>

        {/* View Full Menu */}
        <div className="mt-10 text-center">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 rounded-button border border-white/20 px-6 py-3 text-sm font-semibold text-[#F4EFE5] transition-all duration-300 hover:border-brand-accent hover:bg-brand-accent"
          >
            Explore Full Menu
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
