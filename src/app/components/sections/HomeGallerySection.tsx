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
      <Container size="wide">
        <div className="grid items-end gap-7 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-accent">Food and ambience - Demo</span>
            <h2 className="section-heading mt-4 text-3xl sm:text-4xl lg:text-5xl">Gather around <span className="text-brand-accent">the table.</span></h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/60">Sample dishes and an illustrative dining room set the scene for this Karachi neighborhood grill concept.</p>
            <Link href="/gallery" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-accent hover:text-[#D0B77F]">Explore the gallery <ArrowUpRight size={17} /></Link>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:gap-3 xl:grid-cols-4">
            <div className="group relative col-span-2 aspect-[16/6] overflow-hidden rounded-lg border border-white/10 bg-[#171713] xl:col-span-4">
              <Image src="/images/hero/dining-room.jpg" alt="Warmly lit dining room ready for dinner" fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <p className="absolute bottom-2.5 left-3 text-[11px] font-semibold text-white sm:bottom-3 sm:left-4 sm:text-xs">Warmly lit dining room · Demo image</p>
            </div>
            {moments.map((moment) => (
              <div key={moment.src} className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-[#171713]">
                <Image src={moment.src} alt={moment.alt} fill sizes="(max-width: 768px) 50vw, 40vw" className="object-cover transition duration-700 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
        <p className="mt-3 text-right text-[10px] text-white/35">Concept imagery for preview purposes.</p>
      </Container>
    </section>
  );
}
