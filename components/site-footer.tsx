import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

import { localePath, type LocaleProps } from "@/lib/locale";
import { toolkits } from "@/lib/toolkits";
import { translate } from "@/lib/translate";

export function SiteFooter({ locale = "en" }: LocaleProps) {
  return (
    <footer className="border-t border-border bg-card/55">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:px-12 lg:py-16">
        <div>
          <Link className="inline-flex items-center gap-3" href={localePath("/", locale)}>
            <span className="flex size-9 items-center justify-center border border-primary bg-primary-solid text-xs font-bold text-primary-foreground">
              {translate("RN", locale)}
            </span>
            <span className="font-display text-xl font-semibold tracking-[-0.03em]">
              {translate("React Native Toolkits", locale)}
            </span>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-6 text-muted-foreground">
            {translate(
              "Focused tools for the parts of React Native work that deserve deterministic output, conservative reporting, and reviewable evidence.",
              locale
            )}
          </p>
          <a
            className="mt-7 inline-flex items-center gap-2 font-mono text-xs tracking-[0.12em] text-foreground uppercase transition-colors hover:text-primary-ink"
            href="https://github.com/AndrewDongminYoo"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Github className="size-4" />
            {translate("AndrewDongminYoo on GitHub", locale)}
            <ArrowUpRight className="size-3" />
          </a>
        </div>

        <nav
          aria-label={translate("Toolkit footer navigation", locale)}
          className="grid grid-cols-2 gap-x-6 gap-y-5"
        >
          {toolkits.map((toolkit) => (
            <Link
              className="group border-t border-border pt-3"
              href={localePath(toolkit.route, locale)}
              key={toolkit.slug}
            >
              <span className="block font-mono text-[0.65rem] tracking-[0.16em] text-muted-foreground uppercase">
                {toolkit.index} / {translate(toolkit.eyebrow, locale)}
              </span>
              <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground group-hover:text-primary-ink">
                {toolkit.shortName}
                <ArrowUpRight className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 font-mono text-[0.65rem] tracking-[0.12em] text-muted-foreground uppercase sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <span>{translate("Built for React Native maintenance", locale)}</span>
          <span>{translate("Public facts · Direct links · Source-backed copy", locale)}</span>
        </div>
      </div>
    </footer>
  );
}
