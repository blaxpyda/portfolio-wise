export type SkillCategory = "Frontend" | "Backend" | "Tools" | "Design";

export interface Skill {
  name: string;
  icon: string;
  proficiency: number;
  category: SkillCategory;
}

export const skills: Skill[] = [
  // Frontend
  { name: "React", icon: "⚛️", proficiency: 92, category: "Frontend" },
  { name: "TypeScript", icon: "🟦", proficiency: 90, category: "Frontend" },
  { name: "JavaScript", icon: "🟨", proficiency: 94, category: "Frontend" },
  { name: "Kotlin", icon: "🟪", proficiency: 78, category: "Frontend" },
  // Backend
  { name: "Go", icon: "🐹", proficiency: 95, category: "Backend" },
  { name: "PostgreSQL", icon: "🐘", proficiency: 85, category: "Backend" },
  { name: "Rust", icon: "🦀", proficiency: 75, category: "Backend" },
  { name: "Python", icon: "🐍", proficiency: 82, category: "Backend" },
  // Tools
  { name: "Git", icon: "🐙", proficiency: 90, category: "Tools" },
  { name: "Postman", icon: "🚀", proficiency: 88, category: "Tools" },
  { name: "Docker", icon: "🐳", proficiency: 80, category: "Tools" },
  { name: "Bruno", icon: "🥊", proficiency: 84, category: "Tools" },
  // Design
  { name: "Claude Design", icon: "✨", proficiency: 88, category: "Design" },
  { name: "Excalidraw", icon: "✏️", proficiency: 86, category: "Design" },
  { name: "Figma", icon: "🖌️", proficiency: 80, category: "Design" },
  { name: "Drawio", icon: "📐", proficiency: 82, category: "Design" },
];

export const skillCategories: SkillCategory[] = [
  "Frontend",
  "Backend",
  "Tools",
  "Design",
];
