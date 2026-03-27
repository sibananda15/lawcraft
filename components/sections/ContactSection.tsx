import Container from "../ui/Container";
import Link from "next/link";

interface ContactSectionProps {
    heading?: string; 
    phone: string;
    whatsapp: string;
    address: string;
}

const ContactSection = ({ heading = "Contact an Advocate", phone, whatsapp, address }: ContactSectionProps) => {
    return (
        <section className="bg-[#f8f6f2] py-24 md:py-32 border-t border-[rgba(15,23,42,0.08)]">
            <Container>
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
                    
                    {/* Left Column: Editorial Content */}
                    <div className="lg:w-1/2 flex flex-col">
                        <span className="block text-xs md:text-sm font-sans font-semibold tracking-[0.2em] text-[#b08d57] uppercase mb-5">
                            Take Action
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-[#0f172a] mb-8 leading-[1.1]">
                            {heading}
                        </h2>
                        <div className="w-16 h-[1px] bg-[#b08d57] mb-8"></div>
                        
                        <p className="font-sans text-xl md:text-2xl text-[#5b6470] leading-relaxed font-light mb-8 max-w-xl">
                            Secure expert legal counsel tailored to your specific situation. We provide clear, strategic, and uncompromising representation to protect your interests.
                        </p>
                        
                        <div className="flex items-center gap-3 text-[#0f172a] font-sans font-medium text-sm tracking-wider uppercase mb-16">
                            <span className="w-2 h-2 rounded-full bg-[#b08d57] animate-pulse"></span>
                            Available for consultation today
                        </div>

                        {/* Principal Office Info relocated under the copy */}
                        <div className="pt-10 border-t border-[rgba(15,23,42,0.06)]">
                            <span className="block text-xs font-sans font-semibold tracking-[0.2em] text-[#5b6470] uppercase mb-4">
                                Principal Office
                            </span>
                            <address className="not-italic font-serif text-2xl text-[#0f172a] leading-relaxed max-w-sm">
                                {address}
                            </address>
                        </div>
                    </div>

                    {/* Right Column: High-conversion CTA Card */}
                    <div className="lg:w-1/2 w-full max-w-xl lg:max-w-none mx-auto lg:mx-0">
                        <div className="bg-white border border-[rgba(15,23,42,0.08)] border-t-[3px] border-t-[#b08d57] p-10 md:p-14 shadow-[0_20px_60px_rgba(15,23,42,0.06)] rounded-sm">
                            <h3 className="font-serif text-3xl md:text-4xl text-[#0f172a] mb-4">
                                Require Legal Assistance?
                            </h3>
                            <p className="font-sans text-lg text-[#5b6470] mb-10 leading-relaxed font-light">
                                Speak directly with an advocate to understand your position, realistic options, and the immediate next steps.
                            </p>
                            
                            <div className="flex flex-col gap-5 mb-10">
                                <a
                                    href={`tel:${phone.replace(/\s+/g, "")}`}
                                    className="inline-flex items-center justify-center w-full px-8 py-5 bg-[#0f172a] text-white font-sans text-sm font-semibold tracking-widest uppercase hover:bg-[#b08d57] transition-colors duration-300 rounded-sm shadow-md"
                                >
                                    Schedule Consultation
                                </a>

                                <a
                                    href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, "")}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center w-full px-8 py-5 bg-white border border-[#0f172a]/20 text-[#0f172a] font-sans text-sm font-semibold tracking-widest uppercase hover:border-[#b08d57] hover:text-[#b08d57] transition-all duration-300 rounded-sm"
                                >
                                    WhatsApp Now
                                </a>
                            </div>

                            <div className="text-center pt-8 border-t border-[rgba(15,23,42,0.06)]">
                                <span className="block text-xs font-sans text-gray-400 uppercase tracking-widest mb-3">
                                    Or Call Directly
                                </span>
                                <a 
                                    href={`tel:${phone.replace(/\s+/g, "")}`}
                                    className="inline-block font-serif text-3xl text-[#0f172a] hover:text-[#b08d57] transition-colors"
                                >
                                    {phone}
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </Container>
        </section>
    );
};

export default ContactSection;
