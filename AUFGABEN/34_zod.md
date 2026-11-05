# Daten validieren mit zod

## Dateien

- `workspace/src/types.ts`
- `workspace/src/components/PlantCardListLoader.tsx`

## Aufgabe

Beschreibe die Pflanze mit einem zod-Schema und prüfe damit die Antwort des Backends zur Laufzeit.

## Schritte

1. Beschreibe in `types.ts` ein zod-Schema `PlantSchema` mit denselben Feldern wie der bisherige Typ `Plant`. Importiere `z` aus `zod`.
2. Ergänze die Regeln:
   - `name` und `location` dürfen nicht leer sein.
   - `wateringInterval` ist eine Zahl, mindestens `1`.
   - `lastWatered` ist optional oder ein Datum im ISO-Format (`YYYY-MM-DD`).
3. Kommentiere den handgeschriebenen Typ aus und lass ihn von zod erzeugen: `export type Plant = z.infer<typeof PlantSchema>;`
4. Prüfe, dass `PlantCardList.tsx` und `PlantCardListLoader.tsx` weiterhin ohne TypeScript-Fehler sind.
5. Entferne in der `queryFn` die Angabe `Plant[]` und prüfe die Antwort mit dem Schema: `PlantSchema.array().parse(body)`.
6. Ändere die Adresse in `http://localhost:7200/api/plants/1`. TanStack Query wiederholt die Anfrage mehrmals, deshalb dauert es einige Sekunden. Was passiert dann, und wo siehst du den Fehler? Stell die Adresse danach wieder zurück.

## Material

- zod: https://zod.dev/basics
- Schemas: https://zod.dev/api
- ISO-Datum: https://zod.dev/api#iso-dates
- TypeScript-Typ ableiten: https://zod.dev/basics#inferring-types
- `parse` in zod: https://zod.dev/basics#parsing-data
