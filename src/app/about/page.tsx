import type { Metadata } from "next";
import ComingSoonPage from "@/components/ComingSoonPage";

export const metadata: Metadata = {
  title: "About Us | Your Company",
  description: "Learn about Your Company's story, people, and mission.",
};

export default function AboutPage() {
  return (
    <ComingSoonPage
      title="About Your Company"
      description="We're crafting the story of our guild, our people, and our mission. Check back soon to learn what drives Your Company."
    />
  );
}
