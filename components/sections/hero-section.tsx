import { CodeBlock } from "@/components/code-block";
import { ProductHero } from "@/components/product-hero";
import type { LocaleProps } from "@/lib/locale";
import { getToolkit } from "@/lib/toolkits";
import { translate } from "@/lib/translate";

const beforeCode = `// Before: brittle string-based paths
<Image source={require('../../../assets/toast/info.png')} />
<LottieView source={require('../../utils/loading.json')} />`;

const afterCode = `// After: typed named constants
import { Assets, Lotties } from './generated/assets.gen';

<Image source={Assets.toast.info} />
<LottieView source={Lotties.loading} />`;

export function HeroSection({ locale = "en" }: LocaleProps) {
  const toolkit = getToolkit("rn-typed-assets");

  return (
    <ProductHero
      description={translate(
        "Scan the asset tree, emit stable TypeScript constants and a manifest, then find unused files or rewrite stale references through explicit commands. The package ships no runtime dependencies and takes TypeScript as its only peer.",
        locale
      )}
      intro={translate(
        "Stop shipping string-based asset paths. Generate the registry your React Native project can actually type-check.",
        locale
      )}
      locale={locale}
      toolkit={toolkit}
    >
      <div className="space-y-4">
        <div>
          <p className="mb-2 flex items-center gap-2 font-mono text-[0.62rem] tracking-[0.12em] text-destructive-ink uppercase">
            <span className="size-1.5 bg-destructive" />
            {translate("Brittle input", locale)}
          </p>
          <CodeBlock code={beforeCode} language="tsx" locale={locale} />
        </div>
        <div>
          <p className="mb-2 flex items-center gap-2 font-mono text-[0.62rem] tracking-[0.12em] text-accent-ink uppercase">
            <span className="size-1.5 bg-accent" />
            {translate("Typed output", locale)}
          </p>
          <CodeBlock code={afterCode} language="tsx" locale={locale} />
        </div>
      </div>
    </ProductHero>
  );
}
