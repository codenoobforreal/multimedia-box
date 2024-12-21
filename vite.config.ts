/// <reference types="vitest" />

import { defineConfig, type UserConfig } from "vite";
import type { InlineConfig } from "vitest/node";
import react from "@vitejs/plugin-react";

// as UserConfig & { test: InlineConfig } is a workaround: https://github.com/vitest-dev/vitest/discussions/1106#discussioncomment-11595504
// https://vite.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["vitest.setup.ts"],
    watch: false,
    include: [
      "./src/test/unit/**/*.test.{ts,tsx}",
      "./src/test/integrate/**/*.test.{ts,tsx}",
    ],
  },
  plugins: [react()],
} as UserConfig & { test: InlineConfig });
