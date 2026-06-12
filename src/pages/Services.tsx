import { Layout } from "@/components/Layout";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Settings, BarChart3, Plug, Cog, HeadphonesIcon, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CTABanner } from "@/components/CTABanner";
import { useEffect } from "react";

import serviceConsulting from "@/assets/service-consulting.jpg";
import serviceReporting from "@/assets/service-reporting.jpg";
import serviceIntegrations from "@/assets/service-integrations.jpg";
import serviceAutomation from "@/assets/service-automation.jpg";
import serviceSupport from "@/assets/service-support.jpg";
import serviceData from "@/assets/service-data.jpg";

const services = [
  {
    id: "consulting",
    title: "Yardi Consulting",
    image: serviceConsulting,
    icon: Settings,
    description: "End-to-end Yardi implementation, configuration, and optimization services.",
    details: ["Module setup", "Security roles", "Process alignment"],
    link: "/services/consulting",
  },
  {
    id: "reporting",
    title: "Reporting & Business Intelligence",
    image: serviceReporting,
    icon: BarChart3,
    description: "Transform your property data into actionable insights with custom reporting.",
    details: ["YSR and columnar reports", "Dashboards", "KPI packs"],
    link: "/services/reporting",
  },
  {
    id: "integrations",
    title: "System Integrations",
    image: serviceIntegrations,
    icon: Plug,
    description: "Seamlessly connect Yardi with your existing technology ecosystem.",
    details: ["API planning", "Interfaces", "Data exchange controls"],
    link: "/services/integrations",
  },
  {
    id: "automation",
    title: "Automation & Workflows",
    image: serviceAutomation,
    icon: Cog,
    description: "Streamline operations and eliminate manual processes with intelligent automation.",
    details: ["Workflow rules", "Validation checks", "RPA support"],
    link: "/services/automation",
  },
  {
    id: "support",
    title: "Managed BAU Support",
    image: serviceSupport,
    icon: HeadphonesIcon,
    description: "Reliable, ongoing support to keep your Yardi environment running smoothly.",
    details: ["Help desk", "Release testing", "SLA tracking"],
    link: "/services/support",
  },
  {
    id: "data",
    title: "Data Migration",
    image: serviceData,
    icon: Database,
    description:
      "End-to-end data migration services — from extraction and data mapping to loading and cleansing",
    details: ["Mapping", "Cleansing", "Load validation"],
    link: "/services/data",
  },
];

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#top") {
      const target = document.getElementById("services-top");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }, [location.hash]);

  return (
    <Layout>
      {/* Hero */}
      <section id="services-top" className="gradient-hero py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Our Services
            </span>
            <h1 className="section-heading mb-6 text-white">
              Comprehensive Yardi & PropTech Solutions
            </h1>
            <p className="text-lg text-white/80 md:text-xl">
              From implementation to optimization, we deliver end-to-end solutions that transform
              your property technology ecosystem into a competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card
                key={service.id}
                className="service-card group border-0 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="service-card-image">
                  <img src={service.image} alt={service.title} loading="lazy" />
                  <div className="service-card-overlay" />
                  <div className="service-card-icon">
                    <service.icon className="h-6 w-6" />
                  </div>
                </div>

                {/* Content */}
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <p className="mb-6 flex-1 text-sm text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mb-6 space-y-2">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="group/btn w-full gap-2">
                    <Link to={service.link}>
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
};

export default Services;
