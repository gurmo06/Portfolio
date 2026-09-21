// /src/app/page.tsx

/* Import necessary modules and components */
import ProjectCard from "@/components/ProjectCard";
import Link from "@/components/Link";

/* Import biographical data from the bio.tsx module */
import { name, title, location, email, about, links, projectLists } from "@/lib/Bio";

/* Main Page */
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
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {link.label}
                  </Link>
                ))}

                <Link href={`mailto:${email}`} className = "bg-foreground text-background hover:bg-foreground/90 border-transparent">
                  Email
                </Link>
              </div>
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
          <section className = "mt-8 space-y-6" aria-labelledby = "projects-heading">
            <h2 id = "projects-heading" className = "text-3xl font-semibold">Projects</h2>

            <div className = "space-y-8">
              {projectLists.map((list) =>
              (
                <section key = {list.name} aria-label = {list.name} className = "space-y-3">
                  <h3 className = "border-b border-foreground/15 pb-2 text-xl font-semibold break-words">
                    {list.name}
                  </h3>
                  <div className = "grid grid-cols-1 gap-3">
                    {list.projects.map((p) =>
                    (
                      <ProjectCard
                        key = {p.slug}
                        href = {`/projects/${p.slug}`}
                        className = "min-w-0"
                      >
                        <div className = "flex items-start justify-between gap-4">
                          <h4 className = "min-w-0 break-words text-base font-semibold text-foreground group-hover:text-muted-fg transition">{p.name}</h4>
                          <span aria-hidden = "true" className = "shrink-0 text-foreground group-hover:text-muted-fg transition">
                            ↗
                          </span>
                        </div>
                        <p className = "mt-2 break-words text-sm text-foreground leading-relaxed whitespace-pre-wrap group-hover:text-muted-fg transition">
                          {p.description.trim()}
                        </p>
                        <div className = "mt-4 flex flex-wrap gap-1">
                          {p.tech.map((t) =>
                          (
                            <span
                              key = {t}
                              className = "max-w-full break-words rounded-full bg-muted px-3 py-1 text-xs text-foreground group-hover:text-muted-fg transition"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </ProjectCard>
                    ))}
                  </div>
                </section>
              ))}
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
