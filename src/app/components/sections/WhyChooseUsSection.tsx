import {
  ChefHat,
  Clock,
  Heart,
  Leaf,
} from "lucide-react";

import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

const features = [
  {
    title: "Fresh Ingredients",
    description:
      "We use carefully selected ingredients to bring freshness to every meal.",
    icon: Leaf,
  },
  {
    title: "Thoughtful Preparation",
    description:
      "A considered approach to preparation, flavor, and presentation.",
    icon: ChefHat,
  },
  {
    title: "Easy Ordering",
    description:
      "A clear, convenient path from browsing the menu to placing an order.",
    icon: Clock,
  },
  {
    title: "Made for Sharing",
    description:
      "A welcoming menu concept for everyday meals and time together.",
    icon: Heart,
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-[#171713] text-[#F5F0E8]">
      <Container>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.22em] text-[#B89A62]">
            Sample experience pillars
          </span>

          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl">
            Good Food, Made with Care
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#A8A29A] sm:text-base">
            Example brand messaging for this restaurant concept, ready to tailor
            around the restaurant&apos;s verified strengths and service.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <Reveal key={feature.title} delay={index * 0.05}>
                <div
                  data-card-3d
                  className="group relative h-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.045] to-white/[0.015] p-5 transition-all duration-300 hover:border-[#B89A62]/45 sm:p-6"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="flex size-10 items-center justify-center rounded-xl border border-[#B89A62]/20 bg-[#B89A62]/10 text-[#B89A62] transition-colors duration-300 group-hover:bg-[#B89A62] group-hover:text-[#171713] sm:size-11">
                      <Icon size={21} strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <span className="font-display text-sm tracking-[0.16em] text-white/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mb-2 text-base font-semibold leading-snug sm:text-lg">
                    {feature.title}
                  </h3>

                  <p className="text-xs leading-6 text-[#A8A29A] sm:text-sm">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
