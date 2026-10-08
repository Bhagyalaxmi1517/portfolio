import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Professional experience"
      title="Where I have worked"
      description="Roles, responsibilities and the outcomes I contributed to."
      className="border-y border-zinc-200/60 bg-zinc-50/60 dark:border-zinc-800/60 dark:bg-zinc-900/30"
    >
      <div className="relative">
        <span
          aria-hidden
          className="absolute bottom-3 left-[5px] top-3 w-px bg-zinc-300 dark:bg-zinc-700 sm:left-[7px]"
        />

        <ol className="relative">
          {experience.map((item, index) => (
            <li key={item.id} className="relative pb-8 pl-8 last:pb-0 sm:pl-11">
              <span
                aria-hidden
                className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-accent shadow-[0_0_0_4px_var(--accent-subtle)] sm:h-4 sm:w-4"
              />

              <Reveal delay={index * 70}>
                <article className="card">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-lg font-semibold">{item.role}</h3>
                    <span className="chip whitespace-nowrap">{item.period}</span>
                  </div>

                  <p className="mt-1 text-sm font-medium text-accent">
                    {item.company}
                    <span className="muted font-normal"> · {item.location}</span>
                  </p>

                  <p className="muted mt-3 text-sm leading-relaxed sm:text-base">
                    {item.summary}
                  </p>

                  <ul className="mt-4 space-y-2 text-sm">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="muted flex gap-2.5 leading-relaxed"
                      >
                        <span
                          aria-hidden
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
