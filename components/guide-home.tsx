import { ArrowDown, ArrowRight } from "lucide-react";
import Link from "next/link";

import { LegacyHashRedirect } from "@/components/legacy-hash-redirect";
import { englishQuestions, guides, type Locale, localePath } from "@/lib/guides";
import { toolkits } from "@/lib/toolkits";

export function GuideHome({ locale }: { locale: Locale }) {
  const ko = locale === "ko";
  return (
    <main className="guide-page" lang={locale}>
      {!ko && <LegacyHashRedirect />}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:px-12 lg:py-24">
        <div>
          <h1 className="max-w-3xl text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-6xl">
            {ko ? (
              <>
                함께 시작하는
                <br />
                React Native 도구들
              </>
            ) : (
              <>
                A little help for
                <br />
                your React Native app.
              </>
            )}
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8">
            {ko
              ? "설정부터 첫 실행까지, 하나씩 같이 해봐요. 에셋 정리, 아키텍처 점검, 디자인 변환에 필요한 도구와 따라 하기 쉬운 안내를 모았어요."
              : "From setup to your first run, take it one step at a time. Find a tool for your assets, architecture, or design handoff—and a guide to get you started."}
          </p>
          <a className="guide-action mt-8" href="#toolkits">
            {ko ? "내게 맞는 도구 찾기" : "Find your starting point"}
            <ArrowDown aria-hidden="true" className="size-4" />
          </a>
        </div>
        <aside className="rounded-3xl bg-secondary p-7 sm:p-10">
          <h2 className="text-2xl font-semibold">
            {ko ? "처음이라면, 이렇게 시작해요" : "New here? Start small."}
          </h2>
          <ol className="mt-7 flex list-decimal flex-col gap-6 pl-5 marker:text-primary-ink">
            {(ko
              ? [
                  [
                    "지금 해결하고 싶은 일 하나만 골라요",
                    "모든 도구를 한꺼번에 설치할 필요는 없어요.",
                  ],
                  [
                    "가이드를 보며 첫 실행을 해봐요",
                    "어디에서 실행하고 무엇이 나오는지 함께 안내해요.",
                  ],
                  [
                    "결과를 보고 다음 걸음을 정해요",
                    "변경 사항은 검토하고, 내 프로젝트의 테스트로 확인해요.",
                  ],
                ]
              : [
                  [
                    "Choose one thing to work on",
                    "You do not need to install the whole collection.",
                  ],
                  [
                    "Follow the guide to your first run",
                    "Know where to run each command and what to expect.",
                  ],
                  [
                    "Review the result before moving on",
                    "Check the diff, then run your project's own tests.",
                  ],
                ]
            ).map(([title, text]) => (
              <li className="pl-2" key={title}>
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 leading-7 text-muted-foreground">{text}</p>
              </li>
            ))}
          </ol>
        </aside>
      </section>
      <section
        className="mx-auto max-w-7xl scroll-mt-24 px-5 py-12 sm:px-8 lg:px-12 lg:py-20"
        id="toolkits"
      >
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {ko ? "어떤 일부터 도와드릴까요?" : "What would you like to work on?"}
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          {ko
            ? "지금 필요한 것만 골라 주세요. 각 도구는 따로 사용할 수 있어요."
            : "Pick what you need today. Each tool works on its own."}
        </p>
        <div className="mt-10 flex flex-col gap-5">
          {toolkits.map((toolkit) => (
            <article
              className="grid gap-6 rounded-2xl bg-card p-6 sm:p-8 md:grid-cols-[1fr_1fr] md:items-center"
              key={toolkit.slug}
            >
              <div>
                <h3 className="text-xl leading-snug font-semibold sm:text-2xl">
                  {ko ? guides[toolkit.slug].question : englishQuestions[toolkit.slug]}
                </h3>
                <p className="mt-3 text-sm text-primary-ink">
                  {toolkit.name} · {toolkit.status}
                </p>
              </div>
              <div>
                <p className="leading-7">
                  {ko ? guides[toolkit.slug].summary : toolkit.description}
                </p>
                <Link
                  className="mt-5 inline-flex min-h-11 items-center gap-2 font-semibold text-primary-ink hover:underline"
                  href={localePath(locale, toolkit.route)}
                >
                  {ko ? "시작 가이드 읽기" : "Open the getting-started guide"}
                  <ArrowRight aria-hidden="true" className="size-4" />
                  <span className="sr-only"> — {toolkit.name}</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-24">
        <h2 className="text-3xl leading-snug font-semibold">
          {ko ? "서두르지 않아도 괜찮아요" : "You stay in control."}
        </h2>
        <p className="text-lg leading-8">
          {ko
            ? "점검 결과가 unknown이라고 해서 잘못된 건 아니에요. 아직 확인할 근거가 부족하다는 뜻이에요. 파일을 바꾸거나 지우기 전에는 보고서와 Git 변경 사항을 살펴보고, 확신이 생길 때 다음 단계로 넘어가세요."
            : "An unknown result is not a failure—it means there is more to check. Read the report and review your Git changes before editing or deleting files. Take the next step when the evidence makes sense."}
        </p>
      </section>
    </main>
  );
}
