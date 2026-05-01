"use client";

import { Code2, BrainCircuit, Palette, Layout, Target, Cpu } from "lucide-react";

export default function Expertise() {
  const accentColor = "#64ffda";

  return (
    <section id="skills" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-left reveal-hidden">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="accent-line"></div>
          <p className="text-text-dim max-w-2xl text-xl font-light">
            A comprehensive look at my technical toolkit and professional capabilities across development and design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 reveal-hidden" style={{ transitionDelay: "200ms" }}>
          {/* Full Stack Developer Card */}
          <div className="glass-card group hover:translate-y-[-12px] bg-navy-800/40 border-accent/5 flex flex-col items-center text-center">
            <div className="mb-8 w-20 h-20 rounded-full bg-navy-900/80 border border-white/5 flex items-center justify-center shadow-xl group-hover:bg-accent group-hover:text-navy-900 transition-all duration-500" style={{ color: accentColor }}>
              <Code2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-text-white uppercase tracking-tight">Full Stack Developer</h3>
            <p className="text-text-dim/80 mb-10 text-sm leading-relaxed font-medium">Building end-to-end applications with robust business logic and seamless architecture.</p>
            <div className="flex flex-wrap justify-center gap-2 mt-auto">
              {["HTML", "CSS", "TypeScript", "React", "JavaScript", "Python"].map(skill => (
                <span 
                  key={skill} 
                  className="px-3 py-1 rounded text-[10px] uppercase font-bold tracking-wider" 
                  style={{ 
                    backgroundColor: 'rgba(100, 255, 218, 0.05)', 
                    border: '1px solid rgba(100, 255, 218, 0.2)', 
                    color: accentColor 
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* AI/ML Solutions Card */}
          <div className="glass-card group hover:translate-y-[-12px] bg-navy-800/40 border-accent/5 flex flex-col items-center text-center">
            <div className="mb-8 w-20 h-20 rounded-full bg-navy-900/80 border border-white/5 flex items-center justify-center shadow-xl group-hover:bg-accent group-hover:text-navy-900 transition-all duration-500" style={{ color: accentColor }}>
              <BrainCircuit className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-text-white uppercase tracking-tight">AI/ML Solutions</h3>
            <p className="text-text-dim/80 mb-10 text-sm leading-relaxed font-medium">Developing intelligent algorithms and data-driven insights to power the next generation of smart applications.</p>
            <div className="flex flex-wrap justify-center gap-2 mt-auto">
              {["Python", "TensorFlow", "Neural Networks"].map(skill => (
                <span 
                  key={skill} 
                  className="px-3 py-1 rounded text-[10px] uppercase font-bold tracking-wider" 
                  style={{ 
                    backgroundColor: 'rgba(100, 255, 218, 0.05)', 
                    border: '1px solid rgba(100, 255, 218, 0.2)', 
                    color: accentColor 
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* UI/UX Designer Card */}
          <div className="glass-card group hover:translate-y-[-12px] bg-navy-800/40 border-accent/5 flex flex-col items-center text-center">
            <div className="mb-8 w-20 h-20 rounded-full bg-navy-900/80 border border-white/5 flex items-center justify-center shadow-xl group-hover:bg-accent group-hover:text-navy-900 transition-all duration-500" style={{ color: accentColor }}>
              <Palette className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-text-white uppercase tracking-tight">UI/UX Designer</h3>
            <p className="text-text-dim/80 mb-10 text-sm leading-relaxed font-medium">Designing user-centric interfaces and seamless digital journeys with focus on accessibility.</p>
            <div className="flex flex-wrap justify-center gap-2 mt-auto">
              {["Figma", "Adobe Illustrator", "Adobe Photoshop"].map(skill => (
                <span 
                  key={skill} 
                  className="px-3 py-1 rounded text-[10px] uppercase font-bold tracking-wider" 
                  style={{ 
                    backgroundColor: 'rgba(100, 255, 218, 0.05)', 
                    border: '1px solid rgba(100, 255, 218, 0.2)', 
                    color: accentColor 
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Graphic Designer Card */}
          <div className="glass-card group hover:translate-y-[-12px] bg-navy-800/40 border-accent/5 flex flex-col items-center text-center">
            <div className="mb-8 w-20 h-20 rounded-full bg-navy-900/80 border border-white/5 flex items-center justify-center shadow-xl group-hover:bg-accent group-hover:text-navy-900 transition-all duration-500" style={{ color: accentColor }}>
              <Layout className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-text-white uppercase tracking-tight">Graphic Designer</h3>
            <p className="text-text-dim/80 mb-10 text-sm leading-relaxed font-medium">Visual storytelling through branding, logo design, and custom digital assets.</p>
            <div className="flex flex-wrap justify-center gap-2 mt-auto">
              {["Branding", "Logo Design"].map(skill => (
                <span 
                  key={skill} 
                  className="px-3 py-1 rounded text-[10px] uppercase font-bold tracking-wider" 
                  style={{ 
                    backgroundColor: 'rgba(100, 255, 218, 0.05)', 
                    border: '1px solid rgba(100, 255, 218, 0.2)', 
                    color: accentColor 
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Objectives & Core Skills Detailed Grid */}
        <div className="mt-32 grid md:grid-cols-1 lg:grid-cols-2 gap-16 reveal-hidden">
          {/* Objectives */}
          <div className="space-y-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border-2 border-accent/30 flex items-center justify-center" style={{ color: accentColor }}>
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-text-white">Objectives</h3>
            </div>
            <div className="space-y-6">
              {[
                "Integrate advanced machine learning models into practical web ecosystems, enhancing user engagement through personalized features.",
                "Bridge the divide between complex architectural logic and intuitive interface design to ensure a Frictionless user journey for all platforms.",
                "Continuously evolve my technical stack by mastering emerging AI technologies and modern frameworks to solve complex real-world challenges."
              ].map((obj, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full group-hover:scale-125 transition-transform" style={{ backgroundColor: accentColor }}></div>
                  <p className="text-text-dim text-base leading-relaxed">{obj}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Skills */}
          <div className="space-y-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border-2 border-accent/30 flex items-center justify-center" style={{ color: accentColor }}>
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-text-white">Core Skills</h3>
            </div>
            <div className="grid grid-cols-2 gap-x-12 gap-y-10">
              <div className="space-y-4">
                <p className="text-xs font-black uppercase tracking-[2px]" style={{ color: accentColor }}>Languages</p>
                <ul className="text-sm text-text-dim/90 space-y-3 font-medium">
                  {["HTML / CSS", "JavaScript / TypeScript", "Python", "PHP"].map(skill => (
                    <li key={skill} className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'rgba(100, 255, 218, 0.4)' }}></div>{skill}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <p className="text-xs font-black uppercase tracking-[2px]" style={{ color: accentColor }}>Design</p>
                <ul className="text-sm text-text-dim/90 space-y-3 font-medium">
                  {["Adobe Illustrator", "Figma / Canva", "Adobe Photoshop"].map(skill => (
                    <li key={skill} className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'rgba(100, 255, 218, 0.4)' }}></div>{skill}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4 col-span-2">
                <p className="text-xs font-black uppercase tracking-[2px]" style={{ color: accentColor }}>Frameworks & Tools</p>
                <div className="flex flex-wrap gap-3 mt-4">
                  {["React", "Tailwind CSS", "Git / GitHub", "VS Code"].map(tool => (
                    <span key={tool} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs font-mono">{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
