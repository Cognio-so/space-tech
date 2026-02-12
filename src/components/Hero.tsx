import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Modern cityscape"
          className="h-full w-full object-cover opacity-10 dark:opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container relative z-10 flex min-h-[85vh] flex-col items-center justify-center py-20 text-center">
        {/* Badge */}
        <div className="mb-8 animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20">
            Your Trusted Yardi Platform Partner
          </span>
        </div>

        {/* Headline */}
        <h1
          className="mb-6 max-w-4xl font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Enterprise Yardi Platform Ownership,{" "}
          <span className="text-primary">Proven at Scale in ANZ</span>
        </h1>

        {/* Tagline */}
        <p
          className="mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          We own your Yardi platform's success through proactive management, deep consulting expertise, and continuous improvement—not just reactive support.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col gap-4 sm:flex-row animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Button asChild size="lg" className="group gap-2 px-8">
            <Link to="/contact">
              Book a Strategy Call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-8 border-primary/20 hover:bg-primary/10 hover:text-primary transition-all duration-300">
            <Link to="/services">View Capabilities</Link>
          </Button>
        </div>

        {/* Regions */}
        <div
          className="mt-12 flex items-center gap-6 text-sm text-muted-foreground animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <span className="font-medium">Global Presence:</span>
          {["Australia", "India", "USA"].map((region, index) => (
            <span key={region} className="flex items-center gap-2">
              {index > 0 && <span className="h-1 w-1 rounded-full bg-muted-foreground" />}
              {region}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
