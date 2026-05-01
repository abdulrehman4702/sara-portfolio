"use client";

import { Mail } from "lucide-react";
import { InstagramIcon as Instagram } from "./SocialIcons";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto reveal-hidden">
        <div className="mb-20 text-left">
          <h2 className="section-title">Initialize Transmission</h2>
          <div className="accent-line"></div>
          <p className="text-text-dim text-xl max-w-3xl mb-16 leading-relaxed font-light italic">
            We need to establish a secure communication channel, like Discord, for architectural collaboration and technical discussions. Establish a connection through the gateway.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-16 items-start">
          {/* Info Column */}
          <div className="md:col-span-2 space-y-6 text-left">
            <div className="glass-card p-6 border-white/5 bg-navy-900/60 group hover:border-accent/30 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg text-accent group-hover:bg-accent group-hover:text-navy-900 transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <h4 className="text-white font-bold uppercase tracking-widest text-xs">Direct Email</h4>
              </div>
              <p className="text-text-dim text-base break-all">sara102ilyas@gmail.com</p>
            </div>

            <div className="glass-card p-6 border-white/5 bg-navy-900/60 group hover:border-accent/30 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg text-accent group-hover:bg-accent group-hover:text-navy-900 transition-all">
                  <Instagram className="w-5 h-5" />
                </div>
                <h4 className="text-white font-bold uppercase tracking-widest text-xs">Instagram</h4>
              </div>
              <p className="text-text-dim text-base">@DesignSpirex</p>
            </div>

            <div className="flex items-center gap-3 px-4 py-2 border border-accent/20 rounded-full w-fit bg-accent/5">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
              <span className="text-[10px] font-mono text-accent uppercase tracking-widest">Signal Strength: Optimal</span>
            </div>
          </div>

          {/* Form Column */}
          <div className="md:col-span-3">
            <form className="glass-card p-10 space-y-8 border-white/5 bg-navy-900/40 text-left" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[3px] text-text-dim">Full Identity</label>
                  <input type="text" required placeholder="User Name" className="w-full bg-navy-900/80 border border-white/10 rounded-lg p-4 text-text-white outline-none focus:border-accent transition-all placeholder:text-text-dim/20 font-mono" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[3px] text-text-dim">Gateway (Email)</label>
                  <input type="email" required placeholder="email@address.sys" className="w-full bg-navy-900/80 border border-white/10 rounded-lg p-4 text-text-white outline-none focus:border-accent transition-all placeholder:text-text-dim/20 font-mono" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[3px] text-text-dim">Transmission Payload</label>
                <textarea rows={5} required placeholder="Input message data..." className="w-full bg-navy-900/80 border border-white/10 rounded-lg p-4 text-text-white outline-none focus:border-accent transition-all placeholder:text-text-dim/20 resize-none font-mono"></textarea>
              </div>
              <button className="w-full group bg-accent text-navy-900 p-5 rounded-lg font-black text-sm uppercase tracking-[4px] hover:bg-white transition-all relative overflow-hidden shadow-2xl active:scale-95">
                <span className="relative z-10">Transmit Signal</span>
                <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
