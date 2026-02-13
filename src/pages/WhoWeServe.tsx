import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Building2,
  Home,
  TrendingUp,
  Landmark,
  Target,
  Zap,
  Shield,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CTABanner } from "@/components/CTABanner";

const solutions = [
  {
    problem: "Disconnected Systems",
    solution: "Unified Integration Platform",
    description: "Break down data silos with seamless API integrations.",
    icon: Zap,
  },
  {
    problem: "Manual Processes",
    solution: "Intelligent Automation",
    description: "Eliminate repetitive tasks with RPA and workflow automation.",
    icon: Target,
  },
  {
    problem: "Limited Visibility",
    solution: "Advanced Analytics & BI",
    description: "Gain real-time insights with custom dashboards and reports.",
    icon: TrendingUp,
  },
  {
    problem: "Data Quality Issues",
    solution: "Data Migration",
    description: "Ensure accurate, reliable data with robust ETL pipelines.",
    icon: Shield,
  },
];

const industries = [
  {
    icon: Building2,
    title: "Commercial",
    description: "We run Voyager Commercial for large portfolios. Lease management, CAM recoveries, tenant billing, Deal Manager configuration, and construction job tracking.",
    features: ["Lease administration", "CAM reconciliation", "Tenant management", "Financial reporting"],
  },
  {
    icon: Home,
    title: "Residential (Multifamily)",
    description: "Voyager Residential and RentCafe, set up end to end. Lead-to-lease workflows, resident portals, maintenance dispatch, budgeting, and revenue tracking.",
    features: ["Tenant communications", "Work order automation", "Rent management", "Occupancy tracking"],
  },
  {
    icon: Landmark,
    title: "Affordable Housing",
    description: "LIHTC, HUD, state programs. We configure Voyager Affordable Housing for certifications, recerts, waiting lists, and audit-ready compliance reporting.",
    features: ["Compliance tracking", "Subsidy management", "Reporting automation", "Regulatory adherence"],
  },
  {
    icon: Shield,
    title: "Military Housing",
    description: "Privatized military housing runs on different rules. We configure Yardi for BAH tracking, occupancy reporting, work order management, and government compliance.",
    features: ["BAH management", "Move-in/out tracking", "Maintenance coordination", "Compliance reporting"],
  },
  {
    icon: Users,
    title: "Single-Family Rental",
    description: "SFR at scale needs a different Yardi setup. We build it for leasing automation, maintenance dispatch, owner distributions, property-level P&Ls, and investor reporting.",
    features: ["Portfolio management", "Vendor coordination", "Financial consolidation", "Growth scaling"],
  },
  {
    icon: Building2,
    title: "Mixed-Use Properties",
    description: "Residential and commercial under one roof means one Yardi environment. We get the modules working together with shared GL structures and consolidated reporting across asset types.",
    features: [
      "Cross-portfolio financial reporting",
      "Residential & commercial lease management",
      "Tenant coordination & communication",
      "CAM & cost allocation",
      "Operational performance tracking",
    ],
  },
];

const WhoWeServe = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Who We Serve
            </span>
            <h1 className="section-heading mb-6 text-white">
              Solutions for Every Real Estate Challenge
            </h1>
            <p className="text-lg text-white/80 md:text-xl">
              We understand the unique challenges facing real estate organizations and deliver
              tailored solutions that drive measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Problems → Solutions */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="section-heading mb-4">From Challenges to Solutions</h2>
            <p className="section-subheading mx-auto">
              We turn your technology pain points into competitive advantages.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((item, index) => (
              <Card
                key={item.solution}
                className="glass-card border-0 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-2">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>

                  <CardTitle className="text-lg text-primary">{item.solution}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="border-y bg-muted/30 py-20 md:py-28">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="section-heading mb-4">Industries We Serve</h2>
            <p className="section-subheading mx-auto">
              Deep domain expertise across the real estate and property technology landscape.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <Card
                key={industry.title}
                className="glass-card border-0 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <industry.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{industry.description}</p>
                  <ul className="space-y-2">
                    {industry.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="group gap-2">
              <Link to="/contact">
                Discuss Your Needs
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
};

export default WhoWeServe;

