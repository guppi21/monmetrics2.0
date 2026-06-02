import "./globals.css";
import type { Metadata } from "next";

import { NetworkProvider } from "@/context/network-context";

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
      <body>
        <NetworkProvider>
          {children}
        </NetworkProvider>
      </body>
    </html>
  );
}