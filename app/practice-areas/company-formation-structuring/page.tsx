import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/data/siteConfig";
import { practiceAreas } from "@/data/practiceAreas";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";

export default function CompanyFormationPage() {
    return (
        <>
            <Header
                logoText={siteConfig.firmName}
                phone={siteConfig.phone}
                whatsapp={siteConfig.whatsapp}
                navLinks={[
                    { label: "Home", href: "/" },
                    { label: "About", href: "/about" },
                    { label: "Practice Areas", href: "/#practice-areas" },
                    { label: "Contact", href: "/contact" },
                ]}
            />

            <Breadcrumb currentPageTitle="Company Formation & Structuring" />

            <main>
                {/* 1. Hero Section */}
                <section className="bg-stone-50 py-20 md:py-28 border-b border-stone-200">
                    <Container>
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Company Formation & Structuring Lawyers in India
                            </h1>
                            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                                Strategic legal guidance for incorporating businesses and establishing robust corporate structures in India.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                                    className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white text-lg font-medium rounded-sm hover:bg-gray-800 transition-colors"
                                >
                                    Call Now
                                </a>
                                <a
                                    href={siteConfig.whatsapp}
                                    className="inline-flex items-center justify-center px-8 py-4 bg-white border border-gray-300 text-gray-900 text-lg font-medium rounded-sm hover:bg-gray-50 transition-colors"
                                >
                                    WhatsApp Consultation
                                </a>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* 2. Overview Section */}
                <section className="py-20 bg-white">
                    <Container>
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8">
                                Strategic Legal Support in Company Formation
                            </h2>
                            <div className="prose prose-lg mx-auto text-gray-600 leading-relaxed">
                                <p className="mb-6">
                                    Establishing a business entity is the critical first step in any commercial venture. Choosing the right structure—whether a Private Limited Company, LLP, or Partnership—shapes your tax liabilities, compliance burden, and ability to raise capital.
                                </p>
                                <p>
                                    At Lawcraft Advocates, we guide entrepreneurs and foreign investors through the complexities of Indian corporate law. We ensure that your business foundation is legally sound, allowing you to focus on growth while we handle the regulatory framework.
                                </p>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* 3. Our Legal Services Include */}
                <section className="py-20 bg-stone-50">
                    <Container>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-12 text-center">
                                Our Legal Services Include
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                {[
                                    "Private Limited & Public Company incorporation",
                                    "LLP (Limited Liability Partnership) registration",
                                    "Section 8 Company formation for non-profits",
                                    "Drafting Articles & Memorandum of Association",
                                    "Partnership deed drafting & registration",
                                    "Shareholders' agreements & shareholding structure",
                                    "Director identification number (DIN) services",
                                    "Foreign subsidiary & branch office setup",
                                ].map((service, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="mt-1.5 mr-4 flex-shrink-0 w-2 h-2 rounded-full bg-gray-900" />
                                        <span className="text-lg text-gray-700">{service}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Container>
                </section>

                {/* 4. Why Choose Lawcraft Advocates */}
                <section className="py-20 bg-white">
                    <Container>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-12 text-center">
                                Why Choose Lawcraft Advocates?
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {[
                                    {
                                        title: "Corporate Law Experts",
                                        desc: "Deep knowledge of the Companies Act, 2013 and allied commercial regulations.",
                                    },
                                    {
                                        title: "Business-Centric Advice",
                                        desc: "We recommend structures that align with your long-term business goals and funding plans.",
                                    },
                                    {
                                        title: "Risk Mitigation",
                                        desc: "Proactive compliance checks to prevent future legal liabilities for directors and founders.",
                                    },
                                    {
                                        title: "End-to-End Execution",
                                        desc: "From name reservation to final incorporation certificate, we handle every step seamlessly.",
                                    },
                                ].map((item, index) => (
                                    <div key={index} className="bg-stone-50 p-8 border border-stone-100 rounded-sm">
                                        <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Container>
                </section>

                {/* 5. Our Process */}
                <section className="py-20 bg-gray-900 text-white">
                    <Container>
                        <div className="max-w-5xl mx-auto">
                            <h2 className="font-serif text-3xl font-bold mb-16 text-center text-white">
                                Our Process
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                {[
                                    { step: "01", title: "Goal Assessment", desc: "Understanding your business model and requirements." },
                                    { step: "02", title: "Structure Strategy", desc: "Advising on the optimal legal entity type." },
                                    { step: "03", title: "Documentation", desc: "Preparing and filing necessary forms with ROC." },
                                    { step: "04", title: "Incorporation", desc: "Obtaining the Certificate of Incorporation and PAN/TAN." },
                                ].map((item) => (
                                    <div key={item.step} className="relative text-center md:text-left">
                                        <div className="text-6xl font-serif font-bold text-gray-800 mb-4 opacity-50">
                                            {item.step}
                                        </div>
                                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Container>
                </section>

                {/* 6. Courts & Jurisdiction */}
                <section className="py-20 bg-white border-b border-gray-100">
                    <Container>
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">
                                Authorities We Deal With
                            </h2>
                            <p className="text-gray-600 mb-10">
                                We facilitate seamless navigation through various regulatory bodies.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                {[
                                    "Registrar of Companies (ROC)",
                                    "Ministry of Corporate Affairs (MCA)",
                                    "Reserve Bank of India (RBI)",
                                    "Regional Directors (RD)",
                                    "NCLT (for specific approvals)",
                                ].map((court, index) => (
                                    <span
                                        key={index}
                                        className="px-6 py-3 bg-stone-50 text-gray-700 border border-stone-200 rounded-full text-base font-medium"
                                    >
                                        {court}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Container>
                </section>

                {/* 7. Cities We Serve (SEO Section) */}
                <section className="py-20 bg-stone-50 border-b border-stone-200">
                    <Container>
                        <div className="max-w-6xl mx-auto">
                            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8 text-center">
                                Cities We Serve
                            </h2>
                            <p className="text-gray-600 text-lg mb-12 text-center leading-relaxed">
                                Lawcraft Advocates advises businesses across major Indian metro cities, Delhi NCR, and key regions of Uttar Pradesh, handling matters based on jurisdictional requirements.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                                {/* Major Metro Cities */}
                                <div>
                                    <h3 className="font-serif text-xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
                                        Major Metro Cities
                                    </h3>
                                    <ul className="space-y-2">
                                        {["Delhi", "Mumbai", "Bengaluru", "Chennai", "Hyderabad", "Kolkata", "Pune", "Ahmedabad"].map((city) => (
                                            <li key={city} className="flex items-center text-gray-700">
                                                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-3" />
                                                {city}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Delhi NCR */}
                                <div>
                                    <h3 className="font-serif text-xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
                                        Delhi NCR
                                    </h3>
                                    <ul className="space-y-2">
                                        {["Noida", "Greater Noida", "Ghaziabad", "Gurugram", "Faridabad"].map((city) => (
                                            <li key={city} className="flex items-center text-gray-700">
                                                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-3" />
                                                {city}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Uttar Pradesh */}
                                <div>
                                    <h3 className="font-serif text-xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
                                        Uttar Pradesh
                                    </h3>
                                    <ul className="grid grid-cols-1 gap-y-2">
                                        {[
                                            "Lucknow", "Prayagraj (Allahabad)", "Kanpur", "Varanasi",
                                            "Agra", "Meerut", "Bareilly", "Aligarh",
                                            "Moradabad", "Jhansi", "Gorakhpur", "Ayodhya"
                                        ].map((city) => (
                                            <li key={city} className="flex items-center text-gray-700">
                                                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-3" />
                                                {city}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-12 text-center max-w-4xl mx-auto">
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Entrepreneurs searching for Company Formation lawyers in cities such as Delhi, Mumbai, Bengaluru, Lucknow, Prayagraj, or Kanpur approach Lawcraft Advocates for streamlined incorporation services.
                                </p>
                                <p className="text-gray-500 text-sm italic">
                                    *Services in these cities are subject to regulatory jurisdiction and professional engagement terms.
                                </p>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* 8. Call to Action Section */}
                <section className="py-24 bg-white">
                    <Container>
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Need Legal Support in Company Formation?
                            </h2>
                            <p className="text-xl text-gray-600 mb-10">
                                Start your business on the right legal footing. Connect with us today.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white text-lg font-medium rounded-sm hover:bg-gray-800 transition-colors"
                                >
                                    Schedule a Consultation
                                </Link>
                                <a
                                    href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                                    className="inline-flex items-center justify-center px-8 py-4 bg-white border border-gray-300 text-gray-900 text-lg font-medium rounded-sm hover:bg-gray-50 transition-colors"
                                >
                                    Call Now
                                </a>
                            </div>
                        </div>
                    </Container>
                </section>
            </main>

            <Footer
                firmName={siteConfig.firmName}
                address="B-83, Sector 72, Noida, Uttar Pradesh"
                phone={siteConfig.phone}
                practiceLinks={practiceAreas.map((area) => ({
                    label: area.title,
                    href: area.href,
                }))}
            />
        </>
    );
}
