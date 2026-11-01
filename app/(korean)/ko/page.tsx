import type { Metadata } from "next";

import HomePage from "@/components/pages/home-page";
import { languageAlternates, siteName } from "@/lib/site";

const description =
  "에셋 관리부터 아키텍처 점검, 디자인 구현, 에이전트 기반 유지보수까지. React Native 개발의 불확실성을 줄이는 도구 모음입니다.";

export const metadata: Metadata = {
  title: { absolute: "React Native Toolkits — 추측은 줄이고, 확신을 더하다" },
  description,
  alternates: languageAlternates("/", "ko"),
  openGraph: {
    title: siteName,
    description,
    siteName,
    type: "website",
    locale: "ko_KR",
    alternateLocale: "en_US",
    url: "/ko",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <HomePage locale="ko" />;
}
