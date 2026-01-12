import React from "react";

type Props = {
  name: string;
  description: string;
  tech: string[];
  href: string;
};

export default function ProjectCard({ name, description, tech, href }: Props) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="
        group relative overflow-hidden rounded-2xl border
        bg-background/60 p-5 backdrop-blur
        transition duration-200
        hover:-translate-y-0.5
      "
    >
      {/* subtle gradient wash on hover */}
      <div
        className="
          pointer-events-none absolute inset-0 opacity-0 transition duration-200
          group-hover:opacity-100
        "
        style={{
          background:
            "radial-gradient(800px circle at 20% 0%, rgba(255,255,255,0.10), transparent 40%)",
        }}
      />

      {/* shine sweep */}
      <div
        className="
          pointer-events-none absolute -inset-x-20 -top-24 h-40 rotate-12
          bg-foreground/5 blur-2xl
          translate-x-[-30%] opacity-0 transition duration-300
          group-hover:translate-x-[60%] group-hover:opacity-100
        "
      />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-base font-semibold">{name}</h3>
          <span className="opacity-70 transition group-hover:opacity-100">↗</span>
        </div>

        <p className="mt-2 whitespace-pre-wrap text-sm opacity-80 transition group-hover:opacity-100">
          {description}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="
                rounded-full border px-3 py-1 text-xs opacity-75
                transition group-hover:opacity-100
              "
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}