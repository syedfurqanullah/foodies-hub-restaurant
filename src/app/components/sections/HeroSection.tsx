import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#171713] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10">
        <Image src="/images/hero/restaurant-interior.jpg" alt="" fill priority sizes="100vw" className="object-cover object-[center_50%]" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[#171713]/95 via-[#171713]/70 to-[#171713]/25"
      />

      <Container size="wide" className="relative z-20">
        <div className="flex min-h-[420px] items-center py-12 sm:min-h-[500px] sm:py-16 lg:min-h-[620px] lg:py-20">
          <Reveal className="max-w-2xl">
            <span className="block max-w-full text-[10px] font-bold uppercase leading-relaxed tracking-[0.16em] text-brand-accent sm:text-sm sm:tracking-[0.3em]">
              <span className="sm:hidden">Karachi grill · Demo</span>
              <span className="hidden sm:inline">Neighborhood grill &amp; kitchen · Demo concept</span>
            </span>

            <h1 className="section-heading mt-6 text-[clamp(2.25rem,9vw,3.75rem)] leading-[1.08] text-white sm:text-6xl lg:text-7xl">
              Good Food.
              <span className="mt-2 block text-brand-accent">Great Moments.</span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-white/75 sm:text-lg">
              Flame-kissed grill favorites, comforting plates, and an easy-going table made for sharing.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 rounded-button bg-brand-accent px-5 py-3.5 text-sm font-semibold text-[#171713] shadow-lg shadow-amber-950/30 transition-all duration-300 hover:-translate-y-1 hover:bg-amber-700 sm:gap-3 sm:px-7 sm:py-4 sm:text-base"
              >
                Browse Menu
                <ArrowRight size={19} />
              </Link>

              <Link
                href="/contact#reservation"
                className="inline-flex items-center rounded-button border border-white/40 px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-brand-accent hover:bg-brand-accent/10 sm:px-7 sm:py-4 sm:text-base"
              >
                Reserve a Table
              </Link>
            </div>
          </Reveal>

        </div>
      </Container>
    </section>
  );
}
