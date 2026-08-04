# Personal Portfolio

A modern, responsive personal portfolio built with React 18, TypeScript, Vite, Tailwind CSS, and Framer Motion. Dark mode, smooth-scroll single page, accessible, and content-driven from config files.

## Features

- ⚡ **Vite + React 18 + TypeScript** — fast HMR, strict types
- 🎨 **Tailwind CSS** — custom indigo theme, dark mode with `localStorage` persistence
- 🎬 **Framer Motion** — staggered scroll reveals, page transitions, animated hero background
- 🧭 **Fixed navbar** — backdrop blur on scroll, mobile hamburger, smooth-scroll links
- 🦸 **Hero** — full viewport, gradient heading, dual CTAs, animated mesh background
- 👤 **About** — two-column layout, staggered fade-in, stats, resume download
- 🗂️ **Projects** — responsive grid, category filter, hover lift + image zoom, tech pills
- 🧰 **Skills** — bento grid by discipline, hover tooltips with proficiency
- ✉️ **Contact** — validated form (Web3Forms-ready), copy-email + toast, social links
- 🦶 **Footer** — copyright, GitHub link, floating Back-to-Top button
- 🚫 **404 page** with routing via react-router-dom
- ♿ **Accessible** — semantic HTML, ARIA labels, keyboard focus rings, `prefers-reduced-motion` support

## Getting started

```bash
npm install
npm run dev      # start dev server at http://localhost:5173
npm run build    # type-check + production build to /dist
npm run preview  # preview the production build
npm run lint     # eslint
npm run typecheck # tsc, no emit
```

## Customizing content

All content lives in [`src/data`](./src/data). Edit these files — no component changes needed.

### `src/data/personalInfo.ts`
Your identity, bio, stats, social links, resume URL, and contact form config.

- `name`, `role`, `tagline`, `email`, `location`
- `bio` — array of paragraphs (3–4 recommended)
- `stats` — array of `{ label, value }` shown in About
- `socials` — GitHub, LinkedIn, Twitter, email URLs
- `resumeUrl` — drop your PDF in `public/` and point here (default: `/resume.pdf`)
- `contactFormEndpoint` + `contactFormAccessKey` — see "Contact form" below

### `src/data/projects.ts`
An array of projects. Each entry:

```ts
{
  id: "atlas",
  title: "Atlas Analytics",
  description: "A one-to-two line summary.",
  thumbnail: "https://...jpg",   // or /images/foo.jpg from public/
  category: "Web",               // "Web" | "Mobile" | "AI"
  techStack: ["React", "TypeScript"],
  liveUrl: "https://...",        // optional
  repoUrl: "https://github.com/...", // optional
  featured: true,                // optional, shows a badge
}
```

Add new categories by extending the `ProjectCategory` type and `projectCategories` array.

### `src/data/skills.ts`
Skills grouped into `Frontend | Backend | Tools | Design`. Each skill has `{ name, icon, proficiency }`. `icon` is an emoji string — swap for an SVG component if you prefer. Adjust `skillCategories` to add groups.

## Theming

Colors, fonts, and animations are defined in `tailwind.config.js`. The default brand color is **indigo** (`brand`). To switch to emerald or violet, replace the `brand` palette values. Dark mode is class-based (`darkMode: "class"`) and toggled by `ThemeContext`.

## Contact form

The form submits via [Web3Forms](https://web3forms.com) (no backend required):

1. Create a free account at web3forms.com and copy your **access key**.
2. Set `contactFormAccessKey` in `src/data/personalInfo.ts`.
3. Done — submissions land in your email inbox.

To use [Formspree](https://formspree.io) instead, set `contactFormEndpoint` to your Formspree URL and remove the `access_key` field from the request body in `src/sections/Contact.tsx`.

## Deployment

This is a static SPA — deploy the `dist/` folder anywhere: Vercel, Netlify, GitHub Pages, Cloudflare Pages, S3, etc.

```bash
npm run build
# upload ./dist
```

## License

MIT — free to use and modify for your own portfolio.
