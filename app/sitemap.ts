import { getAllPracticeItems } from "@/data/practiceAreas";
import { locations } from "@/data/locations";
import type { MetadataRoute } from "next";

const BASE = "https://lawcraftadvocates.com";

const HIGH_PRIORITY_SLUGS = [
    "bail-anticipatory-bail",
    "fir-police-proceedings",
    "trial-criminal-defense",
    "property-real-estate-law",
];

export default function sitemap(): MetadataRoute.Sitemap {
    const practicePages = getAllPracticeItems().map((item) => ({
        url: `${BASE}/practice/${item.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: HIGH_PRIORITY_SLUGS.includes(item.slug) ? 0.8 : 0.7,
    }));

    const locationPages = locations.map((loc) => ({
        url: `${BASE}/lawyers/${loc.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    return [
        { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
        { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
        { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE}/lawyers`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
        ...practicePages,
        ...locationPages,
        { url: `${BASE}/disclaimer`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
        { url: `${BASE}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
        { url: `${BASE}/terms-of-service`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    ];
}
