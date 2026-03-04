"use client";

import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";

const marketStats = [
  { value: "7.6M", label: "SA Crypto Holders", sub: "22% of adults 18–60" },
  { value: "37%", label: "of holders aged 25–34", sub: "83% are under 44" },
  { value: "72%", label: "use social media", sub: "for crypto news" },
  { value: "7.46M", label: "Soweto Derby viewers", sub: "per match" },
];

const competitors = [
  {
    name: "Luno",
    position: "The Incumbent",
    users: "6M+ onboarded",
    social: 554000,
    angle: "Simplicity & accessibility",
    weakness: "Entry-level perception, no sport/community angle",
    color: "#4B9EFF",
    detail: "Luno remains the most recognisable brand due to its early entry into the market. The platform has built a large user base by positioning itself as the easiest place for beginners to buy their first cryptocurrency. Education, accessibility, and simplicity have been central to its growth. However, the brand lacks a strong cultural narrative and is often perceived as an entry-level platform.",
  },
  {
    name: "VALR",
    position: "The Challenger",
    users: "1.7M+ registered",
    social: 46000,
    angle: "Serious trading infrastructure",
    weakness: "Rugby-focused, underdeveloped social, limited mainstream",
    color: "#7C3AED",
    detail: "VALR has positioned itself as a more advanced trading platform with stronger infrastructure and liquidity. Its brand partnerships have leaned heavily into rugby, appealing to a more affluent and experienced trading audience. While VALR has strong credibility among traders, it has not yet built a broad cultural identity in the mass market.",
  },
  {
    name: "Binance",
    position: "The Global Giant",
    users: "N/A (global)",
    social: 175000,
    angle: "Education & community",
    weakness: "Regulatory uncertainty, no SA-specific strategy",
    color: "#F59E0B",
    detail: "Binance, as the world\u2019s largest crypto exchange, operates at enormous global scale. Its strategy focuses on education, community building, and international partnerships. However, Binance\u2019s messaging is largely global rather than locally tailored to South African culture, and regulatory questions have occasionally impacted user trust in the market.",
  },
  {
    name: "AltCoinTrader",
    position: "Local Player",
    users: "Niche",
    social: 29000,
    angle: "Local & trustworthy",
    weakness: "Limited scale, minimal innovation",
    color: "#6B7280",
    detail: "AltCoinTrader represents a smaller local exchange that has built credibility among a niche group of traders. While trusted within its community, the platform has limited marketing scale and has not expanded significantly into mainstream consumer awareness.",
  },
];

const maxSocial = 554000;

const whyWinDemographics = ["Young", "Mobile-first", "Socially connected", "Digitally engaged"];

function CompetitorTable() {
  const [openRow, setOpenRow] = useState<string | null>(null);
  const toggle = (name: string) => setOpenRow((prev) => (prev === name ? null : name));

  return (
    <FadeIn delay={100}>
      <div
        className="rounded-2xl overflow-hidden border"
        style={{ borderColor: "rgba(255,255,255,0.07)", background: "var(--card-bg)" }}
      >
        {/* Header */}
        <div
          className="grid text-xs font-bold uppercase tracking-[0.12em] px-6 py-4 border-b"
          style={{
            gridTemplateColumns: "1fr 1fr 1fr 2fr 2fr 40px",
            borderColor: "rgba(255,255,255,0.07)",
            color: "rgba(255,255,255,0.75)",
          }}
        >
          <span>Exchange</span>
          <span>Position</span>
          <span>Combined Social</span>
          <span>Core Angle</span>
          <span>Weakness</span>
          <span />
        </div>

        {competitors.map((c, i) => {
          const isOpen = openRow === c.name;
          const isLast = i === competitors.length - 1;
          return (
            <div key={c.name}>
              {/* Main row */}
              <div
                className="grid px-6 py-5 items-start gap-2 cursor-pointer transition-colors"
                style={{
                  gridTemplateColumns: "1fr 1fr 1fr 2fr 2fr 40px",
                  borderBottom: isOpen || (!isLast)
                    ? "1px solid rgba(255,255,255,0.05)"
                    : "none",
                  background: isOpen ? "rgba(255,255,255,0.025)" : "transparent",
                }}
                onClick={() => toggle(c.name)}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="inline-block w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: c.color }}
                  />
                  <span className="font-bold text-sm" style={{ color: "var(--cream)" }}>
                    {c.name}
                  </span>
                </div>
                <div>
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.62)" }}>
                    {c.position}
                  </span>
                  <br />
                  <span className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.82)" }}>
                    {c.users}
                  </span>
                </div>
                <div>
                  <span className="text-sm font-bold" style={{ color: c.color }}>
                    {c.social.toLocaleString()}
                  </span>
                  <div
                    className="mt-1.5 h-1 rounded-full overflow-hidden"
                    style={{ background: "rgba(255,255,255,0.07)", width: "80px" }}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${(c.social / maxSocial) * 100}%`,
                        background: c.color,
                      }}
                    />
                  </div>
                </div>
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>
                  {c.angle}
                </span>
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.58)" }}>
                  {c.weakness}
                </span>
                {/* Expand arrow */}
                <div className="flex items-center justify-end">
                  <span
                    className="flex items-center justify-center rounded-full"
                    style={{
                      width: "32px",
                      height: "32px",
                      background: isOpen ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      color: "rgba(255,255,255,0.7)",
                      fontSize: "16px",
                      display: "inline-flex",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s, background 0.15s",
                      flexShrink: 0,
                    }}
                  >
                    ▾
                  </span>
                </div>
              </div>

              {/* Expanded detail row */}
              {isOpen && (
                <div
                  className="px-6 py-5"
                  style={{
                    borderBottom: isLast ? "none" : "1px solid rgba(255,255,255,0.05)",
                    background: "rgba(255,255,255,0.02)",
                    borderLeft: `3px solid ${c.color}`,
                  }}
                >
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                    {c.detail}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </FadeIn>
  );
}

export function Opportunity() {
  return (
    <section id="opportunity" className="py-28 px-6 max-w-7xl mx-auto">
      {/* Section header */}
      <FadeIn>
        <p className="section-label mb-4">The Opportunity</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <h2
            className="font-display font-black leading-none"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "var(--cream)" }}
          >
            AFRICA&apos;S MOST
            <br />
            <span className="text-orange-gradient">CRYPTO-ACTIVE</span>
            <br />
            MARKET.
          </h2>
          <p className="max-w-sm text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
            South Africa has 7.6 million crypto holders — 22% of the adult population.
            The core audience is young, male, mobile-first, and socially connected.
            The same profile as a passionate PSL football fan.
          </p>
        </div>
      </FadeIn>

      {/* Extended opportunity context */}
      <FadeIn delay={80}>
        <div
          className="rounded-2xl p-8 md:p-10 mb-16"
          style={{
            background: "var(--card-bg)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
                South Africa is widely regarded as the most mature crypto market on the African
                continent. Adoption has been driven by a combination of financial innovation,
                mobile-first behaviour, and strong online communities discussing digital assets.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
                Many South African crypto users first enter the market through mobile applications,
                peer networks, and social media conversations rather than traditional financial
                channels. Crypto discovery often happens through friends, online forums, Telegram
                groups, and influencer content.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
                This environment favours exchanges that are able to combine strong digital
                performance marketing with culturally relevant storytelling.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
                The South African audience is also highly familiar with mobile wallets, app-based
                banking, and digital financial services. This means that once users trust a
                platform, onboarding into crypto products can happen quickly.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
                For Bitexen, this creates an opportunity to combine two powerful forces: the
                rapid growth of crypto adoption and the emotional power of football fandom.
              </p>
              <p
                className="text-sm font-semibold leading-relaxed"
                style={{ color: "var(--gold)" }}
              >
                By linking these two worlds together through fan tokens, Bitexen can create a
                market position that no existing exchange currently owns.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Market stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
        {marketStats.map((stat, i) => (
          <FadeIn key={stat.label} delay={i * 80}>
            <div
              className="card-glow rounded-2xl p-6"
              style={{ background: "var(--card-bg)" }}
            >
              <p
                className="font-display font-black text-4xl leading-none mb-2"
                style={{ color: "var(--orange)" }}
              >
                {stat.value}
              </p>
              <p className="text-sm font-semibold" style={{ color: "var(--cream)" }}>
                {stat.label}
              </p>
              <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.75)" }}>
                {stat.sub}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="divider mb-20" />

      {/* Competitor Landscape */}
      <FadeIn>
        <p className="section-label mb-4">Competitor Landscape</p>
        <h3
          className="font-display font-black mb-10"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "var(--cream)" }}
        >
          WHO ALREADY OWNS THE CONVERSATION
        </h3>
      </FadeIn>

      {/* Competitor table — with expandable detail rows */}
      <CompetitorTable />

      {/* The Gap callout — unchanged */}
      <FadeIn delay={200}>
        <div
          className="mt-10 rounded-2xl p-8 md:p-12 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(58,178,238,0.12) 0%, rgba(99,223,189,0.08) 100%)",
            border: "1px solid rgba(58,178,238,0.25)",
          }}
        >
          <p className="section-label mb-4">The Gap</p>
          <blockquote
            className="font-display font-black leading-tight"
            style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.5rem)", color: "var(--cream)" }}
          >
            <span style={{ color: "rgba(255,255,255,0.3)" }}>Luno owns simplicity.</span>{" "}
            <span style={{ color: "rgba(255,255,255,0.3)" }}>VALR owns rugby.</span>{" "}
            <span style={{ color: "rgba(255,255,255,0.3)" }}>Binance owns education.</span>
            <br />
            <span className="text-orange-gradient">
              Nobody owns football. Nobody owns fan tokens. Nobody owns the culture.
            </span>
            <br />
            That&apos;s Bitexen&apos;s lane.
          </blockquote>
        </div>
      </FadeIn>

      {/* Why Bitexen Wins in South Africa — inserted after The Gap */}
      <FadeIn delay={100}>
        <div className="mt-16">
          <p className="section-label mb-4">Strategic Fit</p>
          <h3
            className="font-display font-black leading-none mb-12"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "var(--cream)" }}
          >
            WHY BITEXEN WINS
            <br />
            <span className="text-gold-gradient">IN SOUTH AFRICA</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <FadeIn delay={60}>
              <div
                className="rounded-2xl p-7 h-full"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <p
                  className="text-[10px] font-bold uppercase tracking-widest mb-4"
                  style={{ color: "var(--orange)" }}
                >
                  The Proven Model
                </p>
                <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.72)" }}>
                  Bitexen has already proven the fan token + football engagement model in Turkey,
                  where the platform has built partnerships with 16 professional football clubs
                  and millions of active users.
                </p>
                <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.72)" }}>
                  Through these partnerships, fan tokens allow supporters to do more than simply
                  follow their team. Fans can vote on club decisions, access exclusive experiences,
                  participate in digital activations, and become part of a living community around
                  the club.
                </p>
                <p className="text-sm font-semibold leading-relaxed" style={{ color: "var(--gold)" }}>
                  Instead of being passive spectators, supporters become participants.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={120}>
              <div
                className="rounded-2xl p-7 h-full"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <p
                  className="text-[10px] font-bold uppercase tracking-widest mb-4"
                  style={{ color: "var(--gold)" }}
                >
                  The Cultural Fit
                </p>
                <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.72)" }}>
                  This model has driven strong engagement in Turkey because football culture is
                  deeply social and community driven. Supporters want to feel closer to their
                  club, and fan tokens give them a mechanism to do exactly that.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
                  South Africa presents a very similar cultural landscape. Football is the largest
                  and most culturally influential sport in the country, with millions of fans
                  following clubs like Kaizer Chiefs, Orlando Pirates, and Mamelodi Sundowns
                  every week. Match days are social events, and fan identity plays a central role
                  in community life.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Demographics alignment */}
          <FadeIn delay={80}>
            <div
              className="rounded-2xl p-7 mb-8"
              style={{
                background: "linear-gradient(135deg, rgba(99,223,189,0.06) 0%, rgba(58,178,238,0.04) 100%)",
                border: "1px solid rgba(99,223,189,0.15)",
              }}
            >
              <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.72)" }}>
                The demographics of PSL supporters align almost perfectly with crypto adoption:
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {whyWinDemographics.map((d) => (
                  <span
                    key={d}
                    className="text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full"
                    style={{
                      background: "rgba(99,223,189,0.12)",
                      border: "1px solid rgba(99,223,189,0.25)",
                      color: "var(--gold)",
                    }}
                  >
                    {d}
                  </span>
                ))}
              </div>
              <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
                While most exchanges compete on product features, fees, or educational content,
                Bitexen enters the market with something different.
              </p>
            </div>
          </FadeIn>

          {/* Key statement */}
          <FadeIn delay={100}>
            <div
              className="rounded-2xl p-8 md:p-12 relative overflow-hidden"
              style={{
                background: "var(--card-bg)",
                border: "1px solid rgba(58,178,238,0.2)",
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(58,178,238,0.5), transparent)",
                }}
              />
              <p
                className="font-display font-black leading-none mb-6"
                style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", color: "var(--cream)" }}
              >
                Bitexen competes on
                <br />
                <span className="text-orange-gradient">culture and participation.</span>
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                  Fan tokens transform the relationship between supporters and clubs. Instead of
                  simply watching football, fans can influence it. That emotional connection is
                  far stronger than traditional crypto marketing.
                </p>
                <p className="text-sm leading-relaxed font-semibold" style={{ color: "var(--gold)" }}>
                  This is the strategic space Bitexen can own in South Africa.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </FadeIn>
    </section>
  );
}
