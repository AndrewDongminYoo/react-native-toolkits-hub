import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { KoreanGuide } from "@/components/korean-guide";
import { guides } from "@/lib/guides";
import { toolkits } from "@/lib/toolkits";

type Props = { params: Promise<{ locale: string; toolkit: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return toolkits.map((toolkit) => ({ locale: "ko", toolkit: toolkit.slug }));
}

async function resolveToolkit(params: Props["params"]) {
  const values = await params;
  const toolkit = toolkits.find((item) => item.slug === values.toolkit);
  if (values.locale !== "ko" || !toolkit) notFound();
  return toolkit;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const toolkit = await resolveToolkit(params);
  const title = `${toolkit.name} 설치 가이드`;
  const description = guides[toolkit.slug].summary;
  return {
    title,
    description,
    alternates: {
      canonical: `/ko${toolkit.route}`,
      languages: { en: toolkit.route, ko: `/ko${toolkit.route}` },
    },
    openGraph: {
      title,
      description,
      locale: "ko_KR",
      url: `/ko${toolkit.route}`,
      images: [`${toolkit.route}/opengraph-image`],
    },
  };
}

export default async function KoreanProductPage({ params }: Props) {
  return <KoreanGuide toolkit={await resolveToolkit(params)} />;
}
