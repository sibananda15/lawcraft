import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/data/siteConfig";
import { practiceAreas } from "@/data/practiceAreas";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";

export default function SuccessionLawPage() {
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

            <Breadcrumb currentPageTitle="Succession & Inheritance Law" />

            <main>
                {/* 1. Hero Section */}
                <section className="bg-stone-50 py-20 md:py-28 border-b border-stone-200">
                    <Container>
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Succession & Inheritance Law Advocates in India
                            </h1>
                            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                                Ensuring the smooth transfer of assets and wealth through expert drafting of Wills and succession litigation.
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
                                Securing Your Legacy and Family Harmony
                            </h2>
                            <div className="prose prose-lg mx-auto text-gray-600 leading-relaxed">
                                <p className="mb-6">
                                    Inheritance issues can often tear families apart. Whether it is challenging a fabricated Will or obtaining a Succession Certificate to claim bank assets, the legal procedures can be tedious and prolonged. Proper estate planning is essential to prevent such disputes.
                                </p>
                                <p>
                                    At Lawcraft Advocates, we guide you through the intricacies of Indian Succession Laws. We assist in drafting clear, legally binding Wills and represent heirs in court to claim their rightful share of ancestral and self-acquired property.
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
                                    "Drafting & Registration of Wills",
                                    "Probate of Wills",
                                    "Succession Certificates (Moveable Assets)",
                                    "Letter of Administration",
                                    "Partition Suits for Ancestral Property",
                                    "Challenging Validity of Wills",
                                    "Relinquishment & Gift Deeds",
                                    "Family Settlement Agreements"
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
                                        title: "Attention to Detail",
                                        desc: "We ensure every document is error-free to prevent future legal challenges.",
                                    },
                                    {
                                        title: "Sensitive Handling",
                                        desc: "Succession matters are family matters; we treat them with the necessary sensitivity.",
                                    },
                                    {
                                        title: "Cross-Jurisdiction",
                                        desc: "We handle complex estate matters involving assets across multiple cities and states.",
                                    },
                                    {
                                        title: "Litigation Strength",
                                        desc: "If a Will is contested, our litigation team is prepared to defend your rights vigorously.",
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
                                    { step: "01", title: "Asset Assessment", desc: "Understanding the estate and family structure." },
                                    { step: "02", title: "Strategy Application", desc: "Filing for Probate, Succession Cert, or Partition." },
                                    { step: "03", title: "Court Proceedings", desc: "Representing clients in hearings and evidence." },
                                    { step: "04", title: "Final Order", desc: "Obtaining the grant or decree from the court." },
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
                                Courts & Jurisdictions We Practice In
                            </h2>
                            <p className="text-gray-600 mb-10">
                                We represent clients effectively across the judicial hierarchy.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                {[
                                    "District Courts (Civil)",
                                    "High Courts (Testamentary Jurisdiction)",
                                    "Mediation Centres",
                                    "Supreme Court of India",
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

                {/* 7. Cities We Serve */}
                <section className="py-20 bg-stone-50 border-b border-stone-200">
                    <Container>
                        <div className="max-w-6xl mx-auto">
                            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8 text-center">
                                Cities We Serve
                            </h2>
                            <p className="text-gray-600 text-lg mb-12 text-center leading-relaxed">
                                Lawcraft Advocates represents clients across major Indian metro cities, Delhi NCR, and key regions of Uttar Pradesh, handling matters based on jurisdictional requirements and court procedures.
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
                                    Clients searching for an experienced Succession & Inheritance Law lawyer in cities such as Delhi, Mumbai, Bengaluru, Lucknow, Prayagraj, or Kanpur approach Lawcraft Advocates for structured legal advice and court-focused representation.
                                </p>
                                <p className="text-gray-500 text-sm italic">
                                    *Representation in these cities is subject to case jurisdiction and professional engagement terms.
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
                                Need Legal Assistance with Wills or Inheritance?
                            </h2>
                            <p className="text-xl text-gray-600 mb-10">
                                Get sound legal advice today. No confusion, just solutions.
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
