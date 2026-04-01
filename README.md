# Jyoti Yadav — Portfolio

## 🗂️ Project Structure

```
jyoti-portfolio/
│
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout (Navbar + Sidebar injected here)
│   ├── globals.css             # Global styles + Google Fonts import
│   ├── page.tsx                # / → Home (Hero + What I Do)
│   ├── blogs/
│   │   └── page.tsx            # /blogs
│   ├── portfolio/
│   │   └── page.tsx            # /portfolio
│   └── about/
│       └── page.tsx            # /about
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Fixed top navbar with pill-group tabs
│   │   └── SocialSidebar.tsx   # Fixed right-edge social icons
│   │
│   ├── home/
│   │   ├── Hero.tsx            # Avatar LEFT + name/bio/CTA RIGHT
│   │   ├── Avatar.tsx          # Circular avatar with green dot
│   │   ├── WhatIDo.tsx         # Bento grid section
│   │   └── BentoCard.tsx       # Icon card with hover stack reveal
│   │
│   ├── blogs/
│   │   ├── BlogsClient.tsx     # "use client" — owns category state
│   │   ├── BlogCategoryTabs.tsx # Pill tab filter (Tech / AI / Life)
│   │   └── BlogCarousel.tsx    # Carousel with arrows + dot pagination
│   │
│   ├── portfolio/
│   │   ├── PortfolioClient.tsx # "use client" — owns filter state
│   │   └── ProjectCard.tsx     # Card with illustration header + badges
│   │
│   ├── about/
│   │   ├── AboutProfile.tsx    # Avatar + name + meta + social buttons
│   │   ├── Timeline.tsx        # Vertical timeline with dot connectors
│   │   └── Accomplishments.tsx # → arrow list card
│   │
│   └── ui/
│       ├── Icons.tsx           # All SVG icons in one place
│       ├── SectionLabel.tsx    # "// What I Do" style heading
│       └── PageHeader.tsx      # Centered page title + subtitle + divider
│
├── data/                       # ✏️  Edit these to update content
│   ├── personal.ts             # Name, bio, email, social links, avatar
│   ├── projects.ts             # All project cards
│   ├── blogs.ts                # All blog posts
│   └── skills.ts               # Tech pills, bento cards, timeline, accomplishments
│
├── types/
│   └── index.ts                # Shared TypeScript interfaces
│
├── public/                     # Static assets (add avatar.jpg here)
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
└── package.json
```

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run dev server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production
```bash
npm run build
npm start
```

---

## ✏️ How to Customise

### Personal info (name, bio, email, links)
Edit **`data/personal.ts`** — this is the single source of truth used across all components.

```ts
export const personal = {
  name:       "Jyoti Yadav",
  fullName:   "Balaboina Jyoti Yadav",
  email:      "your@email.com",        // ← update
  github:     "https://github.com/...", // ← update
  linkedin:   "https://linkedin.com/...", // ← update
  avatarSrc:  "/avatar.jpg",           // ← set to null for initials
  ...
};
```

### Add your real photo
1. Put your photo in `/public/avatar.jpg`
2. In `data/personal.ts`, set `avatarSrc: "/avatar.jpg"`

### Add / edit projects
Edit **`data/projects.ts`** — each project is a typed object:
```ts
{ id, name, description, techStack, category, isWip, isJoinTeam, githubUrl, icon }
```

### Add / edit blog posts
Edit **`data/blogs.ts`** — categories: `"tech"` | `"ai"` | `"life"`

### Add / edit skills
Edit **`data/skills.ts`**:
- `techPills` — pills shown in the large bento card
- `skillGroups` — the 5 icon bento cards (hover to reveal stack)
- `timelineItems` — about page timeline
- `accomplishments` — about page → list

---

## 🌐 Deploy to Vercel (recommended)

```bash
npx vercel
```
Or push to GitHub and connect at [vercel.com](https://vercel.com) — zero config needed.

---

## 📦 Tech Stack

| Tool | Purpose |
|---|---|
| Next.js 14 | App Router, SSR, routing |
| TypeScript | Type safety throughout |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations (install ready) |
| Lucide React | Icon library fallback |
| Google Fonts | Plus Jakarta Sans + JetBrains Mono |
