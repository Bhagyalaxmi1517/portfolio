import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { GraduationCapIcon } from "@/components/ui/icons";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Academic background"
      description="Where I studied and what I focused on."
      className="border-y border-zinc-200/60 bg-zinc-50/60 dark:border-zinc-800/60 dark:bg-zinc-900/30"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {education.map((item, index) => (
          <Reveal key={item.id} delay={index * 70} className="h-full">
            <article className="card card-hover flex h-full gap-4">
              <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-subtle text-accent">
                <GraduationCapIcon className="h-5 w-5" />
              </span>

              <div>
                <h3 className="text-base font-semibold">{item.degree}</h3>
                <p className="mt-1 text-sm font-medium text-accent">
                  {item.institution}
                  <span className="muted font-normal"> · {item.period}</span>
                </p>

                <ul className="muted mt-3 space-y-1.5 text-sm leading-relaxed">
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
