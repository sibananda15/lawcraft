import { notFound } from "next/navigation";
import { getAllPracticeItems, getPracticeItemBySlug, getPracticeCategoryBySlug, practiceAreasData } from "../../../data/practiceAreas";
import { siteConfig } from "../../../data/siteConfig";
import Container from "../../../components/ui/Container";
import Link from "next/link";
import React from "react";

export async function generateStaticParams() {
    return getAllPracticeItems().map((item) => ({
        slug: item.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const item = getPracticeItemBySlug(resolvedParams.slug);
    
    if (!item) {
        return { title: 'Practice Area Not Found' };
    }

    return {
        title: `${item.title} | Premium Law Firm`,
        description: item.shortDescription,
    };
}

export default async function PracticeAreaDetail({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const item = getPracticeItemBySlug(resolvedParams.slug);

    if (!item) {
        notFound();
    }

    const category = getPracticeCategoryBySlug(resolvedParams.slug);
    const categoryData = practiceAreasData.find(c => c.title === category);
    const relatedItems = categoryData?.items.filter(i => i.slug !== item.slug).slice(0, 4) || [];

    return (
        <main className="min-h-screen bg-white pt-24 pb-0">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-[#f8f6f2] to-[#fdfcfb] border-b border-[rgba(15,23,42,0.08)] py-12 md:py-20 lg:py-24">
                <Container>
                    <div className="max-w-6xl mx-auto">
                        {/* Breadcrumb & Navigation */}
                        <div className="mb-12 md:mb-16">
                            <div className="flex flex-wrap items-center text-xs sm:text-sm font-sans text-gray-400 mb-6 tracking-wide">
                                <Link href="/" className="hover:text-[#b08d57] transition-colors">Home</Link>
                                <span className="mx-2 sm:mx-3 text-gray-300">/</span>
                                <Link href="/#practice-areas" className="hover:text-[#b08d57] transition-colors">Practice Areas</Link>
                                <span className="mx-2 sm:mx-3 text-gray-300">/</span>
                                <span className="text-gray-500">{category}</span>
                                <span className="mx-2 sm:mx-3 text-gray-300">/</span>
                                <span className="text-[#0f172a] font-medium">{item.title}</span>
                            </div>
                            
                            <Link href="/#practice-areas" className="inline-flex items-center text-sm font-sans font-medium text-[#b08d57] hover:text-[#0f172a] transition-colors group">
                                <span className="mr-2 group-hover:-translate-x-1.5 transition-transform duration-300 tracking-[-0.1em]">←</span> 
                                <span className="border-b border-transparent group-hover:border-[#0f172a] transition-colors">Back to Practice Areas</span>
                            </Link>
                        </div>

                        {/* Hero Content */}
                        <div className="max-w-4xl">
                            <span className="block text-xs md:text-sm font-sans font-semibold tracking-[0.2em] text-[#b08d57] uppercase mb-4">
                                Practice Area <span className="mx-3 opacity-40">|</span> {category}
                            </span>
                            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-normal text-[#0f172a] mb-8 leading-[1.1]">
                                {item.title}
                            </h1>
                            <div className="w-16 h-[1px] bg-[#b08d57] mb-8"></div>
                            <p className="font-sans text-lg md:text-xl lg:text-2xl text-[#5b6470] leading-relaxed max-w-2xl">
                                {item.shortDescription}
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Content Section */}
            <section className="py-16 md:py-24 lg:py-32">
                <Container>
                    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
                        {/* Main Content */}
                        <div className="lg:w-2/3 max-w-2xl">
                            <div className="prose prose-lg prose-blue max-w-none">
                                <h2 className="font-serif text-3xl md:text-4xl text-[#0f172a] mb-8">Overview</h2>
                                <p className="font-sans text-lg md:text-xl text-[#5b6470] leading-relaxed mb-16">
                                    {item.longDescription || "Detailed overview coming soon."}
                                </p>

                                {item.services && item.services.length > 0 && (
                                    <>
                                        <h2 className="font-serif text-3xl md:text-4xl text-[#0f172a] mb-8">Scope of Services</h2>
                                        <ul className="space-y-6 font-sans text-lg md:text-xl text-[#5b6470] pl-0">
                                            {item.services.map((service, index) => (
                                                <li key={index} className="flex items-start group">
                                                    <span className="text-[#b08d57] mr-5 mt-1 opacity-80 group-hover:opacity-100 transition-opacity flex-shrink-0">✓</span>
                                                    <span className="leading-relaxed group-hover:text-[#0f172a] transition-colors">{service}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </div>

                            {/* Related Services */}
                            {relatedItems.length > 0 && (
                                <div className="mt-20 lg:mt-32 pt-16 border-t border-[rgba(15,23,42,0.08)]">
                                    <h2 className="font-serif text-3xl text-[#0f172a] mb-8">Related Services</h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        {relatedItems.map((relatedItem) => (
                                            <Link
                                                key={relatedItem.slug}
                                                href={`/practice/${relatedItem.slug}`}
                                                className="group flex flex-col p-8 bg-stone-50 hover:bg-[#f8f6f2] border border-[rgba(15,23,42,0.06)] hover:border-[#b08d57]/30 hover:shadow-sm transition-all duration-300 rounded-sm"
                                            >
                                                <span className="font-serif text-xl text-[#0f172a] mb-3 group-hover:text-[#b08d57] transition-colors">{relatedItem.title}</span>
                                                <span className="font-sans text-[0.95rem] text-[#5b6470] line-clamp-2 leading-relaxed">{relatedItem.shortDescription}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Sidebar / CTA */}
                        <div className="lg:w-1/3 self-start sticky top-32">
                            <div className="bg-white bg-gradient-to-b from-white to-[#f8f6f2]/40 border border-[rgba(15,23,42,0.08)] border-t-[3px] border-t-[#b08d57] p-8 lg:p-12 shadow-[0_8px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_50px_rgba(15,23,42,0.08)] transition-all duration-500 rounded-sm">
                                <h3 className="font-serif text-3xl text-[#0f172a] mb-5">Require Legal Assistance?</h3>
                                <div className="w-12 h-[1px] bg-[#b08d57] mb-8"></div>
                                <p className="font-sans text-lg text-[#5b6470] mb-10 leading-relaxed">
                                    Our experienced team is ready to provide expert counsel tailored to your specific situation.
                                </p>
                                
                                <div className="flex flex-col gap-4">
                                    <Link 
                                        href="/contact" 
                                        className="inline-flex items-center justify-center w-full bg-[#0f172a] text-white font-sans font-medium tracking-widest uppercase text-sm py-4 lg:py-5 px-6 hover:bg-[#b08d57] transition-colors duration-300 rounded-sm"
                                    >
                                        Book Consultation
                                    </Link>
                                    
                                    {siteConfig.whatsapp && (
                                        <a 
                                            href={`https://wa.me/${siteConfig.whatsapp}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center w-full bg-white border border-[#0f172a]/20 text-[#0f172a] font-sans font-medium tracking-widest uppercase text-sm py-4 lg:py-5 px-6 hover:border-[#b08d57] hover:text-[#b08d57] transition-colors duration-300 rounded-sm"
                                        >
                                            WhatsApp Now
                                        </a>
                                    )}
                                </div>

                                <div className="mt-10 text-center border-t border-[rgba(15,23,42,0.06)] pt-8">
                                    <span className="block text-sm font-sans text-gray-500 uppercase tracking-wider mb-2">Or Call Us At</span>
                                    <a 
                                        href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} 
                                        className="inline-block font-serif text-2xl text-[#0f172a] hover:text-[#b08d57] transition-colors"
                                    >
                                        {siteConfig.phone}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}
