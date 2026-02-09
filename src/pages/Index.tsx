import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { StatsSection } from "@/components/StatsSection";
import { WhySpaceTech } from "@/components/WhySpaceTech";
import { WhoWeServePreview } from "@/components/WhoWeServePreview";
import { ServicesGrid } from "@/components/ServicesGrid";
import { CTABanner } from "@/components/CTABanner";
import { AboutPreview } from "@/components/AboutPreview";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <StatsSection />
      <WhySpaceTech />
      <WhoWeServePreview />
      <ServicesGrid />
      <CTABanner />
      <AboutPreview />
    </Layout>
  );
};

export default Index;
