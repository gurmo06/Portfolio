// /src/app/page.tsx

/* Import biographical data from the bio.tsx module */
import { name, title, location, email, about, links, projects } from "@/lib/bio";

/* Main Page */
export default function Home()
{
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-16">
        {/* Header */}
        <header className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tight">
            {name}
          </h1>
         
        </header>
      </div>
    </main>
  );
}
