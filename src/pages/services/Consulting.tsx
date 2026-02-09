import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Settings, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTABanner } from "@/components/CTABanner";
import serviceConsulting from "@/assets/service-consulting.jpg";

const features = [
  "Implementation & Configuration",
  "System Optimization & Tuning",
  "Data Migration & Validation",
  "Training & Change Management",
  "Best Practices Advisory",
  "Health Check Assessments",
  "Module Configuration",
  "User Adoption Support",
];

const benefits = [
  {
    title: "Faster Implementation",
    description: "Reduce implementation time by up to 40% with our proven methodology.",
  },
  {
    title: "Maximized ROI",
    description: "Get the most out of your Yardi investment with expert configuration.",
  },
  {
    title: "Reduced Risk",
    description: "Minimize project risks with our experienced delivery team.",
  },
  {
    title: "Ongoing Support",
    description: "Post-implementation support to ensure long-term success.",
  },
];

const ServiceConsulting = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
              <Settings className="h-8 w-8 text-primary" />
            </div>
            <h1 className="section-heading mb-6">Yardi Consulting</h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              End-to-end Yardi implementation, configuration, and optimization services 
              to maximize your investment and drive operational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="glass-card overflow-hidden p-2">
              <img
                src={serviceConsulting}
                alt="Yardi Consulting"
                className="aspect-video w-full rounded-lg object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold md:text-4xl">
                Expert Yardi Implementation & Optimization
              </h2>
              <p className="text-lg text-muted-foreground">
                Our certified Yardi consultants bring years of experience across 
                all Yardi modules and property types. We ensure your implementation 
                is configured for maximum efficiency and aligned with your business processes.
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="group gap-2">
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-y bg-muted/30 py-20 md:py-28">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="section-heading mb-4">Why Choose Our Consulting Services</h2>
            <p className="section-subheading mx-auto">
              Deliver faster, reduce risk, and maximize your Yardi investment.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="glass-card p-6 text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="mb-2 text-lg font-semibold">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
};

export default ServiceConsulting;
