import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, HeadphonesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTABanner } from "@/components/CTABanner";
import serviceSupport from "@/assets/service-support.jpg";

const benefits = [
  {
    title: "24/7 Coverage",
    description: "Round-the-clock support across global time zones.",
  },
  {
    title: "Expert Team",
    description: "Experienced Yardi professionals handling your requests.",
  },
  {
    title: "Fast Resolution",
    description: "SLA-backed response times for critical issues.",
  },
  {
    title: "Continuous Improvement",
    description: "Ongoing enhancements to optimize your system.",
  },
];

const ServiceSupport = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
              <HeadphonesIcon className="h-8 w-8 text-primary" />
            </div>
            <h1 className="section-heading mb-6">Managed BAU Support</h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Reliable, ongoing support to keep your Yardi environment 
              running smoothly 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="glass-card overflow-hidden p-2">
              <img
                src={serviceSupport}
                alt="Managed Support"
                className="aspect-video w-full rounded-lg object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold md:text-4xl">
                Dedicated Support for Your Yardi Platform
              </h2>
              <p className="text-lg text-muted-foreground">
                Our managed support services provide you with a dedicated team 
                of Yardi experts who handle day-to-day support, enhancements, 
                and monitoring so you can focus on your core business.
              </p>
              <Button asChild className="group gap-2">
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-y bg-muted/30 py-20 md:py-28">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="section-heading mb-4">Support Benefits</h2>
            <p className="section-subheading mx-auto">
              Peace of mind with reliable, expert support.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="glass-card p-6 text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="mb-2 text-lg font-semibold">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
};

export default ServiceSupport;
