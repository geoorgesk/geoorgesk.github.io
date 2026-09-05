import PortfolioHero from "@/components/ui/portfolio-hero-with-paper-shaders";
import { CinematicHero } from "@/components/ui/cinematic-landing-hero";
import { ContactSection } from "@/components/sections/contact";
import { GitHubSection } from "@/components/sections/github";

export default function Home() {
  return (
    <div className="overflow-x-hidden w-full">
      {/* Section 1: Paper Shader Split-Screen Hero */}
      <PortfolioHero />

      {/* Section 2: Cinematic GSAP Scroll Hero */}
      <CinematicHero />

      {/* Section 3: GitHub Activity */}
      <GitHubSection />

      {/* Section 4: Contact */}
      <ContactSection />
    </div>
  );
}
