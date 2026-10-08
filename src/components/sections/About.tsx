import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { about } from "@/data/portfolio";

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About me"
      title="A short introduction"
      description="Who I am, how I work, and what I am looking for."
    >
      <div className="grid gap-10 lg:grid-cols-3 lg:gap-14">
        <Reveal className="lg:col-span-2">
          <div className="space-y-4 text-base leading-relaxed sm:text-lg">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="muted">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="card h-full">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
              Quick facts
            </h3>
            <dl className="mt-4 divide-y divide-zinc-200/70 text-sm dark:divide-zinc-800/70">
              {about.facts.map((fact) => (
                <div key={fact.label} className="flex flex-col gap-0.5 py-3 first:pt-0 last:pb-0">
                  <dt className="muted">{fact.label}</dt>
                  <dd className="font-medium text-zinc-900 dark:text-zinc-100">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
