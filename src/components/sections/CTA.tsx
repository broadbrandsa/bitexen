import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";

export function CTA() {
  return (
    <section className="relative pt-28 pb-16 overflow-hidden">
      {/* Section background image behind CTA block */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/alex-simpson-DOicNPBVSHs-unsplash.jpg"
          alt="Section background"
          fill
          className="object-cover object-bottom"
          style={{ opacity: 0.24 }}
        />
      </div>
      <div className="relative z-10 px-6 max-w-7xl mx-auto">
        <div className="divider mb-28" />
        <FadeIn>
          <div
            className="rounded-3xl p-12 md:p-20 relative overflow-hidden grain"
            style={{
              background: "linear-gradient(135deg, rgba(58,178,238,0.10) 0%, rgba(99,223,189,0.06) 60%, rgba(58,178,238,0.04) 100%)",
              border: "1px solid rgba(58,178,238,0.2)",
            }}
          >
            {/* Background glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(58,178,238,0.15) 0%, transparent 70%)",
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
                className="font-editorial text-xl md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed"
                style={{ color: "var(--gold)" }}
              >
                Bitexen has the platform, the fan token infrastructure, and the proven Turkish playbook.
                Broadbrand has the SA market knowledge, the media relationships, the creative muscle,
                and the technology stack to execute.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:vincentm@broadbrand.co.za"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg"
                  style={{
                    background: "var(--orange)",
                    color: "#fff",
                    boxShadow: "0 0 0 rgba(58,178,238,0)",
                  }}
                >
                  Contact Us to Proceed
                </a>
                <div
                  className="text-xs"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  vincentm@broadbrand.co.za
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Footer */}
        <FadeIn delay={200}>
          <div className="mt-16 relative z-20 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
              Broadbrand / Digital Solutions Group · March 2026
            </p>
            <div className="relative w-[120px] h-[24px]">
              <Image
                src="/Logos/Proud member of DSG.png"
                alt="Proud member of DSG"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
              Confidential proposal prepared for Bitexen.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Heart-DSG — fixed bottom right */}
      <div className="fixed bottom-6 right-6 z-50 w-28 h-28">
        <Image
          src="/Logos/heart-DSG.png"
          alt="DSG"
          fill
          className="object-contain"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </div>
    </section>
  );
}
