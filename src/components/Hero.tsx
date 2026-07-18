"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, MapPin, Sparkles, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SITE_BASE_PATH } from "@/lib/site-config";
import SocialLinks from "./ui/SocialLinks";
import ParticleField from "./ParticleField";

export default function Hero() {
  const [imageOpen, setImageOpen] = useState(false);

  return (
    <>
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_20%_50%,_rgba(6,182,212,0.15)_0%,_transparent_50%)]" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_80%_20%,_rgba(139,92,246,0.15)_0%,_transparent_50%)]" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_40%_80%,_rgba(6,182,212,0.1)_0%,_transparent_50%)]" />
        </div>
        <ParticleField />
      </div>

      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 left-1/5 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 50, -30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/3 right-1/5 w-[500px] h-[500px] bg-secondary/8 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative shrink-0"
          >
            <div className="relative">
              {/* Glowing ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-full bg-gradient-to-r from-primary via-secondary to-primary opacity-60 blur-sm"
              />
              <button
                onClick={() => setImageOpen(true)}
                className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-background cursor-pointer group"
              >
                <Image
                  src={`${SITE_BASE_PATH}/images/AK.png`}
                  alt="Akshaykumar Gunari"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-mono bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                    View full image
                  </span>
                </div>
              </button>
              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                className="absolute -bottom-2 -right-2 px-3 py-1.5 rounded-full bg-surface/90 backdrop-blur-sm border border-success/30 text-success text-xs font-medium flex items-center gap-1.5"
              >
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                Available
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 justify-center lg:justify-start mb-4">
                <Sparkles size={14} className="text-primary" />
                <p className="text-primary font-mono text-sm tracking-widest uppercase">
                  Explore with AK
                </p>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 leading-tight">
                <span className="text-foreground">Akshaykumar Gunari</span>
                <span className="text-muted font-mono ml-3">
                  | _AK_
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg md:text-xl text-muted mb-3">
                Systems Software Engineer
              </p>
              <div className="flex items-center gap-2 text-muted text-sm mb-4 justify-center lg:justify-start">
                <MapPin size={14} className="text-primary" />
                <span>Juniper Networks | Bangalore, India</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start"
            >
              {[
                "Linux Kernel",
                "Device Drivers",
                "SONiC",
                "AI/ML",
              ].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="px-3 py-1 text-xs rounded-full border border-border/50 text-muted bg-surface/30 backdrop-blur-sm"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-4 mb-8 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </a>
              <Link
                href="/resume.pdf"
                target="_blank"
                className="px-8 py-3 rounded-lg border border-border/50 text-foreground font-medium hover:bg-surface/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30"
              >
                View Resume
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex justify-center lg:justify-start"
            >
              <SocialLinks size={22} />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-muted font-mono">scroll down</span>
            <ArrowDown size={16} className="text-muted" />
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Full Image Modal - rendered outside section */}
    <AnimatePresence>
      {imageOpen && (
        <div className="fixed inset-0 z-[100]" role="dialog">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.85)" }}
            onClick={() => setImageOpen(false)}
          />

          {/* Close button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.15 }}
            onClick={() => setImageOpen(false)}
            className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X size={24} />
          </motion.button>

          {/* Image container */}
          <motion.div
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.3, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 200 }}
            className="absolute inset-0 flex items-center justify-center p-4 md:p-8 pointer-events-none"
          >
            <div className="relative max-w-full max-h-full w-auto h-auto pointer-events-auto cursor-pointer" style={{ maxHeight: "85vh" }} onClick={() => setImageOpen(false)}>
                <Image
                  src={`${SITE_BASE_PATH}/images/AK.png`}
                  alt="Akshaykumar Gunari"
                  width={800}
                  height={800}
                  className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-2xl shadow-2xl"
                  unoptimized
                />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
    </>
  );
}
