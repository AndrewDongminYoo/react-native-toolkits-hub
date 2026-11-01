import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site";
import { toolkits } from "@/lib/toolkits";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", ...toolkits.map((toolkit) => toolkit.route)].flatMap((path) =>
    ["", "/ko"].map((prefix) => ({
      changeFrequency: "monthly" as const,
      priority: path ? 0.8 : 1,
      url: `${siteUrl}${prefix}${path}`,
      alternates: { languages: { en: `${siteUrl}${path}`, ko: `${siteUrl}/ko${path}` } },
    }))
  );
}
