// /src/components/ProjectCard.tsx

import React from "react";

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
  return(
    <a
      href = {href}
      target = {target}
      rel = {rel}
      className =
      {[
        "group relative overflow-hidden rounded-2xl border p-5",
        "transition duration-200 hover:-translate-y-0.5",
        /* Background hover tint */
        "hover:bg-muted/50",
        className,
      ].join(" ")}
    >
      {/* Subtle glow */}
      <div
        className = "pointer-events-none absolute inset-0 opacity-0 transition duration-200 group-hover:opacity-100"
        style =
        {{
          background:
            "radial-gradient(700px circle at 20% 0%, rgba(255,255,255,0.10), transparent 45%)",
        }}
      />

      {/* Shine sweep */}
      <div className = "pointer-events-none absolute -inset-x-24 -top-24 h-40 rotate-12 bg-foreground/5 blur-2xl translate-x-[-35%] opacity-0 transition duration-300 group-hover:translate-x-[70%] group-hover:opacity-100" />

      {/* Content goes on top of overlays */}
      <div className = "relative">{children}</div>
    </a>
  );
}
