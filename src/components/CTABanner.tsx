import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTABanner() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="bg-[#0B111B] rounded-3xl shadow-2xl border border-white/10 px-8 py-16 text-center md:px-16 md:py-20 animate-scale-in relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-accent/20 blur-[100px] rounded-full" />

          <div className="relative z-10">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Let's Optimize Your Yardi Platform
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/70">
              Ready to transform your Yardi ecosystem? Let's discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-primary text-white hover:bg-primary/90 shadow-soft px-8 transition-all duration-300 font-bold"
              >
                <Link to="/contact">
                  Book a Strategy Call
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-primary text-white hover:bg-primary/90 shadow-md px-8 transition-all duration-300 font-bold"
              >
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
