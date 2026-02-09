import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = {
  services: [
    { href: "/services/consulting", label: "Yardi Consulting" },
    { href: "/services/reporting", label: "Reporting & BI" },
    { href: "/services/integrations", label: "System Integrations" },
    { href: "/services/automation", label: "Automation" },
    { href: "/services/support", label: "Managed Support" },
    { href: "/services/data", label: "Data Engineering" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/who-we-serve", label: "Who We Serve" },
    { href: "/contact", label: "Contact" },
  ],
};

const regions = ["Australia", "India", "USA"];

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="SpaceTech Consulting" className="h-10 w-auto" />
              <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                SpaceTech
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Enterprise Yardi & PropTech Consulting Partner. Bringing out the best in Yardi.
            </p>
            <div className="flex flex-wrap gap-2">
              {regions.map((region) => (
                <span
                  key={region}
                  className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  {region}
                </span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+918587951091"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  +91 8587951091
                </a>
              </li>
              <li>
                <a
                  href="mailto:aryanthealgohype@gmail.com"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <span className="break-all">aryanthealgohype@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SpaceTech Consulting. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Enterprise Yardi & PropTech Consulting Partner
          </p>
        </div>
      </div>
    </footer>
  );
}
