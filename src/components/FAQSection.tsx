import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What Yardi products do you support?",
    answer:
      "We support Yardi Voyager, Breeze, Elevate, RENTCafe, Investment Management, custom reporting, interfaces, role security, workflows, data migration, and connected BI ecosystems.",
  },
  {
    question: "Can SpaceTech manage an existing Yardi environment?",
    answer:
      "Yes. We provide BAU support, issue triage, administration, release testing, health checks, backlog management, enhancements, and continuous optimization for live Yardi platforms.",
  },
  {
    question: "Do you work with teams outside Australia?",
    answer:
      "Yes. Our delivery model covers Australia, India, and the USA, with flexible support windows for regional operations and multi-time-zone stakeholders.",
  },
  {
    question: "Can you help with reporting and data quality?",
    answer:
      "Yes. We build Yardi reports, executive dashboards, data validation routines, migration checks, KPI packs, and governance processes that help leaders trust their numbers.",
  },
];

export function FAQSection() {
  return (
    <section id="faqs" className="border-t bg-muted/30 py-20 md:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            FAQs
          </span>
          <h2 className="section-heading mb-4">Questions Before We Start</h2>
          <p className="section-subheading mx-auto">
            Clear answers for real estate teams evaluating a Yardi consulting partner.
          </p>
        </div>

        <Accordion type="single" collapsible className="mx-auto max-w-3xl">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`faq-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
