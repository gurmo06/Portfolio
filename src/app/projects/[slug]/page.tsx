import { notFound } from "next/navigation";
import { projects } from "@/lib/Bio";
import Link from "@/components/Link";
import ProjectCard from "@/components/ProjectCard";

type Props =
{
  params: Promise<{ slug: string }>;
};

export function generateStaticParams()
{
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props)
{
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project)
  {
    return {};
  }

  return {
    title: `${project.name} | Gurmohit Singh`,
    description: project.description.replaceAll("• ", "").replaceAll("\n", " "),
  };
}

export default async function ProjectPage({ params }: Props)
{
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project)
  {
    notFound();
  }

  const parent = projects.find((candidate) =>
    candidate.children?.some((child) => child.slug === project.slug)
  );

  return(
    <main className = "min-h-screen bg-background text-foreground">
        <div className = "mx-auto max-w-4xl px-6 py-16">
          <nav aria-label = "Project navigation" className = "flex flex-wrap gap-3">
            <Link href = "/">← All projects</Link>
            {parent && (
              <Link href = {`/projects/${parent.slug}`} className = "max-w-full">
                ← {parent.name}
              </Link>
            )}
          </nav>

          <section className = "mt-10 space-y-5">
            <div className = "space-y-3">
              <h1 className = "break-words text-4xl font-bold">{project.name}</h1>
              <p className = "break-words whitespace-pre-wrap text-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className = "flex flex-wrap gap-2">
              {project.tech.map((tech) =>
              (
                <span
                  key = {tech}
                  className = "max-w-full break-words rounded-full bg-muted px-3 py-1 text-xs text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.links.length > 0 && (
              <div role = "group" aria-label = "Project links" className = "flex flex-wrap gap-3 pt-2">
                {project.links.map((link) => link.href?.trim() ? (
                  <Link
                    key = {link.label}
                    href = {link.href.trim()}
                    target = {link.href.trim().startsWith("http") ? "_blank" : undefined}
                    rel = {link.href.trim().startsWith("http") ? "noreferrer" : undefined}
                    className = "max-w-full"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key = {link.label}
                    type = "button"
                    disabled
                    title = "Link not added yet"
                    className = "inline-flex max-w-full cursor-not-allowed items-center rounded-full border px-4 py-2 text-left text-sm text-muted-fg opacity-60"
                  >
                    <span className = "min-w-0 break-words">{link.label}</span>
                  </button>
                ))}
              </div>
            )}
          </section>

          {project.children && project.children.length > 0 && (
            <section aria-labelledby = "suite-projects-heading" className = "mt-10 space-y-4">
              <h2 id = "suite-projects-heading" className = "border-b border-foreground/15 pb-2 text-2xl font-semibold">
                Projects
              </h2>
              <div className = "grid grid-cols-1 gap-3">
                {project.children.map((child) => (
                  <ProjectCard key = {child.slug} href = {`/projects/${child.slug}`} className = "min-w-0">
                    <div className = "flex items-start justify-between gap-4">
                      <h3 className = "min-w-0 break-words text-base font-semibold text-foreground group-hover:text-muted-fg transition">
                        {child.name}
                      </h3>
                      <span aria-hidden = "true" className = "shrink-0 text-foreground group-hover:text-muted-fg transition">→</span>
                    </div>
                    <p className = "mt-2 break-words whitespace-pre-wrap text-sm text-foreground leading-relaxed group-hover:text-muted-fg transition">
                      {child.description.trim()}
                    </p>
                    <div className = "mt-4 flex flex-wrap gap-1">
                      {child.tech.map((tech) => (
                        <span key = {tech} className = "max-w-full break-words rounded-full bg-muted px-3 py-1 text-xs text-foreground group-hover:text-muted-fg transition">
                          {tech}
                        </span>
                      ))}
                    </div>
                    {child.children && child.children.length > 0 && (
                      <p className = "mt-3 text-sm text-muted-fg">{child.children.length} projects</p>
                    )}
                  </ProjectCard>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
  );
}
