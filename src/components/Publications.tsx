"use client";

import { motion } from "framer-motion";
import { BookOpen, FileCheck, Award, ExternalLink, Shield } from "lucide-react";
import { publications } from "@/data/publications";
import SectionHeading from "./ui/SectionHeading";

const patent = publications.find((pub) => pub.type === "patent");

const awards = [
  {
    title: "Spotlight Award",
    date: "December 2022",
    company: "AMD India Private Limited",
    description:
      "Enabled TDK CH201 HPD sensor on AMD platforms, supporting integration of multi-sensor stack (accelerometer, gyroscope, magnetometer, ALS, HPD) on the co-processor.",
  },
  {
    title: "Spotlight Award",
    date: "December 2021",
    company: "AMD India Private Limited",
    description:
      "Delivered a critical feature (S2-Idle boot timestamp measurement) in SmartTrace Buffer Parser, required for Google Chromebook platforms.",
  },
];

export default function Publications() {
  return (
    <section id="publications" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,_rgba(139,92,246,0.04)_0%,_transparent_50%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        <SectionHeading
          title="Publications & Awards"
          subtitle="Research contributions and recognition"
        />

        {/* Patent Highlight */}
        {patent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="relative overflow-hidden rounded-2xl border border-warning/30 bg-gradient-to-br from-warning/5 via-transparent to-primary/5 p-6 md:p-8">
              <div className="absolute top-4 right-4 opacity-10">
                <Shield size={64} className="text-warning" />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-warning/15 border border-warning/20">
                  <Shield size={20} className="text-warning" />
                </div>
                <div>
                  <span className="text-xs font-mono text-warning tracking-widest uppercase">
                    Patent
                  </span>
                  <span className="ml-2 text-xs font-mono text-muted">
                    Filed
                  </span>
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 leading-snug">
                {patent.title}
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-xs text-muted mb-2">
                <span>
                  <span className="text-warning font-medium">Filed:</span>{" "}
                  {patent.year}
                </span>
              </div>
              <p className="text-sm text-muted">
                <span className="text-foreground/70 font-medium">Authors:</span>{" "}
                {patent.authors}
              </p>
            </div>
          </motion.div>
        )}

        {/* Publications */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="p-2 rounded-lg bg-secondary/10">
              <BookOpen size={18} className="text-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">
              Research Papers
            </h3>
          </motion.div>

          <div className="space-y-3">
            {publications
              .filter((pub) => pub.type !== "patent")
              .map((pub, i) => (
                <motion.div
                  key={pub.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="card-glass rounded-2xl p-5 border border-border/40 hover:border-secondary/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-secondary/10 shrink-0 mt-0.5">
                      <BookOpen size={14} className="text-secondary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-xs font-mono text-primary font-medium">
                          [{pub.id}]
                        </span>
                        <span className="text-xs text-muted font-mono">
                          {pub.year}
                        </span>
                        {pub.doi && (
                          <a
                            href={`https://doi.org/${pub.doi}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-auto"
                          >
                            <ExternalLink
                              size={12}
                              className="text-muted hover:text-primary transition-colors"
                            />
                          </a>
                        )}
                      </div>
                      <h4 className="text-sm font-medium text-foreground mb-1 leading-snug">
                        {pub.title}
                      </h4>
                      <p className="text-xs text-muted mb-1">{pub.authors}</p>
                      <p className="text-xs text-secondary italic">
                        {pub.conference}
                      </p>
                      {pub.doi && (
                        <a
                          href={`https://doi.org/${pub.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-primary/70 hover:text-primary transition-colors mt-1.5 inline-block font-mono"
                        >
                          DOI: {pub.doi}
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-6 text-center"
          >
            <a
              href="https://scholar.google.com/citations?view_op=list_works&hl=en&authuser=1&user=YK46t9IAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-light transition-colors font-medium"
            >
              View all on Google Scholar
              <ExternalLink size={14} />
            </a>
          </motion.div>
        </div>

        {/* Awards */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="p-2 rounded-lg bg-warning/10">
              <Award size={18} className="text-warning" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">
              Honors & Awards
            </h3>
          </motion.div>

          <div className="space-y-3">
            {awards.map((award, i) => (
              <motion.div
                key={award.title + award.date}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ x: 4 }}
                className="card-glass rounded-2xl p-5 border border-border/40 hover:border-warning/30 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-warning/10 shrink-0 mt-0.5">
                    <Award size={14} className="text-warning" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">
                      {award.title}
                    </h4>
                    <p className="text-xs text-warning mb-2 font-mono">
                      {award.company} &bull; {award.date}
                    </p>
                    <p className="text-sm text-muted leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
