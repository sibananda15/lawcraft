"use client";

import React, { useState, useEffect, useRef } from "react";
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
                    // ease-out quad
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

const stats = [
    { value: 20, suffix: "+", label: "Years Experience" },
    { value: 500, suffix: "+", label: "Cases Handled" },
    { value: 0, suffix: "", label: "Supreme Court Advocate", isText: true },
];

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
                <div className="w-full max-w-xl">
                    {/* Eyebrow */}
                    <p className="eyebrow mb-0">
                        Advocates &amp; Legal Consultants
                    </p>
                    <div className="w-12 h-px bg-gold mt-3 mb-6" />

                    {/* Name */}
                    <h1 className="font-serif text-4xl sm:text-5xl font-normal text-navy leading-[1.15] mb-0">
                        {lawyerProfile.name}
                    </h1>

                    {/* Gold rule — 48px wide, 1px tall */}
                    <div className="w-12 h-px bg-gold my-6" />

                    {/* Tagline */}
                    <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-md mb-8">
                        {lawyerProfile.experienceLine}. Specialising in criminal defence, constitutional law, and complex property disputes across Delhi NCR.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
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
                    </div>

                    {/* Stat Counters */}
                    <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                        {/* Years */}
                        <div ref={yearsCounter.ref} className="border-l-2 border-gold pl-4">
                            <span className="block font-serif text-3xl sm:text-4xl text-navy">
                                {yearsCounter.count}+
                            </span>
                            <span className="text-xs text-gray-500 uppercase tracking-wider mt-1 block">
                                Years Experience
                            </span>
                        </div>

                        {/* Cases */}
                        <div ref={casesCounter.ref} className="border-l-2 border-gold pl-4">
                            <span className="block font-serif text-3xl sm:text-4xl text-navy">
                                {casesCounter.count}+
                            </span>
                            <span className="text-xs text-gray-500 uppercase tracking-wider mt-1 block">
                                Cases Handled
                            </span>
                        </div>

                        {/* Supreme Court */}
                        <div className="border-l-2 border-gold pl-4 flex flex-col justify-center">
                            <span className="block font-serif text-lg sm:text-xl text-navy leading-snug">
                                Supreme Court
                            </span>
                            <span className="text-xs text-gray-500 uppercase tracking-wider mt-1 block">
                                Advocate
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT 45% — full-height portrait */}
            <div className="w-full lg:w-[45%] relative min-h-[60vh] lg:min-h-screen">
                <img
                    src="/images/advocate-portrait.jpeg"
                    alt="Portrait of Senior Advocate Rajendra Panigrahi"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                />
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent pointer-events-none" />
            </div>
            <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
};

export default HeroSection;
