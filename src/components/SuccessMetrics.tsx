import { BarChart3, Clock, ShieldCheck, Users } from "lucide-react";

const metrics = [
  {
    icon: Users,
    value: "3 regions",
    label: "Australia, India, and USA delivery coverage",
  },
  {
    icon: Clock,
    value: "24/7-ready",
    label: "Support model for critical platform operations",
  },
  {
    icon: BarChart3,
    value: "6 service lines",
    label: "Consulting, support, reporting, data, automation, integrations",
  },
  {
    icon: ShieldCheck,
    value: "SLA led",
    label: "Issue tracking, governance, testing, and release discipline",
  },
];

export function SuccessMetrics() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.value} className="rounded-lg border bg-card p-6">
              <metric.icon className="mb-4 h-6 w-6 text-primary" />
              <p className="text-2xl font-bold">{metric.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
