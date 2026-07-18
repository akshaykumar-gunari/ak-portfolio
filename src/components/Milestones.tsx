"use client";

import { motion } from "framer-motion";
import { Calendar, Briefcase, GraduationCap, Trophy, FileCheck, Rocket } from "lucide-react";

const milestones = [
  {
    date: "11 August 1999",
    title: "Journey Starts",
    description: "Born",
    icon: Rocket,
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    date: "March 2015",
    title: "SSLC Boards",
    description: "Completed SSLC from Chetan Public School, Hubli",
    icon: GraduationCap,
    color: "text-secondary",
    bg: "bg-secondary/10",
    border: "border-secondary/20",
  },
  {
    date: "May 2017",
    title: "PUC Boards",
    description: "Completed PUC from Chetan PU Science College, Hubli",
    icon: GraduationCap,
    color: "text-secondary",
    bg: "bg-secondary/10",
    border: "border-secondary/20",
  },
  {
    date: "11 August 2017",
    title: "Started B.E. at KLE Tech",
    description: "Began B.E. in Computer Science & Engineering at KLE Technological University",
    icon: GraduationCap,
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    date: "4 June 2019",
    title: "Internship at IIT Delhi",
    description: "Started internship at Indian Institute of Technology, Delhi",
    icon: Rocket,
    color: "text-secondary",
    bg: "bg-secondary/10",
    border: "border-secondary/20",
  },
  {
    date: "21 December 2019",
    title: "Joined CEVI @ KLE Tech",
    description: "Joined Centre of Excellence in Visual Intelligence",
    icon: Rocket,
    color: "text-secondary",
    bg: "bg-secondary/10",
    border: "border-secondary/20",
  },
  {
    date: "July 2020",
    title: "REU Course @ CEVI",
    description: "Opted for Research Experience for Undergraduates at CEVI-KLE Tech",
    icon: Rocket,
    color: "text-secondary",
    bg: "bg-secondary/10",
    border: "border-secondary/20",
  },
  {
    date: "12 September 2020",
    title: "First Two Papers Accepted",
    description: "Papers accepted at ICVGIP and VisionNet'20",
    icon: Trophy,
    color: "text-warning",
    bg: "bg-warning/10",
    border: "border-warning/20",
  },
  {
    date: "1 March 2021",
    title: "Internship Offer from CEVI",
    description: "Received internship offer from CEVI",
    icon: Rocket,
    color: "text-secondary",
    bg: "bg-secondary/10",
    border: "border-secondary/20",
  },
  {
    date: "11 May 2021",
    title: "Job Offer from AMD",
    description: "Received job offer from AMD India",
    icon: Briefcase,
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    date: "10 August 2021",
    title: "ICCV Workshop Paper",
    description: "ABD-Net paper accepted at ICCV StruCo3D Workshop",
    icon: Trophy,
    color: "text-warning",
    bg: "bg-warning/10",
    border: "border-warning/20",
  },
  {
    date: "26 July 2021",
    title: "Joined AMD India",
    description: "Joined as Software System Designer - 1",
    icon: Briefcase,
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    date: "31 January 2022",
    title: "ICPRAI Paper Accepted",
    description: "Progressive Clustering paper accepted at ICPRAI 2022",
    icon: Trophy,
    color: "text-warning",
    bg: "bg-warning/10",
    border: "border-warning/20",
  },
  {
    date: "22 December 2021",
    title: "First Spotlight Award",
    description: "Spotlight Award @ AMD India for Chromebook feature delivery",
    icon: Trophy,
    color: "text-warning",
    bg: "bg-warning/10",
    border: "border-warning/20",
  },
  {
    date: "13 May 2022",
    title: "Patent Filed",
    description: "First patent from CEVI @ KLE Tech on 3D Point Cloud Decomposition",
    icon: FileCheck,
    color: "text-success",
    bg: "bg-success/10",
    border: "border-success/20",
  },
  {
    date: "14 December 2022",
    title: "Second Spotlight Award",
    description: "2nd Spotlight Award @ AMD India",
    icon: Trophy,
    color: "text-warning",
    bg: "bg-warning/10",
    border: "border-warning/20",
  },
  {
    date: "2 January 2023",
    title: "Linux Kernel Team @ AMD",
    description: "Started in Linux Platform Drivers Development Team",
    icon: Briefcase,
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    date: "1 March 2023",
    title: "Promoted to SSD-2",
    description: "Promoted to Software System Designer - 2, working on NTB & DMA drivers",
    icon: Briefcase,
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    date: "18 March 2024",
    title: "Joined Juniper Networks",
    description: "Joined as Software Engineer - 2",
    icon: Briefcase,
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    date: "26 May 2024",
    title: "M.Tech AI/ML at BITS Pilani",
    description: "Started M.Tech in Artificial Intelligence and Machine Learning",
    icon: GraduationCap,
    color: "text-secondary",
    bg: "bg-secondary/10",
    border: "border-secondary/20",
  },
];

export default function Milestones() {
  return (
    <section id="milestones" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,_rgba(6,182,212,0.04)_0%,_transparent_50%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Calendar size={14} className="text-primary" />
            <p className="text-xs font-mono text-primary tracking-widest uppercase">
              Career Journey
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Milestones
          </h2>
          <p className="text-muted max-w-md mx-auto text-sm">
            Key moments that shaped my journey in systems and research
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border/50 -translate-x-px" />

          <div className="space-y-8">
            {milestones.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={`${item.date}-${item.title}`}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`relative flex items-center gap-4 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content card */}
                  <div className={`flex-1 ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                    <div className={`card-glass rounded-xl p-4 border ${item.border} hover:border-opacity-60 transition-all duration-300`}>
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-1.5 rounded-md ${item.bg}`}>
                          <item.icon size={14} className={item.color} />
                        </div>
                        <div>
                          <span className="text-xs font-mono text-muted">
                            {item.date}
                          </span>
                          <h3 className="text-sm font-semibold text-foreground">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-xs text-muted ml-8 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                    <div className={`w-3 h-3 rounded-full ${item.bg} border-2 ${item.border} ring-4 ring-background`} />
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
