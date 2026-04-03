"use client";

import { motion } from "framer-motion";
import { Code2, Terminal, BrainCircuit, Film } from "lucide-react";

const SKILL_GROUPS = [
  {
    title: "Software Engineering",
    icon: <Terminal className="w-6 h-6 text-[#00D6FF]" />,
    skills: ["C++", "Python", "Algorithms", "Data Structures"],
  },
  {
    title: "Frontend Development",
    icon: <Code2 className="w-6 h-6 text-[#0050FF]" />,
    skills: ["React", "Next.js", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Artificial Intelligence",
    icon: <BrainCircuit className="w-6 h-6 text-[#00D6FF]" />,
    skills: ["Prompt Engineering", "Machine Learning (Basics)", "LLMs"],
  },
  {
    title: "Video & Media",
    icon: <Film className="w-6 h-6 text-[#0050FF]" />,
    skills: ["Video Editing", "Post-Production", "Visual Storytelling"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-32 px-6 bg-[var(--bg)] relative z-20 w-full flex justify-center">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Built with curiosity. Sharpened by practice.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative p-[1px] rounded-2xl group overflow-hidden"
            >
              {/* Outer gradient border ring that reveals on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00D6FF]/40 via-transparent to-[#0050FF]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative h-full bg-[#0a0a0a] rounded-2xl p-8 border border-white/[0.05] flex flex-col justify-between overflow-hidden">
                {/* Glowing orb inside card */}
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-40 h-40 bg-[#00D6FF] opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-all duration-700 pointer-events-none" />
                
                <div className="mb-10 z-10">
                  <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#00D6FF]/30 transition-all duration-500 group-hover:shadow-[0_0_15px_rgba(0,214,255,0.2)]">
                    {group.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {group.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2 z-10">
                  {group.skills.map(skill => (
                    <span 
                      key={skill}
                      className="px-3 py-1.5 text-[13px] font-medium rounded border border-white/5 bg-white/[0.02] text-[var(--text-b)] 
                                 group-hover:bg-[#00D6FF]/5 group-hover:text-white group-hover:border-[#00D6FF]/30 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
