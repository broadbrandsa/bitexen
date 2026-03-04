"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const CORRECT_CODE = "0312";
const STORAGE_KEY = "bb_bitexen_v1_unlocked";

export function LockScreen({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState<boolean | null>(null);
  const [digits, setDigits] = useState<string[]>(["", "", "", ""]);
  const [error, setError] = useState(false);
  const [exiting, setExiting] = useState(false);

  // Check localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      setUnlocked(saved === "true");
    } catch {
      setUnlocked(false);
    }
  }, []);

  const handleDelete = useCallback(() => {
    setDigits((prev) => {
      const next = [...prev];
      for (let i = 3; i >= 0; i--) {
        if (next[i] !== "") {
          next[i] = "";
          break;
        }
      }
      return next;
    });
  }, []);

  const handleDigit = useCallback(
    (d: string) => {
      if (error) return;
      setDigits((prev) => {
        const next = [...prev];
        const idx = next.findIndex((v) => v === "");
        if (idx === -1) return prev;
        next[idx] = d;

        // Auto-check when 4th digit entered
        if (idx === 3) {
          const code = next.join("");
          if (code === CORRECT_CODE) {
            setTimeout(() => {
              setExiting(true);
              setTimeout(() => {
                try {
                  localStorage.setItem(STORAGE_KEY, "true");
                } catch {}
                setUnlocked(true);
              }, 900);
            }, 200);
          } else {
            setTimeout(() => {
              setError(true);
              setTimeout(() => {
                setError(false);
                setDigits(["", "", "", ""]);
              }, 700);
            }, 100);
          }
        }
        return next;
      });
    },
    [error]
  );

  // Keyboard support
  useEffect(() => {
    if (unlocked) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key >= "0" && e.key <= "9") handleDigit(e.key);
      if (e.key === "Backspace") handleDelete();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [unlocked, handleDigit, handleDelete]);

  // Still loading
  if (unlocked === null) return null;

  // Unlocked — show site
  if (unlocked) return <>{children}</>;

  const filledCount = digits.filter((d) => d !== "").length;

  return (
    <>
      {/* Lock screen overlay */}
      <div
        className={`lock-overlay grain ${exiting ? "lock-exiting" : ""} ${error ? "lock-shake" : ""}`}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          background: "oklch(0.06 0.004 260)",
          overflow: "hidden",
        }}
      >
        {/* Background image — faint football */}
        <div
          className="absolute inset-0 pointer-events-none select-none"
          style={{ zIndex: 0 }}
        >
          <Image
            src="/images/pexels_320-69a81eeb279cca73a840050d@2x.png"
            alt=""
            fill
            className="object-cover object-center"
            style={{ opacity: 0.08 }}
            priority
          />
          {/* vignette */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, oklch(0.06 0.004 260) 100%)",
            }}
          />
        </div>

        {/* Blue glow top */}
        <div
          className="absolute top-0 left-0 right-0 pointer-events-none"
          style={{
            height: "40vh",
            background:
              "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(58,178,238,0.12) 0%, transparent 70%)",
            zIndex: 0,
          }}
        />

        {/* ── Top: badge ── */}
        <div
          className="relative z-10 flex items-center gap-2 mt-10"
          style={{ zIndex: 1 }}
        >
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase"
            style={{
              background: "rgba(58,178,238,0.10)",
              border: "1px solid rgba(58,178,238,0.25)",
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
            Confidential · March 2026
          </span>
        </div>

        {/* ── Centre: headline ── */}
        <div
          className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center"
          style={{ zIndex: 1 }}
        >
          <p
            className="section-label mb-6"
            style={{ color: "var(--orange)" }}
          >
            Bitexen × Broadbrand
          </p>
          <h1
            className="font-display font-black leading-none tracking-tight"
            style={{
              fontSize: "clamp(2.2rem, 7vw, 7rem)",
              color: "var(--cream)",
              lineHeight: 0.9,
              maxWidth: "16ch",
            }}
          >
            ENTER THE 4
            <br />
            NUMBERS TO
            <br />
            <span className="text-orange-gradient">PROMOTE</span>
            <br />
            <span style={{ color: "rgba(255,255,255,0.25)" }}>THE 12TH MAN.</span>
          </h1>
        </div>

        {/* ── Bottom: digit boxes + numpad ── */}
        <div
          className="relative z-10 w-full flex flex-col items-center pb-10 px-6 gap-8"
          style={{ zIndex: 1 }}
        >
          {/* 4 digit display boxes */}
          <div className="flex items-center gap-3 md:gap-5">
            {digits.map((d, i) => {
              const isCurrent = d === "" && digits.slice(0, i).every((v) => v !== "");
              return (
                <div
                  key={i}
                  className="flex items-center justify-center rounded-2xl transition-all duration-200"
                  style={{
                    width: "clamp(3.5rem, 14vw, 8rem)",
                    height: "clamp(4.5rem, 18vw, 10rem)",
                    background: error
                      ? "rgba(239,68,68,0.15)"
                      : d
                      ? "rgba(58,178,238,0.12)"
                      : isCurrent
                      ? "rgba(58,178,238,0.06)"
                      : "rgba(255,255,255,0.04)",
                    border: error
                      ? "2px solid rgba(239,68,68,0.5)"
                      : d
                      ? "2px solid rgba(58,178,238,0.4)"
                      : isCurrent
                      ? "2px solid rgba(58,178,238,0.25)"
                      : "2px solid rgba(255,255,255,0.08)",
                    boxShadow: d && !error
                      ? "0 0 30px rgba(58,178,238,0.15)"
                      : "none",
                  }}
                >
                  <span
                    className="font-display font-black leading-none"
                    style={{
                      fontSize: "clamp(2rem, 10vw, 6rem)",
                      color: error
                        ? "rgba(239,68,68,0.9)"
                        : d
                        ? "var(--cream)"
                        : "rgba(255,255,255,0.15)",
                    }}
                  >
                    {d || (isCurrent ? "_" : "·")}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Number pad */}
          <div className="grid grid-cols-3 gap-2 w-full max-w-[280px]">
            {["1","2","3","4","5","6","7","8","9"].map((n) => (
              <button
                key={n}
                onClick={() => handleDigit(n)}
                className="rounded-xl py-4 font-display font-black text-2xl transition-all duration-150 active:scale-95"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "var(--cream)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(58,178,238,0.12)"; e.currentTarget.style.borderColor = "rgba(58,178,238,0.25)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
              >
                {n}
              </button>
            ))}
            {/* Row: ← 0 → */}
            <button
              onClick={handleDelete}
              className="rounded-xl py-4 font-display font-black text-lg transition-all duration-150 active:scale-95"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                color: "rgba(255,255,255,0.4)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
            >
              ⌫
            </button>
            <button
              onClick={() => handleDigit("0")}
              className="rounded-xl py-4 font-display font-black text-2xl transition-all duration-150 active:scale-95"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "var(--cream)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(58,178,238,0.12)"; e.currentTarget.style.borderColor = "rgba(58,178,238,0.25)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
            >
              0
            </button>
            <div
              className="rounded-xl py-4 flex items-center justify-center text-xs font-semibold uppercase tracking-widest"
              style={{
                background: "transparent",
                color: filledCount > 0 ? "rgba(58,178,238,0.6)" : "rgba(255,255,255,0.15)",
              }}
            >
              {filledCount}/4
            </div>
          </div>

          {/* Error hint */}
          {error && (
            <p
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "rgba(239,68,68,0.8)" }}
            >
              Incorrect code — try again
            </p>
          )}
        </div>
      </div>

      {/* Actual site — rendered but hidden behind lock */}
      <div style={{ visibility: "hidden", pointerEvents: "none" }}>
        {children}
      </div>
    </>
  );
}
