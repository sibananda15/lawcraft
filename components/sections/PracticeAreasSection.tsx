import React from "react";
import Container from "../ui/Container";
import PracticeAreaCard from "./PracticeAreaCard";

import { practiceAreas } from "../../data/practiceAreas";

const PracticeAreasSection = () => {
    return (
        <section className="py-24 bg-stone-50">
            <Container>
                {/* Heading */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                        Practice Areas
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                        Focused legal practice across criminal, family, property, and
                        consumer matters with regular court appearances in Delhi and NCR.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                    {practiceAreas.map((area, index) => (
                        <PracticeAreaCard
                            key={area.title}
                            title={area.title}
                            description={area.description}
                            href={area.href}
                            variant={index < 3 ? 'primary' : 'secondary'}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default PracticeAreasSection;
