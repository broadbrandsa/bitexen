"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const pdfs = [
  { label: "SA Launch Proposal", file: "Bitexen_SA_Launch_Proposal_Broadbrand.pdf" },
  { label: "Success Measures", file: "Bitexen_Success_Measures.pdf" },
  { label: "Media Plan", file: "Bitexen_Annexure_Media_Plan.pdf" },
  { label: "Sources & References", file: "Bitexen_Sources_and_References.pdf" },
];

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
  const [pdfOpen, setPdfOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();
  const pdfRef = useRef<HTMLDivElement>(null);

  // Close PDF dropdown when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (pdfRef.current && !pdfRef.current.contains(e.target as Node)) {
        setPdfOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

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

        {/* Right-side group: PDF + CTA + Hide */}
        <div className="hidden lg:flex items-center gap-3">
          {/* PDF Download dropdown */}
          <div ref={pdfRef} className="relative">
            <button
              onClick={() => setPdfOpen((v) => !v)}
              className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-4 py-2.5 rounded-full transition-all duration-300"
              style={{
                background: pdfOpen ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.75)",
              }}
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.5 1v7M3.5 5.5l3 3 3-3M1.5 10h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Download PDF
              <span
                style={{
                  display: "inline-block",
                  transform: pdfOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s",
                  fontSize: "10px",
                }}
              >
                ▾
              </span>
            </button>

            {pdfOpen && (
              <div
                className="absolute right-0 top-full mt-2 rounded-xl overflow-hidden z-50 min-w-[220px]"
                style={{
                  background: "rgba(15,17,21,0.98)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                }}
              >
                <div className="px-3 pt-3 pb-1">
                  <p
                    className="text-[9px] font-bold uppercase tracking-[0.2em] pb-2"
                    style={{
                      color: "rgba(255,255,255,0.3)",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    Proposal Documents
                  </p>
                </div>
                {pdfs.map((pdf) => (
                  <a
                    key={pdf.file}
                    href={`/PDFs/${pdf.file}`}
                    download={pdf.file}
                    className="flex items-center gap-3 px-4 py-3 text-xs font-medium transition-colors duration-150"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(58,178,238,0.08)";
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                    }}
                    onClick={() => setPdfOpen(false)}
                  >
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded flex items-center justify-center text-[8px] font-black"
                      style={{ background: "rgba(58,178,238,0.15)", color: "var(--orange)" }}
                    >
                      PDF
                    </span>
                    {pdf.label}
                  </a>
                ))}
                <div className="px-4 pb-3 pt-1">
                  <a
                    href="/PDFs/Bitexen_SA_Launch_Proposal_Broadbrand.pdf"
                    download="Bitexen_SA_Launch_Proposal_Broadbrand.pdf"
                    className="flex items-center justify-center gap-2 w-full py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-colors duration-150"
                    style={{ background: "rgba(58,178,238,0.12)", color: "var(--orange)", border: "1px solid rgba(58,178,238,0.2)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(58,178,238,0.2)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(58,178,238,0.12)"; }}
                  >
                    ↓ Full Proposal
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* CTA */}
          <a
            href="mailto:vincentm@broadbrand.co.za"
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-full transition-all duration-300"
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

          {/* Hide — small text link at far right */}
          <button
            className="text-[10px] font-medium uppercase tracking-widest transition-colors duration-200 ml-1"
            style={{ color: "rgba(255,255,255,0.22)" }}
            onClick={() => {
              try { localStorage.removeItem("bb_bitexen_v1_unlocked"); } catch {}
              window.location.reload();
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "rgba(255,255,255,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255,255,255,0.22)";
            }}
          >
            Hide
          </button>
        </div>

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
          {/* Mobile PDF links */}
          <div
            className="rounded-xl overflow-hidden mt-1"
            style={{ border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <p
              className="text-[9px] font-bold uppercase tracking-[0.2em] px-3 pt-3 pb-2"
              style={{ color: "rgba(255,255,255,0.3)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              Download PDFs
            </p>
            {pdfs.map((pdf) => (
              <a
                key={pdf.file}
                href={`/PDFs/${pdf.file}`}
                download={pdf.file}
                className="flex items-center gap-3 px-3 py-2.5 text-xs"
                style={{ color: "rgba(255,255,255,0.65)" }}
                onClick={() => setMenuOpen(false)}
              >
                <span
                  className="text-[7px] font-black px-1 py-0.5 rounded"
                  style={{ background: "rgba(58,178,238,0.15)", color: "var(--orange)" }}
                >
                  PDF
                </span>
                {pdf.label}
              </a>
            ))}
          </div>

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
