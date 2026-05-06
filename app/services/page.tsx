"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import {
  UserCog,
  Bot,
  Sparkles,
  Workflow,
  LineChart,
  Code2,
  Search,
  Pencil,
  Rocket,
} from "lucide-react";

const SERVICES = [
  {
    icon: UserCog,
    title: "Digital FTEs",
    desc: "Think of a Digital FTE as a full-time employee, except they never sleep, never get sick, and can handle a hundred tasks at once. We build AI workers that manage your operations end-to-end, from inbox management to data processing and customer follow-ups.",
    highlights: ["24/7 operation", "Process-trained AI", "Seamless handoffs to human teams"],
  },
  {
    icon: Bot,
    title: "Autonomous AI Agents",
    desc: "These aren't chatbots. Our autonomous agents reason, plan, and act. They take multi-step decisions without you having to hold their hand, and handle complex workflows that used to require a dedicated team.",
    highlights: ["Multi-step reasoning", "Tool-use and API integration", "Goal-oriented execution"],
  },
  {
    icon: Sparkles,
    title: "Generative AI Solutions",
    desc: "From generating marketing copy to synthesizing research reports and building internal knowledge bases, we integrate the right generative AI tools into your stack, fine-tuned to your voice, your data, and your standards.",
    highlights: ["Custom model fine-tuning", "Content & document generation", "Retrieval-augmented pipelines"],
  },
  {
    icon: Workflow,
    title: "AI Workflow Automation",
    desc: "We map your existing processes, identify the bottlenecks, and rebuild them with AI at the core. The result: faster turnarounds, fewer errors, and a team that can finally focus on work that matters.",
    highlights: ["End-to-end process mapping", "Integration with your existing tools", "Measurable time savings"],
  },
  {
    icon: LineChart,
    title: "AI Consulting & Strategy",
    desc: "Not sure where to start with AI? That's what we're here for. We work with leadership teams to build an honest, practical roadmap that matches your goals, your budget, and the reality of your current operations.",
    highlights: ["AI readiness assessment", "Roadmap development", "Vendor and tool selection guidance"],
  },
  {
    icon: Code2,
    title: "Custom AI Development",
    desc: "When off-the-shelf tools don't cut it, we build from scratch. Whether it's a bespoke model, a specialized agent, or a tightly integrated AI feature inside your product, we design and ship it to production.",
    highlights: ["Custom model development", "API and product integration", "Ongoing support & iteration"],
  },
];

const HOW_WE_WORK = [
  {
    icon: Search,
    step: "01",
    title: "Discover",
    desc: "We start by understanding your business. Not just the problem on the surface, but the processes, the people, and the outcomes that matter most to you.",
  },
  {
    icon: Pencil,
    step: "02",
    title: "Design",
    desc: "We design a solution that fits your reality. No bloated systems, no unnecessary complexity. Just a focused plan that solves the right problem, the right way.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Deploy",
    desc: "We build, test, and ship. Then we stay close, because good AI gets better with feedback, and we don't consider a project done until you're seeing real results.",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: "easeOut" },
});

export default function ServicesPage() {
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
            What We Do
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            AI That Works as Hard as You Do
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            From Digital FTEs to fully autonomous agents, we build AI solutions that actually get used, because we design them around the people who use them.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc, i) => (
              <motion.div
                key={svc.title}
                {...fadeUp(0.05 + i * 0.08)}
                className="glass-service p-8 flex flex-col"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                  style={{ background: "rgba(28,217,142,0.12)" }}
                >
                  <svc.icon size={22} color="rgb(28,217,142)" />
                </div>
                <h3 className="text-xl font-bold mb-3">{svc.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-5 flex-1">{svc.desc}</p>
                <ul className="space-y-2">
                  {svc.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-white/50">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: "rgb(28,217,142)" }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp(0.1)} className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[rgb(28,217,142)] mb-3">
              Our Process
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">How We Work</h2>
            <p className="text-white/50 mt-4 max-w-lg mx-auto">
              Every engagement follows three simple phases, thorough enough to get it right and lean enough to move fast.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HOW_WE_WORK.map((step, i) => (
              <motion.div key={step.title} {...fadeUp(0.1 + i * 0.1)} className="glass-card p-8 text-center">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: "rgba(28,217,142,0.12)" }}
                >
                  <step.icon size={20} color="rgb(28,217,142)" />
                </div>
                <p className="text-[rgb(28,217,142)] text-xs font-bold tracking-widest mb-2">{step.step}</p>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <motion.div {...fadeUp(0.1)} className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Ready to get started?
          </h2>
          <p className="text-white/60 mb-8 text-lg">
            Let&apos;s have a real conversation about what AI can do for your business.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 shadow-lg"
            style={{
              backgroundColor: "rgb(28, 217, 142)",
              boxShadow: "0 10px 30px rgba(28, 217, 142, 0.3)",
            }}
          >
            Talk to Us
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
