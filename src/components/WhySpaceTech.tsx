import { Zap, Target, Lock, Handshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Target,
    title: "Platform Ownership Mindset",
    description:
      "We operate Yardi with a platform-owner mindset — identifying patterns, removing systemic friction, and improving operational stability rather than reacting to individual tickets.",
  },
  {
    icon: Zap,
    title: "Deep Yardi Expertise",
    description:
      "Our team brings hands-on functional and technical experience across various Yardi modules and ecosystem integrations, developed through operating complex Yardi enterprise environments.",
  },
  {
    icon: Lock,
    title: "Outcome Driven",
    description:
      "We measure success by operational efficiency and cost reduction, not just technical implementations or tickets resolved.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partner",
    description:
      "We build enduring partnerships by taking long-term accountability for the stability, evolution, and success of your Yardi platform.",
  },
];

export function WhySpaceTech() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            The SpaceTech Advantage
          </span>
          <h2 className="section-heading mb-4">Why Choose SpaceTech Consulting?</h2>
          <p className="section-subheading mx-auto">
            We're not just consultants — we're your strategic technology partner for the long haul.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="bg-card border-border text-center animate-fade-up hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
