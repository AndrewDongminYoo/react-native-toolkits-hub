import {
  ArrowRight,
  Bot,
  Camera,
  CheckCircle2,
  CircleArrowUp,
  ClipboardCheck,
  FileSearch,
  ImageMinus,
  Layers,
  Radio,
  ScanSearch,
  ShieldCheck,
} from "lucide-react";
import type { CSSProperties } from "react";

import { Github } from "@/components/brand-icons";
import { CodeBlock } from "@/components/code-block";
import { ProductHero } from "@/components/product-hero";
import { Button } from "@/components/ui/button";
import type { Locale, LocaleProps } from "@/lib/locale";
import { productMetadata } from "@/lib/site";
import { getToolkit } from "@/lib/toolkits";
import { translate } from "@/lib/translate";

const installCode = `/plugin marketplace add AndrewDongminYoo/rn-agents-kit
/plugin install rn-agents-kit@rn-agents-kit`;

const skills = [
  {
    description:
      "Capture the project's React Native version, architecture and Hermes flags, package manager, and key configuration before choosing a deeper audit.",
    icon: ScanSearch,
    name: "rn-project-snapshot",
    posture: "Read-only",
  },
  {
    description:
      "Find unused images, SVGs, and Lottie files, then guide an explicitly approved migration to a typed registry.",
    icon: ImageMinus,
    name: "rn-asset-hygiene",
    posture: "Audit → consent",
  },
  {
    description:
      "Classify dependency and app-local native signals that matter when evaluating New Architecture readiness.",
    icon: ShieldCheck,
    name: "rn-newarch-audit",
    posture: "Read-only audit",
  },
  {
    description:
      "Run a focused React Native code-quality audit and adversarially verify findings before they reach the report.",
    icon: Bot,
    name: "rn-audit",
    posture: "Verified findings",
  },
  {
    description:
      "Capture an Android or iOS simulator screen to a stable path so the agent can inspect the rendered app.",
    icon: Camera,
    name: "rn-device-capture",
    posture: "Source read-only",
  },
  {
    description:
      "Read bounded console output from Metro's CDP endpoint to close the runtime verification loop.",
    icon: Radio,
    name: "rn-metro-console",
    posture: "Bounded reader",
  },
  {
    description:
      "Route runtime acceptance evidence — screenshots, Metro logs, interactive QA — to the right surface, and name the authorization each one needs.",
    icon: ClipboardCheck,
    name: "rn-device-qa",
    posture: "Evidence router",
  },
  {
    description:
      "Inventory where a GitHub Actions workflow declares its artifact evidence: app roots, dependency and build declarations, and artifact references.",
    icon: FileSearch,
    name: "rn-ci-artifact-audit",
    posture: "Read-only inventory",
  },
  {
    description:
      "Resolve one EAS build profile and its extends chain from eas.json, rejecting missing profiles, cycles, and excessive depth.",
    icon: Layers,
    name: "rn-eas-profile-audit",
    posture: "Profile resolver",
  },
  {
    description:
      "Record the upgrade surface before a React Native or Expo version bump: installed versions, lockfile candidates, native ownership, and CI verification gaps.",
    icon: CircleArrowUp,
    name: "rn-upgrade-pulse",
    posture: "Pre-bump record",
  },
];

const contract = [
  ["01", "Inspect", "The first pass reads the project and reports what it can prove."],
  ["02", "Ask", "A skill that can mutate waits for explicit consent before changing source."],
  ["03", "Gate", "Approved changes run the target project's own type, lint, and test commands."],
  ["04", "Review", "The resulting git diff stays visible so the user owns the final decision."],
];

const toolkit = getToolkit("rn-agents-kit");

export function metadataFor(locale: Locale) {
  return productMetadata(
    toolkit,
    translate(
      "Ten audit-first agent skills for React Native project snapshots, asset hygiene, New Architecture readiness, code review, device capture and QA, Metro console output, CI artifacts, EAS profiles, and upgrade planning.",
      locale
    ),
    locale
  );
}

export default function AgentsKitPage({ locale = "en" }: LocaleProps) {
  return (
    <main
      className="tool-accent-scope"
      style={{ "--tool-accent": toolkit.accent } as CSSProperties}
    >
      <ProductHero
        description={translate(
          "The public v0.2.1 release packages ten narrow skills. Each one owns a specific maintenance job and keeps evidence, consent, and review boundaries explicit.",
          locale
        )}
        intro={translate(
          "Give your coding agent a React Native maintenance kit that reads first and earns every change.",
          locale
        )}
        locale={locale}
        toolkit={toolkit}
      >
        <div className="space-y-3 font-mono text-xs">
          {[
            ["first_pass", "read-only"],
            ["mutation", "explicit consent"],
            ["verification", "project gates"],
            ["handoff", "reviewable diff"],
          ].map(([signal, value], index) => (
            <div
              className="grid grid-cols-[2rem_1fr_auto] gap-3 border-b border-border pb-3 last:border-0 last:pb-0"
              key={signal}
            >
              <span className="text-muted-foreground">0{index + 1}</span>
              <span>{signal}</span>
              <span className="text-[var(--tool-accent-ink)]">{translate(value, locale)}</span>
            </div>
          ))}
        </div>
      </ProductHero>

      <section className="border-b border-border" id="start">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-12 lg:py-28">
          <div>
            <p className="section-kicker">{translate("Install / Claude Code", locale)}</p>
            <h2 className="mt-6 font-display text-4xl leading-[0.96] font-semibold tracking-[-0.05em] sm:text-6xl">
              {translate("Two commands. Ten focused skills.", locale)}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
              {translate(
                "Add the public marketplace, then install the v0.2.1 plugin from that source. The public README currently documents this Claude Code installation path.",
                locale
              )}
            </p>
          </div>
          <div className="lab-panel min-w-0 border border-border bg-card p-5 sm:p-7">
            <CodeBlock code={installCode} language="text" locale={locale} />
            <div className="mt-5 flex items-start gap-3 border-t border-border pt-5">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[var(--tool-accent)]" />
              <p className="text-sm leading-6 text-muted-foreground">
                {translate(
                  "The public distribution is licensed under Apache-2.0 and contains the shipped skills, plugin manifests, changelog, contribution guide, and example artifacts.",
                  locale
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="field-grid border-b border-border bg-card/35">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="max-w-3xl">
            <p className="section-kicker">{translate("Skill inventory / 10", locale)}</p>
            <h2 className="mt-6 font-display text-4xl leading-[0.96] font-semibold tracking-[-0.05em] sm:text-6xl">
              {translate("One skill, one maintenance job.", locale)}
            </h2>
          </div>
          <div className="mt-14 grid gap-px bg-border md:grid-cols-2 xl:grid-cols-3">
            {skills.map((skill, index) => (
              <article className="min-h-72 bg-background p-6 sm:p-7" key={skill.name}>
                <div className="flex items-start justify-between">
                  <skill.icon className="size-6 text-[var(--tool-accent)]" strokeWidth={1.5} />
                  <span className="font-mono text-[0.65rem] text-muted-foreground">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-10 font-display text-2xl font-semibold tracking-[-0.035em]">
                  {skill.name}
                </h3>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  {translate(skill.description, locale)}
                </p>
                <p className="mt-7 border-t border-border pt-3 font-mono text-[0.64rem] tracking-[0.12em] text-[var(--tool-accent-ink)] uppercase">
                  {translate(skill.posture, locale)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="section-kicker">{translate("Operating contract", locale)}</p>
              <h2 className="mt-6 font-display text-4xl leading-[0.96] font-semibold tracking-[-0.05em] sm:text-5xl">
                {translate("Audit-first is a sequence, not a badge.", locale)}
              </h2>
            </div>
            <ol className="border-t border-border">
              {contract.map(([index, title, description]) => (
                <li
                  className="grid gap-3 border-b border-border py-6 sm:grid-cols-[3rem_10rem_1fr] sm:items-baseline"
                  key={index}
                >
                  <span className="font-mono text-xs text-[var(--tool-accent-ink)]">{index}</span>
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.03em]">
                    {translate(title, locale)}
                  </h3>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {translate(description, locale)}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-foreground text-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end lg:px-12 lg:py-24">
          <div>
            <p className="font-mono text-[0.68rem] tracking-[0.18em] text-[var(--tool-accent-inverse-ink)] uppercase">
              {translate("Reproducible evidence / public example", locale)}
            </p>
            <h2 className="mt-5 max-w-4xl font-display text-5xl leading-[0.92] font-semibold tracking-[-0.055em] text-balance sm:text-7xl">
              {translate("See the New Architecture audit run against a public app.", locale)}
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button asChild className="h-12 rounded-none px-6">
              <a
                href="https://github.com/AndrewDongminYoo/rn-agents-kit/blob/main/docs/examples/newarch-audit.md"
                rel="noopener noreferrer"
                target="_blank"
              >
                {translate("Open the example", locale)}
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              className="h-12 rounded-none border-background/30 bg-transparent px-6 text-background hover:bg-background hover:text-foreground"
              variant="outline"
            >
              <a href={toolkit.githubUrl} rel="noopener noreferrer" target="_blank">
                <Github className="size-4" />
                {translate("Review the repository", locale)}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
