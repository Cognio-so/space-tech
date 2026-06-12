import { PlayCircle } from "lucide-react";
import logoDark from "@/assets/logo-dark.png";

export function LogoHighlight() {
  return (
    <section className="bg-muted/30 py-20 md:py-28">
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Brand Introduction
            </span>
            <h2 className="section-heading mb-4">Built Around Property Technology Outcomes</h2>
            <p className="text-lg leading-8 text-muted-foreground">
              SpaceTech Consulting combines real estate process understanding with Yardi
              platform execution. Our logo highlights connected buildings, cloud-ready
              operations, and a service model focused on dependable client outcomes.
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm font-medium text-primary">
              <PlayCircle className="h-5 w-5" />
              Intro video placeholder ready for your final video asset
            </div>
          </div>

          <div className="rounded-lg border bg-card p-8">
            <img
              src={logoDark}
              alt="SpaceTech Consulting logo"
              className="mx-auto h-auto w-full max-w-lg object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
