"use client";

import { motion } from "framer-motion";
import { SITE } from "@/config/site";

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 px-6 bg-[var(--bg)] relative z-20 w-full flex justify-center overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-[#0050FF]/10 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl w-full flex flex-col items-center text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
        >
          Let&apos;s build<br />something great.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="text-xl text-[var(--text-b)] mb-12"
        >
          Open to collaboration, creative work, and new opportunities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 mb-24"
        >
          <a
            href={`mailto:${SITE.email}`}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#0050FF] to-[#00D6FF] text-white font-medium hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(0,86,255,0.3)]"
          >
            Contact Me &rarr;
          </a>
          
          <a
            href="#projects"
            className="px-6 py-4 text-[var(--text-b)] font-medium hover:text-white transition-colors duration-300 underline underline-offset-4 decoration-white/20 hover:decoration-white/100"
          >
            See My Projects
          </a>

          <div className="flex items-center gap-4 sm:ml-4 sm:border-l sm:border-white/10 sm:pl-8">
            <a 
              href={SITE.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 text-white transition-all duration-300"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href={SITE.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 hover:border-[#00D6FF]/50 text-white hover:text-[#00D6FF] transition-all duration-300"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-sm tracking-wide text-[var(--text-label)]"
        >
          &copy; {new Date().getFullYear()} {SITE.name}. Available for freelance, collaborations, and creative projects.
        </motion.div>
      </div>
    </section>
  );
}
