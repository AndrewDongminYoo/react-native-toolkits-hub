import { ArrowUpRight, Bot, Boxes, ScanSearch, WandSparkles } from "lucide-react";
import Link from "next/link";
import type { CSSProperties } from "react";

import { localePath, type LocaleProps } from "@/lib/locale";
import type { Toolkit } from "@/lib/toolkits";
import { translate } from "@/lib/translate";
import { cn } from "@/lib/utils";

const icons = {
  "design-to-nativewind": WandSparkles,
  "rn-agents-kit": Bot,
  "rn-newarch-ready": ScanSearch,
  "rn-typed-assets": Boxes,
};

export function ToolkitCard({
  featured = false,
  toolkit,
  locale = "en",
}: LocaleProps & {
  featured?: boolean;
  toolkit: Toolkit;
}) {
  const Icon = icons[toolkit.slug];
  const accentStyle = { "--tool-accent": toolkit.accent } as CSSProperties;

  return (
    <Link
      className={cn(
        "toolkit-card tool-accent-scope group relative flex flex-col overflow-hidden border p-6 transition-colors duration-300 hover:border-[var(--tool-accent)] sm:p-8",
        featured
          ? "border-[var(--tool-accent)]/55 bg-[color-mix(in_oklch,var(--tool-accent)_8%,var(--card))] lg:p-10"
          : "min-h-80 border-border bg-card/80"
      )}
      href={localePath(toolkit.route, locale)}
      style={accentStyle}
    >
      <div className="absolute top-0 right-0 h-24 w-24 border-b border-l border-border/70 bg-[linear-gradient(135deg,transparent_49%,var(--border)_50%,transparent_51%)] opacity-70 transition-colors group-hover:border-[var(--tool-accent)]" />
      <div className={cn("flex items-start justify-between", featured ? "mb-8" : "mb-12")}>
        <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground">
          {translate("MODULE /", locale)} {toolkit.index}
        </span>
        <Icon
          className={cn("text-[var(--tool-accent)]", featured ? "size-7" : "size-5")}
          strokeWidth={1.5}
        />
      </div>

      <div className={featured ? undefined : "mt-auto"}>
        <p className="mb-3 font-mono text-xs tracking-[0.16em] text-[var(--tool-accent-ink)] uppercase">
          {translate(toolkit.eyebrow, locale)}
        </p>
        <h3
          className={cn(
            "font-display leading-none font-semibold tracking-[-0.04em] text-foreground",
            featured ? "text-4xl sm:text-6xl" : "text-3xl sm:text-4xl"
          )}
        >
          {toolkit.name}
        </h3>
        <p
          className={cn(
            "mt-5 leading-6 text-muted-foreground",
            featured ? "max-w-2xl text-base leading-7" : "max-w-lg text-sm"
          )}
        >
          {translate(toolkit.description, locale)}
        </p>
        <div className="mt-8 flex items-center justify-between border-t border-border pt-4">
          <span className="font-mono text-[0.68rem] tracking-[0.12em] text-muted-foreground uppercase">
            {translate(toolkit.status, locale)}
          </span>
          <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
            {translate("Open module", locale)}
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
