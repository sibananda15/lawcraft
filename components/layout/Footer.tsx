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
        { label: "Criminal Defence", href: "/practice/criminal-defense" },
        { label: "Family & Matrimonial", href: "/practice/family-law" },
        { label: "Property Litigation", href: "/practice/property-real-estate-disputes" },
        { label: "Corporate & Commercial", href: "/practice/corporate-commercial-law" },
    ];

    // Splitting address string natively into two lines if it contains a comma
    const addressParts = address.split(', ');

    return (
        <footer className="bg-[#0B1C2E] text-slate-300 pt-[80px] pb-8 border-t-[3px] border-t-[#C5A46D]">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Authority CTA Row (Moved to top of footer for hierarchy) */}
                <div className="border-b border-[rgba(255,255,255,0.06)] pb-[80px] mb-[80px] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    <div className="text-left max-w-2xl">
                        <h2 className="text-white font-serif text-[28px] md:text-[32px] lg:text-[36px] mb-4">
                            Speak Directly With an Advocate
                        </h2>
                        <p className="text-[#a1b0c0] text-[16px] leading-[1.7]">
                            Secure expert legal counsel tailored to your specific situation. We provide clear, strategic representation to protect your interests and drive results.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
                        <a
                            href={`tel:${phone.replace(/\s/g, '')}`}
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0B1C2E] font-sans text-[14px] font-semibold uppercase tracking-[0.15em] hover:bg-[#C5A46D] hover:text-white transition-all duration-300 rounded-sm"
                        >
                            Schedule Consultation
                        </a>
                        {whatsapp && (
                            <a
                                href={`https://wa.me/${whatsapp}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-8 py-4 border border-[rgba(255,255,255,0.2)] text-white font-sans text-[14px] font-semibold uppercase tracking-[0.15em] hover:border-[#C5A46D] hover:text-gold transition-all duration-300 rounded-sm"
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
                            <h3 className="text-[28px] md:text-[32px] font-serif text-white tracking-wide mb-2">
                                {firmName}
                            </h3>
                            <p className="text-[12px] text-[#C5A46D] font-semibold tracking-[0.2em] uppercase">
                                Advocates & Legal Consultants
                            </p>
                        </div>

                        <div className="flex flex-col space-y-6 lg:max-w-sm">
                            <a
                                href="https://www.google.com/maps/place/Law+craft+Advocates/@28.5808296,77.3793651,17z"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Open Lawcraft Advocates location in Google Maps"
                                className="group flex items-start text-[#a1b0c0] text-[16px] leading-[1.8] hover:text-gold hover:cursor-pointer transition-colors duration-300"
                            >
                                <svg className="w-5 h-5 mr-3 mt-1 shrink-0 text-[#C5A46D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <address className="not-italic flex flex-col group-hover:underline underline-offset-4 decoration-[1px]">
                                    {addressParts.map((part, index) => (
                                        <span key={index}>{part}{index < addressParts.length - 1 ? ',' : ''}</span>
                                    ))}
                                </address>
                            </a>

                            {/* Premium Map Preview Card */}
                            <div className="flex flex-col space-y-3">
                                <div className="w-full shadow-lg rounded-[12px] overflow-hidden border border-[rgba(255,255,255,0.06)] bg-[#0B1C2E]/50">
                                    <iframe
                                        src="https://www.google.com/maps?q=28.5808296,77.3793651&z=15&output=embed"
                                        width="100%"
                                        height="250"
                                        style={{ border: 0 }}
                                        allowFullScreen={false}
                                        loading="lazy"
                                    ></iframe>
                                </div>

                                {/* Get Directions Button */}
                                <a
                                    href="https://www.google.com/maps/dir/?api=1&destination=28.5808296,77.3793651"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-[#C5A46D] hover:text-white font-sans text-[13px] font-semibold tracking-wide transition-colors uppercase group w-fit"
                                >
                                    Get Directions 
                                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>

                            <div className="flex flex-col space-y-2 mt-2">
                                <span className="text-[11px] text-[#71869d] uppercase tracking-[0.2em] font-semibold">Direct Line</span>
                                <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-[24px] font-serif text-[#C5A46D] hover:text-white transition-colors">
                                    {phone}
                                </a>
                                {email && (
                                    <a href={`mailto:${email}`} className="text-[16px] text-[#a1b0c0] hover:text-white transition-colors mt-2 block">
                                        {email}
                                    </a>
                                )}
                            </div>
                        </div>

                        <blockquote className="text-[16px] text-[#a1b0c0] italic border-l-[3px] border-[#C5A46D] pl-5 py-2 leading-[1.7] mt-4">
                            "Committed to strategic advocacy and unwavering representation in the pursuit of justice."
                        </blockquote>
                    </div>

                    {/* Middle: Top Practice Areas (Spans 4 columns) */}
                    <div className="md:col-span-6 lg:col-span-4 lg:pl-8">
                        <h4 className="text-[12px] font-semibold text-[#C5A46D] uppercase tracking-[0.2em] mb-8">
                            Key Practice Areas
                        </h4>
                        <ul className="space-y-4">
                            {topPracticeAreas.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-[16px] font-sans text-[#a1b0c0] hover:text-gold transition-colors duration-300 block leading-[1.6]"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Legal Links (Spans 3 columns) */}
                    <div className="md:col-span-6 lg:col-span-3">
                        <h4 className="text-[12px] font-semibold text-[#C5A46D] uppercase tracking-[0.2em] mb-8">
                            Legal
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="/privacy-policy" className="text-[16px] font-sans text-[#a1b0c0] hover:text-gold transition-colors duration-300 block leading-[1.6]">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="/terms-of-service" className="text-[16px] font-sans text-[#a1b0c0] hover:text-gold transition-colors duration-300 block leading-[1.6]">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="/disclaimer" className="text-[16px] font-sans text-[#a1b0c0] hover:text-gold transition-colors duration-300 block leading-[1.6]">
                                    Disclaimer
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section: Disclaimer & Copyright */}
                <div className="border-t border-[rgba(255,255,255,0.06)] pt-10">
                    <p className="text-[11px] text-[#71869d] mb-6 leading-[1.8] text-justify max-w-none">
                        <strong>Disclaimer:</strong> The user wishes to gain more information about Lawcraft Advocates for his/her own information and use. The information provided herein is for general guidance only and does not contain legal advice. Lawcraft Advocates is not liable for any consequence of any action taken by the user relying on material/information provided on this website. Receipt of information from this site does not create an advocate-client relationship.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <p className="text-[12px] text-[#71869d] font-sans tracking-wide">
                            &copy; {currentYear} {firmName}. All rights reserved.
                        </p>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
