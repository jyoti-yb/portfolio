import type { SkillGroup, TechPill, TimelineItem, Accomplishment } from "@/types";

// Large bento pill card
export const techPills: TechPill[] = [
  "Java", "Python", "TypeScript", "React", "Next.js",
  "Node.js", "Express", "FastAPI", "TensorFlow", "AWS",
  "Firebase", "Docker", "PostgreSQL", "MongoDB",
];

// Icon bento cards
export const skillGroups: SkillGroup[] = [
  {
    id: "ai",
    name: "AI Engineering",
    icon: "ai",
    stack: ["TensorFlow", "PyTorch", "LangChain", "NLP", "FastAPI"],
  },
  {
    id: "crypto",
    name: "Cryptography & Security",
    icon: "lock",
    stack: ["CRYSTALS-Kyber", "Dilithium", "AES-256", "Post-Quantum"],
  },
  {
    id: "fullstack",
    name: "Full Stack Dev",
    icon: "code",
    stack: ["React", "Next.js", "Node.js", "Express", "Firebase"],
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    icon: "cloud",
    stack: ["AWS", "Docker", "Git", "Linux", "CI/CD"],
  },
  {
    id: "data",
    name: "Data Science & ML",
    icon: "chart",
    stack: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
  },
];

// About page timeline
export const timelineItems: TimelineItem[] = [
  {
    id: "edu",
    date: "2022 – Present",
    text: "B.Tech Computer Science & Engineering, JNTU Kakinada, Andhra Pradesh",
    icon: "edu",
  },
  {
    id: "google-wep",
    date: "2024",
    text: "Google Women Engineering Program — Advanced engineering & leadership fellowship (Google-supported)",
    icon: "award",
  },
  {
    id: "shefi",
    date: "2024",
    text: "SheFi Scholar — Web3 & DeFi scholarship for emerging women leaders in decentralized finance",
    icon: "award",
  },
  {
    id: "sih",
    date: "2023",
    text: "Smart India Hackathon — National hackathon, Government of India / Ministry of Education",
    icon: "code",
  },
  {
    id: "leetcode",
    date: "Ongoing",
    text: "200+ LeetCode problems solved — Arrays, Graphs, DP, Trees, Sliding Window & more",
    icon: "code",
  },
];

// About page accomplishments
export const accomplishments: Accomplishment[] = [
  "Google Women Engineering Program",
  "SheFi Scholar — Web3 Fellowship",
  "Smart India Hackathon Participant",
  "200+ LeetCode Problems Solved",
  "Post-Quantum Cryptography (QRYPT)",
  "ML-Powered Climate App (CarbonCtrl)",
  "AI Analytics Tool (InsightSniffer)",
  "Open Source Contributor",
];
