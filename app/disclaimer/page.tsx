import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Disclaimer | Lawcraft Advocates",
    description:
        "Legal disclaimer for Lawcraft Advocates. Information on this site is for general guidance only and does not constitute legal advice.",
};

const sections = [
    {
        heading: "General Information Only",
        body: "The information provided on this website is for general informational purposes only. Nothing on this site constitutes legal advice or creates an advocate-client relationship between Lawcraft Advocates and any visitor.",
    },
    {
        heading: "No Advocate-Client Relationship",
        body: "Visiting this website or contacting Lawcraft Advocates through this platform does not create an advocate-client relationship. An advocate-client relationship is only established through a formal written engagement agreement signed by both parties.",
    },
    {
        heading: "Accuracy of Information",
        body: "While we endeavour to keep the information on this website accurate and up to date, we make no representations or warranties of any kind regarding the completeness, accuracy, or suitability of the information provided.",
    },
    {
        heading: "Third Party Links",
        body: "This website may contain links to third-party websites. Lawcraft Advocates has no control over the content of those sites and accepts no responsibility for them.",
    },
    {
        heading: "Jurisdiction",
        body: "This website is governed by the laws of India. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of courts in Noida, Uttar Pradesh.",
    },
    {
        heading: "Contact",
        body: "For any queries regarding this disclaimer, contact us at contact@lawcraft.in or call +91 9810053761.",
    },
];

export default function DisclaimerPage() {
    return (
        <main>
            <section className="bg-[#0f1f2e] py-16">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <p className="text-[#B8963E] text-xs tracking-[4px] uppercase">
                        Legal
                    </p>
                    <div className="w-8 h-px bg-[#B8963E] mx-auto mt-3 mb-6" />
                    <h1 className="font-serif text-4xl text-white font-normal">
                        Disclaimer
                    </h1>
                </div>
            </section>

            <section className="bg-[#F7F4EF] py-20">
                <div className="max-w-3xl mx-auto px-6">
                    <p className="text-gray-400 text-sm mb-10 italic border-b border-gray-200 pb-6">
                        Last updated: April 2026
                    </p>
                    {sections.map((s, i) => (
                        <div key={s.heading} className={i > 0 ? "mt-10" : ""}>
                            <h2 className="font-serif text-xl text-[#0f1f2e] font-normal mb-3">
                                {s.heading}
                            </h2>
                            <div className="w-8 h-px bg-[#B8963E] mb-5" />
                            <p className="text-gray-600 text-base leading-relaxed mb-4">
                                {s.body}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
