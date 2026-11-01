import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

import { CodeBlock } from "@/components/code-block";
import { guides } from "@/lib/guides";
import type { Toolkit } from "@/lib/toolkits";

export function KoreanGuide({ toolkit }: { toolkit: Toolkit }) {
  const guide = guides[toolkit.slug];
  return (
    <main className="guide-page mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:px-12" lang="ko">
      <Link
        className="inline-flex min-h-11 items-center gap-2 text-primary-ink hover:underline"
        href="/ko"
      >
        <ArrowLeft aria-hidden="true" className="size-4" />
        다른 도구 살펴보기
      </Link>
      <header className="py-10 sm:py-14">
        <h1 className="text-3xl leading-tight font-semibold tracking-tight [overflow-wrap:anywhere] sm:text-5xl">
          {toolkit.name}
          <span className="mt-3 block">시작 가이드</span>
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8">{guide.summary}</p>
        <a className="guide-action mt-7" href="#installation">
          함께 설치해 볼까요
          <ArrowRight aria-hidden="true" className="size-4" />
        </a>
      </header>
      <section className="rounded-2xl bg-secondary p-6 sm:p-8" id="start">
        <h2 className="text-2xl font-semibold">시작 전에 준비해 주세요</h2>
        <p className="mt-4 max-w-3xl leading-8">{guide.preparation}</p>
        <p className="mt-4 text-sm text-muted-foreground">
          안내 기준: {toolkit.status} · 명령어와 코드 이름은 원문 그대로 사용해요.
        </p>
      </section>
      <section className="scroll-mt-24 py-16 sm:py-20" id="installation">
        <h2 className="text-3xl font-semibold">하나씩 따라 해봐요</h2>
        <ol className="mt-10 flex list-decimal flex-col gap-12 pl-6 marker:font-semibold marker:text-primary-ink">
          {guide.steps.map((step) => (
            <li className="pl-3" key={step.title}>
              <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr]">
                <div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 leading-8">{step.description}</p>
                </div>
                {step.code && (
                  <div className="min-w-0">
                    <CodeBlock code={step.code} language={step.language} locale="ko" />
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
        {toolkit.slug === "design-to-nativewind" && (
          <a
            className="guide-action mt-10"
            href={toolkit.productUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Figma Community에서 열기
            <ArrowRight aria-hidden="true" className="size-4" />
          </a>
        )}
      </section>
      <section className="rounded-2xl bg-secondary p-6 sm:p-8">
        <h2 className="text-2xl font-semibold">여기까지 됐다면 잘하고 있어요</h2>
        <p className="mt-4 leading-8">{guide.success}</p>
      </section>
      <section className="py-16">
        <h2 className="text-2xl font-semibold">잠깐, 막히는 부분이 있나요?</h2>
        <p className="mt-4 max-w-3xl leading-8">{guide.help}</p>
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4">
          <a
            className="min-h-11 text-primary-ink underline underline-offset-4"
            href={toolkit.githubUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            공개 저장소와 README 보기
          </a>
          <a
            className="min-h-11 text-primary-ink underline underline-offset-4"
            href={toolkit.route}
            hrefLang="en"
            lang="en"
          >
            영문 상세 레퍼런스 보기
          </a>
          {toolkit.productUrl && (
            <a
              className="min-h-11 text-primary-ink underline underline-offset-4"
              href={toolkit.productUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              {toolkit.productLabel}에서 보기
            </a>
          )}
        </div>
      </section>
    </main>
  );
}
