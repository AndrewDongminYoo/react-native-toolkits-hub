import type { Metadata } from "next";
import Link from "next/link";

import SiteLayout, { metadata as siteMetadata } from "@/components/site-layout";

export const metadata: Metadata = {
  ...siteMetadata,
  title: "Page not found — React Native Toolkits",
};

export default function GlobalNotFound() {
  return (
    <SiteLayout locale="en">
      <main className="field-grid border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
          <p className="section-kicker">404 / Not found</p>
          <h1 className="mt-8 font-display text-5xl font-semibold tracking-[-0.05em] text-foreground">
            This page could not be found.
          </h1>
          <Link
            className="mt-10 inline-block text-primary-ink underline underline-offset-4"
            href="/"
          >
            Back to the field index
          </Link>
        </div>
      </main>
    </SiteLayout>
  );
}
