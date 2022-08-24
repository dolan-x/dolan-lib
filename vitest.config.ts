import { resolve } from "node:path";
import type { AliasOptions } from "vite";
import { defineConfig } from "vitest/config";

const r = (p: string) => resolve(__dirname, p);

export const alias: AliasOptions = {
  "@dolan-x/markdown-renderer": r("./packages/markdown-renderer/src"),
};

export default defineConfig({
  optimizeDeps: {
    entries: [],
  },
  resolve: {
    alias,
  },
  test: {
    isolate: false,
  },
});
