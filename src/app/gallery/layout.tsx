import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Your Company",
  description:
    "Explore photos of properties, spaces, and services available on Your Company.",
};

export default function GalleryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
