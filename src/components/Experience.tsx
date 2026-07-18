"use client";

import { motion } from "framer-motion";
import { Building2, FlaskConical, ChevronRight } from "lucide-react";
import { experiences } from "@/data/experience";
import SectionHeading from "./ui/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,_rgba(6,182,212,0.04)_0%,_transparent_50%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-secondary/30 to-primary/30" />

          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative mb-8 flex flex-col md:flex-row ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-start`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className={`w-3 h-3 rounded-full ${
                    exp.type === "industry" ? "bg-primary" : "bg-secondary"
                  } border-4 border-background shadow-lg ${
                    exp.type === "industry"
                      ? "shadow-primary/30"
                      : "shadow-secondary/30"
                  }`}
                />
              </div>

              {/* Content */}
              <div
                className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                  i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                }`}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  className="card-glass rounded-2xl p-6 hover:glow-cyan transition-all duration-300"
                >
                  <div
                    className={`flex items-center gap-2 mb-3 ${
                      i % 2 === 0 ? "md:justify-end" : "justify-start"
                    }`}
                  >
                    {exp.type === "industry" ? (
                      <Building2 size={14} className="text-primary" />
                    ) : (
                      <FlaskConical size={14} className="text-secondary" />
                    )}
                    <span
                      className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-medium ${
                        exp.type === "industry"
                          ? "bg-primary/10 text-primary"
                          : "bg-secondary/10 text-secondary"
                      }`}
                    >
                      {exp.type === "industry" ? "Industry" : "Research"}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-1">
                    {exp.company}
                  </p>
                  <p className="text-xs text-muted mb-4 font-mono">
                    {exp.duration} &bull; {exp.location}
                  </p>
                  <ul
                    className={`text-sm text-muted space-y-2 ${
                      i % 2 === 0 ? "md:text-right" : ""
                    }`}
                  >
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className={`flex items-start gap-2 ${
                          i % 2 === 0 ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <ChevronRight
                          size={14}
                          className="text-primary mt-0.5 shrink-0"
                        />
                        <span className="leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
