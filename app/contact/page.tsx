"use client";

import React, { useState } from "react";
import Container from "@/components/ui/Container";
import ConsultationModal from "@/components/ui/ConsultationModal";

const STEPS = [
    {
        num: "01",
        title: "Initial Consultation",
        desc: "A focused discussion to understand your situation, identify key issues, and establish clear priorities.",
    },
    {
        num: "02",
        title: "Case Assessment",
        desc: "Thorough review of facts, documents, and applicable law to map the strongest available legal position.",
    },
    {
        num: "03",
        title: "Legal Strategy",
        desc: "A clear, realistic roadmap of your options, timelines, and what outcome you can reasonably expect.",
    },
    {
        num: "04",
        title: "Engagement & Fees",
        desc: "Transparent scope of work and professional fees — no vague estimates, no hidden charges.",
    },
];

const CITIES = [
    "Delhi NCR",
    "Mumbai",
    "Bengaluru",
    "Chennai",
    "Hyderabad",
    "Kolkata",
    "Pune",
    "Ahmedabad",
    "Uttar Pradesh Courts",
];

function ContactIcon({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-8 h-8 rounded-full bg-[#F7F4EF] flex items-center justify-center shrink-0">
            {children}
        </div>
    );
}

export default function ContactPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <main>
            {/* ── SECTION 1 — HERO ── */}
            <section className="bg-[#0f1f2e] py-20">
                <Container>
                    <div className="text-center max-w-2xl mx-auto">
                        <p className="text-[#B8963E] text-xs tracking-[4px] uppercase">
                            Contact Us
                        </p>
                        <div className="w-8 h-px bg-[#B8963E] mx-auto mt-3 mb-6" />
                        <h1 className="font-serif text-4xl md:text-5xl text-white font-normal leading-tight">
                            Contact Lawcraft Advocates
                        </h1>
                        <p className="text-white/50 text-lg mt-4">
                            Direct access to senior counsel — no intermediaries, no delays.
                        </p>
                    </div>
                </Container>
            </section>

            {/* ── SECTION 2 — MAIN CONTENT ── */}
            <section className="bg-[#F7F4EF] py-16 lg:py-24">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-16">
                    {/* LEFT COLUMN */}
                    <div className="lg:col-span-3">
                        {/* Part A — How We Work */}
                        <p className="text-[#B8963E] text-xs tracking-[4px] uppercase">
                            Our Process
                        </p>
                        <div className="w-8 h-px bg-[#B8963E] mt-3 mb-6" />
                        <h2 className="font-serif text-3xl text-[#0f1f2e] font-normal mb-12">
                            A Structured Approach to Every Matter
                        </h2>

                        <div className="space-y-0">
                            {STEPS.map((step, i) => (
                                <div key={step.num} className="flex gap-6">
                                    <span className="font-serif text-6xl text-[#B8963E]/15 font-normal leading-none w-16 shrink-0 select-none">
                                        {step.num}
                                    </span>
                                    <div
                                        className={`border-l border-[#B8963E]/20 pl-6 ${
                                            i < STEPS.length - 1 ? "pb-10" : "pb-0"
                                        }`}
                                    >
                                        <h3 className="font-serif text-xl text-[#0f1f2e] font-normal mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 leading-relaxed max-w-md">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Part B — Office Location */}
                        <div className="mt-16">
                            <p className="text-[#B8963E] text-xs tracking-[4px] uppercase">
                                Find Us
                            </p>
                            <div className="w-8 h-px bg-[#B8963E] mt-3 mb-6" />
                            <h2 className="font-serif text-2xl text-[#0f1f2e] font-normal mb-6">
                                Principal Office
                            </h2>

                            <iframe
                                src="https://maps.google.com/maps?ll=28.58083,77.379365&z=15&t=m&hl=en-US&gl=US&mapclient=embed&q=28.580830,+77.379365@28.5808296,77.3793651&output=embed"
                                width="100%"
                                height="320"
                                style={{ border: 0, borderRadius: "12px" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />

                            <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                                <p className="text-sm text-gray-500">
                                    B-83, Sector 72, Noida, Uttar Pradesh
                                </p>
                                <a
                                    href="https://www.google.com/maps/dir/?api=1&destination=28.5808296,77.3793651"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#B8963E] text-xs tracking-[2px] uppercase hover:underline font-medium"
                                >
                                    Get Directions →
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="lg:col-span-2">
                        <div className="sticky top-24 bg-white rounded-2xl overflow-hidden border border-gray-100">
                            {/* Top band */}
                            <div className="bg-[#0f1f2e] px-8 py-7">
                                <p className="font-serif text-xl text-white font-normal">
                                    Require Legal Assistance?
                                </p>
                                <div className="w-8 h-px bg-[#B8963E] mt-3 mb-3" />
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                    <span className="text-white/50 text-xs tracking-wide">
                                        Available for consultation today
                                    </span>
                                </div>
                            </div>

                            {/* Contact details */}
                            <div className="px-8 py-6 space-y-6">
                                {/* Office */}
                                <div className="flex gap-4">
                                    <ContactIcon>
                                        <svg className="w-3.5 h-3.5 text-[#B8963E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </ContactIcon>
                                    <div>
                                        <p className="text-[10px] tracking-[2px] uppercase text-gray-400">
                                            Principal Office
                                        </p>
                                        <p className="text-sm text-[#0f1f2e] font-medium mt-0.5">
                                            B-83, Sector 72, Noida, Uttar Pradesh
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex gap-4">
                                    <ContactIcon>
                                        <svg className="w-3.5 h-3.5 text-[#B8963E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </ContactIcon>
                                    <div>
                                        <p className="text-[10px] tracking-[2px] uppercase text-gray-400">
                                            Direct Line
                                        </p>
                                        <a
                                            href="tel:+919810053761"
                                            className="font-serif text-lg text-[#0f1f2e] hover:text-[#B8963E] transition-colors mt-0.5 block"
                                        >
                                            +91 9810053761
                                        </a>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex gap-4">
                                    <ContactIcon>
                                        <svg className="w-3.5 h-3.5 text-[#B8963E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </ContactIcon>
                                    <div>
                                        <p className="text-[10px] tracking-[2px] uppercase text-gray-400">
                                            Email
                                        </p>
                                        <a
                                            href="mailto:contact@lawcraft.in"
                                            className="text-sm text-[#0f1f2e] font-medium hover:text-[#B8963E] transition-colors mt-0.5 block"
                                        >
                                            contact@lawcraft.in
                                        </a>
                                    </div>
                                </div>

                                {/* Hours */}
                                <div className="flex gap-4">
                                    <ContactIcon>
                                        <svg className="w-3.5 h-3.5 text-[#B8963E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </ContactIcon>
                                    <div>
                                        <p className="text-[10px] tracking-[2px] uppercase text-gray-400">
                                            Office Hours
                                        </p>
                                        <p className="text-sm text-[#0f1f2e] font-medium mt-0.5">
                                            Mon – Sat: 10:00 AM – 7:00 PM
                                        </p>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="w-full h-px bg-gray-100 my-2" />
                            </div>

                            {/* Buttons */}
                            <div className="px-8 pb-8 space-y-3">
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="w-full bg-[#0f1f2e] text-white py-3.5 rounded-lg text-xs tracking-[2px] uppercase hover:bg-[#1a3147] transition-colors"
                                >
                                    Schedule Consultation
                                </button>
                                <a
                                    href="https://wa.me/919810053761"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full block text-center border border-[#B8963E] text-[#B8963E] py-3.5 rounded-lg text-xs tracking-[2px] uppercase hover:bg-[#B8963E] hover:text-white transition-colors"
                                >
                                    WhatsApp Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 3 — GEOGRAPHIC REACH ── */}
            <section className="bg-white py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <p className="text-[#B8963E] text-xs tracking-[4px] uppercase">
                        Where We Practice
                    </p>
                    <div className="w-8 h-px bg-[#B8963E] mx-auto mt-3 mb-5" />
                    <h2 className="font-serif text-3xl text-[#0f1f2e] font-normal mb-3">
                        Geographic Reach
                    </h2>
                    <p className="text-gray-400 text-sm mb-10">
                        Representing clients across major courts and jurisdictions in India.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {CITIES.map((city) => (
                            <span
                                key={city}
                                className="border border-gray-200 rounded-full px-5 py-2 text-sm text-gray-500 hover:border-[#B8963E] hover:text-[#B8963E] transition cursor-default"
                            >
                                {city}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </main>
    );
}
