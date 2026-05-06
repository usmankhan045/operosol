"use client";

import { motion } from "framer-motion";
import { Clock, ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    industry: "Healthcare",
    accentColor: "rgba(52,211,153,0.85)",
    accentBg: "rgba(52,211,153,0.10)",
    accentBorder: "rgba(52,211,153,0.22)",
    title: "AI Intake & Triage Automation",
    desc: "An autonomous agent that handles patient intake forms, routes queries to the right department, and drafts responses, reducing admin load by over 60%.",
    tags: ["Autonomous Agents", "Workflow Automation"],
  },
  {
    industry: "Finance",
    accentColor: "rgba(96,165,250,0.90)",
    accentBg: "rgba(96,165,250,0.10)",
    accentBorder: "rgba(96,165,250,0.22)",
    title: "Intelligent Document Processing",
    desc: "A generative AI pipeline that reads, classifies, and extracts key data from financial documents, processing in seconds what used to take hours.",
    tags: ["Generative AI", "Custom Development"],
  },
  {
    industry: "Retail",
    accentColor: "rgba(251,191,36,0.90)",
    accentBg: "rgba(251,191,36,0.10)",
    accentBorder: "rgba(251,191,36,0.22)",
    title: "Digital FTE for Customer Support",
    desc: "A fully trained AI employee that handles order inquiries, return requests, and product questions across email and chat, 24 hours a day.",
    tags: ["Digital FTEs", "Generative AI"],
  },
  {
    industry: "Operations",
    accentColor: "rgba(167,139,250,0.90)",
    accentBg: "rgba(167,139,250,0.10)",
    accentBorder: "rgba(167,139,250,0.22)",
    title: "Cross-Platform Workflow Orchestration",
    desc: "An end-to-end automation layer connecting CRM, project management, and reporting tools, eliminating manual data entry across the board.",
    tags: ["Workflow Automation", "AI Strategy"],
  },
];

const STATS = [
  { value: "60%+", label: "Average admin time saved" },
  { value: "24/7", label: "AI systems operate continuously" },
  { value: "6", label: "Service verticals covered" },
  { value: "4", label: "Expert partners on every project" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, delay, ease: "easeOut" },
});

export default function PortfolioSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--bg)" }}>
      {/* Center glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/3 h-[400px]"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, var(--accent-glow) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-28">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="text-center mb-20">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: "var(--accent)" }}>
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-5 text-theme">Built to Perform</h2>
          <div className="w-16 h-0.5 mx-auto rounded-full mb-6" style={{ background: "var(--accent)" }} />
          <p className="max-w-xl mx-auto text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
            We&apos;re just getting started. Here&apos;s a glimpse of the kinds of problems we solve and the systems we build.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {STATS.map((s, i) => (
            <motion.div key={s.label} {...fadeUp(0.08 + i * 0.07)} className="glass-card p-6 text-center">
              <p className="text-3xl font-bold mb-1" style={{ color: "var(--accent)" }}>{s.value}</p>
              <p className="text-xs leading-snug" style={{ color: "var(--text-dim)" }}>{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROJECTS.map((proj, i) => (
            <motion.div key={proj.title} {...fadeUp(0.05 + i * 0.1)} className="glass-service p-8 flex flex-col group">
              <div className="flex items-start justify-between mb-5">
                <span
                  className="text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full"
                  style={{ background: proj.accentBg, color: proj.accentColor, border: `1px solid ${proj.accentBorder}` }}
                >
                  {proj.industry}
                </span>
                <span
                  className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full"
                  style={{ background: "var(--card-bg)", border: "1px solid var(--border)", color: "var(--text-subtle)" }}
                >
                  <Clock size={11} />
                  Coming Soon
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-theme transition-colors duration-300" style={{}}>{proj.title}</h3>
              <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: "var(--text-muted)" }}>{proj.desc}</p>
              <div className="flex flex-wrap gap-2 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full"
                    style={{ border: "1px solid var(--border)", color: "var(--text-dim)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div {...fadeUp(0.2)} className="text-center mt-16">
          <p className="text-sm mb-4" style={{ color: "var(--text-subtle)" }}>Working on something interesting?</p>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "var(--accent)",
              boxShadow: "0 8px 24px var(--accent-glow-strong)",
              color: "#fff",
            }}
          >
            Let&apos;s Talk
            <ArrowUpRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
