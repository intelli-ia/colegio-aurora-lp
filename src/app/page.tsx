import HeroSection from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Manifesto from "@/components/Manifesto";
import Services from "@/components/Services";
import PorQueAurora from "@/components/PorQueAurora";
import Bilingue from "@/components/Bilingue";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import TestimonialsScreenshots from "@/components/TestimonialsScreenshots";
import FAQSection from "@/components/FAQ";
import { FinalCTASection } from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <PorQueAurora />
      <Manifesto />
      <Services />
      <Bilingue />
      <Gallery />
      <About />
      <SocialProof />
      <TestimonialsScreenshots />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
}
