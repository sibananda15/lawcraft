import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | Lawcraft Advocates",
    description:
        "Terms of service for Lawcraft Advocates website. Rules governing use of our website and services.",
};

const sections = [
    {
        heading: "Acceptance of Terms",
        body: "By accessing and using this website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this website.",
    },
    {
        heading: "Use of Website",
        body: "This website is provided for informational purposes only. You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others.",
    },
    {
        heading: "Intellectual Property",
        body: "All content on this website including text, graphics, logos, and images is the property of Lawcraft Advocates and is protected by applicable intellectual property laws.",
    },
    {
        heading: "Limitation of Liability",
        body: "Lawcraft Advocates shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or reliance on any information provided herein.",
    },
    {
        heading: "Modifications",
        body: "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website.",
    },
    {
        heading: "Governing Law",
        body: "These terms are governed by the laws of India. Disputes shall be subject to the exclusive jurisdiction of courts in Noida, Uttar Pradesh.",
    },
    {
        heading: "Contact",
        body: "For questions about these terms: contact@lawcraft.in\nPhone: +91 9810053761",
    },
];

export default function TermsOfServicePage() {
    return (
        <main>
            <section className="bg-[#0f1f2e] py-16">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <p className="text-[#B8963E] text-xs tracking-[4px] uppercase">
                        Legal
                    </p>
                    <div className="w-8 h-px bg-[#B8963E] mx-auto mt-3 mb-6" />
                    <h1 className="font-serif text-4xl text-white font-normal">
                        Terms of Service
                    </h1>
                </div>
            </section>

            <section className="bg-[#F7F4EF] py-20">
                <div className="max-w-3xl mx-auto px-6">
                    <p className="text-gray-400 text-sm mb-10 italic border-b border-gray-200 pb-6">
                        Last updated: April 2026
                    </p>
                    {sections.map((s, i) => (
                        <div key={s.heading} className={i > 0 ? "mt-10" : ""}>
                            <h2 className="font-serif text-xl text-[#0f1f2e] font-normal mb-3">
                                {s.heading}
                            </h2>
                            <div className="w-8 h-px bg-[#B8963E] mb-5" />
                            <p className="text-gray-600 text-base leading-relaxed mb-4 whitespace-pre-line">
                                {s.body}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
