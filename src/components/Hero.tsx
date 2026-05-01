"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin, DribbbleIcon as Dribbble, InstagramIcon as Instagram } from "./SocialIcons";
import Image from "next/image";

const roles = ["Full Stack Developer", "UI/UX Designer", "Software Engineer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 60 : 120;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setTimeout(() => {}, 400);
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
    <section id="home" className="min-h-screen flex items-center justify-center px-8 relative overflow-hidden bg-navy-900">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10 w-full">
        {/* Left Content */}
        <div className="flex flex-col gap-6 text-left reveal-hidden">
          <p className="label-mono text-accent">Hi, I am</p>
          <h1 className="text-4xl md:text-6xl font-sans font-black tracking-tight leading-[1.05] text-text-white">
            Sara Ilyas<span className="text-accent">.</span>
          </h1>
          
          {/* Animated Typewriter Roles */}
          <div className="h-16 flex items-center">
            <span id="typewriter" className="text-xl md:text-3xl text-accent font-bold font-sans uppercase tracking-tight">
              {displayText}
            </span>
            <span className="animate-pulse ml-2 inline-block h-6 w-1.5 bg-accent"></span>
          </div>
          
          {/* Hero Description */}
          <div className="flex flex-col gap-6">
            <p className="text-text-white text-2xl md:text-3xl font-bold tracking-tight">
              Building Clean & Creative Digital Experiences
            </p>
            <p className="text-text-dim max-w-xl text-lg leading-relaxed font-light">
              I’m a Software Engineer with a strong passion for technology and design. 
              I specialize in working on projects that blend logic with visual storytelling—whether 
              it’s writing clean code or crafting engaging interfaces.
            </p>
          </div>

          {/* Call to Actions & Socials */}
          <div className="flex flex-wrap gap-6 items-center mt-4">
            <a href="#projects" className="btn-outline group">
              Explore Work
              <ArrowRight className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <div className="flex gap-5 items-center">
              <a href="https://github.com/Sarailyass?tab=repositories" target="_blank" title="GitHub" className="p-3 text-text-dim hover:text-accent transition-all hover:scale-110">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/sara-ilyas-66b4b3365" target="_blank" title="LinkedIn" className="p-3 text-text-dim hover:text-accent transition-all hover:scale-110">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://dribbble.com/sara_ilyas00" target="_blank" title="Dribbble" className="p-3 text-text-dim hover:text-accent transition-all hover:scale-110">
                <Dribbble className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/designspirex" target="_blank" title="Instagram" className="p-3 text-text-dim hover:text-accent transition-all hover:scale-110">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Profile Image Area */}
        <div className="relative flex justify-center items-center reveal-hidden" style={{ transitionDelay: "200ms" }}>
          <div className="relative z-10 w-full max-w-sm aspect-square rounded-4xl overflow-hidden shadow-[0_0_50px_rgba(100,255,218,0.1)] border-2 border-accent/20 group bg-navy-800 flex items-center justify-center">
            <Image 
              src="/image.jpeg" 
              alt="Sara Ilyas" 
              fill 
              priority
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <div className="absolute inset-0 bg-accent/5 mix-blend-multiply group-hover:bg-transparent transition-all"></div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent/5 rounded-full blur-[80px] animate-pulse"></div>
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-accent/10 rounded-full blur-[100px] animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
