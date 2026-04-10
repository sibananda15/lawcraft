import { getAllPracticeItems } from "@/data/practiceAreas";
import { locations } from "@/data/locations";
import type { MetadataRoute } from "next";

const BASE = "https://lawcraftadvocates.com";

export default function sitemap(): MetadataRoute.Sitemap {
    const practicePages = getAllPracticeItems().map((item) => ({
        url: `${BASE}/practice/${item.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
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
        { url: `${BASE}/lawyers`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
        ...practicePages,
        ...locationPages,
    ];
}
