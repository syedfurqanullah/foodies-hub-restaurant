"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import Container from "@/app/components/ui/Container";
import Reveal from "@/app/components/ui/Reveal";
import { galleryCategories, galleryImages } from "../components/data/gallery";
import type { GalleryImage } from "../components/data/gallery";

function GalleryCard({
  item,
  featured = false,
  delay = 0,
}: {
  item: GalleryImage;
  featured?: boolean;
  delay?: number;
}) {
  const cardRatio = featured
    ? "aspect-[16/9] sm:aspect-[3.6/1]"
    : "aspect-[4/3] lg:aspect-[3/2]";

  return (
    <Reveal delay={delay} className={featured ? "mb-5 w-full" : "w-full"}>
      <article
        className={`group relative isolate w-full overflow-hidden rounded-xl border border-white/10 bg-[#1b1814] ${cardRatio}`}
      >
        <Image
          src={item.image}
          alt={item.alt}
          fill
          sizes={
            featured
              ? "100vw"
              : "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
          }
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 sm:p-5">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-accent">
              {item.category}
            </span>
            <h3 className="mt-2 text-lg font-semibold text-white sm:text-xl">
              {item.alt}
            </h3>
          </div>
          <span
            aria-hidden="true"
            className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-colors duration-300 group-hover:border-brand-accent group-hover:bg-brand-accent"
          >
            <ArrowUpRight size={19} />
          </span>
        </div>
      </article>
    </Reveal>
  );
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((item) => item.category === activeCategory);
  const featuredImage = filteredImages.find(
    (item) => item.id === "gallery-interior",
  );
  const gridImages = filteredImages.filter(
    (item) => item.id !== "gallery-interior",
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[#171713] text-[#F5F0E8]">
      <section className="relative flex min-h-[400px] items-center overflow-hidden border-b border-white/10 sm:min-h-[500px] lg:min-h-[540px]">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_50%,rgba(184,154,98,0.13),transparent_55%)]"
        />
        <div
          aria-hidden="true"
          className="absolute -right-20 top-10 size-72 rounded-full border border-brand-accent/10 sm:size-96"
        />

        <Container size="wide" className="relative z-10">
          <div className="max-w-3xl py-24">
            <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent sm:text-sm">
              <span aria-hidden="true" className="h-px w-9 bg-brand-accent" />
              Food and atmosphere
            </span>

            <h1 className="section-heading mt-7 text-[clamp(2.25rem,9vw,3.75rem)] leading-[1.08] sm:text-6xl lg:text-7xl 2xl:text-8xl">
              A closer look
              <span className="block italic text-brand-accent">at the table.</span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-8 text-white/60 sm:text-base">
              Sample photos of the dishes and dining room for this restaurant
              preview.
            </p>

            <a
              href="#gallery-collection"
              className="mt-9 inline-flex items-center gap-3 rounded-button bg-brand-accent px-7 py-4 text-sm font-semibold text-[#171713] transition-colors hover:bg-amber-700"
            >
              View the photos
              <ArrowDown size={18} aria-hidden="true" />
            </a>
          </div>
        </Container>
      </section>

      <section
        id="gallery-collection"
        className="section-padding scroll-mt-24"
      >
        <Container size="wide">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-accent">
                Photo collection
              </span>
              <h2 className="section-heading mt-3 text-3xl sm:text-4xl lg:text-5xl">
                Food and dining room
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-7 text-white/50">
                Browse sample food and dining room images.
              </p>
            </div>

            <p aria-live="polite" className="text-sm text-white/40">
              {filteredImages.length} {filteredImages.length === 1 ? "photo" : "photos"}
            </p>
          </div>

          <div className="mb-10 flex flex-wrap gap-3" aria-label="Filter photos">
            {galleryCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`min-h-11 rounded-full border px-5 py-3 text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                  activeCategory === category
                    ? "border-brand-accent bg-brand-accent text-[#171713]"
                    : "border-white/15 bg-white/[0.02] text-white/60 hover:border-brand-accent hover:text-brand-accent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mx-auto max-w-6xl">
            {featuredImage && <GalleryCard item={featuredImage} featured />}
            {gridImages.length > 0 ? (
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
                {gridImages.map((item, index) => (
                  <GalleryCard key={item.id} item={item} delay={index * 0.05} />
                ))}
              </div>
            ) : !featuredImage ? (
              <p className="py-16 text-center text-sm text-white/50">
                No photos in this category yet.
              </p>
            ) : null}
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10 bg-[#171713] py-16">
        <Container size="wide">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
                Foodies Hub
              </span>
              <h2 className="section-heading mt-3 text-3xl sm:text-4xl">
                Plan a visit
              </h2>
            </div>

            <Link
              href="/contact#reservation"
              className="inline-flex items-center gap-3 rounded-button bg-brand-accent px-7 py-4 text-sm font-semibold text-[#171713] transition-colors hover:bg-amber-700"
            >
              Reserve a Table
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
