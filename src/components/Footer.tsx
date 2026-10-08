import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { sections, site } from "@/data/portfolio";

/**
 * Resolved once at build time (cache components do not allow unstable
 * values such as the current date during prerendering).
 */
async function getCopyrightYear() {
  "use cache";
  return new Date().getFullYear();
}

export default async function Footer() {
  const year = await getCopyrightYear();

  return (
    <footer className="border-t border-zinc-200/70 bg-white dark:border-zinc-800/70 dark:bg-zinc-950">
      <div className="container-page py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="text-base font-bold tracking-tight">
              {site.name}
              <span className="text-accent">.</span>
            </p>
            <p className="muted mt-2 text-sm leading-relaxed">{site.headline}</p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="muted transition-colors hover:text-accent">
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-zinc-200/70 pt-6 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800/70">
          <p className="muted text-sm">
            © {year} {site.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-1">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in a new tab)"
              className="icon-button"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in a new tab)"
              className="icon-button"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
