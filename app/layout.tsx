import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MonMetrics",
  description: "RPC Analytics on Monad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
