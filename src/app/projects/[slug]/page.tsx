import { notFound } from "next/navigation";
import { projects } from "@/lib/Bio";
import Link from "@/components/Link";

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

  return(
    <main className = "min-h-screen bg-background text-foreground">
        <div className = "mx-auto max-w-4xl px-6 py-16">
          <Link href = "/">
            ← Back
          </Link>

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
        </div>
      </main>
  );
}
