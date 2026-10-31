import {
  ChefHat,
  Clock,
  Heart,
  Leaf,
} from "lucide-react";

import Container from "../ui/Container";

const features = [
  {
    title: "Fresh Ingredients",
    description:
      "We use carefully selected ingredients to bring freshness to every meal.",
    icon: Leaf,
  },
  {
    title: "Expert Chefs",
    description:
      "Our chefs prepare every dish with care, passion, and attention to detail.",
    icon: ChefHat,
  },
  {
    title: "Quick Service",
    description:
      "Enjoy a smooth ordering experience and food prepared with care.",
    icon: Clock,
  },
  {
    title: "Made with Love",
    description:
      "Every meal is made to deliver a memorable food experience.",
    icon: Heart,
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-[#100F0D] text-[#F5F0E8]">
      <Container>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-[#E87532]">
            Why Foodies Hub
          </span>

          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl">
            Good Food, Made with Care
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#A8A29A] sm:text-base">
            From fresh ingredients to thoughtful preparation,
            we focus on making every meal worth enjoying.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#E87532]/50 hover:bg-white/[0.06]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#E87532]/10 text-[#E87532] transition-colors duration-300 group-hover:bg-[#E87532] group-hover:text-white">
                  <Icon size={27} strokeWidth={1.7} />
                </div>

                <h3 className="mb-3 text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="text-sm leading-7 text-[#A8A29A]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}