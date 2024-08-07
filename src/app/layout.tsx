import type { Metadata } from "next";
import { inter } from "@/app/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "IDKYET",
  description: "IDK-yet-bruv",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
