"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

const education = [
  {
    institution: "Birla Institute of Technology and Science, Pilani",
    degree: "M.Tech in Artificial Intelligence and Machine Learning",
    duration: "May 2024 - Pursuing",
    location: "Pilani, India",
    note: "Currently pursuing",
  },
  {
    institution: "KLE Technological University",
    degree: "Bachelor of Engineering in Computer Science",
    duration: "August 2017 - July 2021",
    location: "Hubli, India",
    gpa: "9.02 / 10.00",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,_rgba(139,92,246,0.03)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        <SectionHeading title="Education" />

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="card-glass rounded-2xl p-6 border border-border/40 hover:border-secondary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-secondary/10 shrink-0">
                  <GraduationCap size={24} className="text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-foreground mb-1 leading-snug">
                    {edu.degree}
                  </h3>
                  <p className="text-primary text-sm mb-1 font-medium">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-muted mb-3 font-mono">
                    {edu.duration} &bull; {edu.location}
                  </p>
                  <div className="flex items-center gap-2 flex-wrap">
                    {edu.gpa && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-success/10 text-success text-xs font-medium border border-success/20">
                        GPA: {edu.gpa}
                      </div>
                    )}
                    {edu.note && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-warning/10 text-warning text-xs font-medium border border-warning/20">
                        {edu.note}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
