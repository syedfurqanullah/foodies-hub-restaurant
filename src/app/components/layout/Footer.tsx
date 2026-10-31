
import Link from "next/link";
import {

    MapPin,
    Phone,
    Mail,
    ArrowRight,
} from "lucide-react";
import Container from "../ui/Container";

const footerLinks = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Deals", href: "/deals" },
    { label: "About Us", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
];

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-[#100F0D] text-white">
            <Container size="wide">
                <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="text-2xl font-bold tracking-tight">
                            Foodies <span className="text-brand-accent">Hub.</span>
                        </Link>

                        <p className="mt-5 max-w-xs text-sm leading-7 text-white/55">
                            Good food, great moments. Discover delicious flavors and
                            memorable dining experiences.
                        </p>

                        <div className="mt-6 flex gap-3">
                            {["Instagram", "Facebook", "X"].map((social) => (
                                <span
                                    key={social}
                                    className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/65 transition hover:border-brand-accent hover:text-brand-accent"
                                >
                                    {social}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest">
                            Quick Links
                        </h3>

                        <ul className="mt-6 space-y-4">
                            {footerLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white/55 transition hover:text-brand-accent"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest">
                            Contact Us
                        </h3>

                        <ul className="mt-6 space-y-5 text-sm text-white/55">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="mt-1 shrink-0 text-brand-accent" />
                                <span>Restaurant address will be added here.</span>
                            </li>

                            <li className="flex items-center gap-3">
                                <Phone size={18} className="shrink-0 text-brand-accent" />
                                <span>Phone number will be added here.</span>
                            </li>

                            <li className="flex items-center gap-3">
                                <Mail size={18} className="shrink-0 text-brand-accent" />
                                <span>Email address will be added here.</span>
                            </li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest">
                            Explore Foodies Hub
                        </h3>

                        <p className="mt-6 text-sm leading-7 text-white/55">
                            Ready to discover your next favorite meal?
                        </p>

                        <Link
                            href="/menu"
                            className="mt-6 inline-flex items-center gap-3 rounded-xl bg-brand-accent px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
                        >
                            Explore Menu
                            <ArrowRight size={17} />
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-center text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:text-left">
                    <p>
                        © {new Date().getFullYear()} Foodies Hub. All rights reserved.
                    </p>
                    <p>Made with care for food lovers.</p>
                </div>
            </Container>
        </footer>
    );
}
