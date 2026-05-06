"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Mail, Phone, Send } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: "easeOut" },
});

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            Reach Out
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Let&apos;s Talk
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            Whether you have a specific project in mind or just want to explore what AI could do for your business, we would love to hear from you.
          </p>
        </motion.div>
      </section>

      {/* Two-column layout */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Left — Contact details */}
          <motion.div {...fadeUp(0.1)}>
            <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
            <p className="text-white/60 leading-relaxed mb-10">
              We&apos;re a small team that takes every conversation seriously. You won&apos;t get a form response. You&apos;ll hear directly from one of our partners, usually within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(28,217,142,0.12)" }}
                >
                  <Mail size={18} color="rgb(28,217,142)" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-0.5">Email</p>
                  <a
                    href="mailto:hello@operosol.com"
                    className="text-white hover:text-[rgb(28,217,142)] transition-colors duration-200"
                  >
                    hello@operosol.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(28,217,142,0.12)" }}
                >
                  <Phone size={18} color="rgb(28,217,142)" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-0.5">Phone</p>
                  <a
                    href="tel:+10000000000"
                    className="text-white hover:text-[rgb(28,217,142)] transition-colors duration-200"
                  >
                    +1 (000) 000-0000
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Contact form */}
          <motion.div {...fadeUp(0.2)}>
            {submitted ? (
              <div className="glass-card p-10 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ background: "rgba(28,217,142,0.15)" }}
                >
                  <Send size={24} color="rgb(28,217,142)" />
                </div>
                <h3 className="text-xl font-bold mb-3">Message sent!</h3>
                <p className="text-white/60">
                  Thanks for reaching out. One of our partners will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-card p-8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-white/50 uppercase tracking-widest mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[rgb(28,217,142)] transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/50 uppercase tracking-widest mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[rgb(28,217,142)] transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-white/50 uppercase tracking-widest mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company (optional)"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[rgb(28,217,142)] transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="block text-xs text-white/50 uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or what you're trying to solve..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[rgb(28,217,142)] transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg"
                  style={{
                    backgroundColor: "rgb(28, 217, 142)",
                    boxShadow: "0 8px 24px rgba(28, 217, 142, 0.3)",
                  }}
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6 text-center">
        <motion.div {...fadeUp(0.1)} className="max-w-xl mx-auto">
          <p className="text-white/50 mb-4">Prefer to hop on a call?</p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 rounded-full font-semibold border border-white/20 text-white hover:bg-white/10 transition-all duration-300 text-sm"
          >
            Schedule a Call
          </a>
        </motion.div>
      </section>
    </main>
  );
}
