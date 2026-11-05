# Unit-Tests mit Vitest

## Dateien

- `workspace/src/components/date-utils.test.ts` (legst du neu an)

## Aufgabe

Schreib Unit-Tests für die Funktion `getDaysUntilWatering` aus `date-utils.ts`. Sie bekommt das Datum der letzten Wässerung (`YYYY-MM-DD`) und das Gießintervall in Tagen und gibt zurück, in wie vielen Tagen die Pflanze wieder gegossen werden muss.

## Schritte

1. Lege die Datei `src/components/date-utils.test.ts` an. Die Endung `.test.ts` ist wichtig, sonst findet Vitest den Test nicht.
2. Schreib mit `it` oder `test` einen oder mehrere Testfälle, etwa für eine Pflanze, die bald gegossen werden muss, und für eine, die überfällig ist.
3. Die Funktion rechnet mit dem heutigen Datum. Ohne Vorkehrung ist dein Test deshalb heute grün und morgen rot. Setz das Datum im Test mit `vi.setSystemTime` fest.
4. Setz die Zeit in `afterEach` mit `vi.useRealTimers()` zurück.
5. Starte die Tests mit `npm run test:unit` oder aus deiner IDE. Auf der Kommandozeile läuft Vitest weiter und führt die Tests bei jeder gespeicherten Änderung neu aus.

## Material

- Vitest: https://vitest.dev/guide/
- `expect`: https://vitest.dev/api/expect.html
- `vi.setSystemTime`: https://vitest.dev/api/vi.html#vi-setsystemtime
- `afterEach`: https://vitest.dev/api/#aftereach
