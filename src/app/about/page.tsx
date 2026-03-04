import Image from "next/image";
import { Nav } from "@/components/Nav";
import { FadeIn } from "@/components/FadeIn";

const team = [
  { name: "Vincent Maher", role: "CEO", email: "vincentm@broadbrand.co.za" },
  { name: "Mike Elmira", role: "Head of Agency", email: "mikee@dsg.co.za" },
  { name: "Shakier Groenewald", role: "Head of Sales & Client Ops, Cape Town", email: "Shakierg@broadbrand.co.za" },
  { name: "Sabata Mofokeng", role: "Technology", email: "Mofokengs@broadbrand.co.za" },
  { name: "Nicole Proxenos", role: "Design", email: "Nicolep@broadbrand.ai" },
];

const martechPartners = [
  { name: "Newsroom AI", capability: "Rich media display advertising combined with AI performance optimisation", logo: "/partner-logos/Newsroom.png" },
  { name: "The Brief", capability: "Creative workflow and AI automation of digital creative asset preparation, plus rich media", logo: "/partner-logos/the-brief.png" },
  { name: "Xanite", capability: "Broadbrand's CDP and marketing automation platform for financial services, telco and ecommerce", logo: "/partner-logos/Xanite.png" },
  { name: "Persaic", capability: "Personalisation and audience targeting", logo: "/partner-logos/Persaic.png" },
];

const dsgCapabilities = [
  {
    name: "Digital Solutions Group",
    tagline: "Integrated Digital Transformation & Customer Experience",
    desc: "DSG is a collective of specialist digital businesses delivering integrated customer experience, technology and transformation solutions that help organisations optimise operations, engage customers and drive measurable growth in an always-connected world.",
    image: "/website-cards/dsg.jpg",
    logo: "/website-cards/dsg-logo.png",
    website: "https://www.dsg.co.za",
  },
  {
    name: "MVNE",
    tagline: "Mobile Network Enablement for Modern Brands",
    desc: "MVNE enables organisations to launch and operate branded mobile services by providing the infrastructure, platforms and operational expertise required to integrate telecom connectivity into their core customer proposition.",
    image: "/website-cards/mvne.jpg",
    logo: "/website-cards/mvne-logo.png",
    website: "https://mvne.co.za/",
  },
  {
    name: "Broadbrand",
    tagline: "Performance Marketing & Digital Growth Strategy",
    desc: "Broadbrand helps brands accelerate growth through data-driven marketing, creative strategy and performance optimisation, aligning acquisition, engagement and conversion into scalable digital growth engines.",
    image: "/website-cards/broadbrand.jpg",
    logo: "/website-cards/broadbrand-logo.png",
    website: "https://broadbrand.co.za/",
  },
  {
    name: "Digital Agency",
    tagline: "Digital Product, Platform & Experience Development",
    desc: "Digital Agency designs and builds high-performance digital platforms, websites and applications that enable organisations to deliver modern digital experiences and scalable product ecosystems.",
    image: "/website-cards/digital-agency.jpg",
    logo: "/website-cards/digital-agency-logo.png",
    website: "https://digitalagency.co.za",
  },
  {
    name: "CXG",
    tagline: "Enterprise Customer Experience & Engagement",
    desc: "CXG delivers omnichannel customer engagement solutions including contact centre operations, messaging platforms and digital service channels that help organisations improve support, retention and customer satisfaction.",
    image: "/website-cards/cxg.jpg",
    logo: "/website-cards/cxg-logo.png",
    website: "https://cxg.co.za/",
  },
  {
    name: "Digitalise",
    tagline: "Business Process Automation & Digital Operations",
    desc: "Digitalise enables organisations to streamline operations through automation, intelligent workflows and integrated systems that improve efficiency, reduce manual processes and enhance operational performance.",
    image: "/website-cards/digitalise.jpg",
    logo: "/website-cards/digitalise-logo.png",
    website: "https://digitalise.com/",
  },
];

// b1–b13, skipping b5 and b11
const clientLogos = [
  "b1", "b2", "b3", "b4", "b6", "b7", "b8", "b9", "b10", "b12", "b13",
];

export default function AboutPage() {
  return (
    <div className="relative">
      <Nav />

      {/* Hero — background image scoped to this section only */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/timothy-tan-PAe2UhGo-S4-unsplash.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center top", opacity: 0.55 }}
          />
        </div>
        {/* Vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(6,8,12,0.6) 0%, rgba(6,8,12,0.2) 40%, rgba(6,8,12,0.75) 100%)",
          }}
        />
        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-40 pb-20">
          <FadeIn>
            <p className="section-label mb-4">About Broadbrand</p>
            <h1
              className="font-display font-black leading-none mb-6"
              style={{ fontSize: "clamp(3rem, 8vw, 8rem)", color: "var(--cream)" }}
            >
              WHO
              <br />
              <span style={{ color: "rgba(255,255,255,0.2)" }}>WE ARE</span>
            </h1>
            <p
              className="font-editorial text-lg md:text-xl max-w-2xl leading-relaxed"
              style={{ color: "var(--gold)" }}
            >
              A performance-led digital agency embedded in South Africa&apos;s fastest-growing
              sectors — and part of a Group that reaches well beyond advertising.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="divider" />

      {/* Team */}
      <section id="team" className="py-20 px-6 max-w-7xl mx-auto">
        <FadeIn>
          <p className="section-label mb-4">The Team</p>
          <h2
            className="font-display font-black leading-none mb-14"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "var(--cream)" }}
          >
            WHO WILL
            <br />
            <span style={{ color: "rgba(255,255,255,0.2)" }}>RUN THIS</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-20">
          {team.map((member, i) => (
            <FadeIn key={member.name} delay={i * 70}>
              <div
                className="card-glow rounded-xl p-5"
                style={{ background: "var(--card-bg)" }}
              >
                <p className="font-semibold text-sm mb-1" style={{ color: "var(--cream)" }}>
                  {member.name}
                </p>
                <p className="text-xs leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>
                  {member.role}
                </p>
                <a
                  href={`mailto:${member.email}`}
                  className="text-[10px] font-medium break-all transition-colors duration-200 hover:opacity-80"
                  style={{ color: "var(--orange)" }}
                >
                  {member.email}
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="divider mb-20" />

        {/* Martech partners */}
        <FadeIn>
          <p className="section-label mb-8">Martech Partners</p>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-4 mb-20">
          {martechPartners.map((p, i) => (
            <FadeIn key={p.name} delay={i * 80}>
              <div
                className="rounded-xl p-6 flex gap-5 items-center"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {/* Logo */}
                <div
                  className="flex-shrink-0 rounded-lg overflow-hidden flex items-center justify-center"
                  style={{
                    width: "72px",
                    height: "44px",
                    background: "rgba(255,255,255,0.06)",
                    position: "relative",
                  }}
                >
                  <Image
                    src={p.logo}
                    alt={`${p.name} logo`}
                    width={64}
                    height={36}
                    className="object-contain"
                    style={{ maxWidth: "64px", maxHeight: "36px" }}
                  />
                </div>
                <div>
                  <p className="font-bold text-sm mb-1" style={{ color: "var(--cream)" }}>
                    {p.name}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
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
          <p className="text-sm max-w-lg leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.4)" }}>
            Broadbrand is part of the Digital Solutions Group (DSG), and the Group brings
            strategic capabilities that go far beyond media and creative. For Bitexen,
            this unlocks partnership opportunities that no traditional agency can offer.
          </p>
        </FadeIn>

        {/* DSG cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {dsgCapabilities.map((cap, i) => (
            <FadeIn key={cap.name} delay={i * 70}>
              <div
                className="card-glow rounded-xl overflow-hidden h-full flex flex-col"
                style={{ background: "var(--card-bg)" }}
              >
                {/* Card image */}
                <div className="relative w-full h-36 flex-shrink-0 overflow-hidden">
                  <Image
                    src={cap.image}
                    alt={cap.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                  {/* Overlay gradient */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to bottom, transparent 40%, var(--card-bg) 100%)",
                    }}
                  />
                  {/* Company logo — bottom left of image */}
                  <div
                    className="absolute bottom-2 left-3 z-10"
                    style={{ width: "80px", height: "24px", position: "absolute" }}
                  >
                    <Image
                      src={cap.logo}
                      alt={`${cap.name} logo`}
                      width={80}
                      height={24}
                      className="object-contain object-left"
                      style={{ maxWidth: "80px", maxHeight: "24px" }}
                    />
                  </div>
                </div>
                {/* Card text */}
                <div className="p-5 flex-1 flex flex-col">
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
                  <p className="text-xs leading-relaxed flex-1 mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>
                    {cap.desc}
                  </p>
                  <a
                    href={cap.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-medium transition-colors duration-200 hover:opacity-70"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                  >
                    {cap.website.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* RWA Partner — partnership opportunity callout */}
        <FadeIn delay={100}>
          <div
            className="rounded-2xl overflow-hidden relative"
            style={{
              border: "1px solid rgba(99,223,189,0.25)",
              background: "linear-gradient(135deg, rgba(99,223,189,0.06) 0%, rgba(58,178,238,0.04) 60%, rgba(10,10,10,0) 100%)",
            }}
          >
            {/* Glow accent */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(99,223,189,0.5), transparent)",
              }}
            />

            <div className="grid md:grid-cols-2 gap-0">
              {/* Image side */}
              <div className="relative h-56 md:h-auto overflow-hidden">
                <Image
                  src="/website-cards/EInsurer.jpg"
                  alt="RWA Partner"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                  style={{ opacity: 0.6 }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to right, transparent 60%, var(--card-bg) 100%)",
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to bottom, transparent 50%, var(--card-bg) 100%)",
                  }}
                />
                {/* Opportunity badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className="text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full"
                    style={{
                      background: "rgba(99,223,189,0.15)",
                      border: "1px solid rgba(99,223,189,0.3)",
                      color: "var(--gold)",
                    }}
                  >
                    Partnership Opportunity
                  </span>
                </div>
              </div>

              {/* Text side */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <p
                  className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3"
                  style={{ color: "var(--gold)" }}
                >
                  Real World Asset Tokenisation
                </p>
                <h4
                  className="font-display font-black mb-4"
                  style={{
                    fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                    color: "var(--cream)",
                    lineHeight: 1.1,
                  }}
                >
                  RWA
                  <br />
                  <span style={{ color: "rgba(255,255,255,0.25)" }}>PARTNER</span>
                </h4>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
                  DSG is actively seeking an RWA tokenisation partner. Bitexen&apos;s blockchain
                  infrastructure and token expertise makes this a natural fit for bringing
                  tokenised real-world assets to the SA market.
                </p>
                <a
                  href="mailto:vincentm@broadbrand.co.za"
                  className="inline-flex items-center gap-2 self-start text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-300 hover:opacity-80"
                  style={{
                    background: "rgba(99,223,189,0.12)",
                    border: "1px solid rgba(99,223,189,0.3)",
                    color: "var(--gold)",
                  }}
                >
                  Explore the Opportunity
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <div className="divider" />

      {/* Client Logos */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <FadeIn>
          <p className="section-label mb-4">Our Clients</p>
          <h2
            className="font-display font-black leading-none mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)", color: "var(--cream)" }}
          >
            BRANDS THAT
            <br />
            <span style={{ color: "rgba(255,255,255,0.2)" }}>TRUST US</span>
          </h2>
          <p className="text-sm max-w-md leading-relaxed mb-14" style={{ color: "rgba(255,255,255,0.4)" }}>
            We work with leading brands across fintech, telecoms, retail and media
            — delivering performance and brand outcomes that matter.
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
            {clientLogos.map((logo) => (
              <div
                key={logo}
                className="flex items-center justify-center p-4 rounded-xl transition-all duration-300 hover:opacity-80"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  minHeight: "80px",
                }}
              >
                <div className="relative w-full h-10">
                  <Image
                    src={`/client-logos/${logo}.png`}
                    alt={`Client logo ${logo}`}
                    fill
                    sizes="(max-width: 640px) 33vw, (max-width: 1024px) 20vw, 16vw"
                    className="object-contain"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Footer */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="divider mb-16" />
        <FadeIn>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
              Broadbrand / Digital Solutions Group · March 2026
            </p>
            <div className="relative w-40 h-8">
              <Image
                src="/Logos/Proud member of DSG.png"
                alt="Proud member of DSG"
                fill
                sizes="160px"
                className="object-contain"
              />
            </div>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
              Confidential proposal prepared for Bitexen.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Heart-DSG — fixed bottom right */}
      <div className="fixed bottom-6 right-6 z-50 w-28 h-28">
        <Image
          src="/Logos/heart-DSG.png"
          alt="DSG"
          fill
          sizes="112px"
          className="object-contain"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </div>
    </div>
  );
}
