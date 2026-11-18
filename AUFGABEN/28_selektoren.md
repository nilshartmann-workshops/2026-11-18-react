# Selektoren in Zustand

## Dateien

- `workspace/src/components/LocationButton.tsx` (neu)
- `workspace/src/components/LocationFilter.tsx`
- `workspace/src/components/PlantCardList.tsx`
- `workspace/src/components/useLocationFilterStore.ts`

## Aufgabe

Eine Komponente, die `useLocationFilterStore()` ohne Argument aufruft, abonniert den ganzen Store. Sie rendert bei jeder Änderung im Store neu, auch wenn sich für sie nichts geändert hat. Sorge mit Selektoren dafür, dass beim Klick auf einen Standort nur dessen Button neu rendert.

## Schritte

1. Lege die Komponente `LocationButton` mit der Property `location: string` an. Verschiebe den Button aus `LocationFilter` dorthin und render in `LocationFilter` für jeden Standort einen `LocationButton`.
2. Lies in `LocationButton` den Store fürs Erste mit `useLocationFilterStore()` aus.
3. Schreib an den Anfang von `LocationButton` die Zeile `console.log("LocationButton rendert:", location);`. Öffne die Konsole im Browser und klick auf einen Standort. Wie viele Buttons rendern neu?
4. Lege in `useLocationFilterStore.ts` einen Selector an:

   ```ts
   export const selectIsSelected =
     (location: string) =>
     (state: LocationFilterStore): boolean =>
       state.selectedLocations.includes(location);
   ```

   - `selectIsSelected("Küche")` gibt den Selector für den Standort Küche zurück.
   - Zustand ruft einen Selector nach jeder Änderung im Store auf. Neu gerendert wird die Komponente nur, wenn sich sein Rückgabewert geändert hat.

5. Stelle `LocationButton` auf zwei Aufrufe mit Selector um: `useLocationFilterStore(selectIsSelected(location))` für die Auswahl und `useLocationFilterStore((state) => state.toggleLocation)` für die Funktion.
6. Klick noch einmal auf einen Standort. Jetzt rendert nur noch der angeklickte Button neu. Entferne danach den `console.log`.
7. Lies auch in `PlantCardList` die Auswahl mit einem Selector: `useLocationFilterStore((state) => state.selectedLocations)`.
8. Warum steht `selectIsSelected` in der Datei des Stores und nicht in `LocationButton`?

## Material

- Zustand, unnötiges Rendern vermeiden: https://zustand.docs.pmnd.rs/guides/prevent-rerenders-with-use-shallow
- React, Rendern und Committen: https://react.dev/learn/render-and-commit
