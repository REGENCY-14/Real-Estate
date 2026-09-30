import type { Metadata } from "next";
import ComingSoonPage from "@/components/ComingSoonPage";

export const metadata: Metadata = {
  title: "Profile | Your Company",
  description: "Your profile and account settings are on the way.",
};

export default function ProfilePage() {
  return (
    <ComingSoonPage
      title="Profile"
      description="Your profile and account settings are on the way. Soon you'll be able to manage your details, preferences, and bookings all in one place."
    />
  );
}
