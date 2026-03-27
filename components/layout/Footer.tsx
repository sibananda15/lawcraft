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
    practiceLinks: Link[]; // Kept for interface compatibility
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

    // Splitting address string natively into two lines if it contains a comma
    const addressParts = address.split(', ');

    return (
        <footer className="bg-gradient-to-b from-[#0f172a] to-[#080c17] text-slate-300 pt-24 pb-8 border-t-[3px] border-t-[#b08d57]">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Authority CTA Row (Moved to top of footer for hierarchy) */}
                <div className="border-b border-[rgba(255,255,255,0.06)] pb-16 mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    <div className="text-left max-w-xl">
                        <h2 className="text-white font-serif text-3xl md:text-4xl mb-4">
                            Speak Directly With an Advocate
                        </h2>
                        <p className="text-slate-400 text-lg font-light leading-relaxed">
                            Secure expert legal counsel tailored to your specific situation. We provide clear, strategic representation to protect your interests.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
                        <a
                            href={`tel:${phone.replace(/\s/g, '')}`}
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0f172a] font-sans text-sm font-semibold uppercase tracking-widest hover:bg-[#b08d57] hover:text-white transition-all duration-300 rounded-sm"
                        >
                            Schedule Consultation
                        </a>
                        {whatsapp && (
                            <a
                                href={`https://wa.me/${whatsapp}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-8 py-4 border border-[rgba(255,255,255,0.2)] text-white font-sans text-sm font-semibold uppercase tracking-widest hover:border-[#b08d57] hover:text-[#b08d57] transition-all duration-300 rounded-sm"
                            >
                                WhatsApp Now
                            </a>
                        )}
                    </div>
                </div>

                {/* Main 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-20">

                    {/* Left: Firm Info (Spans 5 columns) */}
                    <div className="md:col-span-12 lg:col-span-5 flex flex-col space-y-8">
                        <div>
                            <h3 className="text-3xl font-serif text-white tracking-wide mb-2">
                                {firmName}
                            </h3>
                            <p className="text-xs text-[#b08d57] font-semibold tracking-[0.2em] uppercase">
                                Advocates & Legal Consultants
                            </p>
                        </div>
                        
                        <div className="flex flex-col space-y-6 lg:max-w-sm">
                            <address className="not-italic text-slate-400 text-sm leading-8 font-light flex flex-col">
                                {addressParts.map((part, index) => (
                                    <span key={index}>{part}{index < addressParts.length - 1 ? ',' : ''}</span>
                                ))}
                            </address>

                            <div className="flex flex-col space-y-1">
                                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold mb-1">Direct Line</span>
                                <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-2xl font-serif text-[#b08d57] hover:text-white transition-colors">
                                    {phone}
                                </a>
                                {email && (
                                    <a href={`mailto:${email}`} className="text-sm text-slate-400 hover:text-white transition-colors mt-2">
                                        {email}
                                    </a>
                                )}
                            </div>
                        </div>

                        <blockquote className="text-sm text-slate-400 italic border-l-[3px] border-[#b08d57] pl-5 py-1 leading-relaxed mt-4">
                            "Committed to strategic advocacy and unwavering representation in the pursuit of justice."
                        </blockquote>
                    </div>

                    {/* Middle: Top Practice Areas (Spans 4 columns) */}
                    <div className="md:col-span-6 lg:col-span-4 lg:pl-8">
                        <h4 className="text-xs font-semibold text-[#b08d57] uppercase tracking-[0.2em] mb-8">
                            Key Practice Areas
                        </h4>
                        <ul className="space-y-5">
                            {topPracticeAreas.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-[0.95rem] font-sans font-light text-slate-400 hover:text-[#b08d57] transition-colors duration-300 block"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Legal Links (Spans 3 columns) */}
                    <div className="md:col-span-6 lg:col-span-3">
                        <h4 className="text-xs font-semibold text-[#b08d57] uppercase tracking-[0.2em] mb-8">
                            Legal
                        </h4>
                        <ul className="space-y-5">
                            <li>
                                <a href="/privacy-policy" className="text-[0.95rem] font-sans font-light text-slate-400 hover:text-[#b08d57] transition-colors duration-300 block">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="/terms-of-service" className="text-[0.95rem] font-sans font-light text-slate-400 hover:text-[#b08d57] transition-colors duration-300 block">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="/disclaimer" className="text-[0.95rem] font-sans font-light text-slate-400 hover:text-[#b08d57] transition-colors duration-300 block">
                                    Disclaimer
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section: Disclaimer & Copyright */}
                <div className="border-t border-[rgba(255,255,255,0.06)] pt-10">
                    <p className="text-[10px] sm:text-[11px] text-slate-600 mb-6 leading-relaxed text-justify max-w-none opacity-80">
                        <strong>Disclaimer:</strong> The user wishes to gain more information about Lawcraft Advocates for his/her own information and use. The information provided herein is for general guidance only and does not contain legal advice. Lawcraft Advocates is not liable for any consequence of any action taken by the user relying on material/information provided on this website. Receipt of information from this site does not create an advocate-client relationship.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <p className="text-xs text-slate-500 font-light tracking-wide">
                            &copy; {currentYear} {firmName}. All rights reserved.
                        </p>
                    </div>
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;
