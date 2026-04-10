import { locations } from "@/data/locations";
import type { Metadata } from "next";

export async function generateStaticParams() {
    return locations.map((l) => ({ city: l.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ city: string }>;
}): Promise<Metadata> {
    const resolvedParams = await params;
    const location = locations.find((l) => l.slug === resolvedParams.city);
    if (!location) return {};
    return {
        title: location.metaTitle,
        description: location.metaDescription,
        keywords: location.keywords,
        openGraph: {
            title: location.metaTitle,
            description: location.metaDescription,
            url: `https://lawcraftadvocates.com/lawyers/${location.slug}`,
        },
    };
}

export default function CityLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
