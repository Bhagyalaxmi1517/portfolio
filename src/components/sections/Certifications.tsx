import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { ArrowUpRightIcon, AwardIcon } from "@/components/ui/icons";
import { certifications } from "@/data/portfolio";

export default function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications & training"
      title="Courses and credentials"
      description="Formal training, certificates and programs I have completed."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((certification, index) => (
          <Reveal key={certification.id} delay={index * 60} className="h-full">
            <article className="card card-hover flex h-full flex-col">
              <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent-subtle text-accent">
                <AwardIcon className="h-5 w-5" />
              </span>

              <h3 className="text-base font-semibold">{certification.name}</h3>
              <p className="muted mt-1 text-sm">
                {certification.issuer} · {certification.year}
              </p>

              <a
                href={certification.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent"
              >
                View credential
                <ArrowUpRightIcon className="h-4 w-4" />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
