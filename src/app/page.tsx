import { Header } from "@/components/header/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { FourServicesSection } from "@/components/sections/FourServicesSection";
import { CaseStudiesPreviewSection } from "@/components/sections/CaseStudiesPreviewSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FreeAuditSection } from "@/components/sections/FreeAuditSection";
import { WhyContinuiqSection } from "@/components/sections/WhyContinuiqSection";
import { ClientStripSection } from "@/components/sections/ClientStripSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <ProblemSection />
        <FourServicesSection />
        <CaseStudiesPreviewSection />
        <ProcessSection />
        <FreeAuditSection />
        <WhyContinuiqSection />
        <ClientStripSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
