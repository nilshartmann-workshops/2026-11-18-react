# Das Formular testen: Validierung

## Dateien

- `workspace/src/components/PlantForm.browsertest.tsx` (legst du neu an)

## Aufgabe

Schreib Tests im Browser Mode, die prüfen, welche Fehlermeldungen das `PlantForm` beim Absenden anzeigt. Die Tests bedienen das Formular so, wie es ein Mensch tut: über die Beschriftungen der Felder und Buttons.

## Schritte

1. Lege die Datei `src/components/PlantForm.browsertest.tsx` an und kopiere das Gerüst von unten hinein. Das `PlantForm` braucht wegen `useMutation` einen `QueryClientProvider`.
2. Schick das Formular leer ab und prüfe, dass die Meldungen für Name, Standort und Gießintervall zu sehen sind.
   - Locators vergleichen den Text exakt. Für einen Button mit Emoji passt deshalb ein regulärer Ausdruck: `getByRole("button", { name: /Pflanze hinzufügen/ })`.
3. Schreib einen Test, der einen Teil der Felder ausfüllt und dann absendet. Prüfe, dass nur noch die Meldungen der fehlenden Felder zu sehen sind.
   - Die Felder findest du mit `getByLabelText`, den Standort wählst du mit `selectOptions`.
   - Das Zahlenfeld im `IntervalSelector` hat kein verbundenes Label. Du findest es mit `getByRole("spinbutton")`.
   - Dass eine Meldung fehlt, prüfst du mit `.not.toBeInTheDocument()`.
4. Prüfe, dass „Eingaben löschen“ die Meldungen wieder entfernt.

### 🧐 Optional (wenn du noch Zeit hast)

5. Schreib einen Test mit `await expect.element(screen.container).toMatchAriaInlineSnapshot()`. Beim ersten Lauf schreibt Vitest den Aufbau der Seite, so wie ihn ein Screenreader sieht, als Text in deinen Test. Welche Felder haben dort keinen Namen?

```tsx
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

  // todo: Formular absenden und Fehlermeldungen prüfen
});
```

## Material

- Locators: https://vitest.dev/api/browser/locators
- Interaktionen wie `fill` und `selectOptions`: https://vitest.dev/api/browser/interactivity
- Assertions für DOM-Elemente: https://vitest.dev/api/browser/assertions
- Aria-Snapshots: https://vitest.dev/guide/browser/aria-snapshots
