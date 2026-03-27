import React from "react";
import Container from "../ui/Container";

const FEATURES = [
    {
        title: "Advocate-Led Legal Practice",
        description:
            "A principal-driven practice where every case is strategically overseen by the lead advocate, supported by a dedicated legal team to ensure consistency, accountability, and thorough preparation.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
        ),
    },
    {
        title: "Clear Legal Strategy",
        description:
            "Every matter begins with a structured legal assessment. Clients receive realistic options, risks, and timelines — no vague assurances or inflated promises.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
        ),
    },
    {
        title: "Courtroom & Advisory Experience",
        description:
            "Extensive hands-on experience across litigation, drafting, negotiations, and court proceedings with a practical understanding of how cases progress on the ground.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
    },
    {
        title: "Transparent Communication",
        description:
            "Clear updates, documented advice, and clarity at every stage — ensuring clients remain informed without unnecessary legal jargon or uncertainty.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        ),
    },
];

export default function WhyChoose() {
    return (
        <section className="bg-[#f8f6f2] py-24 md:py-32 border-b border-[rgba(15,23,42,0.08)]">
            <Container>
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-20 md:mb-24">
                    <span className="block text-xs md:text-sm font-sans font-semibold tracking-[0.2em] text-[#b08d57] uppercase mb-4">
                        The Firm's Advantage
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-[#0f172a] mb-8 leading-[1.1]">
                        Why Clients Choose This Practice
                    </h2>
                    <div className="w-16 h-[1px] bg-[#b08d57] mx-auto mb-8"></div>
                    <p className="text-lg md:text-xl font-sans text-[#5b6470] leading-relaxed max-w-2xl mx-auto">
                        Legal representation built on clarity, accountability, and direct involvement.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 max-w-7xl mx-auto">
                    {FEATURES.map((item) => (
                        <div
                            key={item.title}
                            className="group p-10 md:p-14 bg-white border border-[rgba(15,23,42,0.04)] border-t-[3px] border-t-transparent hover:border-t-[#b08d57] shadow-[0_8px_30px_rgba(15,23,42,0.03)] hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)] transform hover:-translate-y-1 transition-all duration-500 flex flex-col items-start rounded-sm"
                        >
                            <div className="mb-8 text-[#b08d57] opacity-80 group-hover:opacity-100 group-hover:scale-110 transform transition-all duration-500">
                                {item.icon}
                            </div>
                            <h3 className="font-serif text-2xl md:text-3xl font-normal text-[#0f172a] mb-5 group-hover:text-[#b08d57] transition-colors duration-500">
                                {item.title}
                            </h3>
                            <div className="w-10 h-[1px] bg-[#b08d57] opacity-30 mb-6 group-hover:w-20 group-hover:opacity-100 transition-all duration-500"></div>
                            <p className="font-sans text-[1.05rem] md:text-lg text-[#5b6470] leading-loose">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
