"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "cyan" | "purple";
  delay?: number;
}

export default function GlowCard({
  children,
  className = "",
  glowColor = "cyan",
  delay = 0,
}: GlowCardProps) {
  const glowClass = glowColor === "cyan" ? "glow-cyan" : "glow-purple";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`card-glass rounded-xl p-6 hover:${glowClass} transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
