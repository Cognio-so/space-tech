import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Plug, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTABanner } from "@/components/CTABanner";
import serviceIntegrations from "@/assets/service-integrations.jpg";

const features = [
  "API Development & Integration",
  "Third-Party System Connections",
  "Payment Platform Integration",
  "CRM & Marketing Systems",
  "Accounting Systems",
  "Document Management",
  "Property Portals",
  "IoT & Smart Building",
];

const benefits = [
  {
    title: "Unified Data",
    description: "Break down silos and create a single source of truth across systems.",
  },
  {
    title: "Streamlined Operations",
    description: "Eliminate duplicate data entry and manual processes.",
  },
  {
    title: "Real-time Sync",
    description: "Keep all systems in sync with automated data flows.",
  },
  {
    title: "Scalable Architecture",
    description: "Integration framework that grows with your business.",
  },
];

const ServiceIntegrations = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
              <Plug className="h-8 w-8 text-primary" />
            </div>
            <h1 className="section-heading mb-6">System Integrations</h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Seamlessly connect Yardi with your existing technology ecosystem 
              for unified operations and data flow.
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
                src={serviceIntegrations}
                alt="System Integrations"
                className="aspect-video w-full rounded-lg object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold md:text-4xl">
                Connect Your Entire Tech Stack
              </h2>
              <p className="text-lg text-muted-foreground">
                Our integration experts build robust connections between Yardi and 
                your other business systems, creating a unified technology ecosystem 
                that eliminates data silos and manual processes.
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
            <h2 className="section-heading mb-4">Integration Benefits</h2>
            <p className="section-subheading mx-auto">
              Create a connected ecosystem that drives efficiency.
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

export default ServiceIntegrations;
