import FadeIn from "./FadeIn";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="border-t border-surface-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <h2 className="text-sm font-mono uppercase tracking-widest text-accent">
            Education
          </h2>
        </FadeIn>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {education.map((entry, i) => (
            <FadeIn key={entry.degree} delay={i * 0.1}>
              <div className="rounded-2xl border border-surface-border bg-surface p-6">
                <p className="font-mono text-xs uppercase tracking-wide text-foreground/50">
                  {entry.period}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{entry.degree}</h3>
                <p className="mt-1 text-accent font-medium">
                  {entry.institution}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
