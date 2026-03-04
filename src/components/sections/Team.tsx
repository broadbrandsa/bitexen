import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";

const team = [
  { name: "Vincent Maher", role: "CEO", image: "/Team/V Maher.jpeg" },
  { name: "Mike Elmira", role: "Head of Agency", image: "/Team/mike Elmira.jpeg" },
  { name: "Shakier Groenewald", role: "Head of Sales & Client Ops, Cape Town", image: "/Team/Shakier Groenewald .jpeg" },
  { name: "Sabata Mofokeng", role: "Technology", image: "/Team/Sabata Mofokeng.jpeg" },
  { name: "Nicole Proxenos", role: "Design", image: "/Team/Nicole Proxenos.jpeg" },
];

const martechPartners = [
  { name: "Newsroom AI", capability: "Rich media display advertising combined with AI performance optimisation" },
  { name: "The Brief", capability: "Creative workflow and AI automation of digital creative asset preparation, plus rich media" },
  { name: "Xanite", capability: "Broadbrand's CDP and marketing automation platform for financial services, telco and ecommerce" },
  { name: "Persaic", capability: "Personalisation and audience targeting" },
];

const dsgCapabilities = [
  {
    name: "eInsurer",
    tagline: "Exchange Insurance",
    desc: "A new exchange insurance proposition built in partnership with Hollard and iToo. Provides insurance coverage for digital asset exchanges — a critical trust layer for any crypto platform entering a new market.",
  },
  {
    name: "Digital Mobile",
    tagline: "MVNO + Tokenisation",
    desc: "Low-barrier-to-entry Mobile Virtual Network Operators. Tokenised airtime, mobile-first wallet onboarding, branded MVNO for Bitexen users. In a mobile-first market like SA, this combination is powerful.",
  },
  {
    name: "RWA Partner",
    tagline: "Real World Asset Tokenisation",
    desc: "DSG is actively seeking an RWA tokenisation partner. Bitexen's blockchain infrastructure and token expertise makes this a natural fit for bringing tokenised real-world assets to the SA market.",
  },
  {
    name: "CXG",
    tagline: "Customer Experience",
    desc: "One of the most awarded digital CX businesses in South Africa. Multilingual, culturally attuned local inbound support for Bitexen — built to handle the specific demands of onboarding crypto-first users.",
  },
];

export function Team() {
  return (
    <section id="team" className="py-28 px-6 max-w-7xl mx-auto">
      <FadeIn>
        <p className="section-label mb-4">The Team</p>
        <h2
          className="font-display font-black leading-none mb-16"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "var(--cream)" }}
        >
          WHO WILL
          <br />
          <span style={{ color: "rgba(255,255,255,0.2)" }}>RUN THIS</span>
        </h2>
      </FadeIn>

      {/* Team members */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-20">
        {team.map((member, i) => (
          <FadeIn key={member.name} delay={i * 70}>
            <div
              className="card-glow rounded-xl overflow-hidden"
              style={{ background: "var(--card-bg)" }}
            >
              {/* Photo */}
              <div className="relative w-full" style={{ paddingBottom: "120%" }}>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
                {/* Subtle gradient at bottom of photo */}
                <div
                  className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
                  style={{ background: "linear-gradient(to top, var(--card-bg), transparent)" }}
                />
              </div>
              {/* Name + role */}
              <div className="px-4 py-4">
                <p className="font-semibold text-sm mb-1" style={{ color: "var(--cream)" }}>
                  {member.name}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {member.role}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="divider mb-20" />

      {/* Martech partners */}
      <FadeIn>
        <p className="section-label mb-8">Martech Platforms</p>
      </FadeIn>
      <div className="grid md:grid-cols-2 gap-4 mb-20">
        {martechPartners.map((p, i) => (
          <FadeIn key={p.name} delay={i * 80}>
            <div
              className="rounded-xl p-6 flex gap-5"
              style={{
                background: "var(--card-bg)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center text-xs font-black"
                style={{ background: "rgba(99,223,189,0.12)", color: "var(--gold)" }}
              >
                {p.name[0]}
              </div>
              <div>
                <p className="font-bold text-sm mb-1" style={{ color: "var(--cream)" }}>
                  {p.name}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {p.capability}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="divider mb-20" />

      {/* DSG Ecosystem */}
      <FadeIn>
        <p className="section-label mb-4">Beyond the Agency</p>
        <h3
          className="font-display font-black mb-3"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", color: "var(--cream)" }}
        >
          THE DSG ECOSYSTEM
        </h3>
        <p className="text-base max-w-lg leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.6)" }}>
          Broadbrand is part of the Digital Solutions Group (DSG), and the Group brings
          strategic capabilities that go far beyond media and creative. For Bitexen,
          this unlocks partnership opportunities that no traditional agency can offer.
        </p>
      </FadeIn>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {dsgCapabilities.map((cap, i) => (
          <FadeIn key={cap.name} delay={i * 70}>
            <div
              className="card-glow rounded-xl p-6 h-full"
              style={{ background: "var(--card-bg)" }}
            >
              <p
                className="font-display font-black text-xl mb-1"
                style={{ color: "var(--orange)" }}
              >
                {cap.name}
              </p>
              <p
                className="text-[10px] font-bold uppercase tracking-widest mb-3"
                style={{ color: "var(--gold)" }}
              >
                {cap.tagline}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                {cap.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
