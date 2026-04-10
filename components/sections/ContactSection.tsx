"use client";

import { useState } from "react";
import Container from "../ui/Container";
import ConsultationModal from "@/components/ui/ConsultationModal";

interface ContactSectionProps {
    heading?: string; 
    phone: string;
    whatsapp: string;
    address: string;
}

const ContactSection = ({ heading = "Contact an Advocate", phone, whatsapp, address }: ContactSectionProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
        <section className="bg-[#F8F6F2] py-16 lg:py-24 border-t border-[rgba(11,28,46,0.08)]">
            <Container>
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                    
                    {/* Left Column: Editorial Content */}
                    <div className="lg:w-1/2 flex flex-col pt-4">
                        <p className="eyebrow text-gold mb-0">
                            Take Action
                        </p>
                        <div className="w-12 h-px bg-gold mt-3 mb-6" />
                        <h2 className="font-serif text-[28px] md:text-[32px] lg:text-[36px] font-medium text-[#0B1C2E] mb-6 leading-[1.2]">
                            {heading}
                        </h2>
                        <div className="w-[60px] h-[1px] bg-[#C5A46D] mb-8"></div>
                        
                        <p className="font-sans text-[16px] text-[#5B6470] leading-[1.7] mb-10 max-w-lg">
                            Secure expert legal counsel tailored to your specific situation. We provide clear, strategic, and uncompromising representation to protect your interests.
                        </p>
                        
                        <div className="flex items-center gap-3 text-[#0B1C2E] font-sans font-medium text-[13px] tracking-wider uppercase mb-12">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#C5A46D] animate-pulse"></span>
                            Available for consultation today
                        </div>

                        {/* Principal Office Info relocated under the copy */}
                        <div className="pt-8 border-t border-[rgba(11,28,46,0.06)]">
                            <span className="block text-[12px] font-sans font-semibold tracking-[0.2em] text-[#5B6470] uppercase mb-4">
                                Principal Office
                            </span>
                            <address className="not-italic font-serif text-[20px] text-[#0B1C2E] leading-relaxed max-w-sm">
                                {address}
                            </address>
                        </div>
                    </div>

                    {/* Right Column: High-conversion CTA Card */}
                    <div className="lg:w-1/2 w-full max-w-lg lg:max-w-none mx-auto lg:mx-0">
                        <div className="bg-white border border-[rgba(11,28,46,0.04)] border-t-[3px] border-t-[#C5A46D] p-10 md:p-14 shadow-[0_30px_60px_rgba(11,28,46,0.1)] rounded-sm transform transition-all hover:shadow-[0_40px_80px_rgba(11,28,46,0.15)]">
                            <h3 className="font-serif text-[20px] md:text-[22px] font-medium text-[#0B1C2E] mb-4">
                                Require Legal Assistance?
                            </h3>
                            <p className="font-sans text-[16px] text-[#5B6470] mb-10 leading-[1.7]">
                                Speak directly with an advocate to understand your position, realistic options, and the immediate next steps.
                            </p>
                            
                            <div className="flex flex-col gap-4 mb-10">
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="inline-flex items-center justify-center w-full px-8 py-4 bg-[#0B1C2E] text-white font-sans text-[14px] font-semibold tracking-[0.15em] uppercase hover:bg-[#C5A46D] transition-colors duration-300 rounded-sm shadow-[0_4px_14px_rgba(11,28,46,0.15)]"
                                >
                                    Schedule Consultation
                                </button>

                                <a
                                    href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, "")}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center w-full px-8 py-4 bg-transparent border border-[rgba(11,28,46,0.15)] text-[#0B1C2E] font-sans text-[14px] font-semibold tracking-[0.15em] uppercase hover:border-[#C5A46D] hover:text-[#C5A46D] transition-all duration-300 rounded-sm"
                                >
                                    WhatsApp Now
                                </a>
                            </div>

                            <div className="text-center pt-8 border-t border-[rgba(11,28,46,0.06)]">
                                <span className="block text-[11px] font-sans text-gray-400 uppercase tracking-widest mb-3">
                                    Or Call Directly
                                </span>
                                <a 
                                    href={`tel:${phone.replace(/\s+/g, "")}`}
                                    className="inline-block font-serif text-[28px] text-[#0B1C2E] hover:text-[#C5A46D] transition-colors"
                                >
                                    {phone}
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </Container>
        </section>
        <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default ContactSection;
