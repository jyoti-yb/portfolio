// ─── Project ────────────────────────────────────────────────
export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string;
  category: "ai" | "web" | "all";
  isWip?: boolean;
  isJoinTeam?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  icon: "lock" | "sun" | "chart" | "code" | "doc" | "terminal";
}

// ─── Blog Post ───────────────────────────────────────────────
export interface BlogPost {
  id: string;
  title: string;
  description: string;
  category: "tech" | "ai" | "life";
  slug: string;
  readTime: string;
  imgLabel: string;
  imgColor: string;
}

// ─── Skill Group (bento icon card) ──────────────────────────
export interface SkillGroup {
  id: string;
  name: string;
  icon: "ai" | "lock" | "code" | "cloud" | "chart";
  stack: string[];
}

// ─── Tech Pill (bento large card) ───────────────────────────
export type TechPill = string;

// ─── Timeline Item ───────────────────────────────────────────
export interface TimelineItem {
  id: string;
  date: string;
  text: string;
  icon: "edu" | "work" | "award" | "code";
}

// ─── Accomplishment ──────────────────────────────────────────
export type Accomplishment = string;

// ─── Nav Tab ─────────────────────────────────────────────────
export interface NavTab {
  label: string;
  href: string;
}
