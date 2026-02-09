import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Cog, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTABanner } from "@/components/CTABanner";
import serviceAutomation from "@/assets/service-automation.jpg";

const features = [
  "Robotic Process Automation (RPA)",
  "Approval Workflow Automation",
  "Process Digitization",
  "Email & Notification Automation",
  "Data Entry Automation",
  "Scheduled Job Management",
  "Document Processing",
  "Exception Handling",
];

const benefits = [
  {
    title: "Save Time",
    description: "Reduce manual work by up to 80% with intelligent automation.",
  },
  {
    title: "Reduce Errors",
    description: "Eliminate human error in repetitive processes.",
  },
  {
    title: "Faster Processing",
    description: "Complete tasks in minutes instead of hours or days.",
  },
  {
    title: "24/7 Operations",
    description: "Automated processes run around the clock without intervention.",
  },
];

const ServiceAutomation = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
              <Cog className="h-8 w-8 text-primary" />
            </div>
            <h1 className="section-heading mb-6">Automation & Workflows</h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Streamline operations and eliminate manual processes with 
              intelligent automation solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <h2 className="text-3xl font-bold md:text-4xl">
                Automate Repetitive Tasks & Workflows
              </h2>
              <p className="text-lg text-muted-foreground">
                Our automation solutions leverage RPA and workflow tools to 
                eliminate manual, repetitive tasks, freeing your team to focus 
                on high-value activities that drive business growth.
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="group gap-2">
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2 glass-card overflow-hidden p-2">
              <img
                src={serviceAutomation}
                alt="Automation & Workflows"
                className="aspect-video w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-y bg-muted/30 py-20 md:py-28">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="section-heading mb-4">Automation Benefits</h2>
            <p className="section-subheading mx-auto">
              Transform your operations with intelligent automation.
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

export default ServiceAutomation;
