import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { WhySpaceTech } from "@/components/WhySpaceTech";
import { WhoWeServePreview } from "@/components/WhoWeServePreview";
import { ServicesGrid } from "@/components/ServicesGrid";
import { CTABanner } from "@/components/CTABanner";
import { AboutPreview } from "@/components/AboutPreview";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <WhySpaceTech />
      <WhoWeServePreview />
      <ServicesGrid />
      <CTABanner />
      <AboutPreview />
    </Layout>
  );
};

export default Index;
