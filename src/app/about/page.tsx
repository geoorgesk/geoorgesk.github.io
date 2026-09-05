"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-5xl mx-auto font-mono text-sm">
      
      <div className="flex flex-col md:flex-row gap-12 items-start mb-24">
        <div className="w-full md:w-1/3 aspect-square relative grayscale hover:grayscale-0 transition-all duration-500 border border-white/10">
          <Image
            src="/picofme.png"
            alt="George S Kakkassery"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="text-4xl md:text-5xl font-sans font-bold tracking-tight mb-8 text-white">George S Kakkassery</h1>
          <p className="text-neutral-400 mb-6 text-base leading-relaxed max-w-xl">
            CS & Cybersecurity student based in Kerala, India. I focus on backend architecture, system security, and frontend interfaces.
          </p>
          <div className="flex gap-4">
            <a href="/resume.pdf" target="_blank" className="border border-white/10 px-4 py-2 hover:bg-white hover:text-black transition-colors">
              [ CV / Resume ]
            </a>
            <a href="/projects" className="border border-white/10 px-4 py-2 hover:bg-white hover:text-black transition-colors">
              [ Projects ]
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Skills */}
        <section>
          <h2 className="text-white font-sans text-xl font-bold border-b border-white/10 pb-4 mb-6">01 / STACK</h2>
          <div className="space-y-6 text-neutral-400">
            <div>
              <p className="text-white mb-2">Languages</p>
              <p>Python, C, HTML/CSS, JavaScript/TypeScript</p>
            </div>
            <div>
              <p className="text-white mb-2">Frameworks & Tools</p>
              <p>Next.js, React, Tailwind CSS, Git, Figma</p>
            </div>
            <div>
              <p className="text-white mb-2">Security</p>
              <p>Ethical Hacking, Network Analysis, System Architecture</p>
            </div>
          </div>
        </section>

        {/* Info */}
        <section>
          <h2 className="text-white font-sans text-xl font-bold border-b border-white/10 pb-4 mb-6">02 / FOCUS</h2>
          <div className="space-y-6 text-neutral-400">
            <div>
              <p className="text-white mb-2">Architecture</p>
              <p>Building scalable and robust web applications with modern tooling.</p>
            </div>
            <div>
              <p className="text-white mb-2">Cybersecurity</p>
              <p>Identifying vulnerabilities and securing software systems.</p>
            </div>
            <div>
              <p className="text-white mb-2">Algorithms</p>
              <p>Optimizing computational processes and data structures.</p>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
}
