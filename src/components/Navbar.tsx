"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
      setIsScrolled(window.scrollY > 50);
      
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
        id="progress-bar" 
        className="fixed top-0 left-0 h-1.5 bg-accent z-50 origin-[0%] transition-all duration-100" 
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation Bar */}
      <nav 
        id="navbar"
        className={`fixed top-0 w-full z-40 backdrop-blur-lg border-b border-white/5 px-8 transition-all duration-500 ${
          isScrolled 
            ? "shadow-2xl py-4 bg-navy-900/95" 
            : "py-5 bg-navy-900/90"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-sans font-black tracking-tighter hover:scale-105 transition-transform cursor-pointer">
            SI<span className="text-accent">.</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-10">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            id="menu-toggle" 
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              if (!isMobileMenuOpen) {
                document.body.style.overflow = "hidden";
              } else {
                document.body.style.overflow = "auto";
              }
            }}
            className="md:hidden text-text-white hover:text-accent focus:outline-none transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            id="mobile-menu" 
            className="md:hidden fixed inset-0 top-[84px] bg-navy-900/98 z-50 p-10 flex flex-col gap-10 items-center justify-center text-center animate-in fade-in duration-300"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document.body.style.overflow = "auto";
                }}
                className="mobile-link text-2xl font-bold tracking-[4px] uppercase hover:text-accent transition-colors"
              >
                {link.name.toUpperCase()}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
