// /src/app/simple-no-effects/page.tsx

/* Import necessary modules and components */
import PageToggle from "@/components/PageToggle";

/* Import biographical data from the bio.tsx module */
import { name, title, location, email, about, links, projects } from "@/lib/Bio";

/* Alternative Simpler Page */
export default function Home()
{
  return(
    <main className = "min-h-screen bg-background text-foreground">
      <div className = "mx-auto max-w-4xl px-6 py-16">
        {/* Header */}
        <header className = "space-y-4">
          <p className = "text-sm text-foreground">{location}</p>
          <h1 className = "text-5xl font-bold tracking-tight">
            {name}
          </h1>
          <p className = "text-lg text-foreground">{title}</p>

          <div className = "pt-2 flex flex-wrap items-center justify-between gap-3">
            {/* Links */}
            <div className = "flex flex-wrap gap-3">
              {links.map((link) =>
              (
                <a
                  key = {link.label}
                  href = {link.href}
                  className = "rounded-full border px-4 py-2 text-sm hover:bg-muted-bg transition"
                  target = {link.href.startsWith("http") ? "_blank" : undefined}
                  rel = {link.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {link.label}
                </a>
              ))}
              <a
                href = {`mailto:${email}`}
                className = "rounded-full border border-transparent bg-foreground px-4 py-2 text-sm text-background hover:bg-muted-fg transition"
              >
                Email
              </a>
            </div>

            {/* Page Style Toggle */}
            <PageToggle />
          </div>
        </header>

        {/* About */}
        <section className = "mt-10 space-y-3">
          <h2 className = "text-2xl font-semibold">About</h2>
          <p className = "text-foreground leading-relaxed">
            {about}
          </p>
        </section>

        {/* Projects */}
        <section className = "mt-8 space-y-6">
            <div className = "flex items-end justify-between gap-4">
              <h2 className = "text-3xl font-semibold">Projects</h2>
              {/*<a
                href = "/projects"
                className = "text-sm text-foreground hover:text-muted-fg transition"
              >
                View all →
              </a>*/}
            </div>

          <div className = "grid gap-4 sm:grid-cols-2">
            {projects.map((p) =>
            (
              <a
                key = {p.name}
                href = {p.href}
                target = {p.href.startsWith("http") ? "_blank" : undefined}
                rel = {p.href.startsWith("http") ? "noreferrer" : undefined}
                className = {p.name === "This Portfolio!" ? "sm:col-span-2 group rounded-2xl border p-5" : "group rounded-2xl border p-5"}
              >
                <div className = "flex items-start justify-between gap-4">
                  <h3 className = "text-base font-semibold text-foreground group-hover:text-muted-fg transition">{p.name}</h3>
                  <span className = "text-foreground group-hover:text-muted-fg transition">
                    ↗
                  </span>
                </div>
                <p className = "mt-2 text-sm text-foreground leading-relaxed whitespace-pre-wrap group-hover:text-muted-fg transition">
                  {p.description}
                </p>
                <div className = "mt-2 flex flex-wrap gap-2">
                  {p.tech.map((t) =>
                  (
                    <span
                      key = {t}
                      className = "rounded-full bg-muted px-3 py-1 text-xs text-foreground group-hover:text-muted-fg transition"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}

            {/* Timeline */}
              {/*<a
              href = "/timeline"
              className = "rounded-2xl border p-5 flex items-center justify-center min-h-[180px] hover:bg-muted/50 transition"
              >
                  <h3 className = "text-4xl font-semibold text-foreground group-hover:text-muted-fg transition">
                    My Timeline (WIP)
                  </h3>
              </a>*/}
            </div>
          </section>

        {/* Footer */}
        <footer className = "mt-10 border-t pt-6 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {name}. Built with Next.js.
          </p>
        </footer>
      </div>
    </main>
  );
}
