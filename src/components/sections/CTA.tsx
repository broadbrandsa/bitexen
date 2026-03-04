import { FadeIn } from "@/components/FadeIn";

export function CTA() {
  return (
    <section className="py-28 px-6 max-w-7xl mx-auto">
      <div className="divider mb-28" />
      <FadeIn>
        <div
          className="rounded-3xl p-12 md:p-20 relative overflow-hidden grain"
          style={{
            background: "linear-gradient(135deg, rgba(240,78,35,0.10) 0%, rgba(201,168,76,0.06) 60%, rgba(240,78,35,0.04) 100%)",
            border: "1px solid rgba(240,78,35,0.2)",
          }}
        >
          {/* Background glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(240,78,35,0.15) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 text-center">
            <p className="section-label mb-6 text-center">Let&apos;s Build This Together</p>
            <h2
              className="font-display font-black leading-none mb-6"
              style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)", color: "var(--cream)" }}
            >
              THE OPPORTUNITY
              <br />
              IS CLEAR.
              <br />
              <span style={{ color: "rgba(255,255,255,0.2)" }}>THE TIMING IS RIGHT.</span>
            </h2>

            <p
              className="font-editorial italic text-xl md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed"
              style={{ color: "var(--gold)" }}
            >
              Bitexen has the platform, the fan token infrastructure, and the proven Turkish playbook.
              Broadbrand has the SA market knowledge, the media relationships, the creative muscle,
              and the technology stack to execute.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:mike@broadbrand.co.za"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg"
                style={{
                  background: "var(--orange)",
                  color: "#fff",
                  boxShadow: "0 0 0 rgba(240,78,35,0)",
                }}
              >
                Contact Us to Proceed
              </a>
              <div
                className="text-xs"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                mike@broadbrand.co.za
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Footer */}
      <FadeIn delay={200}>
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
            Broadbrand / Digital Solutions Group · March 2026
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
            Confidential proposal prepared for Bitexen.
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
            broadbrand.co.za
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
