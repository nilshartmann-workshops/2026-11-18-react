import { QueryClientProvider } from "@tanstack/react-query";
import { delay, http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";
import { afterAll, afterEach, beforeAll, expect, test } from "vitest";
import { render } from "vitest-browser-react";

import { createQueryClient } from "../create-query-client.tsx";
import { Plant } from "../types.ts";
import App from "./App.tsx";

const plants: Plant[] = [
  {
    id: "1",
    name: "Aloe Vera",
    location: "Schlafzimmer",
    wateringInterval: 12,
    lastWatered: "2025-06-16",
  },
  {
    id: "2",
    name: "Orchidee",
    location: "Wohnzimmer",
    wateringInterval: 20,
  },
];

const worker = setupWorker(
  http.get("http://localhost:7200/api/plants", async () => {
    await delay(125);
    return HttpResponse.json(plants);
  }),
);

beforeAll(async () => {
  await worker.start({ quiet: true });
});
afterEach(() => worker.resetHandlers());
afterAll(() => worker.stop());

const renderApp = () =>
  render(
    <QueryClientProvider client={createQueryClient()}>
      <App />
    </QueryClientProvider>,
  );

test("shows the plants from the backend", async () => {
  const screen = await renderApp();

  await expect
    .element(screen.getByText("Pflanzen werden geladen..."))
    .toBeVisible();
  await expect.element(screen.getByText("Aloe Vera")).toBeVisible();
});

test("shows an error when loading fails", async () => {
  worker.use(
    http.get("http://localhost:7200/api/plants", () =>
      HttpResponse.json({ error: "kaputt" }, { status: 500 }),
    ),
  );

  const screen = await renderApp();

  await expect
    .element(screen.getByText("Fehler beim Laden der Pflanzen 🥀"))
    .toBeVisible();
});

test("shows a new plant in the list after saving", async () => {
  const savedPlants = [...plants];
  worker.use(
    http.get("http://localhost:7200/api/plants", () =>
      HttpResponse.json(savedPlants),
    ),
    http.post<never, Omit<Plant, "id">, Plant>(
      "http://localhost:7200/api/plants",
      async ({ request }) => {
        const plant = { id: "99", ...(await request.json()) };
        savedPlants.push(plant);
        return HttpResponse.json(plant);
      },
    ),
  );

  const screen = await renderApp();
  await expect.element(screen.getByText("Aloe Vera")).toBeVisible();

  await screen.getByLabelText("Name der Pflanze").fill("Ficus");
  await screen.getByLabelText("Standort").selectOptions("Küche");
  await screen.getByRole("button", { name: "Wöchentlich" }).click();
  await screen.getByRole("button", { name: /Pflanze hinzufügen/ }).click();

  await expect.element(screen.getByText("Ficus")).toBeVisible();
});
