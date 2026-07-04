import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-2xl border border-surface-border bg-surface transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface-border">
        <Image
          src={project.heroImage.src}
          alt={project.heroImage.alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <p className="font-mono text-xs uppercase tracking-wide text-foreground/50">
          {project.timeframe}
        </p>
        <h3 className="mt-2 text-lg font-semibold leading-snug">
          {project.title}
        </h3>
        <p className="mt-3 line-clamp-2 text-sm text-foreground/70">
          {project.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-surface-border px-2.5 py-1 text-xs text-foreground/60"
            >
              {tag}
            </span>
          ))}
        </div>

        <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent">
          View Project
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
