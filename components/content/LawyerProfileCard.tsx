import React from 'react';

interface LawyerProfileCardProps {
    name: string;
    designation: string;
    bio: string;
    courts: string[];
}

const LawyerProfileCard = ({
    name,
    designation,
    bio,
    courts,
}: LawyerProfileCardProps) => {
    return (
        <article className="bg-white p-8 md:p-12 border border-gray-200 max-w-3xl mx-auto">
            <header className="mb-8 text-center">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {name}
                </h3>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">
                    {designation}
                </p>
            </header>

            <div className="space-y-8">
                <section>
                    <p className="text-lg text-gray-700 leading-relaxed text-center italic">
                        "{bio}"
                    </p>
                </section>

                <section className="text-center pt-8 border-t border-gray-100">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                        Practicing before
                    </h4>
                    <div className="flex flex-wrap justify-center gap-2">
                        {courts.map((court) => (
                            <span
                                key={court}
                                className="px-3 py-1 bg-gray-50 text-gray-700 text-sm font-medium border border-gray-200"
                            >
                                {court}
                            </span>
                        ))}
                    </div>
                </section>
            </div>
        </article>
    );
};

export default LawyerProfileCard;
