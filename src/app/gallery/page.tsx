
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import Container from "@/app/components/ui/Container";
import Reveal from "@/app/components/ui/Reveal";
import {
    galleryImages,
    galleryCategories,
} from "../components/data/gallery";
import type { GalleryImage } from "../components/data/gallery";

function GalleryCard({ item, featured = false, delay = 0 }: { item: GalleryImage; featured?: boolean; delay?: number }) {
    return (
        <Reveal delay={delay} className={featured ? "mb-5 w-full" : "w-full"}>
            <article
                className={`group relative isolate w-full overflow-hidden rounded-xl border border-white/10 bg-[#1b1814] ${
                    featured ? "aspect-[16/10] sm:aspect-[2.4/1] lg:aspect-[2.8/1]" : "aspect-[16/10] sm:aspect-[4/3] lg:aspect-[3/2]"
                }`}
            >
                <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes={featured ? "100vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-7">
                    <div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-accent">{item.category}</span>
                        <h3 className="mt-2 text-lg font-semibold text-white sm:text-xl">{item.alt}</h3>
                    </div>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 group-hover:border-brand-accent group-hover:bg-brand-accent">
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
            : galleryImages.filter(
                  (item) => item.category === activeCategory
              );
    const featuredImage = filteredImages.find((item) => item.id === "gallery-interior");
    const gridImages = filteredImages.filter((item) => item.id !== "gallery-interior");

    return (
        <>
            <main className="min-h-screen overflow-hidden bg-[#171713] text-[#F5F0E8]">

                {/* Gallery Hero */}
                <section className="relative flex min-h-[400px] items-center overflow-hidden border-b border-white/10 sm:min-h-[500px] lg:min-h-[540px]">

                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_50%,rgba(184,154,98,0.13),transparent_55%)]" />

                    <div className="absolute -right-20 top-10 h-72 w-72 rounded-full border border-brand-accent/10 sm:h-96 sm:w-96" />

                    <Container size="wide" className="relative z-10">
                        <div className="max-w-3xl py-24">

                            <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent sm:text-sm">
                                <span className="h-px w-9 bg-brand-accent" />
                                Foodies Hub Experience - Demo Concept
                            </span>

                            <h1 className="section-heading mt-7 text-[clamp(2.25rem,9vw,3.75rem)] leading-[1.08] sm:text-6xl lg:text-7xl 2xl:text-8xl">
                                A Feast for
                                <span className="block italic text-brand-accent">
                                    Your Eyes.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-xl text-sm leading-8 text-white/60 sm:text-base">
                                A visual preview of the grill menu and the warm, relaxed atmosphere imagined for this Karachi neighborhood concept.
                            </p>

                            <a
                                href="#gallery-collection"
                                className="mt-9 inline-flex items-center gap-3 rounded-button bg-brand-accent px-7 py-4 text-sm font-semibold text-[#171713] transition-all duration-300 hover:-translate-y-1 hover:bg-amber-700"
                            >
                                Explore Collection
                                <ArrowDown size={18} />
                            </a>

                        </div>
                    </Container>
                </section>

                {/* Gallery Collection */}
                <section
                    id="gallery-collection"
                    className="section-padding scroll-mt-24"
                >
                    <Container size="wide">

                        {/* Section Heading */}
                        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">

                            <div>
                                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-accent">
                                    Visual Stories - Sample Images
                                </span>

                                <h2 className="section-heading mt-3 text-3xl sm:text-4xl lg:text-5xl">
                                    Explore Our Gallery
                                </h2>

                                <p className="mt-4 max-w-lg text-sm leading-7 text-white/50">
                                    Sample food photography and concept ambience. Replace with restaurant-approved photos before launch.
                                </p>
                            </div>

                            <p className="text-sm text-white/40">
                                {filteredImages.length} Photos
                            </p>
                        </div>

                        {/* Category Filters */}
                        <div className="mb-10 flex flex-wrap gap-3">
                            {galleryCategories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    aria-pressed={activeCategory === category}
                                    className={`min-h-11 rounded-full border px-5 py-3 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                                        activeCategory === category
                                            ? "border-brand-accent bg-brand-accent text-[#171713]"
                                            : "border-white/15 bg-white/[0.02] text-white/60 hover:border-brand-accent hover:text-brand-accent"
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        {/* Featured ambience spans the full gallery width above the photo grid. */}
                        {featuredImage && <GalleryCard item={featuredImage} featured />}

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
                            {gridImages.map((item, index) => (
                                <GalleryCard key={item.id} item={item} delay={index * 0.05} />
                            ))}
                        </div>

                        {/* Empty State */}
                        {filteredImages.length === 0 && (
                            <p className="py-16 text-center text-sm text-white/50">
                                No photos available in this category yet.
                            </p>
                        )}

                    </Container>
                </section>

                {/* Bottom CTA */}
                <section className="border-t border-white/10 bg-[#171713] py-16">
                    <Container size="wide">
                        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">

                            <div>
                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
                                    Foodies Hub
                                </span>

                                <h2 className="section-heading mt-3 text-3xl sm:text-4xl">
                                    Ready to Plan Your Visit?
                                </h2>
                            </div>

                            <Link
                                href="/contact#reservation"
                                className="inline-flex items-center gap-3 rounded-button bg-brand-accent px-7 py-4 text-sm font-semibold text-[#171713] transition-all hover:bg-amber-700"
                            >
                                Reserve a Table
                                <ArrowUpRight size={18} />
                            </Link>

                        </div>
                    </Container>
                </section>

            </main>
        </>
    );
}
