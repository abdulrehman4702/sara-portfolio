"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "WeCare Hospital",
    type: "Full Stack System",
    description: "A high-performance patient management portal built for scalability and real-time data handling.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Node.js", "Firebase"],
    live: "#",
    source: "#",
  },
  {
    title: "LuxeDrive",
    type: "Frontend Experience",
    description: "Premium automotive marketplace featuring smooth scroll animations and dynamic filtering.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800",
    tags: ["Vite", "GSAP", "Tailwind"],
    live: "#",
    source: "#",
  },
  {
    title: "XSS Attacks Hub",
    type: "Security Research",
    description: "Educational documentation platform explaining cross-site scripting vulnerabilities with interactive labs.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    tags: ["Markdown", "PrismJS", "Next.js"],
    live: "#",
    source: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-8 bg-navy-800/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-10 reveal-hidden">
          <div className="text-left">
            <h2 className="section-title">Recent Work</h2>
            <div className="accent-line"></div>
            <p className="text-text-dim text-xl font-light italic">A showcase of refined digital solutions engineered with precision.</p>
          </div>
          <a href="#" className="group flex items-center gap-3 text-accent font-bold text-sm tracking-widest uppercase hover:text-white transition-all">
            View Comprehensive Archive 
            <ExternalLink className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 reveal-hidden" style={{ transitionDelay: "200ms" }}>
          {projects.map((project, i) => (
            <div key={i} className="group relative rounded-3xl overflow-hidden glass-card p-0 h-[450px] border-white/5 shadow-2xl">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-40"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy-900 via-navy-900/40 to-transparent p-10 flex flex-col justify-end">
                <span className="text-accent font-mono text-sm mb-3 tracking-tighter uppercase">{project.type}</span>
                <h3 className="text-3xl font-bold mb-6 text-text-white group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-sm text-text-dim mb-8 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{project.description}</p>
                <div className="flex gap-3 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono tracking-widest bg-accent/10 border border-accent/20 text-accent px-3 py-1.5 rounded-full">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.live} className="px-6 py-2.5 bg-accent text-navy-900 text-xs font-black uppercase tracking-widest rounded-md hover:bg-white transition-all transform group-hover:translate-y-0 translate-y-4">Live URL</a>
                  <a href={project.source} className="px-6 py-2.5 border border-white/20 text-text-white text-xs font-black uppercase tracking-widest rounded-md hover:bg-white/10 transition-all transform group-hover:translate-y-0 translate-y-4">Source</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
