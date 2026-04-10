"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";

const FEATURES = [
    {
        title: "Advocate-Led Legal Practice",
        description:
            "A principal-driven practice where every case is strictly overseen by the lead advocate, ensuring absolute consistency and accountability.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
        ),
    },
    {
        title: "Clear Legal Strategy",
        description:
            "Every matter begins with a structured legal assessment. Clients receive realistic options and timelines, free from vague assurances.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
        ),
    },
    {
        title: "Courtroom & Advisory Experience",
        description:
            "Extensive hands-on experience across litigation and negotiations, offering a highly practical understanding of ground realities in court.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
    },
    {
        title: "Transparent Communication",
        description:
            "Documented advice and absolute clarity at every stage — ensuring clients remain fully informed without unnecessary legal jargon.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        ),
    },
];

const sectionReveal = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

export default function WhyChoose() {
    return (
        <motion.section
            className="bg-warm-white py-16 lg:py-24 border-b border-[rgba(11,28,46,0.08)]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            variants={sectionReveal}
        >
            <Container>
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
                    <p className="eyebrow text-gold">
                        The Firm&apos;s Advantage
                    </p>
                    <div className="w-12 h-px bg-gold mx-auto mt-3 mb-6" />
                    <h2 className="font-serif text-[28px] md:text-[32px] lg:text-[36px] font-medium text-[#0B1C2E] mb-6 leading-[1.2]">
                        Why Clients Choose This Practice
                    </h2>
                    <div className="w-[60px] h-[1px] bg-[#C5A46D] mx-auto mb-6"></div>
                    <p className="font-sans text-[16px] text-[#5B6470] leading-[1.7] max-w-2xl mx-auto">
                        Legal representation built on clarity, accountability, and direct involvement.
                    </p>
                </div>

                {/* Grid — staggered cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {FEATURES.map((item, i) => (
                        <motion.div
                            key={item.title}
                            className="group p-10 bg-white border border-[rgba(11,28,46,0.04)] border-t-[3px] border-t-transparent hover:border-t-[#C5A46D] shadow-[0_8px_30px_rgba(11,28,46,0.03)] hover:shadow-[0_20px_60px_rgba(11,28,46,0.06)] transform hover:-translate-y-1 transition-all duration-500 flex flex-col items-start rounded-sm h-full"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
                        >
                            <div className="mb-6 text-[#C5A46D] opacity-80 group-hover:opacity-100 group-hover:scale-110 transform transition-all duration-500">
                                {item.icon}
                            </div>
                            <h3 className="font-serif text-[20px] md:text-[22px] font-medium text-[#0B1C2E] mb-4 group-hover:text-[#C5A46D] transition-colors duration-500">
                                {item.title}
                            </h3>
                            <div className="w-10 h-[1px] bg-[rgba(197,164,109,0.3)] mb-4 group-hover:w-20 group-hover:bg-[#C5A46D] transition-all duration-500"></div>
                            <p className="font-sans text-[16px] text-[#5B6470] leading-[1.7]">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </motion.section>
    );
}
