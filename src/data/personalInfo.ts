export const personalInfo = {
  name: "KING Diesel",
  firstName: "KING",
  lastName: "Diesel",
  role: "Software and Systems Developer",
  tagline:
    "I design and build fast, and reliable software solutions",
  email: "arindaj33@gmail.com",
  location: "Kampala, Uganda",
  resumeUrl: "/resume.pdf",
  bio: [
    "I build fast, resilient systems with Go and V — from low-latency backends to lean, native-quick tools that don't waste cycles or excuses.",
    "On the frontend, I craft interfaces in React and TypeScript that feel instant, accessible, and actually nice to use.",
    "I care about correctness, simplicity, and shipping software that's still a joy to maintain years later.",
  ],
  stats: [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Shipped", value: "20+" },
    { label: "Open Source Stars", value: "3.4k" },
  ],
  socials: {
    github: "https://github.com/blaxpyda",
    linkedin: "https://www.linkedin.com/in/arinda-johnson-37b185172/",
    twitter: "https://x.com/TheFlying_Goat",
    email: "arindaj33@gmail.com",
  },
  siteRepo: "https://github.com/blaxpyda/portfolio-wise",
  contactFormEndpoint: "https://api.web3forms.com/submit",
  contactFormAccessKey: "074b7694-59c8-438e-8059-34df29a7d9f4",
};

export type PersonalInfo = typeof personalInfo;
