import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { GuideHome } from "@/components/guide-home";

export const dynamicParams = false;
export function generateStaticParams() {
  return [{ locale: "ko" }];
}

export const metadata: Metadata = {
  title: "React Native 도구 설치 가이드",
  description:
    "React Native 에셋 관리, 아키텍처 점검, Figma 변환을 위한 친절한 한국어 시작 가이드. 준비부터 첫 실행까지 함께해요.",
  alternates: { canonical: "/ko", languages: { en: "/", ko: "/ko" } },
  openGraph: {
    images: ["/opengraph-image"],
    locale: "ko_KR",
    title: "React Native 도구 설치 가이드",
    description: "준비부터 첫 실행까지, 하나씩 함께해요.",
    url: "/ko",
  },
};

export default async function KoreanHome({ params }: { params: Promise<{ locale: string }> }) {
  if ((await params).locale !== "ko") notFound();
  return <GuideHome locale="ko" />;
}
