import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "../ui/Container";

const moments = [
  { src: "/images/menu/burgers/ember-house-burger.jpg", alt: "Ember House burger" },
  { src: "/images/menu/bbq/middle-eastern-mixed-grill.jpg", alt: "Middle Eastern mixed grill" },
  { src: "/images/menu/pasta/pesto-farfalle.jpg", alt: "Basil pesto farfalle with tomatoes" },
  { src: "/images/menu/pizza/charred-garden-pizza.jpg", alt: "Charred garden pizza" },
];

export default function HomeGallerySection() {
  return (
    <section className="section-padding border-t border-white/10 bg-[#211f1a]">
      <Container>
        <div className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-accent">The dining room</span>
            <h2 className="section-heading mt-4 text-3xl sm:text-4xl lg:text-5xl">A closer look at <span className="text-brand-accent">Foodies Hub.</span></h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/60">Sample photos of the dishes and dining room.</p>
          </div>
          <Link href="/gallery" className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-semibold text-brand-accent hover:text-[#D0B77F]">Explore the gallery <ArrowUpRight size={17} /></Link>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            <div className="group relative col-span-2 aspect-[16/9] overflow-hidden rounded-lg border border-white/10 bg-[#171713] lg:col-span-4 lg:aspect-[4/1]">
              <Image src="/images/dining-room.jpg" alt="Warmly lit dining room ready for dinner" fill sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) calc(100vw - 3rem), (max-width: 1360px) calc(100vw - 5rem), 1280px" className="object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <p className="absolute bottom-2.5 left-3 text-[11px] font-semibold text-white sm:bottom-3 sm:left-4 sm:text-xs">Warmly lit dining room · Concept image</p>
            </div>
            {moments.map((moment) => (
              <div key={moment.src} className="group relative aspect-[16/10] overflow-hidden rounded-lg border border-white/10 bg-[#171713]">
                <Image src={moment.src} alt={moment.alt} fill sizes="(max-width: 768px) 50vw, 40vw" className="object-cover transition duration-700 hover:scale-105" />
              </div>
            ))}
          </div>
        <p className="mt-3 text-right text-[11px] text-white/40">Sample images for this website preview.</p>
      </Container>
    </section>
  );
}
