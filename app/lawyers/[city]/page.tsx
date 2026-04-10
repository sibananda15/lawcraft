import { locations } from "@/data/locations";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import ConsultationModalWrapper from "@/components/ui/ConsultationModalWrapper";

export async function generateStaticParams() {
    return locations.map((l) => ({ city: l.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ city: string }>;
}): Promise<Metadata> {
    const { city } = await params;
    const location = locations.find((l) => l.slug === city);
    if (!location) return {};
    return {
        title: location.metaTitle,
        description: location.metaDescription,
        keywords: location.keywords,
        openGraph: {
            title: location.metaTitle,
            description: location.metaDescription,
            url: `https://lawcraftadvocates.com/lawyers/${location.slug}`,
            type: "website",
        },
        alternates: {
            canonical: `https://lawcraftadvocates.com/lawyers/${location.slug}`,
        },
    };
}

export default async function CityPage({
    params,
}: {
    params: Promise<{ city: string }>;
}) {
    const { city } = await params;
    const location = locations.find((l) => l.slug === city);
    if (!location) notFound();

    return (
        <main>
            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LegalService",
                        name: "Lawcraft Advocates",
                        url: `https://lawcraftadvocates.com/lawyers/${location.slug}`,
                        telephone: "+919810053761",
                        email: "contact@lawcraft.in",
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: "B-83, Sector 72",
                            addressLocality: "Noida",
                            addressRegion: "Uttar Pradesh",
                            postalCode: "201301",
                            addressCountry: "IN",
                        },
                        areaServed: {
                            "@type": "State",
                            name: location.areaServed,
                        },
                        founder: {
                            "@type": "Person",
                            name: "Rajendra Panigrahi",
                            jobTitle: "Senior Advocate",
                            description:
                                "Supreme Court of India advocate with 20+ years experience",
                        },
                        description: location.metaDescription,
                        priceRange: "$$",
                        openingHours: "Mo-Sa 10:00-19:00",
                    }),
                }}
            />

            {/* ── SECTION 1 — HERO ── */}
            <section className="bg-[#0f1f2e] min-h-[55vh] flex items-center">
                <div className="max-w-4xl mx-auto px-6 py-20 text-center w-full">
                    <p className="text-[#B8963E] text-xs tracking-[4px] uppercase">
                        Lawcraft Advocates &middot; {location.city.toUpperCase()}
                    </p>
                    <div className="w-8 h-px bg-[#B8963E] mx-auto mt-3 mb-6" />
                    <h1 className="font-serif text-4xl md:text-5xl text-white font-normal leading-tight">
                        {location.headline}
                    </h1>
                    <p className="text-white/60 text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
                        {location.subheadline}
                    </p>

                    <div className="flex gap-4 justify-center flex-wrap mt-10">
                        <ConsultationModalWrapper
                            cityName={location.city}
                            label="Schedule Consultation"
                        />
                        <a
                            href="https://wa.me/919810053761"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-white/30 text-white px-8 py-3.5 text-xs tracking-[2px] uppercase rounded hover:bg-white/10 transition"
                        >
                            WhatsApp Now
                        </a>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10 flex justify-center gap-8 flex-wrap">
                        {[
                            "Supreme Court Advocate",
                            "20+ Years Experience",
                            location.localCourt,
                        ].map((item) => (
                            <div key={item} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#B8963E]" />
                                <span className="text-white/40 text-xs tracking-wide">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION 2 — ABOUT ── */}
            <section className="bg-[#F7F4EF] py-16 lg:py-24">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2">
                        <p className="text-[#B8963E] text-xs tracking-[4px] uppercase">
                            Serving {location.city.toUpperCase()}
                        </p>
                        <div className="w-8 h-px bg-[#B8963E] mt-3 mb-6" />
                        <h2 className="font-serif text-3xl text-[#0f1f2e] font-normal mb-6">
                            Expert Legal Counsel in {location.city}
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            {location.description1}
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-10">
                            {location.description2}
                        </p>

                        <div className="bg-white rounded-xl p-6 border border-gray-100">
                            <div className="flex items-start gap-4">
                                <span className="text-[#B8963E] text-2xl mt-0.5">&#9878;</span>
                                <div>
                                    <h3 className="font-serif text-lg text-[#0f1f2e] font-normal mb-2">
                                        Courts We Appear In
                                    </h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        {location.courtNote}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="sticky top-24 bg-white rounded-2xl overflow-hidden border border-gray-100">
                            <div className="bg-[#0f1f2e] p-6">
                                <p className="font-serif text-lg text-white font-normal">
                                    Advocate Rajendra Panigrahi
                                </p>
                                <div className="w-8 h-px bg-[#B8963E] mt-2 mb-3" />
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                    <span className="text-white/50 text-xs tracking-wide">
                                        Available for consultation
                                    </span>
                                </div>
                            </div>
                            <div className="p-6 space-y-3">
                                {[
                                    "Supreme Court of India",
                                    "Bar Council of Delhi",
                                    "20+ Years Experience",
                                    "Enrolled Advocate",
                                ].map((badge) => (
                                    <span
                                        key={badge}
                                        className="block bg-[#F7F4EF] text-[#B8963E] text-xs px-3 py-2 rounded-lg font-medium"
                                    >
                                        {badge}
                                    </span>
                                ))}

                                <div className="w-full h-px bg-gray-100 my-4" />

                                <ConsultationModalWrapper
                                    cityName={location.city}
                                    variant="navy"
                                />
                                <a
                                    href="https://wa.me/919810053761"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center border border-[#B8963E] text-[#B8963E] py-3 rounded-lg text-xs tracking-[2px] uppercase mt-3 hover:bg-[#B8963E] hover:text-white transition-colors"
                                >
                                    WhatsApp Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 3 — PRACTICE AREAS ── */}
            <section className="bg-white py-16 lg:py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-14">
                        <p className="text-[#B8963E] text-xs tracking-[4px] uppercase">
                            Practice Areas
                        </p>
                        <div className="w-8 h-px bg-[#B8963E] mx-auto mt-3 mb-5" />
                        <h2 className="font-serif text-3xl text-[#0f1f2e] font-normal">
                            How We Help Clients in {location.city}
                        </h2>
                        <p className="text-gray-400 text-sm mt-3">
                            Expert representation across all major legal matters in{" "}
                            {location.city} and surrounding areas.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                        {location.practiceHighlights.map((item) => (
                            <Link
                                key={item.title}
                                href={item.link}
                                className="group border border-gray-100 rounded-xl p-6 hover:border-[#B8963E] transition block"
                            >
                                <span className="text-[#B8963E] text-xl block mb-3">
                                    &#9878;
                                </span>
                                <h3 className="font-serif text-lg text-[#0f1f2e] group-hover:text-[#B8963E] transition-colors font-normal">
                                    {item.title}
                                </h3>
                                <p className="text-xs text-gray-400 mt-2 group-hover:text-[#B8963E] transition-colors">
                                    Learn more &rarr;
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION 5 — BOTTOM CTA ── */}
            <section className="bg-[#0f1f2e] py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <p className="text-[#B8963E] text-xs tracking-[4px] uppercase">
                        Get In Touch
                    </p>
                    <div className="w-8 h-px bg-[#B8963E] mx-auto mt-3 mb-6" />
                    <h2 className="font-serif text-3xl md:text-4xl text-white font-normal">
                        Require Legal Assistance in {location.city}?
                    </h2>
                    <p className="text-white/40 text-sm mt-4">
                        Direct access to senior counsel — no intermediaries, no delays.
                    </p>
                    <a
                        href="tel:+919810053761"
                        className="block font-serif text-2xl text-[#B8963E] mt-6 hover:text-[#d4a84e] transition-colors"
                    >
                        +91 9810053761
                    </a>
                    <p className="text-white/30 text-xs mt-2">
                        Available Mon&ndash;Sat, 10:00 AM &ndash; 7:00 PM
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap mt-8">
                        <ConsultationModalWrapper
                            cityName={location.city}
                            label="Schedule Consultation"
                        />
                        <a
                            href="https://wa.me/919810053761"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-white/30 text-white px-8 py-3.5 text-xs tracking-[2px] uppercase rounded hover:bg-white/10 transition"
                        >
                            WhatsApp Now
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
