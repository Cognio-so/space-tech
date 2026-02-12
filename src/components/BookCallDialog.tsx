import { useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { CalendarCheck } from "lucide-react";
import { bookCallEndpoint, contactEndpoint } from "@/lib/api";

interface BookCallDialogProps {
  trigger?: ReactNode | null;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const services = [
  "Yardi Consulting",
  "Reporting & Business Intelligence",
  "System Integrations",
  "Automation & Workflows",
  "Managed BAU Support",
  "Data Migration",
];

export function BookCallDialog({ trigger, open, onOpenChange }: BookCallDialogProps) {
  const { toast } = useToast();
  const [internalOpen, setInternalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      let response = await fetch(bookCallEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Some deployments may not expose /api/book-call yet; fallback to /api/contact.
      if (response.status === 404 && bookCallEndpoint !== contactEndpoint) {
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

      if (!response.ok) {
        throw new Error(`Request failed with ${response.status}`);
      }

      toast({
        title: "Request submitted!",
        description: "We'll contact you within 24 hours to schedule your call.",
      });
      form.reset();
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
      <DialogContent className="w-[calc(100vw-1.5rem)] max-w-md p-4 sm:p-6 max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">Book a Strategy Call</DialogTitle>
          <DialogDescription>
            Fill in your details and we'll schedule a free consultation call.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-3 sm:pt-4 pb-1">
          <input
            name="name"
            placeholder="Full Name"
            required
            className="w-full p-3 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
            className="w-full p-3 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <input
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full p-3 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <select
            name="service"
            required
            className="w-full p-3 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select Service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>

          <textarea
            name="message"
            placeholder="Tell us about your project"
            rows={3}
            className="w-full p-3 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-primary-foreground p-3 rounded-lg hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Request a Call"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
