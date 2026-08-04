export const personalInfo = {
  name: "Jane Doe",
  firstName: "Jane",
  lastName: "Doe",
  role: "Full-Stack Engineer & UI Engineer",
  tagline:
    "I design and build fast, accessible web experiences with React, TypeScript, and a love for the details.",
  email: "jane@example.com",
  location: "San Francisco, CA",
  resumeUrl: "/resume.pdf",
  bio: [
    "I'm a full-stack engineer with 5+ years of experience shipping production web apps used by millions. I specialize in React, TypeScript, and design systems that scale.",
    "Currently, I lead frontend at a Series B startup, where I focus on performance, accessibility, and developer experience. Previously, I built data tooling at a fintech.",
    "Outside of work, I write about web fundamentals, contribute to open source, and tinker with side projects that explore the edges of the web platform.",
  ],
  stats: [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Shipped", value: "20+" },
    { label: "Open Source Stars", value: "3.4k" },
  ],
  socials: {
    github: "https://github.com/yourname",
    linkedin: "https://linkedin.com/in/yourname",
    twitter: "https://twitter.com/yourname",
    email: "jane@example.com",
  },
  siteRepo: "https://github.com/yourname/portfolio",
  contactFormEndpoint: "https://api.web3forms.com/submit",
  contactFormAccessKey: "YOUR_WEB3FORMS_ACCESS_KEY",
};

export type PersonalInfo = typeof personalInfo;
