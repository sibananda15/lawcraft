import React from "react";
import Image from "next/image";
import Container from "../ui/Container";

interface HeroAction {
    label: string;
    href: string;
}

interface HeroSectionProps {
    title: string;
    subtitle: string;
    primaryAction: HeroAction;
    secondaryAction: HeroAction;
    imageSrc: string;
}

const HeroSection = ({
    title,
    subtitle,
    primaryAction,
    secondaryAction,
    imageSrc,
}: HeroSectionProps) => {
    return (
        <section className="relative w-full min-h-[550px] lg:h-[65vh] bg-stone-50 overflow-hidden flex items-center">

            {/* Background Depth Gradient: Subtle warmth behind everything */}
            <div className="absolute inset-0 bg-gradient-to-br from-stone-100 via-stone-50 to-white/50 opacity-60 z-0" />

            {/* Right Side: Image with Edge Mask */}
            <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full pointer-events-none z-0">
                <Image
                    src={imageSrc}
                    alt="Lady Justice - Law Craft Advocates"
                    fill
                    className="object-cover object-center lg:object-left-top"
                    priority
                />

                {/* Image Edge Mask: Soft fade into background - No blur */}
                <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-stone-50 via-stone-50/80 to-transparent z-10" />

                {/* Subtle right-edge dimming for depth */}
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/10 to-transparent z-10 mix-blend-multiply" />
            </div>

            <Container className="relative z-20 h-full pointer-events-none">
                <div className="h-full flex items-center">
                    {/* Editorial Text Block */}
                    <div className="relative pointer-events-auto max-w-2xl bg-stone-50 py-12 pr-12 lg:-mr-32">

                        {/* Title Wrapper with Authority Accent Line */}
                        <div className="relative mb-8">
                            {/* Authority Accent Line: Vertical, muted, half-height */}
                            <div className="absolute -left-5 top-2 bottom-2 w-[2px] bg-stone-400/40 h-[80%] my-auto lg:-left-8" />

                            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-stone-900 leading-[1.1] tracking-tight">
                                {title}
                            </h1>
                        </div>

                        <p className="text-lg md:text-xl text-stone-600 mb-8 leading-relaxed max-w-lg font-light">
                            {subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href={primaryAction.href}
                                className="inline-flex justify-center items-center px-8 py-3.5 bg-stone-900 text-white text-base font-medium tracking-wide hover:bg-stone-800 transition-colors"
                            >
                                {primaryAction.label}
                            </a>

                            <a
                                href={secondaryAction.href}
                                className="inline-flex justify-center items-center px-8 py-3.5 border border-stone-300 text-stone-900 text-base font-medium tracking-wide hover:border-stone-900 hover:bg-stone-100 transition-colors"
                            >
                                {secondaryAction.label}
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default HeroSection;
