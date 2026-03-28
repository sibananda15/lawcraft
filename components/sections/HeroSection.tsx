import React from "react";
import Container from "../ui/Container";
import { lawyerProfile } from "@/data/lawyerProfile";

interface HeroAction {
    label: string;
    href: string;
}

interface HeroSectionProps {
    primaryAction: HeroAction;
    secondaryAction: HeroAction;
}

const HeroSection = ({
    primaryAction,
    secondaryAction,
}: HeroSectionProps) => {
    return (
        <section className="relative w-full overflow-hidden bg-[#f8f9fa] border-b border-stone-200/50 py-16 lg:py-24 xl:py-28">

            {/* Soft background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#f8f9fa] via-[#f8f9fa] to-[#f1f2f4] z-0"></div>

            <Container className="relative z-10 w-full">
                {/* Standard flex distribution enforces strict grid layout so the image container can't blindly stretch to 90vh */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8 xl:gap-16 w-full">

                    {/* LEFT SIDE (55% width) text content */}
                    <div className="w-full lg:w-[55%] flex flex-col justify-center order-2 lg:order-1 pt-6 lg:pt-0">

                        {/* Subtitle */}
                        <div className="mb-5">
                            <span className="text-stone-500 font-bold tracking-[0.25em] text-xs md:text-sm uppercase">
                                Senior Advocate <span className="mx-3 text-stone-300">|</span> New Delhi, India
                            </span>
                        </div>

                        {/* Name */}
                        <h1 className="font-serif text-[3.25rem] leading-[1.05] md:text-5xl lg:text-6xl xl:text-[5.5rem] font-bold text-stone-900 tracking-tight mb-3">
                            {lawyerProfile.name}
                        </h1>

                        {/* Thin divider line under name */}
                        <div className="w-12 h-[2px] bg-[#1f2937]/90 mt-8 mb-6"></div>

                        {/* Tagline */}
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-stone-900 font-medium leading-[1.3] mb-5 max-w-2xl">
                            Strategic Legal Representation for High-Stakes Matters
                        </h2>

                        {/* Description (1-2 lines only) */}
                        <p className="text-[#6b7280] text-lg md:text-xl md:leading-[1.7] font-light max-w-lg mb-7">
                            Trusted counsel for complex criminal, civil, and corporate disputes — with a focus on clarity, speed, and results.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 mb-16">
                            <a
                                href={primaryAction.href}
                                className="inline-flex justify-center items-center px-12 py-5 bg-[#0f172a] text-white text-sm md:text-base font-medium tracking-widest shadow-md hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/20 hover:bg-[#1e293b] transition-all duration-300 rounded-sm"
                            >
                                {primaryAction.label}
                            </a>

                            <a
                                href={secondaryAction.href}
                                className="inline-flex justify-center items-center px-12 py-5 bg-white border border-slate-200 text-slate-800 text-sm md:text-base font-medium tracking-widest hover:-translate-y-1 hover:shadow-md hover:border-slate-300 transition-all duration-300 rounded-sm"
                            >
                                {secondaryAction.label}
                            </a>
                        </div>

                        {/* Credibility Strip */}
                        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4 text-xs md:text-sm font-semibold text-stone-500 uppercase tracking-widest">
                            <span>20+ Years Experience</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-stone-300 hidden sm:block"></span>
                            <span>Supreme Court of India</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-stone-300 hidden sm:block"></span>
                            <span>Delhi High Court</span>
                        </div>

                    </div>

                    {/* RIGHT SIDE (45% width fixed aspect ratio image container) */}
                    <div className="w-full lg:w-[45%] flex justify-center lg:justify-end order-1 lg:order-2 shrink-0">
                        {/* 
                          Fix container sizing & Add safe spacing:
                          - max-w-[500px] ensures it doesn't arbitrarily stretch
                          - pt-6 inside wrapper explicitly guarantees top 24px of breathing space above the head 
                          - aspect-[4/5] hard-locks layout proportions
                        */}
                        <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[500px] xl:max-w-[550px] aspect-[4/5] bg-transparent pt-6 sm:pt-8" style={{ boxShadow: '-40px 0 60px rgba(0,0,0,0.05)' }}>
                            {/* 
                              Fix image cropping (CRITICAL FIX):
                              - object-cover exactly aligns with the wrapper shape
                              - object-top fundamentally locks the top boundary preventing forehead cutoffs
                              - zero scale transforms or zooms to ruin composition
                            */}
                            <img
                                src="/images/advocate-portrait.jpeg"
                                alt={lawyerProfile.name}
                                className="w-full h-full object-cover object-top contrast-[0.95] brightness-[1.05] sepia-[0.10] rounded-sm"
                            />

                            {/* Warm tint/shadow composite */}
                            <div className="absolute inset-0 bg-stone-200/5 mix-blend-lighten pointer-events-none rounded-sm"></div>
                            <div className="absolute inset-0 bg-amber-700/5 mix-blend-overlay pointer-events-none rounded-sm"></div>

                            {/* 
                              Remove aggressive gradient overlay: 
                              Strictly restrained left 25-30% area (w-24/32/40 max),
                              60%+ of the central face region stays completely untouched by overlapping styling colors.
                            */}
                            <div className="absolute inset-y-0 left-0 w-24 md:w-32 lg:w-40 bg-gradient-to-r from-[#f8f9fa] to-transparent pointer-events-none z-10 rounded-l-sm"></div>

                            {/* Slight editorial noise composite */}
                            <div
                                className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none rounded-sm"
                                style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.85\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')" }}
                            ></div>
                        </div>
                    </div>

                </div>
            </Container>

        </section>
    );
};

export default HeroSection;
