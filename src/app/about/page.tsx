
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Leaf, ChefHat } from "lucide-react";
import Container from "@/app/components/ui/Container";
import Reveal from "@/app/components/ui/Reveal";

const values = [
  {
    icon: Leaf,
    title: "A Familiar Menu",
    description:
      "The sample menu brings burgers, pizza, pasta, and barbecue together.",
  },
  {
    icon: ChefHat,
    title: "Clear Choices",
    description:
      "Short descriptions and sample prices make the menu easy to browse.",
  },
  {
    icon: Heart,
    title: "Room to Gather",
    description:
      "The dining room concept is planned for casual meals with friends and family.",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#171713] text-white">
      {/* Hero */}
      <section className="relative border-b border-white/10 py-24 sm:py-32">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(184,154,98,0.16),transparent_35%)]"
        />

        <Container size="wide" className="relative">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent">
            Our Story
          </span>

          <h1 className="section-heading mt-6 max-w-3xl text-[clamp(2.25rem,9vw,3.75rem)] leading-tight sm:text-6xl lg:text-7xl">
            A neighborhood place
            <span className="mt-2 block text-brand-accent">
              to share a meal.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
            Foodies Hub is a neighborhood grill concept built around good food, generous plates, and time together.
          </p>

          <Link
            href="#our-story"
            className="mt-9 inline-flex items-center gap-3 rounded-xl bg-brand-accent px-6 py-4 text-sm font-bold text-[#171713] transition hover:bg-amber-700"
          >
            Get to Know Us
            <ArrowRight size={18} />
          </Link>
        </Container>
      </section>

      {/* Our Story */}
      <section id="our-story" className="py-20 sm:py-28">
        <Container size="wide">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-[#211D19]">
                <Image
                  src="/images/dining-room.jpg"
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
                A Neighborhood Grill
              </h2>

              <p className="mt-7 leading-8 text-white/65">
                The sample menu brings together grill plates and familiar comfort food for casual meals.
              </p>

              <p className="mt-5 leading-8 text-white/65">
                The story, images, and restaurant details here are examples for this website preview.
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
              What Shapes the Concept
            </span>

            <h2 className="section-heading mt-5 text-4xl sm:text-5xl">
                Simple Things, Done Well
            </h2>

            <p className="mt-5 leading-7 text-white/60">
              This concept is built around familiar food, careful preparation, and a comfortable room.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <Reveal key={value.title} delay={index * 0.06}>
                <div
                  className="rounded-lg border border-white/10 bg-[#171713] p-4 transition duration-300 hover:-translate-y-1 hover:border-brand-accent/50 sm:p-5"
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
              From the Grill
            </span>

            <h2 className="section-heading mx-auto mt-5 max-w-2xl text-4xl sm:text-5xl">
              Made for the Table
            </h2>

            <p className="mx-auto mt-5 max-w-lg leading-7 text-white/60">
              Browse burgers, pizza, pasta, and grill plates made for sharing.
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
  );
}
