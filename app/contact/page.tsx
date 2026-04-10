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
        desc: "Thorough review of facts, documents, and applicable law to map the strongest available position.",
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
    "Uttar Pradesh (Major Cities)",
];

function GoldIcon({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-9 h-9 rounded-lg bg-[#B8963E]/10 flex items-center justify-center shrink-0">
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
                    <div className="max-w-3xl">
                        <p className="text-[#B8963E] text-xs tracking-[4px] uppercase">
                            Contact Us
                        </p>
                        <div className="w-8 h-px bg-[#B8963E] mt-3 mb-6" />
                        <h1 className="font-serif text-4xl md:text-5xl text-white font-normal leading-tight">
                            Contact Lawcraft Advocates
                        </h1>
                        <p className="text-white/60 text-lg mt-4 max-w-xl">
                            Speak directly with an advocate — no junior staff, no call centres.
                        </p>
                    </div>
                </Container>
            </section>

            {/* ── SECTION 2 — MAIN CONTENT ── */}
            <section className="bg-[#F7F4EF] py-16 lg:py-24">
                <Container>
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
                        {/* LEFT COLUMN — 60% */}
                        <div className="w-full lg:w-[60%]">
                            <p className="text-[#B8963E] text-xs font-medium tracking-[3px] uppercase">
                                How We Work
                            </p>
                            <div className="w-8 h-px bg-[#B8963E] mt-3 mb-6" />
                            <h2 className="font-serif text-3xl md:text-4xl text-[#0f1f2e] font-normal mb-12">
                                A Structured Approach to Every Matter
                            </h2>

                            {/* Timeline steps */}
                            <div className="space-y-0">
                                {STEPS.map((step, i) => (
                                    <div key={step.num} className="flex gap-0">
                                        {/* Number column */}
                                        <div className="w-12 shrink-0 flex flex-col items-center">
                                            <span className="font-serif text-5xl text-[#B8963E]/20 font-normal leading-none select-none">
                                                {step.num}
                                            </span>
                                        </div>

                                        {/* Content column with connecting line */}
                                        <div
                                            className={`border-l border-[#B8963E]/30 pl-8 ${
                                                i < STEPS.length - 1 ? "pb-10" : "pb-0"
                                            }`}
                                        >
                                            <h3 className="font-serif text-lg text-[#0f1f2e] mb-1">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 leading-relaxed max-w-md">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT COLUMN — 40% */}
                        <div className="w-full lg:w-[40%]">
                            <div className="sticky top-24 bg-white rounded-2xl border border-gray-100 overflow-hidden">
                                {/* Top strip */}
                                <div className="bg-[#0f1f2e] p-6">
                                    <p className="font-serif text-xl text-white font-normal">
                                        Require Legal Assistance?
                                    </p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#B8963E] animate-pulse" />
                                        <span className="text-white/60 text-xs">
                                            Available for consultation today
                                        </span>
                                    </div>
                                </div>

                                {/* Contact details */}
                                <div className="p-6 space-y-5">
                                    {/* Office */}
                                    <div className="flex items-start gap-3">
                                        <GoldIcon>
                                            <svg className="w-4 h-4 text-[#B8963E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </GoldIcon>
                                        <div>
                                            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1">
                                                Principal Office
                                            </p>
                                            <p className="text-sm text-[#0f1f2e]">
                                                B-83, Sector 72, Noida, Uttar Pradesh
                                            </p>
                                            <a
                                                href="https://www.google.com/maps/dir/?api=1&destination=28.5808296,77.3793651"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#B8963E] text-xs hover:underline mt-1 inline-block"
                                            >
                                                Get Directions →
                                            </a>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-start gap-3">
                                        <GoldIcon>
                                            <svg className="w-4 h-4 text-[#B8963E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </GoldIcon>
                                        <div>
                                            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1">
                                                Direct Line
                                            </p>
                                            <a
                                                href="tel:+919810053761"
                                                className="font-serif text-xl text-[#0f1f2e] hover:text-[#B8963E] transition-colors"
                                            >
                                                +91 9810053761
                                            </a>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-start gap-3">
                                        <GoldIcon>
                                            <svg className="w-4 h-4 text-[#B8963E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </GoldIcon>
                                        <div>
                                            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1">
                                                Email
                                            </p>
                                            <a
                                                href="mailto:contact@lawcraft.in"
                                                className="text-sm text-[#0f1f2e] hover:text-[#B8963E] transition-colors"
                                            >
                                                contact@lawcraft.in
                                            </a>
                                        </div>
                                    </div>

                                    {/* Hours */}
                                    <div className="flex items-start gap-3">
                                        <GoldIcon>
                                            <svg className="w-4 h-4 text-[#B8963E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </GoldIcon>
                                        <div>
                                            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1">
                                                Office Hours
                                            </p>
                                            <p className="text-sm text-[#0f1f2e]">
                                                Monday – Saturday: 10:00 AM – 7:00 PM
                                            </p>
                                        </div>
                                    </div>

                                    {/* Divider */}
                                    <div className="w-full h-px bg-gray-100" />

                                    {/* CTA buttons */}
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="w-full py-3 bg-[#0f1f2e] text-white text-xs font-semibold tracking-[2px] uppercase rounded-lg hover:bg-[#1a3147] transition-colors"
                                    >
                                        Schedule Consultation
                                    </button>
                                    <a
                                        href="https://wa.me/919810053761"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full py-3 border border-[#B8963E] text-[#B8963E] text-xs font-semibold tracking-[2px] uppercase rounded-lg hover:bg-[#B8963E] hover:text-white transition-colors text-center block"
                                    >
                                        WhatsApp Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ── SECTION 3 — GEOGRAPHIC REACH ── */}
            <section className="bg-white py-16 lg:py-24">
                <Container>
                    <div className="max-w-5xl mx-auto">
                        <p className="text-[#B8963E] text-xs font-medium tracking-[3px] uppercase">
                            Jurisdictions
                        </p>
                        <div className="w-8 h-px bg-[#B8963E] mt-3 mb-6" />
                        <h2 className="font-serif text-3xl text-[#0f1f2e] font-normal mb-4">
                            Where We Practise
                        </h2>
                        <p className="text-gray-500 text-sm mb-10 max-w-lg">
                            We advise and represent clients across major jurisdictions in India.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {CITIES.map((city) => (
                                <span
                                    key={city}
                                    className="bg-[#F7F4EF] border border-gray-200 px-5 py-2.5 text-[#0f1f2e] text-sm rounded-full"
                                >
                                    {city}
                                </span>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </main>
    );
}
