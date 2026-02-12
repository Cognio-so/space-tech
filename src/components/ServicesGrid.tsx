import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "01",
    title: "Platform Support & Optimization",
    color: "bg-[#1e3a5f]",
    points: [
      "Application Help Desk (L1/L2/L3)",
      "System administration & maintenance",
      "Platform upgrades support & testing",
      "Issue tracking & SLA management",
      "Health checks & system audits",
      "Performance tuning & optimization",
    ],
  },
  {
    id: "02",
    title: "Custom Development",
    color: "bg-[#0d9488]",
    points: [
      "Custom Reporting (YSR / Columnar)",
      "Custom Financials",
      "Custom Interfaces",
      "Workflow validations & automations",
      "Integrations & RPA",
    ],
  },
  {
    id: "03",
    title: "Data Migration",
    color: "bg-[#f97316]",
    points: [
      "Legacy system data migration (Yardi ETL)",
      "Data cleansing",
      "Data mapping",
      "Data load and validation",
    ],
  },
  {
    id: "04",
    title: "Implementation & Consulting",
    color: "bg-[#1e3a5f]",
    points: [
      "Yardi Voyager / Elevate / Breeze Implementation",
      "Multi-module deployment & configuration",
      "Security model & role restructuring",
      "Go-live support & stabilization",
    ],
  },
  {
    id: "05",
    title: "Training & Testing",
    color: "bg-[#0d9488]",
    points: [
      "Role-based training programs",
      "Knowledge base creation",
      "Process documentation",
      "Yardi product testing",
      "Test scenarios & test case creation",
    ],
  },
  {
    id: "06",
    title: "Data & Analytics",
    color: "bg-[#f97316]",
    points: [
      "BI integration / Yardi Data Connect",
      "Data visualization dashboards",
      "Executive reporting packages",
      "KPI tracking & monitoring",
      "Dashboard & analytics setup",
    ],
  },
];

export function ServicesGrid() {
  return (
    <section className="py-20 md:py-28 bg-background text-foreground transition-colors duration-300 overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 text-foreground">
            Full-Spectrum Yardi Services
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            From implementation to optimization — we cover the complete Yardi lifecycle
          </p>
        </div>

        {/* Services Grid - Responsive 'In a Line' layout */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Box Content */}
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <span className="text-lg font-bold">{service.id}</span>
                </div>

                <h3 className="mb-6 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <ul className="space-y-3">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        {/* CTA */}
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="group gap-2">
            <Link to="/contact">
              Discuss Your Requirements
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
