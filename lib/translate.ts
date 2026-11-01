import { korean } from "@/lib/ko";
import type { Locale } from "@/lib/locale";

export function translate(text: string | undefined, locale: Locale): string {
  if (!text) return "";
  return locale === "ko" ? (korean[text.replace(/\s+/g, " ").trim()] ?? text) : text;
}
