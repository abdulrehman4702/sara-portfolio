"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Sparkles, Code2, Globe, Palette } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin, DribbbleIcon as Dribbble, InstagramIcon as Instagram } from "./SocialIcons";
import Magnetic from "./Magnetic";

const roles = ["Full Stack Developer", "UI/UX Designer", "Software Engineer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden mesh-gradient bg-bg-deep">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent-secondary/20 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10 w-full pt-32 pb-20">
        {/* Left Content - 7 cols */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col gap-8 text-left"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 w-fit backdrop-blur-xl"
          >
            <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
            <span className="text-[10px] font-black tracking-[3px] uppercase text-white/80">Open to Innovations</span>
          </motion.div>

          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-black tracking-tight leading-[0.85] text-white">
              SARA <br />
              <span className="text-gradient">ILYAS</span>
            </h1>
          </div>

          <div className="flex items-center gap-4 h-12">
             <div className="w-12 h-0.5 bg-accent-primary/30 rounded-full shrink-0" />
             <span className="text-xl md:text-3xl text-white/70 font-heading font-medium tracking-tight flex items-center">
              {displayText}
              <span className="inline-block w-1 h-8 bg-accent-primary ml-3 animate-blink rounded-full shadow-[0_0_15px_rgba(139,92,246,0.8)]" />
            </span>
          </div>

          <p className="text-text-muted text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
             I am a <span className="text-white">Software Engineer</span> with a strong passion for technology and design. 
             I specialize in projects that <span className="text-white">blend logic with visual storytelling</span>—crafting 
             clean code and engaging interfaces.
          </p>

          <div className="flex flex-wrap gap-8 items-center mt-6">
            <Magnetic>
              <a href="#projects" className="btn-premium px-10 py-5 text-sm uppercase tracking-[4px] shadow-2xl">
                Explore Work
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Magnetic>
            
            <div className="flex gap-4 items-center shrink-0">
              {[
                { icon: Github, href: "https://github.com/Sarailyass?tab=repositories" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/sara-ilyas-66b4b3365" },
                { icon: Dribbble, href: "https://dribbble.com/sara_ilyas00" },
                { icon: Instagram, href: "https://www.instagram.com/designspirex" },
              ].map((social, i) => (
                <Magnetic key={i}>
                  <motion.a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="w-14 h-14 flex items-center justify-center text-white/50 transition-all bg-white/5 rounded-2xl border border-white/10 hover:border-accent-primary/50 hover:text-white hover:bg-white/10 shrink-0"
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                </Magnetic>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Content - 5 cols - Bento-style Profile Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative perspective-1000"
        >
           <div className="grid grid-cols-2 gap-4">
              {/* Profile Card - Spans 2 rows */}
              <div className="col-span-2 row-span-2 relative aspect-square rounded-[48px] overflow-hidden border border-white/20 bg-white/5 backdrop-blur-3xl group">
                 <div className="absolute inset-0 bg-linear-to-br from-accent-primary/10 to-accent-secondary/10 mix-blend-overlay z-10" />
                 <Image 
                    src="/image.jpeg" 
                    alt="Sara Ilyas"
                    fill
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-bg-deep/20 transition-all duration-700 group-hover:bg-transparent z-5" />
                 
                 {/* Decorative Overlay */}
                 <div className="absolute bottom-0 left-0 w-full p-10 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-linear-to-t from-bg-deep to-transparent">
                    <p className="text-white font-heading font-black text-2xl">SARA ILYAS</p>
                    <p className="text-white/60 text-sm font-medium uppercase tracking-widest">Designing the Future</p>
                 </div>

                 {/* Premium Border */}
                 <div className="absolute inset-0 rounded-[48px] border-2 border-transparent bg-linear-to-br from-accent-primary/50 to-accent-secondary/50 mask-[linear-gradient(white,white)_padding-box,linear-gradient(white,white)] opacity-30 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Stats Cards */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col gap-2"
              >
                <Code2 className="w-6 h-6 text-accent-cyan" />
                <p className="text-2xl font-black text-white">50+</p>
                <p className="text-[10px] text-white/50 uppercase font-bold tracking-widest">Repositories</p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col gap-2"
              >
                <Palette className="w-6 h-6 text-accent-secondary" />
                <p className="text-2xl font-black text-white">100%</p>
                <p className="text-[10px] text-white/50 uppercase font-bold tracking-widest">Creative</p>
              </motion.div>
           </div>

           {/* Floating elements */}
           <motion.div 
             animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             className="absolute -top-12 -right-12 p-6 rounded-4xl bg-accent-primary/10 border border-accent-primary/20 backdrop-blur-2xl shadow-2xl z-20"
           >
              <Globe className="w-8 h-8 text-white" />
           </motion.div>

           <motion.div 
             animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
             className="absolute -bottom-12 -left-12 p-6 rounded-4xl bg-accent-secondary/10 border border-accent-secondary/20 backdrop-blur-2xl shadow-2xl z-20"
           >
              <Sparkles className="w-8 h-8 text-white" />
           </motion.div>

           <motion.div 
             animate={{ y: [0, 10, 0], x: [0, 15, 0] }}
             transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
             className="absolute top-1/2 -right-20 p-5 rounded-3xl bg-accent-cyan/10 border border-accent-cyan/20 backdrop-blur-2xl shadow-2xl z-20 hidden xl:block"
           >
              <Code2 className="w-6 h-6 text-white" />
           </motion.div>

           <motion.div 
             animate={{ y: [0, -10, 0], x: [0, -15, 0] }}
             transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
             className="absolute top-1/2 -left-20 p-5 rounded-3xl bg-accent-primary/10 border border-accent-primary/20 backdrop-blur-2xl shadow-2xl z-20 hidden xl:block"
           >
              <Palette className="w-6 h-6 text-white" />
           </motion.div>
        </motion.div>
      </div>

      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-bg-deep to-transparent z-10" />
    </section>
  );
}
