"use client";

export default function About() {
  return (
    <section id="about" className="py-32 px-8 bg-navy-800/40 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-left flex flex-col items-start reveal-hidden">
          <h2 className="section-title">About Me</h2>
          <div className="accent-line"></div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <p className="text-2xl text-text-white font-medium leading-relaxed">
                I’m a Software Engineer inspired by the art of turning complex problems into simple, elegant solutions.
              </p>
              <p className="text-lg text-text-dim leading-relaxed">
                Whether it’s designing engaging user interfaces or engineering reliable backend systems, 
                I enjoy building products that truly make an impact. My journey in technology is fueled by 
                a deep curiosity for how things work and a commitment to creating digital experiences 
                that are both functional and visually compelling.
              </p>
              <p className="text-lg text-text-dim leading-relaxed">
                I believe in lifelong learning and constantly push myself to explore new tools, technologies, and ideas. 
                Let’s collaborate to create something innovative and meaningful together.
              </p>
            </div>

            {/* Skills Highlight Box */}
            <div className="glass-card p-10 border-accent/10 bg-navy-900/60">
              <h4 className="text-xl font-bold mb-6 text-accent uppercase tracking-widest">Ongoing Focus</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2 h-2 rounded-full bg-accent shrink-0"></div>
                  <div>
                    <p className="text-text-white font-semibold">Architectural Design</p>
                    <p className="text-sm text-text-dim">Ensuring scalability and performance in distributed systems.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2 h-2 rounded-full bg-accent shrink-0"></div>
                  <div>
                    <p className="text-text-white font-semibold">User Centricity</p>
                    <p className="text-sm text-text-dim">Prioritizing the end-user experience in every line of code.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2 h-2 rounded-full bg-accent shrink-0"></div>
                  <div>
                    <p className="text-text-white font-semibold">AI Integration</p>
                    <p className="text-sm text-text-dim">Leveraging machine learning to create smarter, adaptive interfaces.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
