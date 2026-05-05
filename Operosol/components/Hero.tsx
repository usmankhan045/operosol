"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const BACKGROUNDS = [
  "/images/Img_02.jpg",
  "/images/Img_03.png",
  "/images/Img_04.png",
  "/images/Img_05.png",
];

const SLIDE_INTERVAL_MS = 5500;

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % BACKGROUNDS.length);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Full-bleed background images with fade transition */}
      <div className="absolute inset-0 w-full h-full z-0">
        {BACKGROUNDS.map((src, i) => (
          <div
            key={src}
            className="bg-fade absolute inset-0 w-full h-full"
            style={{ opacity: i === activeIndex ? 1 : 0 }}
            aria-hidden={i !== activeIndex}
          >
            <Image
              src={src}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
        {/* Radial gradient overlay for text readability */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 100%)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Centered hero content */}
      <div className="relative z-10 min-h-screen w-full flex items-center justify-center px-6 md:px-8 py-24 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10 max-w-4xl w-full text-center px-6 md:px-8"
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-4 text-[rgb(28,217,142)]"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}
          >
            The Future of Work Is Here
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-white"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
          >
            Make Your Business{" "}
            <span className="text-[rgb(28,217,142)]">Smart</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
            className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed mb-10"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.6)" }}
          >
            We help businesses grow with AI, from automating daily operations
            to building intelligent agents that work for you around the clock.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center"
          >
            <Link
              href="/services"
              className="px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 shadow-lg"
              style={{
                backgroundColor: "rgb(28, 217, 142)",
                boxShadow: "0 10px 30px rgba(28, 217, 142, 0.3)",
              }}
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full font-semibold text-white border-2 border-white/40 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              Let&apos;s Get Started
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
