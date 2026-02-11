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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CalendarCheck } from "lucide-react";

const services = [
  { value: "consulting", label: "Yardi Consulting" },
  { value: "reporting", label: "Reporting & Business Intelligence" },
  { value: "integrations", label: "System Integrations" },
  { value: "automation", label: "Automation & Workflows" },
  { value: "support", label: "Managed BAU Support" },
  { value: "data", label: "Data Engineering" },
];

interface BookCallDialogProps {
  trigger?: React.ReactNode;
}

export function BookCallDialog({ trigger }: BookCallDialogProps) {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Important: Use the state data directly
      const serviceLabel = services.find(s => s.value === formData.service)?.label || formData.service;

      const body = {
        access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // Get yours from web3forms.com
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: serviceLabel,
        subject: "New Strategy Call Request - SpaceTech",
        from_name: "SpaceTech Website"
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(body),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Request submitted!",
          description: "We'll contact you within 24 hours to schedule your call.",
        });
        setOpen(false);
        setFormData({ name: "", email: "", phone: "", service: "" });
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit request. Please try again.",
        variant: "destructive",
      });
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
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
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
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
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
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Request a Call"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
