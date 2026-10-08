# Personal Portfolio

A modern, clean and professional personal portfolio website built with **Next.js**, **TypeScript** and **Tailwind CSS**.

It ships as a single, fast, fully static page with every section a recruiter or client usually looks for:

| Section | Purpose |
| --- | --- |
| Hero / Introduction | Name, headline, call-to-action and social links |
| About Me | Short biography and quick facts |
| Professional Experience | Timeline of roles and achievements |
| Skills | Grouped technical skills |
| Projects | Project cards with source and live links |
| Certifications & Training | Credentials with verification links |
| Education | Academic background |
| Achievements | Awards, recognitions and milestones |
| Contact | Email, GitHub, LinkedIn, location and résumé |
| Footer | Navigation, GitHub and LinkedIn links |

## ✨ Features

- **Responsive** — mobile-first layout with a collapsible navigation menu.
- **Fast** — fully static output, self-hosted fonts, no client-side data fetching.
- **Accessible** — semantic landmarks, skip-to-content link, visible focus states, `aria` labelling, and full support for `prefers-reduced-motion`.
- **Polished** — subtle scroll-reveal animations, sticky blurred header with scroll-spy navigation, and a light/dark theme toggle that remembers your choice.
- **SEO ready** — metadata, Open Graph and Twitter cards, `sitemap.xml`, `robots.txt` and `Person` JSON-LD structured data.
- **Easy to maintain** — all content lives in one file; components are small and modular.

## 🧰 Tech stack

- [Next.js 16](https://nextjs.org/) (App Router, Cache Components, Turbopack)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- ESLint (`eslint-config-next`)

## 🚀 Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
# → http://localhost:3000

# 3. Production build
npm run build
npm start
```

## ✏️ Customising your content

**Everything you need to edit is in [`src/data/portfolio.ts`](src/data/portfolio.ts).**
The components never hard-code copy, links or dates.

1. Replace the placeholder values (`Your Name`, `you@example.com`, `your-username`, `example.com`, …).
2. Add, remove or reorder entries in `experience`, `projects`, `skillGroups`, `certifications`, `education` and `achievements`.
3. Adjust `sections` if you want to change the navigation order or labels — the header, footer and scroll-spy all read from it.

> ⚠️ Every value in `src/data/portfolio.ts` is a **placeholder**. None of it is real personal information — replace it before deploying.

Other small tweaks:

| What | Where |
| --- | --- |
| Accent colour, card/chip/button styles, animations | `src/app/globals.css` |
| Site title, description, Open Graph tags | `src/app/layout.tsx` (imports copy from `portfolio.ts`) |
| Résumé download link | `site.resumeUrl` — drop a PDF in `public/` (default: `public/resume.pdf`) |
| Favicon | `src/app/favicon.ico` |
| Section order on the page | `src/app/page.tsx` |

### Environment variables

Create a `.env.local` file (or set it in your hosting provider):

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

This absolute URL is used for `sitemap.xml`, `robots.txt`, canonical links and social previews.
It defaults to `https://example.com` when unset.

## 📁 Project structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout: fonts, metadata, header/footer, theme script
│   ├── page.tsx            # Single page that composes all sections (+ JSON-LD)
│   ├── globals.css         # Tailwind v4 theme, design tokens, reveal animation
│   ├── robots.ts           # /robots.txt
│   └── sitemap.ts          # /sitemap.xml
├── components/
│   ├── Header.tsx          # Sticky nav with scroll spy + mobile menu
│   ├── ThemeToggle.tsx     # Light/dark switch
│   ├── Footer.tsx
│   ├── sections/           # One component per page section
│   │   ├── Hero.tsx  About.tsx  Experience.tsx  Skills.tsx
│   │   ├── Projects.tsx  Certifications.tsx  Education.tsx
│   │   └── Achievements.tsx  Contact.tsx
│   └── ui/
│       ├── Section.tsx     # Shared section shell (id, heading, description)
│       ├── Reveal.tsx      # Scroll-reveal wrapper
│       └── icons.tsx       # Inline SVG icons (no icon dependency)
└── data/
    └── portfolio.ts        # ← all of your content lives here
```

## 🌗 Theme & animations

- The theme is applied **before first paint** by a tiny inline script in `layout.tsx`, so there is no flash of the wrong theme. The choice is stored in `localStorage` under `theme`.
- Scroll-reveal animations only hide content when JavaScript is available (`.js` class) and are disabled entirely for users who prefer reduced motion — the page stays fully readable in both cases.

## ♿ Accessibility notes

- One `<h1>` per page and a consistent heading hierarchy; each section is labelled by its heading.
- Skip-to-content link, landmarks (`header`, `main`, `nav`, `footer`), and `aria-current` on the active nav item.
- Icon-only buttons and links carry `aria-label`s; decorative SVGs are `aria-hidden`.
- Colour contrast meets WCAG AA in both themes.

## ▲ Deploying

### Vercel (recommended)

1. Push this repository to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new) — the framework is detected automatically.
3. Add `NEXT_PUBLIC_SITE_URL` under *Settings → Environment Variables* (e.g. `https://your-domain.com`).
4. Deploy.

### Anywhere else

```bash
npm run build   # outputs an optimized production build
npm start       # serves it
```

## 📜 Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |
