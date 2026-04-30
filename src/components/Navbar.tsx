"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "./Magnetic";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Expertise", href: "#skills" },
  { name: "Work", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-linear-to-r from-accent-primary to-accent-secondary z-50 origin-left transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav 
        className={`fixed top-0 w-full z-40 transition-all duration-500 px-6 py-5 ${
          isScrolled 
            ? "bg-bg-deep/80 backdrop-blur-xl border-b border-white/10 py-4" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Magnetic>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-heading font-black tracking-tighter cursor-pointer flex items-center gap-1 group"
            >
              <span className="text-white">SI</span>
              <span className="w-2 h-2 rounded-full bg-accent-primary shadow-[0_0_10px_rgba(139,92,246,0.8)] group-hover:scale-150 transition-transform" />
            </motion.div>
          </Magnetic>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-4 items-center">
            {navLinks.map((link, i) => (
              <Magnetic key={link.name}>
                <motion.a
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="nav-link px-4 py-2"
                >
                  <span className="relative z-10">{link.name}</span>
                </motion.a>
              </Magnetic>
            ))}
            <div className="ml-4">
              <Magnetic>
                <motion.a
                  href="#contact"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="px-6 py-2.5 rounded-2xl bg-white/5 text-white font-bold text-sm border border-white/10 hover:bg-white hover:text-bg-deep transition-all duration-300 backdrop-blur-md"
                >
                  Get in Touch
                </motion.a>
              </Magnetic>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-accent-primary focus:outline-none transition-colors p-2"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="md:hidden fixed inset-0 top-[72px] bg-bg-deep/95 backdrop-blur-2xl z-50 p-10 flex flex-col gap-8 items-center justify-center text-center"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-heading font-bold tracking-tight text-white hover:text-accent-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-8 py-4 rounded-3xl bg-linear-to-r from-accent-primary to-accent-secondary text-white font-black uppercase tracking-[4px] text-xs"
              >
                Connect Now
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
