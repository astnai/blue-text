import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/Header";

import "./globals.css";

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "text-encrypted-effect",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} bg-neutral-50 mono antialiased font-mono max-w-4xl mx-auto px-4`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
