import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTABanner } from "@/components/CTABanner";
import serviceData from "@/assets/service-data.jpg";

const features = [
  "Legacy system data migration (Yardi ETL)",
  "Data cleansing",
  "Data mapping",
  "Data load and validation",
];

const benefits = [
  {
    title: "Data Quality",
    description: "Ensure accurate, reliable data across all systems.",
  },
  {
    title: "Seamless Migration",
    description: "Move data safely with zero business disruption.",
  },
  {
    title: "Scalable Pipelines",
    description: "Build data infrastructure that grows with you.",
  },
  {
    title: "Unified View",
    description: "Single source of truth for all property data.",
  },
];

const ServiceData = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
              <Database className="h-8 w-8 text-primary" />
            </div>
            <h1 className="section-heading mb-6">Data Migration</h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              End-to-end data migration services — from extraction and data mapping to loading and
              cleansing.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <h2 className="text-3xl font-bold md:text-4xl">Data Migration</h2>
              <p className="text-lg text-muted-foreground">
                End-to-end data migration services — from extraction and data mapping to loading
                and cleansing — ensuring your property data is accurate and ready from day one.
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {features.map((feature) => (
                  <li key={feature} className="text-sm text-muted-foreground">
                    {feature}
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
            <div className="order-1 lg:order-2 glass-card overflow-hidden p-2">
              <img
                src={serviceData}
                alt="Data Migration"
                className="aspect-video w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-y bg-muted/30 py-20 md:py-28">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="section-heading mb-4">Data Migration Benefits</h2>
            <p className="section-subheading mx-auto">
              Build a solid data foundation for your organization.
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

export default ServiceData;
