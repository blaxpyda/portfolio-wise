export type ProjectCategory = "Web" | "Mobile" | "AI" | "Backend";

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
    id: "kline-chart",
    title: "Kline Chart",
    description:
      "A TradingView-style candlestick charting implementation with real-time market data and technical indicators.",
    longDescription:
      "A from-scratch financial charting library delivering TradingView-grade interactivity — zooming, crosshairs, drawing tools, and live tick updates — built for low-latency market dashboards.",
    thumbnail: "/projects/kline-chart.svg",
    category: "Web",
    techStack: ["TypeScript", "React", "Canvas", "WebSocket"],
    repoUrl: "https://github.com/blaxpyda/kline-chart",
    featured: true,
  },
  {
    id: "trust-shop",
    title: "Trust Shop",
    description:
      "A grocery storefront with cart, checkout, and product catalogue — fast, responsive, and mobile-friendly.",
    thumbnail: "/projects/trust-shop.svg",
    category: "Web",
    techStack: ["TypeScript", "React", "Tailwind"],
    liveUrl: "https://trust-shop-delta.vercel.app",
    repoUrl: "https://github.com/blaxpyda/trust-shop",
    featured: true,
  },
  {
    id: "shop-soa",
    title: "Shop SOA",
    description:
      "A distributed, service-oriented grocery platform — decomposed into independently deployable microservices.",
    longDescription:
      "An end-to-end distributed systems take on e-commerce: services communicate over gRPC/REST, with shared auth, inventory, and order domains built for resilience and horizontal scaling.",
    thumbnail: "/projects/shop-soa.svg",
    category: "Backend",
    techStack: ["Go", "Postgres", "Docker", "gRPC"],
    repoUrl: "https://github.com/blaxpyda/shop-soa",
    featured: true,
  },
  {
    id: "agent-srs",
    title: "Agent SRS",
    description:
      "An AI agent that reads your idea and produces a complete Software Requirements Specification document.",
    thumbnail: "/projects/agent-srs.svg",
    category: "AI",
    techStack: ["Python", "LLM", "Prompt Engineering"],
    repoUrl: "https://github.com/blaxpyda/agent-srs",
  },
  {
    id: "mobile-bot",
    title: "Mobile Bot",
    description:
      "A Kotlin mobile UI for a trading bot — live positions, order management, and real-time market streams.",
    thumbnail: "/projects/mobile-bot.svg",
    category: "Mobile",
    techStack: ["Kotlin", "Android", "Coroutines"],
    repoUrl: "https://github.com/blaxpyda/mobile-bot",
  },
];

export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  "Web",
  "Mobile",
  "AI",
  "Backend",
];
