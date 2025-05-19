import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { useScrollFromSearchParam } from "@/hooks/useScrollFromSearchParam";
import { ScrollHandler } from "@/components/ui/ScrollHandler";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Warranty Vault",
  description: "Australia's trusted warranty and maintenance platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ScrollHandler />
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
