import type { Metadata } from "next";
import ComingSoonPage from "@/components/ComingSoonPage";

export const metadata: Metadata = {
  title: "Properties | Your Company",
  description: "Browse the Your Company property portfolio.",
};

export default function PropertiesPage() {
  return (
    <ComingSoonPage
      title="Properties"
      description="This overview is being rebuilt. Head to our Real Estate page to browse the current portfolio while we finish this view."
    />
  );
}
