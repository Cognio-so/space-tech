import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Michael Chen",
    role: "CTO",
    company: "Pacific Real Estate Group",
    content:
      "SpaceTech transformed our Yardi implementation. Their deep expertise and responsive team helped us achieve 40% improvement in operational efficiency.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "VP of Operations",
    company: "Horizon Property Management",
    content:
      "The automation solutions they built saved us hundreds of hours monthly. Their understanding of real estate operations is unmatched.",
    rating: 5,
  },
  {
    name: "David Williams",
    role: "Director of IT",
    company: "Summit Investment Partners",
    content:
      "Outstanding data engineering work. They migrated our entire portfolio data seamlessly and built dashboards that give us real-time insights.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Client Success Stories
          </span>
          <h2 className="section-heading mb-4">What Our Clients Say</h2>
          <p className="section-subheading mx-auto">
            Trusted by leading real estate organizations across the globe.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="glass-card border-0 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <Quote className="mb-4 h-8 w-8 text-primary/30" />
                <p className="mb-6 text-muted-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
