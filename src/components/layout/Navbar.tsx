"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
        scrolled
          ? "bg-nyt-bg/95 backdrop-blur-sm border-b border-tile-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Monogram */}
        <a
          href="#home"
          className="w-9 h-9 bg-nyt-black text-white flex items-center justify-center font-serif font-bold text-sm hover:opacity-80 transition-opacity"
        >
          A.M.
        </a>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                "font-sans text-xs font-bold uppercase tracking-wider px-3 py-1.5 border-2",
                "border-transparent text-nyt-text",
                "hover:border-nyt-text transition-colors duration-150"
              )}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs font-bold uppercase tracking-wider px-3 py-1.5 border-2 border-nyt-black bg-nyt-black text-white hover:bg-white hover:text-nyt-black transition-colors duration-150 ml-2"
          >
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden p-2 text-nyt-text"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1">
            <span className={cn("block h-0.5 bg-current transition-all", menuOpen && "rotate-45 translate-y-1.5")} />
            <span className={cn("block h-0.5 bg-current transition-all", menuOpen && "opacity-0")} />
            <span className={cn("block h-0.5 bg-current transition-all", menuOpen && "-rotate-45 -translate-y-1.5")} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden bg-nyt-bg border-b border-tile-border px-4 pb-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block font-sans text-xs font-bold uppercase tracking-wider py-2.5 border-b border-tile-border text-nyt-text"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block font-sans text-xs font-bold uppercase tracking-wider py-2.5 text-nyt-text"
          >
            Resume ↗
          </a>
        </div>
      )}
    </nav>
  );
}
