"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { label: "About Us", href: "/about" },
  { label: "The Opportunity", href: "/#opportunity" },
  { label: "Campaign", href: "/#campaign" },
  { label: "Budget", href: "/#budget" },
  { label: "Media Plan", href: "/#media-plan" },
  { label: "Success Measures", href: "/#success" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/8 bg-background/90 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo — links to home */}
        <a href="/" className="flex items-center gap-3">
          {/* Broadbrand logo — inverted to white */}
          <div className="relative w-36 h-8">
            <Image
              src="/Logos/Broadbrand.png"
              alt="Broadbrand"
              fill
              className="object-contain object-left"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>
          {/* Bitexen logo */}
          <div className="relative w-24 h-8">
            <Image
              src="/Logos/white_logo.webp"
              alt="Bitexen"
              fill
              className="object-contain object-left"
            />
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold tracking-wide text-white/40 hover:text-white transition-colors duration-200 uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="mailto:vincentm@broadbrand.co.za"
          className="hidden lg:inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-full transition-all duration-300"
          style={{
            background: "var(--orange)",
            color: "#fff",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "#FF6B45")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "var(--orange)")
          }
        >
          Let&apos;s Talk
        </a>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden p-2 text-white/60 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 space-y-1.5">
            <span
              className={`block h-px bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-px bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-white/8 bg-background/95 backdrop-blur-xl px-6 py-4 space-y-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm font-semibold text-white/60 hover:text-white transition-colors py-2 uppercase tracking-wide"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:vincentm@broadbrand.co.za"
            className="block text-sm font-bold text-center py-3 rounded-full mt-2"
            style={{ background: "var(--orange)", color: "#fff" }}
          >
            Let&apos;s Talk
          </a>
        </div>
      )}
    </nav>
  );
}
