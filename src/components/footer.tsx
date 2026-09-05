export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.06] py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--foreground-dim)]">
          &copy; {new Date().getFullYear()} George SK. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="mailto:georgesajuk@gmail.com"
            className="text-sm text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors"
          >
            Email
          </a>
          <a
            href="https://github.com/geoorgesk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/george-s-kakkassery-803a94327"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/geoorgesk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
