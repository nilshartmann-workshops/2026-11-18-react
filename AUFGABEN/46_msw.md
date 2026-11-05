# Das Backend mocken mit MSW

## Dateien

- `workspace/src/components/App.browsertest.tsx` (legst du neu an)

## Vorbereitung

Halte das Backend an. Dann merkst du sofort, wenn dein Test aus Versehen das echte Backend aufruft.

## Aufgabe

Schreib einen Test für die ganze `App`, mit echtem TanStack Query und einem Backend, das MSW im Browser nachbildet.

## Schritte

1. Lege die Datei `src/components/App.browsertest.tsx` an und kopiere das Gerüst von unten hinein.
2. Schreib in `setupWorker` einen Handler für `GET http://localhost:7200/api/plants`, der ein paar Pflanzen als `Plant[]` zurückgibt. Mit `await delay(125)` vor der Antwort siehst du auch den Fallback.
3. Render im Test den `QueryClientProvider` mit der `App` darin, so wie in `main.tsx`.
4. Prüfe, dass zuerst der Fallback von `Suspense` und danach eine der Pflanzen zu sehen ist.
5. Schreib einen zweiten Test, der den Fehlerfall prüft. Mit `worker.use(...)` ersetzt du den Handler für diesen einen Test durch einen, der mit Status 500 antwortet.

```tsx
import { QueryClientProvider } from "@tanstack/react-query";
import { delay, http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";
import { afterAll, afterEach, beforeAll, expect, test } from "vitest";
import { render } from "vitest-browser-react";

import { createQueryClient } from "../create-query-client.tsx";
import { Plant } from "../types.ts";
import App from "./App.tsx";

const worker = setupWorker(
  // todo: Handler für GET http://localhost:7200/api/plants
);

beforeAll(async () => {
  await worker.start({ quiet: true });
});
afterEach(() => worker.resetHandlers());
afterAll(() => worker.stop());

test("shows the plants from the backend", async () => {
  const screen = await render(
    <QueryClientProvider client={createQueryClient()}>
      {/* todo: App rendern */}
    </QueryClientProvider>,
  );

  // todo: Fallback und Pflanzen prüfen
});
```

## Material

- MSW: https://mswjs.io/docs/
- Anfragen abfangen: https://mswjs.io/docs/http/intercepting-requests/
- Antworten nachbilden: https://mswjs.io/docs/http/mocking-responses/
- Fehlerantworten: https://mswjs.io/docs/http/mocking-responses/error-responses
- Handler für einen Test ersetzen: https://mswjs.io/docs/best-practices/network-behavior-overrides
