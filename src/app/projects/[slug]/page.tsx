import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjectBySlug, projects } from "@/data/projects";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import FadeIn from "@/components/FadeIn";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} — Chin Hei Wu`,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [{ url: project.heroImage.src }],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article>
      <div className="relative aspect-[21/9] w-full overflow-hidden bg-surface-border">
        <Image
          src={project.heroImage.src}
          alt={project.heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="mx-auto max-w-4xl px-6 py-16">
        <Link
          href="/projects"
          className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
        >
          ← Back to Projects
        </Link>

        <FadeIn>
          <p className="mt-6 font-mono text-xs uppercase tracking-wide text-foreground/50">
            {project.timeframe} · {project.role}
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-6 text-lg text-foreground/70">{project.summary}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-surface-border px-3 py-1 text-xs text-foreground/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>

        <div className="mt-16 space-y-16">
          <FadeIn>
            <Section title="Insight">
              <p className="text-foreground/70 leading-relaxed">
                {project.insight}
              </p>
            </Section>
          </FadeIn>

          <FadeIn>
            <Section title="Objective">
              <p className="text-foreground/70 leading-relaxed">
                {project.objective}
              </p>
            </Section>
          </FadeIn>

          <FadeIn>
            <Section title="Key Features">
              <ul className="space-y-3">
                {project.keyFeatures.map((feature) => (
                  <li key={feature} className="flex gap-3 text-foreground/70">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Section>
          </FadeIn>

          {project.processImages.length > 0 && (
            <FadeIn>
              <Section title="Sketches & Process">
                <ImageGrid images={project.processImages} />
              </Section>
            </FadeIn>
          )}

          {project.youtubeIds && project.youtubeIds.length > 0 && (
            <FadeIn>
              <Section title="3D Animation">
                <div className="space-y-6">
                  {project.youtubeIds.map((id) => (
                    <YouTubeEmbed key={id} videoId={id} />
                  ))}
                </div>
              </Section>
            </FadeIn>
          )}

          {project.prototypeImages.length > 0 && (
            <FadeIn>
              <Section title="Prototype">
                <ImageGrid images={project.prototypeImages} />
              </Section>
            </FadeIn>
          )}

          <FadeIn>
            <Section title="Outcome">
              <p className="text-foreground/70 leading-relaxed">
                {project.outcome}
              </p>
            </Section>
          </FadeIn>
        </div>
      </div>
    </article>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="mb-5 text-sm font-mono uppercase tracking-widest text-accent">
        {title}
      </h2>
      {children}
    </div>
  );
}

function ImageGrid({
  images,
}: {
  images: { src: string; alt: string; caption?: string }[];
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {images.map((img) => (
        <figure key={img.src}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-surface-border bg-surface">
            <Image src={img.src} alt={img.alt} fill className="object-cover" />
          </div>
          {img.caption && (
            <figcaption className="mt-2 text-xs text-foreground/50">
              {img.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
