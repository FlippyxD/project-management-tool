import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: { tsconfigPaths: true },
  test: {
    include: ["src/**/*.test.{ts,tsx}"],
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    allowOnly: false,
    restoreMocks: true,
    unstubEnvs: true,
    unstubGlobals: true,
  },
});
