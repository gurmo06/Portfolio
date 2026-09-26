// /src/components/Link.tsx

"use client";

import NextLink from "next/link";
import React, { useRef } from "react";

type LinkStyle = React.CSSProperties & Record<"--mx" | "--my", string>;

type Props =
{
  href: string;
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
};

export default function Link({ href, className = "", children, target, rel }: Props)
{
  const ref = useRef<HTMLAnchorElement>(null);
  const isInternalLink = href.startsWith("/");

  const onMove = (e: React.PointerEvent<HTMLAnchorElement>) =>
  {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    /* x and y relative to the link */
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top; 

    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
  };

  const onEnter = (e: React.PointerEvent<HTMLAnchorElement>) => onMove(e);

  const content =
  (
    <>
      {/* Subtle glow (following cursor) */}
      <span
        className = "pointer-events-none absolute inset-0 opacity-0 transition duration-200 group-hover:opacity-100"
        style =
        {{
          background:
            "radial-gradient(150px circle at var(--mx) var(--my), rgba(255,255,255,0.16), transparent 50%)",
        }}
      />

      {/* Shine sweep */}
      <div className = "pointer-events-none absolute -inset-x-24 -top-24 h-40 rotate-12 bg-foreground/5 blur-2xl translate-x-[-35%] opacity-0 transition duration-300 group-hover:translate-x-[70%] group-hover:opacity-100" />

      {/* Content on top of overlays */}
      <span className = "relative min-w-0 break-words">{children}</span>
    </>
  );

  const linkClassName =
  [
    "group relative inline-flex items-center overflow-hidden rounded-full border px-4 py-2 text-sm",
    "transition duration-200 hover:-translate-y-0.5",
    /* Background hover tint */
    "hover:bg-muted/50",
    className,
  ].join(" ");

  if (isInternalLink)
  {
    return(
      <NextLink
        ref = {ref}
        href = {href}
        onPointerMove = {onMove}
        onPointerEnter = {onEnter}
        style = {{ "--mx": "50%", "--my": "50%" } as LinkStyle}
        className = {linkClassName}
      >
        {content}
      </NextLink>
    );
  }

  return(
    <a
      ref = {ref}
      href = {href}
      target = {target}
      rel = {rel}
      onPointerMove = {onMove}
      onPointerEnter = {onEnter}
      style = {{ "--mx": "50%", "--my": "50%" } as LinkStyle}
      className = {linkClassName}
    >
      {content}
    </a>
  );
}
