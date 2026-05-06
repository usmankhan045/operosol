"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Lightbulb, ShieldCheck, TrendingUp } from "lucide-react";

const PARTNERS = [
  {
    name: "Muhammad Usman",
    initials: "MU",
    title: "Co-Founder & Partner",
    bio: "A driven AI strategist passionate about building systems that solve real-world problems. Muhammad leads client engagements and ensures every solution is built to last.",
  },
  {
    name: "Muhammad Awais",
    initials: "MA",
    title: "Co-Founder & Partner",
    bio: "With a sharp eye for automation and workflow design, Awais architects the intelligent pipelines that power Operosol's core offerings.",
  },
  {
    name: "Muhammad Shaheer Kamran",
    initials: "SK",
    title: "Co-Founder & Partner",
    bio: "Shaheer brings deep technical expertise in AI development and model integration, turning complex requirements into elegant, working solutions.",
  },
  {
    name: "Maviya Noor",
    initials: "MN",
    title: "Co-Founder & Partner",
    bio: "Maviya bridges the gap between technology and business, ensuring our solutions are not just intelligent but genuinely useful for the people who use them.",
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
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: "easeOut" },
});

export default function AboutPage() {
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
            Who We Are
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            About Operosol
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            We&apos;re a team of four builders who believe AI should work for people, not the other way around.
          </p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp(0.1)}>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
              Our Story
            </h2>
            <div className="space-y-5 text-white/70 text-base md:text-lg leading-relaxed">
              <p>
                Operosol was born from a simple observation: most businesses know they need to adopt AI, but very few know where to start, or who to trust. We started this company to change that.
              </p>
              <p>
                The four of us came together with complementary skills and one shared conviction: that intelligent automation, when done right, doesn&apos;t just save time. It fundamentally changes what a business can do. We&apos;ve seen it firsthand, and we want to bring that same transformation to our clients.
              </p>
              <p>
                Today, Operosol works with businesses across industries to design and deploy AI systems that actually get used, because we build them around the people who use them, not the other way around.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp(0.1)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-8">
              <p className="text-xs font-semibold tracking-widest uppercase text-[rgb(28,217,142)] mb-3">
                Our Mission
              </p>
              <h3 className="text-xl font-bold mb-4">
                Make every business smarter, regardless of size.
              </h3>
              <p className="text-white/60 leading-relaxed">
                We exist to democratize access to AI. Whether you&apos;re a startup or an established enterprise, you deserve intelligent systems that grow with you and work for you every single day.
              </p>
            </div>
            <div className="glass-card p-8">
              <p className="text-xs font-semibold tracking-widest uppercase text-[rgb(28,217,142)] mb-3">
                Our Vision
              </p>
              <h3 className="text-xl font-bold mb-4">
                A world where AI amplifies human potential.
              </h3>
              <p className="text-white/60 leading-relaxed">
                We envision a future where every business has access to AI that feels like a trusted team member, one that handles the repetitive so people can focus on the meaningful.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp(0.1)} className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[rgb(28,217,142)] mb-3">
              What Guides Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">Our Values</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <motion.div key={v.title} {...fadeUp(0.1 + i * 0.1)} className="glass-service p-8">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(28,217,142,0.12)" }}
                >
                  <v.icon size={22} color="rgb(28,217,142)" />
                </div>
                <h3 className="text-lg font-bold mb-3">{v.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp(0.1)} className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[rgb(28,217,142)] mb-3">
              The People Behind It
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">Meet the Team</h2>
            <p className="text-white/50 mt-4 max-w-xl mx-auto">
              Four partners. One shared mission. All in.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PARTNERS.map((p, i) => (
              <motion.div key={p.name} {...fadeUp(0.1 + i * 0.08)} className="glass-card p-8 flex gap-6 items-start">
                {/* Avatar */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold"
                  style={{
                    background: "rgba(28,217,142,0.15)",
                    color: "rgb(28,217,142)",
                    border: "1px solid rgba(28,217,142,0.3)",
                  }}
                >
                  {p.initials}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-0.5">{p.name}</h3>
                  <p className="text-xs text-[rgb(28,217,142)] font-semibold tracking-wide mb-3">
                    {p.title}
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed">{p.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
