"use client"

import { Dithering } from "@paper-design/shaders-react"
import { useState } from "react"

export default function PortfolioHero() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  return (
    <div className="relative min-h-[100dvh] overflow-hidden flex flex-col md:flex-row">
      <div
        className={`w-full md:w-1/2 p-8 md:p-12 font-mono relative z-10 flex flex-col justify-between ${
          isDarkMode ? "bg-[#050505] text-white" : "bg-white text-black"
        }`}
      >
        {/* Theme toggle */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`absolute top-8 right-8 p-2 rounded-full transition-colors ${
            isDarkMode ? "hover:bg-white/10" : "hover:bg-black/10"
          }`}
          aria-label="Toggle theme"
        >
          {isDarkMode ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>

        {/* Header */}
        <div className="mb-12 pt-16 md:pt-0">
          <h1 className="text-lg font-normal mb-8 tracking-wider">GSK.portfolio</h1>
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-normal tracking-tight">GEORGE S</h2>
            <h3 className="text-2xl md:text-3xl font-normal tracking-tight">KAKKASSERY</h3>
            <p className={`text-sm mt-3 tracking-widest uppercase ${
              isDarkMode ? "text-[#a78bfa]" : "text-blue-600"
            }`}>CS & Cybersecurity</p>
          </div>
        </div>

        {/* Experience / Highlights */}
        <div className="mb-12 space-y-3 font-mono text-xs md:text-sm text-neutral-400">
          <div className="grid grid-cols-3 gap-4 border-b border-white/10 pb-2">
            <span>FlavourNext</span>
            <span>Engineer</span>
            <span className="text-right text-neutral-600">2024</span>
          </div>
          <div className="grid grid-cols-3 gap-4 border-b border-white/10 pb-2">
            <span>NxtStop</span>
            <span>Creator</span>
            <span className="text-right text-neutral-600">2024</span>
          </div>
          <div className="grid grid-cols-3 gap-4 border-b border-white/10 pb-2">
            <span>Hand Mouse</span>
            <span>CV</span>
            <span className="text-right text-neutral-600">2024</span>
          </div>
          <div className="grid grid-cols-3 gap-4 border-b border-white/10 pb-2">
            <span>247</span>
            <span>Utility</span>
            <span className="text-right text-neutral-600">2023</span>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap gap-6 text-sm">
          <a href="https://github.com/geoorgesk" target="_blank" rel="noopener noreferrer" className={`transition-colors ${
            isDarkMode ? "hover:text-[#a78bfa]" : "hover:text-blue-600"
          }`}>GitHub</a>
          <a href="https://www.linkedin.com/in/george-s-kakkassery-803a94327" target="_blank" rel="noopener noreferrer" className={`transition-colors ${
            isDarkMode ? "hover:text-[#a78bfa]" : "hover:text-blue-600"
          }`}>LinkedIn</a>
          <a href="mailto:georgesajuk@gmail.com" className={`transition-colors ${
            isDarkMode ? "hover:text-[#a78bfa]" : "hover:text-blue-600"
          }`}>Email</a>
          <a href="https://flavournext.com" target="_blank" rel="noopener noreferrer" className={`transition-colors ${
            isDarkMode ? "hover:text-[#a78bfa]" : "hover:text-blue-600"
          }`}>FlavourNext</a>
        </div>
      </div>

      <div className="w-full md:w-1/2 relative min-h-[50vh] md:min-h-0">
        <Dithering
          style={{ height: "100%", width: "100%" }}
          colorBack={isDarkMode ? "hsl(0, 0%, 2%)" : "hsl(0, 0%, 95%)"}
          colorFront={isDarkMode ? "hsl(263, 90%, 76%)" : "hsl(220, 100%, 70%)"}
          shape="wave"
          type="4x4"
          pxSize={3}
          offsetX={0}
          offsetY={0}
          scale={0.8}
          rotation={0}
          speed={0.1}
        />
      </div>
    </div>
  )
}
