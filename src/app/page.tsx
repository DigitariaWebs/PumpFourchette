import Header from "@/components/layout/Header"
import AboutSection from "@/components/sections/AboutSection";
import HeroSection from "@/components/sections/HeroSection";
import HighlightsSection from "@/components/sections/HighlightsSection";
import ServiceFeaturesSections from "@/components/sections/ServiceFeaturesSections";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <HighlightsSection />
      <AboutSection />
      <ServiceFeaturesSections />
    </div>
  );
}
