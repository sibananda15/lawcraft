import Container from "../ui/Container";

interface LawyerProfile {
    name: string;
    designation: string;
    location: string;
    experienceLine?: string;
    bio: string;
    focusAreas: string[];
    courts: string[];
}

interface LawyerProfileSectionProps {
    heading?: string; // Optional, can be ignored if we just want the profile
    profile: LawyerProfile;
}

const LawyerProfileSection = ({ profile }: LawyerProfileSectionProps) => {
    return (
        <section className="section bg-white border-y border-gray-100 py-24">
            <Container>
                <div className="grid md:grid-cols-2 gap-16 items-start">

                    {/* Left Column: Content */}
                    <div className="order-2 md:order-1 flex flex-col justify-center h-full">
                        <div className="mb-8">
                            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-3">
                                {profile.name}
                            </h2>
                            <p className="text-sm font-medium text-gray-500 tracking-[0.2em] uppercase">
                                {profile.designation}, {profile.location}
                            </p>
                        </div>

                        {/* Authority Line */}
                        {profile.experienceLine && (
                            <div className="mb-8 pl-6 border-l-2 border-gray-900">
                                <p className="text-xl font-serif font-medium text-gray-900 italic">
                                    "{profile.experienceLine}"
                                </p>
                            </div>
                        )}

                        <div className="w-12 h-px bg-gray-300 mb-8"></div>

                        <p className="text-lg text-gray-600 leading-relaxed font-light mb-12 max-w-lg">
                            {profile.bio}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 border-t border-gray-100 pt-8">
                            <div>
                                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4">Focus Areas</h4>
                                <ul className="space-y-2">
                                    {profile.focusAreas?.map((area, index) => (
                                        <li key={index} className="text-gray-700 text-sm font-medium border-b border-gray-50 pb-1 last:border-0">{area}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4">Admitted to Practice</h4>
                                <ul className="space-y-2">
                                    {profile.courts.map((court, index) => (
                                        <li key={index} className="text-gray-700 text-sm font-medium border-b border-gray-50 pb-1 last:border-0">{court}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Portrait */}
                    <div className="order-1 md:order-2 flex justify-end items-center">
                        <div className="relative w-full max-w-md aspect-[3/4] bg-stone-100 overflow-hidden shadow-sm">
                            <img
                                src="/images/advocate-portrait.png"
                                alt={profile.name}
                                className="w-full h-full object-cover grayscale contrast-110"
                            />
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
};

export default LawyerProfileSection;
