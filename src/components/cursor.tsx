"use client";

import { useEffect, useRef } from "react";

export default function Cursor()
{
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() =>
{
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let x = 0, y = 0;
    let rx = 0, ry = 0;

    const onMove = (e: MouseEvent) =>
    {
      x = e.clientX;
      y = e.clientY;
      dot.style.transform = `translate(${x}px, ${y}px)`;
    };

    const animate = () =>
    {
      /* Smooth follow for the ring */
      rx += (x - rx) * 0.5;
      ry += (y - ry) * 0.5;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    const raf = requestAnimationFrame(animate);

    return () =>
    {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Small dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground"
      />
      {/* Larger, slower ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/30"
      />
    </>
  );
}
