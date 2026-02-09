import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTABanner } from "@/components/CTABanner";
import serviceReporting from "@/assets/service-reporting.jpg";

const features = [
  "Custom Report Development",
  "BI Dashboard Creation",
  "Financial Insights & Analytics",
  "KPI Tracking & Monitoring",
  "Automated Report Distribution",
  "Data Visualization",
  "Real-time Analytics",
  "Executive Dashboards",
];

const benefits = [
  {
    title: "Data-Driven Decisions",
    description: "Transform raw data into actionable insights for better decision making.",
  },
  {
    title: "Time Savings",
    description: "Automate report generation and distribution to save hours weekly.",
  },
  {
    title: "Complete Visibility",
    description: "Get real-time visibility into portfolio performance and KPIs.",
  },
  {
    title: "Custom Solutions",
    description: "Reports tailored to your specific business requirements.",
  },
];

const ServiceReporting = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
              <BarChart3 className="h-8 w-8 text-primary" />
            </div>
            <h1 className="section-heading mb-6">Reporting & Business Intelligence</h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Transform your property data into actionable insights with custom reporting 
              and business intelligence solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <h2 className="text-3xl font-bold md:text-4xl">
                Unlock the Power of Your Property Data
              </h2>
              <p className="text-lg text-muted-foreground">
                Our BI experts create custom dashboards and reports that give you 
                real-time visibility into your portfolio performance, financials, 
                and operational metrics.
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
            <div className="order-1 lg:order-2 glass-card overflow-hidden p-2">
              <img
                src={serviceReporting}
                alt="Reporting & BI"
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
            <h2 className="section-heading mb-4">Benefits of Our BI Solutions</h2>
            <p className="section-subheading mx-auto">
              Make smarter decisions with comprehensive data analytics.
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

export default ServiceReporting;
