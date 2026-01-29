import Container from "../ui/Container";

interface LawyerProfile {
    name: string;
    designation: string;
    location: string;
    bio: string;
    focusAreas: string[];
    courts: string[];
}

interface LawyerProfileSectionProps {
    heading: string;
    profile: LawyerProfile;
}

const LawyerProfileSection = ({ heading, profile }: LawyerProfileSectionProps) => {
    return (
        <section className="section bg-neutral-50 border-y border-neutral-200">
            <Container>
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Content */}
                    <div className="order-2 md:order-1 space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 leading-tight">
                                {profile.name}
                            </h2>
                            <p className="text-lg text-gray-500 uppercase tracking-widest mt-2 font-medium">
                                {profile.designation}, {profile.location}
                            </p>
                        </div>

                        <div className="w-16 h-px bg-gray-400"></div>

                        <p className="text-xl text-gray-800 leading-relaxed font-light font-serif">
                            {profile.bio}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 pt-4 border-t border-gray-200">
                            <div>
                                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Focus Areas</h4>
                                <ul className="space-y-1">
                                    {profile.focusAreas?.map((area, index) => (
                                        <li key={index} className="text-gray-700 font-medium">{area}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Admitted to Practice</h4>
                                <ul className="space-y-1">
                                    {profile.courts.map((court, index) => (
                                        <li key={index} className="text-gray-700 font-medium">{court}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Portrait */}
                    <div className="order-1 md:order-2 flex justify-end">
                        <div className="relative w-full max-w-sm aspect-[4/5] bg-gray-200 overflow-hidden shadow-sm filter grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
                            <img
                                src="/images/advocate-portrait.png"
                                alt={profile.name}
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
};

export default LawyerProfileSection;
