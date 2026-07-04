import FadeIn from "./FadeIn";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <h2 className="text-sm font-mono uppercase tracking-widest text-accent">
            Projects
          </h2>
          <p className="mt-2 text-2xl font-semibold sm:text-3xl">
            Selected product design work
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.1}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
