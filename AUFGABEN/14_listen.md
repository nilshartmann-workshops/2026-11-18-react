# Listen

## Dateien

- `workspace/src/types.ts` (legst du neu an)
- `workspace/src/components/PlantCardList.tsx` (legst du neu an)
- `workspace/src/components/App.tsx`

## Aufgabe

Baue eine Komponente `PlantCardList`, die eine Liste von Pflanzen als `PlantCard`s anzeigt.

## Schritte

1. Lege die Datei `src/types.ts` an und exportiere darin den Typ `Plant`. Er hat dieselben Felder wie die Props der `PlantCard` und zusätzlich eine `id` (`string`).
2. Lege die Datei `src/components/PlantCardList.tsx` mit der Komponente `PlantCardList` an. Sie bekommt als Prop ein Array von `Plant`-Objekten.
3. Gib in `PlantCardList` ein `div` mit der CSS-Klasse `PlantCardList` zurück. Render darin für jede Pflanze eine `PlantCard`. Nimm dafür die Funktion `map` des Arrays und vergiss das Prop `key` nicht.
4. Lege in `App.tsx` ein Array mit ein paar Beispiel-Pflanzen an und render damit die `PlantCardList` statt der einzelnen Karten.
5. Öffne die Konsole im Browser. Dort sollen weder Fehler noch Warnungen stehen. Was meldet React, wenn du `key` weglässt?

## Material

- Listen rendern: https://react.dev/learn/rendering-lists
- Das Prop `key`: https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key
- `map`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
- Arrays in TypeScript: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays
