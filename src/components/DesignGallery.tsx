"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const designs = [
  {
    title: "Minimalism 01",
    image: "/minimalism.png",
    offset: false,
  },
  {
    title: "Branding Identity",
    image: "/branding.png",
    offset: true,
  },
  {
    title: "Abstract 04",
    image: "/abstract.png",
    offset: false,
  },
  {
    title: "Logo Evolution",
    image: "/logo-evolution.png",
    offset: true,
  },
];

export default function DesignGallery() {
  return (
    <section id="design" className="py-32 px-6 relative bg-bg-deep overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-left"
        >
          <h2 className="section-title">Visual <span className="text-gradient">Narratives</span></h2>
          <div className="accent-line" />
          <p className="text-text-muted text-xl font-medium max-w-xl">
            Where artistic expression meets structured visual communication and branding.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {designs.map((design, i) => (
            <motion.div
              key={design.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative aspect-3/4 rounded-[32px] overflow-hidden border border-white/5 bg-white/2 shadow-2xl cursor-pointer ${
                design.offset ? "md:mt-16" : ""
              }`}
            >
              <Image
                src={design.image}
                alt={design.title}
                fill
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-40 group-hover:opacity-100 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-bg-deep via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-700" />
              
              <div className="absolute inset-0 flex items-center justify-center bg-accent-primary/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="px-6 py-3 rounded-full bg-white text-bg-deep font-heading font-black text-xs uppercase tracking-[2px] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {design.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
