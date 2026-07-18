"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const repoLinks = [
  { label: "Blog", href: "https://akshaykumar-gunari.github.io/explore-with-ak/" },
  { label: "Notes", href: "https://github.com/akshaykumar-gunari/exploring-with-ak-notes" },
  { label: "Daily Journal", href: "https://akshaykumar-gunari.github.io/ak-daily-journal/" },
  { label: "Weekly Journal", href: "https://akshaykumar-gunari.github.io/AK-Weekly-Journal/" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 px-6 border-t border-border/30 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a href="#" className="text-lg font-bold font-mono">
              <span className="text-gradient-cyan">Explore with AK</span>
            </a>
            <p className="text-xs text-muted mt-1">
              &copy; {new Date().getFullYear()} Akshaykumar Gunari
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs text-muted flex-wrap justify-center">
            {["About", "Experience", "Projects", "Blog", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-foreground transition-colors"
                >
                  {item}
                </a>
              )
            )}
          </div>

          <div className="flex items-center gap-4 text-xs text-muted">
            {repoLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2.5 rounded-xl bg-surface border border-border/50 hover:border-primary/30 hover:glow-cyan transition-all duration-200"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} className="text-muted" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
