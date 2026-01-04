// /src/app/page.tsx
export default function Home() {
  const name = "Gurmohit Singh";
  const title = "CS Student • Builder • Developer";
  const location = "Austin, TX";
  const email = "gurmo06@my.utexas.edu";

  const links = [
    { label: "GitHub", href: "https://github.com/gurmo06" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/gurmohit-singh-88593b326/" },
    { label: "Resume", href: "/resume/resume.pdf" },
  ];

  const projects = [
    {
      name: "QARDS - THE Quantum Card Game",
      description: "• A digital card game with a unique twist involving quantum mechanics.\n• Incorporates superposition, entanglement, and constructive and destructive interference from a Grover diffusion operator.\n• Offers both a CLI and GUI version.\n• Won 2nd at the UT IBM Qiskit Fall Fest Hackathon 2025!",
      tech: ["Python", "Qiskit", "PySide6"],
      href: "https://github.com/gurmo06/QARDS",
    },
    {
      name: "System Visualizer",
      description: "• An online visualization for different system components.\n• Includes simulations for CPU registers, ALU operations, cache memory, and pipelining.\n• Not currently active, still a WIP.",
      tech: ["TypeScript"],
      href: "https://github.com/gurmo06/System_Visualizer",
    },
    {
      name: "Tau",
      description: "• A simple Discord bot with various math functions.\n• Will be expanded with matrix calculations and calculus functions.\n• Currently offline (was previously hosted on Railway but trial ended).",
      tech: ["Python", "Discord API"],
      href: "https://github.com/gurmo06/Tau_Python",
    },
    {
      name: "Tandoorish Indian Cuisine Restaurant Website",
      description: "• A responsive website for a local Indian restaurant.\n• Features a menu, reservation system, and contact information.\n• Currently building and deploying.",
      tech: ["TypeScript", "Vite", "React", "Tailwind CSS", "Spring Boot"],
      href: "https://github.com/gurmo06",
    },
    {
      name: "This Portfolio!",
      description: "• A personal portfolio website to showcase my projects and skills.\n• Features sections for about me, projects, and contact information.\n• Should be up if you're looking at it :)",
      tech: ["TypeScript", "Next.js", "React","Tailwind CSS"],
      href: "https://github.com/gurmo06/Portfolio/tree/main",
    }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-16">
        {/* Header */}
        <header className="space-y-4">
          <p className="text-sm text-muted-foreground">{location}</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {name}
          </h1>
          <p className="text-lg text-muted-foreground">{title}</p>

          <div className="flex flex-wrap gap-3 pt-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full border px-4 py-2 text-sm hover:bg-muted transition"
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${email}`}
              className="rounded-full bg-foreground px-4 py-2 text-sm text-background hover:opacity-90 transition"
            >
              Email
            </a>
          </div>
        </header>

        {/* About */}
        <section className="mt-14 space-y-3">
          <h2 className="text-xl font-semibold">About</h2>
          <p className="text-muted-foreground leading-relaxed">
            about
          </p>
        </section>

        {/* Projects */}
        <section className="mt-14 space-y-6">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-xl font-semibold">Projects</h2>
            <a
              href="/projects"
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              View all →
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target={p.href.startsWith("http") ? "_blank" : undefined}
                rel={p.href.startsWith("http") ? "noreferrer" : undefined}
                className="group rounded-2xl border p-5 hover:bg-muted/50 transition"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-base font-semibold">{p.name}</h3>
                  <span className="text-muted-foreground group-hover:text-foreground transition">
                    ↗
                  </span>
                </div >
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">
                  {p.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t pt-8 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {name}. Built with Next.js.
          </p>
        </footer>
      </div>
    </main>
  );
}
