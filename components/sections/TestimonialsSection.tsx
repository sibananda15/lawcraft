"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
    {
        quote:
            "Mr. Panigrahi handled our property dispute with exceptional clarity. We had a result within 8 months.",
        matter: "Property Dispute Client — Noida, 2024",
    },
    {
        quote:
            "Anticipatory bail was secured within 24 hours. His knowledge of criminal procedure is unmatched.",
        matter: "Criminal Defence Client — Delhi, 2024",
    },
    {
        quote:
            "Our company's contract dispute was resolved professionally. Clear strategy from day one.",
        matter: "Corporate Matter Client — Noida, 2023",
    },
];

function StarIcon() {
    return (
        <svg
            className="w-4 h-4 text-gold"
            fill="currentColor"
            viewBox="0 0 20 20"
        >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
    );
}

const sectionReveal = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const TestimonialsSection = () => {
    return (
        <motion.section
            className="bg-navy py-16 lg:py-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            variants={sectionReveal}
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* Eyebrow */}
                <p className="eyebrow text-center mb-0">Client Testimonials</p>
                <div className="w-12 h-px bg-gold mx-auto mt-3 mb-6" />

                <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white text-center mb-16">
                    Trusted by Clients Across Delhi NCR
                </h2>

                {/* Cards grid — staggered */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.matter}
                            className="bg-white/[0.04] border border-white/10 rounded-sm px-8 py-10 flex flex-col"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.15 }}
                        >
                            <span className="font-serif text-6xl leading-none text-gold select-none mb-4">
                                &ldquo;
                            </span>
                            <p className="italic text-warm-white/90 text-base leading-relaxed mb-6 flex-grow">
                                {t.quote}
                            </p>
                            <div className="flex gap-1 mb-4">
                                {Array.from({ length: 5 }).map((_, j) => (
                                    <StarIcon key={j} />
                                ))}
                            </div>
                            <span className="text-xs uppercase tracking-widest text-gold/70">
                                {t.matter}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default TestimonialsSection;
