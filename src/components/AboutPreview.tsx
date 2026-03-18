import { Link } from "react-router-dom";
import { ArrowRight, Globe, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutPreview() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <div className="space-y-6">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              About SpaceTech
            </span>
            <h2 className="section-heading">Your Strategic Yardi Partner</h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              SpaceTech Consulting is a global consulting firm delivering
              comprehensive Yardi services across platform ownership,
              implementation, data migration, integrations, and customizations.
            </p>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              With presence across Australia, India, and the USA, we provide 24/7
              support and scalable delivery to meet your project needs.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Global Presence</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Yardi Expertise</span>
              </div>
            </div>
            <Button asChild className="group gap-2">
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
