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
        <section className="relative w-full overflow-hidden bg-[#F8F6F2] border-b border-[rgba(11,28,46,0.08)] py-[80px] lg:py-[100px]">
            <Container className="relative z-10 w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 w-full max-w-7xl mx-auto">

                    {/* LEFT SIDE: Text content */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-1">

                        {/* Subtitle / Availability Urgency Indicator */}
                        <div className="mb-5 flex items-center gap-3">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A46D] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C5A46D]"></span>
                            </span>
                            <span className="text-[#C5A46D] font-semibold tracking-[0.15em] text-[11px] md:text-[13px] uppercase">
                                Available for Immediate Consultation
                            </span>
                        </div>

                        {/* Name */}
                        <h1 className="font-serif text-[42px] md:text-[48px] lg:text-[56px] font-bold text-[#0B1C2E] leading-[1.1] mb-2">
                            {lawyerProfile.name}
                        </h1>
                        
                        {/* Practice Positioning */}
                        <p className="text-[#5B6470] font-serif text-[20px] md:text-[22px] italic tracking-wide mb-8">
                            High-Stakes Litigation & Dispute Resolution
                        </p>

                        {/* Thin divider line under name */}
                        <div className="w-[60px] h-[1px] bg-[rgba(197,164,109,0.5)] mb-8 relative"></div>

                        {/* Tagline / Problem-based Urgency */}
                        <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-serif text-[#0B1C2E] font-medium leading-[1.2] mb-5 max-w-2xl">
                            Facing a critical legal dispute that can't wait?
                        </h2>

                        {/* Description / Reassurance */}
                        <p className="text-[#5B6470] text-[16px] leading-[1.7] max-w-lg mb-10">
                            When your freedom, assets, or business are on the line, generic advice isn't enough. Secure direct, uncompromising legal counsel designed to protect your interests immediately.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-4">
                            <a
                                href={primaryAction.href}
                                className="inline-flex justify-center items-center px-8 py-4 bg-[#0B1C2E] text-white text-[14px] font-semibold tracking-[0.15em] uppercase shadow-[0_4px_14px_rgba(11,28,46,0.15)] hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(11,28,46,0.2)] hover:bg-[#C5A46D] transition-all duration-300 rounded-sm"
                            >
                                {primaryAction.label}
                            </a>

                            <a
                                href={secondaryAction.href}
                                target={primaryAction.label.includes("WhatsApp") ? undefined : "_blank"}
                                rel={primaryAction.label.includes("WhatsApp") ? undefined : "noopener noreferrer"}
                                className="inline-flex justify-center items-center px-8 py-4 bg-transparent border border-[rgba(11,28,46,0.15)] text-[#0B1C2E] text-[14px] font-semibold tracking-[0.15em] uppercase hover:-translate-y-1 hover:shadow-md hover:border-[#C5A46D] hover:text-[#C5A46D] transition-all duration-300 rounded-sm"
                            >
                                {secondaryAction.label}
                            </a>
                        </div>
                        
                        {/* Trust Microcopy */}
                        <div className="mb-12 text-[12px] font-medium text-[#5B6470] tracking-wide">
                            <span className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-[#C5A46D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z"/></svg>
                                100% Confidential Context &nbsp;•&nbsp; Direct Advocate Consultation
                            </span>
                        </div>

                        {/* Credibility Strip */}
                        <div className="flex flex-wrap items-center gap-3 text-[12px] font-semibold text-[#5B6470] uppercase tracking-[0.1em]">
                            <span>20+ Years Experience</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-[rgba(197,164,109,0.3)]"></span>
                            <span>Supreme Court Appointed</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-[rgba(197,164,109,0.3)]"></span>
                            <span>Trial-Ready Strategist</span>
                        </div>

                    </div>

                    {/* RIGHT SIDE: Integrated Portrait Presentation */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2 shrink-0 relative mt-8 lg:mt-0">
                        {/* Decorative depth elements to break the flat background */}
                        <div className="absolute top-10 right-[-5%] w-[80%] h-[80%] bg-[#C5A46D]/10 rounded-full blur-[60px] -z-10 pointer-events-none"></div>
                        <div className="absolute -bottom-10 right-[15%] w-[60%] h-[60%] bg-[#0B1C2E]/5 rounded-full blur-[60px] -z-10 pointer-events-none"></div>

                        {/* Outer wrapper controls the bottom fade mask so both image and shadow fade gracefully into the layout */}
                        <div 
                            className="relative w-full max-w-[420px] lg:max-w-[480px] xl:max-w-[500px] pb-4"
                            style={{ 
                                WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
                                maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)" 
                            }}
                        >
                            {/* Inner elegantly rounded container holding the portrait */}
                            <div className="w-full rounded-2xl overflow-hidden shadow-[0_16px_48px_rgba(11,28,46,0.08)] bg-transparent">
                                <img
                                    src="/images/advocate-portrait.jpeg"
                                    alt={lawyerProfile.name}
                                    className="w-full h-auto object-cover object-top block transform transition-transform hover:scale-[1.02] duration-[1.5s] ease-out"
                                    style={{ minHeight: "500px", maxHeight: "640px" }}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </Container>

        </section>
    );
};

export default HeroSection;
