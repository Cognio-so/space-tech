import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { WhySpaceTech } from "@/components/WhySpaceTech";
import { WhoWeServePreview } from "@/components/WhoWeServePreview";
import { ServicesGrid } from "@/components/ServicesGrid";
import { CTABanner } from "@/components/CTABanner";
import { AboutPreview } from "@/components/AboutPreview";
import { FAQSection } from "@/components/FAQSection";
import { LogoHighlight } from "@/components/LogoHighlight";
import { PolicySection } from "@/components/PolicySection";
import { SuccessMetrics } from "@/components/SuccessMetrics";
import { TestimonialsSection } from "@/components/TestimonialsSection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <SuccessMetrics />
      <WhySpaceTech />
      <WhoWeServePreview />
      <ServicesGrid />
      <LogoHighlight />
      <TestimonialsSection />
      <CTABanner />
      <AboutPreview />
      <FAQSection />
      <PolicySection />
    </Layout>
  );
};

export default Index;
