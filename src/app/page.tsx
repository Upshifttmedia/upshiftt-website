import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Problem from "@/components/home/Problem";
import HowItWorks from "@/components/home/HowItWorks";
import ReputationSpotlight from "@/components/home/ReputationSpotlight";
import WhatIsIncluded from "@/components/home/WhatIsIncluded";
import SocialProof from "@/components/home/SocialProof";
import HomeCTA from "@/components/home/HomeCTA";

export const metadata: Metadata = {
  title: { absolute: "Upshiftt — Websites & 24/7 AI Assistants for Local Service Businesses" },
  description:
    "Upshiftt builds modern websites with a 24/7 AI assistant for Santa Cruz County service businesses — answering customers, capturing leads, and booking estimates while you work.",
  openGraph: {
    title: "Upshiftt — Websites & 24/7 AI Assistants for Local Service Businesses",
    description:
      "A website that books jobs while you work. Built in Scotts Valley for local service businesses.",
    url: "https://upshiftt.com",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <HowItWorks />
      <ReputationSpotlight />
      <WhatIsIncluded />
      <SocialProof />
      <HomeCTA />
    </>
  );
}
