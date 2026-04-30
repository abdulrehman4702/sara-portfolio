"use client";

import { motion } from "framer-motion";
import { Zap, Target, Cpu } from "lucide-react";

const focusAreas = [
  {
    title: "Architectural Design",
    description: "Ensuring scalability and performance in distributed systems.",
    icon: Cpu,
  },
  {
    title: "User Centricity",
    description: "Prioritizing the end-user experience in every line of code.",
    icon: Target,
  },
  {
    title: "AI Integration",
    description: "Leveraging machine learning to create smarter, adaptive interfaces.",
    icon: Zap,
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden bg-bg-deep">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-accent-primary/5 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <div className="flex flex-col mb-16">
            <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
            <div className="accent-line" />
          </div>

          <div className="grid lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-3 space-y-8">
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-2xl md:text-3xl text-white font-medium leading-tight tracking-tight"
              >
                I’m a Software Engineer inspired by the art of turning <span className="text-accent-primary">complex problems</span> into simple, elegant solutions.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-6 text-lg text-text-muted leading-relaxed max-w-2xl"
              >
                <p>
                  Whether it’s designing engaging user interfaces or engineering reliable backend systems,
                  I enjoy building products that truly make an impact. My journey in technology is fueled by
                  a deep curiosity for how things work and a commitment to creating digital experiences
                  that are both functional and visually compelling.
                </p>
                <p>
                  I believe in lifelong learning and constantly push myself to explore new tools,
                  technologies, and ideas. Let’s collaborate to create something innovative and meaningful together.
                </p>
              </motion.div>
            </div>

            {/* Skills Highlight Box */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-2 glass-card border-white/5 bg-white/5 backdrop-blur-2xl"
            >
              <h4 className="text-xl font-heading font-black mb-8 text-white uppercase tracking-widest">Ongoing Focus</h4>
              <ul className="space-y-8">
                {focusAreas.map((area, i) => (
                  <motion.li 
                    key={area.title} 
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-start gap-5 group"
                  >
                    <div className="p-3 rounded-2xl bg-accent-primary/10 border border-accent-primary/20 group-hover:bg-accent-primary/20 transition-colors">
                      <area.icon className="w-6 h-6 text-accent-primary" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg mb-1">{area.title}</p>
                      <p className="text-sm text-text-muted leading-relaxed">{area.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
