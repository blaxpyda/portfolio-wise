React Personal Portfolio — Build Prompt
Build a modern, responsive personal portfolio website using React 18+ with TypeScript. Use Vite as the build tool, Tailwind CSS for styling, and Framer Motion for scroll animations and page transitions. The design should be clean, minimal, and professional with a focus on typography and whitespace. Support both light and dark mode with a toggle in the navigation bar, persisting the preference in localStorage.
Structure & Sections:
Navigation — Fixed top navbar with smooth-scroll links to sections (Home, About, Projects, Skills, Contact). Collapse into a hamburger menu on mobile. Add a subtle backdrop blur when scrolling.
Hero Section — Full viewport height. Display my name in a large, bold gradient text heading, a one-line tagline/role description, and two CTAs: "View My Work" (scrolls to Projects) and "Contact Me" (scrolls to Contact). Add a subtle animated background (e.g., floating particles or a gradient mesh).
About Section — Two-column layout on desktop (image left, text right). Include a professional bio (3-4 sentences), a downloadable resume button, and 2-3 key stats (e.g., "5+ Years Experience", "20+ Projects"). Use a staggered fade-in animation on scroll.
Projects Section — Grid of project cards (responsive: 1 col mobile, 2 col tablet, 3 col desktop). Each card should have: project thumbnail image, title, short description (2 lines max), tech stack tags (colored pills), and links to live demo + GitHub repo. Add a filter bar to filter by category (e.g., Web, Mobile, AI). On hover, the card should lift slightly with a shadow and the image should zoom subtly.
Skills Section — Categorized skill display (Frontend, Backend, Tools, Design). Use a bento-grid or icon-based layout. Each skill should show the icon/logo and name. On hover, show a subtle tooltip with proficiency level. Animate the section with a staggered reveal.
Contact Section — A clean contact form with fields: Name, Email, Subject, Message. Include client-side validation with error messages. Below the form, display social links (GitHub, LinkedIn, Twitter/X, Email) as icon buttons. Add a "copy email to clipboard" button with a toast notification. Use a service like Formspree or Web3Forms for form submission without a backend.
Footer — Minimal footer with copyright text, a "Back to Top" button, and a link to the site's GitHub repository.
Design Requirements:
Color palette: Use a sophisticated primary color (e.g., indigo, emerald, or violet) with neutral grays. Ensure WCAG AA contrast compliance.
Typography: Use a modern sans-serif font (Inter or Geist) with clear hierarchy (H1: 48-64px, H2: 32-40px, body: 16-18px).
Spacing: Generous padding between sections (py-20 to py-32). Max-width container of 1280px centered.
Responsive: Fully responsive from 320px to 4K. Test breakpoints: mobile (<640px), tablet (640-1024px), desktop (>1024px).
Performance: Lazy load images, optimize assets, ensure Lighthouse score >90 on all metrics.
Accessibility: Keyboard navigable, focus indicators, semantic HTML, ARIA labels where needed, reduced-motion media query support.
Technical Details:
Use React hooks (useState, useEffect, useRef) for state and scroll detection.
Use react-router-dom only if adding a dedicated blog/projects detail page; otherwise, keep it a single-page app with smooth scroll.
Store project data in a projects.ts config file for easy editing.
Add a custom 404 page if using routing.
Include a README.md with setup instructions and a section on how to customize content.
