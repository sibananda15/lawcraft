import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { siteConfig } from "@/data/siteConfig";
import { practiceAreas } from "@/data/practiceAreas";
import Link from "next/link";

export default function ContactPage() {
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

            <Breadcrumb currentPageTitle="Contact Us" />

            <main>
                {/* 1. Hero Section */}
                <section className="bg-stone-50 py-16 md:py-20 text-center border-b border-stone-200">
                    <Container>
                        <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Contact Lawcraft Advocates
                        </h1>
                        <p className="font-serif text-xl text-gray-600">
                            Clear, responsible, and experienced legal guidance.
                        </p>
                    </Container>
                </section>

                {/* 2. Primary Action Section (Card Layout - Simplified) */}
                <section className="py-12 bg-white -mt-8 relative z-10">
                    <Container>
                        <div className="flex justify-center max-w-4xl mx-auto">
                            {/* Talk to Us Card - Centered */}
                            <div className="bg-white p-8 border border-gray-200 rounded-sm shadow-sm hover:shadow-md transition-shadow max-w-xl w-full text-center">
                                <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                                    Talk to Us
                                </h2>
                                <p className="text-gray-600 mb-6">
                                    Ideally suited for urgent inquiries or improving clarity on complex matters.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a
                                        href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                                        className="inline-flex items-center justify-center px-8 py-3 bg-gray-900 text-white font-medium rounded-sm hover:bg-gray-800 transition-colors"
                                    >
                                        Call Now
                                    </a>
                                    {siteConfig.whatsapp && (
                                        <a
                                            href={`https://wa.me/${siteConfig.whatsapp}`}
                                            className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-gray-900 font-medium rounded-sm hover:bg-gray-50 transition-colors"
                                        >
                                            WhatsApp
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* 3. Contact Information (Structured Blocks) */}
                <section className="py-16 bg-white border-t border-gray-100">
                    <Container>
                        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                            <div className="md:col-span-1">
                                <h3 className="font-bold text-gray-900 mb-2 uppercase text-xs tracking-wider">Office</h3>
                                <p className="text-gray-700">B-83, Sector 72, Noida, Uttar Pradesh, India</p>
                            </div>
                            <div className="md:col-span-1">
                                <h3 className="font-bold text-gray-900 mb-2 uppercase text-xs tracking-wider">Phone</h3>
                                <p className="text-gray-700">
                                    <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="hover:underline">
                                        {siteConfig.phone}
                                    </a>
                                </p>
                            </div>
                            <div className="md:col-span-1">
                                <h3 className="font-bold text-gray-900 mb-2 uppercase text-xs tracking-wider">Email</h3>
                                <p className="text-gray-700">contact@lawcraft.in</p>
                            </div>
                            <div className="md:col-span-1">
                                <h3 className="font-bold text-gray-900 mb-2 uppercase text-xs tracking-wider">Hours</h3>
                                <p className="text-gray-700">Mon - Sat: 10:00 AM - 7:00 PM</p>
                            </div>
                        </div>
                    </Container>
                </section>

                <hr className="border-gray-100" />

                {/* 4. Consultation Process (Short Steps) */}
                <section className="py-16 bg-white">
                    <Container>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-8">
                                How We Work
                            </h2>
                            <div className="grid md:grid-cols-4 gap-6">
                                {[
                                    { step: "01", text: "Initial Discussion to identify key issues" },
                                    { step: "02", text: "Preliminary Review of facts & documents" },
                                    { step: "03", text: "Strategic Guidance on legal options" },
                                    { step: "04", text: "Clear Scope & Professional Fees" }
                                ].map((item) => (
                                    <div key={item.step} className="border-l-2 border-gray-900 pl-4 py-2">
                                        <span className="block text-gray-400 font-bold text-sm mb-1">{item.step}</span>
                                        <p className="text-gray-800 font-medium leading-snug">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Container>
                </section>

                {/* 5. Geographic Coverage (Inline List) */}
                <section className="py-16 bg-stone-50">
                    <Container>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                                Geographic Reach
                            </h2>
                            <p className="text-gray-600 mb-6">
                                We advise and represent clients across major jurisdictions including:
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    "Delhi NCR", "Mumbai", "Bengaluru", "Chennai",
                                    "Hyderabad", "Kolkata", "Pune", "Ahmedabad",
                                    "Uttar Pradesh (Major Cities)"
                                ].map((city) => (
                                    <span key={city} className="bg-white border border-gray-200 px-4 py-2 text-gray-700 text-sm rounded-full">
                                        {city}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Closing Note (Simplified) */}
                <section className="py-16 bg-stone-100 text-center border-t border-stone-200">
                    <Container>
                        <p className="text-gray-600 max-w-xl mx-auto mb-6">
                            We encourage responsible communication. If you require experienced legal guidance, we are here to assist.
                        </p>
                        <Link href="/" className="text-gray-900 font-medium underline hover:text-gray-600">
                            Return to Home
                        </Link>
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
