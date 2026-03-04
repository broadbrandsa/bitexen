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
  if (n >= 1000000) return `R${(n / 1000000).toFixed(2)}M`;
  return `R${(n / 1000).toFixed(0)}k`;
}

const productionLines = [
  { label: "Creative strategy / concept", amount: "R110,000" },
  { label: "Video production (hero film + social)", amount: "R530,000" },
  { label: "Digital creative (fan card tool, rich media, display)", amount: "R380,000" },
  { label: "AR experience + physical fan cards + print", amount: "R260,000" },
  { label: "Radio production, in-app UX, photography, contingency", amount: "R230,000" },
];

export function Budget() {
  return (
    <section id="budget" className="py-28 px-6 max-w-7xl mx-auto">
      <FadeIn>
        <p className="section-label mb-4">Budget Overview</p>
        <h2
          className="font-display font-black leading-none mb-16"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "var(--cream)" }}
        >
          R6,024,430
          <br />
          <span style={{ color: "rgba(255,255,255,0.2)" }}>TOTAL INVESTMENT</span>
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
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="20"
              />
              {/* Working media — orange */}
              <circle
                cx={CX}
                cy={CY}
                r={RADIUS}
                fill="none"
                stroke="#F04E23"
                strokeWidth="20"
                strokeDasharray={`${workingDash} ${workingGap}`}
                strokeLinecap="butt"
                transform={`rotate(-90 ${CX} ${CY})`}
              />
              {/* Production — gold */}
              <circle
                cx={CX}
                cy={CY}
                r={RADIUS}
                fill="none"
                stroke="#C9A84C"
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
                fill="#EDE8DF"
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
                fill="rgba(255,255,255,0.35)"
                fontSize="7"
                fontWeight="600"
                fontFamily="var(--font-sans)"
                letterSpacing="1"
              >
                TOTAL BUDGET
              </text>
            </svg>

            {/* Legend */}
            <div className="flex gap-6 mt-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm" style={{ background: "#F04E23" }} />
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Working Media 75%
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm" style={{ background: "#C9A84C" }} />
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Production 25%
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
                color: "#F04E23",
                sub: "Vendor media + digital performance",
              },
              {
                label: "Non-Working Production",
                amount: "R1,510,000",
                pct: "25%",
                color: "#C9A84C",
                sub: "Creative, video, AR, OOH, radio, photography",
              },
              {
                label: "Total",
                amount: "R6,024,430",
                pct: "100%",
                color: "rgba(255,255,255,0.4)",
                sub: "12-week full-funnel SA launch campaign",
              },
            ].map((row) => (
              <div
                key={row.label}
                className="rounded-xl p-5 flex items-center justify-between"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderLeft: `3px solid ${row.color}`,
                }}
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: row.color }}>
                    {row.label}
                  </p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                    {row.sub}
                  </p>
                </div>
                <div className="text-right">
                  <p
                    className="font-display font-black text-2xl"
                    style={{ color: "var(--cream)" }}
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

      <div className="divider mb-20" />

      {/* Media channel bar chart */}
      <FadeIn>
        <p className="section-label mb-4">Working Media — Channel Breakdown</p>
        <h3
          className="font-display font-black mb-10"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: "var(--cream)" }}
        >
          R4,514,430 ACROSS 12 CHANNELS
        </h3>
      </FadeIn>

      <div className="space-y-3 mb-20">
        {mediaChannels
          .sort((a, b) => b.amount - a.amount)
          .map((ch, i) => (
            <FadeIn key={ch.name} delay={i * 40}>
              <div className="flex items-center gap-4">
                <div
                  className="flex-shrink-0 text-right"
                  style={{ width: "220px" }}
                >
                  <p className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {ch.name}
                  </p>
                  <p
                    className="text-[10px] px-1.5 py-0.5 rounded inline-block mt-0.5"
                    style={{
                      background:
                        ch.category === "vendor"
                          ? "rgba(240,78,35,0.12)"
                          : "rgba(201,168,76,0.12)",
                      color: ch.category === "vendor" ? "var(--orange)" : "var(--gold)",
                    }}
                  >
                    {ch.category === "vendor" ? "Vendor" : "Digital"}
                  </p>
                </div>
                <div
                  className="flex-1 h-6 rounded overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  <div
                    className="h-full rounded transition-all duration-1000"
                    style={{
                      width: `${(ch.amount / maxAmount) * 100}%`,
                      background:
                        ch.category === "vendor"
                          ? "linear-gradient(90deg, #F04E23, #FF7B5B)"
                          : "linear-gradient(90deg, #C9A84C, #E8D08A)",
                    }}
                  />
                </div>
                <div className="flex-shrink-0" style={{ width: "80px", textAlign: "right" }}>
                  <p
                    className="font-display font-bold text-sm"
                    style={{ color: ch.category === "vendor" ? "var(--orange)" : "var(--gold)" }}
                  >
                    {formatRand(ch.amount)}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
      </div>

      <div className="divider mb-20" />

      {/* Production breakdown */}
      <FadeIn>
        <p className="section-label mb-8">Production Breakdown — R1,510,000</p>
      </FadeIn>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {productionLines.map((item, i) => (
          <FadeIn key={item.label} delay={i * 60}>
            <div
              className="rounded-xl p-5"
              style={{
                background: "var(--card-bg)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <p
                className="font-display font-black text-xl mb-2"
                style={{ color: "var(--gold)" }}
              >
                {item.amount}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                {item.label}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
