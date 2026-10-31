import Link from "next/link";
import { ArrowRight, Heart, Leaf, Utensils } from "lucide-react";
import Navbar from "@/app/components/layout/Navbar";
import Container from "@/app/components/ui/Container";

const values = [
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description:
      "We believe great food starts with fresh ingredients and thoughtful preparation.",
  },
  {
    icon: Heart,
    title: "Made with Passion",
    description:
      "Every dish is prepared with care, attention, and a passion for great flavors.",
  },
  {
    icon: Utensils,
    title: "Memorable Experiences",
    description:
      "Good food brings people together and makes every moment more special.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#100F0D] text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div
            aria-hidden="true"
            className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand-accent/10 blur-3xl"
          />

          <Container size="wide" className="relative">
            <div className="py-24 text-center sm:py-32">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-accent">
                Our Story
              </p>

              <h1 className="section-heading mx-auto mt-6 max-w-4xl text-5xl leading-tight sm:text-6xl lg:text-7xl">
                More Than Food.
                <span className="block text-brand-accent">
                  It&apos;s an Experience.
                </span>
              </h1>

              <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
                At Foodies Hub, we believe every great moment deserves great
                food. Our passion is bringing people together through delicious
                flavors and memorable experiences.
              </p>
            </div>
          </Container>
        </section>

        {/* Our Story */}
        <section className="py-20 sm:py-28">
          <Container size="wide">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-accent">
                  Who We Are
                </p>

                <h2 className="section-heading mt-5 text-4xl sm:text-5xl">
                  Bringing People Together, One Meal at a Time.
                </h2>

                <p className="mt-7 leading-8 text-white/65">
                  Foodies Hub is built around a simple idea: good food creates
                  great moments. We want every visit to feel welcoming, every
                  dish to be enjoyable, and every meal to become a memorable
                  experience.
                </p>

                <p className="mt-5 leading-8 text-white/65">
                  From everyday favorites to special meals, our focus is on
                  flavor, quality, and the joy of sharing food with the people
                  who matter.
                </p>

                <Link
                  href="/menu"
                  className="mt-8 inline-flex items-center gap-3 font-semibold text-brand-accent transition hover:gap-5"
                >
                  Explore Our Menu
                  <ArrowRight size={19} />
                </Link>
              </div>

              <div className="relative flex min-h-[340px] items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-[#1C1A17] p-10 sm:min-h-[420px]">
                <div className="absolute inset-5 rounded-2xl border border-brand-accent/20" />

                <div className="relative text-center">
                  <span className="text-6xl text-brand-accent">✦</span>
                  <p className="section-heading mt-6 text-4xl sm:text-5xl">
                    Good Food.
                  </p>
                  <p className="section-heading mt-2 text-4xl text-brand-accent sm:text-5xl">
                    Great Moments.
                  </p>
                  <p className="mt-5 text-sm uppercase tracking-[0.25em] text-white/45">
                    The Foodies Hub Experience
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Our Values */}
        <section className="border-y border-white/10 bg-[#171512] py-20 sm:py-24">
          <Container size="wide">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-accent">
                What Matters to Us
              </p>

              <h2 className="section-heading mt-5 text-4xl sm:text-5xl">
                The Values Behind Every Meal
              </h2>

              <p className="mt-5 leading-7 text-white/60">
                Everything we do comes back to creating food and experiences
                worth coming back for.
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

                    <h3 className="mt-7 text-xl font-semibold">
                      {value.title}
                    </h3>

                    <p className="mt-4 leading-7 text-white/60">
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
            <div className="rounded-3xl bg-brand-accent px-6 py-14 text-center text-white sm:px-12 sm:py-20">
              <h2 className="section-heading text-4xl sm:text-5xl">
                Ready for Something Delicious?
              </h2>

              <p className="mx-auto mt-5 max-w-xl leading-7 text-white/85">
                Explore our menu and discover your next favorite meal.
              </p>

              <Link
                href="/menu"
                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#171512] px-7 py-4 font-semibold text-white transition hover:bg-black"
              >
                Explore Menu
                <ArrowRight size={19} />
              </Link>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}