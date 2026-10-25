import { expect, test } from "@playwright/test";

test("home page renders without browser errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => {
    errors.push(error.message);
  });
  page.on("console", (message) => {
    if (message.type() === "error") {
      errors.push(message.text());
    }
  });

  const response = await page.goto("/");

  expect(response?.status()).toBe(200);
  await expect(page).toHaveTitle("Project management tool");
  await expect(
    page.getByRole("heading", { level: 1, name: "Project management tool" }),
  ).toBeVisible();
  expect(errors).toStrictEqual([]);
});
