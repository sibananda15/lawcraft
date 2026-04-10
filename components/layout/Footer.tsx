"use client";

import React, { useState } from "react";
import Link from "next/link";
import ConsultationModal from "@/components/ui/ConsultationModal";
import { locations } from "@/data/locations";

interface FooterLink {
    label: string;
    href: string;
}

interface FooterProps {
    firmName: string;
    address: string;
    phone: string;
    email?: string;
    whatsapp?: string;
    practiceLinks: FooterLink[];
}

const PRACTICE_LINKS = [
    { label: "Criminal Defence", href: "/practice/trial-criminal-defense" },
    { label: "Family & Matrimonial", href: "/practice/family-matrimonial-law" },
    { label: "Property Litigation", href: "/practice/property-real-estate-law" },
    { label: "Corporate & Commercial", href: "/practice/company-formation-structuring" },
    { label: "Civil Litigation", href: "/practice/civil-litigation-appeals" },
    { label: "Anticipatory Bail", href: "/practice/bail-anticipatory-bail" },
];

const QUICK_LINKS = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Practice Areas", href: "/#practice-areas" },
    { label: "Contact", href: "/contact" },
];

const LEGAL_LINKS = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Disclaimer", href: "/disclaimer" },
];

function FooterColumnLabel({ children }: { children: React.ReactNode }) {
    return (
        <>
            <p className="text-[#B8963E] text-[10px] tracking-[4px] uppercase mb-5">
                {children}
            </p>
            <div className="w-6 h-px bg-[#B8963E] mb-5" />
        </>
    );
}

function FooterLinkList({ links }: { links: FooterLink[] }) {
    return (
        <ul className="space-y-3">
            {links.map((link) => (
                <li key={link.label}>
                    <Link
                        href={link.href}
                        className="text-white/50 text-sm hover:text-[#B8963E] transition-colors"
                    >
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

const Footer = ({ phone, address }: FooterProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const currentYear = new Date().getFullYear();

    return (
        <>
            {/* ── PRE-FOOTER CTA BAND ── */}
            <section className="bg-[#0f1f2e] py-16">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
                    <div className="max-w-xl">
                        <p className="text-[#B8963E] text-xs tracking-[4px] uppercase">
                            Take Action
                        </p>
                        <div className="w-8 h-px bg-[#B8963E] mt-3 mb-5" />
                        <h2 className="font-serif text-3xl text-white font-normal">
                            Speak Directly With an Advocate
                        </h2>
                        <p className="text-white/50 text-sm mt-3">
                            Direct access to senior counsel — no intermediaries, no delays.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 w-full md:w-auto shrink-0">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#B8963E] text-white text-xs tracking-[2px] uppercase rounded hover:bg-[#9a7d34] transition-colors"
                        >
                            Schedule Consultation
                        </button>
                        <a
                            href="https://wa.me/919810053761"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-3.5 border border-white/30 text-white text-xs tracking-[2px] uppercase rounded hover:border-white hover:bg-white/10 transition-all"
                        >
                            WhatsApp Now
                        </a>
                    </div>
                </div>
            </section>

            {/* Gold divider */}
            <div className="w-full h-px bg-[#B8963E]/20" />

            {/* ── MAIN FOOTER ── */}
            <footer className="bg-[#0a1628] py-16">
                <div className="max-w-7xl mx-auto px-6">
                    {/* 4-column grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[35%_20%_20%_25%] gap-12 lg:gap-8">
                        {/* Column 1 — Brand */}
                        <div>
                            <p className="font-serif text-2xl text-white font-normal leading-none">
                                Lawcraft
                            </p>
                            <p className="text-[#B8963E] text-[10px] tracking-[4px] mt-1 uppercase">
                                Advocates
                            </p>
                            <div className="w-8 h-px bg-[#B8963E] mt-4 mb-5" />
                            <p className="text-white/40 text-sm leading-relaxed italic max-w-xs">
                                &ldquo;Committed to strategic advocacy and unwavering representation in the pursuit of justice.&rdquo;
                            </p>
                            <p className="text-white/30 text-xs mt-6">
                                Enrolled Advocate · Bar Council of Delhi
                            </p>

                            <div className="mt-4 space-y-1">
                                <div className="flex items-center gap-2">
                                    <svg className="w-3.5 h-3.5 text-[#B8963E] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="text-white/50 text-xs">{address}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-3.5 h-3.5 text-[#B8963E] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <a href={`tel:${phone.replace(/\s/g, "")}`} className="text-white/50 text-xs hover:text-[#B8963E] transition-colors">
                                        {phone}
                                    </a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-3.5 h-3.5 text-[#B8963E] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <a href="mailto:contact@lawcraft.in" className="text-white/50 text-xs hover:text-[#B8963E] transition-colors">
                                        contact@lawcraft.in
                                    </a>
                                </div>
                            </div>

                            {/* Serving locations */}
                            <div className="mt-5">
                                <p className="text-[#B8963E] text-[10px] tracking-[3px] uppercase mb-2">
                                    Serving Delhi NCR
                                </p>
                                <div className="flex flex-wrap gap-x-1.5 gap-y-1">
                                    {locations.map((loc, i) => (
                                        <span key={loc.slug} className="inline-flex items-center">
                                            <Link
                                                href={`/lawyers/${loc.slug}`}
                                                className="text-white/40 text-xs hover:text-[#B8963E] transition-colors"
                                            >
                                                {loc.city}
                                            </Link>
                                            {i < locations.length - 1 && (
                                                <span className="text-white/20 text-xs ml-1.5">&middot;</span>
                                            )}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Column 2 — Practice Areas */}
                        <div>
                            <FooterColumnLabel>Practice Areas</FooterColumnLabel>
                            <FooterLinkList links={PRACTICE_LINKS} />
                        </div>

                        {/* Column 3 — Quick Links */}
                        <div>
                            <FooterColumnLabel>Quick Links</FooterColumnLabel>
                            <FooterLinkList links={QUICK_LINKS} />
                        </div>

                        {/* Column 4 — Legal */}
                        <div>
                            <FooterColumnLabel>Legal</FooterColumnLabel>
                            <FooterLinkList links={LEGAL_LINKS} />

                            <div className="mt-8">
                                <span className="border border-[#B8963E]/30 rounded-full px-3 py-1.5 inline-flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                    <span className="text-white/40 text-[10px] tracking-wide">
                                        Available for consultation
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* ── BOTTOM BAR ── */}
                    <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-white/20 text-xs">
                            &copy; {currentYear} Lawcraft Advocates. All rights reserved.
                        </p>
                        <span className="text-[#B8963E]/40 text-xs select-none hidden sm:block">
                            · &nbsp; · &nbsp; ·
                        </span>
                        <p className="text-white/20 text-xs italic">
                            Designed with precision. Built for trust.
                        </p>
                    </div>
                </div>
            </footer>

            <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default Footer;
