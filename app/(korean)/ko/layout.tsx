import type { ReactNode } from "react";

import SiteLayout, { metadata as baseMetadata } from "@/components/site-layout";

export const metadata = {
  ...baseMetadata,
  description:
    "에이전트 워크플로, 타입 에셋, New Architecture 점검, NativeWind 코드 생성을 위한 React Native 개발 도구 모음.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <SiteLayout locale="ko">{children}</SiteLayout>;
}
