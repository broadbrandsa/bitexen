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
    id: "intro",
    number: "00",
    badge: "Strategic Partnership Opportunities",
    title: "Building Beyond the Launch Campaign",
    accent: "#3AB2EE",
    body: [
      "The South African launch campaign represents the first step in a broader strategic opportunity between Bitexen and Digital Solutions Group.",
      "DSG operates across multiple specialist technology and services businesses including marketing, telecom infrastructure, and customer experience operations. This allows Bitexen to access capabilities that go beyond traditional agency services.",
      "Alongside the marketing launch strategy outlined in this proposal, several additional partnership opportunities exist that could support Bitexen's longer-term growth in South Africa.",
    ],
  },
  {
    id: "rwa",
    number: "01",
    badge: "RWA Partner",
    title: "Real World Asset Tokenisation",
    accent: "#63DFBD",
    body: [
      "DSG is actively seeking a Real World Asset (RWA) tokenisation partner. Bitexen's blockchain infrastructure and token expertise makes it a natural fit for bringing tokenised real-world assets to the South African market.",
      "Real-world asset tokenisation enables physical and financial assets to be represented as tradable blockchain tokens, unlocking liquidity and enabling fractional ownership.",
      "Through this collaboration, Bitexen could become the exchange platform supporting tokenised asset trading in the South African market, positioning the platform at the centre of emerging blockchain investment opportunities.",
    ],
    bulletsLabel: "Potential tokenised assets",
    bullets: ["Property", "Commodities", "Infrastructure investments", "Private market instruments"],
  },
  {
    id: "mvno",
    number: "02",
    badge: "MVNO Integration Opportunity",
    title: "Digital Mobile: MVNO + Tokenisation",
    accent: "#7EC8F4",
    body: [
      "Digital Solutions Group enables Mobile Virtual Network Operators (MVNOs) through its Digital Mobile infrastructure. The intersection of mobile connectivity and crypto services creates compelling opportunities for new forms of digital financial participation.",
      "Because mobile devices are the primary access point for both financial services and crypto trading in South Africa, integrating Bitexen with mobile infrastructure creates a powerful distribution channel for expanding platform adoption.",
    ],
    bulletsLabel: "Potential integrations",
    bullets: [
      "Mobile wallet integration with Bitexen accounts",
      "Token-enabled loyalty and engagement mechanics",
      "Airtime-to-crypto conversion mechanisms",
      "Mobile-first onboarding for new crypto users",
    ],
  },
  {
    id: "cxg",
    number: "03",
    badge: "CXG Customer Experience",
    title: "Customer Experience Group",
    accent: "#C084FC",
    body: [
      "Through its Customer Experience Group (CXG), DSG provides scalable customer engagement and support infrastructure for digital platforms.",
      "This enables Bitexen to deliver a high-quality customer experience for South African users, while ensuring the platform can scale operationally as adoption increases.",
    ],
    bulletsLabel: "CXG can support",
    bullets: [
      "Multilingual customer onboarding",
      "Platform support services",
      "Customer engagement and retention programmes",
      "Scalable support operations as the user base grows",
    ],
  },
  {
    id: "fan",
    number: "04",
    badge: "Fan Token Ecosystem",
    title: "Fan Token Ecosystem Expansion",
    accent: "#F59E0B",
    body: [
      "The launch campaign introduces fan tokens as a new model for sports engagement in South Africa. Fan tokens allow supporters to participate in club governance decisions, access exclusive experiences, and become active members of a club's digital community.",
      "DSG's combined marketing, media, and technology capabilities allow the creation of digital fan ecosystems. Over time, this could position Bitexen as a leading platform for sports-driven blockchain engagement in the South African market.",
    ],
    bulletsLabel: "Expansion partnerships",
    bullets: ["PSL football clubs", "Sports media platforms", "Fan communities and supporter groups"],
    bullets2Label: "Digital fan ecosystems combining",
    bullets2: [
      "Fan tokens",
      "Community governance",
      "Digital collectibles",
      "Matchday activations",
      "Interactive fan engagement experiences",
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
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              className="font-display font-black leading-none"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "var(--cream)" }}
            >
              BEYOND THE
              <br />
              <span style={{ color: "rgba(255,255,255,0.2)" }}>LAUNCH CAMPAIGN</span>
            </h2>
            {/* Subtle instructions */}
            <p
              className="text-xs font-semibold uppercase tracking-widest hidden md:block"
              style={{ color: "rgba(255,255,255,0.22)", paddingBottom: "0.25rem" }}
            >
              Drag or use arrows to explore →
            </p>
          </div>
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
                className="flex-shrink-0 w-full px-6"
                style={{ userSelect: "none" }}
              >
                <div className="max-w-7xl mx-auto">
                  {/* Card */}
                  <div
                    className="relative rounded-3xl overflow-hidden"
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

      {/* ── Controls ────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <div className="flex items-center justify-between">
          {/* Progress dots */}
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

          {/* Counter + Arrow nav */}
          <div className="flex items-center gap-4">
            <span
              className="font-display font-black tabular-nums hidden sm:block"
              style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.13)" }}
            >
              {String(current + 1).padStart(2, "0")} / {String(CARDS.length).padStart(2, "0")}
            </span>

            <div className="flex gap-2">
              {/* Prev */}
              <button
                onClick={prev}
                disabled={current === 0}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color:
                    current === 0 ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.7)",
                  cursor: current === 0 ? "default" : "pointer",
                }}
                aria-label="Previous slide"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M8 2L4 6l4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Next */}
              <button
                onClick={next}
                disabled={current === CARDS.length - 1}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                style={{
                  background:
                    current === CARDS.length - 1
                      ? "rgba(255,255,255,0.05)"
                      : `${activeCard.accent}20`,
                  border: `1px solid ${
                    current === CARDS.length - 1
                      ? "rgba(255,255,255,0.08)"
                      : activeCard.accent + "55"
                  }`,
                  color:
                    current === CARDS.length - 1
                      ? "rgba(255,255,255,0.2)"
                      : activeCard.accent,
                  cursor: current === CARDS.length - 1 ? "default" : "pointer",
                }}
                aria-label="Next slide"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M4 2l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
