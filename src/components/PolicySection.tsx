import { FileCheck, Globe2, LockKeyhole, Share2 } from "lucide-react";

const policies = [
  {
    icon: LockKeyhole,
    title: "Privacy",
    text: "We collect only the contact and project details needed to respond to enquiries, schedule calls, and deliver consulting services.",
  },
  {
    icon: FileCheck,
    title: "Client Confidentiality",
    text: "Project data, reports, environments, credentials, and business processes are treated as confidential engagement materials.",
  },
  {
    icon: Globe2,
    title: "Language & Currency",
    text: "Engagements can be scoped for English-speaking teams across AUD, USD, and INR commercial contexts.",
  },
  {
    icon: Share2,
    title: "Social Accessibility",
    text: "Connect with SpaceTech through LinkedIn, email, phone, WhatsApp, or a scheduled discovery call.",
  },
];

export function PolicySection() {
  return (
    <section id="policies" className="border-t py-20 md:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Legal & Access
          </span>
          <h2 className="section-heading mb-4">Policies, Regions, and Access</h2>
          <p className="section-subheading mx-auto">
            Practical governance for clients working across countries, systems, and teams.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {policies.map((policy) => (
            <div key={policy.title} className="rounded-lg border bg-card p-6">
              <policy.icon className="mb-4 h-6 w-6 text-primary" />
              <h3 className="mb-2 font-semibold">{policy.title}</h3>
              <p className="text-sm leading-6 text-muted-foreground">{policy.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
