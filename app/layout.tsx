import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: "Saliq Esports",
  description: "Saliq Esports is a platform showcasing esports player profiles, achievements, teams, and stats. Discover PUBG players and their history.",
  applicationName: "Saliq Esports",
  openGraph: {
    siteName: "Saliq Esports",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} h-full w-full overflow-x-hidden antialiased`}
    >
      <body className="min-h-full w-full flex flex-col font-body overflow-x-hidden">{children}</body>
    </html>
  );
}
