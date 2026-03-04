import Image from "next/image";

const stats = [
  { value: "80–100M", label: "Total Impressions" },
  { value: "R6,024,430", label: "Total Investment" },
  { value: "50–80k", label: "App Downloads" },
  { value: "8–15k", label: "First Trades" },
  { value: "7.6M", label: "SA Crypto Holders" },
  { value: "12", label: "Week Campaign" },
  { value: "16", label: "Fan Token Partnerships (TR)" },
  { value: "6M+", label: "Bitexen Users" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden grain">
      {/* Background hero image */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/abigail-keenan-8-s5QuUBtyM-unsplash.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover object-center"
          style={{ opacity: 0.6 }}
        />
      </div>
      {/* Dark overlay for readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(10,10,10,0.35) 0%, rgba(10,10,10,0.15) 50%, rgba(10,10,10,0.7) 100%)",
        }}
      />
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(58,178,238,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 40% at 80% 80%, rgba(99,223,189,0.06) 0%, transparent 60%)",
        }}
      />

      {/* Main hero content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 pt-32 pb-12 max-w-7xl mx-auto w-full">
        {/* Badge */}
        <div className="hero-animate-1 flex items-center gap-3 mb-4">
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase"
            style={{
              background: "rgba(58,178,238,0.12)",
              border: "1px solid rgba(58,178,238,0.3)",
              color: "var(--orange)",
            }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ background: "var(--orange)" }}
              />
              <span
                className="relative inline-flex rounded-full h-1.5 w-1.5"
                style={{ background: "var(--orange)" }}
              />
            </span>
            March 2026
          </span>
        </div>

        {/* Main headline */}
        <div className="hero-animate-2">
          <h1
            className="font-display font-black leading-none tracking-tight mb-2"
            style={{
              fontSize: "clamp(4rem, 13vw, 14rem)",
              color: "var(--cream)",
              lineHeight: 0.92,
            }}
          >
            THE
            <br />
            <span className="text-orange-gradient">12TH MAN</span>
          </h1>
        </div>

        <div className="hero-animate-3">
          <p
            className="font-display font-black leading-none tracking-tight mb-8"
            style={{
              fontSize: "clamp(3rem, 10vw, 10.5rem)",
              color: "rgba(255,255,255,0.28)",
              lineHeight: 0.92,
            }}
          >
            JUST GOT PROMOTED.
          </p>
        </div>

        {/* Campaign line */}
        <div className="hero-animate-4 flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
          <p
            className="font-editorial max-w-sm leading-relaxed"
            style={{ color: "var(--gold)", fontSize: "1.125rem" }}
          >
            Turkey&apos;s leading crypto exchange is entering South Africa — the
            continent&apos;s most crypto-active market. Broadbrand is the agency to
            take you there.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:vincentm@broadbrand.co.za"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: "var(--orange)", color: "#fff" }}
            >
              Contact Us
            </a>
            <a
              href="#opportunity"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:border-white/30"
              style={{
                border: "1px solid rgba(255,255,255,0.15)",
                color: "var(--cream)",
              }}
            >
              Read Proposal ↓
            </a>
          </div>
        </div>
      </div>

      {/* Stats ticker */}
      <div
        className="hero-animate-5 relative z-10 border-t overflow-hidden"
        style={{ borderColor: "rgba(255,255,255,0.07)" }}
      >
        <div className="flex" style={{ animation: "ticker 30s linear infinite" }}>
          {[...stats, ...stats].map((stat, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center gap-3 px-8 py-4 border-r"
              style={{ borderColor: "rgba(255,255,255,0.07)" }}
            >
              <span
                className="font-display font-black text-xl tracking-tight whitespace-nowrap"
                style={{ color: "var(--orange)" }}
              >
                {stat.value}
              </span>
              <span className="text-xs text-white/40 font-medium uppercase tracking-widest whitespace-nowrap">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
