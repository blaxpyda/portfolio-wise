export type ProjectCategory = "Web" | "Mobile" | "AI";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  thumbnail: string;
  category: ProjectCategory;
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "atlas",
    title: "Atlas Analytics",
    description:
      "A real-time product analytics dashboard with sub-second queries over billions of events.",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=70",
    category: "Web",
    techStack: ["React", "TypeScript", "ClickHouse", "Tailwind"],
    liveUrl: "https://example.com/atlas",
    repoUrl: "https://github.com/yourname/atlas",
    featured: true,
  },
  {
    id: "pulse",
    title: "Pulse",
    description:
      "A native-feeling habit tracker for iOS with streaks, reminders, and a delightful widget.",
    thumbnail:
      "https://images.unsplash.com/photo-1512941937669-90a87b14600d?auto=format&fit=crop&w=1200&q=70",
    category: "Mobile",
    techStack: ["React Native", "Expo", "Reanimated"],
    liveUrl: "https://example.com/pulse",
    repoUrl: "https://github.com/yourname/pulse",
  },
  {
    id: "summarist",
    title: "Summarist",
    description:
      "An AI research assistant that summarizes long papers and answers questions with citations.",
    thumbnail:
      "https://images.unsplash.com/photo-1620712940545-7351b00af470?auto=format&fit=crop&w=1200&q=70",
    category: "AI",
    techStack: ["Next.js", "OpenAI", "pgvector", "tRPC"],
    liveUrl: "https://example.com/summarist",
    repoUrl: "https://github.com/yourname/summarist",
    featured: true,
  },
  {
    id: "cadence",
    title: "Cadence UI",
    description:
      "An open-source headless component library built on React Aria with full keyboard support.",
    thumbnail:
      "https://images.unsplash.com/photo-1555066931-4365b8a90c33?auto=format&fit=crop&w=1200&q=70",
    category: "Web",
    techStack: ["React", "TypeScript", "React Aria"],
    repoUrl: "https://github.com/yourname/cadence-ui",
  },
  {
    id: "drift",
    title: "Drift",
    description:
      "A minimalist markdown note app with end-to-end sync and a vim-style command palette.",
    thumbnail:
      "https://images.unsplash.com/photo-1455390582262-454a47e1d117?auto=format&fit=crop&w=1200&q=70",
    category: "Web",
    techStack: ["Vite", "IndexedDB", "Yjs"],
    liveUrl: "https://example.com/drift",
    repoUrl: "https://github.com/yourname/drift",
  },
  {
    id: "vision",
    title: "Vision Board",
    description:
      "An on-device computer vision playground for object detection and image segmentation.",
    thumbnail:
      "https://images.unsplash.com/photo-1550745115-aa3b890d0a02?auto=format&fit=crop&w=1200&q=70",
    category: "AI",
    techStack: ["TensorFlow.js", "WebGL", "React"],
    repoUrl: "https://github.com/yourname/vision-board",
  },
];

export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  "Web",
  "Mobile",
  "AI",
];
