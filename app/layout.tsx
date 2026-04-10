import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/data/siteConfig";
import { getAllPracticeItems } from "@/data/practiceAreas";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const siteUrl = "https://www.lawcraftadvocates.com";

export const metadata: Metadata = {
  title: "Lawcraft Advocates | Criminal & Civil Lawyer Noida | Rajendra Panigrahi",
  description:
    "Senior Advocate Rajendra Panigrahi offers expert criminal defence, civil litigation, family law & property dispute services in Noida, Delhi NCR. 20+ years of courtroom experience. Call for a consultation.",
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "Lawcraft Advocates | Criminal & Civil Lawyer Noida | Rajendra Panigrahi",
    description:
      "Senior Advocate Rajendra Panigrahi – 20+ years of distinguished practice in criminal defence, civil litigation, property disputes & family law across Noida and Delhi NCR.",
    url: siteUrl,
    type: "website",
    siteName: siteConfig.firmName,
  },
  twitter: {
    card: "summary_large_image",
    title: "Lawcraft Advocates | Criminal & Civil Lawyer Noida",
    description:
      "Expert legal representation in criminal, civil, family & property matters. Senior Advocate Rajendra Panigrahi – Noida, Delhi NCR.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex flex-col min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              name: siteConfig.firmName,
              description:
                "Senior Advocate Rajendra Panigrahi – criminal defence, civil litigation, family law & property dispute services in Noida, Delhi NCR.",
              url: siteUrl,
              telephone: siteConfig.phone,
              address: {
                "@type": "PostalAddress",
                streetAddress: "B-83, Sector 72",
                addressLocality: "Noida",
                addressRegion: "Uttar Pradesh",
                postalCode: "201307",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 28.5808296,
                longitude: 77.3793651,
              },
              areaServed: ["Noida", "Delhi NCR", "New Delhi"],
              priceRange: "$$",
              openingHours: "Mo-Sa 09:00-18:00",
            }),
          }}
        />
        <Header
          logoText={siteConfig.firmName}
          phone={siteConfig.phone}
          whatsapp={siteConfig.whatsapp}
          navLinks={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Practice Areas", href: "/#practice-areas" },
            { label: "Contact", href: "/contact" },
          ]}
        />
        <main className="flex-grow">
          {children}
        </main>
        <Footer
          firmName={siteConfig.firmName}
          address="B-83, Sector 72, Noida, Uttar Pradesh"
          phone={siteConfig.phone}
          whatsapp={siteConfig.whatsapp}
          practiceLinks={getAllPracticeItems().slice(0, 8).map((item) => ({
            label: item.title,
            href: `/practice/${item.slug}`,
          }))}
        />
      </body>
    </html>
  );
}
