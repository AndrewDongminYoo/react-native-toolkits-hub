import type { Metadata } from "next";

import { GuideHome } from "@/components/guide-home";

export const metadata: Metadata = {
  title: "React Native Toolkits — Get started, one step at a time",
  description:
    "Friendly guides to React Native tools for asset management, architecture checks, agent workflows, and design handoff.",
  alternates: { canonical: "/", languages: { en: "/", ko: "/ko" } },
};

export default function HomePage() {
  return <GuideHome locale="en" />;
}
