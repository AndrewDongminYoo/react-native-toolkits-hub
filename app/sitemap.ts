import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site";
import { toolkits } from "@/lib/toolkits";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", ...toolkits.map((toolkit) => toolkit.route)].flatMap((path) => {
    const en = `${siteUrl}${path === "/" ? "" : path}`;
    const ko = `${siteUrl}/ko${path === "/" ? "" : path}`;
    return [en, ko].map((url) => ({
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.8,
      url,
      alternates: { languages: { en, ko, "x-default": en } },
    }));
  });
}
