import Image from "next/image";
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ConsultationModalWrapper from "@/components/ui/ConsultationModalWrapper";

export const metadata: Metadata = {
    title: "About Mr. Rajendra Panigrahi | Lawcraft Advocates",
    description:
        "Meet Mr. Rajendra Panigrahi — Supreme Court enrolled advocate with 20+ years of distinguished practice in criminal defence, property disputes, and corporate law across Delhi NCR.",
};

const VALUES = [
    {
        title: "Professional Integrity",
        desc: "The highest ethical standards form the bedrock of this practice. Every piece of advice is honest, transparent, and in the client's genuine interest.",
    },
    {
        title: "Accountability",
        desc: "Full responsibility for every strategy recommended. Our primary duty is to the courts and to the lawful interests of those we represent.",
    },
    {
        title: "Respect for Process",
        desc: "Firm yet respectful advocacy that navigates procedural complexities with precision — achieving outcomes within the bounds of the legal system.",
    },
    {
        title: "Transparent Communication",
        desc: "Clients receive clear, jargon-free explanations of their position, realistic timelines, and honest assessments at every stage.",
    },
];

const STEPS = [
    {
        num: "01",
        title: "Initial Consultation",
        desc: "A focused discussion to understand your situation, identify the core legal issues, and establish clear priorities.",
    },
    {
        num: "02",
        title: "Legal Assessment",
        desc: "Thorough review of facts, documents, and applicable law. You receive an honest assessment of your position and realistic options.",
    },
    {
        num: "03",
        title: "Strategic Resolution",
        desc: "A clear action plan — through negotiation, court proceedings, or settlement — always aligned with your specific goals and interests.",
    },
];

const BADGES = [
    "Supreme Court of India",
    "Bar Council of Delhi",
    "20+ Years Experience",
    "Allahabad High Court",
    "Delhi High Court",
];

export default function AboutPage() {
    return (
        <main>
            {/* ── SECTION 1 — HERO ── */}
            <section className="bg-[#0f1f2e] py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <p className="text-[#B8963E] text-xs tracking-[4px] uppercase">
                        About The Advocate
                    </p>
                    <div className="w-8 h-px bg-[#B8963E] mx-auto mt-3 mb-6" />
                    <h1 className="font-serif text-4xl md:text-5xl text-white font-normal">
                        Mr. Rajendra Panigrahi
                    </h1>
                    <p className="text-white/50 text-lg mt-4 tracking-wide">
                        Supreme Court of India | 20+ Years | Bar Council of Delhi
                    </p>
                </div>
            </section>

            {/* ── SECTION 2 — PROFILE ── */}
            <section className="bg-[#F7F4EF] py-16 lg:py-24">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Left — portrait card */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 bg-white rounded-2xl overflow-hidden border border-gray-100">
                            <Image
                                src="/images/advocate-portrait.jpeg"
                                alt="Mr. Rajendra Panigrahi — Senior Advocate, Supreme Court of India"
                                width={400}
                                height={500}
                                className="w-full object-cover object-top"
                                loading="lazy"
                            />
                            <div className="p-6">
                                <p className="font-serif text-xl text-[#0f1f2e]">
                                    Mr. Rajendra Panigrahi
                                </p>
                                <div className="w-8 h-px bg-[#B8963E] mt-2 mb-4" />
                                {BADGES.map((badge) => (
                                    <span
                                        key={badge}
                                        className="block bg-[#F7F4EF] text-[#8B6914] text-xs px-3 py-1.5 rounded-lg mb-2 font-medium"
                                    >
                                        {badge}
                                    </span>
                                ))}
                                <div className="w-full h-px bg-gray-100 mt-4" />
                                <ConsultationModalWrapper
                                    cityName="Noida"
                                    variant="navy"
                                    label="Schedule Consultation"
                                    className="w-full bg-[#0f1f2e] text-white py-3 text-xs tracking-[2px] uppercase rounded-lg hover:bg-[#1a3147] transition-colors mt-4"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right — about text + values */}
                    <div className="lg:col-span-2">
                        {/* Part A — About */}
                        <p className="text-[#8B6914] text-xs tracking-[4px] uppercase">
                            The Advocate
                        </p>
                        <div className="w-8 h-px bg-[#B8963E] mt-3 mb-6" />
                        <h2 className="font-serif text-3xl text-[#0f1f2e] font-normal mb-6">
                            20 Years of Distinguished Legal Practice
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Mr. Rajendra Panigrahi is a senior advocate enrolled with the Bar Council of Delhi and admitted to practice before the Supreme Court of India. With over two decades of active courtroom experience, he has built a practice known for strategic depth, direct client access, and results across complex legal matters.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            His practice spans criminal defence, high-stakes property litigation, family and matrimonial matters, and corporate advisory — serving clients across Delhi NCR including Noida, Delhi, Gurgaon, and Ghaziabad. He appears regularly before the Supreme Court of India, Delhi High Court, Allahabad High Court, and district courts across Uttar Pradesh and Haryana.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            What distinguishes this practice is its principal-led approach. Every matter is handled personally by Advocate Panigrahi — no delegation to juniors, no generic advice. Clients receive direct access to senior counsel from the first consultation through to final resolution.
                        </p>

                        {/* Part B — Values */}
                        <div className="mt-16">
                            <p className="text-[#8B6914] text-xs tracking-[4px] uppercase">
                                Our Values
                            </p>
                            <div className="w-8 h-px bg-[#B8963E] mt-3 mb-6" />
                            <h2 className="font-serif text-3xl text-[#0f1f2e] font-normal mb-10">
                                The Principles That Guide Every Matter
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {VALUES.map((v) => (
                                    <div
                                        key={v.title}
                                        className="bg-white rounded-xl p-6 border border-gray-100"
                                    >
                                        <div className="w-6 h-px bg-[#B8963E] mb-3" />
                                        <h3 className="font-serif text-lg text-[#0f1f2e] font-normal mb-2">
                                            {v.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 leading-relaxed">
                                            {v.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 3 — APPROACH ── */}
            <section className="bg-white py-16 lg:py-20">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center">
                        <p className="text-[#8B6914] text-xs tracking-[4px] uppercase">
                            How We Work
                        </p>
                        <div className="w-8 h-px bg-[#B8963E] mx-auto mt-3 mb-5" />
                        <h2 className="font-serif text-3xl text-[#0f1f2e] font-normal mb-16">
                            A Structured Approach to Every Matter
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                        {STEPS.map((step) => (
                            <div key={step.num}>
                                <span className="font-serif text-6xl text-[#8B6914]/20 font-normal leading-none block mb-4">
                                    {step.num}
                                </span>
                                <h3 className="font-serif text-xl text-[#0f1f2e] font-normal mb-3">
                                    {step.title}
                                </h3>
                                <div className="w-8 h-px bg-[#B8963E] mx-auto mb-4" />
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION 4 — QUOTE ── */}
            <section className="bg-[#0f1f2e] py-16">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <span className="font-serif text-6xl text-[#B8963E]/40 leading-none block">
                        &ldquo;
                    </span>
                    <p className="font-serif text-2xl text-white font-normal italic leading-relaxed mt-4">
                        Justice consists not in being neutral between right and wrong, but in finding out the right and upholding it.
                    </p>
                    <div className="w-16 h-px bg-[#B8963E] mx-auto mt-8 mb-4" />
                    <p className="text-white/40 text-sm tracking-wide">
                        — Mr. Rajendra Panigrahi
                    </p>
                </div>
            </section>

            {/* ── SECTION 5 — BOTTOM CTA ── */}
            <section className="bg-[#F7F4EF] py-20">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-[#8B6914] text-xs tracking-[4px] uppercase">
                            Get In Touch
                        </p>
                        <div className="w-8 h-px bg-[#B8963E] mx-auto mt-3 mb-6" />
                        <h2 className="font-serif text-3xl text-[#0f1f2e] font-normal mb-4">
                            Schedule a Consultation
                        </h2>
                        <p className="text-gray-500 text-sm mb-8">
                            Direct access to senior counsel — no intermediaries, no delays.
                        </p>
                        <div className="flex gap-4 justify-center flex-wrap">
                            <ConsultationModalWrapper
                                cityName="Noida"
                                label="Schedule Consultation"
                            />
                            <a
                                href="https://wa.me/919810053761"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-[#8B6914] text-[#8B6914] px-8 py-3.5 text-xs tracking-[2px] uppercase rounded hover:bg-[#8B6914] hover:text-white transition-colors"
                            >
                                WhatsApp Now
                            </a>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}
