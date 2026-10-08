import type { ReactNode } from "react";
import Reveal from "@/components/ui/Reveal";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  /** Extra classes for the <section> element (e.g. a tinted band). */
  className?: string;
};

/**
 * Shared section shell: anchor id, accessible heading pair, and scroll padding
 * for the sticky header.
 */
export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`scroll-mt-20 py-16 sm:scroll-mt-24 sm:py-24 ${className}`}
    >
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2
            id={`${id}-heading`}
            className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            {title}
          </h2>
          {description ? <p className="muted mt-4 text-base sm:text-lg">{description}</p> : null}
        </Reveal>

        <div className="mt-10 sm:mt-12">{children}</div>
      </div>
    </section>
  );
}
