import Image from "next/image";
import { Nav } from "@/components/Nav";
import { FadeIn } from "@/components/FadeIn";
import { ParallaxImage } from "@/components/ParallaxImage";

const team = [
  { name: "Vincent Maher", role: "CEO", email: "vincentm@broadbrand.co.za", image: "/Team/V Maher.jpeg" },
  { name: "Mike Elmira", role: "Head of Agency", email: "mikee@dsg.co.za", image: "/Team/mike Elmira.jpeg" },
  { name: "Shakier Groenewald", role: "Head of Sales & Client Ops, Cape Town", email: "Shakierg@broadbrand.co.za", image: "/Team/Shakier Groenewald .jpeg" },
  { name: "Sabata Mofokeng", role: "Technology", email: "Mofokengs@broadbrand.co.za", image: "/Team/Sabata Mofokeng.jpeg" },
  { name: "Nicole Proxenos", role: "Design", email: "Nicolep@broadbrand.ai", image: "/Team/Nicole Proxenos.jpeg" },
];

const martechPartners = [
  { name: "Newsroom AI", capability: "Rich media display advertising combined with AI performance optimisation", logo: "/partner-logos/Newsroom.png" },
  { name: "The Brief", capability: "Creative workflow and AI automation of digital creative asset preparation, plus rich media", logo: "/partner-logos/the brief.png" },
  { name: "Xanite", capability: "Broadbrand's CDP and marketing automation platform for financial services, telco and ecommerce", logo: "/partner-logos/Xanite.png" },
  { name: "Persaic", capability: "Personalisation and audience targeting", logo: "/partner-logos/Persaic.png" },
  { name: "eInsurer", capability: "Insurance-backed protection for crypto exchanges developed with leading South African insurers including Hollard and iToo.", logo: "/partner-logos/einsurer.png" },
  { name: "Circuit Security", capability: "Digital asset security infrastructure providing private key recovery and protection mechanisms for crypto platforms.", logo: "/partner-logos/Circuit.png" },
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
  {
    name: "Digital Resilience",
    tagline: "Cybersecurity, Risk & Digital Infrastructure Protection",
    desc: "Digital Resilience helps organisations protect their digital infrastructure, data and operations through advanced cybersecurity solutions, threat intelligence and risk management strategies that strengthen resilience in an increasingly complex threat landscape.",
    image: "/website-cards/Digital Resilience.jpg",
    logo: "/website-cards/Digital Reselience White.png",
    website: "https://www.digitalresilience.co.za",
  },
];

// b1–b13, skipping b5 and b11; plus additional client logos
const clientLogos = [
  "b1", "b2", "b4", "b6", "b7", "b8", "b10", "b12", "b13",
  "CSSI", "CPS", "Rialheim",
];

export default function AboutPage() {
  return (
    <div className="relative">
      <Nav />

      {/* Hero — background image scoped to this section only */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        {/* Background image — parallax */}
        <ParallaxImage
          src="/images/timothy-tan-PAe2UhGo-S4-unsplash.jpg"
          alt=""
          priority
          speed={0.3}
          className="object-cover"
          imgStyle={{ objectPosition: "center top", opacity: 0.55 }}
        />
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
          <div className="grid lg:grid-cols-2 gap-10 items-end">
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
                className="font-sans text-xl md:text-2xl max-w-2xl leading-relaxed"
                style={{ color: "#FFFFFF" }}
              >
                A performance-led digital agency embedded in South Africa&apos;s fastest-growing
                sectors — and part of a Group that reaches well beyond advertising.
              </p>
            </FadeIn>

            <FadeIn delay={120}>
              <div className="relative h-28 md:h-36 lg:h-44 w-full max-w-md lg:justify-self-end">
                <Image
                  src="/Logos/b-bbee level 2.png"
                  alt="B-BBEE Level 2"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-contain object-right-bottom"
                />
              </div>
            </FadeIn>
          </div>
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
            <FadeIn key={member.name} delay={i * 70} className="h-full">
              <div
                className="card-glow rounded-xl overflow-hidden flex flex-col h-full"
                style={{ background: "var(--card-bg)" }}
              >
                {/* Photo */}
                <div className="relative w-full overflow-hidden" style={{ paddingBottom: "115%" }}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
                    style={{ background: "linear-gradient(to top, var(--card-bg), transparent)" }}
                  />
                </div>
                {/* Info */}
                <div className="px-4 py-4 flex flex-col flex-1">
                  <p className="font-semibold text-sm mb-1" style={{ color: "var(--cream)" }}>
                    {member.name}
                  </p>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.82)" }}>
                    {member.role}
                  </p>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-[10px] font-medium break-all transition-colors duration-200 hover:opacity-80 mt-auto"
                    style={{ color: "var(--orange)" }}
                  >
                    {member.email}
                  </a>
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
          <p className="text-base max-w-lg leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.78)" }}>
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
                className="card-glow relative rounded-xl overflow-hidden h-full flex flex-col"
                style={{ background: "var(--card-bg)" }}
              >
                {/* Company logo */}
                <div
                  className="absolute top-4 left-4 z-10 flex items-center"
                  style={{
                    width: "160px",
                    height: "48px",
                    padding: "0",
                  }}
                >
                  <Image
                    src={cap.logo}
                    alt={`${cap.name} logo`}
                    width={160}
                    height={48}
                    className="object-contain object-left"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                </div>
                {/* Card image — 30vh */}
                <div className="relative w-full flex-shrink-0 overflow-hidden" style={{ height: "30vh" }}>
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
                      background: "linear-gradient(to bottom, transparent 50%, var(--card-bg) 100%)",
                    }}
                  />
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
                    className="text-xs font-bold uppercase tracking-widest mb-3"
                    style={{ color: "var(--gold)" }}
                  >
                    {cap.tagline}
                  </p>
                  <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "rgba(255,255,255,0.82)" }}>
                    {cap.desc}
                  </p>
                  <a
                    href={cap.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide transition-all duration-200 hover:gap-2.5 hover:opacity-80"
                    style={{ color: "rgba(255,255,255,0.82)" }}
                  >
                    {cap.website.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                    <span style={{ fontSize: "11px" }}>→</span>
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="divider my-20" />

        {/* Martech partners */}
        <FadeIn>
          <p className="section-label mb-8">Technology &amp; Infrastructure Partners</p>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-4 items-stretch">
          {martechPartners.map((p, i) => (
            <FadeIn key={p.name} delay={i * 80} className="h-full">
              <div
                className="rounded-xl p-6 flex gap-5 items-center h-full"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {/* Logo */}
                <div
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{ width: "72px", height: "44px" }}
                >
                  <Image
                    src={p.logo}
                    alt={`${p.name} logo`}
                    width={72}
                    height={44}
                    className="object-contain"
                    style={{ maxWidth: "72px", maxHeight: "44px", filter: "brightness(0) invert(1)" }}
                  />
                </div>
                <div>
                  <p className="font-bold text-sm mb-1" style={{ color: "var(--cream)" }}>
                    {p.name}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.78)" }}>
                    {p.capability}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* Client Logos */}
      <section className="py-20 px-6" style={{ background: "#E9E9E9" }}>
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="section-label mb-4" style={{ color: "#111" }}>Our Clients</p>
            <h2
              className="font-display font-black leading-none mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)", color: "#111" }}
            >
              BRANDS THAT
              <br />
              <span style={{ color: "rgba(0,0,0,0.6)" }}>TRUST US</span>
            </h2>
            <p className="text-base max-w-md leading-relaxed mb-14" style={{ color: "rgba(0,0,0,0.75)" }}>
              We work with leading brands across fintech, telecoms, retail and media
              — delivering performance and brand outcomes that matter.
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
              {clientLogos.map((logo) => (
                <div
                  key={logo}
                  className="flex items-center justify-center p-4 rounded-xl transition-all duration-300 hover:opacity-90"
                  style={{
                    background: "rgba(255,255,255,0.65)",
                    border: "1px solid rgba(0,0,0,0.08)",
                    minHeight: "80px",
                  }}
                >
                  <div className="relative w-full h-20">
                    <Image
                      src={`/client-logos/${logo}.png`}
                      alt={`Client logo ${logo}`}
                      fill
                      sizes="(max-width: 640px) 33vw, (max-width: 1024px) 20vw, 16vw"
                      className="object-contain"
                      style={
                        logo === "CSSI"
                          ? {
                              filter:
                                "brightness(0) saturate(100%) invert(27%) sepia(96%) saturate(1428%) hue-rotate(213deg) brightness(101%) contrast(103%)",
                            }
                          : undefined
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="divider mb-16" />
        <FadeIn>
          <div>
            {/* Logos row */}
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-8">
              {/* Broadbrand */}
              <div className="relative w-[240px] h-[48px]">
                <Image
                  src="/Logos/Broadbrand.png"
                  alt="Broadbrand"
                  fill
                  className="object-contain object-center"
                  style={{ filter: "brightness(0) invert(1)", opacity: 0.7 }}
                />
              </div>
              {/* DoingSomethingGreat (heart-DSG) */}
              <div className="relative w-[240px] h-[48px]">
                <Image
                  src="/Logos/heart-DSG.png"
                  alt="DoingSomethingGreat"
                  fill
                  className="object-contain object-center"
                  style={{ filter: "brightness(0) invert(1)", opacity: 0.7 }}
                />
              </div>
              {/* Proud member of DSG */}
              <div className="relative w-[240px] h-[48px]">
                <Image
                  src="/Logos/Proud member of DSG.png"
                  alt="Proud member of DSG"
                  fill
                  className="object-contain object-center"
                  style={{ opacity: 0.7 }}
                />
              </div>
            </div>

            {/* Footer text row */}
            <div className="flex flex-col items-center gap-1 text-center">
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                Broadbrand / Digital Solutions Group · March 2026
              </p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                Confidential proposal prepared for Bitexen.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
