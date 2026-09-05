"use client";

import { useEffect, useRef } from "react";

export function GitHubSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="reveal-up py-24 md:py-32 relative z-10"
      id="github"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 font-mono">
          <h2 className="text-xl font-bold tracking-tight mb-2 text-white uppercase">
            // Commits
          </h2>
          <p className="text-neutral-500 text-sm">
            Public repository activity.
          </p>
        </div>
        <div className="glass-card p-4 md:p-6 overflow-hidden">
          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=geoorgesk&bg_color=0d0d0d&color=a78bfa&line=a78bfa&point=ffffff&area=true&hide_border=true"
            alt="GitHub Contribution Graph"
            loading="lazy"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
