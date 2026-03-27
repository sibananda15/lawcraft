import React from "react";
import Container from "../ui/Container";
import Link from "next/link";
import { practiceAreasData } from "../../data/practiceAreas";

const PracticeAreasSection = () => {
    return (
        <section className="py-16 md:py-24 bg-white" id="practice-areas">
            <Container>
                {/* Section Wrapper */}
                <div className="bg-gradient-to-b from-[#f8f6f2] to-[#fdfcfb] border border-[rgba(15,23,42,0.08)] shadow-sm px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-20">
                    {/* Section Heading */}
                    <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
                        <span className="block text-xs md:text-sm font-sans font-semibold tracking-[0.2em] text-[#b08d57] uppercase mb-4">
                            Our Expertise
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-[#0f172a] mb-8">
                            Practice Areas
                        </h2>
                        <div className="w-16 h-[1px] bg-[#b08d57] mx-auto mb-8"></div>
                        <p className="font-sans text-lg md:text-xl text-[#5b6470] max-w-2xl mx-auto leading-relaxed">
                            Comprehensive legal counsel across civil, criminal, and commercial matters.
                        </p>
                    </div>

                    {/* 3-Column Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {practiceAreasData.map((category) => (
                            <div 
                                key={category.title} 
                                className="group flex flex-col bg-white bg-gradient-to-b from-white to-[#f8f6f2]/40 border border-[rgba(15,23,42,0.08)] border-t-[3px] border-t-[#b08d57] px-8 pt-8 pb-4 md:px-10 md:pt-10 md:pb-6 lg:px-12 lg:pt-12 lg:pb-8 transition-all duration-500 ease-out shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_40px_rgba(15,23,42,0.08)] hover:-translate-y-1.5 h-full"
                            >
                                <h3 className="text-2xl md:text-3xl font-serif text-[#0f172a] mt-2">
                                    {category.title}
                                </h3>
                                <div className="w-10 h-[1px] bg-[#b08d57] mt-8 mb-10 transition-all duration-500 group-hover:w-16"></div>
                                <ul className="flex-grow flex flex-col">
                                    {category.items.map((item) => (
                                        <li key={item.title} className="border-b border-[rgba(15,23,42,0.06)] last:border-0 border-solid">
                                            <Link
                                                href={`/practice/${item.slug}`}
                                                className="group/item flex items-center justify-between py-4 sm:py-5 text-[#5b6470] transition-all duration-300 hover:translate-x-1.5"
                                            >
                                                <span className="font-sans text-[1.05rem] leading-relaxed pr-2 group-hover/item:text-[#b08d57] transition-colors duration-300">{item.title}</span>
                                                <span className="text-[#b08d57] opacity-0 -translate-x-4 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-lg">
                                                    →
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default PracticeAreasSection;
