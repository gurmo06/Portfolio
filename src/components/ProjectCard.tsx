// /src/components/ProjectCard.tsx

"use client";

import React, { useEffect, useRef } from "react";

type Props =
{
  href: string;
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
};

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

export default function ProjectCard({ href, className = "", children, target, rel }: Props)
{
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.PointerEvent<HTMLAnchorElement>) =>
  {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    /* x and y relative to the card */
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top; 

    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
  };

  const onEnter = (e: React.PointerEvent<HTMLAnchorElement>) => onMove(e);

  useEffect(() =>
  {
    const el = ref.current;
    if (!el) return;

    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (!coarse) return; /* Only do scroll-glow on mobile/touch*/

    let raf = 0;

    const update = () =>
    {
      const rect = el.getBoundingClientRect();

      /* Put the glow X at the center of the card: */
      const x = rect.width / 2;

      /* Choose a "light source" Y in the viewport (try 35% down from top) */
      const lightY = window.innerHeight * 0.35;

      /* Convert that viewport Y into a y-position inside the card: */
      const y = clamp(lightY - rect.top, 0, rect.height);

      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
    };

    const onScroll = () =>
    {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () =>
    {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return(
    <a
      ref = {ref}
      href = {href}
      target = {target}
      rel = {rel}
      onPointerMove = {onMove}
      onPointerEnter = {onEnter}
      style = {{ ["--mx" as any]: "50%", ["--my" as any]: "50%" }}
      className =
      {[
        "group relative overflow-hidden rounded-2xl border p-5",
        "transition duration-200 hover:-translate-y-0.5",
        /* Background hover tint */
        "hover:bg-muted/50",
        className,
      ].join(" ")}
    >
      {/* Subtle glow (following cursor) */}
      <div
        className = "glow-layer pointer-events-none absolute inset-0 opacity-0 transition duration-200 group-hover:opacity-100"
        style =
        {{
          background:
            "radial-gradient(400px circle at var(--mx) var(--my), rgba(255,255,255,0.16), transparent 50%)",
        }}
      />

      {/* Shine sweep */}
      <div className = "pointer-events-none absolute -inset-x-24 -top-24 h-40 rotate-12 bg-foreground/5 blur-2xl translate-x-[-35%] opacity-0 transition duration-300 group-hover:translate-x-[70%] group-hover:opacity-100" />

      {/* Content on top of overlays */}
      <div className = "relative">{children}</div>
    </a>
  );
}
