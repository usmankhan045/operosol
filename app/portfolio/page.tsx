"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Clock } from "lucide-react";

const PROJECTS = [
  {
    industry: "Healthcare",
    title: "AI Intake & Triage Automation",
    desc: "An autonomous agent that handles patient intake forms, routes queries to the right department, and drafts responses, reducing admin load by over 60%.",
    tags: ["Autonomous Agents", "Workflow Automation"],
  },
  {
    industry: "Finance",
    title: "Intelligent Document Processing",
    desc: "A generative AI pipeline that reads, classifies, and extracts key data from financial documents, processing in seconds what used to take hours.",
    tags: ["Generative AI", "Custom Development"],
  },
  {
    industry: "Retail",
    title: "Digital FTE for Customer Support",
    desc: "A fully trained AI employee that handles order inquiries, return requests, and product questions across email and chat, 24 hours a day.",
    tags: ["Digital FTEs", "Generative AI"],
  },
  {
    industry: "Operations",
    title: "Cross-Platform Workflow Orchestration",
    desc: "An end-to-end automation layer connecting CRM, project management, and reporting tools, eliminating manual data entry across the board.",
    tags: ["Workflow Automation", "AI Strategy"],
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: "easeOut" },
});

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Page Header */}
      <section className="pt-36 pb-20 px-6 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(28,217,142,0.12) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <motion.div {...fadeUp(0)} className="relative z-10 max-w-3xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[rgb(28,217,142)] mb-4">
            Our Work
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Built to Perform
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            We&apos;re just getting started. Here&apos;s a glimpse of the kinds of problems we solve and the systems we build.
          </p>
        </motion.div>
      </section>

      {/* Project Cards */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((proj, i) => (
              <motion.div
                key={proj.title}
                {...fadeUp(0.05 + i * 0.1)}
                className="glass-service p-8 flex flex-col"
              >
                {/* Industry + Coming Soon */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                    style={{
                      background: "rgba(28,217,142,0.12)",
                      color: "rgb(28,217,142)",
                    }}
                  >
                    {proj.industry}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-white/40 font-medium">
                    <Clock size={12} />
                    Coming Soon
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3">{proj.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed flex-1 mb-5">
                  {proj.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full border border-white/10 text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <motion.div {...fadeUp(0.1)} className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Working on something? Let&apos;s talk.
          </h2>
          <p className="text-white/60 mb-8 text-lg">
            We&apos;re always interested in interesting problems. Tell us about yours.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 shadow-lg"
            style={{
              backgroundColor: "rgb(28, 217, 142)",
              boxShadow: "0 10px 30px rgba(28, 217, 142, 0.3)",
            }}
          >
            Get in Touch
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
