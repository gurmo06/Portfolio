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
              <h1 className = "text-4xl font-bold tracking-tight">{project.name}</h1>
              <p className = "whitespace-pre-wrap text-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className = "flex flex-wrap gap-2">
              {project.tech.map((tech) =>
              (
                <span
                  key = {tech}
                  className = "rounded-full bg-muted px-3 py-1 text-xs text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className = "pt-2">
              <Link
                href = {project.sourceHref}
                target = "_blank"
                rel = "noreferrer"
              >
                Source
              </Link>
              {project.liveHref && (
                <Link
                  href = {project.liveHref}
                  target = "_blank"
                  rel = "noreferrer"
                  className = "ml-4"
                >
                  Live
                </Link>
              )}
            </div>
          </section>
        </div>
      </main>
  );
}
