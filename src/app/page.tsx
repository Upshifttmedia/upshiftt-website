import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Problem from "@/components/home/Problem";
import HowItWorks from "@/components/home/HowItWorks";
import WhatIsIncluded from "@/components/home/WhatIsIncluded";
import SocialProof from "@/components/home/SocialProof";
import HomeCTA from "@/components/home/HomeCTA";

export const metadata: Metadata = {
  title: "Upshiftt — 24/7 Answering & Automation for Local Service Businesses",
  description:
    "Upshiftt keeps your business running 24/7 — live call answering, instant SMS follow-up, and automated lead capture so you never lose another job to voicemail.",
  openGraph: {
    title: "Upshiftt — 24/7 Answering & Automation for Local Service Businesses",
    description:
      "Never miss a call. Never lose a lead. Upshiftt keeps your business running 24/7.",
    url: "https://upshiftt.com",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <HowItWorks />
      <WhatIsIncluded />
      <SocialProof />
      <HomeCTA />
    </>
  );
}
