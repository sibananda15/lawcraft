import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Lawcraft Advocates",
    description:
        "Privacy policy for Lawcraft Advocates. How we collect, use and protect your personal information.",
};

const sections = [
    {
        heading: "Information We Collect",
        body: "When you use our website or contact us, we may collect: your name, phone number, email address, and details about your legal matter that you voluntarily provide through our consultation form.",
    },
    {
        heading: "How We Use Your Information",
        body: "We use the information you provide solely to: respond to your enquiry, schedule consultations, and communicate with you about your legal matter. We do not sell, rent, or share your personal information with third parties for marketing purposes.",
    },
    {
        heading: "Data Security",
        body: "We take reasonable precautions to protect your personal information. All form submissions are transmitted securely. However, no method of transmission over the internet is 100% secure.",
    },
    {
        heading: "Cookies",
        body: "This website uses essential cookies to ensure proper functioning. We do not use tracking cookies for advertising purposes.",
    },
    {
        heading: "Your Rights",
        body: "You have the right to request access to, correction of, or deletion of your personal data held by us. To exercise these rights, contact us at contact@lawcraft.in.",
    },
    {
        heading: "Contact",
        body: "Privacy Officer: Lawcraft Advocates\nEmail: contact@lawcraft.in\nPhone: +91 9810053761\nAddress: B-83, Sector 72, Noida, Uttar Pradesh 201301",
    },
];

export default function PrivacyPolicyPage() {
    return (
        <main>
            <section className="bg-[#0f1f2e] py-16">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <p className="text-[#B8963E] text-xs tracking-[4px] uppercase">
                        Legal
                    </p>
                    <div className="w-8 h-px bg-[#B8963E] mx-auto mt-3 mb-6" />
                    <h1 className="font-serif text-4xl text-white font-normal">
                        Privacy Policy
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
                            <p className="text-gray-600 text-base leading-relaxed mb-4 whitespace-pre-line">
                                {s.body}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
