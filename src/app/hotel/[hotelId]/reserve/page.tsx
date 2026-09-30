import type { Metadata } from "next";
import ComingSoonPage from "@/components/ComingSoonPage";

export const metadata: Metadata = {
  title: "Reserve | Your Company",
  description: "Reserve a hotel stay on Your Company.",
};

export default function ReservePage() {
  return (
    <ComingSoonPage
      title="Reservations"
      description="Direct booking is being finely tuned. Soon you'll be able to reserve your stay right here, with no fees and no middlemen."
    />
  );
}
