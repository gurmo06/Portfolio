// /src/components/ProjectCard.tsx

"use client";

import React, { useRef } from "react";

type Props =
{
  href: string;
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
};

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

  const onLeave = () =>
  {
    const el = ref.current;
    if (!el) return;

    /* Reset to center when leaving */
    el.style.setProperty("--mx", `50%`);
    el.style.setProperty("--my", `50%`);
  };
  return(
    <a
      ref = {ref}
      href = {href}
      target = {target}
      rel = {rel}
      onPointerMove = {onMove}
      onPointerLeave = {onLeave}
      style={{ ["--mx" as any]: "50%", ["--my" as any]: "50%" }}
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
        className = "pointer-events-none absolute inset-0 opacity-0 transition duration-200 group-hover:opacity-100"
        style =
        {{
          background:
            "radial-gradient(700px circle at var(--mx) var(--my), rgba(255,255,255,0.10), transparent 45%)",
        }}
      />

      {/* Shine sweep */}
      <div className = "pointer-events-none absolute -inset-x-24 -top-24 h-40 rotate-12 bg-foreground/5 blur-2xl translate-x-[-35%] opacity-0 transition duration-300 group-hover:translate-x-[70%] group-hover:opacity-100" />

      {/* Content on top of overlays */}
      <div className = "relative">{children}</div>
    </a>
  );
}
