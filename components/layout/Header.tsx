"use client";

import React, { useState, useEffect, useRef } from "react";
import Container from "../ui/Container";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { practiceAreasData } from "@/data/practiceAreas";

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
        handleMegaMenuClick(); // ensures cleanup of timers when pathname changes
    }, [pathname]);

    useEffect(() => {
        return () => {
            if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current);
            if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
        };
    }, []);

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[rgba(15,23,42,0.08)] shadow-sm transition-all duration-300">
            <Container>
                <div className="h-20 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/">
                        <div className="flex flex-col justify-center h-full group">
                            <h1 className="text-2xl font-serif font-semibold tracking-wide text-[#0f172a] group-hover:text-[#b08d57] transition-colors duration-300">
                                {logoText}
                            </h1>
                            <p className="text-[10px] sm:text-xs text-[#5b6470] tracking-[0.2em] font-sans uppercase mt-0.5">
                                Advocates & Legal Consultants
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center h-full gap-8">
                        {navLinks.map((link) => {
                            const isPracticeArea = link.label === "Practice Areas";
                            const isActive = pathname === link.href || (isPracticeArea && pathname.startsWith('/practice'));

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
                                                ${isActive ? 'text-[#b08d57]' : 'text-[#0f172a] hover:text-[#b08d57]'}`}
                                        >
                                            {link.label}
                                            <span className={`ml-1.5 opacity-60 text-[10px] transition-transform duration-300 inline-block ${isMegaMenuOpen ? '-rotate-180' : ''}`}>▼</span>
                                            <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#b08d57] transition-all duration-300 origin-left
                                                ${isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></span>
                                        </Link>

                                        {/* Mega Menu Dropdown */}
                                        <div className={`absolute top-[80px] left-1/2 -translate-x-1/2 w-[950px] bg-white border border-[rgba(15,23,42,0.08)] border-t-[3px] border-t-[#b08d57] shadow-[0_16px_50px_rgba(15,23,42,0.1)] transition-all duration-300 transform origin-top rounded-b-sm flex flex-col pt-10 pb-8 px-12 z-50
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
                                                                                ${isItemActive ? 'text-[#b08d57] font-semibold translate-x-1' : 'text-[#5b6470] hover:text-[#b08d57] hover:translate-x-1'}`}
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

                                            {/* View All Details */}
                                            <div className="mt-10 pt-6 border-t border-[rgba(15,23,42,0.06)] text-center">
                                                <Link 
                                                    href="/#practice-areas"
                                                    onClick={handleMegaMenuClick}
                                                    className="inline-flex items-center text-sm font-sans uppercase tracking-[0.15em] font-semibold text-[#0f172a] hover:text-[#b08d57] transition-colors"
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
                                            ${isActive ? 'text-[#b08d57]' : 'text-[#0f172a] hover:text-[#b08d57]'}`}
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
                    <div className="hidden md:flex items-center gap-4">
                        {whatsapp && (
                            <a
                                href={`https://wa.me/${whatsapp}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#0f172a] text-white px-7 py-3 text-xs font-semibold font-sans hover:bg-[#b08d57] transition-all duration-300 uppercase tracking-widest rounded-sm shadow-[0_4px_10px_rgba(15,23,42,0.1)] hover:shadow-[0_6px_15px_rgba(15,23,42,0.15)]"
                            >
                                WhatsApp Now
                            </a>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-[#0f172a] hover:text-[#b08d57] transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </Container>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-[rgba(15,23,42,0.08)] shadow-lg overflow-y-auto max-h-[calc(100vh-80px)]">
                    <Container>
                        <nav className="flex flex-col py-6 space-y-2">
                            {navLinks.map((link) => {
                                const isPracticeArea = link.label === "Practice Areas";
                                const isActive = pathname === link.href || (isPracticeArea && pathname.startsWith('/practice'));

                                return (
                                    <div key={link.label} className="flex flex-col">
                                        <Link
                                            href={link.href}
                                            className={`text-[1.05rem] font-sans uppercase tracking-widest py-3 border-b border-[rgba(15,23,42,0.04)]
                                                ${isActive ? 'text-[#b08d57] font-semibold' : 'text-[#0f172a]'}`}
                                            onClick={() => !isPracticeArea && setIsMenuOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                        
                                        {/* Mobile Sub-menu for Practice Areas */}
                                        {isPracticeArea && (
                                            <div className="pl-4 py-4 flex flex-col gap-6 bg-stone-50 border-b border-[rgba(15,23,42,0.04)] mb-2 mt-2">
                                                {practiceAreasData.map(category => (
                                                    <div key={category.title}>
                                                        <h5 className="font-serif text-[#0f172a] text-lg mb-2">{category.title}</h5>
                                                        <ul className="space-y-2 flex flex-col pl-2 border-l border-[rgba(15,23,42,0.1)]">
                                                            {category.items.slice(0, 4).map((item) => {
                                                                 const isItemActive = pathname === `/practice/${item.slug}`;
                                                                 return (
                                                                    <li key={item.slug}>
                                                                        <Link 
                                                                            onClick={() => setIsMenuOpen(false)}
                                                                            href={`/practice/${item.slug}`} 
                                                                            className={`block py-1 text-sm font-sans ${isItemActive ? 'text-[#b08d57] font-medium' : 'text-[#5b6470]'}`}
                                                                        >
                                                                            {item.title}
                                                                        </Link>
                                                                    </li>
                                                                 )
                                                            })}
                                                        </ul>
                                                    </div>
                                                ))}
                                                <Link 
                                                    onClick={() => setIsMenuOpen(false)}
                                                    href="/#practice-areas" 
                                                    className="inline-block mt-2 text-xs uppercase tracking-widest font-semibold text-[#b08d57]"
                                                >
                                                    View All Services →
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                            
                            <div className="pt-6 mt-4 flex flex-col gap-3">
                                <a
                                    href={`tel:${phone.replace(/\s+/g, "")}`}
                                    className="flex items-center justify-center w-full px-4 py-3 border border-[#0f172a]/20 text-[#0f172a] font-sans uppercase tracking-widest text-sm font-semibold rounded-sm"
                                >
                                    Call Now
                                </a>
                                {whatsapp && (
                                    <a
                                        href={`https://wa.me/${whatsapp}`}
                                        className="flex items-center justify-center w-full px-4 py-3 bg-[#0f172a] text-white font-sans uppercase tracking-widest text-sm font-semibold rounded-sm shadow-md"
                                    >
                                        WhatsApp
                                    </a>
                                )}
                            </div>
                        </nav>
                    </Container>
                </div>
            )}
        </header>
    );
};

export default Header;
