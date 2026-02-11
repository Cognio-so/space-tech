import { useState } from "react";
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
import { contactEndpoint } from "@/lib/api";
import { isContactSubmissionSuccessful, parseContactResponse } from "@/lib/contact-response";

const services = [
  "Yardi Consulting",
  "Reporting & Business Intelligence",
  "System Integrations",
  "Automation & Workflows",
  "Managed BAU Support",
  "Data Engineering",
];

interface BookCallDialogProps {
  trigger?: React.ReactNode;
}

export function BookCallDialog({ trigger }: BookCallDialogProps) {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;

    try {
      const formData = new FormData(form);
      const data = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        service: formData.get('service') as string,
        message: formData.get('message') as string || "Strategy Call Request",
      };

      const response = await fetch(contactEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Request failed with ${response.status}`);
      }

      const rawResponse = await response.text();
      const result = parseContactResponse(rawResponse);
      const isSuccessful = isContactSubmissionSuccessful(response.ok, result);

      if (isSuccessful) {
        toast({
          title: "Request submitted!",
          description: "We'll contact you within 24 hours to schedule your call.",
        });
        setOpen(false);
        form.reset();
      } else {
        throw new Error(result.message || `Request failed with ${response.status}`);
      }
    } catch (error) {
      console.error("Book call error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="gap-2">
            <CalendarCheck className="h-4 w-4" />
            Book a Call
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">Book a Strategy Call</DialogTitle>
          <DialogDescription>
            Fill in your details and we'll schedule a free consultation call.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
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
