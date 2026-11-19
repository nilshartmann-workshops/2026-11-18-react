import { QueryClientProvider } from "@tanstack/react-query";
import { expect, test } from "vitest";
import { render } from "vitest-browser-react";

import { createQueryClient } from "../create-query-client.tsx";
import PlantForm from "./PlantForm.tsx";

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
