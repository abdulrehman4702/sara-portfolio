"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Terminal, ArrowUpRight, Sparkles } from "lucide-react";

const projects = [
  {
    title: "WeCare Hospital",
    type: "Full Stack System",
    description: "A high-performance patient management portal built for scalability and real-time data handling.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Node.js", "Firebase"],
    live: "#",
    source: "#",
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "LuxeDrive",
    type: "Frontend Experience",
    description: "Premium automotive marketplace featuring smooth scroll animations and dynamic filtering.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800",
    tags: ["Vite", "GSAP", "Tailwind"],
    live: "#",
    source: "#",
    color: "from-purple-500 to-pink-400",
  },
  {
    title: "XSS Attacks Hub",
    type: "Security Research",
    description: "Educational documentation platform explaining cross-site scripting vulnerabilities with interactive labs.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    tags: ["Markdown", "PrismJS", "Next.js"],
    live: "#",
    source: "#",
    color: "from-emerald-500 to-teal-400",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative bg-bg-deep overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col md:flex-row justify-between items-end gap-10"
        >
          <div className="text-left">
            <h2 className="section-title">Selected <span className="text-gradient">Projects</span></h2>
            <div className="accent-line" />
            <p className="text-text-muted text-xl font-medium max-w-xl">
              A collection of digital experiences crafted with a focus on <span className="text-white">performance</span>, <span className="text-white">aesthetics</span>, and <span className="text-white">user impact</span>.
            </p>
          </div>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-bold text-sm tracking-widest uppercase hover:bg-white/10 transition-all"
          >
            Archive
            <ExternalLink className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 text-accent-primary" />
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex flex-col glass-card p-0 border-white/5 hover:border-accent-primary/20 bg-white/2"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden rounded-t-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-bg-deep/40 group-hover:bg-bg-deep/20 transition-colors duration-500" />

                {/* Type Badge */}
                <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-bg-deep/80 backdrop-blur-md border border-white/10 flex items-center gap-2">
                  <Sparkles className="w-3 h-3 text-accent-cyan" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/90">{project.type}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col grow">
                <h3 className="text-2xl font-heading font-black mb-4 text-white group-hover:text-accent-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-8 line-clamp-3 font-medium">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold tracking-widest bg-white/5 border border-white/10 text-white/60 px-3 py-1.5 rounded-lg uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="flex gap-4">
                    <motion.a
                      href={project.source}
                      whileHover={{ y: -2 }}
                      className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all"
                      title="View Source"
                    >
                      <Terminal className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ y: -2 }}
                      className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>

                  <motion.a
                    href={project.live}
                    className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-accent-primary hover:text-white transition-colors"
                  >
                    View Project
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
