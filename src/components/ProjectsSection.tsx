"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/config/projects";


export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-6 bg-[var(--bg)] relative z-20 w-full flex justify-center">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Selected Work.
          </h2>
          <p className="text-xl text-[var(--text-b)]">
            A few things I&apos;ve built, explored, and brought to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
            >
              <div className="cyber-container noselect">
                <div className="cyber-canvas">
                  {Array.from({ length: 25 }).map((_, idx) => (
                    <div key={idx} className={`cyber-tracker tr-${idx + 1}`}></div>
                  ))}
                  <div className="cyber-card">
                    <div className="cyber-card-content">
                      <div className="cyber-card-glare"></div>
                      <div className="cyber-lines">
                        <span></span><span></span><span></span><span></span>
                      </div>
                      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90 transition-opacity duration-500"
                        style={{ backgroundImage: 'url("/photos/anime-coder.png")' }}>
                      </div>
                      {/* Dark overlay to make glowing elements look better */}
                      <div className="absolute inset-0 bg-black/50"></div>

                      <a href={project.link} target="_blank" rel="noreferrer" className="cyber-title hover:underline decoration-[#00ffaa] z-20">
                        <span>COMING<br />SOON</span>
                      </a>

                      <div className="cyber-glowing-elements z-10">
                        <div className="cyber-glow-1"></div>
                        <div className="cyber-glow-2"></div>
                        <div className="cyber-glow-3"></div>
                      </div>

                      <div className="cyber-card-particles">
                        <span></span><span></span><span></span><span></span><span></span><span></span>
                      </div>
                      <div className="cyber-corner-elements">
                        <span></span><span></span><span></span><span></span>
                      </div>
                      <div className="cyber-scan-line"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
