import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import { siteConfig } from "@/data/siteConfig";
import PracticeAreasSection from "@/components/sections/PracticeAreasSection";
import { practiceAreas } from "@/data/practiceAreas";
import LawyerProfileSection from "@/components/sections/LawyerProfileSection";
import { lawyerProfile } from "@/data/lawyerProfile";
import WhyChoose from "@/components/sections/WhyChoose";
import ContactSection from "@/components/sections/ContactSection";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import Footer from "@/components/layout/Footer";


export default function HomePage() {
  return (
    <>
      <Header
        logoText={siteConfig.firmName}
        phone={siteConfig.phone}
        whatsapp={siteConfig.whatsapp}
        navLinks={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Practice Areas", href: "#practice-areas" },
          { label: "Contact", href: "/contact" },
        ]}
      />

      <main>
        <HeroSection
          primaryAction={{ label: "Call Now", href: "tel:+91 9810053761" }}
          secondaryAction={{ label: "WhatsApp", href: "https://wa.me/919999999999" }}
        />
        <PracticeAreasSection />

        <WhyChoose />
        <ContactSection
          heading="Contact Advocate"
          phone={siteConfig.phone}
          whatsapp={siteConfig.whatsapp}
          address="B-83, Sector 72, Noida, Uttar Pradesh"
        />
        <Footer
          firmName={siteConfig.firmName}
          address="B-83, Sector 72, Noida, Uttar Pradesh"
          phone={siteConfig.phone}
          practiceLinks={practiceAreas.map((area) => ({
            label: area.title,
            href: area.href,
          }))}
        />
        <StickyMobileCTA
          phone={siteConfig.phone}
          whatsapp={siteConfig.whatsapp}
        />


      </main>
    </>
  );
}
