import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { StarIcon } from "@/components/ui/icons";
import { achievements } from "@/data/portfolio";

export default function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title="Highlights I am proud of"
      description="Awards, recognitions and milestones worth mentioning."
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement, index) => (
          <li key={achievement.id} className="h-full">
            <Reveal delay={index * 60} className="h-full">
              <article className="card card-hover flex h-full flex-col">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent-subtle text-accent">
                    <StarIcon className="h-5 w-5" />
                  </span>
                  <span className="chip">{achievement.year}</span>
                </div>

                <h3 className="mt-4 text-base font-semibold">{achievement.title}</h3>
                <p className="muted mt-2 text-sm leading-relaxed">{achievement.description}</p>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
