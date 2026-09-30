import type { Metadata } from "next";
import ComingSoonPage from "@/components/ComingSoonPage";

export const metadata: Metadata = {
  title: "How It Works | Your Company",
  description: "See how Your Company works, from inquiry to acquisition.",
};

export default function HowItWorksPage() {
  return (
    <ComingSoonPage
      title="How It Works"
      description="We're putting together a clear walkthrough of how Your Company works, from inquiry to acquisition. Check back soon."
    />
  );
}
