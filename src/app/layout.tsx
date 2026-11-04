import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Upshiftt — Websites & 24/7 AI Assistants for Local Service Businesses",
    template: "%s | Upshiftt",
  },
  description:
    "Upshiftt builds modern websites with a 24/7 AI assistant for local service businesses in Santa Cruz County — capturing leads and booking estimates while you work.",
  keywords: [
    "website design for contractors",
    "AI chat assistant",
    "local service business websites",
    "tree service website",
    "contractor lead capture",
    "Santa Cruz County",
    "Scotts Valley",
    "Central Coast",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://upshiftt.com",
    siteName: "Upshiftt",
    title: "Upshiftt — Websites & 24/7 AI Assistants for Local Service Businesses",
    description:
      "A website that books jobs while you work. Built in Scotts Valley for local service businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Upshiftt — Websites & 24/7 AI Assistants",
    description: "A website that books jobs while you work.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0A0A0A] text-[#EDEDED]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
