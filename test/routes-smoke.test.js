const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

const requiredRoutes = [
  "app/page.tsx",
  "app/archive/page.tsx",
  "app/archive/[slug]/page.tsx",
  "app/laboratory/page.tsx",
  "app/observatory/page.tsx",
  "app/resonance/page.tsx",
  "app/gallery/page.tsx",
  "app/oracle/page.tsx",
  "app/institution/page.tsx",
  "app/not-found.tsx",
];

test("required phase routes exist", () => {
  for (const file of requiredRoutes) {
    assert.equal(fs.existsSync(path.join(root, file)), true, `${file} should exist`);
  }
});

test("content layer contains archive entries and interaction sets", () => {
  const contentPath = path.join(root, "lib/content.ts");
  const contentSource = fs.readFileSync(contentPath, "utf8");
  assert.match(contentSource, /export const archiveEntries/);
  assert.match(contentSource, /export const laboratoryProtocols/);
  assert.match(contentSource, /export const galleryPieces/);
  assert.match(contentSource, /export const resonanceStates/);
});

test("accessibility hooks remain available", () => {
  const globalsPath = path.join(root, "app/globals.css");
  const globalsSource = fs.readFileSync(globalsPath, "utf8");
  assert.match(globalsSource, /prefers-reduced-motion/);
  assert.match(globalsSource, /\.skip-link/);
});
