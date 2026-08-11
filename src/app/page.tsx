import HeroSection from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import ModalidadesSection from "@/components/Modalidades";
import PorQueJetSalvador from "@/components/PorQueJetSalvador";
import DespachantaNautica from "@/components/DespachantaNautica";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import TestimonialsScreenshots from "@/components/TestimonialsScreenshots";
import FAQSection from "@/components/FAQ";
import { FinalCTASection } from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <SocialProof />
      <Services />
      <ModalidadesSection />
      <PorQueJetSalvador />
      <DespachantaNautica />
      <Gallery />
      <About />
      <TestimonialsScreenshots />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
}
