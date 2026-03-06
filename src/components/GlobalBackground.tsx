"use client";

import { useEffect, useState } from "react";

export function GlobalBackground() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (mq) setReducedMotion(!!mq.matches);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY ?? 0;
        document.documentElement.style.setProperty("--parallax-offset", String(y * 0.06));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, [reducedMotion]);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 opacity-[0.35]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "64px 64px",
        transform: reducedMotion ? "none" : "translate3d(0, calc(var(--parallax-offset, 0) * -0.4px), 0)",
      }}
      aria-hidden
    />
  );
}
