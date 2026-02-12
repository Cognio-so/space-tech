import { Link } from "react-router-dom";
import { ArrowRight, Globe, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutPreview() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              About SpaceTech
            </span>
            <h2 className="section-heading">Your Strategic Yardi Partner</h2>
            <p className="text-lg text-muted-foreground">
              SpaceTech Consulting is a global consulting firm specializing in
              Yardi implementations, integrations, and property technology
              solutions for the real estate industry.
            </p>
            <p className="text-muted-foreground">
              With offices across Australia, India, and the USA, we provide 24/7
              support and scalable delivery to meet your project needs.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Global Presence</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Expert Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Certified Partners</span>
              </div>
            </div>
            <Button asChild className="group gap-2">
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2">
            {[
              { label: "Enterprise Clients", value: "10+" },
              { label: "Projects", value: "100+" },
              { label: "Experience", value: "17+ yrs" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="glass-card p-6 text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-3xl font-bold text-primary md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
