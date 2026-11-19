import { QueryClientProvider } from "@tanstack/react-query";
import { delay, http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";
import { afterAll, afterEach, beforeAll, expect, test } from "vitest";
import { render } from "vitest-browser-react";

import { createQueryClient } from "../create-query-client.tsx";
import { Plant } from "../types.ts";
import PlantForm from "./PlantForm.tsx";

type NewPlant = Omit<Plant, "id">;

let savedPlant: NewPlant | undefined;

const worker = setupWorker(
  // Typargumente: Pfadparameter, Body des Requests, Body der Antwort
  http.post<never, NewPlant, Plant>(
    "http://localhost:7200/api/plants",
    async ({ request }) => {
      savedPlant = await request.json();
      await delay(125);
      return HttpResponse.json({ id: "99", ...savedPlant });
    },
  ),
);

beforeAll(async () => {
  await worker.start({ quiet: true });
});
afterEach(() => {
  worker.resetHandlers();
  savedPlant = undefined;
});
afterAll(() => worker.stop());

const renderPlantForm = () =>
  render(
    <QueryClientProvider client={createQueryClient()}>
      <PlantForm />
    </QueryClientProvider>,
  );

test("shows an error for every missing field", async () => {
  const screen = await renderPlantForm();

  await screen.getByRole("button", { name: /Pflanze hinzufügen/ }).click();

  await expect
    .element(screen.getByText("Bitte gib den Namen deiner Pflanze ein"))
    .toBeVisible();
  await expect
    .element(screen.getByText("Bitte wähle den Standort deiner Pflanze aus"))
    .toBeVisible();
  await expect
    .element(
      screen.getByText(
        "Bitte gib an, wie oft die Pflanze gegossen werden muss",
      ),
    )
    .toBeVisible();
});

test("shows only the errors of fields that are still invalid", async () => {
  const screen = await renderPlantForm();

  await screen.getByLabelText("Name der Pflanze").fill("Ficus");
  await screen.getByLabelText("Standort").selectOptions("Küche");
  await screen.getByRole("spinbutton").fill("0");
  await screen.getByRole("button", { name: /Pflanze hinzufügen/ }).click();

  await expect
    .element(screen.getByText("Das Intervall beträgt mindestens einen Tag"))
    .toBeVisible();
  await expect
    .element(screen.getByText("Bitte gib den Namen deiner Pflanze ein"))
    .not.toBeInTheDocument();
  await expect
    .element(screen.getByText("Bitte wähle den Standort deiner Pflanze aus"))
    .not.toBeInTheDocument();
});

test("removes all errors when the inputs are cleared", async () => {
  const screen = await renderPlantForm();

  await screen.getByRole("button", { name: /Pflanze hinzufügen/ }).click();
  await expect
    .element(screen.getByText("Bitte gib den Namen deiner Pflanze ein"))
    .toBeVisible();

  await screen.getByRole("button", { name: /Eingaben löschen/ }).click();

  await expect
    .element(screen.getByText("Bitte gib den Namen deiner Pflanze ein"))
    .not.toBeInTheDocument();
});

test("has an accessible structure", async () => {
  const screen = await renderPlantForm();

  await expect.element(screen.container).toMatchAriaInlineSnapshot(`
    - text: Name der Pflanze
    - textbox "Name der Pflanze"
    - text: Standort
    - combobox "Standort":
      - option "Standort wählen..." [selected]
      - option "Wohnzimmer"
      - option "Arbeitszimmer"
      - option "Küche"
      - option "Schlafzimmer"
      - option "Badezimmer"
    - text: Gießintervall
    - spinbutton
    - button "Täglich"
    - button "Wöchentlich"
    - button "Alle zwei Wochen"
    - text: Zuletzt gegossen
    - textbox "Zuletzt gegossen"
    - button "Eingaben löschen 🧹"
    - button "Pflanze hinzufügen 🌱"
  `);
});

test("saves the plant", async () => {
  const screen = await renderPlantForm();

  await screen.getByLabelText("Name der Pflanze").fill("Ficus");
  await screen.getByLabelText("Standort").selectOptions("Küche");
  await screen.getByRole("button", { name: "Wöchentlich" }).click();
  await screen.getByRole("button", { name: /Pflanze hinzufügen/ }).click();

  await expect
    .element(screen.getByRole("button", { name: /Pflanze hinzufügen/ }))
    .toBeDisabled();
  await expect.element(screen.getByText("Pflanze angelegt")).toBeVisible();
  expect(savedPlant).toEqual({
    name: "Ficus",
    location: "Küche",
    wateringInterval: 7,
  });
});

test("shows an error when saving fails", async () => {
  worker.use(
    http.post("http://localhost:7200/api/plants", () =>
      HttpResponse.json({ error: "kaputt" }, { status: 500 }),
    ),
  );

  const screen = await renderPlantForm();

  await screen.getByLabelText("Name der Pflanze").fill("Ficus");
  await screen.getByLabelText("Standort").selectOptions("Küche");
  await screen.getByRole("button", { name: "Wöchentlich" }).click();
  await screen.getByRole("button", { name: /Pflanze hinzufügen/ }).click();

  await expect
    .element(screen.getByText("Speichern fehlgeschlagen"))
    .toBeVisible();
});
