import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { SiteLayout } from "@/components/site-layout";

export { metadata } from "@/components/site-layout";

export default async function LocalizedLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  if ((await params).locale !== "ko") notFound();
  return <SiteLayout locale="ko">{children}</SiteLayout>;
}
