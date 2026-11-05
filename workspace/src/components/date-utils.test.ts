import { afterEach, expect, it, vi } from "vitest";

import { getDaysUntilWatering } from "./date-utils.ts";

afterEach(() => {
  vi.useRealTimers();
});

it("returns the number of days until the next watering", () => {
  // 🕵️‍♂️ Fallstrick: new Date(2025, 11, 20) ist lokale Zeit, der Test hinge dann an der Zeitzone
  vi.setSystemTime(new Date("2025-12-20"));

  expect(getDaysUntilWatering("2025-12-18", 7)).toBe(4);
  expect(getDaysUntilWatering("2025-12-10", 7)).toBe(-4);
});
