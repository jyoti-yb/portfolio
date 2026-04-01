import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  // TECH
  {
    id: "post-quantum",
    title: "Post-Quantum Cryptography: What It Is and Why It Matters",
    description:
      "An introduction to CRYSTALS-Kyber and Dilithium — the NIST-standardized algorithms that will protect us from quantum attacks. Why the transition needs to happen now.",
    category: "tech",
    slug: "post-quantum-cryptography",
    readTime: "8 min read",
    imgLabel: "POST\nQUANTUM\n🔐",
    imgColor: "bg-blue-100 text-blue-700",
  },
  {
    id: "nextjs-app-router",
    title: "Building a Full-Stack App with Next.js 14 & App Router",
    description:
      "A practical walkthrough of building production-grade Next.js apps with server components, streaming, and the new App Router — lessons from building real projects.",
    category: "tech",
    slug: "nextjs-14-app-router",
    readTime: "12 min read",
    imgLabel: "NEXT.JS\nAPP ROUTER\n⚡",
    imgColor: "bg-green-100 text-green-700",
  },
  {
    id: "leetcode-200",
    title: "How I Solved 200+ LeetCode Problems (And What I Learned)",
    description:
      "My structured approach to competitive programming — patterns, mental models, and the mindset shift that took me from struggling with Easy to cracking Medium consistently.",
    category: "tech",
    slug: "leetcode-200-problems",
    readTime: "10 min read",
    imgLabel: "LEETCODE\n200+\n💡",
    imgColor: "bg-orange-100 text-orange-700",
  },
  // AI
  {
    id: "insightsniffer-blog",
    title: "Sentiment Analysis with NLP: Building InsightSniffer",
    description:
      "How I built an AI-powered product analytics tool that scrapes reviews and surfaces actionable insights — architecture, challenges, and lessons from real-world NLP.",
    category: "ai",
    slug: "building-insightsniffer",
    readTime: "9 min read",
    imgLabel: "NLP\nINSIGHTS\n🤖",
    imgColor: "bg-purple-100 text-purple-700",
  },
  {
    id: "carbonctrl-blog",
    title: "Carbon Footprint Prediction with Machine Learning",
    description:
      "Building CarbonCtrl: how I trained an ML model to predict CO₂ emissions from user behavior data, integrated it with Firebase, and deployed it to production.",
    category: "ai",
    slug: "carbon-ml-prediction",
    readTime: "11 min read",
    imgLabel: "ML\nCARBON\n🌱",
    imgColor: "bg-emerald-100 text-emerald-700",
  },
  // LIFE
  {
    id: "google-wep",
    title: "What the Google Women Engineering Program Taught Me",
    description:
      "My experience as a Google WEP scholar — what I learned about engineering culture, mentorship, leadership, and why programs like this matter more than ever.",
    category: "life",
    slug: "google-wep-experience",
    readTime: "7 min read",
    imgLabel: "GOOGLE\nWEP 💙\n🎓",
    imgColor: "bg-blue-100 text-blue-700",
  },
  {
    id: "shefi-blog",
    title: "My Journey into Web3 as a SheFi Scholar",
    description:
      "How the SheFi Scholarship opened my eyes to decentralized finance, the communities being built on-chain, and why every engineer should understand Web3 foundations.",
    category: "life",
    slug: "shefi-web3-journey",
    readTime: "6 min read",
    imgLabel: "WEB3\nSheFi 🌐\n⛓️",
    imgColor: "bg-pink-100 text-pink-700",
  },
];
