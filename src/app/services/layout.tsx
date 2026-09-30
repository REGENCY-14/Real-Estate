import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artisans | Your Company",
  description: "Meet the master artisans curated by Your Company to furnish and finish every property.",
};

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="min-h-screen">{children}</div>;
}
