import { expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";

import IntervalSelector from "./IntervalSelector.tsx";

test("invokes onIntervalChange", async () => {
  const onIntervalChange = vi.fn();

  const screen = await render(
    <IntervalSelector interval={123} onIntervalChange={onIntervalChange} />,
  );

  await expect.element(screen.getByText("Alle 123 Tage gießen")).toBeVisible();

  await screen.getByRole("spinbutton").fill("456");
  expect(onIntervalChange).toHaveBeenCalledWith(456);

  await screen.getByRole("button", { name: "Wöchentlich" }).click();
  expect(onIntervalChange).toHaveBeenCalledWith(7);
});
