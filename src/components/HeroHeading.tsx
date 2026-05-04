"use client";

import { motion } from "framer-motion";

interface HeroHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function HeroHeading({ children, className = "" }: HeroHeadingProps) {
  return (
    <motion.h1
      className={className}
      initial={{ opacity: 0.85, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.h1>
  );
}
