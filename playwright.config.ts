import { defineConfig, devices } from "@playwright/test";

const port = 3100;
const baseURL = `http://localhost:${String(port)}`;

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: true,
  retries: 0,
  reporter: process.env["CI"] === undefined ? "list" : "github",
  use: { baseURL, trace: "retain-on-failure" },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: `next build && next start --port ${String(port)}`,
    url: baseURL,
    reuseExistingServer: process.env["CI"] === undefined,
    timeout: 120_000,
  },
});
