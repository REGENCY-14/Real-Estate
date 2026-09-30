import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | Your Company",
  description: "Create a Your Company account.",
};

export default function SignupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
