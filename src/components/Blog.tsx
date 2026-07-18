"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Brain,
  Terminal,
  Sigma,
  Code2,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { blogPosts, blogCategories } from "@/data/blog";
import SectionHeading from "./ui/SectionHeading";

const iconMap: Record<string, React.ElementType> = {
  Terminal,
  Brain,
  Sigma,
  Code2,
};

const categoryColors: Record<string, string> = {
  cyan: "bg-primary/10 text-primary border-primary/20",
  purple: "bg-secondary/10 text-secondary border-secondary/20",
  green: "bg-success/10 text-success border-success/20",
  amber: "bg-warning/10 text-warning border-warning/20",
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function daysAgo(dateStr: string) {
  const diff = Math.floor(
    (Date.now() - new Date(dateStr).getTime()) / (1000 * 60 * 60 * 24)
  );
  if (diff === 0) return "Today";
  if (diff === 1) return "Yesterday";
  if (diff < 7) return `${diff}d ago`;
  if (diff < 30) return `${Math.floor(diff / 7)}w ago`;
  return `${Math.floor(diff / 30)}mo ago`;
}

export default function Blog() {
  return (
    <section id="blog" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,_rgba(139,92,246,0.03)_0%,_transparent_50%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <SectionHeading
          title="Explore the Blog"
          subtitle="Technical deep-dives, paper reviews, and learning notes"
        />

        {/* Latest Posts */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2"
          >
            <BookOpen size={18} className="text-primary" />
            Latest Posts
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-5">
            {blogPosts.map((post, i) => (
              <motion.a
                key={post.title}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="card-glass rounded-2xl p-6 border border-border/40 hover:border-primary/30 transition-all duration-300 block group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`px-2.5 py-0.5 text-[10px] rounded-full border font-medium ${categoryColors[post.categoryColor]}`}
                  >
                    {post.category}
                  </span>
                  <span className="text-[10px] text-muted font-mono ml-auto">
                    {daysAgo(post.date)}
                  </span>
                </div>
                <h4 className="text-base font-semibold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </h4>
                <p className="text-sm text-muted leading-relaxed mb-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted font-mono">
                    {formatDate(post.date)}
                  </span>
                  <ExternalLink
                    size={12}
                    className="text-muted group-hover:text-primary transition-colors"
                  />
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Blog Categories */}
        <div className="mb-10">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2"
          >
            <BookOpen size={18} className="text-secondary" />
            Browse by Topic
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {blogCategories.map((cat, i) => {
              const IconComponent = iconMap[cat.icon] || BookOpen;
              const colors = categoryColors[cat.color];
              return (
                <motion.a
                  key={cat.name}
                  href={cat.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="card-glass rounded-2xl p-5 border border-border/40 hover:border-primary/30 transition-all duration-300 block group text-center"
                >
                  <div
                    className={`p-2.5 rounded-xl ${colors.split(" ")[0]} w-fit mx-auto mb-3`}
                  >
                    <IconComponent size={20} className={colors.split(" ")[1]} />
                  </div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">
                    {cat.name}
                  </h4>
                  <p className="text-xs text-muted mb-2 leading-relaxed">
                    {cat.description}
                  </p>
                  <span className="text-[10px] text-muted font-mono">
                    {cat.postCount} posts
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://akshaykumar-gunari.github.io/explore-with-ak/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 text-foreground border border-primary/20 hover:border-primary/40 font-medium transition-all duration-300 hover:scale-105"
          >
            View Full Blog
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
