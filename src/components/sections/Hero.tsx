import Reveal from "@/components/ui/Reveal";
import {
  ArrowRightIcon,
  GithubIcon,
  LinkedinIcon,
  MapPinIcon,
} from "@/components/ui/icons";
import { hero, site } from "@/data/portfolio";

/**
 * Introduction / above-the-fold section.
 */
export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-zinc-200/60 dark:border-zinc-800/60"
    >
      <div aria-hidden className="bg-glow pointer-events-none absolute inset-0" />
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />

      <div className="container-page relative py-20 sm:py-28 lg:py-32">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-4 py-1.5 text-xs font-medium text-zinc-600 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-300">
            <span aria-hidden className="h-2 w-2 rounded-full bg-accent" />
            {hero.badge}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1
            id="hero-heading"
            className="mt-6 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            {hero.greeting} <span className="text-gradient">{site.name}</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-5 max-w-2xl text-lg font-medium sm:text-xl">{hero.subheadline}</p>
        </Reveal>

        <Reveal delay={240}>
          <p className="muted mt-4 max-w-2xl text-base leading-relaxed sm:text-lg">
            {hero.intro}
          </p>
        </Reveal>

        <Reveal delay={320} className="mt-9 flex flex-wrap items-center gap-3">
          <a href={hero.primaryCta.href} className="btn-primary">
            {hero.primaryCta.label}
            <ArrowRightIcon className="h-4 w-4" />
          </a>
          <a href={hero.secondaryCta.href} className="btn-secondary">
            {hero.secondaryCta.label}
          </a>
          <span className="flex items-center gap-1">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in a new tab)"
              className="icon-button border border-zinc-200 dark:border-zinc-800"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in a new tab)"
              className="icon-button border border-zinc-200 dark:border-zinc-800"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </span>
        </Reveal>

        <Reveal delay={400}>
          <dl className="muted mt-12 grid max-w-3xl gap-x-8 gap-y-4 border-t border-zinc-200/70 pt-8 text-sm sm:grid-cols-3 dark:border-zinc-800/70">
            <div>
              <dt className="font-semibold text-zinc-900 dark:text-zinc-100">Location</dt>
              <dd className="mt-1 flex items-center gap-1.5">
                <MapPinIcon className="h-4 w-4 shrink-0" aria-hidden />
                {site.location}
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-zinc-900 dark:text-zinc-100">Email</dt>
              <dd className="mt-1 truncate">
                <a href={`mailto:${site.email}`} className="hover:text-accent">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-zinc-900 dark:text-zinc-100">Status</dt>
              <dd className="mt-1 flex items-center gap-1.5">
                <span aria-hidden className="h-2 w-2 rounded-full bg-emerald-500" />
                {site.availability}
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
