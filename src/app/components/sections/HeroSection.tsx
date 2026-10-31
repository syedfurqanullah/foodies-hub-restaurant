
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "../ui/Container";

export default function HeroSection() {
    return (
        <section className="relative isolate overflow-hidden bg-[#100d0a] text-white">

            {/* Background Food Image */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-10"
                style={{
                    backgroundImage: "url('/images/hero/hero.jpg')",
                    backgroundSize: "auto 100%",
                    backgroundPosition: "right center",
                    backgroundRepeat: "no-repeat",
                }}
            />

            {/* Dark Gradient Overlay */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[#100d0a]/95 via-[#100d0a]/65 to-[#100d0a]/10"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-10 bg-black/10"
            />

            <Container size="wide" className="relative z-20">
                <div className="grid min-h-[520px] items-center gap-12 py-16 lg:min-h-[580px] lg:grid-cols-2 lg:py-20">

                    {/* Hero Content */}
                    <div className="max-w-2xl">

                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent sm:text-sm">
                            Fresh • Delicious • Always
                        </span>

                        <h1 className="section-heading mt-6 text-5xl leading-[1.08] text-white sm:text-6xl lg:text-7xl">
                            Good Food.
                            <span className="mt-2 block text-brand-accent">
                                Great Moments.
                            </span>
                        </h1>

                        <p className="mt-7 max-w-lg text-base leading-8 text-white/75 sm:text-lg">
                            Discover delicious food, freshly prepared meals,
                            and memorable dining experiences.
                        </p>

                        {/* Action Buttons */}
                        <div className="mt-9 flex flex-wrap gap-4">
                            <Link
                                href="/menu"
                                className="inline-flex items-center gap-3 rounded-button bg-brand-accent px-7 py-4 font-semibold text-white shadow-lg shadow-orange-950/30 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600"
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

                    </div>

                    {/* Right Side Visual Space */}
                    <div className="hidden lg:block" aria-hidden="true" />

                </div>
            </Container>
        </section>
    );
}
