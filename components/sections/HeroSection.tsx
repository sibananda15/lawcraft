import React from "react";
import Container from "../ui/Container";
import { lawyerProfile } from "@/data/lawyerProfile";
import { siteConfig } from "@/data/siteConfig";
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
                    <div className="w-full lg:w-1/2 flex flex-col justify-center order-1">

                        {/* Subtitle / Availability Urgency Indicator */}
                        <div className="mb-3 lg:mb-5 flex items-center gap-2 lg:gap-3">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A46D] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C5A46D]"></span>
                            </span>
                            <span className="text-[#C5A46D] font-semibold tracking-[0.1em] lg:tracking-[0.15em] text-[10px] sm:text-[11px] md:text-[13px] uppercase">
                                Available for Immediate Consultation
                            </span>
                        </div>

                        {/* Name */}
                        <h1 className="font-serif text-[34px] sm:text-[42px] md:text-[48px] lg:text-[56px] font-bold text-[#0B1C2E] leading-[1.1] mb-1 lg:mb-2">
                            {lawyerProfile.name}
                        </h1>
                        
                        {/* Practice Positioning */}
                        <p className="text-[#5B6470] font-serif text-[18px] sm:text-[20px] md:text-[22px] italic tracking-wide mb-4 lg:mb-8">
                            High-Stakes Litigation & Dispute Resolution
                        </p>

                        {/* Thin divider line under name */}
                        <div className="w-[60px] h-[1px] bg-[rgba(197,164,109,0.5)] mb-5 lg:mb-8 relative"></div>

                        {/* Tagline / Problem-based Urgency */}
                        <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-serif text-[#0B1C2E] font-medium leading-[1.2] mb-3 lg:mb-5 max-w-2xl">
                            Facing a critical legal dispute that can't wait?
                        </h2>

                        {/* Description / Reassurance */}
                        <p className="text-[#5B6470] text-[15px] sm:text-[16px] leading-[1.6] lg:leading-[1.7] max-w-lg mb-6 lg:mb-10">
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
                        
                        {/* Cohesive Conversion & Trust Block */}
                        <div className="flex flex-col gap-2 mb-12 sm:pl-1">
                            {/* Line 1 & 2: Direct Phone and Availability Threshold */}
                            <div className="flex flex-col gap-1 w-fit">
                                <a 
                                    href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} 
                                    className="inline-flex items-center gap-2 group w-fit transition-colors duration-200"
                                >
                                    <svg className="w-5 h-5 text-[#C5A46D] group-hover:scale-110 transition-transform duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                                    <span className="text-[#5B6470] text-[16px] font-medium tracking-wide">
                                        Speak Now: <strong className="text-[#0B1C2E] font-bold text-[18px] md:text-[20px] ml-1 group-hover:text-[#C5A46D] transition-colors">{siteConfig.phone}</strong>
                                    </span>
                                </a>
                                <span className="flex items-center gap-2 text-[12px] font-semibold text-green-700/80 ml-8 pl-0.5">
                                    <span className="flex h-1.5 w-1.5 relative">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-600"></span>
                                    </span>
                                    Available within 2 minutes
                                </span>
                            </div>
                            
                            {/* Line 3: High-Trust Protocol Indicators */}
                            <div className="text-[13px] font-medium text-[#5B6470] tracking-wide flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-4 mt-3">
                                <span className="flex items-center gap-1.5">
                                    <svg className="w-3.5 h-3.5 text-[#C5A46D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                                    Immediate Response
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <svg className="w-3.5 h-3.5 text-[#C5A46D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                                    Direct Advocate Access
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <svg className="w-3.5 h-3.5 text-[#C5A46D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                                    Fully Confidential
                                </span>
                            </div>
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
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-2 shrink-0 relative mt-10 lg:mt-0">
                        {/* Outer wrapper sizing */}
                        <div className="relative w-full max-w-[420px] lg:max-w-[480px] xl:max-w-[500px]">
                            
                            {/* Premium editorial container with barely-noticeable background contrast and ultra-soft layered shadow */}
                            <div className="w-full rounded-[16px] overflow-hidden bg-[#EFECE6] shadow-[0_8px_30px_rgba(11,28,46,0.03),0_1px_3px_rgba(11,28,46,0.01)] relative border border-[rgba(11,28,46,0.02)]">
                                
                                <img
                                    src="/images/advocate-portrait.jpeg"
                                    alt={lawyerProfile.name}
                                    className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover object-top block transform transition-transform hover:scale-[1.03] duration-[1.5s] ease-out"
                                />
                                
                                {/* Very subtle directional light overlay (left to right) simulating natural studio rim/depth lighting */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[rgba(11,28,46,0.03)] to-transparent pointer-events-none"></div>

                                {/* Soft bottom fade strictly limited to max 80px height to blend the portrait naturally without heavy fog */}
                                <div className="absolute bottom-0 left-0 w-full h-[80px] bg-gradient-to-t from-[#EFECE6] to-transparent pointer-events-none"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>

        </section>
    );
};

export default HeroSection;
