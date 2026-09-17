import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pandawa Property",
  description: "Warehouse, Factory & Industrial Land Indonesia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}