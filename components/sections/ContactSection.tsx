import Container from "../ui/Container";

interface ContactSectionProps {
    heading: string;
    phone: string;
    whatsapp: string;
    address: string;
}

const ContactSection = ({ heading, phone, whatsapp, address }: ContactSectionProps) => {
    return (
        <section className="section section-light border-t border-gray-200">
            <Container>
                <div className="max-w-3xl">
                    <h2 className="font-serif text-3xl font-semibold text-gray-900">
                        {heading}
                    </h2>

                    <p className="mt-4 text-gray-600">
                        Reach out for consultation or urgent legal assistance.
                    </p>

                    <div className="mt-8 space-y-4 text-sm">
                        <div>
                            <span className="block font-semibold text-gray-900">
                                Office Address
                            </span>
                            <span className="text-gray-600">
                                {address}
                            </span>
                        </div>

                        <div className="flex flex-wrap gap-6">
                            <a
                                href={`tel:${phone}`}
                                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
                            >
                                Call Now
                            </a>

                            <a
                                href={`https://wa.me/${whatsapp.replace("+", "")}`}
                                className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-900 font-medium hover:border-gray-900 transition"
                            >
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ContactSection;
