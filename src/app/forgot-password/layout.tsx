import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password | Your Company",
  description: "Reset your account password.",
};

export default function ForgotPasswordLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
