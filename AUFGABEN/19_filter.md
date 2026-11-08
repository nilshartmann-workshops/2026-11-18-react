# Filter nach Standort

## Dateien

- `workspace/src/components/LocationFilter.tsx` (neu)
- `workspace/src/components/PlantCardList.tsx`

## Aufgabe

Baue über der Liste einen Filter: Für jeden Standort gibt es einen Button, und ein Klick schaltet den Standort ein oder aus. Ohne Auswahl sind alle Pflanzen zu sehen.

## Schritte

**Implementiere die `LocationFilter`-Komponente**

1. Lege die Komponente `LocationFilter` an.
2. Lege außerhalb der Komponente, aber in derselben Datei, die Liste der Standorte an:

   ```ts
   const locations = ["Wohnzimmer", "Schlafzimmer", "Küche", "Badezimmer", "Arbeitszimmer", "Flur"];
   ```

3. `LocationFilter` bekommt die Properties `selectedLocations: string[]` und `onLocationToggle(location: string): void`.
4. Render die Standorte als Buttons in einem `div` mit den CSS-Klassen `ButtonBar` und `mb-8`:

   ```tsx
   <div className="ButtonBar mb-8">
     {/* todo: Liste mit Buttons */}
   </div>
   ```

   - Ein Button, der einen gerade ausgewählten Standort darstellt, bekommt die CSS-Klasse `primary`, die anderen `secondary`.
   - Ein Klick ruft `onLocationToggle` mit dem Standort auf.

**Implementiere die Filter-Logik in der `PlantCardList`**

1. Leg in `PlantCardList` einen State für die ausgewählten Standorte an. Sein initialer Wert ist ein leeres Array vom Typ `string[]`. Render `LocationFilter` über der Liste.
2. Füge beim Umschalten einen Standort hinzu, indem du ein neues Array mit dem Standort erzeugst. Entferne einen bereits ausgewählten Standort mit `filter`.
3. Zeige beim Rendern nur die Pflanzen an, deren Standort einem der ausgewählten Standorte entspricht.

## Material

- Arrays im State: https://react.dev/learn/updating-arrays-in-state
- Abgeleitete Werte: https://react.dev/learn/you-might-not-need-an-effect#updating-state-based-on-props-or-state
- `filter`-Funktion auf Arrays: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
- `includes`-Funktion auf Arrays: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
- Spread-Syntax: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
