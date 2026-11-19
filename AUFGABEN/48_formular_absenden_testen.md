# Das Formular testen: Absenden mit MSW

## Dateien

- `workspace/src/components/PlantForm.browsertest.tsx`
- `workspace/src/components/App.browsertest.tsx` (optional)

## Vorbereitung

Halte das Backend an. Dann merkst du sofort, wenn dein Test aus Versehen das echte Backend aufruft.

## Aufgabe

Teste, dass das `PlantForm` eine korrekt ausgefüllte Pflanze an das Backend schickt und das Ergebnis anzeigt. Das Backend bildet MSW nach.

## Schritte

1. Lege in `PlantForm.browsertest.tsx` mit `setupWorker` einen Worker an. Starte ihn in `beforeAll` mit `worker.start()`, setz seine Handler in `afterEach` mit `worker.resetHandlers()` zurück und stoppe ihn in `afterAll` mit `worker.stop()`.
2. Gib ihm einen Handler für `POST http://localhost:7200/api/plants`. Er liest den Body mit `await request.json()`, merkt ihn sich in einer Variablen außerhalb des Handlers und antwortet mit der Pflanze samt `id`.
3. Typisiere den Handler mit `http.post<never, Omit<Plant, "id">, Plant>(...)`. Die Typargumente beschreiben Pfadparameter, Body des Requests und Body der Antwort. Fehlt in der Antwort ein Feld, meldet TypeScript den Fehler.
4. Schreib einen Test, der das Formular ausfüllt und absendet. Prüfe:
   - dass „Pflanze angelegt“ zu sehen ist
   - mit `toEqual`, dass der Handler die eingegebenen Daten bekommen hat
5. Schreib einen zweiten Test, der mit `worker.use(...)` einen Handler einsetzt, der mit Status 500 antwortet. Prüfe, dass „Speichern fehlgeschlagen“ zu sehen ist.

### 🧐 Optional (wenn du noch Zeit hast)

6. Warte im Handler mit `await delay(125)` und prüfe, dass der Button „Pflanze hinzufügen“ währenddessen gesperrt ist (`toBeDisabled`).
7. Teste in `App.browsertest.tsx` die ganze Anwendung: Nach dem Speichern steht die neue Pflanze in der Liste. Lege dafür im Test ein Array mit Pflanzen an. Ein Handler für `GET` liefert das Array, ein Handler für `POST` hängt die neue Pflanze daran an.

## Material

- Anfragen abfangen: https://mswjs.io/docs/http/intercepting-requests/
- Handler typisieren: https://mswjs.io/docs/best-practices/typescript
- `delay`: https://mswjs.io/docs/api/delay
- Handler für einen Test ersetzen: https://mswjs.io/docs/best-practices/network-behavior-overrides
