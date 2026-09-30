import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hotels | Your Company",
  description: "Explore available hotels on Your Company.",
};

export default function HotelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="min-h-screen">{children}</div>;
}
