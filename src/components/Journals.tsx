"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  CalendarDays,
  Notebook,
  Pencil,
  ExternalLink,
} from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

const journals = [
  {
    title: "Explore with AK",
    description:
      "Technical blog covering Linux kernel, AI/ML, and mathematics. Built with Material for MkDocs.",
    icon: BookOpen,
    link: "https://akshaykumar-gunari.github.io/explore-with-ak/",
    color: "cyan",
    badge: "Blog",
  },
  {
    title: "Handwritten Notes",
    description:
      "Daily handwritten notes across AI/ML, Linux kernel, programming, DevOps, and math.",
    icon: Pencil,
    link: "https://github.com/akshaykumar-gunari/exploring-with-ak-notes",
    color: "purple",
    badge: "Notes",
  },
  {
    title: "Daily Journal",
    description:
      "Personal daily journaling application for tracking thoughts, experiences, and reflections.",
    icon: CalendarDays,
    link: "https://akshaykumar-gunari.github.io/ak-daily-journal/",
    color: "green",
    badge: "Journal",
  },
  {
    title: "Weekly Journal",
    description:
      "Structured weekly tracker for fitness, activities, and technical learning progress.",
    icon: Notebook,
    link: "https://akshaykumar-gunari.github.io/AK-Weekly-Journal/",
    color: "amber",
    badge: "Tracker",
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
  cyan: {
    bg: "hover:border-primary/40",
    border: "border-primary/20",
    text: "text-primary",
    iconBg: "bg-primary/10",
  },
  purple: {
    bg: "hover:border-secondary/40",
    border: "border-secondary/20",
    text: "text-secondary",
    iconBg: "bg-secondary/10",
  },
  green: {
    bg: "hover:border-success/40",
    border: "border-success/20",
    text: "text-success",
    iconBg: "bg-success/10",
  },
  amber: {
    bg: "hover:border-warning/40",
    border: "border-warning/20",
    text: "text-warning",
    iconBg: "bg-warning/10",
  },
};

export default function Journals() {
  return (
    <section id="journals" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,_rgba(6,182,212,0.03)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <SectionHeading
          title="Journals & Repos"
          subtitle="Where I document, track, and share my learning journey"
        />

        <div className="grid md:grid-cols-2 gap-5">
          {journals.map((journal, i) => {
            const colors = colorMap[journal.color];
            return (
              <motion.a
                key={journal.title}
                href={journal.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`card-glass rounded-2xl p-6 border ${colors.border} ${colors.bg} transition-all duration-300 block group`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl ${colors.iconBg}`}>
                      <journal.icon size={20} className={colors.text} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground">
                        {journal.title}
                      </h3>
                      <span
                        className={`text-[10px] uppercase tracking-wider font-medium ${colors.text}`}
                      >
                        {journal.badge}
                      </span>
                    </div>
                  </div>
                  <ExternalLink
                    size={14}
                    className="text-muted group-hover:text-foreground transition-colors mt-1"
                  />
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  {journal.description}
                </p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
