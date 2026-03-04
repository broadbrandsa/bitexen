"use client";

import { useState } from "react";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";

const channelExecutions = [
  {
    channel: "TV / Digital Video",
    detail:
      "Hero film 'The Promotion' (60s) airs during PSL match broadcasts on DStv. 30s cutdowns for YouTube pre-roll and social. 15s edits for TikTok and Instagram Stories — each following a different fan archetype.",
  },
  {
    channel: "OOH / DOOH",
    detail:
      "'Starting XI + 1' digital billboards and transit media across stadium routes and taxi corridors in Gauteng and KZN. Position 12 is yours. Real fan names from token holders appear once the campaign goes live.",
  },
  {
    channel: "Radio",
    detail:
      "'The Call-Up' — styled as a manager's press conference. Running across Mediamark stations including East Coast Radio and Jacaranda FM during drive-time programming.",
  },
  {
    channel: "Social (#Promoted)",
    detail:
      "Fans create their own '12th Man' player card. Upload a selfie, enter supporter stats, generate a matchday-style player card. Shareable, tradeable as NFTs on Bitexen. Best cards on the stadium big screen.",
  },
  {
    channel: "AR Experience",
    detail:
      "Every print touchpoint doubles as an AR trigger via the Bitexen app camera. Fan cards, newspaper ads, and OOH posters all come alive. Physical-to-digital collection loop driving app opens.",
  },
  {
    channel: "In-App: The Dugout",
    detail:
      "A dedicated section inside Bitexen for token holders to access governance votes, exclusive content, and community features. Earn 'caps' per interaction. Leaderboards, VIP match-day experiences.",
  },
];

const phases = [
  {
    label: "Phase A",
    name: "Hype",
    timing: "4 weeks pre-launch",
    description:
      "Teaser OOH and social. 'Something is changing in SA football.' Cryptic stadium graphics showing '11 + ?'. Fan card generator launches as early access tied to Bitexen app downloads. Build the waitlist.",
    detail:
      "The first phase builds curiosity before the Bitexen brand is fully revealed. Teaser messaging appears across outdoor placements and social channels, hinting that something is changing in South African football. The objective is to spark conversation and prepare the market for the launch moment.",
  },
  {
    label: "Phase B",
    name: "Launch",
    timing: "Match Day",
    description:
      "Hero film drops. Broadcast takeover goes live during PSL match. First governance vote opens. Stadium activations with physical fan cards and QR airdrops. Drive-time radio flights begin across East Coast Radio and Jacaranda FM. PR push: 'First time fans have had real decision-making power in SA football.'",
    detail:
      "The launch phase introduces Bitexen to the market at maximum scale. The hero film premieres during a PSL broadcast, placing the campaign in front of millions of football fans at a moment of peak cultural attention.",
  },
  {
    label: "Phase C",
    name: "Sustain",
    timing: "Ongoing",
    description:
      "Monthly governance votes. New fan card drops each month. Leaderboard rewards. Expand to additional PSL clubs. Content series following real fans who have become active club decision-makers through their tokens.",
    detail:
      "Once the platform is established in the market, digital channels take the lead. Retargeting audiences built during the earlier phases are converted into app installs, KYC completions, and first trades while fan token activations maintain community engagement.",
  },
];

const alternativeConcepts = [
  {
    name: "Own the Game",
    line: "Own the Game.",
    insight:
      "Football in South Africa has always belonged to the people. Clubs like Chiefs and Pirates were built by communities who had nothing but were given no say. Fan tokens flip that history: for the first time, fans don't just support the club. They own a piece of it.",
    hero: "A 60s film opening on archival footage of township football. Voiceover in Zulu, subtitled: 'We built these clubs with our voices. Our feet on the terraces. Our Rands at the gate.' Cut to modern day. A phone screen lights up showing a fan token. 'Now we're owners.'",
    use: "Brand-level storytelling and documentary-style long-form assets",
  },
  {
    name: "Vala Golo",
    line: "Vala Golo. Your crypto, locked down.",
    insight:
      "'Vala golo' is township slang for when a goalkeeper makes an impossible save. In a market where crypto scams (Mirror Trading International wiped out billions in SA) have made people afraid to invest, the biggest barrier is trust.",
    hero: "Rapid-cut film intercutting legendary PSL goalkeeper saves with Bitexen security features. Each save matched to a protection layer: cold wallet storage, KYC, insurance (Bitexen + eInsurer via Hollard and iToo), 2FA. Crowd screams 'VALA GOLO!' after each.",
    use: "Phase 2 trust and conversion campaign, especially as a vehicle for the eInsurer proposition",
  },
];

type PhaseEntry = typeof phases[0];

function PhaseCard({ phase, i }: { phase: PhaseEntry; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-2xl p-7 h-full flex flex-col relative overflow-hidden"
      style={{
        background: "var(--card-bg)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{
          background:
            i === 0
              ? "linear-gradient(90deg, transparent, var(--orange), transparent)"
              : i === 1
              ? "linear-gradient(90deg, transparent, var(--gold), transparent)"
              : "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
        }}
      />
      <div className="flex items-baseline gap-3 mb-4">
        <span
          className="font-display font-black text-4xl"
          style={{
            color: i === 0 ? "var(--orange)" : i === 1 ? "var(--gold)" : "rgba(255,255,255,0.2)",
          }}
        >
          {phase.label}
        </span>
        <span
          className="font-display font-black text-xl tracking-wide"
          style={{ color: "var(--cream)" }}
        >
          {phase.name.toUpperCase()}
        </span>
      </div>
      <p
        className="text-[10px] font-bold tracking-widest uppercase mb-4"
        style={{ color: "rgba(255,255,255,0.25)" }}
      >
        {phase.timing}
      </p>
      <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>
        {phase.description}
      </p>

      {/* Detail accordion */}
      <div
        className="mt-auto rounded-xl overflow-hidden"
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
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            More Detail
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
            <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>
              {phase.detail}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function ConceptCard({ c }: { c: typeof alternativeConcepts[0] }) {
  const [insightOpen, setInsightOpen] = useState(false);
  const [heroOpen, setHeroOpen] = useState(false);

  return (
    <div
      className="rounded-2xl p-8"
      style={{
        background: "var(--card-bg)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <p className="section-label mb-3">{c.name}</p>
      <p
        className="font-editorial text-xl mb-6"
        style={{ color: "var(--gold)" }}
      >
        {c.line}
      </p>

      {/* The Insight accordion */}
      <div
        className="mb-3 rounded-xl overflow-hidden"
        style={{ border: "1px solid rgba(255,255,255,0.07)" }}
      >
        <button
          onClick={() => setInsightOpen((v) => !v)}
          className="w-full flex items-center justify-between px-4 py-3 text-left transition-colors"
          style={{
            background: insightOpen ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
          }}
        >
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            The Insight
          </span>
          <span
            className="text-xs transition-transform duration-200"
            style={{
              color: "rgba(255,255,255,0.35)",
              transform: insightOpen ? "rotate(180deg)" : "rotate(0deg)",
              display: "inline-block",
            }}
          >
            ▾
          </span>
        </button>
        {insightOpen && (
          <div
            className="px-4 pb-4 pt-3"
            style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
          >
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              {c.insight}
            </p>
          </div>
        )}
      </div>

      {/* Hero Film accordion */}
      <div
        className="mb-6 rounded-xl overflow-hidden"
        style={{ border: "1px solid rgba(255,255,255,0.07)" }}
      >
        <button
          onClick={() => setHeroOpen((v) => !v)}
          className="w-full flex items-center justify-between px-4 py-3 text-left transition-colors"
          style={{
            background: heroOpen ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
          }}
        >
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Hero Film
          </span>
          <span
            className="text-xs transition-transform duration-200"
            style={{
              color: "rgba(255,255,255,0.35)",
              transform: heroOpen ? "rotate(180deg)" : "rotate(0deg)",
              display: "inline-block",
            }}
          >
            ▾
          </span>
        </button>
        {heroOpen && (
          <div
            className="px-4 pb-4 pt-3"
            style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
          >
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              {c.hero}
            </p>
          </div>
        )}
      </div>

      <p
        className="text-xs px-3 py-1.5 rounded-full inline-block"
        style={{
          background: "rgba(99,223,189,0.1)",
          border: "1px solid rgba(99,223,189,0.2)",
          color: "var(--gold)",
        }}
      >
        Potential use: {c.use}
      </p>
    </div>
  );
}

export function Campaign() {
  return (
    <section id="campaign" className="relative overflow-hidden">

      {/* Background image — right edge, behind all content */}
      <div
        className="absolute top-0 right-0 h-full pointer-events-none select-none"
        style={{ width: "42vw", zIndex: 0 }}
      >
        <Image
          src="/images/pexels_320-69a81eeb279cca73a840050d@2x.png"
          alt=""
          fill
          className="object-cover object-left"
          style={{ opacity: 0.18 }}
          sizes="42vw"
        />
        {/* Fade out towards left so image doesn't clash with text */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, var(--background, #0a0a0a) 0%, transparent 40%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative py-28 px-6 max-w-7xl mx-auto" style={{ zIndex: 1 }}>
      {/* Header */}
      <FadeIn>
        <p className="section-label mb-4">Creative Concept</p>
        <h2
          className="font-display font-black leading-none mb-6"
          style={{ fontSize: "clamp(3rem, 8vw, 8rem)", color: "var(--cream)" }}
        >
          THE 12TH MAN
        </h2>
        <div
          className="h-px mb-8"
          style={{
            background: "linear-gradient(90deg, rgba(58,178,238,0.6), transparent)",
          }}
        />
      </FadeIn>

      {/* Insight + Campaign line */}
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <FadeIn>
          <p className="section-label mb-3">The Insight</p>
          <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            In football, the &quot;12th man&quot; is the crowd. The fans who change the outcome
            of a match through sheer force of will. But that influence has always been
            metaphorical. Fan tokens make it literal. You vote. You decide.
            You&apos;re on the team sheet.
          </p>
        </FadeIn>
        <FadeIn delay={150}>
          <p className="section-label mb-3">The Line</p>
          <blockquote
            className="font-editorial leading-tight"
            style={{
              fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
              color: "var(--gold)",
              lineHeight: 1.2,
            }}
          >
            &ldquo;The 12th Man just got promoted.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
            Hero Film: &quot;The Promotion&quot; — A mockumentary-style 60s film following a real
            die-hard fan through his matchday ritual. The twist: he opens his Bitexen app
            and casts a vote on the club&apos;s new community project.
            <br />
            <em style={{ color: "rgba(255,255,255,0.5)" }}>
              &quot;Season ticket holder since 1994. Club decision-maker since today.&quot;
            </em>
          </p>
        </FadeIn>
      </div>

      {/* Campaign Phases */}
      <FadeIn>
        <p className="section-label mb-8">Campaign Phases</p>
      </FadeIn>
      <div className="grid md:grid-cols-3 gap-4 mb-20">
        {phases.map((phase, i) => (
          <FadeIn key={phase.name} delay={i * 100}>
            <PhaseCard phase={phase} i={i} />
          </FadeIn>
        ))}
      </div>

      <div className="divider mb-20" />

      {/* Channel executions */}
      <FadeIn>
        <p className="section-label mb-8">Channel Executions</p>
      </FadeIn>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
        {channelExecutions.map((item, i) => (
          <FadeIn key={item.channel} delay={i * 60}>
            <div
              className="card-glow rounded-xl p-6 h-full"
              style={{ background: "var(--card-bg)" }}
            >
              <p
                className="font-display font-bold text-base tracking-wide mb-3"
                style={{ color: "var(--orange)" }}
              >
                {item.channel}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                {item.detail}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="divider mb-20" />

      {/* Why This Concept Wins */}
      <FadeIn>
        <p className="section-label mb-6">Why This Concept Wins</p>
      </FadeIn>
      <div className="grid md:grid-cols-5 gap-4 mb-24">
        {[
          { num: "01", text: "Universal but local. '12th Man' is understood by every football fan on earth, but the SA execution makes it unmistakably South African." },
          { num: "02", text: "Participatory, not passive. Every activation drives a real action: download, create a card, cast a vote, collect a token." },
          { num: "03", text: "Avoids every crypto cliche. No rockets, no moons, no lambos. It's about football. The blockchain is invisible. The fan experience is everything." },
          { num: "04", text: "It scales. Start with one club. Add more. Every new partnership is a new 12th Man squad, a new set of fan cards, a new community." },
          { num: "05", text: "Measurable. Every fan card = an app download. Every vote = an engaged token holder. Every trade = platform activity. Creative and KPIs are the same thing." },
        ].map((item, i) => (
          <FadeIn key={item.num} delay={i * 70}>
            <div
              className="rounded-xl p-5 h-full"
              style={{
                background: "var(--card-bg)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <p
                className="font-display font-black text-2xl mb-3"
                style={{ color: "rgba(58,178,238,1)" }}
              >
                {item.num}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,1)" }}>
                {item.text}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Alternative concepts */}
      <FadeIn>
        <p className="section-label mb-8">Alternative Concepts</p>
      </FadeIn>
      <div className="grid md:grid-cols-2 gap-6">
        {alternativeConcepts.map((c, i) => (
          <FadeIn key={c.name} delay={i * 120}>
            <ConceptCard c={c} />
          </FadeIn>
        ))}
      </div>
      </div>
    </section>
  );
}
