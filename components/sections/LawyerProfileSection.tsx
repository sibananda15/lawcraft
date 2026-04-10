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
        <section className="relative bg-warm-white border-y border-gray-100 flex flex-col md:block">
            
            {/* Right Column: Edge-to-Edge Full Height Editorial Image */}
            <div className="order-1 md:order-2 md:absolute md:top-0 md:bottom-0 md:right-0 md:w-[50%] lg:w-[55%] relative w-full h-[500px] sm:h-[600px] md:h-auto overflow-hidden bg-stone-900">
                
                {/* 
                  The portrait image strongly contrasted against its subtle dark gradients. 
                  Tighter crop on face via scale, avoiding passport styling.
                */}
                <img
                    src="/images/advocate-portrait.jpeg"
                    alt="Senior Advocate Rajendra Panigrahi – Lawcraft Advocates"
                    className="absolute inset-0 w-full h-full object-cover object-[50%_15%] scale-[1.05]"
                    loading="lazy"
                />

                {/* Sublte dark background gradient to give contrast and depth to the black coat */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-900/10 to-transparent mix-blend-multiply"></div>

                {/* Left side soft gradient integrating the image flawlessly into the stark white text column */}
                <div className="absolute inset-y-0 left-0 w-32 md:w-64 lg:w-96 bg-gradient-to-r from-warm-white via-white/60 to-transparent hidden md:block"></div>
                
                {/* Mobile top-text integration fade */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-warm-white to-transparent md:hidden"></div>
            </div>

            <Container className="relative z-10 order-2 md:order-1">
                <div className="grid md:grid-cols-2">
                    {/* Left Column: Authoritative Text Layout */}
                    <div className="md:pr-12 lg:pr-24 py-16 md:py-32 flex flex-col justify-center min-h-[60vh] md:min-h-[85vh]">
                        
                        <div className="mb-10">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 leading-tight mb-4">
                                {profile.name}
                            </h2>
                            <p className="text-xs md:text-sm font-semibold text-gray-500 tracking-[0.25em] uppercase">
                                {profile.designation} <span className="mx-2 font-light text-gray-300">|</span> {profile.location}
                            </p>
                        </div>

                        {/* Strong Authority Experience Quote */}
                        {profile.experienceLine && (
                            <div className="mb-10 pl-8 md:pl-10 border-l-[3px] border-gray-900">
                                <p className="text-xl md:text-2xl font-serif font-medium text-gray-900 italic leading-snug">
                                    "{profile.experienceLine}"
                                </p>
                            </div>
                        )}

                        <div className="w-16 h-px bg-gray-300 mb-10"></div>

                        <p className="text-lg text-gray-600 leading-relaxed font-light mb-16 max-w-lg">
                            {profile.bio}
                        </p>

                        <div className="grid sm:grid-cols-2 gap-12 pt-10 border-t border-gray-100">
                            <div>
                                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-6">Focus Areas</h4>
                                <ul className="space-y-4">
                                    {profile.focusAreas?.map((area, index) => (
                                        <li key={index} className="flex items-center text-gray-600 text-sm font-medium">
                                            <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3"></span>
                                            {area}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-6">Admitted to Practice</h4>
                                <ul className="space-y-4">
                                    {profile.courts.map((court, index) => (
                                        <li key={index} className="flex items-center text-gray-600 text-sm font-medium">
                                            <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3"></span>
                                            {court}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </Container>

        </section>
    );
};

export default LawyerProfileSection;
