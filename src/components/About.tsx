import FadeIn from "./FadeIn";
import { technicalSkills, softSkills } from "@/data/education";

export default function About() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <h2 className="text-sm font-mono uppercase tracking-widest text-accent">
            About
          </h2>
        </FadeIn>

        <div className="mt-6 grid gap-12 md:grid-cols-2">
          <FadeIn delay={0.1}>
            <p className="text-2xl font-semibold leading-snug sm:text-3xl">
              4+ years designing plastic and sheet metal products, from
              first sketch to production line.
            </p>
            <p className="mt-6 text-foreground/70 leading-relaxed">
              I&apos;m a Mechanical Design Engineer with a Bachelor&apos;s and
              Master&apos;s in Mechanical Engineering from the University of
              Melbourne. Over the past four years I&apos;ve specialised in
              product design for plastics and sheet metal manufacturing —
              taking concepts through CAD, simulation, and rapid prototyping
              to a design that&apos;s ready for tooling. I&apos;m a SolidWorks
              expert and enjoy working close to the factory floor to solve
              the problems that only show up once a part actually gets made.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground/50">
                  Technical Tools
                </h3>
                <ul className="space-y-3">
                  {technicalSkills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 rounded-lg border border-surface-border bg-surface px-4 py-3 text-sm font-medium"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground/50">
                  Core Strengths
                </h3>
                <ul className="space-y-3">
                  {softSkills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 rounded-lg border border-surface-border bg-surface px-4 py-3 text-sm font-medium"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
