import Link from "next/link";

import { type Locale, localePath } from "@/lib/guides";
import { toolkits } from "@/lib/toolkits";

export function SiteFooter({ locale = "en" }: { locale?: Locale }) {
  const ko = locale === "ko";
  return (
    <footer className="bg-secondary">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-2 lg:px-12">
        <div>
          <Link className="text-xl font-semibold" href={localePath(locale)}>
            React Native Toolkits
          </Link>
          <p className="mt-4 max-w-md leading-7">
            {ko
              ? "개발의 복잡한 순간에, 작은 도움을. 필요한 도구 하나부터 차근차근 시작해 보세요."
              : "A little help with the tricky parts. Start with one tool, and take it from there."}
          </p>
          <a
            className="mt-5 inline-block min-h-11 text-primary-ink hover:underline"
            href="https://github.com/AndrewDongminYoo"
            rel="noopener noreferrer"
            target="_blank"
          >
            AndrewDongminYoo · GitHub
          </a>
        </div>
        <nav
          aria-label={ko ? "도구 가이드" : "Toolkit guides"}
          className="grid gap-3 sm:grid-cols-2"
        >
          {toolkits.map((toolkit) => (
            <Link
              className="inline-flex min-h-11 items-center text-sm hover:underline"
              href={localePath(locale, toolkit.route)}
              key={toolkit.slug}
            >
              {toolkit.name}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
