"use client";

import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";

// 12-week schedule: weeks 1-12, true = active
const timeline = [
  {
    channel: "Radio (ECR + Jacaranda FM)",
    category: "ATL",
    weeks: [1,1,1,1,1,1,0,0,0,0,0,0],
  },
  {
    channel: "Outdoor / OOH (Polygon)",
    category: "ATL",
    weeks: [1,1,1,1,1,1,1,1,0,0,0,0],
  },
  {
    channel: "DStv / SuperSport",
    category: "ATL",
    weeks: [0,0,1,1,1,1,1,1,0,0,0,0],
  },
  {
    channel: "SABC+ Streaming",
    category: "ATL",
    weeks: [0,0,1,1,1,1,1,1,0,0,0,0],
  },
  {
    channel: "Mediamark Digital",
    category: "Digital",
    weeks: [0,0,1,1,1,1,1,1,1,1,0,0],
  },
  {
    channel: "OnsideZA Podcast",
    category: "Digital",
    weeks: [0,0,1,1,1,1,1,1,1,1,0,0],
  },
  {
    channel: "Paid Social (Meta + TikTok)",
    category: "Digital",
    weeks: [1,1,1,1,1,1,1,1,1,1,1,1],
  },
  {
    channel: "Programmatic Display & Video",
    category: "Digital",
    weeks: [0,0,1,1,1,1,1,1,1,1,1,1],
  },
  {
    channel: "Google Search & YouTube",
    category: "Digital",
    weeks: [0,0,1,1,1,1,1,1,1,1,1,1],
  },
  {
    channel: "Influencer & Creators",
    category: "Digital",
    weeks: [1,1,1,1,1,1,1,1,1,1,0,0],
  },
  {
    channel: "Content & SEO",
    category: "Digital",
    weeks: [1,1,1,1,1,1,1,1,1,1,1,1],
  },
  {
    channel: "App Install / Performance",
    category: "Digital",
    weeks: [0,0,0,0,0,0,1,1,1,1,1,1],
  },
];

const phases = [
  { label: "Phase 1: Launch", weeks: [1, 2], color: "rgba(58,178,238,0.15)", border: "rgba(58,178,238,0.4)" },
  { label: "Phase 2: Amplify", weeks: [3, 6], color: "rgba(99,223,189,0.1)", border: "rgba(99,223,189,0.35)" },
  { label: "Phase 3: Convert & Sustain", weeks: [7, 12], color: "rgba(255,255,255,0.03)", border: "rgba(255,255,255,0.1)" },
];

const vendorMedia = [
  { partner: "DStv Media Sales", channel: "Linear TV, DStv Stream, CTV, Sport", amount: "R1,201,000" },
  { partner: "Mediamark Audio", channel: "Radio (ECR + Jacaranda FM)", amount: "R400,230" },
  { partner: "Mediamark Digital", channel: "Display, Digital Audio, Video", amount: "R393,200" },
  { partner: "OnsideZA", channel: "Sports Podcast / YouTube", amount: "R345,000" },
  { partner: "SABC+", channel: "Streaming Video", amount: "R200,000" },
  { partner: "Polygon", channel: "Outdoor / OOH", amount: "R400,000" },
];

const digitalPerf = [
  { channel: "Paid Social (Meta, TikTok)", amount: "R567,000" },
  { channel: "Programmatic Display and Video", amount: "R315,000" },
  { channel: "Google Search and YouTube", amount: "R252,000" },
  { channel: "Influencer and Creator Partnerships", amount: "R189,000" },
  { channel: "Content and SEO", amount: "R126,000" },
  { channel: "Performance / App Install", amount: "R126,000" },
];

type PhaseItem = { phase: string; title: string; sub: string; color: string; body: string };

function PhaseCard({ p }: { p: PhaseItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-2xl p-6"
      style={{
        background: "var(--card-bg)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderTop: `2px solid ${p.color}`,
      }}
    >
      <p className="section-label mb-1">{p.phase}</p>
      <p className="font-display font-black text-lg mb-1" style={{ color: "var(--cream)" }}>
        {p.title}
      </p>
      <p className="text-xs font-semibold mb-4" style={{ color: p.color }}>
        {p.sub}
      </p>

      {/* Description accordion */}
      <div
        className="rounded-xl overflow-hidden"
        style={{ border: "1px solid rgba(255,255,255,0.07)" }}
      >
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center justify-between px-4 py-3 text-left transition-colors"
          style={{
            background: open ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
          }}
        >
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Description
          </span>
          <span
            className="text-xs"
            style={{
              color: "rgba(255,255,255,0.3)",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              display: "inline-block",
              transition: "transform 0.2s",
            }}
          >
            ▾
          </span>
        </button>
        {open && (
          <div
            className="px-4 pb-4 pt-3"
            style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
          >
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              {p.body}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export function MediaPlan() {
  return (
    <section id="media-plan" className="py-28 px-6 max-w-7xl mx-auto">
      <FadeIn>
        <p className="section-label mb-4">Media Plan</p>
        <h2
          className="font-display font-black leading-none mb-4"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "var(--cream)" }}
        >
          12-WEEK
          <br />
          <span style={{ color: "rgba(255,255,255,0.2)" }}>CAMPAIGN ROLLOUT</span>
        </h2>
        <p className="text-sm mb-16 max-w-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
          ATL builds the wave. Digital rides it for three full months. No media Rand
          is spent without a digital capture mechanism running alongside it.
        </p>
      </FadeIn>

      {/* Timeline grid */}
      <FadeIn delay={100}>
        <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
          <table className="w-full" style={{ minWidth: "700px" }}>
            <thead>
              <tr style={{ background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                <th
                  className="text-left px-5 py-4 text-[10px] font-bold uppercase tracking-[0.15em]"
                  style={{ color: "rgba(255,255,255,0.3)", width: "200px" }}
                >
                  Channel
                </th>
                {Array.from({ length: 12 }, (_, i) => (
                  <th
                    key={i}
                    className="text-center text-[10px] font-bold py-4"
                    style={{
                      color: "rgba(255,255,255,0.35)",
                      width: "44px",
                    }}
                  >
                    W{i + 1}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timeline.map((row, ri) => (
                <tr
                  key={row.channel}
                  className="border-b"
                  style={{ borderColor: "rgba(255,255,255,0.04)" }}
                >
                  <td className="px-5 py-3">
                    <p className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.65)" }}>
                      {row.channel}
                    </p>
                    <p
                      className="text-[9px] mt-0.5 font-bold uppercase tracking-wide"
                      style={{ color: row.category === "ATL" ? "rgba(58,178,238,0.5)" : "rgba(99,223,189,0.5)" }}
                    >
                      {row.category}
                    </p>
                  </td>
                  {row.weeks.map((active, wi) => (
                    <td key={wi} className="px-1 py-3 text-center">
                      {active ? (
                        <div
                          className="mx-auto rounded-sm"
                          style={{
                            width: "28px",
                            height: "18px",
                            background:
                              row.category === "ATL"
                                ? "rgba(58,178,238,0.75)"
                                : "rgba(99,223,189,0.65)",
                          }}
                        />
                      ) : (
                        <div
                          className="mx-auto rounded-sm"
                          style={{
                            width: "28px",
                            height: "18px",
                            background: "rgba(255,255,255,0.04)",
                          }}
                        />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Phase legend */}
        <div className="flex flex-wrap gap-6 mt-5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-3 rounded-sm" style={{ background: "rgba(58,178,238,0.75)" }} />
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>ATL — radio, TV, OOH</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-3 rounded-sm" style={{ background: "rgba(99,223,189,0.65)" }} />
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Digital — social, programmatic, search</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-3 rounded-sm" style={{ background: "rgba(255,255,255,0.04)" }} />
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>Inactive</span>
          </div>
        </div>
      </FadeIn>

      {/* Phase descriptions */}
      <div className="grid md:grid-cols-3 gap-4 mt-14 mb-20">
        {[
          {
            phase: "Phase 1",
            title: "Launch — Weeks 1–2",
            sub: "Radio, Outdoor, Digital",
            color: "var(--orange)",
            body: "Radio and outdoor create immediate mass awareness. The '12th Man' message hits commuters, taxi routes, and stadium surrounds before a ball is kicked. Digital captures interest from day one.",
          },
          {
            phase: "Phase 2",
            title: "Amplify — Weeks 3–6",
            sub: "Television Joins the Mix",
            color: "var(--gold)",
            body: "Television enters once radio and outdoor have primed the market. Hero film 'The Promotion' debuts during a PSL broadcast. Full media weight now active. ATL drives top-of-funnel, digital captures demand in real time.",
          },
          {
            phase: "Phase 3",
            title: "Convert & Sustain — Weeks 7–12",
            sub: "Digital Leads",
            color: "rgba(255,255,255,0.4)",
            body: "ATL winds down but digital continues at full intensity. Retargeting pools built over Weeks 1–6 are now mature. Conversion campaigns push users from download to KYC to first deposit to first trade.",
          },
        ].map((p) => (
          <FadeIn key={p.phase} delay={100}>
            <PhaseCard p={p} />
          </FadeIn>
        ))}
      </div>

      <div className="divider mb-20" />

      {/* Media strategy context — inserted above vendor table */}
      <FadeIn>
        <div className="mb-12">
          <p className="section-label mb-6">Media Strategy</p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-4">
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                The media strategy combines high-impact broadcast exposure with digital performance
                channels designed to capture installs and conversions.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                Premium sports inventory plays a central role in the strategy. DStv and SuperSport
                provide access to live PSL audiences, placing the campaign directly in front of
                the country&apos;s most passionate football viewers during match broadcasts.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                Radio placements through Mediamark, including East Coast Radio and Jacaranda FM,
                extend campaign reach during daily commuting hours when audiences are highly
                engaged with sports discussion and match coverage.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                Digital media partnerships further reinforce the football connection. Platforms
                such as OnsideZA provide access to highly engaged sports communities through
                podcasts, YouTube content, and social distribution.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                Streaming placements on SABC+ ensure the campaign reaches younger digital-first
                audiences who increasingly consume sport through online platforms rather than
                traditional television.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                Outdoor media, delivered through Polygon, focuses on commuter routes, stadium
                corridors, and high-density urban environments where football audiences travel
                on match days.
              </p>
            </div>
          </div>
          <div
            className="rounded-xl p-5"
            style={{
              background: "rgba(58,178,238,0.05)",
              border: "1px solid rgba(58,178,238,0.15)",
            }}
          >
            <p className="text-sm leading-relaxed font-semibold" style={{ color: "var(--gold)" }}>
              Together, these channels create a layered media ecosystem where broadcast builds
              mass awareness and digital platforms convert interest into downloads and platform
              activity.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Vendor + Digital tables side by side */}
      <div className="grid md:grid-cols-2 gap-8">
        <FadeIn>
          <p className="section-label mb-5">Vendor Media</p>
          <div
            className="rounded-2xl overflow-hidden border"
            style={{ borderColor: "rgba(255,255,255,0.07)", background: "var(--card-bg)" }}
          >
            <div
              className="grid text-[9px] font-bold uppercase tracking-[0.15em] px-5 py-3 border-b"
              style={{
                gridTemplateColumns: "1.5fr 1.5fr 1fr",
                borderColor: "rgba(255,255,255,0.07)",
                color: "rgba(255,255,255,0.3)",
              }}
            >
              <span>Partner</span>
              <span>Channel</span>
              <span className="text-right">Amount</span>
            </div>
            {vendorMedia.map((row, i) => (
              <div
                key={row.partner}
                className="grid px-5 py-3.5 border-b items-center"
                style={{
                  gridTemplateColumns: "1.5fr 1.5fr 1fr",
                  borderColor: "rgba(255,255,255,0.05)",
                  borderBottomWidth: i === vendorMedia.length - 1 ? 0 : 1,
                }}
              >
                <p className="text-xs font-bold" style={{ color: "var(--cream)" }}>
                  {row.partner}
                </p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {row.channel}
                </p>
                <p
                  className="text-xs font-bold text-right"
                  style={{ color: "var(--orange)" }}
                >
                  {row.amount}
                </p>
              </div>
            ))}
            <div
              className="grid px-5 py-3.5"
              style={{ gridTemplateColumns: "1.5fr 1.5fr 1fr" }}
            >
              <p className="text-xs font-black" style={{ color: "var(--cream)" }}>
                TOTAL
              </p>
              <span />
              <p className="text-xs font-black text-right" style={{ color: "var(--orange)" }}>
                R2,939,430
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <p className="section-label mb-5">Digital Performance</p>
          <div
            className="rounded-2xl overflow-hidden border"
            style={{ borderColor: "rgba(255,255,255,0.07)", background: "var(--card-bg)" }}
          >
            <div
              className="grid text-[9px] font-bold uppercase tracking-[0.15em] px-5 py-3 border-b"
              style={{
                gridTemplateColumns: "2fr 1fr",
                borderColor: "rgba(255,255,255,0.07)",
                color: "rgba(255,255,255,0.3)",
              }}
            >
              <span>Channel</span>
              <span className="text-right">Amount</span>
            </div>
            {digitalPerf.map((row, i) => (
              <div
                key={row.channel}
                className="grid px-5 py-3.5 border-b items-center"
                style={{
                  gridTemplateColumns: "2fr 1fr",
                  borderColor: "rgba(255,255,255,0.05)",
                  borderBottomWidth: i === digitalPerf.length - 1 ? 0 : 1,
                }}
              >
                <p className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {row.channel}
                </p>
                <p
                  className="text-xs font-bold text-right"
                  style={{ color: "var(--gold)" }}
                >
                  {row.amount}
                </p>
              </div>
            ))}
            <div
              className="grid px-5 py-3.5"
              style={{ gridTemplateColumns: "2fr 1fr" }}
            >
              <p className="text-xs font-black" style={{ color: "var(--cream)" }}>
                TOTAL
              </p>
              <p className="text-xs font-black text-right" style={{ color: "var(--gold)" }}>
                R1,575,000
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
