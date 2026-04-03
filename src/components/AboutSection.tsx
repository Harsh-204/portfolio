"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 bg-[var(--bg)] relative z-20 w-full flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xs font-semibold tracking-[0.2em] text-[var(--text-label)] mb-6 uppercase"
          >
            [ About Me ]
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8"
          >
            More than just a portfolio.
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className="text-lg text-[var(--text-b)] space-y-6"
        >
          <p>
            I&apos;m Harsh, a student driven by curiosity, creativity, and a strong interest in AI and digital content creation.
          </p>
          <p>
            From editing videos to exploring intelligent tools and building creative projects, I enjoy learning, experimenting, and bringing ideas to life through technology and design.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
