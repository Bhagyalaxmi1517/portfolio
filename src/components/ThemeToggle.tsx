"use client";

import { useLayoutEffect, useSyncExternalStore } from "react";
import { MoonIcon, SunIcon } from "@/components/ui/icons";

/**
 * Light / dark mode toggle.
 *
 * The theme is stored in localStorage and applied before hydration by the
 * inline script in the root layout. Here we simply observe the `class`
 * attribute of <html> as the source of truth, so the button always reflects
 * the current theme (including when it changes in another tab).
 */

function subscribe(onStoreChange: () => void) {
  const observer = new MutationObserver(onStoreChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

function getSnapshot() {
  return document.documentElement.classList.contains("dark");
}

function getServerSnapshot() {
  return false;
}

function toggleTheme() {
  const next = !document.documentElement.classList.contains("dark");
  document.documentElement.classList.toggle("dark", next);
  try {
    localStorage.setItem("theme", next ? "dark" : "light");
  } catch {
    /* storage may be unavailable (private mode) — the class still applies */
  }
}

export default function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // The inline script in the root layout applies the stored (or system) theme
  // to <html> before paint. React's dev-only Strict Mode remount resets the
  // JSX-managed `<html>` class attribute and clears it, so re-apply the same
  // logic here. This is a no-op in production.
  useLayoutEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem("theme");
    } catch {
      /* storage may be unavailable (private mode) — fall back to system */
    }
    const dark = stored
      ? stored === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  const label = isDark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="icon-button"
    >
      {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
    </button>
  );
}
