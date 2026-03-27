import "./globals.css";
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

export const metadata = {
  title: `${siteConfig.firmName} - Premium Law Firm`,
  description: "Clear, responsible, and experienced legal guidance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex flex-col min-h-screen">
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
          practiceLinks={getAllPracticeItems().slice(0, 8).map((item) => ({
            label: item.title,
            href: `/practice/${item.slug}`,
          }))}
        />
      </body>
    </html>
  );
}
