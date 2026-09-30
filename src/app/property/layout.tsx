import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Properties | Your Company",
  description:
    "Browse available properties for sale and rent on Your Company.",
};

export default function PropertyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
