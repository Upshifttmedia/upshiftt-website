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
    default: "Upshiftt — 24/7 Answering & Automation for Local Service Businesses",
    template: "%s | Upshiftt",
  },
  description:
    "Upshiftt keeps your business running 24/7 with live call answering, instant SMS follow-up, and automated lead capture — so you never lose another job to voicemail.",
  keywords: [
    "answering service",
    "business automation",
    "local service business",
    "plumber answering service",
    "contractor lead capture",
    "Scotts Valley",
    "Central Coast",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://upshiftt.com",
    siteName: "Upshiftt",
    title: "Upshiftt — 24/7 Answering & Automation for Local Service Businesses",
    description:
      "Never miss a call. Never lose a lead. Upshiftt keeps your business running 24/7.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Upshiftt — 24/7 Answering & Automation",
    description: "Never miss a call. Never lose a lead.",
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
