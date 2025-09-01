import Header from "@/components/layout/Header"
import AboutSection from "@/components/sections/AboutSection";
import HeroSection from "@/components/sections/HeroSection";
import HighlightsSection from "@/components/sections/HighlightsSection";
import ServiceFeaturesSections from "@/components/sections/ServiceFeaturesSections";
import ServiceSection from "@/components/sections/ServiceSection";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <HighlightsSection />
      <AboutSection />
      <ServiceFeaturesSections />
      <ServiceSection />
    </div>
  );
}
