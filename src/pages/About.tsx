import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Users, Award, Target, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CTABanner } from "@/components/CTABanner";

const values = [
  {
    icon: Target,
    title: "Outcome Focused",
    description: "We measure success by the business value we deliver, not just technical metrics.",
  },
  {
    icon: Zap,
    title: "Innovation Driven",
    description: "Constantly exploring new technologies and approaches to solve complex problems.",
  },
  {
    icon: Shield,
    title: "Integrity First",
    description: "Transparent communication and ethical practices in every engagement.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "Building long-term relationships through trust, reliability, and shared success.",
  },
];

const stats = [
  { value: "10+", label: "Enterprise Clients" },
  { value: "100+", label: "Projects" },
  { value: "17+", label: "Years Experience" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              About Us
            </span>
            <h1 className="section-heading mb-6 text-white">
              Your Strategic Yardi & PropTech Partner
            </h1>
            <p className="text-lg text-white/80 md:text-xl">
              SpaceTech Consulting is a global consulting firm specializing in Yardi implementations,
              integrations, and property technology solutions for the real estate industry.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center space-y-6">
            <h2 className="text-3xl font-bold md:text-4xl">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              To empower real estate organizations with technology solutions that drive operational
              excellence, unlock data insights, and accelerate business growth.
            </p>
            <p className="text-lg text-muted-foreground">
              We bridge the gap between property management needs and technology capabilities,
              delivering solutions that are practical, scalable, and aligned with your strategic
              objectives.
            </p>
            <p className="text-2xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent italic">
              "Bringing out the best in Yardi"
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-bold text-primary-foreground md:text-5xl">{stat.value}</p>
                <p className="mt-2 text-sm text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-4 mx-auto inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
              <Globe className="h-7 w-7 text-primary" />
            </div>
            <h2 className="section-heading mb-4">Global Delivery Model</h2>
            <p className="section-subheading mx-auto">
              With offices across three continents, we provide 24/7 support and the ability to scale
              teams based on your project needs.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { region: "Australia", description: "Asia-Pacific headquarters serving ANZ clients" },
              { region: "India", description: "Technology center with scalable delivery teams" },
              { region: "USA", description: "Americas headquarters for North American clients" },
            ].map((office, index) => (
              <Card
                key={office.region}
                className="glass-card border-0 text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">{office.region}</h3>
                  <p className="text-sm text-muted-foreground">{office.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t bg-muted/30 py-20 md:py-28">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="section-heading mb-4">Our Values</h2>
            <p className="section-subheading mx-auto">
              The principles that guide how we work and deliver value to our clients.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="glass-card border-0 text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Yardi Specialization */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 mx-auto inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
              <Award className="h-7 w-7 text-primary" />
            </div>
            <h2 className="section-heading mb-4">Yardi Specialization</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Our team brings deep expertise across the entire Yardi ecosystem, including Voyager,
              RENTCafé, Yardi Investment Management, and specialized modules for commercial,
              residential, and affordable housing.
            </p>
            <Button asChild className="group gap-2">
              <Link to="/contact">
                Discuss Your Yardi Needs
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

export default About;
