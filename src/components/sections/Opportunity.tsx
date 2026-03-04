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
  },
  {
    name: "VALR",
    position: "The Challenger",
    users: "1.7M+ registered",
    social: 46000,
    angle: "Serious trading infrastructure",
    weakness: "Rugby-focused, underdeveloped social, limited mainstream",
    color: "#7C3AED",
  },
  {
    name: "Binance",
    position: "The Global Giant",
    users: "N/A (global)",
    social: 175000,
    angle: "Education & community",
    weakness: "Regulatory uncertainty, no SA-specific strategy",
    color: "#F59E0B",
  },
  {
    name: "AltCoinTrader",
    position: "Local Player",
    users: "Niche",
    social: 29000,
    angle: "Local & trustworthy",
    weakness: "Limited scale, minimal innovation",
    color: "#6B7280",
  },
];

const maxSocial = 554000;

export function Opportunity() {
  return (
    <section id="opportunity" className="py-28 px-6 max-w-7xl mx-auto">
      {/* Section header */}
      <FadeIn>
        <p className="section-label mb-4">The Opportunity</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
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
          <p className="max-w-sm text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
            South Africa has 7.6 million crypto holders — 22% of the adult population.
            The core audience is young, male, mobile-first, and socially connected.
            The same profile as a passionate PSL football fan.
          </p>
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
              <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>
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

      {/* Competitor table */}
      <FadeIn delay={100}>
        <div
          className="rounded-2xl overflow-hidden border"
          style={{ borderColor: "rgba(255,255,255,0.07)", background: "var(--card-bg)" }}
        >
          <div
            className="grid text-[10px] font-bold uppercase tracking-[0.15em] px-6 py-4 border-b"
            style={{
              gridTemplateColumns: "1fr 1fr 1fr 2fr 2fr",
              borderColor: "rgba(255,255,255,0.07)",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            <span>Exchange</span>
            <span>Position</span>
            <span>Combined Social</span>
            <span>Core Angle</span>
            <span>Weakness</span>
          </div>

          {competitors.map((c, i) => (
            <div
              key={c.name}
              className="grid px-6 py-5 border-b items-start gap-2 hover:bg-white/[0.02] transition-colors"
              style={{
                gridTemplateColumns: "1fr 1fr 1fr 2fr 2fr",
                borderColor: "rgba(255,255,255,0.05)",
                borderBottomWidth: i === competitors.length - 1 ? 0 : 1,
              }}
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
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {c.position}
                </span>
                <br />
                <span className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.6)" }}>
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
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                {c.angle}
              </span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                {c.weakness}
              </span>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* The Gap callout */}
      <FadeIn delay={200}>
        <div
          className="mt-10 rounded-2xl p-8 md:p-12 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(240,78,35,0.12) 0%, rgba(201,168,76,0.08) 100%)",
            border: "1px solid rgba(240,78,35,0.25)",
          }}
        >
          <p className="section-label mb-4">The Gap</p>
          <blockquote
            className="font-display font-black leading-tight"
            style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.5rem)", color: "var(--cream)" }}
          >
            Luno owns simplicity.{" "}
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
    </section>
  );
}
