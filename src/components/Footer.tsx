import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import logoDark from "@/assets/logo-dark.png";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_AU_DISPLAY,
  CONTACT_PHONE_AU_URL,
  CONTACT_PHONE_US_DISPLAY,
  CONTACT_PHONE_US_URL,
} from "@/lib/contact";

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
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="border-t bg-card">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img
                src={isDark ? logoDark : logo}
                alt="SpaceTech Consulting"
                className="h-20 w-auto transition-transform hover:scale-105 duration-300 dark:brightness-0 dark:invert"
              />
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

          <div>
            <h4 className="mb-4 text-sm font-semibold">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={CONTACT_PHONE_US_URL}
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone className="h-5 w-5" />
                  <span>{CONTACT_PHONE_US_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_PHONE_AU_URL}
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone className="h-5 w-5" />
                  <span>{CONTACT_PHONE_AU_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="h-5 w-5" />
                  <span className="break-all">{CONTACT_EMAIL}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            (c) {new Date().getFullYear()} SpaceTech Consulting. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Enterprise Yardi & PropTech Consulting Partner
          </p>
        </div>
      </div>
    </footer>
  );
}
