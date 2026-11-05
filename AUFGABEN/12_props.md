# Props

## Dateien

- `workspace/src/components/PlantCard.tsx`
- `workspace/src/components/App.tsx`

## Aufgabe

Mach die `PlantCard` über Props konfigurierbar, sodass `App` beliebige Pflanzen damit anzeigen kann.

## Schritte

1. Lege in `PlantCard.tsx` einen TypeScript-Typ für die Props an:
   - `name` (`string`)
   - `location` (`string`)
   - `wateringInterval` (`number`)
   - `lastWatered` (`string`, optional)
2. Nimm die Props in der Funktion `PlantCard` entgegen, als Objekt `props` oder per Destrukturierung.
3. Ersetze die festen Texte in der Komponente durch die Werte aus den Props.
4. Übergib in `App` die Props an die `PlantCard`. Render dort zum Ausprobieren mehrere Karten mit unterschiedlichen Werten.
5. Zeig die Zeile „Zuletzt: …“ nur an, wenn `lastWatered` gesetzt ist.
6. Gib das Intervall in der richtigen Form aus: „Jeden Tag gießen“ bei `1`, sonst „Alle X Tage gießen“.

### 🧐 Optional (wenn du noch Zeit hast)

7. Zeig eine Warnung an, wenn die Pflanze überfällig ist. In `src/components/date-utils.ts` liegt dafür die Funktion `getDaysUntilWatering`. Das Datum in `lastWatered` hat das Format `YYYY-MM-DD`, etwa `2025-06-28`. Rote Schrift bekommst du mit der CSS-Klasse `error-message`.

## Material

- Props: https://react.dev/learn/passing-props-to-a-component
- JavaScript in JSX: https://react.dev/learn/javascript-in-jsx-with-curly-braces
- Bedingtes Rendern: https://react.dev/learn/conditional-rendering
- Objekttypen in TypeScript: https://www.typescriptlang.org/docs/handbook/2/objects.html
- Destrukturierung: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring
- Template-Literale: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
