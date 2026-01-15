"use client";

import { usePathname, useRouter } from "next/navigation";

export default function PageModeToggle()
{
  const pathname = usePathname();
  const router = useRouter();

  const simplePath = "/simple-no-effects";
  const isSimple = pathname?.startsWith(simplePath);

  return(
    <div
      className ="
        relative inline-flex h-9 w-44 items-center rounded-full
        border border-foreground/25 bg-background/60 backdrop-blur
      "
      aria-label = "Toggle site mode"
    >
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
