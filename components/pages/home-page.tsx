import {
  Activity,
  ArrowDown,
  ArrowRight,
  Bot,
  Braces,
  CheckCircle2,
  Eye,
  Github,
  Layers3,
  Radio,
  ScanLine,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

import { LegacyHashRedirect } from "@/components/legacy-hash-redirect";
import { ToolkitCard } from "@/components/toolkit-card";
import { Button } from "@/components/ui/button";
import { localePath, type LocaleProps } from "@/lib/locale";
import { getToolkit, toolkits } from "@/lib/toolkits";
import { translate } from "@/lib/translate";

const agentLayer = getToolkit("rn-agents-kit");
const deterministicTools = toolkits.filter((toolkit) => toolkit.slug !== agentLayer.slug);

const operatingContract = [
  { stage: "Audit", value: "10 skills" },
  { stage: "Consent", value: "explicit" },
  { stage: "Review", value: "git diff" },
];

const workflow = [
  {
    detail: "Snapshot project facts before choosing a deeper maintenance workflow.",
    icon: Eye,
    label: "Read the project",
    tool: "RN Agents Kit",
  },
  {
    detail: "Make assets addressable by typed names and audit what the app no longer uses.",
    icon: Braces,
    label: "Normalize the inputs",
    tool: "rn-typed-assets",
  },
  {
    detail: "Classify New Architecture signals conservatively without changing project files.",
    icon: ScanLine,
    label: "Expose migration risk",
    tool: "rn-newarch-ready",
  },
  {
    detail: "Turn a selected Figma subtree into React Native and NativeWind component code.",
    icon: Layers3,
    label: "Shape the interface",
    tool: "Design to NativeWind",
  },
];

const trustPrinciples = [
  {
    description:
      "Generators and audits operate on explicit project inputs so their output can be reproduced and reviewed.",
    icon: Activity,
    title: "Deterministic core",
  },
  {
    description:
      "Missing evidence stays unknown or needs-review. The tools avoid turning weak signals into confident claims.",
    icon: ShieldCheck,
    title: "Conservative truth",
  },
  {
    description:
      "Agent skills inspect first. Any mutation requires consent and leaves the resulting diff visible for review.",
    icon: CheckCircle2,
    title: "Reviewable change",
  },
];

const auditFacts = [
  ["Project", "Rocket.Chat.ReactNative @ main"],
  ["Date", "2026-08-19"],
  ["Tool", "rn-newarch-ready@0.1.1"],
  ["Files changed", "0"],
];

const auditRun = `$ npx rn-newarch-ready@0.1.1

React Native — New Architecture readiness
  react-native: 0.81.5
  New Arch enabled: android=yes ios=? expo=?

Summary: 23 supported, 23 likely, 10 unknown, 59 non-native, 4 archived
Verdict: needs-review`;

export default function HomePage({ locale = "en" }: LocaleProps) {
  return (
    <main>
      <LegacyHashRedirect locale={locale} />

      <section className="field-grid relative isolate overflow-hidden border-b border-border">
        <div className="absolute inset-y-0 left-[7%] w-px bg-border/70" />
        <div className="absolute inset-y-0 right-[7%] w-px bg-border/70" />
        <div className="mx-auto grid min-h-[calc(100svh-4.25rem)] max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-12 lg:py-24">
          <div className="reveal relative z-10">
            <p className="section-kicker">
              {translate("React Native Toolkits / Field index", locale)}
            </p>
            <h1 className="mt-8 max-w-4xl font-display text-6xl leading-[0.86] font-semibold tracking-[-0.065em] text-balance text-foreground sm:text-7xl lg:text-[6.7rem]">
              {translate("Build less blind.", locale)}
              <span className="mt-2 block text-primary">
                {translate("Ship more certain.", locale)}
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              {translate(
                "A focused collection of developer tools for the React Native work that gets brittle: assets, architecture audits, design handoff, and agent-led maintenance.",
                locale
              )}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="h-12 rounded-none px-6" size="lg">
                <a href="#toolkits">
                  {translate("Browse the field kit", locale)}
                  <ArrowDown className="size-4" />
                </a>
              </Button>
              <Button asChild className="h-12 rounded-none px-6" size="lg" variant="outline">
                <Link href={localePath("/rn-agents-kit", locale)}>
                  {translate("Meet the agent kit", locale)}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>

            <dl className="mt-12 grid max-w-xl grid-cols-3 border-y border-border py-5">
              {operatingContract.map((item, index) => (
                <div
                  className={index === 0 ? undefined : "border-l border-border pl-5"}
                  key={item.stage}
                >
                  <dt className="font-mono text-[0.64rem] tracking-[0.14em] text-muted-foreground uppercase">
                    {translate(item.stage, locale)}
                  </dt>
                  <dd className="mt-2 font-display text-xl leading-tight font-semibold">
                    {translate(item.value, locale)}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-2 font-mono text-[0.6rem] text-muted-foreground">
              {translate(
                "The agent kit's operating contract: read first, ask before writing, hand back a diff.",
                locale
              )}
            </p>
          </div>

          <div className="reveal reveal-delay-2 relative lg:pl-8">
            <div className="absolute -top-8 -right-5 font-mono text-[0.6rem] tracking-[0.18em] text-muted-foreground uppercase sm:right-0">
              {translate("Coordinate / RN-37.7749", locale)}
            </div>
            <div className="lab-panel border border-border bg-card/92 p-5 shadow-[20px_20px_0_color-mix(in_oklch,var(--primary)_11%,transparent)] sm:p-7">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center gap-2">
                  <Radio className="size-4 text-primary" />
                  <span className="font-mono text-[0.68rem] tracking-[0.14em] uppercase">
                    {translate("RN field console", locale)}
                  </span>
                </div>
                <span className="flex items-center gap-2 font-mono text-[0.62rem] tracking-[0.12em] text-accent-ink uppercase">
                  <span className="size-1.5 rounded-full bg-accent shadow-[0_0_12px_var(--accent)]" />
                  {translate("Signals live", locale)}
                </span>
              </div>

              <div className="mt-7 space-y-3 font-mono text-xs">
                {[
                  ["agent.audit", "read-only first", "01"],
                  ["assets.registry", "typed / generated", "02"],
                  ["newarch.signal", "needs-review", "03"],
                  ["figma.output", "rn + nativewind", "04"],
                ].map(([signal, state, index]) => (
                  <div
                    className="signal-track grid grid-cols-[2rem_1fr_auto] items-center gap-3 border border-border bg-background/80 px-3 py-3.5"
                    key={signal}
                  >
                    <span className="text-muted-foreground">{index}</span>
                    <span className="text-foreground">{translate(signal, locale)}</span>
                    <span className="text-primary-ink">{translate(state, locale)}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7 grid grid-cols-[1fr_auto] gap-5 border-t border-border pt-5">
                <div>
                  <p className="font-mono text-[0.6rem] tracking-[0.15em] text-muted-foreground uppercase">
                    {translate("Operating posture", locale)}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-foreground">
                    {translate(
                      "Inspect the real project. Keep weak evidence weak. Make every change reviewable.",
                      locale
                    )}
                  </p>
                </div>
                <Bot className="mt-1 size-8 text-primary" strokeWidth={1.25} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border" id="toolkits">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <p className="section-kicker">{translate("Module directory", locale)}</p>
            <div>
              <h2 className="font-display text-4xl leading-[0.95] font-semibold tracking-[-0.05em] text-balance sm:text-6xl">
                {translate("One agent layer. Three deterministic tools.", locale)}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
                {translate(
                  "The agent kit drives the maintenance loop and calls the tools underneath it. Each tool below also runs on its own, from a public source, with no agent involved.",
                  locale
                )}
              </p>
            </div>
          </div>

          <div className="mt-14 flex items-center gap-4">
            <p className="font-mono text-[0.64rem] tracking-[0.16em] text-primary-ink uppercase">
              {translate("Agentic layer", locale)}
            </p>
            <span className="h-px flex-1 bg-border" />
          </div>
          <div className="mt-5">
            <ToolkitCard featured locale={locale} toolkit={agentLayer} />
          </div>

          <div className="mt-10 flex items-center gap-4">
            <p className="font-mono text-[0.64rem] tracking-[0.16em] text-muted-foreground uppercase">
              {translate("Deterministic tools", locale)}
            </p>
            <span className="h-px flex-1 bg-border" />
          </div>
          <div className="mt-5 grid gap-px bg-border md:grid-cols-3">
            {deterministicTools.map((toolkit) => (
              <ToolkitCard key={toolkit.slug} locale={locale} toolkit={toolkit} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="section-kicker">{translate("Trust contract", locale)}</p>
              <h2 className="mt-6 font-display text-4xl leading-[0.98] font-semibold tracking-[-0.05em] sm:text-5xl">
                {translate("Evidence before confidence.", locale)}
              </h2>
            </div>
            <div className="grid gap-px bg-border md:grid-cols-3">
              {trustPrinciples.map((principle) => (
                <article className="bg-card p-6 sm:p-7" key={principle.title}>
                  <principle.icon className="size-6 text-primary" strokeWidth={1.5} />
                  <h3 className="mt-10 font-display text-2xl font-semibold tracking-[-0.035em]">
                    {translate(principle.title, locale)}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">
                    {translate(principle.description, locale)}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="field-grid border-b border-border bg-card/35">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="max-w-3xl">
            <p className="section-kicker">{translate("Workflow rail", locale)}</p>
            <h2 className="mt-6 font-display text-4xl leading-[0.96] font-semibold tracking-[-0.05em] text-balance sm:text-6xl">
              {translate("Enter the loop where the uncertainty is.", locale)}
            </h2>
            <p className="mt-5 text-base leading-7 text-muted-foreground">
              {translate(
                "This is a map, not a mandatory suite. Start with the problem in front of you and use the smallest module that can expose or remove it.",
                locale
              )}
            </p>
          </div>

          <ol className="mt-14 grid gap-px bg-border lg:grid-cols-4">
            {workflow.map((step, index) => (
              <li className="relative min-h-72 bg-background p-6 sm:p-7" key={step.label}>
                <div className="flex items-start justify-between">
                  <step.icon className="size-6 text-primary" strokeWidth={1.5} />
                  <span className="font-mono text-[0.65rem] text-muted-foreground">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-12 font-display text-2xl font-semibold tracking-[-0.035em]">
                  {translate(step.label, locale)}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {translate(step.detail, locale)}
                </p>
                <p className="absolute right-7 bottom-7 left-7 border-t border-border pt-3 font-mono text-[0.64rem] tracking-[0.11em] text-primary-ink uppercase">
                  {step.tool}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-12 lg:py-28">
          <div>
            <p className="section-kicker">{translate("Field record / public run", locale)}</p>
            <h2 className="mt-6 font-display text-4xl leading-[0.96] font-semibold tracking-[-0.05em] text-balance sm:text-5xl">
              {translate("A real audit. Zero files changed.", locale)}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
              {translate(
                "The rn-newarch-audit skill ran the New Architecture readiness audit against Rocket.Chat's React Native client. It read the manifest, the installed dependencies, and the app's own native sources, then named five app-local native modules still on legacy APIs — with the New Architecture flag already switched on.",
                locale
              )}
            </p>
            <dl className="mt-8 max-w-xl border-t border-border">
              {auditFacts.map(([label, value]) => (
                <div
                  className="flex items-baseline justify-between gap-4 border-b border-border py-3"
                  key={label}
                >
                  <dt className="font-mono text-[0.6rem] tracking-[0.14em] text-muted-foreground uppercase">
                    {translate(label, locale)}
                  </dt>
                  <dd className="font-mono text-sm text-foreground">{translate(value, locale)}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8">
              <Button asChild className="h-12 rounded-none px-6" variant="outline">
                <a
                  href="https://github.com/AndrewDongminYoo/rn-agents-kit/blob/main/docs/examples/newarch-audit.md"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {translate("Read the full example", locale)}
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="lab-panel min-w-0 border border-border bg-card p-5 sm:p-7">
            <div className="overflow-x-auto border border-border bg-background/70 p-4 sm:p-5">
              <pre className="font-mono text-xs leading-6 whitespace-pre text-foreground">
                {auditRun}
              </pre>
            </div>
            <p className="mt-5 border-t border-border pt-5 font-mono text-[0.64rem] leading-5 text-muted-foreground">
              {translate(
                "Abridged. The full run also lists the 4 archived dependencies and the 5 app-local native modules by path, and exits 1 on a needs-review verdict so the same command works as a CI gate.",
                locale
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-foreground text-background">
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:32px_32px] opacity-15" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end lg:px-12 lg:py-24">
          <div>
            <p className="font-mono text-[0.68rem] tracking-[0.18em] text-primary-inverse-ink uppercase">
              {translate("First recommended module / 01", locale)}
            </p>
            <h2 className="mt-5 max-w-4xl font-display text-5xl leading-[0.9] font-semibold tracking-[-0.055em] text-balance sm:text-7xl">
              {translate("Put an audit-first agent on the React Native maintenance loop.", locale)}
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button asChild className="h-12 rounded-none px-6">
              <Link href={localePath("/rn-agents-kit", locale)}>
                {translate("Explore RN Agents Kit", locale)}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              className="h-12 rounded-none border-background/30 bg-transparent px-6 text-background hover:bg-background hover:text-foreground"
              variant="outline"
            >
              <a
                href="https://github.com/AndrewDongminYoo"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Github className="size-4" />
                {translate("View all public work", locale)}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
