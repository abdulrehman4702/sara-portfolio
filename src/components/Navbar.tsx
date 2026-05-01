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
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
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
        className="fixed top-0 left-0 h-[4px] z-9999 transition-all duration-150 ease-out" 
        style={{ 
          width: `${scrollProgress}%`,
          backgroundColor: '#64ffda',
          boxShadow: '0 0 10px rgba(100, 255, 218, 0.5)'
        }}
      />

      {/* Navigation Bar */}
      <nav 
        id="navbar"
        className={`fixed top-0 w-full z-40 backdrop-blur-lg border-b border-white/5 px-6 md:px-12 transition-all duration-500 ${
          isScrolled 
            ? "shadow-2xl py-4 bg-navy-900/95" 
            : "py-6 bg-navy-900/90"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-sans font-black tracking-tighter hover:scale-105 transition-transform cursor-pointer">
            SI<span style={{ color: '#64ffda' }}>.</span>
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
            className="md:hidden fixed inset-0 h-screen bg-navy-900 z-50 p-10 flex flex-col gap-10 items-center justify-center text-center animate-in fade-in zoom-in duration-300"
          >
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.body.style.overflow = "auto";
              }}
              className="absolute top-6 right-6 text-text-white hover:text-accent transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document.body.style.overflow = "auto";
                }}
                className="mobile-link text-3xl font-bold tracking-[8px] uppercase hover:text-accent transition-all hover:scale-110"
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
