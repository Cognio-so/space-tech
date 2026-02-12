import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { BookCallDialog } from "@/components/BookCallDialog";
import logo from "@/assets/logo.png";
import logoDark from "@/assets/logo-dark.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/who-we-serve", label: "Who We Serve" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Our Team" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileBookOpen, setIsMobileBookOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-lg text-foreground transition-colors duration-300">
      <div className="container flex h-16 items-center justify-between md:h-20">
        {/* Logo Link */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={isDark ? logoDark : logo}
            alt="SpaceTech Consulting"
            className="h-20 w-auto md:h-24 blur-[1.5px] transition-transform hover:scale-105 duration-300 dark:brightness-0 dark:invert"
          />
        </Link>

        {/* Desktop Navigation - Centered and balanced */}
        <nav className="hidden flex-1 justify-center items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === link.href
                ? "text-primary dark:text-white border-b-2 border-primary dark:border-white"
                : "text-muted-foreground"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <BookCallDialog />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="text-foreground hover:bg-muted"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-border bg-background lg:hidden text-foreground">
          <nav className="container flex flex-col gap-4 py-6">
            <div className="flex items-center justify-between mb-4">
              <img
                src={isDark ? logoDark : logo}
                alt="SpaceTech Consulting"
                className="h-[72px] w-auto blur-[1.5px] dark:brightness-0 dark:invert"
              />
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === link.href
                  ? "text-primary font-bold"
                  : "text-muted-foreground"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Button
                className="w-full"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsMobileBookOpen(true);
                }}
              >
                Book a Call
              </Button>
            </div>
          </nav>
        </div>
      )}

      <BookCallDialog
        trigger={null}
        open={isMobileBookOpen}
        onOpenChange={setIsMobileBookOpen}
      />
    </header>
  );
}
