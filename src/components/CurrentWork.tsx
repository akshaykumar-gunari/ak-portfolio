"use client";

import { motion } from "framer-motion";
import { Cpu, GraduationCap, PenTool, Sparkles } from "lucide-react";

const items = [
  {
    icon: Cpu,
    title: "Linux Kernel & SONiC",
    description: "Platform bringup and SONiC networking OS development at Juniper Networks",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: GraduationCap,
    title: "M.Tech AI/ML",
    description: "Deep Learning, Computer Vision, and Optimization at BITS Pilani",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    icon: PenTool,
    title: "Technical Writing",
    description: "Documenting Linux Kernel internals and deep learning concepts",
    color: "text-success",
    bg: "bg-success/10",
  },
  {
    icon: Sparkles,
    title: "3D Vision Research",
    description: "Exploring point cloud decomposition and attention mechanisms",
    color: "text-warning",
    bg: "bg-warning/10",
  },
];

export default function CurrentWork() {
  return (
    <section id="current-work" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-xs font-mono text-primary tracking-widest uppercase mb-2">
            What drives me
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Currently Working On
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -3, scale: 1.01 }}
              className="card-glass rounded-xl p-5 flex items-start gap-4 hover:border-primary/20 transition-all duration-300"
            >
              <div className={`p-2.5 rounded-lg ${item.bg} shrink-0`}>
                <item.icon size={18} className={item.color} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
