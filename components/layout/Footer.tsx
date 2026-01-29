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
    practiceLinks: Link[];
}

const Footer = ({
    firmName,
    address,
    phone,
    email,
    practiceLinks,
}: FooterProps) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Firm Info */}
                    <div>
                        <h3 className="text-xl font-serif font-bold text-white mb-6 tracking-wide">
                            {firmName}
                        </h3>
                        <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                            <p className="whitespace-pre-line">{address}</p>
                            <div className="flex flex-col gap-1">
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
                    </div>

                    {/* Practice Areas */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
                            Practice Areas
                        </h4>
                        <ul className="space-y-3">
                            {practiceLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-gray-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Helpful Links / Placeholder for now */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
                            Legal
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Disclaimer & Copyright */}
                <div className="border-t border-gray-800 pt-8 mt-8">
                    <p className="text-xs text-gray-500 mb-4 leading-relaxed text-justify">
                        <strong>Disclaimer:</strong> The user wishes to gain more information about Lawcraft Advocates for his/her own information and use. The information provided herein is for general guidance only and does not contain legal advice. Lawcraft advocates is not liable for any consequence of any action taken by the user relying on material / information provided on this website.
                    </p>
                    <p className="text-xs text-center text-gray-600">
                        &copy; {currentYear} {firmName}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
