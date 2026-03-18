import { useState, type FormEvent, type ReactNode } from "react";
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
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { CalendarCheck, Send } from "lucide-react";
import { bookCallEndpoint, contactEndpoint } from "@/lib/api";
import { isContactSubmissionSuccessful, parseContactResponse } from "@/lib/contact-response";

interface BookCallDialogProps {
  trigger?: ReactNode | null;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const services = [
  { value: "consulting", label: "Yardi Consulting" },
  { value: "reporting", label: "Reporting & Business Intelligence" },
  { value: "integrations", label: "System Integrations" },
  { value: "automation", label: "Automation & Workflows" },
  { value: "support", label: "Managed BAU Support" },
  { value: "data", label: "Data Migration" },
];

export function BookCallDialog({ trigger, open, onOpenChange }: BookCallDialogProps) {
  const { toast } = useToast();
  const [internalOpen, setInternalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const isControlled = open !== undefined;
  const dialogOpen = isControlled ? open : internalOpen;

  const setDialogOpen = (nextOpen: boolean) => {
    onOpenChange?.(nextOpen);
    if (!isControlled) {
      setInternalOpen(nextOpen);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim()) {
      toast({
        title: "Missing details",
        description: "Please fill your first name, last name, and email.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.service) {
      toast({
        title: "Select a service",
        description: "Please choose the service you are interested in.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const data = {
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      service: services.find((item) => item.value === formData.service)?.label || formData.service,
      message: formData.message.trim(),
    };

    try {
      let response = await fetch(bookCallEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Some deployments may not expose /api/book-call, or that handler may be
      // misconfigured while /api/contact still works. Retry through contact.
      if (!response.ok && bookCallEndpoint !== contactEndpoint) {
        response = await fetch(contactEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...data,
            message: data.message || "Book a Call request",
          }),
        });
      }

      const rawResponse = await response.text();
      const result = parseContactResponse(rawResponse);
      const isSuccessful = isContactSubmissionSuccessful(response.ok, result);

      if (!response.ok || !isSuccessful) {
        throw new Error(result.message || `Request failed with ${response.status}`);
      }

      toast({
        title: "Request submitted!",
        description: "We'll contact you within 48 hours to schedule your call.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
      setDialogOpen(false);
    } catch (error) {
      console.error("Submission error:", error);
      const message =
        error instanceof TypeError
          ? "Unable to submit right now. Please try again in a moment."
          : error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.";
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      {trigger !== null && (
        <DialogTrigger asChild>
          {trigger || (
            <Button className="gap-2">
              <CalendarCheck className="h-4 w-4" />
              Book a Call
            </Button>
          )}
        </DialogTrigger>
      )}
      <DialogContent className="w-[calc(100vw-1.5rem)] max-w-2xl p-4 sm:p-6 max-h-[85vh] overflow-y-auto">
        <form onSubmit={handleSubmit} className="space-y-6 pt-2 pb-1">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="book-first-name">First Name</Label>
              <Input
                id="book-first-name"
                name="firstName"
                placeholder="John"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="book-last-name">Last Name</Label>
              <Input
                id="book-last-name"
                name="lastName"
                placeholder="Doe"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="book-email">Email</Label>
            <Input
              id="book-email"
              name="email"
              type="email"
              placeholder="john@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="book-phone">Phone Number</Label>
            <Input
              id="book-phone"
              name="phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="book-service">Service Interested In</Label>
            <Select
              value={formData.service}
              onValueChange={(value) => setFormData({ ...formData, service: value })}
              required
            >
              <SelectTrigger id="book-service">
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
            <Label htmlFor="book-message">Message</Label>
            <Textarea
              id="book-message"
              name="message"
              placeholder="Tell us about your project and how we can help..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
            />
          </div>

          <Button type="submit" className="group w-full gap-2" disabled={isSubmitting}>
            {isSubmitting ? (
              "Submitting..."
            ) : (
              <>
                Request a Call
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
