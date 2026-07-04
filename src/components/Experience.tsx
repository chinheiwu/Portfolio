import FadeIn from "./FadeIn";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <h2 className="text-sm font-mono uppercase tracking-widest text-accent">
            Experience
          </h2>
          <p className="mt-2 text-2xl font-semibold sm:text-3xl">
            Where I&apos;ve built things
          </p>
        </FadeIn>

        <div className="relative mt-16 space-y-12 border-l border-surface-border pl-8 sm:pl-10">
          {experience.map((entry, i) => (
            <FadeIn key={`${entry.company}-${entry.role}`} delay={i * 0.1}>
              <div className="relative">
                <span className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background sm:-left-[49px]" />
                <p className="font-mono text-xs uppercase tracking-wide text-foreground/50">
                  {entry.period}
                </p>
                <h3 className="mt-1 text-xl font-semibold">{entry.role}</h3>
                <p className="text-accent font-medium">{entry.company}</p>
                <ul className="mt-4 space-y-2 text-foreground/70">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/30" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
