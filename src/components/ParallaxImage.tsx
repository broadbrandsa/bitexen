"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface ParallaxImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  imgStyle?: React.CSSProperties;
  /** 0 = locked, 0.3 = subtle, 0.5 = strong. Default: 0.3 */
  speed?: number;
}

/**
 * Drop-in replacement for a `<div className="absolute inset-0"><Image fill /></div>`.
 * The image moves at `speed` relative to the scroll rate, creating a parallax effect.
 * The outer div is absolute-inset so it works inside any `relative overflow-hidden` section.
 */
export function ParallaxImage({
  src,
  alt,
  priority,
  sizes = "100vw",
  className = "object-cover object-center",
  imgStyle,
  speed = 0.3,
}: ParallaxImageProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    const onScroll = () => {
      const rect = outer.getBoundingClientRect();
      // Skip if off-screen
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      // Section centre relative to viewport centre
      const sectionMid = rect.top + rect.height / 2;
      const viewportMid = window.innerHeight / 2;
      const translateY = (sectionMid - viewportMid) * speed;
      inner.style.transform = `translateY(${translateY}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // set initial position
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return (
    <div
      ref={outerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
    >
      {/* Inner div is taller than outer so there's room to shift up/down */}
      <div
        ref={innerRef}
        style={{ position: "absolute", inset: 0, top: "-15%", bottom: "-15%", height: "130%" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={className}
          style={imgStyle}
        />
      </div>
    </div>
  );
}
