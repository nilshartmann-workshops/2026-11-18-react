# Eine React-Komponente

## Dateien

- `workspace/src/components/PlantCard.tsx` (legst du neu an)
- `workspace/src/components/App.tsx`

## Vorbereitung

Starte im Verzeichnis `workspace` den Devserver mit `npm run dev` und öffne http://localhost:3000. Wenn du eine Datei speicherst, aktualisiert sich die Seite im Browser von selbst. Falls nicht, lade sie neu.

## Aufgabe

Baue deine erste React-Komponente: eine `PlantCard`, die eine Pflanze anzeigt. Die Daten stehen vorerst fest im Code.

## Schritte

1. Lege die Datei `src/components/PlantCard.tsx` an. Eine Datei mit JSX muss auf `.tsx` enden.
2. Schreib darin die Komponente `PlantCard` und exportiere sie als Default-Export. Sie gibt ein `div` mit der CSS-Klasse `PlantCard` zurück, darin:
   - einen `header` mit dem Namen der Pflanze (`h2`) und dem Standort (`div`)
   - eine `section` mit dem Gießintervall und dem Datum der letzten Wässerung (je ein `div`)
3. Ersetze in `App.tsx` die Überschrift „Hello React“ durch deine `PlantCard`.

## Material

- Komponenten: https://react.dev/learn/your-first-component
- Importieren und Exportieren: https://react.dev/learn/importing-and-exporting-components
- CSS-Klassen in React: https://react.dev/learn#adding-styles

## Hintergrund

In React heißt das Attribut für CSS-Klassen `className` statt `class`. Tailwind ist im Workspace eingerichtet, du kannst seine Klassen direkt verwenden. Eigenes CSS schreibst du in `src/index.css` oder in eine eigene `.css`-Datei, die du in der Komponente importierst (`import "./PlantCard.css";`). Inline-Styles bekommen in React ein Objekt: https://react.dev/learn/javascript-in-jsx-with-curly-braces#using-double-curlies-css-and-other-objects-in-jsx
