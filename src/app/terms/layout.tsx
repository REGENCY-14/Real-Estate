import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Your Company",
  description: "Read Your Company's terms and conditions.",
};

export default function TermsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
