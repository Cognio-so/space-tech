import { Layout } from "@/components/Layout";
import { Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const services = [
  { value: "consulting", label: "Yardi Consulting" },
  { value: "reporting", label: "Reporting & Business Intelligence" },
  { value: "integrations", label: "System Integrations" },
  { value: "automation", label: "Automation & Workflows" },
  { value: "support", label: "Managed BAU Support" },
  { value: "data", label: "Data Engineering" },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceLabel = services.find(s => s.value === formData.service)?.label || formData.service;

      const data = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        service: serviceLabel,
        message: formData.message,
        subject: "New Contact Form Submission - SpaceTech",
        from_name: "SpaceTech Website"
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: ""
        });
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-background py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Have questions about our Yardi solutions? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="mb-4 text-2xl font-bold md:text-3xl">Contact Information</h2>
                <p className="text-muted-foreground">
                  Reach out to discuss how we can help optimize your Yardi platform and property
                  technology stack.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">

                <Card className="glass-card border-0">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Phone (USA)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href="tel:+14158708418"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      +1 (415) 870-8418
                    </a>
                  </CardContent>
                </Card>

                <Card className="glass-card border-0">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Phone (Australia)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href="tel:+61468040481"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      +61 468040481
                    </a>
                  </CardContent>
                </Card>

                <Card className="glass-card border-0 sm:col-span-2">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Email</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href="mailto:info@spacetechconsulting.com"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      info@spacetechconsulting.com
                    </a>
                  </CardContent>
                </Card>
              </div>

              {/* Regions */}
              <div className="space-y-4">
                <p className="font-semibold">Global Presence</p>
                <div className="flex flex-wrap gap-2">
                  {["Australia", "India", "USA"].map((region) => (
                    <span
                      key={region}
                      className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                    >
                      {region}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interested In</Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => setFormData({ ...formData, service: value })}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.value} value={service.value}>
                            {service.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project and how we can help..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      required
                    />
                  </div>

                  <Button type="submit" className="group w-full gap-2" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
