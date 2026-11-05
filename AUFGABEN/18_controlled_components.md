# Controlled Components

## Dateien

- `workspace/src/components/IntervalSelector.tsx`
- `workspace/src/components/App.tsx`

## Aufgabe

Mach aus dem `IntervalSelector` eine Controlled Component: Den Wert hält `App`, der `IntervalSelector` zeigt ihn nur an und meldet Änderungen zurück.

## Schritte

1. Lege einen Typ für die Props des `IntervalSelector` an. Er braucht zwei Props:
   - `interval`, den Wert, den die Komponente anzeigt
   - `onIntervalChange`, eine Funktion, die die Komponente mit dem neuen Wert aufruft
2. Entferne den State aus dem `IntervalSelector` und nimm stattdessen die Props.
3. Leg den State in `App` an und übergib Wert und Setter an den `IntervalSelector`.
4. Erlaube für `interval` auch `undefined`, damit das Feld anfangs leer sein kann. Gib `useState` dafür den Typ explizit mit (`useState<number>()`).
5. Ein `input` nimmt als `value` kein `undefined`. Übergib in dem Fall einen Leerstring. Öffne die Konsole im Browser, gib eine Zahl ein und prüfe, dass React keine Warnung ausgibt.

## Material

- State zwischen Komponenten teilen: https://react.dev/learn/sharing-state-between-components
- Controlled und Uncontrolled Components: https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components
- Typen für `useState`: https://react.dev/learn/typescript#typing-usestate
- Funktionstypen in TypeScript: https://www.typescriptlang.org/docs/handbook/2/functions.html#function-type-expressions
