"use client";

import { motion } from "framer-motion";
import { Mail, Send, Sparkles, MessageSquare } from "lucide-react";
import { InstagramIcon } from "./SocialIcons";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative bg-bg-deep overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-accent-primary/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-left"
        >
          <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>
          <div className="accent-line" />
          <p className="text-text-muted text-xl max-w-2xl font-medium leading-relaxed">
            I’m always open to new opportunities, collaborations, or just a friendly chat about design and technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card group bg-white/3 border-white/5 hover:border-accent-primary/30">
              <div className="flex items-center gap-5 mb-4">
                <div className="p-3 bg-accent-primary/10 rounded-2xl text-accent-primary group-hover:bg-accent-primary group-hover:text-white transition-all duration-500">
                  <Mail className="w-6 h-6" />
                </div>
                <h4 className="text-white font-heading font-black uppercase tracking-widest text-xs">Email Me</h4>
              </div>
              <p className="text-text-muted text-lg font-medium break-all group-hover:text-white transition-colors">
                sara102ilyas@gmail.com
              </p>
            </div>

            <div className="glass-card group bg-white/3 border-white/5 hover:border-accent-secondary/30">
              <div className="flex items-center gap-5 mb-4">
                <div className="p-3 bg-accent-secondary/10 rounded-2xl text-accent-secondary group-hover:bg-accent-secondary group-hover:text-white transition-all duration-500">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <h4 className="text-white font-heading font-black uppercase tracking-widest text-xs">Instagram</h4>
              </div>
              <p className="text-text-muted text-lg font-medium group-hover:text-white transition-colors">
                @DesignSpirex
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3 px-5 py-2.5 border border-white/10 rounded-2xl w-fit bg-white/5 backdrop-blur-md"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-accent-cyan animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.6)]" />
              <span className="text-xs font-bold text-white/70 uppercase tracking-widest">
                Current Status: Open to Projects
              </span>
            </motion.div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form className="glass-card p-10 space-y-8 bg-white/2 border-white/5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[3px] text-white/50 flex items-center gap-2">
                    <Sparkles className="w-3 h-3 text-accent-primary" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white outline-none focus:border-accent-primary/50 focus:bg-white/10 transition-all placeholder:text-white/20 font-medium"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[3px] text-white/50 flex items-center gap-2">
                    <Mail className="w-3 h-3 text-accent-secondary" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white outline-none focus:border-accent-secondary/50 focus:bg-white/10 transition-all placeholder:text-white/20 font-medium"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[3px] text-white/50 flex items-center gap-2">
                  <MessageSquare className="w-3 h-3 text-accent-cyan" />
                  Your Message
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white outline-none focus:border-accent-cyan/50 focus:bg-white/10 transition-all placeholder:text-white/20 resize-none font-medium"
                />
              </div>
              <button className="btn-premium w-full py-5 text-sm uppercase tracking-[4px]">
                Send Message
                <Send className="w-4 h-4 ml-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
