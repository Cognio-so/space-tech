import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ServiceConsulting from "./pages/services/Consulting";
import ServiceReporting from "./pages/services/Reporting";
import ServiceIntegrations from "./pages/services/Integrations";
import ServiceAutomation from "./pages/services/Automation";
import ServiceSupport from "./pages/services/Support";
import ServiceData from "./pages/services/Data";
import WhoWeServe from "./pages/WhoWeServe";
import About from "./pages/About";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname, location.hash]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/consulting" element={<ServiceConsulting />} />
          <Route path="/services/reporting" element={<ServiceReporting />} />
          <Route path="/services/integrations" element={<ServiceIntegrations />} />
          <Route path="/services/automation" element={<ServiceAutomation />} />
          <Route path="/services/support" element={<ServiceSupport />} />
          <Route path="/services/data" element={<ServiceData />} />
          <Route path="/who-we-serve" element={<WhoWeServe />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
