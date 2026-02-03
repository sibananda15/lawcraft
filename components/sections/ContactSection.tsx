import Container from "../ui/Container";

interface ContactSectionProps {
    heading?: string; // Optional, hardcoded default preferred as per design
    phone: string;
    whatsapp: string;
    address: string;
}

const ContactSection = ({ heading = "Speak With an Advocate", phone, whatsapp, address }: ContactSectionProps) => {
    return (
        <section className="bg-stone-50 py-24 border-t border-gray-200">
            <Container>
                <div className="max-w-4xl mx-auto text-center">
                    {/* Heading */}
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        {heading}
                    </h2>

                    {/* Subheading */}
                    <p className="text-xl text-gray-600 mb-10 leading-relaxed font-light max-w-2xl mx-auto">
                        Consult directly with an experienced legal professional to understand your position, options, and next steps.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
                        <a
                            href={`tel:${phone.replace(/\s+/g, "")}`}
                            className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white text-lg font-medium rounded-sm hover:bg-gray-800 transition-colors shadow-sm"
                        >
                            Schedule Consultation
                        </a>

                        <a
                            href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, "")}`}
                            className="inline-flex items-center justify-center px-8 py-4 bg-white border border-gray-300 text-gray-900 text-lg font-medium rounded-sm hover:bg-gray-50 transition-colors shadow-sm"
                        >
                            WhatsApp Inquiry
                        </a>
                    </div>

                    {/* Office Location */}
                    <div className="pt-10 border-t border-gray-200">
                        <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">
                            Principal Office
                        </p>
                        <p className="text-lg text-gray-900 font-serif">
                            {address}
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ContactSection;
