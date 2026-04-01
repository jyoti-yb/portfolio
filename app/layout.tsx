import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import SocialSidebar from "@/components/layout/SocialSidebar";
import { personal } from "@/data/personal";

export const metadata: Metadata = {
  title: `${personal.fullName} | AI Engineer & Full Stack Developer`,
  description:
    "3rd year CSE student building at the intersection of AI, cryptography, and full-stack engineering.",
  keywords: ["AI Engineer", "Full Stack Developer", "Cryptography", "Machine Learning", "Portfolio"],
  authors: [{ name: personal.fullName }],
  openGraph: {
    title: `${personal.fullName} | AI Engineer & Full Stack Developer`,
    description: "Building intelligent systems and impactful tech solutions.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <SocialSidebar />
        {/* Offset for fixed navbar + right sidebar */}
        <div id="app-shell" className="pt-[62px] md:pr-[46px]">
          {children}
        </div>
      </body>
    </html>
  );
}
