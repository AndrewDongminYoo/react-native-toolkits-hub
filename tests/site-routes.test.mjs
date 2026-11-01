import assert from "node:assert/strict";
import { test } from "node:test";

const baseUrl = process.env.SITE_BASE_URL ?? "http://127.0.0.1:3000";

const routes = [
  {
    path: "/",
    marker: "React Native Toolkits",
    destinations: [
      "/rn-agents-kit",
      "/rn-typed-assets",
      "/rn-newarch-ready",
      "/design-to-nativewind",
    ],
  },
  {
    path: "/rn-agents-kit",
    marker: "RN Agents Kit",
    version: "v0.2.1",
    outdatedVersion: "v0.2.0",
    destinations: ["https://github.com/AndrewDongminYoo/rn-agents-kit"],
  },
  {
    path: "/rn-typed-assets",
    marker: "rn-typed-assets",
    version: "v1.6.1",
    destinations: [
      "https://github.com/AndrewDongminYoo/rn-typed-assets",
      "https://www.npmjs.com/package/rn-typed-assets",
    ],
  },
  {
    path: "/rn-newarch-ready",
    marker: "rn-newarch-ready",
    version: "v0.1.2",
    destinations: [
      "https://github.com/AndrewDongminYoo/rn-newarch-ready",
      "https://www.npmjs.com/package/rn-newarch-ready",
    ],
  },
  {
    path: "/design-to-nativewind",
    marker: "Design to NativeWind",
    destinations: [
      "https://github.com/AndrewDongminYoo/design-to-nativewind",
      "https://www.figma.com/community/plugin/1653684573206075427/design-to-nativewind",
    ],
  },
];

for (const route of routes) {
  test(`${route.path} renders its public product contract`, async () => {
    const response = await fetch(new URL(route.path, baseUrl), { redirect: "manual" });
    const html = await response.text();

    assert.equal(response.status, 200, `${route.path} returned HTTP ${response.status}`);
    assert.match(html, new RegExp(route.marker, "i"));

    if (route.version) {
      assert.ok(html.includes(route.version), `${route.path} is missing ${route.version}`);
    }

    if (route.outdatedVersion) {
      assert.ok(
        !html.includes(route.outdatedVersion),
        `${route.path} still advertises ${route.outdatedVersion}`
      );
    }

    for (const destination of route.destinations) {
      assert.ok(
        html.includes(`href="${destination}"`),
        `${route.path} is missing a link to ${destination}`
      );
    }
  });
}

for (const route of routes) {
  const koreanPath = `/ko${route.path === "/" ? "" : route.path}`;
  test(`${koreanPath} renders Korean content and localized navigation`, async () => {
    const response = await fetch(new URL(koreanPath, baseUrl), { redirect: "manual" });
    const html = await response.text();
    assert.equal(response.status, 200);
    assert.match(html, /<html[^>]*lang="ko"/);
    assert.ok(html.includes(route.marker));
    assert.ok(html.includes("도구 탐색"));
    assert.ok(html.includes("Switch to English"));
    for (const product of routes.filter((item) => item.path !== "/")) {
      assert.ok(html.includes(`href="/ko${product.path}"`));
    }
    assert.ok(html.includes(`href="${route.path}"`), "Language switch retains the page");
    assert.match(html, /hrefLang="en"|hreflang="en"/);
    assert.match(html, /hrefLang="ko"|hreflang="ko"/);
    assert.match(html, new RegExp(`<link rel="canonical" href="[^"]*${koreanPath}"`));
    const marker = {
      "/": "추측은 줄이고.",
      "/rn-agents-kit": "하나의 스킬, 하나의 역할.",
      "/rn-typed-assets": "생성, 정리, 점검.",
      "/rn-newarch-ready": "모른다는 것도 정직한 결과.",
      "/design-to-nativewind": "선택한 디자인이 컴포넌트로.",
    }[route.path];
    assert.ok(html.includes(marker), `Missing Korean content: ${marker}`);
    if (route.path === "/") {
      assert.ok(html.includes("모듈 보기"), "Product cards must use the active locale");
    }
    if (route.path === "/rn-typed-assets") {
      for (const anchor of typedAssetsAnchors) assert.ok(html.includes(`id="${anchor}"`));
      assert.ok(html.includes("npm install --save-dev rn-typed-assets"));
    }
    for (const destination of route.destinations.filter((path) => path.startsWith("https:"))) {
      assert.ok(html.includes(`href="${destination}"`), "Public destinations remain unchanged");
    }
  });
}

test("English pages keep their language and offer Korean equivalents", async () => {
  for (const route of routes) {
    const html = await (await fetch(new URL(route.path, baseUrl))).text();
    assert.match(html, /<html[^>]*lang="en"/);
    assert.ok(html.includes(`href="/ko${route.path === "/" ? "" : route.path}"`));
  }
});

test("unknown Korean products return 404", async () => {
  const response = await fetch(new URL("/ko/not-a-toolkit", baseUrl));
  assert.equal(response.status, 404);
});

const assets = [
  {
    path: "/sitemap.xml",
    markers: ["/rn-agents-kit</loc>", "/ko</loc>", "/ko/rn-typed-assets</loc>", 'hreflang="ko"'],
  },
  { path: "/robots.txt", markers: ["Sitemap:"] },
  {
    path: "/llms.txt",
    markers: ["# React Native Toolkits", "v0.2.1", "v1.6.1", "v0.1.2"],
  },
];

for (const asset of assets) {
  test(`${asset.path} is served`, async () => {
    const response = await fetch(new URL(asset.path, baseUrl), { redirect: "manual" });
    const body = await response.text();

    assert.equal(response.status, 200, `${asset.path} returned HTTP ${response.status}`);

    for (const marker of asset.markers) {
      assert.ok(body.includes(marker), `${asset.path} is missing ${marker}`);
    }
  });
}

// Legacy root fragments redirect into this route, so these ids are a public contract.
const typedAssetsAnchors = [
  "start",
  "features",
  "how-it-works",
  "installation",
  "cli",
  "configuration",
  "ci",
];

test("/rn-typed-assets keeps its legacy section anchors", async () => {
  const response = await fetch(new URL("/rn-typed-assets", baseUrl), { redirect: "manual" });
  const html = await response.text();

  assert.equal(response.status, 200, `/rn-typed-assets returned HTTP ${response.status}`);

  for (const anchor of typedAssetsAnchors) {
    assert.ok(html.includes(`id="${anchor}"`), `/rn-typed-assets lost the #${anchor} anchor`);
  }
});

// A product page without its own openGraph block inherits the root one, which once made every
// product link preview as the site root. The origin is build-time, so only the path is asserted.
test("product routes advertise themselves in og:url", async () => {
  for (const route of routes.filter((candidate) => candidate.path !== "/")) {
    const response = await fetch(new URL(route.path, baseUrl), { redirect: "manual" });
    const html = await response.text();
    const match = html.match(/property="og:url" content="([^"]*)"/);

    assert.ok(match, `${route.path} emits no og:url`);
    assert.ok(
      match[1].endsWith(route.path),
      `${route.path} advertises ${match[1]} instead of itself`
    );
  }
});

// A segment without its own opengraph-image file inherits the root card, so every product link
// previews as the hub. The origin is build-time, so the assertion is on the resolved path.
test("every route advertises its own og:image", async () => {
  for (const route of routes) {
    const response = await fetch(new URL(route.path, baseUrl), { redirect: "manual" });
    const html = await response.text();
    const match = html.match(/property="og:image" content="([^"]*)"/);

    assert.ok(match, `${route.path} emits no og:image`);

    // Crawlers do not resolve a relative og:image, so this must parse without a base.
    const image = new URL(match[1]);
    const expected = route.path === "/" ? "/opengraph-image" : `${route.path}/opengraph-image`;

    assert.equal(image.pathname, expected, `${route.path} advertises ${image.pathname}`);

    const card = await fetch(new URL(image.pathname + image.search, baseUrl));

    assert.equal(card.status, 200, `${expected} returned HTTP ${card.status}`);
    assert.equal(card.headers.get("content-type"), "image/png", `${expected} is not a PNG`);
  }
});
