import React from "react";
import Container from "../ui/Container";

const FEATURES = [
    {
        title: "Advocate-Led Legal Practice",
        description:
            "A principal-driven practice where every case is strategically overseen by the lead advocate, supported by a dedicated legal team to ensure consistency, accountability, and thorough preparation.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
        ),
    },
    {
        title: "Clear Legal Strategy",
        description:
            "Every matter begins with a structured legal assessment. Clients receive realistic options, risks, and timelines — no vague assurances or inflated promises.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
        ),
    },
    {
        title: "Courtroom & Advisory Experience",
        description:
            "Extensive hands-on experience across litigation, drafting, negotiations, and court proceedings with a practical understanding of how cases progress on the ground.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
    },
    {
        title: "Transparent Communication",
        description:
            "Clear updates, documented advice, and clarity at every stage — ensuring clients remain informed without unnecessary legal jargon or uncertainty.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        ),
    },
];

export default function WhyChoose() {
    return (
        <section className="bg-white py-24 border-b border-gray-100">
            <Container>
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Why Clients Choose This Practice
                    </h2>
                    <p className="text-xl font-sans text-gray-600 leading-relaxed font-light">
                        Legal representation built on clarity, accountability, and direct involvement.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {FEATURES.map((item) => (
                        <div
                            key={item.title}
                            className="group p-10 bg-white border border-gray-200 rounded-sm hover:border-slate-800 hover:shadow-md transition-all duration-300 flex flex-col items-start"
                        >
                            <div className="mb-6 p-3 bg-slate-50 rounded-full text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                                {item.icon}
                            </div>
                            <h3 className="font-serif text-xl font-bold text-slate-900 mb-4">
                                {item.title}
                            </h3>
                            <p className="font-sans text-gray-600 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
