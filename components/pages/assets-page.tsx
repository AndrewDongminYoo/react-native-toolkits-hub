import type { CSSProperties } from "react";

import { CISection } from "@/components/sections/ci-section";
import { CLIReferenceSection } from "@/components/sections/cli-reference-section";
import { ConfigurationSection } from "@/components/sections/configuration-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { InstallationSection } from "@/components/sections/installation-section";
import { TypedAssetsCtaSection } from "@/components/sections/typed-assets-cta-section";
import type { Locale, LocaleProps } from "@/lib/locale";
import { productMetadata } from "@/lib/site";
import { getToolkit } from "@/lib/toolkits";
import { translate } from "@/lib/translate";

const toolkit = getToolkit("rn-typed-assets");

export function metadataFor(locale: Locale) {
  return productMetadata(
    toolkit,
    translate(
      "Generate typed TypeScript registries for React Native images, SVGs, and Lottie animations, then audit unused assets and rewrite stale references.",
      locale
    ),
    locale
  );
}

export default function TypedAssetsPage({ locale = "en" }: LocaleProps) {
  return (
    <main
      className="tool-accent-scope"
      style={{ "--tool-accent": toolkit.accent } as CSSProperties}
    >
      <HeroSection locale={locale} />
      <div className="scroll-mt-20" id="start">
        <FeaturesSection locale={locale} />
      </div>
      <HowItWorksSection locale={locale} />
      <InstallationSection locale={locale} />
      <CLIReferenceSection locale={locale} />
      <ConfigurationSection locale={locale} />
      <CISection locale={locale} />
      <TypedAssetsCtaSection locale={locale} />
    </main>
  );
}
