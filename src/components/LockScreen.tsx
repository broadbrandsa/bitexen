"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

const CORRECT_CODE = "0312";
const STORAGE_KEY = "bb_bitexen_v1_unlocked";

export function LockScreen({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState<boolean | null>(null);
  const [digits, setDigits] = useState<string[]>(["", "", "", ""]);
  const [error, setError] = useState(false);
  const [exiting, setExiting] = useState(false);
  const hiddenInputRef = useRef<HTMLInputElement>(null);

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

  // Keyboard support (desktop only — skip when hidden input is focused to avoid double-entry on mobile)
  useEffect(() => {
    if (unlocked) return;
    const onKey = (e: KeyboardEvent) => {
      if (document.activeElement === hiddenInputRef.current) return;
      if (e.key >= "0" && e.key <= "9") handleDigit(e.key);
      if (e.key === "Backspace") handleDelete();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [unlocked, handleDigit, handleDelete]);

  // Hidden input handler for mobile native keyboard
  const handleHiddenInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (!val) return;
    const char = val[val.length - 1];
    if (char >= "0" && char <= "9") handleDigit(char);
    e.target.value = "";
  }, [handleDigit]);

  // Still loading
  if (unlocked === null) return null;

  // Unlocked — show site
  if (unlocked) return <>{children}</>;

  return (
    <>
      {/* Lock screen overlay */}
      <div
        className={`lock-overlay grain justify-start md:justify-between ${exiting ? "lock-exiting" : ""} ${error ? "lock-shake" : ""}`}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "oklch(0.06 0.004 260)",
          overflow: "hidden",
        }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 pointer-events-none select-none"
          style={{ zIndex: 0 }}
        >
          <Image
            src="/images/lcs-_vgt-QPf3S52L8Zc-unsplash.jpg"
            alt=""
            fill
            className="object-cover object-center"
            style={{ opacity: 0.65 }}
            priority
          />
          {/* vignette — darker at edges, clear in centre */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 75% 75% at 50% 50%, transparent 20%, oklch(0.06 0.004 260) 100%)",
            }}
          />
          {/* bottom fade */}
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{
              height: "50%",
              background: "linear-gradient(to top, oklch(0.06 0.004 260) 0%, transparent 100%)",
            }}
          />
        </div>

        {/* Blue glow top */}
        <div
          className="absolute top-0 left-0 right-0 pointer-events-none"
          style={{
            height: "40vh",
            background:
              "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(58,178,238,0.10) 0%, transparent 70%)",
            zIndex: 0,
          }}
        />

        {/* ── Top: badge + logos ── */}
        <div
          className="relative z-10 flex flex-col items-center gap-4 mt-8 md:mt-10"
          style={{ zIndex: 1 }}
        >
          {/* Confidential badge */}
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

          {/* Logos row */}
          <div className="flex items-center gap-4">
            {/* Broadbrand */}
            <div className="relative w-32 h-7">
              <Image
                src="/Logos/Broadbrand.png"
                alt="Broadbrand"
                fill
                className="object-contain object-center"
                style={{ filter: "brightness(0) invert(1)", opacity: 0.85 }}
              />
            </div>
            {/* Bitexen */}
            <div className="relative w-24 h-7">
              <Image
                src="/Logos/white_logo.webp"
                alt="Bitexen"
                fill
                className="object-contain object-center"
                style={{ opacity: 0.9 }}
              />
            </div>
          </div>
        </div>

        {/* ── Centre: headline ── */}
        <div
          className="relative z-10 md:flex-1 flex flex-col items-center justify-center px-6 text-center mt-6 md:mt-0"
          style={{ zIndex: 1 }}
        >
          <h1
            className="font-display font-black leading-none tracking-tight"
            style={{
              fontSize: "clamp(1.8rem, 7vw, 7rem)",
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

        {/* ── Bottom: digit boxes ── */}
        <div
          className="relative z-10 w-full flex flex-col items-center pb-8 md:pb-16 px-6 gap-6 mt-6 md:mt-0"
          style={{ zIndex: 1 }}
        >
          {/* Hidden input — focused on tap to trigger native mobile keyboard */}
          <input
            ref={hiddenInputRef}
            type="tel"
            inputMode="numeric"
            onChange={handleHiddenInput}
            style={{
              position: "absolute",
              opacity: 0,
              width: "1px",
              height: "1px",
              pointerEvents: "none",
            }}
            autoComplete="off"
          />

          {/* 4 digit display boxes — tap to open keyboard on mobile */}
          <div
            className="flex items-center gap-3 md:gap-5 cursor-pointer"
            onClick={() => hiddenInputRef.current?.focus()}
          >
            {digits.map((d, i) => {
              const isCurrent = d === "" && digits.slice(0, i).every((v) => v !== "");
              return (
                <div
                  key={i}
                  className="flex items-center justify-center rounded-2xl transition-all duration-200"
                  style={{
                    width: "clamp(4rem, 16vw, 8rem)",
                    height: "clamp(5rem, 20vw, 10rem)",
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
                      fontSize: "clamp(2rem, 10vw, 5rem)",
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

          {/* Error hint — only shown on error */}
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
