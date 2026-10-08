"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Extra classes merged with the base `reveal` class. */
  className?: string;
  /** Stagger delay in milliseconds when several elements reveal together. */
  delay?: number;
  /** Forwarded to the underlying <div> (e.g. an id). */
  id?: string;
};

/**
 * Fades its children in when they scroll into view.
 * Content is hidden only when JavaScript is available (see `.js` in globals.css),
 * so the page remains fully readable without JS and with reduced motion enabled.
 */
export default function Reveal({ children, className = "", delay = 0, id }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof IntersectionObserver === "undefined") {
      element.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const style: CSSProperties | undefined = delay > 0 ? { animationDelay: `${delay}ms` } : undefined;

  return (
    <div id={id} ref={ref} className={`reveal ${className}`} style={style}>
      {children}
    </div>
  );
}
