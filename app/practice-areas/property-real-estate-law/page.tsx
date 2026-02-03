import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/data/siteConfig";
import { practiceAreas } from "@/data/practiceAreas";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";

export default function PropertyLawPage() {
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

            <Breadcrumb currentPageTitle="Property & Real Estate Law" />

            <main>
                {/* 1. Hero Section */}
                <section className="bg-stone-50 py-20 md:py-28 border-b border-stone-200">
                    <Container>
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Property & Real Estate Law Advocates in India
                            </h1>
                            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                                Comprehensive legal solutions for property disputes, title verification, and real estate litigation across India.
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
                                Protecting Your Property Rights
                            </h2>
                            <div className="prose prose-lg mx-auto text-gray-600 leading-relaxed">
                                <p className="mb-6">
                                    Property transactions and disputes are among the most complex legal matters individuals and businesses face. Whether you are buying a new home, dealing with a builder delay, or facing an illegal possession issue, having a skilled legal advocate is essential to secure your assets.
                                </p>
                                <p>
                                    At Lawcraft Advocates, we simplify property law for our clients. We move beyond complex legal jargon to provide clear, actionable advice. Our goal is to ensure your property titles are clean, your agreements are solid, and your disputes are resolved effectively in courts across India.
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
                                    "Property title verification & due diligence",
                                    "Sale deed drafting & registration support",
                                    "Builder–buyer disputes (RERA & NCDRC)",
                                    "Partition suites & family property settlements",
                                    "Illegal possession & recovery of property",
                                    "Property injunctions & stay orders",
                                    "Tenant eviction & rent disputes",
                                    "Real estate litigation in Civil & High Courts",
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
                                        title: "Experienced in Real Estate",
                                        desc: "Deep understanding of local property laws, transfer of property acts, and court procedures.",
                                    },
                                    {
                                        title: "Practical Legal Advice",
                                        desc: "We focus on solutions that work in the real world, not just theoretical legal opinions.",
                                    },
                                    {
                                        title: "Transparent & Ethical",
                                        desc: "Honest assessment of your case strength, clear fee structure, and no false promises.",
                                    },
                                    {
                                        title: "Client-Centric Approach",
                                        desc: "Direct access to your lawyer with regular updates on the status of your case.",
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
                                    { step: "01", title: "Initial Consultation", desc: "We listen to your issue and review documents." },
                                    { step: "02", title: "Strategy Assessment", desc: "We plan the best legal course of action." },
                                    { step: "03", title: "Legal Action", desc: "Filing suits, sending notices, or representation." },
                                    { step: "04", title: "Resolution", desc: "Aiming for the favorable outcome you deserve." },
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
                                Courts We Practice In
                            </h2>
                            <p className="text-gray-600 mb-10">
                                We represent clients effectively across the judicial hierarchy.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                {[
                                    "District Courts (Civil)",
                                    "RERA Tribunals",
                                    "Consumer Forums",
                                    "High Courts",
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

                {/* 7. Cities We Serve (SEO Section) */}
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
                                    Clients searching for an experienced Property & Real Estate Law lawyer in cities such as Delhi, Mumbai, Bengaluru, Lucknow, Prayagraj, or Kanpur approach Lawcraft Advocates for structured legal advice and court-focused representation.
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
                                Need Legal Assistance with Your Property?
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
