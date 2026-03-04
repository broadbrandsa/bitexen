"use client";

import { useState } from "react";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";

// Donut chart data
const RADIUS = 78;
const CX = 100;
const CY = 100;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const workingPct = 0.75;
const prodPct = 0.25;

const workingDash = CIRCUMFERENCE * workingPct;
const workingGap = CIRCUMFERENCE * prodPct;
const prodDash = CIRCUMFERENCE * prodPct;
const prodGap = CIRCUMFERENCE * workingPct;

// Bar chart data — all media channels
const mediaChannels = [
  { name: "DStv Media Sales", amount: 1201000, category: "vendor" },
  { name: "Paid Social (Meta + TikTok)", amount: 567000, category: "digital" },
  { name: "Mediamark Audio (Radio)", amount: 400230, category: "vendor" },
  { name: "Polygon OOH", amount: 400000, category: "vendor" },
  { name: "OnsideZA", amount: 345000, category: "vendor" },
  { name: "Programmatic Display & Video", amount: 315000, category: "digital" },
  { name: "Mediamark Digital", amount: 393200, category: "vendor" },
  { name: "Google Search & YouTube", amount: 252000, category: "digital" },
  { name: "SABC+", amount: 200000, category: "vendor" },
  { name: "Influencer & Creators", amount: 189000, category: "digital" },
  { name: "Content & SEO", amount: 126000, category: "digital" },
  { name: "App Install Campaigns", amount: 126000, category: "digital" },
];

const maxAmount = Math.max(...mediaChannels.map((c) => c.amount));

function formatRand(n: number): string {
  return `R${n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

const productionLines = [
  { label: "Creative strategy / concept", amount: 110000 },
  { label: "Video production (hero film + social)", amount: 530000 },
  { label: "Digital creative (fan card tool, rich media, display)", amount: 380000 },
  { label: "AR experience + physical fan cards + print", amount: 260000 },
  { label: "Radio production, in-app UX, photography, contingency", amount: 230000 },
];

const maxProdAmount = Math.max(...productionLines.map((p) => p.amount));

const tabs = [
  {
    id: "working",
    label: "Working Media",
    sublabel: "R4,514,430",
    color: "#3AB2EE",
    colorBg: "rgba(58,178,238,0.12)",
    colorBorder: "rgba(58,178,238,0.35)",
  },
  {
    id: "production",
    label: "Production Breakdown",
    sublabel: "R1,510,000",
    color: "#63DFBD",
    colorBg: "rgba(99,223,189,0.12)",
    colorBorder: "rgba(99,223,189,0.35)",
  },
];

export function Budget() {
  const [activeTab, setActiveTab] = useState<"working" | "production">("working");
  const activeTabData = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="budget" style={{ background: "#222222" }}>
      <div className="py-28 px-6 max-w-7xl mx-auto">

        {/* ── Budget Overview ─────────────────────────────────────── */}
        <FadeIn>
          <p className="section-label mb-4">Budget Overview</p>
          <h2
            className="font-display font-black leading-none mb-16"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#FFFFFF" }}
          >
            R6,024,430
            <br />
            <span style={{ color: "rgba(255,255,255,0.35)" }}>TOTAL INVESTMENT</span>
          </h2>
        </FadeIn>

        {/* Donut + breakdown */}
        <div className="grid md:grid-cols-2 gap-16 mb-24 items-center">
          {/* Donut chart */}
          <FadeIn>
            <div className="flex flex-col items-center">
              <svg viewBox="0 0 200 200" className="w-64 h-64">
                {/* Background ring */}
                <circle
                  cx={CX}
                  cy={CY}
                  r={RADIUS}
                  fill="none"
                  stroke="rgba(255,255,255,0.12)"
                  strokeWidth="20"
                />
                {/* Working media — blue */}
                <circle
                  cx={CX}
                  cy={CY}
                  r={RADIUS}
                  fill="none"
                  stroke="#3AB2EE"
                  strokeWidth="20"
                  strokeDasharray={`${workingDash} ${workingGap}`}
                  strokeLinecap="butt"
                  transform={`rotate(-90 ${CX} ${CY})`}
                />
                {/* Production — teal */}
                <circle
                  cx={CX}
                  cy={CY}
                  r={RADIUS}
                  fill="none"
                  stroke="#63DFBD"
                  strokeWidth="20"
                  strokeDasharray={`${prodDash} ${prodGap}`}
                  strokeDashoffset={-workingDash}
                  strokeLinecap="butt"
                  transform={`rotate(-90 ${CX} ${CY})`}
                />
                {/* Center text */}
                <text
                  x="100"
                  y="94"
                  textAnchor="middle"
                  fill="rgba(255,255,255,0.95)"
                  fontSize="11"
                  fontWeight="900"
                  fontFamily="var(--font-display)"
                  letterSpacing="-0.5"
                >
                  R6,024,430
                </text>
                <text
                  x="100"
                  y="112"
                  textAnchor="middle"
                  fill="rgba(255,255,255,0.45)"
                  fontSize="7"
                  fontWeight="600"
                  fontFamily="var(--font-sans)"
                  letterSpacing="1"
                >
                  TOTAL CAMPAIGN INVESTMENT
                </text>
              </svg>

              {/* Legend */}
              <div className="flex gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-sm" style={{ background: "#3AB2EE" }} />
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.82)" }}>
                    Working Media (Vendor Media + Digital Performance) 75%
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-sm" style={{ background: "#63DFBD" }} />
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.82)" }}>
                    Production (Non-Working Creative &amp; Production) 25%
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Summary cards */}
          <FadeIn delay={150}>
            <div className="space-y-4">
              {[
                {
                  label: "Working Media",
                  amount: "R4,514,430",
                  pct: "75%",
                  color: "#3AB2EE",
                  sub: "Vendor media + digital performance",
                },
                {
                  label: "Non-Working Production",
                  amount: "R1,510,000",
                  pct: "25%",
                  color: "#63DFBD",
                  sub: "Creative, video, AR, OOH, radio, photography",
                },
                {
                  label: "Total",
                  amount: "R6,024,430",
                  pct: "100%",
                  color: "rgba(255,255,255,0.5)",
                  sub: "12-week full-funnel SA launch campaign",
                },
              ].map((row) => (
                <div
                  key={row.label}
                  className="rounded-xl p-5 flex items-center justify-between"
                  style={{
                    background: "rgba(0,0,0,0.2)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderLeft: `3px solid ${row.color}`,
                  }}
                >
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: row.color }}>
                      {row.label}
                    </p>
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.82)" }}>
                      {row.sub}
                    </p>
                  </div>
                  <div className="text-right">
                    <p
                      className="font-display font-black text-2xl"
                      style={{ color: "#FFFFFF" }}
                    >
                      {row.amount}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: row.color }}>
                      {row.pct}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Media Partner Logos */}
        <FadeIn delay={100}>
          <div className="mb-16">
            <p
              className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-center"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Media Partners
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {[
                { src: "/partner-logos/DStv.png", alt: "DStv", w: 80 },
                { src: "/partner-logos/Super Sport.png", alt: "SuperSport", w: 100 },
                { src: "/partner-logos/EastCoastRadio.png", alt: "East Coast Radio", w: 110 },
                { src: "/partner-logos/Jacaranda-FM.png", alt: "Jacaranda FM", w: 100 },
                { src: "/partner-logos/Prime media.png", alt: "Prime Media", w: 110 },
                { src: "/partner-logos/showmax.png", alt: "Showmax", w: 100 },
                { src: "/partner-logos/Arena.png", alt: "Arena", w: 100 },
              ].map((logo) => (
                <div
                  key={logo.alt}
                  className="relative flex-shrink-0"
                  style={{ width: logo.w, height: 36 }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                    style={{ filter: "brightness(0) invert(1)", opacity: 0.45 }}
                  />
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Divider */}
        <div
          className="mb-16"
          style={{ height: "1px", background: "rgba(255,255,255,0.15)" }}
        />

        {/* ── Tabbed: Working Media / Production Breakdown ─────────── */}
        <FadeIn>
          {/* Tab bar */}
          <div
            className="inline-flex rounded-2xl p-1 mb-12"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {tabs.map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as "working" | "production")}
                  className="relative flex flex-col items-start px-6 py-3 rounded-xl transition-all duration-300"
                  style={{
                    background: active ? tab.colorBg : "transparent",
                    border: active ? `1px solid ${tab.colorBorder}` : "1px solid transparent",
                    minWidth: "180px",
                  }}
                >
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest mb-0.5 transition-colors duration-300"
                    style={{ color: active ? tab.color : "rgba(255,255,255,0.3)" }}
                  >
                    {tab.label}
                  </span>
                  <span
                    className="font-display font-black text-lg leading-none transition-colors duration-300"
                    style={{ color: active ? "#FFFFFF" : "rgba(255,255,255,0.25)" }}
                  >
                    {tab.sublabel}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Tab heading */}
          <h3
            className="font-display font-black mb-10 transition-all duration-300"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: "#FFFFFF" }}
          >
            {activeTab === "working"
              ? "R4,514,430 ACROSS VENDOR MEDIA AND DIGITAL PERFORMANCE CHANNELS"
              : "R1,510,000 ACROSS PRODUCTION AND CREATIVE LINES"}
          </h3>
        </FadeIn>

        {/* Tab content */}
        <div className="space-y-3">
          {activeTab === "working"
            ? [...mediaChannels]
                .sort((a, b) => b.amount - a.amount)
                .map((ch, i) => (
                  <FadeIn key={ch.name} delay={i * 40}>
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 text-right" style={{ width: "220px" }}>
                        <p className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.92)" }}>
                          {ch.name}
                        </p>
                        <p
                          className="text-[10px] px-1.5 py-0.5 rounded inline-block mt-0.5"
                          style={{
                            background: ch.category === "vendor" ? "rgba(58,178,238,0.2)" : "rgba(99,223,189,0.2)",
                            color: ch.category === "vendor" ? "#3AB2EE" : "#63DFBD",
                          }}
                        >
                          {ch.category === "vendor" ? "Vendor" : "Digital"}
                        </p>
                      </div>
                      <div
                        className="flex-1 h-6 rounded overflow-hidden"
                        style={{ background: "rgba(255,255,255,0.1)" }}
                      >
                        <div
                          className="h-full rounded transition-all duration-1000"
                          style={{
                            width: `${(ch.amount / maxAmount) * 100}%`,
                            background:
                              ch.category === "vendor"
                                ? "linear-gradient(90deg, #3AB2EE, #FF7B5B)"
                                : "linear-gradient(90deg, #63DFBD, #E8D08A)",
                          }}
                        />
                      </div>
                      <div className="flex-shrink-0" style={{ width: "100px", textAlign: "right" }}>
                        <p
                          className="font-display font-bold text-sm"
                          style={{ color: ch.category === "vendor" ? "#3AB2EE" : "#63DFBD" }}
                        >
                          {formatRand(ch.amount)}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))
            : [...productionLines]
                .sort((a, b) => b.amount - a.amount)
                .map((item, i) => (
                  <FadeIn key={item.label} delay={i * 40}>
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 text-right" style={{ width: "220px" }}>
                        <p className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.92)" }}>
                          {item.label}
                        </p>
                        <p
                          className="text-[10px] px-1.5 py-0.5 rounded inline-block mt-0.5"
                          style={{ background: "rgba(99,223,189,0.2)", color: "#63DFBD" }}
                        >
                          Production
                        </p>
                      </div>
                      <div
                        className="flex-1 h-6 rounded overflow-hidden"
                        style={{ background: "rgba(255,255,255,0.1)" }}
                      >
                        <div
                          className="h-full rounded transition-all duration-1000"
                          style={{
                            width: `${(item.amount / maxProdAmount) * 100}%`,
                            background: "linear-gradient(90deg, #63DFBD, #E8D08A)",
                          }}
                        />
                      </div>
                      <div className="flex-shrink-0" style={{ width: "100px", textAlign: "right" }}>
                        <p className="font-display font-bold text-sm" style={{ color: "#63DFBD" }}>
                          {formatRand(item.amount)}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
        </div>

      </div>
    </section>
  );
}
