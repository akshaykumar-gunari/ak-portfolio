"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Terminal,
  Cpu,
  Brain,
  Wrench,
} from "lucide-react";
import { skillCategories } from "@/data/skills";
import SectionHeading from "./ui/SectionHeading";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Terminal,
  Cpu,
  Brain,
  Wrench,
};

const colors = [
  { bg: "bg-primary/10", border: "border-primary/20", hover: "hover:border-primary/40", text: "text-primary" },
  { bg: "bg-secondary/10", border: "border-secondary/20", hover: "hover:border-secondary/40", text: "text-secondary" },
  { bg: "bg-primary/10", border: "border-primary/20", hover: "hover:border-primary/40", text: "text-primary" },
  { bg: "bg-secondary/10", border: "border-secondary/20", hover: "hover:border-secondary/40", text: "text-secondary" },
  { bg: "bg-primary/10", border: "border-primary/20", hover: "hover:border-primary/40", text: "text-primary" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,_rgba(139,92,246,0.04)_0%,_transparent_50%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Technologies and domains I work with"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, i) => {
            const IconComponent = iconMap[category.icon] || Code2;
            const color = colors[i % colors.length];
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`card-glass rounded-2xl p-6 border ${color.border} ${color.hover}`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-xl ${color.bg}`}>
                    <IconComponent size={20} className={color.text} />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">
                    {category.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: j * 0.05 }}
                      className="px-3 py-1 text-xs rounded-full bg-background/60 text-muted border border-border/40 hover:border-primary/30 hover:text-foreground transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
