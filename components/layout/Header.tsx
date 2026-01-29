"use client";

import React from "react";
import Container from "../ui/Container";

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
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
            <Container>
                <div className="h-20 flex items-center justify-between">
                    {/* Logo */}
                    <div>
                        <h1 className="text-xl font-semibold tracking-wide">
                            {logoText}
                        </h1>
                        <p className="text-xs text-stone-600 tracking-widest uppercase">
                            Advocates & Legal Consultants
                        </p>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <a
                            href={`tel:${phone}`}
                            className="hidden lg:inline-block text-sm font-medium text-gray-900 border border-gray-300 px-4 py-2 hover:border-gray-900 transition"
                        >
                            Call Now
                        </a>

                        {whatsapp && (
                            <a
                                href={`https://wa.me/${whatsapp}`}
                                className="bg-gray-900 text-white px-5 py-2 text-sm font-medium hover:bg-gray-800 transition"
                            >
                                WhatsApp
                            </a>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-600 hover:text-gray-900"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </Container>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-gray-100 bg-white">
                    <Container>
                        <nav className="flex flex-col py-4 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-base font-medium text-gray-900 hover:text-gray-600"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <div className="pt-4 flex flex-col gap-3 border-t border-gray-100">
                                <a
                                    href={`tel:${phone}`}
                                    className="flex items-center justify-center w-full px-4 py-3 bg-gray-50 text-gray-900 font-medium rounded-lg"
                                >
                                    Call Now
                                </a>
                                {whatsapp && (
                                    <a
                                        href={`https://wa.me/${whatsapp}`}
                                        className="flex items-center justify-center w-full px-4 py-3 bg-gray-900 text-white font-medium rounded-lg"
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
