export type SkillCategory = "Frontend" | "Backend" | "Tools" | "Design";

export interface Skill {
  name: string;
  icon: string;
  proficiency: number;
  category: SkillCategory;
}

export const skills: Skill[] = [
  { name: "React", icon: "⚛️", proficiency: 95, category: "Frontend" },
  { name: "TypeScript", icon: "🟦", proficiency: 92, category: "Frontend" },
  { name: "Tailwind CSS", icon: "🎨", proficiency: 90, category: "Frontend" },
  { name: "Next.js", icon: "▲", proficiency: 85, category: "Frontend" },
  { name: "Framer Motion", icon: "🎬", proficiency: 80, category: "Frontend" },
  { name: "Node.js", icon: "🟢", proficiency: 88, category: "Backend" },
  { name: "PostgreSQL", icon: "🐘", proficiency: 82, category: "Backend" },
  { name: "Prisma", icon: "🔺", proficiency: 80, category: "Backend" },
  { name: "tRPC", icon: "🔌", proficiency: 78, category: "Backend" },
  { name: "Redis", icon: "🟥", proficiency: 72, category: "Backend" },
  { name: "Git", icon: "🐙", proficiency: 90, category: "Tools" },
  { name: "Docker", icon: "🐳", proficiency: 75, category: "Tools" },
  { name: "Vite", icon: "⚡", proficiency: 88, category: "Tools" },
  { name: "Vitest", icon: "🧪", proficiency: 80, category: "Tools" },
  { name: "Figma", icon: "🖌️", proficiency: 82, category: "Design" },
  { name: "Design Systems", icon: "🧩", proficiency: 85, category: "Design" },
  { name: "Accessibility", icon: "♿", proficiency: 88, category: "Design" },
  { name: "Motion", icon: "✨", proficiency: 76, category: "Design" },
];

export const skillCategories: SkillCategory[] = [
  "Frontend",
  "Backend",
  "Tools",
  "Design",
];
