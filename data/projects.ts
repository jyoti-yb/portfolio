import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "qrypt",
    name: "QRYPT",
    description:
      "A post-quantum encrypted chat application using CRYSTALS-Kyber and CRYSTALS-Dilithium to secure communications against quantum computing threats.",
    techStack: "Python, CRYSTALS-Kyber, WebSockets, React, Node.js",
    category: "ai",
    githubUrl: "https://github.com/jyotiyadav",
    icon: "lock",
  },
  {
    id: "carbonctrl",
    name: "CarbonCtrl",
    description:
      "An intelligent CO₂ emission tracker that analyzes personal and organizational carbon footprints using ML-powered insights and real-time data sources.",
    techStack: "React, Python, TensorFlow, Firebase, REST API",
    category: "ai",
    isWip: true,
    isJoinTeam: true,
    githubUrl: "https://github.com/jyotiyadav",
    icon: "sun",
  },
  {
    id: "insightsniffer",
    name: "InsightSniffer",
    description:
      "An AI-powered product analytics tool that scrapes reviews, performs NLP sentiment analysis, and surfaces actionable insights for product managers.",
    techStack: "Python, NLP, BeautifulSoup, FastAPI, React",
    category: "ai",
    isWip: true,
    githubUrl: "https://github.com/jyotiyadav",
    icon: "chart",
  },
  {
    id: "portfolio",
    name: "Jyoti.dev — Portfolio",
    description:
      "My personal developer portfolio website inspired by theadarsh.dev. Built with Next.js, Tailwind CSS, and Framer Motion.",
    techStack: "Next.js, Tailwind CSS, Framer Motion, TypeScript",
    category: "web",
    githubUrl: "https://github.com/jyotiyadav",
    icon: "code",
  },
  {
    id: "dsatracker",
    name: "DSA Progress Tracker",
    description:
      "A personal LeetCode and DSA progress tracker with topic-wise categorization, difficulty tracking, and visual streaks to stay consistent.",
    techStack: "React, Node.js, MongoDB, Express, Chart.js",
    category: "web",
    githubUrl: "https://github.com/jyotiyadav",
    icon: "doc",
  },
  {
    id: "opensource",
    name: "Open-Source Contributions",
    description:
      "Active contributor to open-source Python and JavaScript libraries. Bug fixes, documentation improvements, and feature additions across multiple repos.",
    techStack: "Python, JavaScript, GitHub Actions, Open-Source",
    category: "web",
    githubUrl: "https://github.com/jyotiyadav",
    icon: "terminal",
  },
];
