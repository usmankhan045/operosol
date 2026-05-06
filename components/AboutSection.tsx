"use client";

import { motion } from "framer-motion";
import { Lightbulb, ShieldCheck, TrendingUp } from "lucide-react";

const PARTNERS = [
  {
    name: "Muhammad Usman",
    initials: "MU",
    bio: "A driven AI strategist who leads client engagements and ensures every solution is built to last. Usman brings the vision that keeps every project pointed in the right direction.",
  },
  {
    name: "Muhammad Awais",
    initials: "MA",
    bio: "With a sharp eye for automation and workflow design, Awais architects the intelligent pipelines that power our core offerings. He finds the shortest path between a problem and a working solution.",
  },
  {
    name: "Muhammad Shaheer Kamran",
    initials: "SK",
    bio: "Shaheer brings deep technical expertise in AI development and model integration, turning complex requirements into elegant systems that actually ship.",
  },
  {
    name: "Maviya Noor",
    initials: "MN",
    bio: "Maviya bridges technology and business, ensuring what we build is not just intelligent but genuinely useful for the people who use it every day.",
  },
];

const VALUES = [
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We don't follow trends. We help our clients lead them. Every engagement starts with curiosity and ends with something genuinely new.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "We say what we mean and deliver what we promise. Our clients trust us because we've earned it, one honest conversation at a time.",
  },
  {
    icon: TrendingUp,
    title: "Impact",
    desc: "Good AI isn't about the tech. It's about the outcome. We measure success by the real difference our work makes in your business.",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, delay, ease: "easeOut" },
});

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--bg)" }}>
      {/* Top accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px]"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, var(--accent-glow) 0%, transparent 70%)",
        }}
      />
      {/* Dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, var(--dot-color) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-28">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="text-center mb-20">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: "var(--accent)" }}>
            Who We Are
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-5 text-theme">About Operosol</h2>
          <div className="w-16 h-0.5 mx-auto rounded-full" style={{ background: "var(--accent)" }} />
        </motion.div>

        {/* Story */}
        <motion.div {...fadeUp(0.1)} className="max-w-3xl mx-auto mb-24 text-center">
          <p className="text-lg leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>
            Operosol was born from a simple observation: most businesses know they need to adopt AI, but very few know where to start, or who to trust. We started this company to change that.
          </p>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
            The four of us came together with complementary skills and one shared conviction: that intelligent automation, when done right, doesn&apos;t just save time. It fundamentally changes what a business can do. We&apos;ve seen it firsthand, and we want to bring that same transformation to every client we work with.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {[
            {
              label: "Our Mission",
              heading: "Make every business smarter, regardless of size.",
              body: "We exist to democratize access to AI. Whether you're a startup or an established enterprise, you deserve intelligent systems that grow with you and work for you every single day.",
              side: "left",
            },
            {
              label: "Our Vision",
              heading: "A world where AI amplifies human potential.",
              body: "We envision a future where every business has access to AI that feels like a trusted team member, one that handles the repetitive so people can focus on the meaningful.",
              side: "right",
            },
          ].map((card, i) => (
            <motion.div key={card.label} {...fadeUp(0.1 + i * 0.1)} className="relative glass-card p-10 overflow-hidden">
              <div
                aria-hidden
                className={`absolute ${card.side === "left" ? "-top-8 -left-8" : "-top-8 -right-8"} w-32 h-32 rounded-full opacity-25`}
                style={{ background: `radial-gradient(circle, var(--accent), transparent)` }}
              />
              <span className="text-xs font-bold tracking-widest uppercase block mb-3" style={{ color: "var(--accent)" }}>
                {card.label}
              </span>
              <h3 className="text-2xl font-bold mb-4 leading-snug text-theme">{card.heading}</h3>
              <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>{card.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <motion.div {...fadeUp(0.1)} className="mb-24">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[0.3em] uppercase block mb-3" style={{ color: "var(--accent)" }}>
              What Guides Us
            </span>
            <h3 className="text-3xl font-bold text-theme">Our Values</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <motion.div key={v.title} {...fadeUp(0.1 + i * 0.1)} className="glass-service p-8 text-center group">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ background: "var(--accent-bg)", border: "1px solid var(--accent-border)" }}
                >
                  <v.icon size={24} style={{ color: "var(--accent)" }} />
                </div>
                <h4 className="text-lg font-bold mb-3 text-theme">{v.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-dim)" }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div {...fadeUp(0.1)}>
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[0.3em] uppercase block mb-3" style={{ color: "var(--accent)" }}>
              The People Behind It
            </span>
            <h3 className="text-3xl font-bold mb-3 text-theme">Meet the Team</h3>
            <p className="text-sm" style={{ color: "var(--text-subtle)" }}>Four partners. One shared mission. All in.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {PARTNERS.map((p, i) => (
              <motion.div key={p.name} {...fadeUp(0.1 + i * 0.07)} className="glass-card p-7 flex gap-5 items-start">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 text-base font-bold"
                  style={{
                    background: "var(--accent-bg)",
                    color: "var(--accent)",
                    border: "1.5px solid var(--accent-border)",
                  }}
                >
                  {p.initials}
                </div>
                <div>
                  <h4 className="text-base font-bold mb-0.5 text-theme">{p.name}</h4>
                  <p className="text-xs font-semibold tracking-wide mb-3" style={{ color: "var(--accent)" }}>
                    Co-Founder & Partner
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{p.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
