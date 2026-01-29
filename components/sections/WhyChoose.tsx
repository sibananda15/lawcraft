import React from "react";

const FEATURES = [
    {
        title: "Focused Legal Practice",
        description:
            "A solo practice with complete ownership of every matter. No handoffs, no junior dilution — your case is handled personally, from consultation to closure.",
    },
    {
        title: "Clear Legal Strategy",
        description:
            "Every case begins with a structured legal assessment. You receive realistic options, risks, and timelines — not vague assurances or inflated promises.",
    },
    {
        title: "Courtroom & Advisory Experience",
        description:
            "Hands-on experience across litigation, notices, drafting, and negotiations in Delhi NCR courts, with practical insight into how matters move on the ground.",
    },
    {
        title: "Transparent Communication",
        description:
            "Straightforward updates, documented advice, and clarity on next steps. You are informed at every stage, without legal jargon or uncertainty.",
    },
    {
        title: "Ethical & Discreet Handling",
        description:
            "Matters are handled with confidentiality, restraint, and professional integrity — especially in sensitive disputes involving family, employment, or finances.",
    },
    {
        title: "Accessible & Responsive",
        description:
            "Direct access to the advocate handling your case. Consultations, follow-ups, and filings are managed without unnecessary delays or intermediaries.",
    },
];

export default function WhyChoose() {
    return (
        <section className="section-muted">
            <div className="mx-auto max-w-7xl px-6">
                {/* Section Header */}
                <div className="max-w-2xl">
                    <h2 className="font-playfair text-3xl font-semibold text-gray-900">
                        Why Clients Choose This Practice
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-gray-700">
                        Legal representation built on clarity, accountability, and direct
                        involvement — not volume-driven case handling.
                    </p>
                </div>

                {/* Divider */}
                <div className="mt-10 h-px w-full bg-gray-200" />

                {/* Grid */}
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {FEATURES.map((item) => (
                        <div
                            key={item.title}
                            className="rounded-xl border border-gray-200 bg-white p-8"
                        >
                            <h3 className="font-playfair text-xl font-medium text-gray-900">
                                {item.title}
                            </h3>
                            <p className="mt-4 text-sm leading-relaxed text-gray-700">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
