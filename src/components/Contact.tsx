"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import SocialLinks from "./ui/SocialLinks";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,_rgba(6,182,212,0.03)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a question or want to connect?"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="card-glass rounded-2xl p-8 border border-border/40 h-full">
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Contact Information
              </h3>

              <div className="space-y-4 mb-8">
                <a
                  href="mailto:akshaygunari@gmail.com"
                  className="flex items-center gap-3 text-muted hover:text-primary transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <span className="text-sm">akshaygunari@gmail.com</span>
                </a>

                <a
                  href="tel:+917411680079"
                  className="flex items-center gap-3 text-muted hover:text-primary transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Phone size={18} className="text-primary" />
                  </div>
                  <span className="text-sm">+91 74116 80079</span>
                </a>

                <div className="flex items-center gap-3 text-muted">
                  <div className="p-2.5 rounded-xl bg-primary/10">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <span className="text-sm">Bangalore, India</span>
                </div>
              </div>

              <div className="border-t border-border/40 pt-6">
                <p className="text-xs text-muted mb-3 font-mono uppercase tracking-wider">
                  Follow me
                </p>
                <SocialLinks size={20} />
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <form
              action="mailto:akshaygunari@gmail.com"
              method="post"
              encType="text/plain"
              className="card-glass rounded-2xl p-8 space-y-4 border border-border/40"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs text-muted mb-1.5 font-mono uppercase tracking-wider"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-background/50 border border-border/50 text-foreground text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs text-muted mb-1.5 font-mono uppercase tracking-wider"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-background/50 border border-border/50 text-foreground text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs text-muted mb-1.5 font-mono uppercase tracking-wider"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="body"
                  rows={4}
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-background/50 border border-border/50 text-foreground text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              >
                <Send size={16} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
