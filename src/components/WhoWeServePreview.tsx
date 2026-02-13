import { Link } from "react-router-dom";
import { ArrowRight, Building2, Home, TrendingUp, Landmark, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const industries = [
  {
    icon: Building2,
    title: "Commercial",
    description: "We run Voyager Commercial for large portfolios. Lease management, CAM recoveries, tenant billing, Deal Manager configuration, and construction job tracking.",
    link: "/contact",
  },
  {
    icon: Home,
    title: "Residential (Multifamily)",
    description: "Voyager Residential and RentCafe, set up end to end. Lead-to-lease workflows, resident portals, maintenance dispatch, budgeting, and revenue tracking.",
    link: "/contact",
  },
  {
    icon: Landmark,
    title: "Affordable Housing",
    description: "LIHTC, HUD, state programs. We configure Voyager Affordable Housing for certifications, recerts, waiting lists, and audit-ready compliance reporting.",
    link: "/contact",
  },
  {
    icon: TrendingUp,
    title: "Military Housing",
    description: "Privatized military housing runs on different rules. We configure Yardi for BAH tracking, occupancy reporting, work order management, and government compliance.",
    link: "/contact",
  },
  {
    icon: Cpu,
    title: "Single-Family Rental",
    description: "SFR at scale needs a different Yardi setup. We build it for leasing automation, maintenance dispatch, owner distributions, property-level P&Ls, and investor reporting.",
    link: "/contact",
  },
  {
    icon: Building2,
    title: "Mixed-Use Properties",
    description: "Residential and commercial under one roof means one Yardi environment. We get the modules working together with shared GL structures and consolidated reporting across asset types.",
    link: "/contact",
  },
];

export function WhoWeServePreview() {
  return (
    <section className="py-20 md:py-28 border-y bg-background">
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Who We Serve
          </span>
          <h2 className="section-heading mb-4">Yardi Expertise Across Property Types</h2>
          <p className="section-subheading mx-auto">
            Every property type runs Yardi differently. We've operated inside these environments at enterprise scale, and we bring that hands-on knowledge to every engagement.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <Card
              key={industry.title}
              className="bg-card border-border group cursor-pointer animate-fade-up hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-2">
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <industry.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">{industry.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {industry.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="group gap-2">
            <Link to="/contact">
              See How We Help
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

