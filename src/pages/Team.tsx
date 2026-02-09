import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTABanner } from "@/components/CTABanner";
import yogeshImage from "@/assets/team-yogesh.png";
import poojaImage from "@/assets/team-pooja.png";

const founders = [
  {
    name: "Yogesh Shah",
    role: "Founder & CEO",
    bio: "Yogesh Shah brings over 25+ years of ERP implementations and support experience across various domains such as Process Manufacturing, Discrete Manufacturing, US Government Contracting, and the Real Estate industry. His ERP expertise includes PeopleSoft, Deltek Costpoint, MS Dynamics AX & NAV, Orion, and Yardi. He is responsible for the strategic development of the company and oversees global operations.",
    image: yogeshImage,
    linkedin: "#",
    email: "yogesh@spacetechconsulting.com",
  },
  {
    name: "Pooja Shah",
    role: "Vice President",
    bio: "Pooja Shah is a Chartered Accountant with 16+ years of experience in consulting and managing large-scale Yardi ERP implementation projects across Australia, Singapore, Malaysia, Hong Kong, USA, Europe, and Dubai. She has deep expertise across Yardi modules including Leasing Manager, Commercial, International, Property Management, Fixed Assets, Inventory Control, and Investment Management.",
    image: poojaImage,
    linkedin: "#",
    email: "pooja@spacetechconsulting.com",
  },
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
              Meet the leadership driving innovation in Yardi platform solutions.
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
                  key={founder.name} 
                  className="bg-card border border-border/50 shadow-lg overflow-hidden animate-fade-up hover:shadow-xl transition-shadow duration-300"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Image Container */}
                  <div className="aspect-[4/5] relative overflow-hidden bg-gradient-to-br from-muted to-muted/50">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  
                  {/* Content */}
                  <CardContent className="p-6 md:p-8 text-center">
                    <h3 className="font-display text-2xl font-bold mb-1 text-foreground">
                      {founder.name}
                    </h3>
                    <p className="text-primary font-semibold text-lg mb-4">
                      {founder.role}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {founder.bio}
                    </p>
                    
                    {/* Social Icons */}
                    <div className="flex justify-center gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full h-11 w-11 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
                        asChild
                      >
                        <a 
                          href={founder.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          aria-label={`${founder.name} LinkedIn`}
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full h-11 w-11 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
                        asChild
                      >
                        <a 
                          href={`mailto:${founder.email}`} 
                          aria-label={`Email ${founder.name}`}
                        >
                          <Mail className="h-5 w-5" />
                        </a>
                      </Button>
                    </div>
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
