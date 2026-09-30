import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verify Your Identity | Your Company",
  description: "Verify your identity to finish creating your account.",
};

export default function VerifyOtpLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
