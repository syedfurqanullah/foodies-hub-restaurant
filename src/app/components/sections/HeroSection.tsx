import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#171713] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10">
        <Image src="/images/hero/heroim.png" alt="" fill priority sizes="100vw" className="object-cover object-[66%_42%] sm:hidden" />
        <Image src="/images/hero/hero.jpg" alt="" fill priority sizes="100vw" className="hidden object-cover object-[center_50%] sm:block" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[#171713]/95 via-[#171713]/70 to-[#171713]/25"
      />

      <Container size="wide" className="relative z-20">
        <div className="grid min-h-[500px] items-center gap-12 py-14 sm:min-h-[540px] sm:py-16 lg:min-h-[620px] lg:grid-cols-2 lg:py-20">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent sm:text-sm">
              A neighborhood table, set for you
            </span>

            <h1 className="section-heading mt-6 text-[clamp(2.25rem,9vw,3.75rem)] leading-[1.08] text-white sm:text-6xl lg:text-7xl">
              Good Food.
              <span className="mt-2 block text-brand-accent">Great Moments.</span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-white/75 sm:text-lg">
              Explore a menu of guest favorites, prepared fresh and ready for your next meal.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/menu"
                className="inline-flex items-center gap-3 rounded-button bg-brand-accent px-7 py-4 font-semibold text-[#171713] shadow-lg shadow-amber-950/30 transition-all duration-300 hover:-translate-y-1 hover:bg-amber-700"
              >
                Order Now
                <ArrowRight size={19} />
              </Link>

              <Link
                href="/menu"
                className="inline-flex items-center rounded-button border border-white/40 px-7 py-4 font-semibold text-white transition-all duration-300 hover:border-brand-accent hover:bg-brand-accent/10"
              >
                Explore Menu
              </Link>
            </div>
          </Reveal>

          <div className="hidden lg:block" aria-hidden="true" />
        </div>
      </Container>
    </section>
  );
}
