import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Your Company",
  description:
    "Buy or sell properties with confidence. Browse verified listings and connect directly with trusted property owners.",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
