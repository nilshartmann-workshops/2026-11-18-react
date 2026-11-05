# Tests im Vitest Browser Mode

## Dateien

- `workspace/src/components/IntervalSelector.browsertest.tsx` (legst du neu an)

## Vorbereitung

Installiere im Verzeichnis `workspace` den Browser für die Tests: `npx playwright install chromium`.

## Aufgabe

Schreib Tests für die Komponente `IntervalSelector`. Vitest rendert sie dafür in einem echten Browser.

## Schritte

1. Lege die Datei `src/components/IntervalSelector.browsertest.tsx` an. Die Endung `.browsertest.tsx` ist wichtig, sonst läuft der Test nicht im Browser.
2. Render den `IntervalSelector` mit `render` aus `vitest-browser-react` und einem festen `interval`. Prüfe, dass der Text „Alle … Tage gießen“ zu sehen ist.
3. Der `IntervalSelector` ist eine Controlled Component. Er ändert seine Anzeige nicht selbst, sondern ruft `onIntervalChange` auf. Übergib deshalb eine Mock-Funktion (`vi.fn()`) und prüfe, mit welchem Wert sie aufgerufen wird:
   - nach einer Eingabe in das Zahlenfeld
   - nach einem Klick auf einen der Buttons
4. Starte die Tests mit `npm run test:browser` oder aus deiner IDE.

### 🧐 Optional (wenn du noch Zeit hast)

5. Schreib im Test eine kleine Komponente mit State, die den `IntervalSelector` rendert, und teste damit, dass sich die Anzeige nach einem Klick ändert.

## Material

- Browser Mode: https://vitest.dev/guide/browser/
- Assertions für DOM-Elemente: https://vitest.dev/guide/browser/assertion-api
- Mock-Funktionen: https://vitest.dev/api/mock.html
- `vitest-browser-react`: https://github.com/vitest-dev/vitest-browser-react
