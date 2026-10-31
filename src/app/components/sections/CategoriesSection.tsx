
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Container from "../ui/Container";
import { categories } from "../data/categories";

export default function CategoriesSection() {
  return (
    <section className="section-padding bg-[#171512]">
      <Container size="wide">
        {/* Section Heading */}
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end lg:mb-12">
          <div>
            <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-brand-accent">
              Discover Our Food
            </span>

            <h2 className="section-heading max-w-xl text-3xl text-[#F4EFE5] sm:text-4xl lg:text-5xl">
              Explore Our <span className="text-brand-accent">Menu</span>
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 text-white/60 sm:text-base">
              From delicious starters to satisfying meals, discover something
              special for every craving.
            </p>
          </div>

          <Link
            href="/menu"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#F4EFE5] transition-colors hover:text-brand-accent"
          >
            View Full Menu
            <ArrowUpRight size={18} />
          </Link>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
        
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group relative isolate min-h-[190px] overflow-hidden rounded-2xl border border-white/10 bg-[#25221E] sm:min-h-[240px] lg:min-h-[280px]"
            >
              {/* Category Image */}
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-colors duration-300 group-hover:from-black/95" />

              {/* Category Content */}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4 sm:p-5">
                <div>
                  <h3 className="font-display text-lg font-semibold text-white sm:text-xl lg:text-2xl">
                    {category.name}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-white/65 sm:text-sm">
                    {category.description}
                  </p>
                </div>

                <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 group-hover:border-brand-accent group-hover:bg-brand-accent group-hover:text-white">
                  <ArrowUpRight size={17} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
