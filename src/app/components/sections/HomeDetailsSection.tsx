import Link from "next/link";
import { ArrowUpRight, Clock3, MapPin } from "lucide-react";

import Container from "../ui/Container";
import { restaurantConfig } from "../config/restaurant";
import Reveal from "../ui/Reveal";

export default function HomeDetailsSection() {
  const hours = restaurantConfig.openingHours
    .map((item) => `${item.days}: ${item.openingTime} to ${item.closingTime}`)
    .join(" | ");
  const location = restaurantConfig.contact.address
    .split(",")
    .slice(-2)
    .join(",")
    .trim() || "Added after the restaurant confirms its location";

  return (
    <section className="border-b border-white/10 bg-[#211f1a] py-6 sm:py-8">
      <Container size="wide">
        <div className="grid gap-5 sm:grid-cols-3 sm:items-center sm:gap-8">
          <Reveal className="flex items-start gap-3">
            <Clock3 size={19} className="mt-0.5 shrink-0 text-brand-accent" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">Opening Hours / Sample</p>
              <p className="mt-1 text-sm leading-6 text-[#F4EFE5]">{hours}</p>
            </div>
          </Reveal>

          <Reveal className="flex items-start gap-3" delay={0.06}>
            <MapPin size={19} className="mt-0.5 shrink-0 text-brand-accent" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">Location / Sample</p>
              <p className="mt-1 text-sm leading-6 text-[#F4EFE5]">{location}</p>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="sm:justify-self-end">
            <Link
              href="/contact#reservation"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-accent transition hover:text-[#D0B77F]"
            >
              Reserve a Table <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
