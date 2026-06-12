import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "spacetech-privacy-accepted";

export function PrivacyNotice() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(localStorage.getItem(STORAGE_KEY) !== "true");
  }, []);

  const acceptPrivacy = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[60] mx-auto max-w-3xl rounded-lg border bg-background p-4 shadow-2xl md:left-auto md:right-6">
      <div className="flex gap-4">
        <div className="flex-1">
          <p className="font-semibold">Privacy notice</p>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">
            We use submitted contact details only to respond to enquiries, schedule calls,
            and provide SpaceTech Consulting services.
          </p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="shrink-0"
          onClick={() => setIsVisible(false)}
          aria-label="Close privacy notice"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
      <div className="mt-4 flex justify-end">
        <Button onClick={acceptPrivacy}>Accept</Button>
      </div>
    </div>
  );
}
