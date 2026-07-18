"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Layers } from "lucide-react";
import { projects } from "@/data/projects";
import SectionHeading from "./ui/SectionHeading";

const allDomains = Array.from(new Set(projects.flatMap((p) => p.domain)));

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.domain.includes(activeFilter));

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,_rgba(6,182,212,0.03)_0%,_transparent_50%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <SectionHeading
          title="Projects"
          subtitle="Key projects and research work"
        />

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {["All", ...allDomains].map((domain) => (
            <motion.button
              key={domain}
              onClick={() => setActiveFilter(domain)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-1.5 text-xs rounded-full border transition-all duration-200 font-medium ${
                activeFilter === domain
                  ? "bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/40 text-foreground"
                  : "border-border/50 text-muted hover:border-primary/30 hover:text-foreground"
              }`}
            >
              {domain}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4 }}
                className="card-glass rounded-2xl p-6 border border-border/40 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Layers size={16} className="text-primary" />
                    <h3 className="text-base font-semibold text-foreground">
                      {project.title}
                    </h3>
                  </div>
                  <ExternalLink size={14} className="text-muted shrink-0 mt-1" />
                </div>
                <p className="text-sm text-muted mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.domain.map((d) => (
                    <span
                      key={d}
                      className="px-2.5 py-0.5 text-[10px] rounded-full bg-primary/10 text-primary border border-primary/20 font-medium"
                    >
                      {d}
                    </span>
                  ))}
                </div>
                <div className="text-xs text-muted font-mono">
                  <span className="text-secondary">{project.association}</span>
                  {" "}&bull; {project.duration}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
