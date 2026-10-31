
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Container from "../ui/Container";
import { popularDishes } from "../data/popularDishes";

export default function PopularDishesSection() {
  return (
    <section className="section-padding bg-[#100F0D]">
      <Container size="wide">
        {/* Section Heading */}
        <div className="mb-10 text-center lg:mb-12">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-brand-accent">
            Our Favorites
          </span>

          <h2 className="section-heading text-3xl text-[#F4EFE5] sm:text-4xl lg:text-5xl">
            Popular <span className="text-brand-accent">Dishes</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
            Discover the dishes our guests love. Fresh flavors and delicious
            moments in every bite.
          </p>
        </div>

        {/* Dish Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {popularDishes.map((dish) => (
            <article
              key={dish.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#1B1916] transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/50"
            >
              {/* Dish Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#25221E]">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Optional Badge */}
                {dish.badge && (
                  <span className="absolute left-3 top-3 rounded-full bg-brand-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                    {dish.badge}
                  </span>
                )}
              </div>

              {/* Dish Details */}
              <div className="p-4 sm:p-5">
                <h3 className="font-display text-lg font-semibold text-[#F4EFE5]">
                  {dish.name}
                </h3>

                <p className="mt-2 min-h-10 text-xs leading-5 text-white/55 sm:text-sm">
                  {dish.description}
                </p>

                <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                  <span className="text-base font-bold text-brand-accent">
                    Rs. {dish.price.toLocaleString("en-PK")}
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
