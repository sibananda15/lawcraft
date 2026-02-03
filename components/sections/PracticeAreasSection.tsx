import React from "react";
import Container from "../ui/Container";
import Link from "next/link";

const practiceCategories = [
    {
        title: "CIVIL LAW",
        items: [
            { label: "Property & Real Estate Law", href: "/practice-areas/property-real-estate-law" },
            { label: "Family & Matrimonial Law", href: "/practice-areas/family-matrimonial-law" },
            { label: "Contract Law", href: "/practice-areas/contract-law" },
            { label: "Consumer Protection Law", href: "/practice-areas/consumer-protection-law" },
            { label: "Recovery & Money Suits", href: "/practice-areas/recovery-money-suits" },
            { label: "Landlord–Tenant Law", href: "/practice-areas/landlord-tenant-law" },
            { label: "Succession & Inheritance Law", href: "/practice-areas/succession-inheritance-law" },
            { label: "Civil Litigation & Appeals", href: "/practice-areas/civil-litigation-appeals" },
        ],
    },
    {
        title: "CRIMINAL LAW",
        items: [
            { label: "FIR & Police Proceedings", href: "/practice-areas/fir-police-proceedings" },
            { label: "Bail & Anticipatory Bail", href: "/practice-areas/bail-anticipatory-bail" },
            { label: "Trial & Criminal Defense", href: "/practice-areas/trial-criminal-defense" },
            { label: "White Collar Crimes", href: "/practice-areas/white-collar-crimes" },
            { label: "Cyber Crimes", href: "/practice-areas/cyber-crimes" },
            { label: "Economic Offences", href: "/practice-areas/economic-offences" },
            { label: "Domestic Violence & Dowry Cases", href: "/practice-areas/domestic-violence-dowry-cases" },
            { label: "Criminal Appeals & Revisions", href: "/practice-areas/criminal-appeals-revisions" },
        ],
    },
    {
        title: "CORPORATE / COMMERCIAL LAW",
        items: [
            { label: "Company Formation & Structuring", href: "/practice-areas/company-formation-structuring" },
            { label: "Corporate Compliance & Governance", href: "/practice-areas/corporate-compliance-governance" },
            { label: "Commercial Contracts & Agreements", href: "/practice-areas/commercial-contracts-agreements" },
            { label: "Employment & Labour Law", href: "/practice-areas/employment-labour-law" },
            { label: "Mergers & Acquisitions", href: "/practice-areas/mergers-acquisitions" },
            { label: "Insolvency & Bankruptcy (IBC)", href: "/practice-areas/insolvency-bankruptcy-ibc" },
            { label: "Arbitration & Commercial Litigation", href: "/practice-areas/arbitration-commercial-litigation" },
            { label: "Startup & Investment Advisory", href: "/practice-areas/startup-investment-advisory" },
        ],
    },
];

const PracticeAreasSection = () => {
    return (
        <section className="py-24 bg-white" id="practice-areas">
            <Container>
                {/* Section Heading */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Practice Areas
                    </h2>
                    <div className="w-24 h-1 bg-gray-200 mx-auto rounded-full"></div>
                </div>

                {/* 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                    {practiceCategories.map((category) => (
                        <div key={category.title} className="flex flex-col">
                            <h3 className="text-xl font-serif font-bold text-gray-900 mb-8 border-b pb-4 border-gray-200">
                                {category.title}
                            </h3>
                            <ul className="space-y-4">
                                {category.items.map((item) => (
                                    <li key={item.label}>
                                        <Link
                                            href={item.href}
                                            className="text-gray-600 hover:text-gray-900 text-lg transition-colors border-b border-transparent hover:border-gray-800 pb-0.5 inline-block"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default PracticeAreasSection;
