"use client";

import { createContext, type ReactNode, useContext, useEffect, useState } from "react";

import { DEFAULT_CODE_THEME_ID } from "@/lib/code-themes";

type SiteTheme = "light" | "dark";

interface ThemeContextValue {
  siteTheme: SiteTheme;
  toggleSiteTheme(): void;
  codeThemeId: string;
  setCodeThemeId(themeId: string): void;
}

const ThemeContext = createContext<ThemeContextValue>({
  siteTheme: "light",
  toggleSiteTheme: () => {},
  codeThemeId: DEFAULT_CODE_THEME_ID,
  setCodeThemeId: () => {},
});

// Browsers that block site data throw on any localStorage access. The preferences then live in
// memory for the visit instead of taking the whole page down with them.
function readStorage(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Storage is unavailable; the in-memory state still applies for this visit.
  }
}

function readStoredSiteTheme(): SiteTheme {
  if (typeof window === "undefined") return "light";
  const stored = readStorage("site-theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function readStoredCodeTheme(): string {
  if (typeof window === "undefined") return DEFAULT_CODE_THEME_ID;
  return readStorage("code-theme") ?? DEFAULT_CODE_THEME_ID;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [siteTheme, setSiteTheme] = useState<SiteTheme>(readStoredSiteTheme);
  const [codeThemeId, setCodeThemeIdState] = useState<string>(readStoredCodeTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", siteTheme === "dark");
    writeStorage("site-theme", siteTheme);
  }, [siteTheme]);

  const toggleSiteTheme = () => setSiteTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const setCodeThemeId = (id: string) => {
    setCodeThemeIdState(id);
    writeStorage("code-theme", id);
  };

  return (
    <ThemeContext.Provider value={{ siteTheme, toggleSiteTheme, codeThemeId, setCodeThemeId }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useSiteTheme(): ThemeContextValue {
  return useContext(ThemeContext);
}
