"use client";

import { motion } from "framer-motion";
import { UserCog, Bot, Sparkles, type LucideIcon } from "lucide-react";

type Service = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

const SERVICES: Service[] = [
  {
    title: "Digital FTEs",
    description:
      "Virtual full-time employees powered by AI to handle your daily operations efficiently.",
    Icon: UserCog,
  },
  {
    title: "Autonomous Agents",
    description:
      "Self-operating AI agents that execute complex tasks without manual intervention.",
    Icon: Bot,
  },
  {
    title: "AI Solutions",
    description:
      "Custom AI-powered solutions tailored to solve your unique business challenges.",
    Icon: Sparkles,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function ServicesPreview() {
  return (
    <section className="relative py-20 md:py-28 px-6 md:px-10 bg-black">
      {/* Subtle accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(28,217,142,0.18), transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-14 md:mb-20"
        >
          <h2 className="inline-block text-3xl md:text-4xl lg:text-5xl font-bold text-white relative">
            Our Core Services
            <span
              aria-hidden
              className="block mx-auto mt-3 h-1 w-24 rounded-full"
              style={{ backgroundColor: "rgb(28, 217, 142)" }}
            />
          </h2>
          <p className="mt-6 text-white/70 max-w-2xl mx-auto text-base md:text-lg">
            Purpose-built AI offerings that fit into how your team already works.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {SERVICES.map(({ title, description, Icon }) => (
            <motion.article
              key={title}
              variants={cardVariants}
              className="glass-service p-7 md:p-8 flex flex-col items-start"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 bg-operosol-green/10 border border-operosol-green/30">
                <Icon
                  size={28}
                  strokeWidth={2}
                  className="text-operosol-green"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                {title}
              </h3>
              <p className="mt-3 text-[0.95rem] md:text-base leading-relaxed text-white/80">
                {description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
