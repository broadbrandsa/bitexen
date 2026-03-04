import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-editorial",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bitexen × Broadbrand — South Africa Launch Proposal",
  description:
    "Broadbrand's agency proposal for Bitexen's South Africa market entry. Campaign, media plan, and strategy for launching Turkey's leading crypto exchange into Africa's most crypto-active market.",
  openGraph: {
    title: "Bitexen × Broadbrand — South Africa Launch Proposal",
    description:
      "Launch strategy, creative concept 'The 12th Man', and a R6M media plan for Bitexen SA.",
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
        className={`${barlowCondensed.variable} ${dmSans.variable} ${playfairDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
