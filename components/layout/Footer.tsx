import React from 'react';

interface Link {
    label: string;
    href: string;
}

interface FooterProps {
    firmName: string;
    address: string;
    phone: string;
    email?: string;
    whatsapp?: string;
    practiceLinks: Link[]; // Kept for interface compatibility but we might use specific ones
}

const Footer = ({
    firmName,
    address,
    phone,
    email,
    whatsapp,
}: FooterProps) => {
    const currentYear = new Date().getFullYear();

    // Specific Practice Areas requested
    const topPracticeAreas = [
        { label: "Criminal Defence", href: "/practice-areas/criminal-defense" },
        { label: "Family & Matrimonial", href: "/practice-areas/family-law" },
        { label: "Property Litigation", href: "/practice-areas/property-real-estate-disputes" },
        { label: "Corporate & Commercial", href: "/practice-areas/corporate-commercial-law" },
    ];

    return (
        <footer className="bg-[#0f172a] text-slate-300 pt-20 pb-8 border-t border-slate-800">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Main 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 mb-16">

                    {/* Left: Firm Info */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl font-serif text-white tracking-wide mb-2">
                                {firmName}
                            </h3>
                            <p className="text-sm text-slate-500 font-medium tracking-wider uppercase">
                                Advocates & Legal Consultants
                            </p>
                        </div>
                        <div className="space-y-4 text-slate-400 text-sm leading-relaxed font-light">
                            <p className="max-w-xs">{address}</p>
                            <div className="flex flex-col gap-2">
                                <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                                    {phone}
                                </a>
                                {email && (
                                    <a href={`mailto:${email}`} className="hover:text-white transition-colors">
                                        {email}
                                    </a>
                                )}
                            </div>
                        </div>
                        <p className="text-xs text-slate-500 italic border-l-2 border-slate-700 pl-3">
                            "Committed to strategic advocacy and unwavering representation."
                        </p>
                    </div>

                    {/* Middle: Top Practice Areas */}
                    <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6 border-b border-slate-800 pb-2 inline-block">
                            Key Practice Areas
                        </h4>
                        <ul className="space-y-3">
                            {topPracticeAreas.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-slate-400 hover:text-white transition-all duration-200 flex items-center group"
                                    >
                                        <span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Legal Links */}
                    <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6 border-b border-slate-800 pb-2 inline-block">
                            Legal
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="/privacy-policy" className="text-sm text-slate-400 hover:text-white transition-colors">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="/terms-of-service" className="text-sm text-slate-400 hover:text-white transition-colors">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="/disclaimer" className="text-sm text-slate-400 hover:text-white transition-colors">
                                    Disclaimer
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* CTA Row */}
                <div className="border-t border-slate-800 py-10 mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <p className="text-white font-serif text-lg mb-1">
                            Need legal clarity?
                        </p>
                        <p className="text-slate-400 text-sm">
                            Speak with an advocate today regarding your matter.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <a
                            href={`tel:${phone.replace(/\s/g, '')}`}
                            className="px-6 py-2 bg-white text-slate-900 text-sm font-medium rounded-sm hover:bg-gray-100 transition-colors"
                        >
                            Call Now
                        </a>
                        {whatsapp && (
                            <a
                                href={`https://wa.me/${whatsapp}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2 border border-slate-600 text-white text-sm font-medium rounded-sm hover:bg-slate-800 transition-colors"
                            >
                                WhatsApp
                            </a>
                        )}
                    </div>
                </div>

                {/* Copyright & Disclaimer */}
                <div className="border-t border-slate-800 pt-8">
                    <p className="text-xs text-slate-600 mb-4 leading-relaxed text-justify">
                        <strong>Disclaimer:</strong> The user wishes to gain more information about Lawcraft Advocates for his/her own information and use. The information provided herein is for general guidance only and does not contain legal advice. Lawcraft Advocates is not liable for any consequence of any action taken by the user relying on material/information provided on this website.
                    </p>
                    <p className="text-xs text-center text-slate-600">
                        &copy; {currentYear} {firmName}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
