import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import BidangSection from "@/components/bidang-section";
import WhyUsSection from "@/components/why-us-section";
import GaleriSection from "@/components/galeri-section";
import FAQSection from "@/components/faq-section";
import TimelineSection from "@/components/timeline-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <BidangSection />
      <WhyUsSection />
      <GaleriSection />
      <TimelineSection />
      <FAQSection />
    </main>
  );
}
