import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bitexen × Broadbrand — South Africa Launch Proposal",
  description:
    "Broadbrand's agency proposal for Bitexen's South Africa market entry. Campaign concept, media plan, and strategy for launching Turkey's leading crypto exchange into Africa's most crypto-active market.",
  openGraph: {
    title: "Bitexen × Broadbrand — South Africa Launch Proposal",
    description:
      "Launch strategy, creative concept, and media plan for Bitexen SA.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
