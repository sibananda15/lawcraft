"use client";

import React, { useState } from "react";
import Link from "next/link";
import { locations } from "@/data/locations";
import { useParams } from "next/navigation";
import ConsultationModal from "@/components/ui/ConsultationModal";
import Container from "@/components/ui/Container";

export default function CityPage() {
    const params = useParams();
    const location = locations.find((l) => l.slug === params.city);
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!location) return null;

    return (
        <main>
            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LegalService",
                        name: "Lawcraft Advocates",
                        url: `https://lawcraftadvocates.com/lawyers/${location.slug}`,
                        telephone: "+919810053761",
                        email: "contact@lawcraft.in",
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: "B-83, Sector 72",
                            addressLocality: "Noida",
                            addressRegion: "Uttar Pradesh",
                            postalCode: "201301",
                            addressCountry: "IN",
                        },
                        areaServed: location.areaServed,
                        founder: {
                            "@type": "Person",
                            name: "Rajendra Panigrahi",
                            jobTitle: "Senior Advocate",
                            description:
                                "Supreme Court advocate with 20+ years experience",
                        },
                        description: location.metaDescription,
                        priceRange: "$$",
                        openingHours: "Mo-Sa 10:00-19:00",
                    }),
                }}
            />

            {/* ── SECTION 1 — HERO ── */}
            <section className="bg-[#0f1f2e] min-h-[50vh] flex items-center">
                <div className="max-w-4xl mx-auto px-6 py-20 text-center w-full">
                    <p className="text-[#B8963E] text-xs tracking-[4px] uppercase">
                        Lawcraft Advocates &middot; {location.city.toUpperCase()}
                    </p>
                    <div className="w-8 h-px bg-[#B8963E] mx-auto mt-3 mb-6" />
                    <h1 className="font-serif text-4xl md:text-5xl text-white font-normal">
                        {location.headline}
                    </h1>
                    <p className="text-white/60 text-lg mt-4 max-w-2xl mx-auto">
                        {location.subheadline}
                    </p>

                    <div className="mt-8 flex gap-4 justify-center flex-wrap">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-[#B8963E] text-white px-8 py-3.5 text-xs tracking-[2px] uppercase rounded hover:bg-[#9a7d34] transition-colors"
                        >
                            Schedule Consultation
                        </button>
                        <a
                            href="https://wa.me/919810053761"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-white/30 text-white px-8 py-3.5 text-xs tracking-[2px] uppercase rounded hover:bg-white/10 transition-all"
                        >
                            WhatsApp Now
                        </a>
                    </div>

                    {/* Trust strip */}
                    <div className="mt-10 pt-8 border-t border-white/10 flex justify-center gap-8 flex-wrap">
                        {[
                            "Supreme Court Advocate",
                            "20+ Years Experience",
                            location.localCourt,
                        ].map((item) => (
                            <div key={item} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#B8963E]" />
                                <span className="text-white/40 text-xs tracking-wide">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION 2 — ABOUT ── */}
            <section className="bg-[#F7F4EF] py-16 lg:py-24">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Left */}
                    <div className="lg:col-span-2">
                        <p className="text-[#B8963E] text-xs tracking-[4px] uppercase">
                            Serving {location.city.toUpperCase()}
                        </p>
                        <div className="w-8 h-px bg-[#B8963E] mt-3 mb-6" />
                        <h2 className="font-serif text-3xl text-[#0f1f2e] font-normal mb-6">
                            Expert Legal Counsel in {location.city}
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            {location.description1}
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            {location.description2}
                        </p>

                        {/* Court box */}
                        <div className="bg-white rounded-xl p-6 border border-gray-100">
                            <div className="flex items-start gap-3">
                                <span className="text-[#B8963E] text-xl">&#9878;</span>
                                <div>
                                    <p className="font-serif text-lg text-[#0f1f2e] mb-3">
                                        Courts We Appear In
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {location.courtNote}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right — sticky card */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 bg-white rounded-2xl overflow-hidden border border-gray-100">
                            <div className="bg-[#0f1f2e] p-6">
                                <p className="font-serif text-lg text-white">
                                    Advocate Rajendra Panigrahi
                                </p>
                                <div className="w-8 h-px bg-[#B8963E] mt-2 mb-3" />
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                    <span className="text-white/50 text-xs">
                                        Available for consultation
                                    </span>
                                </div>
                            </div>
                            <div className="p-6 space-y-4">
                                {[
                                    "Supreme Court of India",
                                    "Bar Council of Delhi",
                                    "20+ Years Experience",
                                    "Enrolled Advocate",
                                ].map((badge) => (
                                    <span
                                        key={badge}
                                        className="block bg-[#F7F4EF] text-[#B8963E] text-xs px-3 py-1 rounded-full w-fit"
                                    >
                                        {badge}
                                    </span>
                                ))}
                                <div className="w-full h-px bg-gray-100 mt-4" />
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="w-full bg-[#0f1f2e] text-white py-3 text-xs tracking-[2px] uppercase rounded-lg hover:bg-[#1a3147] transition-colors"
                                >
                                    Schedule Consultation in {location.city}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 3 — PRACTICE AREAS ── */}
            <section className="bg-white py-16 lg:py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <p className="text-[#B8963E] text-xs tracking-[4px] uppercase text-center">
                        Practice Areas
                    </p>
                    <div className="w-8 h-px bg-[#B8963E] mx-auto mt-3 mb-5" />
                    <h2 className="font-serif text-3xl text-[#0f1f2e] text-center font-normal mb-3">
                        How We Help Clients in {location.city}
                    </h2>
                    <p className="text-gray-400 text-sm text-center mb-12">
                        Expert representation across all major legal matters.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {location.practiceHighlights.map((ph) => (
                            <Link
                                key={ph.title}
                                href={ph.link}
                                className="border border-gray-100 rounded-xl p-6 hover:border-[#B8963E] transition group"
                            >
                                <span className="text-[#B8963E] text-xl block mb-3">
                                    &#9878;
                                </span>
                                <span className="font-serif text-lg text-[#0f1f2e] group-hover:text-[#B8963E] transition-colors block">
                                    {ph.title}
                                </span>
                                <span className="text-xs text-gray-400 mt-2 group-hover:text-[#B8963E] transition-colors block">
                                    Learn more &rarr;
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION 5 — BOTTOM CTA ── */}
            <section className="bg-[#0f1f2e] py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <p className="text-[#B8963E] text-xs tracking-[4px] uppercase">
                        Get In Touch
                    </p>
                    <div className="w-8 h-px bg-[#B8963E] mx-auto mt-3 mb-6" />
                    <h2 className="font-serif text-3xl text-white font-normal">
                        Require Legal Assistance in {location.city}?
                    </h2>
                    <a
                        href="tel:+919810053761"
                        className="font-serif text-2xl text-[#B8963E] mt-4 block hover:underline"
                    >
                        +91 9810053761
                    </a>
                    <p className="text-white/40 text-xs mt-2">
                        Available Mon&ndash;Sat, 10AM&ndash;7PM
                    </p>
                    <div className="mt-8 flex gap-4 justify-center flex-wrap">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-[#B8963E] text-white px-8 py-3.5 text-xs tracking-[2px] uppercase rounded hover:bg-[#9a7d34] transition-colors"
                        >
                            Schedule Consultation
                        </button>
                        <a
                            href="https://wa.me/919810053761"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-white/30 text-white px-8 py-3.5 text-xs tracking-[2px] uppercase rounded hover:bg-white/10 transition-all"
                        >
                            WhatsApp Now
                        </a>
                    </div>
                </div>
            </section>

            <ConsultationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </main>
    );
}
