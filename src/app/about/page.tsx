
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Leaf, ChefHat } from "lucide-react";
import Navbar from "@/app/components/layout/Navbar";
import Container from "@/app/components/ui/Container";

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
      <Navbar />

      <main className="overflow-hidden bg-[#100F0D] text-white">
        {/* Hero */}
        <section className="relative border-b border-white/10 py-24 sm:py-32">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(232,117,50,0.16),transparent_35%)]"
          />

          <Container size="wide" className="relative">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent">
              Our Story
            </span>

            <h1 className="section-heading mt-6 max-w-3xl text-5xl leading-tight sm:text-6xl lg:text-7xl">
              More Than Food.
              <span className="mt-2 block text-brand-accent">
                It&apos;s an Experience.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
              Discover the passion, care, and love for food behind Foodies Hub.
              We believe every meal should bring people together.
            </p>

            <Link
              href="/menu"
              className="mt-9 inline-flex items-center gap-3 rounded-xl bg-brand-accent px-6 py-4 text-sm font-bold text-white transition hover:bg-orange-600"
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
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-[#211D19]">
                  <Image
                    src="/images/gallery/restaurant-interior.jpg"
                    alt="Foodies Hub restaurant atmosphere"
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
                  At Foodies Hub, our focus is simple: delicious food, quality
                  ingredients, and a welcoming experience. We bring together
                  flavors that make everyday meals feel special.
                </p>

                <p className="mt-5 leading-8 text-white/65">
                  Whether you are sharing a meal with friends or enjoying a
                  quiet moment, we want every visit to feel worthwhile.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Values */}
        <section className="border-y border-white/10 bg-[#171512] py-20 sm:py-24">
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
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <div
                    key={value.title}
                    className="rounded-2xl border border-white/10 bg-[#100F0D] p-8 transition duration-300 hover:-translate-y-1 hover:border-brand-accent/50"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent">
                      <Icon size={27} />
                    </div>

                    <h3 className="mt-7 text-xl font-bold">
                      {value.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-white/60">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-24">
          <Container size="wide">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#292019] to-[#171512] px-6 py-14 text-center sm:px-12">
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
                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-brand-accent px-7 py-4 text-sm font-bold text-white transition hover:bg-orange-600"
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
