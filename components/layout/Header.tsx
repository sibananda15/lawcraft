"use client";

import React, { useState, useEffect, useRef } from "react";
import Container from "../ui/Container";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { practiceAreasData } from "@/data/practiceAreas";
import { locations } from "@/data/locations";
import ConsultationModal from "@/components/ui/ConsultationModal";

interface NavLink {
    label: string;
    href: string;
}

interface HeaderProps {
    logoText: string;
    navLinks: NavLink[];
    phone: string;
    whatsapp?: string;
}

const Header = ({ logoText, navLinks, phone, whatsapp }: HeaderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
    const [isLocationsOpen, setIsLocationsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const pathname = usePathname();

    const openTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
        openTimeoutRef.current = setTimeout(() => {
            setIsMegaMenuOpen(true);
        }, 150);
    };

    const handleMouseLeave = () => {
        if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current);
        closeTimeoutRef.current = setTimeout(() => {
            setIsMegaMenuOpen(false);
        }, 200);
    };

    const handleMegaMenuClick = () => {
        if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current);
        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
        setIsMegaMenuOpen(false);
    };

    useEffect(() => {
        setIsMenuOpen(false);
        handleMegaMenuClick();
    }, [pathname]);

    useEffect(() => {
        return () => {
            if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current);
            if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
        };
    }, []);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 80);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Lock body scroll when mobile drawer is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [isMenuOpen]);

    // Close drawer on Escape
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isMenuOpen) setIsMenuOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [isMenuOpen]);

    const textColor = scrolled ? "text-white" : "text-[#0f172a]";
    const hoverColor = "hover:text-gold";

    return (
        <>
        <header className={`sticky top-0 z-50 transition-all duration-300 ${
            scrolled
                ? "bg-navy/95 backdrop-blur-md border-b border-gold/30 shadow-lg"
                : "bg-white/95 backdrop-blur-md border-b border-[rgba(15,23,42,0.08)] shadow-sm"
        }`}>
            <Container>
                <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}>
                    {/* Logo */}
                    <Link href="/">
                        <div className="flex flex-col justify-center h-full group">
                            <div className="inline-flex flex-col">
                                <span className={`text-3xl font-serif font-bold tracking-tight group-hover:text-gold transition-colors duration-300 leading-none pb-1 block ${textColor}`}>
                                    {logoText.split(' ')[0] || "Lawcraft"}
                                </span>
                                <div className={`w-full h-[1px] transition-colors duration-300 ${scrolled ? "bg-white/20 group-hover:bg-[#b08d57]/40" : "bg-[#0f172a]/20 group-hover:bg-[#b08d57]/40"}`}></div>
                                <div className={`flex justify-between w-full text-[11px] font-sans uppercase font-bold group-hover:text-gold transition-colors duration-300 pt-1.5 opacity-90 ${textColor}`}>
                                    {(logoText.split(' ').slice(1).join(' ') || "ADVOCATES").split('').map((char, i) => (
                                        <span key={i}>{char === ' ' ? '\u00A0' : char}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center h-full gap-8">
                        {navLinks.map((link) => {
                            const isPracticeArea = link.label === "Practice Areas";
                            const isLocations = link.label === "Locations";
                            const isActive = pathname === link.href || (isPracticeArea && pathname.startsWith('/practice')) || (isLocations && pathname.startsWith('/lawyers'));

                            if (isLocations) {
                                return (
                                    <div
                                        key={link.label}
                                        className="flex items-center h-full relative"
                                        onMouseEnter={() => setIsLocationsOpen(true)}
                                        onMouseLeave={() => setIsLocationsOpen(false)}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsLocationsOpen(false)}
                                            className={`text-[0.9rem] uppercase tracking-wider font-sans font-medium transition-all duration-300 relative py-2
                                                ${isActive ? 'text-[#b08d57]' : `${textColor} ${hoverColor}`}`}
                                        >
                                            {link.label}
                                            <span className={`ml-1.5 opacity-60 text-[10px] transition-transform duration-300 inline-block ${isLocationsOpen ? '-rotate-180' : ''}`}>▼</span>
                                            <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#b08d57] transition-all duration-300 origin-left
                                                ${isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></span>
                                        </Link>
                                        <div className={`absolute top-full left-1/2 -translate-x-1/2 w-56 bg-white border border-[rgba(15,23,42,0.08)] border-t-[3px] border-t-[#b08d57] shadow-[0_16px_50px_rgba(15,23,42,0.1)] transition-all duration-300 transform origin-top rounded-b-sm py-4 px-2 z-50
                                            ${isLocationsOpen ? 'opacity-100 visible translate-y-0 pointer-events-auto' : 'opacity-0 invisible translate-y-2 pointer-events-none'}`}>
                                            {locations.map((loc) => (
                                                <Link
                                                    key={loc.slug}
                                                    href={`/lawyers/${loc.slug}`}
                                                    onClick={() => setIsLocationsOpen(false)}
                                                    className={`block px-4 py-2.5 text-sm font-sans rounded transition-colors ${
                                                        pathname === `/lawyers/${loc.slug}` ? 'text-[#b08d57] font-medium' : 'text-[#5b6470] hover:text-gold hover:bg-gray-50'
                                                    }`}
                                                >
                                                    {loc.city}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                );
                            }

                            if (isPracticeArea) {
                                return (
                                    <div
                                        key={link.label}
                                        className="flex items-center h-full relative"
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={handleMegaMenuClick}
                                            className={`text-[0.9rem] uppercase tracking-wider font-sans font-medium transition-all duration-300 relative py-2
                                                ${isActive ? 'text-[#b08d57]' : `${textColor} ${hoverColor}`}`}
                                        >
                                            {link.label}
                                            <span className={`ml-1.5 opacity-60 text-[10px] transition-transform duration-300 inline-block ${isMegaMenuOpen ? '-rotate-180' : ''}`}>▼</span>
                                            <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#b08d57] transition-all duration-300 origin-left
                                                ${isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></span>
                                        </Link>

                                        {/* Mega Menu Dropdown */}
                                        <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[950px] bg-white border border-[rgba(15,23,42,0.08)] border-t-[3px] border-t-[#b08d57] shadow-[0_16px_50px_rgba(15,23,42,0.1)] transition-all duration-300 transform origin-top rounded-b-sm flex flex-col pt-10 pb-8 px-12 z-50
                                            ${isMegaMenuOpen ? 'opacity-100 visible translate-y-0 pointer-events-auto' : 'opacity-0 invisible translate-y-2 pointer-events-none'}`}>

                                            <div className="grid grid-cols-3 gap-12">
                                                {practiceAreasData.map((category) => (
                                                    <div key={category.title} className="flex flex-col">
                                                        <h4 className="font-serif text-[1.35rem] border-b border-[rgba(15,23,42,0.08)] pb-3 mb-5 text-[#0f172a]">
                                                            {category.title}
                                                        </h4>
                                                        <ul className="space-y-4">
                                                            {category.items.slice(0, 5).map((item) => {
                                                                const isItemActive = pathname === `/practice/${item.slug}`;
                                                                return (
                                                                    <li key={item.slug}>
                                                                        <Link
                                                                            href={`/practice/${item.slug}`}
                                                                            onClick={handleMegaMenuClick}
                                                                            className={`block text-[0.95rem] font-sans transition-all duration-200
                                                                                ${isItemActive ? 'text-[#b08d57] font-semibold translate-x-1' : 'text-[#5b6470] hover:text-gold hover:translate-x-1'}`}
                                                                        >
                                                                            {item.title}
                                                                        </Link>
                                                                    </li>
                                                                );
                                                            })}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="mt-10 pt-6 border-t border-[rgba(15,23,42,0.06)] text-center">
                                                <Link
                                                    href="/#practice-areas"
                                                    onClick={handleMegaMenuClick}
                                                    className="inline-flex items-center text-sm font-sans uppercase tracking-[0.15em] font-semibold text-[#0f172a] hover:text-gold transition-colors"
                                                >
                                                    View All Practice Areas <span className="ml-2 text-lg">→</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }

                            return (
                                <div key={link.label} className="group flex items-center h-full relative">
                                    <Link
                                        href={link.href}
                                        className={`text-[0.9rem] uppercase tracking-wider font-sans font-medium transition-all duration-300 py-2
                                            ${isActive ? 'text-[#b08d57]' : `${textColor} ${hoverColor}`}`}
                                    >
                                        {link.label}
                                        <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#b08d57] transition-all duration-300 origin-left
                                            ${isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'}`}></span>
                                    </Link>
                                </div>
                            );
                        })}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden lg:flex items-center gap-4">
                        {whatsapp && (
                            <a
                                href={`https://wa.me/${whatsapp}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`px-7 py-3 text-xs font-semibold font-sans transition-all duration-300 uppercase tracking-widest rounded-sm ${
                                    scrolled
                                        ? "bg-gold text-white hover:bg-gold/90 shadow-md"
                                        : "bg-[#0f172a] text-white hover:bg-[#b08d57] shadow-[0_4px_10px_rgba(15,23,42,0.1)] hover:shadow-[0_6px_15px_rgba(15,23,42,0.15)]"
                                }`}
                            >
                                WhatsApp Now
                            </a>
                        )}
                    </div>

                    {/* Mobile: phone + hamburger */}
                    <div className="lg:hidden flex items-center gap-4">
                        <a
                            href={`tel:${phone.replace(/\s/g, "")}`}
                            className={`hidden sm:block text-xs transition-colors ${scrolled ? "text-white/60" : "text-gray-400"}`}
                        >
                            +91 98100 53761
                        </a>
                        <button
                            className="w-8 h-8 flex flex-col justify-center gap-1.5"
                            onClick={() => setIsMenuOpen(true)}
                            aria-label="Open menu"
                        >
                            <span className={`w-full h-px transition-colors ${scrolled ? "bg-white" : "bg-[#0f172a]"}`} />
                            <span className={`w-full h-px transition-colors ${scrolled ? "bg-white" : "bg-[#0f172a]"}`} />
                            <span className={`w-full h-px transition-colors ${scrolled ? "bg-white" : "bg-[#0f172a]"}`} />
                        </button>
                    </div>
                </div>
            </Container>
        </header>

        {/* ── MOBILE DRAWER ── */}
        {/* Overlay */}
        <div
            className={`fixed inset-0 bg-black/50 z-[60] lg:hidden transition-opacity duration-300 ${
                isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setIsMenuOpen(false)}
        />

        {/* Drawer panel */}
        <div
            className={`fixed top-0 right-0 h-screen w-full max-w-sm bg-[#0f1f2e] z-[70] lg:hidden transform transition-transform duration-300 ease-out flex flex-col ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <div>
                    <p className="font-serif text-xl text-white font-normal leading-none">Lawcraft</p>
                    <p className="text-[#B8963E] text-[9px] tracking-[4px] mt-0.5 uppercase">Advocates</p>
                </div>
                <button
                    onClick={() => setIsMenuOpen(false)}
                    className="w-8 h-8 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                    aria-label="Close menu"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 overflow-y-auto px-6 py-6">
                {navLinks.map((link) => {
                    const isPracticeArea = link.label === "Practice Areas";
                    const isLocations = link.label === "Locations";

                    if (isLocations) {
                        return (
                            <div key={link.label}>
                                <button
                                    onClick={() => setMobileAccordion(mobileAccordion === "locations" ? null : "locations")}
                                    className="w-full flex items-center justify-between font-serif text-2xl text-white font-normal py-4 border-b border-white/10"
                                >
                                    {link.label}
                                    <span className={`text-[#B8963E] text-lg transition-transform duration-300 ${mobileAccordion === "locations" ? "rotate-45" : ""}`}>
                                        +
                                    </span>
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${mobileAccordion === "locations" ? "max-h-[400px]" : "max-h-0"}`}>
                                    <div className="py-3">
                                        {locations.map((loc) => (
                                            <Link
                                                key={loc.slug}
                                                href={`/lawyers/${loc.slug}`}
                                                onClick={() => setIsMenuOpen(false)}
                                                className="block text-white/60 text-sm py-2 pl-4 hover:text-[#B8963E] transition-colors"
                                            >
                                                {loc.city}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    }

                    if (isPracticeArea) {
                        return (
                            <div key={link.label}>
                                <button
                                    onClick={() => setMobileAccordion(mobileAccordion === "practice" ? null : "practice")}
                                    className="w-full flex items-center justify-between font-serif text-2xl text-white font-normal py-4 border-b border-white/10"
                                >
                                    {link.label}
                                    <span className={`text-[#B8963E] text-lg transition-transform duration-300 ${mobileAccordion === "practice" ? "rotate-45" : ""}`}>
                                        +
                                    </span>
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${mobileAccordion === "practice" ? "max-h-[600px]" : "max-h-0"}`}>
                                    <div className="py-3 space-y-1">
                                        {practiceAreasData.map((category) => (
                                            <div key={category.title} className="mb-3">
                                                <p className="text-[#B8963E] text-xs tracking-[2px] uppercase mb-2 pl-4">
                                                    {category.title}
                                                </p>
                                                {category.items.slice(0, 4).map((item) => (
                                                    <Link
                                                        key={item.slug}
                                                        href={`/practice/${item.slug}`}
                                                        onClick={() => setIsMenuOpen(false)}
                                                        className="block text-white/60 text-sm py-2 pl-4 hover:text-[#B8963E] transition-colors"
                                                    >
                                                        {item.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    }

                    return (
                        <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="block font-serif text-2xl text-white font-normal py-4 border-b border-white/10"
                        >
                            {link.label}
                        </Link>
                    );
                })}
            </nav>

            {/* Drawer bottom CTAs */}
            <div className="px-6 pb-8 space-y-3">
                <button
                    onClick={() => { setIsMenuOpen(false); setIsModalOpen(true); }}
                    className="w-full bg-[#B8963E] text-white py-3.5 text-xs tracking-[2px] uppercase rounded hover:bg-[#9a7d34] transition-colors"
                >
                    Schedule Consultation
                </button>
                {whatsapp && (
                    <a
                        href={`https://wa.me/${whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full block text-center border border-white/30 text-white py-3.5 text-xs tracking-[2px] uppercase rounded hover:border-white hover:bg-white/10 transition-all"
                    >
                        WhatsApp Now
                    </a>
                )}
            </div>
        </div>

        <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default Header;
