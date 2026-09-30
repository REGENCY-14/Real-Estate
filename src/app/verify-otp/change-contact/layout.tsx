import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Change Contact Method | Your Company",
  description: "Choose which verified contact method to update.",
};

export default function ChangeContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
