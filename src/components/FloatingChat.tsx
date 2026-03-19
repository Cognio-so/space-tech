import { useState } from "react";
import { MessageCircle, X, CalendarCheck, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CONTACT_PHONE_US_DISPLAY, CONTACT_PHONE_US_URL, CONTACT_WHATSAPP_URL } from "@/lib/contact";

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Action buttons */}
      <div
        className={cn(
          "flex flex-col gap-3 transition-all duration-300",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        {/* Book a Call */}
        <a
          href="https://cal.com/spacetech/30min"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="lg"
            className="gap-2 rounded-full border border-white/15 bg-gradient-to-r from-white via-slate-100 to-slate-200 text-slate-900 shadow-[0_14px_30px_rgba(15,23,42,0.32)] transition-all duration-300 hover:-translate-y-0.5 hover:from-slate-50 hover:to-white hover:shadow-[0_18px_36px_rgba(15,23,42,0.4)]"
          >
            <CalendarCheck className="h-5 w-5" />
            Book a Call
          </Button>
        </a>

        {/* WhatsApp */}
        <a href={CONTACT_WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          <Button
            size="lg"
            variant="outline"
            className="gap-2 rounded-full border-white/15 bg-slate-950/55 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-green-500/40 hover:bg-slate-950/75 hover:shadow-xl"
          >
            <MessageCircle className="h-5 w-5 text-green-500" />
            WhatsApp
          </Button>
        </a>

        {/* Call */}
        <a href={CONTACT_PHONE_US_URL}>
          <Button
            size="lg"
            variant="outline"
            className="gap-2 rounded-full border-white/15 bg-slate-950/55 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/40 hover:bg-slate-950/75 hover:shadow-xl"
          >
            <Phone className="h-5 w-5 text-blue-500" />
            {CONTACT_PHONE_US_DISPLAY}
          </Button>
        </a>

      </div>

      {/* Toggle button */}
      <Button
        size="icon"
        className={cn(
          "h-14 w-14 rounded-full border border-white/12 bg-gradient-to-br from-slate-100 to-white text-slate-900 shadow-[0_14px_30px_rgba(15,23,42,0.32)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(15,23,42,0.4)]",
          isOpen && "border-white/10 bg-slate-200 text-slate-700 hover:bg-slate-100"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>
    </div>
  );
}
