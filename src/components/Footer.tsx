"use client";

import { GithubIcon as Github, LinkedinIcon as Linkedin, InstagramIcon as Instagram } from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="py-20 px-8 border-t border-white/5 bg-navy-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
        <div className="text-4xl font-sans font-black text-text-white tracking-tighter">
          SI<span className="text-accent">.</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-12 text-[10px] font-black tracking-[4px] text-text-dim/60">
          <a href="#about" className="hover:text-accent transition-colors uppercase cursor-pointer">ABOUT</a>
          <a href="#projects" className="hover:text-accent transition-colors uppercase cursor-pointer">WORK</a>
          <a href="#contact" className="hover:text-accent transition-colors uppercase cursor-pointer">CONNECT</a>
        </div>

        <div className="flex gap-6">
          <a href="https://github.com/Sarailyass?tab=repositories" target="_blank" className="w-12 h-12 rounded-xl border border-white/5 flex items-center justify-center hover:bg-accent hover:text-navy-900 transition-all hover:scale-110 shadow-lg group">
            <Github className="w-5 h-5 transition-transform group-hover:rotate-12" />
          </a>
          <a href="https://www.linkedin.com/in/sara-ilyas-66b4b3365" target="_blank" className="w-12 h-12 rounded-xl border border-white/5 flex items-center justify-center hover:bg-accent hover:text-navy-900 transition-all hover:scale-110 shadow-lg group">
            <Linkedin className="w-5 h-5 transition-transform group-hover:-rotate-12" />
          </a>
          <a href="https://www.instagram.com/designspirex" target="_blank" className="w-12 h-12 rounded-xl border border-white/5 flex items-center justify-center hover:bg-accent hover:text-navy-900 transition-all hover:scale-110 shadow-lg group">
            <Instagram className="w-5 h-5 transition-transform group-hover:rotate-12" />
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] text-text-dim/40 tracking-[4px] uppercase font-sans font-bold">
          ©️ 2026 SARA ILYAS. CRAFTED WITH REFINEMENT.
        </p>
        <p className="text-[10px] text-text-dim/40 tracking-[2px] uppercase font-mono">
          Location: Karachi, Sindh, Pakistan
        </p>
      </div>
    </footer>
  );
}
