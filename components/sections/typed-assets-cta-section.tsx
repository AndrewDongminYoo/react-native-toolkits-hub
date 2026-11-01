import { ArrowUpRight, Github, Package } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { LocaleProps } from "@/lib/locale";
import { translate } from "@/lib/translate";

export function TypedAssetsCtaSection({ locale = "en" }: LocaleProps) {
  return (
    <section className="field-grid border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end lg:px-12">
        <div>
          <p className="section-kicker">{translate("Asset pipeline / ready", locale)}</p>
          <h2 className="mt-6 max-w-3xl font-display text-4xl leading-[0.95] font-semibold tracking-[-0.05em] text-balance sm:text-6xl">
            {translate("Replace the next brittle asset path before it ships.", locale)}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
            {translate(
              "Install the generator as a development dependency, generate the registry, and let TypeScript carry the asset names from there.",
              locale
            )}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <Button asChild className="h-11 rounded-none px-5">
            <a href="#installation">
              <Package className="size-4" />
              {translate("Install the package", locale)}
            </a>
          </Button>
          <Button asChild className="h-11 rounded-none px-5" variant="outline">
            <a
              href="https://github.com/AndrewDongminYoo/rn-typed-assets"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Github className="size-4" />
              {translate("Review the source", locale)}
              <ArrowUpRight className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
