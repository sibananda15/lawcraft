import Link from "next/link";
import Container from "@/components/ui/Container";
import { locations } from "@/data/locations";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Lawyers Across Delhi NCR | Lawcraft Advocates",
    description:
        "Lawcraft Advocates serves clients across Noida, Delhi, Gurgaon, Ghaziabad, Greater Noida and Faridabad. Supreme Court advocate Rajendra Panigrahi.",
};

export default function LawyersIndexPage() {
    return (
        <main>
            {/* Hero */}
            <section className="bg-[#0f1f2e] py-20">
                <Container>
                    <div className="text-center max-w-2xl mx-auto">
                        <p className="text-[#B8963E] text-xs tracking-[4px] uppercase">
                            Locations
                        </p>
                        <div className="w-8 h-px bg-[#B8963E] mx-auto mt-3 mb-6" />
                        <h1 className="font-serif text-4xl md:text-5xl text-white font-normal">
                            Areas We Serve
                        </h1>
                        <p className="text-white/50 text-lg mt-4">
                            Expert legal representation across Delhi NCR and
                            beyond.
                        </p>
                    </div>
                </Container>
            </section>

            {/* City grid */}
            <section className="bg-[#F7F4EF] py-16 lg:py-24">
                <Container>
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {locations.map((loc) => (
                            <Link
                                key={loc.slug}
                                href={`/lawyers/${loc.slug}`}
                                className="group bg-white border border-gray-100 rounded-xl p-8 hover:border-[#B8963E] transition-all"
                            >
                                <p className="text-[#B8963E] text-[10px] tracking-[3px] uppercase mb-2">
                                    {loc.state}
                                </p>
                                <h2 className="font-serif text-2xl text-[#0f1f2e] font-normal mb-4 group-hover:text-[#B8963E] transition-colors">
                                    {loc.city}
                                </h2>
                                <div className="w-6 h-px bg-[#B8963E]/30 mb-4" />
                                <ul className="space-y-2 mb-6">
                                    {loc.practiceHighlights.slice(0, 3).map((ph) => (
                                        <li
                                            key={ph.title}
                                            className="flex items-center gap-2 text-sm text-gray-500"
                                        >
                                            <span className="w-1 h-1 rounded-full bg-[#B8963E]" />
                                            {ph.title}
                                        </li>
                                    ))}
                                </ul>
                                <span className="text-xs text-[#B8963E] tracking-[2px] uppercase group-hover:underline">
                                    Learn More &rarr;
                                </span>
                            </Link>
                        ))}
                    </div>
                </Container>
            </section>
        </main>
    );
}
