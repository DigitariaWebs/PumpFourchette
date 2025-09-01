import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import AboutSection from "@/components/sections/AboutSection";
import HeroSection from "@/components/sections/HeroSection";
import HighlightsSection from "@/components/sections/HighlightsSection";
import ServiceFeaturesSections from "@/components/sections/ServiceFeaturesSections";
import ServiceSection from "@/components/sections/ServiceSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FaqSection from "@/components/sections/FaqSection";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <HighlightsSection />
      <AboutSection />
      <ServiceFeaturesSections />
      <ServiceSection />
      <TestimonialsSection />
      <FaqSection />
      <Footer />
    </div>
  );
}
