import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { ArrowUpRightIcon, GithubIcon } from "@/components/ui/icons";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      description="A few things I have designed, built or contributed to."
      className="border-y border-zinc-200/60 bg-zinc-50/60 dark:border-zinc-800/60 dark:bg-zinc-900/30"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 70} className="h-full">
            <article className="card card-hover flex h-full flex-col">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} source code (opens in a new tab)`}
                  className="icon-button -mr-2 -mt-2 shrink-0"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>
              </div>

              <p className="muted mt-3 flex-1 text-sm leading-relaxed">{project.description}</p>

              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                {project.tags.map((tag) => (
                  <li key={tag} className="chip">
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex items-center gap-4 border-t border-zinc-200/70 pt-4 text-sm font-medium dark:border-zinc-800/70">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
                >
                  Source
                  <ArrowUpRightIcon className="h-4 w-4" />
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
                >
                  Live demo
                  <ArrowUpRightIcon className="h-4 w-4" />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
