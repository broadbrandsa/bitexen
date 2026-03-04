"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const links = [
  { label: "About Us", href: "/about", sectionId: null },
  { label: "The Opportunity", href: "/#opportunity", sectionId: "opportunity" },
  { label: "Campaign", href: "/#campaign", sectionId: "campaign" },
  { label: "Budget", href: "/#budget", sectionId: "budget" },
  { label: "Media Plan", href: "/#media-plan", sectionId: "media-plan" },
  { label: "Success Measures", href: "/#success", sectionId: "success" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track which section is in the viewport
  useEffect(() => {
    if (pathname !== "/") return;

    const sectionIds = links
      .map((l) => l.sectionId)
      .filter(Boolean) as string[];

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.25, rootMargin: "-64px 0px 0px 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [pathname]);

  const isActive = (link: (typeof links)[number]) => {
    if (link.href === "/about") return pathname === "/about";
    if (link.sectionId) return activeSection === link.sectionId;
    return false;
  };

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
        <div className="hidden lg:flex items-center gap-1">
          {links.map((link) => {
            const active = isActive(link);
            return (
              <a
                key={link.href}
                href={link.href}
                className="relative px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-200"
                style={{
                  color: active ? "var(--orange)" : "rgba(255,255,255,0.4)",
                  background: active ? "rgba(58,178,238,0.12)" : "transparent",
                  border: active ? "1px solid rgba(58,178,238,0.25)" : "1px solid transparent",
                }}
              >
                {link.label}
              </a>
            );
          })}
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
          {links.map((link) => {
            const active = isActive(link);
            return (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm font-semibold py-2 uppercase tracking-wide rounded-lg px-3 transition-all duration-200"
                style={{
                  color: active ? "var(--orange)" : "rgba(255,255,255,0.6)",
                  background: active ? "rgba(58,178,238,0.1)" : "transparent",
                }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            );
          })}
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
