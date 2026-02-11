import { useState } from "react";
import { MessageCircle, X, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
          href="https://cal.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="lg"
            className="gap-2 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            <CalendarCheck className="h-5 w-5" />
            Book a Call
          </Button>
        </a>

      </div>

      {/* Toggle button */}
      <Button
        size="icon"
        className={cn(
          "h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300",
          isOpen && "bg-muted hover:bg-muted text-foreground"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>
    </div>
  );
}
