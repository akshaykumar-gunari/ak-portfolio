"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const lines = [
  { prefix: "$", text: "currently_building", delay: 0 },
  { prefix: ">", text: "Linux Kernel & SONiC @ Juniper", delay: 0 },
  { prefix: "$", text: "learning", delay: 0 },
  { prefix: ">", text: "M.Tech AI/ML @ BITS Pilani", delay: 0 },
  { prefix: "$", text: "interested_in", delay: 0 },
  { prefix: ">", text: "HW/SW Co-design & RTOS", delay: 0 },
];

export default function TerminalWidget() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursor((c) => !c);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const lineTimer = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= lines.length) {
          clearInterval(lineTimer);
          return prev;
        }
        return prev + 1;
      });
    }, 600);
    return () => clearInterval(lineTimer);
  }, []);

  return (
    <div className="w-full rounded-xl bg-surface border border-border/40 overflow-hidden font-mono text-[11px] leading-relaxed dark:bg-[#18181f]">
      {/* Title bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-surface/50 border-b border-border/30">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        <span className="ml-2 text-[9px] text-muted">ak@portfolio ~ </span>
      </div>

      {/* Terminal body */}
      <div className="p-3 min-h-[140px]">
        {lines.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="flex gap-1.5"
          >
            {line.prefix === "$" ? (
              <span className="text-primary">{line.prefix}</span>
            ) : (
              <span className="text-secondary">{line.prefix}</span>
            )}
            <span className={line.prefix === "$" ? "text-foreground" : "text-muted"}>
              {line.text}
            </span>
          </motion.div>
        ))}

        {/* Cursor */}
        {visibleLines >= lines.length && (
          <div className="flex gap-1.5 mt-0.5">
            <span className="text-primary">$</span>
            <span
              className={`w-2 h-3.5 bg-primary/70 inline-block ${
                cursor ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        )}
      </div>
    </div>
  );
}
