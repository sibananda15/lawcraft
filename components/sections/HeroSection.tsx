"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { lawyerProfile } from "@/data/lawyerProfile";
import ConsultationModal from "@/components/ui/ConsultationModal";

interface HeroAction {
    label: string;
    href: string;
}

interface HeroSectionProps {
    primaryAction: HeroAction;
    secondaryAction: HeroAction;
}

function useCounter(target: number, duration = 1500) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                observer.disconnect();

                const start = performance.now();
                function tick(now: number) {
                    const elapsed = now - start;
                    const progress = Math.min(elapsed / duration, 1);
                    const eased = 1 - (1 - progress) * (1 - progress);
                    setCount(Math.floor(eased * target));
                    if (progress < 1) requestAnimationFrame(tick);
                }
                requestAnimationFrame(tick);
            },
            { threshold: 0.3 },
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [target, duration]);

    return { count, ref };
}

const reveal = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const HeroSection = ({
    primaryAction,
    secondaryAction,
}: HeroSectionProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const yearsCounter = useCounter(20);
    const casesCounter = useCounter(500, 2000);

    return (
        <section className="relative w-full min-h-screen flex flex-col lg:flex-row">
            {/* LEFT 55% */}
            <div className="w-full lg:w-[55%] flex items-center px-6 md:px-16 lg:px-20 xl:px-28 py-20 lg:py-0 bg-warm-white">
                <motion.div
                    className="w-full max-w-xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.1 }}
                >
                    {/* Eyebrow */}
                    <motion.p className="eyebrow mb-0" variants={reveal} transition={{ duration: 0.6, ease: "easeOut" }}>
                        Advocates &amp; Legal Consultants
                    </motion.p>
                    <motion.div className="w-12 h-px bg-gold mt-3 mb-6" variants={reveal} transition={{ duration: 0.6, ease: "easeOut" }} />

                    {/* Name */}
                    <motion.h1
                        className="font-serif text-4xl sm:text-5xl font-normal text-navy leading-[1.15] mb-0"
                        variants={reveal}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        {lawyerProfile.name}
                    </motion.h1>

                    {/* Gold rule */}
                    <motion.div className="w-12 h-px bg-gold my-6" variants={reveal} transition={{ duration: 0.6, ease: "easeOut" }} />

                    {/* Tagline */}
                    <motion.p
                        className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-md mb-8"
                        variants={reveal}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        {lawyerProfile.experienceLine}. Specialising in criminal defence, constitutional law, and complex property disputes across Delhi NCR.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div className="flex flex-col sm:flex-row gap-4 mb-4 sm:mb-12" variants={reveal} transition={{ duration: 0.6, ease: "easeOut" }}>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="inline-flex justify-center items-center px-6 py-3 bg-navy text-white text-sm font-semibold tracking-widest uppercase transition-colors duration-300 hover:bg-navy/90"
                        >
                            {primaryAction.label}
                        </button>
                        <a
                            href={secondaryAction.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex justify-center items-center px-6 py-3 border border-gold text-gold text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:bg-gold hover:text-white"
                        >
                            {secondaryAction.label}
                        </a>
                    </motion.div>

                    {/* Mobile phone link */}
                    <a
                        href="tel:+919810053761"
                        className="block md:hidden text-center text-sm text-[#B8963E] font-medium mb-8 hover:underline"
                    >
                        <span className="mr-1">📞</span> +91 98100 53761
                    </a>

                    {/* Stat Counters — staggered */}
                    <motion.div
                        className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200"
                        variants={reveal}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        {[
                            {
                                ref: yearsCounter.ref,
                                value: `${yearsCounter.count}+`,
                                label: "Years Experience",
                                large: true,
                            },
                            {
                                ref: casesCounter.ref,
                                value: `${casesCounter.count}+`,
                                label: "Cases Handled",
                                large: true,
                            },
                            {
                                ref: undefined,
                                value: "Supreme Court",
                                label: "Advocate",
                                large: false,
                            },
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                ref={stat.ref}
                                className={`border-l-2 border-gold pl-4 ${!stat.large ? "flex flex-col justify-center" : ""}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
                            >
                                <span className={`block font-serif text-navy ${stat.large ? "text-3xl sm:text-4xl" : "text-lg sm:text-xl leading-snug"}`}>
                                    {stat.value}
                                </span>
                                <span className="text-xs text-gray-500 uppercase tracking-wider mt-1 block">
                                    {stat.label}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* RIGHT 45% — full-height portrait */}
            <motion.div
                className="w-full lg:w-[45%] relative min-h-[60vh] lg:min-h-screen"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <img
                    src="/images/advocate-portrait.jpeg"
                    alt="Portrait of Senior Advocate Rajendra Panigrahi"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent pointer-events-none" />
            </motion.div>
            <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
};

export default HeroSection;
