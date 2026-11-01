"use client";

import { Github, Menu, Moon, Palette, Sun, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { useSiteTheme } from "@/contexts/theme-context";
import { CODE_THEMES } from "@/lib/code-themes";
import { localePath, type LocaleProps } from "@/lib/locale";
import { toolkits } from "@/lib/toolkits";
import { cn } from "@/lib/utils";

export function Header({ locale = "en" }: LocaleProps) {
  const pathname = usePathname();
  const isKorean = locale === "ko";
  const englishPath = isKorean ? pathname.replace(/^\/ko(?=\/|$)/, "") || "/" : pathname;
  const alternatePath = localePath(englishPath, isKorean ? "en" : "ko");
  const { siteTheme, toggleSiteTheme, codeThemeId, setCodeThemeId } = useSiteTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themePickerOpen, setThemePickerOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const themePickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (themePickerRef.current && !themePickerRef.current.contains(event.target as Node)) {
        setThemePickerOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const resolvedSiteTheme = mounted ? siteTheme : "light";
  const resolvedCodeThemeId = mounted ? codeThemeId : "github";
  const activeTheme = CODE_THEMES.find((theme) => theme.id === resolvedCodeThemeId);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/88 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex h-17 items-center justify-between gap-5">
          <Link
            className="group flex shrink-0 items-center gap-3"
            href={localePath("/", locale)}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="flex size-8 items-center justify-center border border-primary bg-primary-solid font-mono text-[0.65rem] font-bold text-primary-foreground transition-transform group-hover:-rotate-3">
              RN
            </span>
            <span className="hidden font-display text-base font-semibold tracking-[-0.03em] text-foreground sm:block">
              React Native Toolkits
            </span>
          </Link>

          <nav
            aria-label={isKorean ? "도구 탐색" : "Toolkit navigation"}
            className="hidden items-center gap-1 lg:flex"
          >
            {toolkits.map((toolkit) => (
              <Link
                aria-current={englishPath === toolkit.route ? "page" : undefined}
                className={cn(
                  "border-b px-3 py-2 font-mono text-[0.68rem] tracking-[0.08em] uppercase transition-colors",
                  englishPath === toolkit.route
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
                )}
                href={localePath(toolkit.route, locale)}
                key={toolkit.slug}
              >
                {toolkit.shortName}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-1.5 lg:flex">
            <div className="relative" ref={themePickerRef}>
              <button
                aria-expanded={themePickerOpen}
                aria-label={isKorean ? "코드 테마 선택" : "Select code theme"}
                className="flex h-9 items-center gap-2 border border-transparent px-2.5 font-mono text-[0.65rem] tracking-[0.08em] text-muted-foreground uppercase transition-colors hover:border-border hover:text-foreground"
                onClick={() => setThemePickerOpen((open) => !open)}
              >
                <Palette className="size-4" />
                <span className="hidden xl:inline">{activeTheme?.label ?? "Code theme"}</span>
              </button>

              {themePickerOpen && (
                <div className="absolute top-full right-0 z-50 mt-2 w-44 border border-border bg-popover p-1 shadow-2xl">
                  {CODE_THEMES.map((theme) => (
                    <button
                      className={cn(
                        "w-full px-3 py-2 text-left font-mono text-xs transition-colors hover:bg-muted",
                        theme.id === resolvedCodeThemeId
                          ? "bg-primary/10 text-primary-ink"
                          : "text-foreground"
                      )}
                      key={theme.id}
                      onClick={() => {
                        setCodeThemeId(theme.id);
                        setThemePickerOpen(false);
                      }}
                    >
                      {theme.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              aria-label={
                isKorean
                  ? resolvedSiteTheme === "dark"
                    ? "라이트 모드로 전환"
                    : "다크 모드로 전환"
                  : resolvedSiteTheme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
              }
              className="flex size-9 items-center justify-center border border-transparent text-muted-foreground transition-colors hover:border-border hover:text-foreground"
              onClick={toggleSiteTheme}
            >
              {resolvedSiteTheme === "dark" ? (
                <Sun className="size-4" />
              ) : (
                <Moon className="size-4" />
              )}
            </button>

            <a
              aria-label={
                isKorean ? "AndrewDongminYoo GitHub 열기" : "Open AndrewDongminYoo on GitHub"
              }
              className="flex size-9 items-center justify-center border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
              href="https://github.com/AndrewDongminYoo"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Github className="size-4" />
            </a>
          </div>

          <a
            aria-label={isKorean ? "Switch to English" : "한국어로 전환"}
            className="ml-auto inline-flex h-10 shrink-0 items-center gap-2 border border-border px-3 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring lg:ml-0"
            href={alternatePath}
            hrefLang={isKorean ? "en" : "ko"}
            lang={isKorean ? "en" : "ko"}
            onClick={(event) => {
              event.currentTarget.href = `${alternatePath}${window.location.search}${window.location.hash}`;
              setMobileMenuOpen(false);
            }}
          >
            <span className={isKorean ? "text-foreground" : undefined}>한국어</span>
            <span aria-hidden="true" className="text-border">
              /
            </span>
            <span className={!isKorean ? "text-foreground" : undefined}>EN</span>
          </a>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={mobileMenuOpen}
            aria-label={
              isKorean
                ? mobileMenuOpen
                  ? "메뉴 닫기"
                  : "메뉴 열기"
                : mobileMenuOpen
                  ? "Close menu"
                  : "Open menu"
            }
            className="flex size-10 items-center justify-center border border-border text-foreground lg:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <div
          aria-hidden={!mobileMenuOpen}
          className={cn(
            "border-t border-border transition-[max-height,padding] duration-300 lg:hidden",
            mobileMenuOpen
              ? "max-h-[calc(100dvh-4.25rem)] overflow-y-auto py-5"
              : "max-h-0 overflow-hidden py-0"
          )}
          id="mobile-navigation"
          inert={!mobileMenuOpen}
        >
          <nav
            aria-label={isKorean ? "모바일 도구 탐색" : "Mobile toolkit navigation"}
            className="grid gap-px bg-border"
          >
            {toolkits.map((toolkit) => (
              <Link
                aria-current={englishPath === toolkit.route ? "page" : undefined}
                className="flex items-center justify-between bg-background px-4 py-3.5 text-sm font-semibold text-foreground"
                href={localePath(toolkit.route, locale)}
                key={toolkit.slug}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{toolkit.name}</span>
                <span className="font-mono text-[0.65rem] tracking-[0.12em] text-muted-foreground">
                  {toolkit.index}
                </span>
              </Link>
            ))}
          </nav>

          <fieldset className="mt-5 border-t border-border pt-5">
            <legend className="px-1 font-mono text-[0.65rem] tracking-[0.12em] text-muted-foreground uppercase">
              {isKorean ? "코드 테마" : "Code theme"}
            </legend>
            <div className="mt-3 grid grid-cols-2 gap-px bg-border">
              {CODE_THEMES.map((theme) => (
                <button
                  aria-pressed={theme.id === resolvedCodeThemeId}
                  className={cn(
                    "bg-background px-3 py-2.5 text-left font-mono text-xs transition-colors hover:bg-muted hover:text-foreground",
                    theme.id === resolvedCodeThemeId
                      ? "bg-primary/10 text-primary-ink"
                      : "text-muted-foreground"
                  )}
                  key={theme.id}
                  onClick={() => setCodeThemeId(theme.id)}
                  type="button"
                >
                  {theme.label}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="mt-5 flex items-center justify-between gap-3">
            <button
              aria-label={
                isKorean
                  ? resolvedSiteTheme === "dark"
                    ? "라이트 모드로 전환"
                    : "다크 모드로 전환"
                  : resolvedSiteTheme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
              }
              className="flex h-10 flex-1 items-center justify-center gap-2 border border-border font-mono text-xs text-muted-foreground"
              onClick={toggleSiteTheme}
            >
              {resolvedSiteTheme === "dark" ? (
                <Sun className="size-4" />
              ) : (
                <Moon className="size-4" />
              )}
              {isKorean
                ? resolvedSiteTheme === "dark"
                  ? "라이트 모드"
                  : "다크 모드"
                : resolvedSiteTheme === "dark"
                  ? "Light mode"
                  : "Dark mode"}
            </button>
            <a
              className="flex h-10 flex-1 items-center justify-center gap-2 border border-border font-mono text-xs text-muted-foreground"
              href="https://github.com/AndrewDongminYoo"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Github className="size-4" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
