import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Your Company",
  description: "Login to your account.",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
