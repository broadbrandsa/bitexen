"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { FadeIn } from "@/components/FadeIn";

interface CardData {
  id: string;
  number: string;
  badge: string;
  title: string;
  accent: string;
  body: string[];
  bulletsLabel?: string;
  bullets?: string[];
  bullets2Label?: string;
  bullets2?: string[];
}

const CARDS: CardData[] = [
  {
    id: "rwa",
    number: "01",
    badge: "RWA Partner",
    title: "Real World Asset Tokenisation",
    accent: "#63DFBD",
    body: [
      "DSG is actively seeking a Real World Asset (RWA) tokenisation partner, and Bitexen's blockchain infrastructure makes it a natural fit. Tokenising real-world assets enables physical and financial investments to be represented as blockchain-based tokens, unlocking new liquidity and investment access.",
      "Through this collaboration, Bitexen could support the development of tokenised asset markets in South Africa, positioning the platform within a new generation of blockchain-enabled financial products.",
    ],
    bulletsLabel: "Potential tokenisation opportunities could include",
    bullets: [
      "property and real estate assets",
      "commodities and infrastructure investments",
      "private market investment instruments",
      "fractional ownership models for investors",
    ],
  },
  {
    id: "mvno",
    number: "02",
    badge: "Digital Mobile — MVNO Infrastructure",
    title: "Mobile Network Integration",
    accent: "#7EC8F4",
    body: [
      "Digital Solutions Group enables Mobile Virtual Network Operators (MVNOs) through its Digital Mobile infrastructure. Integrating mobile connectivity with crypto services creates new pathways for digital asset adoption.",
      "Because smartphones are the primary gateway to financial services and crypto trading in South Africa, this integration could significantly expand access to Bitexen's platform.",
    ],
    bulletsLabel: "Mobile integration opportunities could include",
    bullets: [
      "mobile wallet integration with Bitexen accounts",
      "crypto-enabled airtime purchases",
      "tokenised loyalty and engagement programmes",
      "mobile-first onboarding for new crypto users",
    ],
  },
  {
    id: "cxg",
    number: "03",
    badge: "CXG — Customer Experience Group",
    title: "Customer Experience Infrastructure",
    accent: "#C084FC",
    body: [
      "Through CXG, DSG provides scalable customer engagement and support services designed for digital platforms. As Bitexen grows its presence in South Africa, CXG can support user onboarding, customer engagement, and operational scale.",
      "This ensures Bitexen can maintain a strong customer experience while supporting rapid platform growth.",
    ],
    bulletsLabel: "CXG capabilities could include",
    bullets: [
      "multilingual customer onboarding support",
      "platform customer service operations",
      "engagement and retention programmes",
      "scalable contact-centre infrastructure",
    ],
  },
  {
    id: "einsurer",
    number: "04",
    badge: "eInsurer + Digital Resilience",
    title: "Exchange Insurance & Security",
    accent: "#34D399",
    body: [
      "DSG has developed eInsurer, an exchange insurance proposition created in partnership with leading South African insurers including Hollard and iToo. This initiative introduces insurance-backed protection designed to strengthen trust in crypto platforms.",
      "Alongside insurance protection, Digital Resilience, a DSG technology partner, provides cybersecurity and threat intelligence capabilities to help secure digital infrastructure and platform operations.",
      "In a market where trust is critical, combining insurance with advanced cybersecurity provides Bitexen with a strong security and confidence proposition.",
    ],
    bulletsLabel: "A comprehensive protection framework that may include",
    bullets: [
      "insurance-backed protection mechanisms",
      "cybersecurity monitoring and threat intelligence",
      "custody and infrastructure safeguards",
      "operational risk protection",
    ],
  },
  {
    id: "fan",
    number: "05",
    badge: "Bitexen Fan Tokens",
    title: "Fan Token Ecosystem Expansion",
    accent: "#F59E0B",
    body: [
      "The launch campaign introduces fan tokens as a new form of digital engagement for football supporters in South Africa. Fan tokens allow supporters to participate in club decisions, unlock exclusive experiences, and engage with their teams in new ways.",
      "This positions Bitexen as a platform connecting football culture with blockchain technology.",
    ],
    bulletsLabel: "Expanding the ecosystem could include partnerships with",
    bullets: ["PSL football clubs", "sports media platforms", "supporter communities"],
    bullets2Label: "DSG's capabilities could grow this ecosystem to include",
    bullets2: [
      "fan token governance participation",
      "digital collectibles and fan rewards",
      "matchday activations and experiences",
      "interactive community engagement platforms",
    ],
  },
];

export function PartnershipSlider() {
  const [current, setCurrent] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const isDraggingRef = useRef(false);
  const dragStartX = useRef(0);
  const dragOffsetRef = useRef(0);

  const prev = useCallback(() => setCurrent((c) => Math.max(0, c - 1)), []);
  const next = useCallback(() => setCurrent((c) => Math.min(CARDS.length - 1, c + 1)), []);
  const goTo = useCallback(
    (i: number) => setCurrent(Math.max(0, Math.min(CARDS.length - 1, i))),
    []
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    setIsDragging(true);
    dragStartX.current = e.clientX;
    dragOffsetRef.current = 0;
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const delta = e.clientX - dragStartX.current;
    dragOffsetRef.current = delta;
    setDragOffset(delta);
  }, []);

  const onPointerUp = useCallback(() => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);
    const delta = dragOffsetRef.current;
    dragOffsetRef.current = 0;
    setDragOffset(0);
    if (delta < -60) next();
    else if (delta > 60) prev();
  }, [next, prev]);

  const activeCard = CARDS[current];

  return (
    <section id="partnerships" className="py-28 overflow-hidden">
      {/* ── Section header ─────────────────────────────────── */}
      <FadeIn>
        <div className="max-w-7xl mx-auto px-6 mb-14">
          <p className="section-label mb-4">Strategic Opportunities</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-6">
            <h2
              className="font-display font-black leading-none"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "var(--cream)" }}
            >
              BEYOND THE
              <br />
              <span style={{ color: "rgba(255,255,255,0.2)" }}>LAUNCH CAMPAIGN</span>
            </h2>
            {/* Arrow controls — top right */}
            <div className="flex items-center gap-3 md:pb-1">
              <button
                onClick={prev}
                disabled={current === 0}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: current === 0 ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.7)",
                  cursor: current === 0 ? "default" : "pointer",
                }}
                aria-label="Previous slide"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M8 2L4 6l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <span
                className="font-display font-black tabular-nums"
                style={{ fontSize: "1rem", color: "rgba(255,255,255,0.2)" }}
              >
                {String(current + 1).padStart(2, "0")} / {String(CARDS.length).padStart(2, "0")}
              </span>
              <button
                onClick={next}
                disabled={current === CARDS.length - 1}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                style={{
                  background: current === CARDS.length - 1 ? "rgba(255,255,255,0.05)" : `${activeCard.accent}20`,
                  border: `1px solid ${current === CARDS.length - 1 ? "rgba(255,255,255,0.08)" : activeCard.accent + "55"}`,
                  color: current === CARDS.length - 1 ? "rgba(255,255,255,0.2)" : activeCard.accent,
                  cursor: current === CARDS.length - 1 ? "default" : "pointer",
                }}
                aria-label="Next slide"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
          <p className="text-base leading-relaxed max-w-3xl" style={{ color: "rgba(255,255,255,0.6)" }}>
            DSG operates across multiple specialist businesses spanning marketing, telecom infrastructure, customer experience, and blockchain innovation. These capabilities create additional opportunities for Bitexen to expand its platform presence and build new digital services in the South African market.
          </p>
        </div>
      </FadeIn>

      {/* ── Slider track ───────────────────────────────────── */}
      <div
        style={{ cursor: isDragging ? "grabbing" : "grab", userSelect: "none" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div
          className="flex"
          style={{
            transform: `translateX(calc(-${current * 100}% + ${dragOffset}px))`,
            transition: isDragging ? "none" : "transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)",
            willChange: "transform",
          }}
        >
          {CARDS.map((c) => {
            const hasBullets = c.bullets && c.bullets.length > 0;

            return (
              <div
                key={c.id}
                className="flex-shrink-0 w-full px-6 flex flex-col"
                style={{ userSelect: "none" }}
              >
                <div className="max-w-7xl mx-auto w-full h-full">
                  {/* Card */}
                  <div
                    className="relative rounded-3xl overflow-hidden h-full"
                    style={{
                      background: "#0F1115",
                      borderTop: `1px solid ${c.accent}18`,
                      borderRight: `1px solid ${c.accent}14`,
                      borderBottom: `1px solid ${c.accent}14`,
                      borderLeft: `3px solid ${c.accent}`,
                      minHeight: "420px",
                    }}
                  >
                    {/* Top-right radial glow */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: `radial-gradient(ellipse 55% 50% at 90% -5%, ${c.accent}16 0%, transparent 65%)`,
                      }}
                    />

                    {/* Bottom-left subtle glow */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: `radial-gradient(ellipse 40% 40% at 5% 110%, ${c.accent}0D 0%, transparent 60%)`,
                      }}
                    />

                    {/* Ghost number — background decoration */}
                    <div
                      className="absolute top-0 right-0 pointer-events-none overflow-hidden"
                      style={{ height: "100%", width: "50%" }}
                    >
                      <span
                        className="font-display font-black absolute top-0 right-0"
                        style={{
                          fontSize: "clamp(10rem, 20vw, 20rem)",
                          color: c.accent,
                          opacity: 0.055,
                          letterSpacing: "-0.04em",
                          lineHeight: 0.85,
                          transform: "translate(8%, -5%)",
                          userSelect: "none",
                        }}
                      >
                        {c.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-8 md:p-12 lg:p-16">
                      {/* Badge */}
                      <div className="mb-6">
                        <span
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase"
                          style={{
                            background: `${c.accent}18`,
                            border: `1px solid ${c.accent}40`,
                            color: c.accent,
                          }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ background: c.accent }}
                          />
                          {c.badge}
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        className="font-display font-black leading-none mb-10"
                        style={{
                          fontSize: "clamp(2rem, 4vw, 4rem)",
                          color: "var(--cream)",
                          maxWidth: "20ch",
                        }}
                      >
                        {c.title.toUpperCase()}
                      </h3>

                      {/* Content grid — 2 cols when bullets present */}
                      <div className={hasBullets ? "grid md:grid-cols-2 gap-8 lg:gap-16" : ""}>
                        {/* Body paragraphs */}
                        <div className="space-y-4">
                          {c.body.map((p, i) => (
                            <p
                              key={i}
                              className="text-base leading-relaxed"
                              style={{ color: "rgba(255,255,255,0.78)" }}
                            >
                              {p}
                            </p>
                          ))}
                        </div>

                        {/* Bullets column */}
                        {hasBullets && (
                          <div className="space-y-6 mt-6 md:mt-0">
                            {/* Primary bullets */}
                            <div>
                              {c.bulletsLabel && (
                                <p
                                  className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4"
                                  style={{ color: c.accent }}
                                >
                                  {c.bulletsLabel}
                                </p>
                              )}
                              <ul className="space-y-2.5">
                                {c.bullets!.map((b, i) => (
                                  <li key={i} className="flex items-start gap-3">
                                    <span
                                      className="flex-shrink-0 rounded-full"
                                      style={{
                                        width: "6px",
                                        height: "6px",
                                        background: c.accent,
                                        marginTop: "8px",
                                      }}
                                    />
                                    <span
                                      className="text-base leading-relaxed"
                                      style={{ color: "rgba(255,255,255,0.82)" }}
                                    >
                                      {b}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Secondary bullets (fan token card) */}
                            {c.bullets2 && c.bullets2.length > 0 && (
                              <div>
                                {c.bullets2Label && (
                                  <p
                                    className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4"
                                    style={{ color: c.accent, opacity: 0.7 }}
                                  >
                                    {c.bullets2Label}
                                  </p>
                                )}
                                <ul className="space-y-2.5">
                                  {c.bullets2.map((b, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                      <span
                                        className="flex-shrink-0 rounded-full"
                                        style={{
                                          width: "6px",
                                          height: "6px",
                                          background: c.accent,
                                          opacity: 0.5,
                                          marginTop: "8px",
                                        }}
                                      />
                                      <span
                                        className="text-base leading-relaxed"
                                        style={{ color: "rgba(255,255,255,0.72)" }}
                                      >
                                        {b}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Progress dots ───────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <div className="flex items-center gap-2">
          {CARDS.map((c, i) => (
            <button
              key={c.id}
              onClick={() => goTo(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? "28px" : "8px",
                height: "8px",
                background: i === current ? activeCard.accent : "rgba(255,255,255,0.14)",
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
