export type Locale = "en" | "ko";

export interface LocaleProps {
  locale?: Locale;
}

/**
 * Chooses inline copy in client components. They keep their few labels inline instead of
 * calling translate(), which would ship the whole lib/ko.ts dictionary to the browser.
 */
export function pick(locale: Locale, english: string, korean: string): string {
  return locale === "ko" ? korean : english;
}

export function localePath(path: string, locale: Locale): string {
  return locale === "ko" ? `/ko${path === "/" ? "" : path}` : path;
}
