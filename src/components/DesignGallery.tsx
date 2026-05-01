"use client";

const designs = [
  {
    title: "Minimalism 01",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=600",
    offset: false,
  },
  {
    title: "Branding Identity",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=600",
    offset: true,
  },
  {
    title: "Abstract 04",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600",
    offset: false,
  },
  {
    title: "Logo Evolution",
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&q=80&w=600",
    offset: true,
  },
];

export default function DesignGallery() {
  return (
    <section id="design" className="py-32 px-8 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-left reveal-hidden">
          <h2 className="section-title">Graphic Design Workflow</h2>
          <div className="accent-line"></div>
          <p className="text-text-dim text-xl font-light italic">Artistic expression meets structured visual communication.</p>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 reveal-hidden" style={{ transitionDelay: "200ms" }}>
          {designs.map((design, i) => (
            <div key={i} className={`group relative aspect-3/4 rounded-2xl overflow-hidden border border-white/10 bg-navy-800 shadow-xl cursor-crosshair ${design.offset ? "md:mt-12" : ""}`}>
              <img 
                src={design.image} 
                alt={design.title} 
                className="w-full h-full object-cover transition-all duration-700 opacity-100 group-hover:rotate-1"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-navy-900/60 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="p-4 border border-accent bg-navy-900/90 text-accent font-mono text-[10px] uppercase tracking-[4px]">{design.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
