// /src/components/PageToggle.tsx

"use client";

import { usePathname, useRouter } from "next/navigation";
import { useRef } from "react";

export default function PageModeToggle()
{
  const ref = useRef<HTMLAnchorElement>(null);
  
  const onMove = (e: React.PointerEvent<HTMLAnchorElement>) =>
  {
    const el = ref.current;
    if (!el) return;
  
    const rect = el.getBoundingClientRect();
    /* x and y relative to the toggle */
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top; 
  
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
  };
  
  const onEnter = (e: React.PointerEvent<HTMLAnchorElement>) => onMove(e);

  const pathname = usePathname();
  const router = useRouter();

  const simplePath = "/simple-no-effects";
  const isSimple = pathname?.startsWith(simplePath);

  return(
    <div
      ref={ref}
      onPointerMove = {onMove}
      onPointerEnter = {onEnter}
      style = {{ ["--mx" as any]: "50%", ["--my" as any]: "50%" }}
      className ="
        group relative inline-flex h-9 w-44 items-center rounded-full
        overflow-hidden border border-foreground/25 bg-background/60 
        backdrop-blur transition duration-200 hover:-translate-y-0.5
      "
      aria-label = "Toggle site mode"
    >

      {/* Cursor-following glow */}
      <span
        className = "pointer-events-none absolute inset-0 opacity-0 transition duration-200 group-hover:opacity-100"
        style = 
        {{
          background:
            "radial-gradient(150px circle at var(--mx) var(--my), rgba(255,255,255,0.16), transparent 50%)",
        }}
      />

      {/* Sheen sweep */}
      <span
        className ="
          pointer-events-none absolute -inset-x-20 -top-24 h-40 rotate-12
          bg-foreground/5 blur-2xl
          translate-x-[-35%] opacity-0
          transition duration-300
          group-hover:translate-x-[70%] group-hover:opacity-100
        "
      />

      {/* Sliding indicator */}
      <span
        className = 
        {[
          "absolute inset-1 w-[calc(50%-0.25rem)] rounded-full bg-foreground transition-transform duration-200",
          isSimple ? "translate-x-full" : "translate-x-0",
        ].join(" ")}
      />

      {/* Left option */}
      <button
        type = "button"
        onClick = {() => router.push("/")}
        className =
        {[
          "relative z-10 flex-1 rounded-full px-3 text-xs font-medium transition",
          !isSimple ? "text-background" : "text-foreground/70 hover:text-foreground",
        ].join(" ")}
        aria-pressed = {!isSimple}
      >
        Fancy
      </button>

      {/* Right option */}
      <button
        type = "button"
        onClick = {() => router.push(simplePath)}
        className =
        {[
          "relative z-10 flex-1 rounded-full px-3 text-xs font-medium transition",
          isSimple ? "text-background" : "text-foreground/70 hover:text-foreground",
        ].join(" ")}
        aria-pressed = {isSimple}
      >
        Simple
      </button>
    </div>
  );
}
