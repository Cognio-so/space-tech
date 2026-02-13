import { Link } from "react-router-dom";
import { ArrowRight, Building2, Home, TrendingUp, Landmark, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const industries = [
  {
    icon: Building2,
    title: "Commercial",
    description: "Comprehensive solutions for commercial real estate management and operations.",
    link: "/contact",
  },
  {
    icon: Home,
    title: "Residential (Multifamily)",
    description: "Optimize tenant management and financial reporting for multifamily properties.",
    link: "/contact",
  },
  {
    icon: Landmark,
    title: "Affordable Housing",
    description: "Specialized compliance and management solutions for affordable housing portfolios.",
    link: "/contact",
  },
  {
    icon: TrendingUp,
    title: "Military Housing",
    description: "Tailored property management solutions for military housing communities.",
    link: "/contact",
  },
  {
    icon: Cpu,
    title: "Single-Family Rental",
    description: "Scalable solutions for single-family rental property portfolios.",
    link: "/contact",
  },
  {
    icon: Building2,
    title: "Mixed-Use Properties",
    description: "Integrated solutions for mixed-use developments combining residential and retail operations.",
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
          <h2 className="section-heading mb-4">Deep Expertise Across Real Estate Verticals</h2>
          <p className="section-subheading mx-auto">
            We’ve configured and optimized Yardi for organizations across every major property type, bringing sector-specific knowledge to every engagement.
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
