"use client";

import { motion } from "framer-motion";
import { ArrowUp, Sparkles } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin, InstagramIcon as Instagram } from "./SocialIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-20 px-6 bg-bg-deep relative overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-accent-primary/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16 relative z-10">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="text-4xl font-heading font-black text-white tracking-tighter flex items-center gap-2">
            SI<span className="w-2 h-2 rounded-full bg-accent-primary" />
          </div>
          <p className="text-text-muted text-sm font-medium">Crafting bold digital experiences.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-10 text-[11px] font-black tracking-[3px] text-text-muted">
          <a href="#about" className="hover:text-white transition-colors uppercase">ABOUT</a>
          <a href="#projects" className="hover:text-white transition-colors uppercase">WORK</a>
          <a href="#skills" className="hover:text-white transition-colors uppercase">SKILLS</a>
          <a href="#contact" className="hover:text-white transition-colors uppercase">CONNECT</a>
        </div>

        <div className="flex gap-4">
          {[
            { icon: Github, href: "https://github.com/Sarailyass?tab=repositories", color: "hover:bg-accent-primary" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/sara-ilyas-66b4b3365", color: "hover:bg-accent-secondary" },
            { icon: Instagram, href: "https://www.instagram.com/designspirex", color: "hover:bg-accent-cyan" },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              className={`w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-white/70 transition-all ${social.color} hover:text-white hover:border-transparent bg-white/5`}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5, scale: 1.1 }}
            className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-white/70 hover:bg-white hover:text-bg-deep transition-all bg-white/5"
            title="Scroll to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-accent-primary" />
          <p className="text-[10px] text-text-muted tracking-[4px] uppercase font-bold">
            © 2026 SARA ILYAS. DESIGNED WITH PRECISION.
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <p className="text-[10px] text-text-muted tracking-[2px] uppercase font-medium">
            Next.js • Tailwind CSS • Framer Motion
          </p>
          <div className="h-4 w-px bg-white/10 hidden md:block" />
          <p className="text-[10px] text-text-muted tracking-[2px] uppercase font-medium">
            Karachi, Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}
