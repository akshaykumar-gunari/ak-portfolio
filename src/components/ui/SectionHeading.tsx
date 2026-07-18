"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gradient-mixed">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-muted max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
    </motion.div>
  );
}
