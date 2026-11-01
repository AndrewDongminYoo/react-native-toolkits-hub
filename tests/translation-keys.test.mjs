import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import { join, relative } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

import { korean } from "../lib/ko.ts";

const root = fileURLToPath(new URL("..", import.meta.url));
const normalize = (text) => text.replace(/\s+/g, " ").trim();

function sourceFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return sourceFiles(path);
    return /\.tsx?$/.test(entry.name) ? [path] : [];
  });
}

test("lib/ko.ts keys are whitespace-normalized", () => {
  for (const key of Object.keys(korean)) assert.equal(key, normalize(key));
});

// translate() falls back to the English text when a key is missing, so a typo or an edited
// English sentence would silently show English on the Korean pages. Product names and
// identifiers should not go through translate() at all, so every literal must have a key.
test("every literal passed to translate() has a Korean entry", () => {
  const literal = /translate\(\s*("(?:[^"\\]|\\.)*"|`[^`$]*`)\s*,/g;
  const missing = [];
  for (const file of [
    ...sourceFiles(join(root, "app")),
    ...sourceFiles(join(root, "components")),
  ]) {
    for (const [, raw] of readFileSync(file, "utf8").matchAll(literal)) {
      const text = normalize(raw.startsWith("`") ? raw.slice(1, -1) : JSON.parse(raw));
      if (!(text in korean)) missing.push(`${relative(root, file)}: ${text}`);
    }
  }
  assert.deepEqual(missing, []);
});
