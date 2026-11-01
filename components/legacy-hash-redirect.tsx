"use client";

import { useEffect } from "react";

import { localePath, type LocaleProps } from "@/lib/locale";

const typedAssetsHashes = new Set([
  "#start",
  "#ci",
  "#cli",
  "#configuration",
  "#features",
  "#how-it-works",
  "#installation",
]);

export function LegacyHashRedirect({ locale = "en" }: LocaleProps) {
  useEffect(() => {
    function redirectTypedAssetsHash() {
      if (typedAssetsHashes.has(window.location.hash)) {
        window.location.replace(`${localePath("/rn-typed-assets", locale)}${window.location.hash}`);
      }
    }

    redirectTypedAssetsHash();
    window.addEventListener("hashchange", redirectTypedAssetsHash);

    return () => window.removeEventListener("hashchange", redirectTypedAssetsHash);
  }, [locale]);

  return null;
}
