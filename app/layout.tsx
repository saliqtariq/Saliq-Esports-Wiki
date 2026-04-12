import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saliq Wiki — Pakistan Esports",
  description: "Stats, rosters, and tournament history for Pakistan's competitive gaming scene — all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} h-full w-screen overflow-x-hidden antialiased`}
    >
      <body className="min-h-full w-screen flex flex-col font-body overflow-x-hidden">{children}</body>
    </html>
  );
}
