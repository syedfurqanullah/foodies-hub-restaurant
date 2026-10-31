import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, Mail, MapPin, Phone } from "lucide-react";

import Container from "../ui/Container";
import { restaurantConfig } from "../config/restaurant";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Deals", href: "/deals" },
];

const discoverLinks = [
  { label: "Our Story", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const socialLinks = Object.entries(restaurantConfig.socialLinks ?? {})
    .filter(([, url]) => Boolean(url)) as [string, string][];

  return (
    <footer className="border-t border-white/10 bg-[#171713] text-[#F4EFE5]">
      <Container size="wide">
        <section className="relative isolate my-8 grid gap-6 overflow-hidden rounded-xl border border-brand-accent/25 bg-gradient-to-br from-[#211f1a] to-[#171713] px-6 py-7 sm:my-10 sm:grid-cols-[1fr_auto] sm:items-center sm:px-9 sm:py-8">
          <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-24 -z-10 h-56 w-56 rounded-full bg-brand-accent/10 blur-3xl" />
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-brand-accent">
              {restaurantConfig.name}
            </p>
            <h2 className="section-heading mt-2 text-[clamp(1.6rem,4vw,2.5rem)]">
              {restaurantConfig.demoMode ? "A good meal starts here." : "Ready for something delicious?"}
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-white/60">
              {restaurantConfig.demoMode
                ? "Browse the sample menu and explore this restaurant website concept."
                : "Explore the menu and find your new favorite."}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/menu"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-button bg-brand-accent px-5 py-3 text-sm font-semibold text-[#171713] transition hover:bg-[#9c7d48]"
            >
              {restaurantConfig.demoMode ? "Browse Sample Menu" : "Explore Menu"}
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-button border border-white/20 px-5 py-3 text-sm font-semibold text-[#F4EFE5] transition hover:border-brand-accent hover:text-brand-accent"
            >
              Contact Us
            </Link>
          </div>
        </section>

        <div className="grid gap-x-8 gap-y-10 border-t border-white/10 py-12 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-10 sm:py-14 lg:grid-cols-[1.2fr_1fr_0.75fr_0.85fr_1fr] lg:gap-10 lg:py-16">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="group inline-flex items-center gap-3">
              <span className="relative h-11 w-11 overflow-hidden rounded-full border border-white/10 bg-white/5">
                <Image src={restaurantConfig.logo} alt="" fill sizes="44px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </span>
              <span className="font-display text-xl font-semibold tracking-tight">
                {restaurantConfig.name}<span className="ml-1 text-brand-accent">.</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
              {restaurantConfig.tagline}
            </p>

            {socialLinks.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {socialLinks.map(([network, url]) => (
                  <a
                    key={network}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/10 px-3.5 py-2 text-xs capitalize text-white/65 transition hover:border-brand-accent/60 hover:text-brand-accent"
                  >
                    {network}
                  </a>
                ))}
              </div>
            )}
          </div>

          <section aria-labelledby="footer-hours-title">
            <div className="flex flex-wrap items-center gap-2">
              <h2 id="footer-hours-title" className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
                Opening Hours
              </h2>
              {restaurantConfig.demoMode && (
                <span className="rounded-full border border-white/10 px-2 py-1 text-[9px] font-semibold uppercase tracking-wider text-white/40">
                  Sample
                </span>
              )}
            </div>
            <ul className="mt-5 space-y-4">
              {restaurantConfig.openingHours.map((hours) => (
                <li key={hours.days} className="flex items-start gap-3 text-sm">
                  <Clock3 size={17} className="mt-0.5 shrink-0 text-brand-accent" />
                  <span>
                    <span className="block font-medium text-white/80">{hours.days}</span>
                    <span className="mt-1 block text-white/50">{hours.openingTime} - {hours.closingTime}</span>
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <nav aria-label="Explore" className="lg:col-span-1">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
              Explore
            </h2>
            <ul className="mt-5 space-y-2.5">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="inline-flex min-h-8 items-center text-sm text-white/60 transition-colors hover:text-[#F4EFE5] focus-visible:text-[#F4EFE5]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Discover" className="lg:col-span-1">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
              Discover
            </h2>
            <ul className="mt-5 space-y-2.5">
              {discoverLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="inline-flex min-h-8 items-center text-sm text-white/60 transition-colors hover:text-[#F4EFE5] focus-visible:text-[#F4EFE5]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby="footer-contact-title">
            <div className="flex flex-wrap items-center gap-2">
              <h2 id="footer-contact-title" className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
                Get in Touch
              </h2>
              {restaurantConfig.demoMode && (
                <span className="rounded-full border border-white/10 px-2 py-1 text-[9px] font-semibold uppercase tracking-wider text-white/40">
                  Sample details
                </span>
              )}
            </div>
            <ul className="mt-5 space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin size={17} className="mt-0.5 shrink-0 text-brand-accent" />
                {restaurantConfig.contact.address ? (
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurantConfig.contact.address)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-[#F4EFE5]"
                  >
                    {restaurantConfig.contact.address}
                  </a>
                ) : (
                  <span className="text-white/45">Location to be confirmed</span>
                )}
              </li>
              <li className="flex items-center gap-3">
                <Phone size={17} className="shrink-0 text-brand-accent" />
                {restaurantConfig.contact.phone ? (
                  <a href={`tel:${restaurantConfig.contact.phone.replace(/\s/g, "")}`} className="transition hover:text-[#F4EFE5]">
                    {restaurantConfig.contact.phone}
                  </a>
                ) : (
                  <span className="text-white/45">Phone to be confirmed</span>
                )}
              </li>
              <li className="flex items-center gap-3">
                <Mail size={17} className="shrink-0 text-brand-accent" />
                {restaurantConfig.contact.email ? (
                  <a href={`mailto:${restaurantConfig.contact.email}`} className="break-all transition hover:text-[#F4EFE5]">
                    {restaurantConfig.contact.email}
                  </a>
                ) : (
                  <span className="text-white/45">Email to be confirmed</span>
                )}
              </li>
            </ul>
          </section>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {restaurantConfig.name}. All rights reserved.</p>
          <p>{restaurantConfig.demoMode ? "Restaurant website concept preview" : restaurantConfig.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
