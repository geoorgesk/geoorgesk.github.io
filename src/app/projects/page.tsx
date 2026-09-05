"use client";

const PROJECTS = [
  {
    title: "FlavourNext",
    role: "Engineer",
    date: "2024",
    link: "https://flavournext.com",
    tech: ["Next.js", "Tailwind", "TypeScript", "Vercel"],
    description: "Web infrastructure for Viva Agro Industries. Product catalog and dynamic front-end system.",
    featured: true,
  },
  {
    title: "NxtStop",
    role: "Creator",
    date: "2024",
    tech: ["HTML", "CSS", "JavaScript", "Maps API"],
    description: "Real-time rural bus tracking application. Live location preview and route parsing.",
  },
  {
    title: "247",
    role: "Creator",
    date: "2023",
    tech: ["Python", "WebSockets"],
    description: "Stealth screen mirroring utility. Minimal resource footprint for discreet background streaming.",
  },
  {
    title: "Hand Mouse",
    role: "Creator",
    date: "2024",
    tech: ["Python", "OpenCV", "MediaPipe"],
    description: "Touchless cursor control interface using computer vision and hand-gesture recognition.",
  },
  {
    title: "Git Cloud",
    role: "Creator",
    date: "2023",
    tech: ["Cloud APIs", "Git CLI"],
    description: "Automated synchronization pipeline between local Git repositories and cloud storage.",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-5xl mx-auto font-mono text-sm">
      <h1 className="text-4xl md:text-5xl font-sans font-bold tracking-tight mb-16 text-white uppercase">Index</h1>

      <div className="flex flex-col gap-12">
        {PROJECTS.map((p, i) => (
          <div key={i} className={`flex flex-col md:flex-row gap-6 md:gap-12 pb-12 border-b border-white/10 ${p.featured ? 'text-white' : 'text-neutral-400'}`}>
            <div className="w-full md:w-1/4">
              <h2 className={`font-sans text-2xl font-bold mb-2 ${p.featured ? 'text-white' : 'text-neutral-200'}`}>
                {p.link ? (
                  <a href={p.link} target="_blank" rel="noreferrer" className="hover:text-[var(--accent)] transition-colors">
                    {p.title} ↗
                  </a>
                ) : (
                  p.title
                )}
              </h2>
              <div className="flex justify-between items-center text-xs opacity-60">
                <span>{p.role}</span>
                <span>{p.date}</span>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <p className="leading-relaxed">{p.description}</p>
            </div>
            
            <div className="w-full md:w-1/4 flex flex-wrap gap-2 content-start">
              {p.tech.map(t => (
                <span key={t} className="px-2 py-1 border border-white/10 text-xs">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
