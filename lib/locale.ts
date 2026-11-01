export type Locale = "en" | "ko";

export interface LocaleProps {
  locale?: Locale;
}

export function localePath(path: string, locale: Locale): string {
  return locale === "ko" ? `/ko${path === "/" ? "" : path}` : path;
}
