import { FadeIn } from "@/components/FadeIn";

const funnelStages = [
  { stage: "Impressions", volume: "80–100M", pct: 100, color: "#3AB2EE", sub: "All channels combined · R4,514,430 total media" },
  { stage: "Website Visits", volume: "200–350k", pct: 72, color: "#40B8E7", sub: "0.25–0.35% of impressions · Google + Programmatic + SEO" },
  { stage: "App Downloads", volume: "50–80k", pct: 58, color: "#46BEE1", sub: "15–25% of web visits · App Install + Paid Social" },
  { stage: "Registration Started", volume: "35–55k", pct: 46, color: "#4BC4DA", sub: "65–75% of downloads · Product UX/onboarding" },
  { stage: "KYC Completed", volume: "20–35k", pct: 36, color: "#51CAD3", sub: "55–65% of registrations · KYC flow quality" },
  { stage: "First Deposit", volume: "10–18k", pct: 26, color: "#57D0CC", sub: "50–55% of KYC complete · Trust signals" },
  { stage: "First Trade", volume: "8–15k", pct: 18, color: "#5DD7C5", sub: "80–85% of depositors · Market conditions" },
  { stage: "Fan Token Purchase", volume: "3–6k", pct: 12, color: "#63DFBD", sub: "25–40% of active traders · OnsideZA + fan token creative" },
];

const kpis = [
  {
    category: "Brand Awareness",
    metric: "Aided brand awareness (post-campaign)",
    target: "25–30%",
    note: "Fintech launch benchmarks in emerging markets: 20–35% in Q1",
  },
  {
    category: "Brand Awareness",
    metric: "Unaided brand recall",
    target: "8–12%",
    note: "Global average for new fintech brands at 90 days: 5–10%",
  },
  {
    category: "Digital Engagement",
    metric: "Social media followers (Meta + TikTok combined)",
    target: "50,000–75,000",
    note: "Crypto exchanges in new markets: 30k–80k in launch quarter",
  },
  {
    category: "Digital Engagement",
    metric: "Video completion rate (15s/30s)",
    target: "65–75%",
    note: "Industry benchmark: 15s = 70–80%; crypto content 5–10% above avg",
  },
  {
    category: "App Performance",
    metric: "App downloads (total, 12 weeks)",
    target: "50,000–80,000",
    note: "Luno SA hit ~100k in first 6 months",
  },
  {
    category: "App Performance",
    metric: "Blended CPI (direct channels)",
    target: "R15–R30",
    note: "SA fintech CPI ranges R15–R35; Google UAC typically lowest",
  },
  {
    category: "App Performance",
    metric: "Day 7 retention",
    target: "18–25%",
    note: "Global fintech D7 avg 15–20%; top crypto apps 20–28%",
  },
  {
    category: "Acquisition",
    metric: "KYC completed",
    target: "20,000–35,000",
    note: "SA fintech KYC completion: 50–70%",
  },
  {
    category: "Acquisition",
    metric: "First trade executed",
    target: "8,000–15,000",
    note: "Full-funnel CPA: R300–R565 vs R84–R197 digital-only",
  },
  {
    category: "Fan Tokens",
    metric: "First fan token purchase",
    target: "3,000–6,000",
    note: "Unique Bitexen differentiator; no direct SA benchmark",
  },
];

const categoryColors: Record<string, string> = {
  "Brand Awareness": "#3AB2EE",
  "Digital Engagement": "#63DFBD",
  "App Performance": "#6B9CF4",
  "Acquisition": "#70D9A0",
  "Fan Tokens": "#D46BF4",
};

export function SuccessMetrics() {
  return (
    <section id="success" className="py-28 px-6 max-w-7xl mx-auto">
      <FadeIn>
        <p className="section-label mb-4">Success Measures</p>
        <h2
          className="font-display font-black leading-none mb-6"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "var(--cream)" }}
        >
          HOW WE MEASURE
          <br />
          <span style={{ color: "rgba(255,255,255,0.2)" }}>WHAT MATTERS</span>
        </h2>
        <p className="text-sm max-w-lg leading-relaxed mb-16" style={{ color: "rgba(255,255,255,0.4)" }}>
          Every Rand tracked from impression to app install to first trade. End-to-end funnel
          attribution across all paid channels with weekly performance reporting.
        </p>
      </FadeIn>

      {/* Funnel visualization */}
      <FadeIn delay={100}>
        <p className="section-label mb-8">User Acquisition Funnel</p>
        <div className="space-y-1.5 mb-20">
          {funnelStages.map((stage, i) => (
            <div key={stage.stage} className="flex items-center gap-5">
              {/* Bar */}
              <div
                className="flex-1 relative flex items-center"
                style={{ height: "44px" }}
              >
                {/* Track */}
                <div
                  className="absolute inset-0 rounded-lg"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                />
                {/* Fill — centered funnel effect */}
                <div
                  className="absolute top-0 bottom-0 rounded-lg transition-all duration-1000"
                  style={{
                    left: `${(100 - stage.pct) / 2}%`,
                    right: `${(100 - stage.pct) / 2}%`,
                    background: `linear-gradient(90deg, transparent, ${stage.color}22, ${stage.color}55, ${stage.color}22, transparent)`,
                    borderLeft: `2px solid ${stage.color}40`,
                    borderRight: `2px solid ${stage.color}40`,
                  }}
                />
                {/* Stage label inside */}
                <div className="relative z-10 flex items-center justify-between w-full px-4">
                  <div className="flex items-center gap-3">
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider"
                      style={{ color: "rgba(255,255,255,0.35)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.7)" }}>
                      {stage.stage}
                    </span>
                  </div>
                  <span
                    className="font-display font-black text-sm"
                    style={{ color: stage.color }}
                  >
                    {stage.volume}
                  </span>
                </div>
              </div>
              {/* Sub text */}
              <div className="hidden md:block w-64 flex-shrink-0">
                <p className="text-[10px] leading-relaxed" style={{ color: "rgba(255,255,255,0.25)" }}>
                  {stage.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* CPA summary */}
      <FadeIn delay={100}>
        <div className="grid md:grid-cols-2 gap-4 mb-20">
          <div
            className="rounded-2xl p-7"
            style={{
              background: "var(--card-bg)",
              border: "1px solid rgba(58,178,238,0.2)",
            }}
          >
            <p className="section-label mb-3">Full-Funnel CPA</p>
            <p
              className="font-display font-black text-5xl mb-2"
              style={{ color: "var(--orange)" }}
            >
              R300–R565
            </p>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
              Cost per first trade against R4,514,430 total media investment.
              Global crypto exchange CPA ranges R100–R500 in mature markets. Higher for new-market launches.
            </p>
          </div>
          <div
            className="rounded-2xl p-7"
            style={{
              background: "var(--card-bg)",
              border: "1px solid rgba(99,223,189,0.2)",
            }}
          >
            <p className="section-label mb-3">Digital-Only CPA</p>
            <p
              className="font-display font-black text-5xl mb-2"
              style={{ color: "var(--gold)" }}
            >
              R84–R197
            </p>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
              Cost per first trade against R1,575,000 digital performance spend only.
              SA fintech CPAs average R180–R350.
            </p>
          </div>
        </div>
      </FadeIn>

      <div className="divider mb-20" />

      {/* KPI table */}
      <FadeIn>
        <p className="section-label mb-8">KPI Framework</p>
      </FadeIn>
      <FadeIn delay={100}>
        <div
          className="rounded-2xl overflow-hidden border"
          style={{ borderColor: "rgba(255,255,255,0.07)", background: "var(--card-bg)" }}
        >
          <div
            className="grid text-[9px] font-bold uppercase tracking-[0.15em] px-6 py-4 border-b"
            style={{
              gridTemplateColumns: "1fr 2fr 1fr 2fr",
              borderColor: "rgba(255,255,255,0.07)",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            <span>Category</span>
            <span>Metric</span>
            <span>Target</span>
            <span>Benchmark</span>
          </div>
          {kpis.map((kpi, i) => (
            <div
              key={`${kpi.category}-${kpi.metric}`}
              className="grid px-6 py-4 border-b items-start"
              style={{
                gridTemplateColumns: "1fr 2fr 1fr 2fr",
                borderColor: "rgba(255,255,255,0.04)",
                borderBottomWidth: i === kpis.length - 1 ? 0 : 1,
              }}
            >
              <div>
                <span
                  className="text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wide"
                  style={{
                    background: `${categoryColors[kpi.category]}18`,
                    color: categoryColors[kpi.category],
                  }}
                >
                  {kpi.category}
                </span>
              </div>
              <p className="text-xs pr-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                {kpi.metric}
              </p>
              <p className="font-display font-bold text-sm" style={{ color: "var(--orange)" }}>
                {kpi.target}
              </p>
              <p className="text-[11px] leading-relaxed" style={{ color: "rgba(255,255,255,0.3)" }}>
                {kpi.note}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Reporting cadence */}
      <FadeIn delay={100}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
          {[
            { frequency: "Daily", type: "Dashboard", desc: "Spend pacing, CPI, app installs, social metrics" },
            { frequency: "Weekly", type: "Performance Report", desc: "Channel-level performance, funnel analysis, optimisation actions" },
            { frequency: "Monthly", type: "Strategic Review", desc: "Full funnel, creative performance, audience insights, competitive landscape" },
            { frequency: "Week 13", type: "Post-Campaign Report", desc: "Comprehensive analysis, brand survey results, ROI, Phase 2 recommendations" },
          ].map((item) => (
            <div
              key={item.type}
              className="rounded-xl p-5"
              style={{
                background: "var(--card-bg)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <p
                className="font-display font-black text-xl mb-1"
                style={{ color: "var(--orange)" }}
              >
                {item.frequency}
              </p>
              <p className="text-xs font-bold mb-2" style={{ color: "var(--cream)" }}>
                {item.type}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
