import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import Home from "@/app/page";

test("home page shows the product name as its main heading", () => {
  render(<Home />);
  expect(screen.getByRole("heading", { level: 1 }).textContent).toBe(
    "Project management tool",
  );
});
