import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "./tests/",
  timeout: 60000,
  expect: {
    timeout: 5000,
  },
  workers: 2,
  reporter: [["html", { open: "never" }]],
  use: {
    viewport: { width: 1280, height: 720 },
    headless: true,
    screenshot: "only-on-failure",
  },
};

export default config;
