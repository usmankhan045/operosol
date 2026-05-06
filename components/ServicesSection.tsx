"use client";

import { motion } from "framer-motion";
import { UserCog, Bot, Sparkles, Workflow, LineChart, Code2, Search, Pencil, Rocket } from "lucide-react";

const SERVICES = [
  {
    number: "01", icon: UserCog, title: "Digital FTEs",
    desc: "Think of a Digital FTE as a full-time employee, except they never sleep, never get sick, and can handle a hundred tasks at once. We build AI workers that manage your operations end-to-end.",
    highlights: ["24/7 operation", "Process-trained AI", "Seamless human handoffs"],
  },
  {
    number: "02", icon: Bot, title: "Autonomous AI Agents",
    desc: "These aren't chatbots. Our autonomous agents reason, plan, and act. They take multi-step decisions without you having to hold their hand and handle complex workflows that used to require a dedicated team.",
    highlights: ["Multi-step reasoning", "Tool and API integration", "Goal-oriented execution"],
  },
  {
    number: "03", icon: Sparkles, title: "Generative AI Solutions",
    desc: "From generating marketing copy to synthesizing research reports and building internal knowledge bases, we integrate the right generative AI tools into your stack, fine-tuned to your voice and your data.",
    highlights: ["Custom model fine-tuning", "Content and document generation", "Retrieval-augmented pipelines"],
  },
  {
    number: "04", icon: Workflow, title: "AI Workflow Automation",
    desc: "We map your existing processes, identify the bottlenecks, and rebuild them with AI at the core. The result: faster turnarounds, fewer errors, and a team that can finally focus on work that matters.",
    highlights: ["End-to-end process mapping", "Integration with existing tools", "Measurable time savings"],
  },
  {
    number: "05", icon: LineChart, title: "AI Consulting & Strategy",
    desc: "Not sure where to start with AI? We work with leadership teams to build an honest, practical roadmap that matches your goals, your budget, and the reality of your current operations.",
    highlights: ["AI readiness assessment", "Roadmap development", "Vendor and tool selection"],
  },
  {
    number: "06", icon: Code2, title: "Custom AI Development",
    desc: "When off-the-shelf tools don't cut it, we build from scratch. Whether it's a bespoke model, a specialized agent, or a tightly integrated AI feature inside your product, we design and ship it to production.",
    highlights: ["Custom model development", "API and product integration", "Ongoing support"],
  },
];

const PROCESS = [
  { icon: Search, step: "01", title: "Discover", desc: "We start by understanding your business. Not just the problem on the surface, but the processes, the people, and the outcomes that matter most to you." },
  { icon: Pencil, step: "02", title: "Design", desc: "We design a solution that fits your reality. No bloated systems, no unnecessary complexity. Just a focused plan that solves the right problem, the right way." },
  { icon: Rocket, step: "03", title: "Deploy", desc: "We build, test, and ship. Then we stay close, because good AI gets better with feedback, and we don't consider a project done until you're seeing real results." },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, delay, ease: "easeOut" },
});

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--bg-alt)" }}>
      {/* Right glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 w-[600px] h-[500px]"
        style={{ background: "radial-gradient(ellipse at 100% 0%, var(--accent-glow) 0%, transparent 65%)" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-28">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="text-center mb-20">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: "var(--accent)" }}>
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-5 text-theme">AI That Works as Hard as You Do</h2>
          <div className="w-16 h-0.5 mx-auto rounded-full mb-6" style={{ background: "var(--accent)" }} />
          <p className="max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
            From Digital FTEs to fully autonomous agents, we build AI solutions that actually get used, because we design them around the people who use them.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-28">
          {SERVICES.map((svc, i) => (
            <motion.div key={svc.title} {...fadeUp(0.05 + i * 0.07)} className="glass-service p-7 flex flex-col relative group">
              <span
                className="absolute top-6 right-6 text-xs font-bold tabular-nums opacity-20 group-hover:opacity-50 transition-opacity duration-300"
                style={{ color: "var(--accent)", letterSpacing: "0.1em" }}
              >
                {svc.number}
              </span>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ background: "var(--accent-bg)", border: "1px solid var(--accent-border)" }}
              >
                <svc.icon size={20} style={{ color: "var(--accent)" }} />
              </div>
              <h3 className="text-lg font-bold mb-3 text-theme">{svc.title}</h3>
              <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "var(--text-muted)" }}>{svc.desc}</p>
              <div className="border-t pt-4 space-y-2" style={{ borderColor: "var(--border)" }}>
                {svc.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2.5 text-sm" style={{ color: "var(--text-dim)" }}>
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--accent)" }} />
                    {h}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* How We Work */}
        <motion.div {...fadeUp(0.1)}>
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[0.3em] uppercase block mb-3" style={{ color: "var(--accent)" }}>
              Our Process
            </span>
            <h3 className="text-3xl font-bold mb-3 text-theme">How We Work</h3>
            <p className="max-w-lg mx-auto text-sm" style={{ color: "var(--text-dim)" }}>
              Every engagement follows three simple phases, thorough enough to get it right and lean enough to move fast.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROCESS.map((step, i) => (
              <motion.div key={step.title} {...fadeUp(0.1 + i * 0.1)} className="relative">
                {i < PROCESS.length - 1 && (
                  <div
                    aria-hidden
                    className="hidden md:block absolute top-10 left-[calc(50%+2.5rem)] w-[calc(100%-3rem)] h-px"
                    style={{ background: `linear-gradient(to right, var(--accent-border), transparent)` }}
                  />
                )}
                <div className="glass-card p-8 text-center h-full">
                  <div
                    className="w-16 h-16 rounded-2xl flex flex-col items-center justify-center mx-auto mb-5"
                    style={{ background: "var(--accent-bg)", border: "1px solid var(--accent-border)" }}
                  >
                    <step.icon size={20} style={{ color: "var(--accent)" }} />
                    <span className="text-[10px] font-bold mt-1 tracking-widest" style={{ color: "var(--accent)" }}>{step.step}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-theme">{step.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
