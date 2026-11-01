import { ArrowRight, Box, Braces, Database, ScanSearch, ShieldAlert } from "lucide-react";
import Link from "next/link";
import type { CSSProperties } from "react";

import { Github } from "@/components/brand-icons";
import { CodeBlock } from "@/components/code-block";
import { ProductHero } from "@/components/product-hero";
import { Button } from "@/components/ui/button";
import { type Locale, localePath, type LocaleProps } from "@/lib/locale";
import { productMetadata } from "@/lib/site";
import { getToolkit } from "@/lib/toolkits";
import { translate } from "@/lib/translate";

const installCode = `npm install --save-dev rn-newarch-ready`;

const usageCode = `npx rn-newarch-ready
npx rn-newarch-ready ./path/to/app
npx rn-newarch-ready --json
npx rn-newarch-ready --offline`;

const checks = [
  {
    description:
      "Reads the React Native version and platform configuration to establish the project's current architecture state.",
    icon: Braces,
    title: "Project state",
  },
  {
    description:
      "Inspects installed packages for native footprints and local codegenConfig evidence before consulting network data.",
    icon: Box,
    title: "Dependency signals",
  },
  {
    description:
      "Optionally enriches unknown native packages with attributed React Native Directory data and caches the result.",
    icon: Database,
    title: "Directory context",
  },
  {
    description:
      "Scans app-owned Android and iOS native source for legacy-only module patterns that still need human review.",
    icon: ScanSearch,
    title: "App-local modules",
  },
];

const signalRows = [
  ["supported", "Local codegenConfig signal", "Strong local evidence"],
  ["likely-supported", "Public directory marks the library ready", "Verify the pinned version"],
  ["unknown", "Native footprint without a positive signal", "Manual review required"],
  ["not-native", "No native footprint detected", "Outside migration risk"],
  ["not-installed", "Declared package is unresolved", "Install before classifying"],
];

const toolkit = getToolkit("rn-newarch-ready");

export function metadataFor(locale: Locale) {
  return productMetadata(
    toolkit,
    translate(
      "A read-only, local-first React Native New Architecture readiness audit for dependencies, settings, and app-local native modules.",
      locale
    ),
    locale
  );
}

export default function NewArchitectureReadyPage({ locale = "en" }: LocaleProps) {
  return (
    <main
      className="tool-accent-scope"
      style={{ "--tool-accent": toolkit.accent } as CSSProperties}
    >
      <ProductHero
        description={translate(
          "The CLI reads local configuration and installed packages first, enriches uncertain dependencies with public directory data when online, and states what still requires human verification.",
          locale
        )}
        intro={translate(
          "Audit New Architecture readiness without pretending an absent signal is proof of incompatibility.",
          locale
        )}
        locale={locale}
        toolkit={toolkit}
      >
        <div className="space-y-3 font-mono text-xs">
          {[
            ["supported", "local signal"],
            ["likely-supported", "directory hint"],
            ["unknown", "manual review"],
            ["verdict", "ready / needs-review"],
          ].map(([signal, value]) => (
            <div
              className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0"
              key={signal}
            >
              <span>{translate(signal, locale)}</span>
              <span className="text-[var(--tool-accent-ink)]">{translate(value, locale)}</span>
            </div>
          ))}
        </div>
      </ProductHero>

      <section className="border-b border-border" id="start">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-12 lg:py-28">
          <div>
            <p className="section-kicker">{translate("Install / npm", locale)}</p>
            <h2 className="mt-6 font-display text-4xl leading-[0.96] font-semibold tracking-[-0.05em] sm:text-6xl">
              {translate("Point it at the real project.", locale)}
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground">
              {translate(
                "Run the human-readable audit in the current project, target another path, request JSON for automation, or stay fully local with offline mode.",
                locale
              )}
            </p>
          </div>
          <div className="grid min-w-0 gap-5">
            <CodeBlock code={installCode} language="bash" locale={locale} />
            <CodeBlock code={usageCode} language="bash" locale={locale} />
          </div>
        </div>
      </section>

      <section className="field-grid border-b border-border bg-card/35">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="max-w-3xl">
            <p className="section-kicker">{translate("Audit surface / v1", locale)}</p>
            <h2 className="mt-6 font-display text-4xl leading-[0.96] font-semibold tracking-[-0.05em] sm:text-6xl">
              {translate("Four evidence channels, one conservative report.", locale)}
            </h2>
          </div>
          <div className="mt-14 grid gap-px bg-border md:grid-cols-2">
            {checks.map((check, index) => (
              <article className="min-h-64 bg-background p-6 sm:p-8" key={check.title}>
                <div className="flex items-start justify-between">
                  <check.icon className="size-6 text-[var(--tool-accent)]" strokeWidth={1.5} />
                  <span className="font-mono text-[0.65rem] text-muted-foreground">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-12 font-display text-3xl font-semibold tracking-[-0.04em]">
                  {translate(check.title, locale)}
                </h3>
                <p className="mt-4 max-w-lg text-sm leading-6 text-muted-foreground">
                  {translate(check.description, locale)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.68fr_1.32fr] lg:px-12 lg:py-28">
          <div>
            <p className="section-kicker">{translate("Signal vocabulary", locale)}</p>
            <h2 className="mt-6 font-display text-4xl leading-[0.96] font-semibold tracking-[-0.05em] sm:text-5xl">
              {translate("Unknown is an honest result.", locale)}
            </h2>
            <div className="mt-7 flex items-start gap-3 border-l-2 border-[var(--tool-accent)] pl-4">
              <ShieldAlert className="mt-0.5 size-5 shrink-0 text-[var(--tool-accent)]" />
              <p className="text-sm leading-6 text-muted-foreground">
                {translate(
                  "The v0.x report shape may change. Migration and project mutation remain outside this CLI's scope.",
                  locale
                )}
              </p>
            </div>
          </div>
          <div className="overflow-x-auto border-t border-border">
            <table className="w-full min-w-160 border-collapse text-left">
              <thead>
                <tr className="font-mono text-[0.65rem] tracking-[0.13em] text-muted-foreground uppercase">
                  <th className="border-b border-border py-4 pr-5 font-normal">
                    {translate("Status", locale)}
                  </th>
                  <th className="border-b border-border py-4 pr-5 font-normal">
                    {translate("Evidence", locale)}
                  </th>
                  <th className="border-b border-border py-4 font-normal">
                    {translate("Operator action", locale)}
                  </th>
                </tr>
              </thead>
              <tbody>
                {signalRows.map(([status, evidence, action]) => (
                  <tr className="text-sm" key={status}>
                    <td className="border-b border-border py-5 pr-5 font-mono text-[var(--tool-accent-ink)]">
                      {status}
                    </td>
                    <td className="border-b border-border py-5 pr-5 text-foreground">
                      {translate(evidence, locale)}
                    </td>
                    <td className="border-b border-border py-5 text-muted-foreground">
                      {translate(action, locale)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-foreground text-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end lg:px-12 lg:py-24">
          <div>
            <p className="font-mono text-[0.68rem] tracking-[0.18em] text-[var(--tool-accent-inverse-ink)] uppercase">
              {translate("Deterministic layer → judgment layer", locale)}
            </p>
            <h2 className="mt-5 max-w-4xl font-display text-5xl leading-[0.92] font-semibold tracking-[-0.055em] text-balance sm:text-7xl">
              {translate("Need interpretation around the report?", locale)}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-background/65">
              {translate(
                "The public rn-newarch-audit skill wraps this CLI with an audit-first agent workflow.",
                locale
              )}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button asChild className="h-12 rounded-none px-6">
              <Link href={localePath("/rn-agents-kit", locale)}>
                {translate("Open RN Agents Kit", locale)}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              className="h-12 rounded-none border-background/30 bg-transparent px-6 text-background hover:bg-background hover:text-foreground"
              variant="outline"
            >
              <a href={toolkit.githubUrl} rel="noopener noreferrer" target="_blank">
                <Github className="size-4" />
                {translate("Review the CLI", locale)}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
