"use client";

import { motion } from "framer-motion";
import { Code2, BrainCircuit, Palette, Layout, Target, Cpu, Sparkles } from "lucide-react";

const expertise = [
  {
    icon: Code2,
    title: "Full Stack Developer",
    description: "Building end-to-end applications with robust business logic and seamless architecture.",
    skills: ["HTML", "CSS", "TypeScript", "React", "JavaScript", "Python"],
    color: "from-accent-primary to-accent-secondary",
  },
  {
    icon: BrainCircuit,
    title: "AI/ML Solutions",
    description: "Developing intelligent algorithms and data-driven insights to power smart applications.",
    skills: ["Python", "TensorFlow", "Neural Networks"],
    color: "from-accent-cyan to-accent-primary",
  },
  {
    icon: Palette,
    title: "UI/UX Designer",
    description: "Designing user-centric interfaces and seamless digital journeys with focus on accessibility.",
    skills: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    color: "from-accent-secondary to-accent-primary",
  },
  {
    icon: Layout,
    title: "Graphic Designer",
    description: "Visual storytelling through branding, logo design, and custom digital assets.",
    skills: ["Branding", "Logo Design"],
    color: "from-accent-primary to-accent-cyan",
  },
];

const objectives = [
  "Integrate advanced machine learning models into practical web ecosystems, enhancing user engagement through personalized features.",
  "Bridge the divide between complex architectural logic and intuitive interface design to ensure a frictionless user journey.",
  "Continuously evolve my technical stack by mastering emerging AI technologies and modern frameworks to solve complex challenges.",
];

const coreSkills = [
  {
    category: "Languages",
    skills: ["HTML / CSS", "JavaScript / TypeScript", "Python", "PHP"],
  },
  {
    category: "Design",
    skills: ["Adobe Illustrator", "Figma / Canva", "Adobe Photoshop"],
  },
];

const tools = ["React", "Tailwind CSS", "Git / GitHub", "VS Code", "Next.js", "Framer Motion"];

export default function Expertise() {
  return (
    <section id="skills" className="py-32 px-6 relative bg-bg-deep overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-secondary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-left"
        >
          <h2 className="section-title">Skills & <span className="text-gradient">Expertise</span></h2>
          <div className="accent-line" />
          <p className="text-text-muted max-w-2xl text-xl font-medium leading-relaxed">
            A comprehensive look at my technical toolkit and professional capabilities across development and design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertise.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card group flex flex-col items-start text-left bg-white/3"
            >
              <div className={`mb-8 w-16 h-16 rounded-2xl bg-linear-to-br ${item.color} p-px`}>
                 <div className="w-full h-full bg-bg-deep rounded-2xl flex items-center justify-center text-white group-hover:bg-transparent transition-all duration-500">
                    <item.icon className="w-8 h-8" />
                 </div>
              </div>
              <h3 className="text-xl font-heading font-black mb-4 text-white uppercase tracking-tight">{item.title}</h3>
              <p className="text-text-muted mb-8 text-sm leading-relaxed font-medium line-clamp-3">{item.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-white/70 uppercase font-bold tracking-wider"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-40 grid lg:grid-cols-2 gap-20">
          {/* Objectives */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-3xl font-heading font-black text-white">Objectives</h3>
            </div>
            <div className="space-y-8">
              {objectives.map((obj, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="mt-2.5 w-2 h-2 rounded-full bg-accent-primary shadow-[0_0_10px_rgba(139,92,246,0.6)] group-hover:scale-150 transition-transform shrink-0" />
                  <p className="text-text-muted text-lg leading-relaxed font-medium">{obj}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Core Skills */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-accent-secondary/10 border border-accent-secondary/20 flex items-center justify-center text-accent-secondary">
                <Cpu className="w-7 h-7" />
              </div>
              <h3 className="text-3xl font-heading font-black text-white">Core Stack</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-12">
              {coreSkills.map((cat) => (
                <div key={cat.category} className="space-y-6">
                  <p className="text-sm font-black text-white uppercase tracking-widest flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-accent-cyan" />
                    {cat.category}
                  </p>
                  <ul className="text-base text-text-muted space-y-4 font-medium">
                    {cat.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-3 group">
                        <div className="w-1.5 h-1.5 bg-white/20 rounded-full group-hover:bg-accent-cyan transition-colors" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="space-y-6 sm:col-span-2">
                <p className="text-sm font-black text-white uppercase tracking-widest">Frameworks & Tools</p>
                <div className="flex flex-wrap gap-3">
                  {tools.map((tool) => (
                    <motion.span
                      key={tool}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-bold text-white/80 cursor-default transition-colors"
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
