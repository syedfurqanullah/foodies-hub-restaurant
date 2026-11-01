
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Leaf, ChefHat } from "lucide-react";
import Container from "@/app/components/ui/Container";
import Reveal from "@/app/components/ui/Reveal";

const values = [
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description:
      "We believe great food starts with quality ingredients and careful preparation.",
  },
  {
    icon: ChefHat,
    title: "Passion for Food",
    description:
      "Every dish is prepared with attention to detail, flavor, and presentation.",
  },
  {
    icon: Heart,
    title: "Made with Care",
    description:
      "We aim to make every meal a memorable part of your day.",
  },
];

export default function AboutPage() {
  return (
    <>
      <main className="overflow-hidden bg-[#171713] text-white">
        {/* Hero */}
        <section className="relative border-b border-white/10 py-24 sm:py-32">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(184,154,98,0.16),transparent_35%)]"
          />

          <Container size="wide" className="relative">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent">
              Our Story · Demo Concept
            </span>

            <h1 className="section-heading mt-6 max-w-3xl text-[clamp(2.25rem,9vw,3.75rem)] leading-tight sm:text-6xl lg:text-7xl">
              More Than Food.
              <span className="mt-2 block text-brand-accent">
                It&apos;s an Experience.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
              Meet the idea behind Foodies Hub: a modern neighborhood grill built around smoky flavors, generous plates, and time together.
            </p>

            <Link
              href="/menu"
              className="mt-9 inline-flex items-center gap-3 rounded-xl bg-brand-accent px-6 py-4 text-sm font-bold text-[#171713] transition hover:bg-amber-700"
            >
              Explore Our Menu
              <ArrowRight size={18} />
            </Link>
          </Container>
        </section>

        {/* Our Story */}
        <section className="py-20 sm:py-28">
          <Container size="wide">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-[#211D19]">
                  <Image
                    src="/images/hero/dining-room.jpg"
                    alt="Warmly lit restaurant dining room"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-5 -right-3 -z-10 h-32 w-32 rounded-full bg-brand-accent/20 blur-3xl" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent">
                  Who We Are
                </span>

                <h2 className="section-heading mt-5 text-4xl sm:text-5xl">
                  A Love for Great Food
                </h2>

                <p className="mt-7 leading-8 text-white/65">
                  This sample brand is imagined as a relaxed neighborhood grill, bringing together flame-kissed favorites and familiar comfort food.
                </p>

                <p className="mt-5 leading-8 text-white/65">
                  The story, menu, photography, and details on this page are concept content for a restaurant website preview.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Values */}
        <section className="border-y border-white/10 bg-[#171713] py-20 sm:py-24">
          <Container size="wide">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent">
                What Matters to Us
              </span>

              <h2 className="section-heading mt-5 text-4xl sm:text-5xl">
                The Values Behind Every Dish
              </h2>

              <p className="mt-5 leading-7 text-white/60">
                The little things matter. These are the values that guide our
                approach to food and hospitality.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {values.map((value, index) => {
                const Icon = value.icon;

                return (
                  <Reveal key={value.title} delay={index * 0.06}>
                  <div
                    className="rounded-xl border border-white/10 bg-[#171713] p-5 transition duration-300 hover:-translate-y-1 hover:border-brand-accent/50 sm:p-6"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent">
                      <Icon size={23} />
                    </div>

                    <h3 className="mt-5 text-lg font-bold">
                      {value.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-white/60">
                      {value.description}
                    </p>
                  </div>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-24">
          <Container size="wide">
            <div className="rounded-xl border border-white/10 bg-gradient-to-br from-[#292019] to-[#171713] px-6 py-14 text-center sm:px-12">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent">
                Discover Something Delicious
              </span>

              <h2 className="section-heading mx-auto mt-5 max-w-2xl text-4xl sm:text-5xl">
                Your Next Favorite Meal Is Waiting
              </h2>

              <p className="mx-auto mt-5 max-w-lg leading-7 text-white/60">
                Explore our menu and discover flavors worth coming back for.
              </p>

              <Link
                href="/menu"
                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-brand-accent px-7 py-4 text-sm font-bold text-[#171713] transition hover:bg-amber-700"
              >
                View Our Menu
                <ArrowRight size={18} />
              </Link>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
