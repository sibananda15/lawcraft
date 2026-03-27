import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Link from "next/link";

export default function AboutPage() {
    return (
        <>
            <Breadcrumb currentPageTitle="About Us" />

            <main>
                {/* 1. Hero Section */}
                <section className="bg-stone-50 py-20 border-b border-stone-200">
                    <Container>
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="md:w-1/2">
                                <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                                    About Lawcraft Advocates
                                </h1>
                                <div className="text-gray-700 text-lg leading-relaxed space-y-6">
                                    <p>
                                        Lawcraft Advocates is a full-service law practice dedicated to providing sophisticated legal solutions in India. We advise corporations, institutions, and individuals across a broad spectrum of civil, criminal, and commercial law, ensuring that every client receives structured, tailored representation.
                                    </p>
                                    <p>
                                        Our practice is built on the foundation of practical problem-solving and ethical advocacy. We understand that legal challenges—whether complex litigation or regulatory compliance—require not just knowledge of the law, but a deep understanding of the client’s strategic objectives. Our team combines rigorous legal research with courtroom expertise to deliver results that matter.
                                    </p>
                                </div>
                            </div>
                            <div className="md:w-1/2 relative bg-gray-200 rounded-sm overflow-hidden h-[400px] w-full shadow-lg">
                                {/* Generic Professional Visual */}
                                <Image
                                    src="/images/about/office-interior.png" // Ensure this path matches where we copied the image
                                    alt="Lawcraft Advocates Office"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </Container>
                </section>

                {/* 2. Why Lawcraft Advocates */}
                <section className="py-20 bg-white">
                    <Container>
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8">
                                Why Lawcraft Advocates
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                                No two legal matters are identical. At Lawcraft Advocates, we reject the one-size-fits-all approach. We believe that effective representation requires a partner-led strategy where experience guides every decision. Whether handling advisory work for emerging businesses or complex litigation in higher courts, our focus remains on providing consistent, clear, and authoritative guidance that protects our clients' interests at every turn.
                            </p>
                        </div>
                    </Container>
                </section>

                {/* 3. Our Values */}
                <section className="py-20 bg-stone-50">
                    <Container>
                        <h2 className="font-serif text-3xl font-bold text-gray-900 mb-12 text-center">
                            Our Values
                        </h2>
                        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                            <div className="bg-white p-8 border border-stone-100 rounded-sm shadow-sm">
                                <h3 className="font-bold text-xl text-gray-800 mb-4">Professional Integrity</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    We uphold the highest ethical standards in our practice. Transparency and honesty form the bedrock of our client relationships, ensuring that our advice is always trusted and reliable.
                                </p>
                            </div>
                            <div className="bg-white p-8 border border-stone-100 rounded-sm shadow-sm">
                                <h3 className="font-bold text-xl text-gray-800 mb-4">Accountability</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    We take full responsibility for the strategies we recommend. Our primary duty is to the courts and to the lawful interests of those we represent, executed with unwavering diligence.
                                </p>
                            </div>
                            <div className="bg-white p-8 border border-stone-100 rounded-sm shadow-sm">
                                <h3 className="font-bold text-xl text-gray-800 mb-4">Respect for Process</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    We believe in the dignity of the legal system. Our advocacy is firm yet respectful, navigating procedural complexities with patience and precision to achieve just outcomes.
                                </p>
                            </div>
                            <div className="bg-white p-8 border border-stone-100 rounded-sm shadow-sm">
                                <h3 className="font-bold text-xl text-gray-800 mb-4">Transparency</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Clear communication is non-negotiable. We ensure our clients understand the legal landscape, potential risks, and realistic timelines, free from jargon or ambiguity.
                                </p>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* 4. Our Approach */}
                <section className="py-20 bg-white">
                    <Container>
                        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                            <div className="md:w-1/2">
                                <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8">
                                    Our Approach
                                </h2>
                                <div className="space-y-6 text-gray-700 leading-relaxed">
                                    <p>
                                        <strong>Listening First:</strong> Every engagement begins with a comprehensive consultation. We listen carefully to the facts to identify the core legal issues before proposing a course of action.
                                    </p>
                                    <p>
                                        <strong>Risk Assessment:</strong> We conduct a thorough assessment of potential risks and liabilities. Our advice is designed not just to win disputes, but to mitigate future legal exposure.
                                    </p>
                                    <p>
                                        <strong>Strategic Resolution:</strong> Whether through negotiation, mediation, or structured litigation, we pursue the path that offers the most effective resolution aligned with the client’s goals.
                                    </p>
                                </div>
                            </div>
                            {/* Visual Placeholder for Balance/Structure - Text heavy design doesn't strictly need another image, but keeping structure balanced */}
                            <div className="md:w-1/2 bg-stone-100 p-10 rounded-sm flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-4xl font-serif text-gray-300 mb-4">“</div>
                                    <p className="font-serif text-2xl text-gray-500 italic">
                                        Justice consists not in being neutral between right and wrong, but in finding out the right and upholding it.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* 5. Geographic Reach */}
                <section className="py-20 bg-stone-50 text-center">
                    <Container>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8">
                                Our Geographic Reach
                            </h2>
                            <p className="text-gray-700 text-lg mb-10 leading-relaxed">
                                Lawcraft Advocates advises and represents clients across major metro cities in India, including Delhi, Mumbai, Bengaluru, Chennai, Hyderabad, Kolkata, Pune, and Ahmedabad.
                            </p>
                            <div className="inline-block bg-white px-8 py-6 rounded-sm border border-gray-200 shadow-sm">
                                <p className="text-gray-600 font-medium">
                                    We also maintain ample representation capabilities across Delhi NCR and key cities throughout Uttar Pradesh.
                                </p>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* 6. Closing Section (Soft CTA) */}
                <section className="py-24 bg-white border-t border-stone-100">
                    <Container>
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">
                                Working with Lawcraft Advocates
                            </h2>
                            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                                If you require clarity, responsibility, and experienced legal guidance, we invite you to discuss your matter with us.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white text-lg font-medium rounded-sm hover:bg-gray-800 transition-colors"
                                >
                                    Schedule a Consultation
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-white border border-gray-300 text-gray-900 text-lg font-medium rounded-sm hover:bg-gray-50 transition-colors"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </Container>
                </section>
            </main>
        </>
    );
}
