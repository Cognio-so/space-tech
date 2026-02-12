import { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingChat } from "@/components/FloatingChat";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background via-background to-primary/5">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingChat />
    </div>
  );
}
