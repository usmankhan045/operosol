"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, CheckCircle2 } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, delay, ease: "easeOut" },
});

const inputClass =
  "w-full rounded-xl px-4 py-3 text-sm focus:outline-none transition-all duration-200";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden" style={{ background: "var(--bg-alt)" }}>
      {/* Glows */}
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 w-[500px] h-[400px]"
        style={{ background: "radial-gradient(ellipse at 0% 100%, var(--accent-glow) 0%, transparent 65%)" }} />
      <div aria-hidden className="pointer-events-none absolute top-0 right-0 w-[400px] h-[300px]"
        style={{ background: "radial-gradient(ellipse at 100% 0%, var(--accent-glow) 0%, transparent 65%)" }} />

      <div className="relative max-w-6xl mx-auto px-6 py-28">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="text-center mb-20">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: "var(--accent)" }}>
            Reach Out
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-5 text-theme">Let&apos;s Talk</h2>
          <div className="w-16 h-0.5 mx-auto rounded-full mb-6" style={{ background: "var(--accent)" }} />
          <p className="max-w-xl mx-auto text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Whether you have a specific project in mind or just want to explore what AI could do for your business, we would love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">

          {/* Left: info */}
          <motion.div {...fadeUp(0.1)} className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-theme">Get in touch</h3>
              <p className="leading-relaxed text-sm" style={{ color: "var(--text-muted)" }}>
                We&apos;re a small team that takes every conversation seriously. You won&apos;t get a form response. You&apos;ll hear directly from one of our partners, usually within 24 hours.
              </p>
            </div>

            {[
              { icon: Mail, label: "Email", value: "hello@operosol.com", href: "mailto:hello@operosol.com" },
              { icon: Phone, label: "Phone", value: "+1 (000) 000-0000", href: "tel:+10000000000" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4 group">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                  style={{ background: "var(--accent-bg)", border: "1px solid var(--accent-border)" }}
                >
                  <item.icon size={18} style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest mb-0.5" style={{ color: "var(--text-subtle)" }}>{item.label}</p>
                  <a href={item.href} className="text-sm font-medium transition-colors duration-200 text-theme hover:text-[var(--accent)]">
                    {item.value}
                  </a>
                </div>
              </div>
            ))}

            {/* Response badge */}
            <div
              className="inline-flex items-center gap-2.5 px-4 py-3 rounded-xl text-xs"
              style={{ background: "var(--accent-bg)", border: "1px solid var(--accent-border)" }}
            >
              <span className="w-2 h-2 rounded-full flex-shrink-0 animate-pulse" style={{ background: "var(--accent)" }} />
              <span style={{ color: "var(--text-muted)" }}>We typically reply within 24 hours</span>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div {...fadeUp(0.2)} className="md:col-span-3">
            {submitted ? (
              <div className="glass-card p-12 text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ background: "var(--accent-bg)", border: "1px solid var(--accent-border)" }}
                >
                  <CheckCircle2 size={36} style={{ color: "var(--accent)" }} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-theme">Message received!</h3>
                <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  Thanks for reaching out. One of our partners will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { name: "name", label: "Name", type: "text", placeholder: "Your name", required: true },
                    { name: "email", label: "Email", type: "email", placeholder: "you@company.com", required: true },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: "var(--text-subtle)" }}>
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        name={f.name}
                        required={f.required}
                        value={formData[f.name as keyof typeof formData]}
                        onChange={handleChange}
                        placeholder={f.placeholder}
                        className={inputClass}
                        style={{
                          background: "var(--accent-bg)",
                          border: "1px solid var(--border)",
                          color: "var(--text)",
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: "var(--text-subtle)" }}>
                    Company
                  </label>
                  <input
                    type="text" name="company" value={formData.company} onChange={handleChange}
                    placeholder="Your company (optional)"
                    className={inputClass}
                    style={{ background: "var(--accent-bg)", border: "1px solid var(--border)", color: "var(--text)" }}
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: "var(--text-subtle)" }}>
                    Message
                  </label>
                  <textarea
                    name="message" required rows={5} value={formData.message} onChange={handleChange}
                    placeholder="Tell us about your project or what you're trying to solve..."
                    className={`${inputClass} resize-none`}
                    style={{ background: "var(--accent-bg)", border: "1px solid var(--border)", color: "var(--text)" }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                  style={{
                    backgroundColor: "var(--accent)",
                    boxShadow: "0 8px 24px var(--accent-glow-strong)",
                    color: "#fff",
                  }}
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
