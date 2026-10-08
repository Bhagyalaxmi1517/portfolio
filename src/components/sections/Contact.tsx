import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import {
  ArrowRightIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
} from "@/components/ui/icons";
import { contact, site } from "@/data/portfolio";

const methods = [
  {
    id: "email",
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    external: false,
    Icon: MailIcon,
  },
  {
    id: "github",
    label: "GitHub",
    value: site.github.replace(/^https?:\/\//, ""),
    href: site.github,
    external: true,
    Icon: GithubIcon,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: site.linkedin.replace(/^https?:\/\/(www\.)?/, ""),
    href: site.linkedin,
    external: true,
    Icon: LinkedinIcon,
  },
  {
    id: "location",
    label: "Location",
    value: site.location,
    href: null,
    external: false,
    Icon: MapPinIcon,
  },
] as const;

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's get in touch"
      description={contact.blurb}
      className="border-t border-zinc-200/60 bg-zinc-50/60 dark:border-zinc-800/60 dark:bg-zinc-900/30"
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <Reveal>
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-3">
              <a href={`mailto:${site.email}`} className="btn-primary">
                Send an email
                <ArrowRightIcon className="h-4 w-4" />
              </a>
              <a href={site.resumeUrl} className="btn-secondary">
                <DownloadIcon className="h-4 w-4" />
                Download résumé
              </a>
            </div>

            <p className="muted flex items-center gap-2 text-sm">
              <span aria-hidden className="h-2 w-2 rounded-full bg-emerald-500" />
              {contact.responseTime}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {methods.map((method, index) => {
            const content = (
              <>
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-subtle text-accent">
                  <method.Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-medium uppercase tracking-wider muted">
                    {method.label}
                  </span>
                  <span className="mt-0.5 block truncate text-sm font-medium">
                    {method.value}
                  </span>
                </span>
              </>
            );

            return (
              <Reveal key={method.id} delay={index * 60} className="h-full">
                {method.href ? (
                  <a
                    href={method.href}
                    {...(method.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="card card-hover flex h-full items-center gap-3"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="card flex h-full items-center gap-3">{content}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
