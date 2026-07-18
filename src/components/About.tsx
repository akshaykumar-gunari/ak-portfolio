"use client";

import { motion } from "framer-motion";
import { Briefcase, Award, BookOpen, Code2 } from "lucide-react";
import Image from "next/image";
import SectionHeading from "./ui/SectionHeading";
import TerminalWidget from "./ui/TerminalWidget";

const stats = [
  { icon: Briefcase, value: "4+", label: "Years Experience" },
  { icon: BookOpen, value: "4", label: "Publications" },
  { icon: Award, value: "2", label: "Spotlight Awards" },
  { icon: Code2, value: "3+", label: "Companies" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(6,182,212,0.03)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <SectionHeading title="About Me" subtitle="A glimpse into my journey" />

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="card-glass rounded-2xl p-6 text-center sticky top-24">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-xl overflow-hidden border-2 border-border/50">
                <Image
                  src="/images/AK.png"
                  alt="Akshaykumar Gunari"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                Akshaykumar Gunari
              </h3>
              <p className="text-sm text-primary font-mono mb-3">_AK_</p>
              <p className="text-xs text-muted mb-4 leading-relaxed">
                Systems Software Engineer
                <br />
                Linux Kernel &bull; Device Drivers
              </p>

              {/* Signature */}
              <div className="relative h-16 w-48 mx-auto mb-4 opacity-60">
                <Image
                  src="/images/signature.gif"
                  alt="Signature"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Terminal Widget */}
              <div className="mt-4">
                <TerminalWidget />
              </div>
            </div>
          </motion.div>

          {/* Bio + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="card-glass rounded-2xl p-8">
              <p className="text-muted leading-relaxed mb-4 text-sm md:text-base">
                Systems software engineer with experience in Linux kernel
                development, device drivers, and platform bring-up across server
                and networking hardware. Currently working as a Software Engineer
                at{" "}
                <span className="text-primary font-medium">Juniper Networks</span>,
                developing Linux kernel drivers and working on SONiC networking OS
                for data center switches.
              </p>
              <p className="text-muted leading-relaxed mb-4 text-sm md:text-base">
                Previously at{" "}
                <span className="text-primary font-medium">AMD India</span> for
                3+ years, where I worked on NTB and DMA device drivers, sensor
                enablement on ARM Cortex-M4, and firmware development. I delivered
                critical features for Google Chromebook platforms and enabled
                multi-sensor stacks on AMD co-processors.
              </p>
              <p className="text-muted leading-relaxed text-sm md:text-base">
                Passionate about the intersection of systems programming and
                hardware-software co-design. Also pursuing M.Tech in AI/ML at{" "}
                <span className="text-secondary font-medium">BITS Pilani</span>,
                with research published in computer vision and deep learning at
                conferences like ICCV, ICPRAI, and ICVGIP.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="card-glass rounded-xl p-5 text-center group"
                >
                  <div className="p-2.5 rounded-lg bg-primary/10 w-fit mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                    <stat.icon className="text-primary" size={22} />
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-gradient-cyan mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
