import HeroSection from "@/components/sections/HeroSection";
import { siteConfig } from "@/data/siteConfig";
import PracticeAreasSection from "@/components/sections/PracticeAreasSection";
import LawyerProfileSection from "@/components/sections/LawyerProfileSection";
import { lawyerProfile } from "@/data/lawyerProfile";
import WhyChoose from "@/components/sections/WhyChoose";
import ContactSection from "@/components/sections/ContactSection";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection
        primaryAction={{ label: "Get Legal Consultation", href: "tel:+919810053761" }}
        secondaryAction={{ label: "WhatsApp Now", href: "https://wa.me/919810053761" }}
      />
      
      {/* Trust Building Section explicitly placed below Hero for immediate reassurance */}
      <WhyChoose />

      <PracticeAreasSection />

      <ContactSection
        heading="Contact Advocate"
        phone={siteConfig.phone}
        whatsapp={siteConfig.whatsapp}
        address="B-83, Sector 72, Noida, Uttar Pradesh"
      />
      
      <StickyMobileCTA
        phone={siteConfig.phone}
        whatsapp={siteConfig.whatsapp}
      />
    </>
  );
}
