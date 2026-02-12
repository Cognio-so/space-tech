import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { CTABanner } from "@/components/CTABanner";

const founders = [
  { title: "Co-Founder", focus: "Strategy & Vision" },
  { title: "Co-Founder", focus: "Operations & Growth" },
];

const Team = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-background py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-4">
              Our Team
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Leadership team
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-12 md:py-20 bg-muted/20">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-2 justify-center">
              {founders.map((founder, index) => (
                <Card 
                  key={`co-founder-${index}`}
                  className="bg-card border border-border/50 shadow-sm animate-fade-up transition-shadow duration-300"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardContent className="p-12 md:p-14 text-center space-y-3">
                    <h3 className="font-display text-2xl font-semibold text-foreground">
                      {founder.title}
                    </h3>
                    <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
                      {founder.focus}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-20 bg-background border-t border-border/50">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold mb-6 text-foreground">
              Our Vision
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To be the most trusted Yardi platform partner in ANZ, enabling real estate organizations 
              to unlock the full potential of their technology investments through expert consulting, 
              proactive support, and continuous innovation.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
};

export default Team;
