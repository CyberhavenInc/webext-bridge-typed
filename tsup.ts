import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["tests/extension/background.ts", "tests/extension/content.ts"],
  outDir: "tests/extension/scripts",
  tsconfig: "tests/tsconfig.json",
  legacyOutput: true,
  clean: true,
  noExternal: [
    "webext-detect",
    "webextension-polyfill",
    "tiny-uid",
    "serialize-error",
    "nanoevents",
  ],
});
