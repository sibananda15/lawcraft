import React from "react";
import Container from "../ui/Container";
import Link from "next/link";
import { practiceAreasData } from "../../data/practiceAreas";

const PracticeAreasSection = () => {
    return (
        <section className="py-16 lg:py-24 bg-[#F8F6F2]" id="practice-areas">
            <Container>
                {/* Section Heading */}
                <div className="max-w-3xl mx-auto text-center mb-16 px-4">
                    <p className="eyebrow text-gold">
                        Our Expertise
                    </p>
                    <div className="w-12 h-px bg-gold mx-auto mt-3 mb-6" />
                    <h2 className="font-serif text-[28px] md:text-[32px] lg:text-[36px] font-medium text-[#0B1C2E] mb-6 leading-[1.2]">
                        Practice Areas
                    </h2>
                    <div className="w-[60px] h-[1px] bg-[#C5A46D] mx-auto mb-6"></div>
                    <p className="font-sans text-[16px] text-[#5B6470] max-w-2xl mx-auto leading-[1.7]">
                        Comprehensive legal counsel across civil, criminal, and commercial matters.
                    </p>
                </div>

                {/* 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                    {practiceAreasData.map((category) => (
                        <div 
                            key={category.title} 
                            className="group flex flex-col bg-white border border-[rgba(11,28,46,0.06)] border-t-[3px] border-t-transparent hover:border-t-[#C5A46D] px-8 py-10 transition-all duration-500 shadow-[0_4px_16px_rgba(11,28,46,0.03)] hover:shadow-[0_16px_40px_rgba(11,28,46,0.06)] hover:-translate-y-1 rounded-sm h-full"
                        >
                            <h3 className="font-serif text-[20px] md:text-[22px] font-medium text-[#0B1C2E] mb-6 group-hover:text-[#C5A46D] transition-colors duration-300">
                                {category.title}
                            </h3>
                            <div className="w-8 h-[1px] bg-[rgba(197,164,109,0.3)] mb-8 transition-all duration-500 group-hover:w-16 group-hover:bg-[#C5A46D]"></div>
                            <ul className="flex-grow flex flex-col space-y-2">
                                {category.items.map((item) => (
                                    <li key={item.title} className="w-full">
                                        <Link
                                            href={`/practice/${item.slug}`}
                                            className="group/item flex items-center justify-between w-full py-2.5 text-[#5B6470] hover:text-[#C5A46D] transition-colors duration-300"
                                        >
                                            <span className="font-sans text-[16px] leading-[1.6] transform transition-transform duration-300 ease-out group-hover/item:translate-x-1.5">
                                                {item.title}
                                            </span>
                                            <span className="text-[#C5A46D] text-[18px] opacity-0 -translate-x-3 transition-all duration-300 ease-out group-hover/item:opacity-100 group-hover/item:translate-x-0">
                                                →
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default PracticeAreasSection;
