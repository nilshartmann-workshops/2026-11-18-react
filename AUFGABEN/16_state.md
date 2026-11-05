# State

## Dateien

- `workspace/src/components/IntervalSelector.tsx` (legst du neu an)
- `workspace/src/components/App.tsx`

## Aufgabe

Baue eine Komponente `IntervalSelector`, mit der man das Gießintervall in Tagen auswählt. Den gewählten Wert hält die Komponente in ihrem State.

## Schritte

1. Lege die Datei `src/components/IntervalSelector.tsx` mit der Komponente `IntervalSelector` an.
2. Leg darin mit `useState` einen State vom Typ `number` an, der mit `1` beginnt.
3. Render ein `input` mit `type="number"` und ein `label` davor. Verknüpfe das Feld mit dem State über `value` und `onChange`. Der Wert im `onChange` ist immer ein `string`. Wandle ihn deshalb mit `Number` in eine Zahl um, bevor du ihn in den State schreibst.
4. Zeig unter dem Feld den gewählten Wert an („Alle X Tage gießen“).
5. Füge Buttons hinzu, die per Klick ein festes Intervall setzen, etwa „Täglich“ und „Wöchentlich“. Gib ihnen `type="button"`, sonst schicken sie das Formular ab.
6. Render den `IntervalSelector` in `App` unter der Liste, eingepackt in ein `form`-Element.

### 🧐 Optional (wenn du noch Zeit hast)

7. Baue in `App` einen Button, der den `IntervalSelector` ein- und ausblendet. Auch dafür brauchst du einen State. Was passiert mit dem gewählten Intervall, wenn du die Komponente aus- und wieder einblendest?

## Material

- State: https://react.dev/learn/state-a-components-memory
- `useState`: https://react.dev/reference/react/useState
- Event-Handler: https://react.dev/learn/responding-to-events
- Der Typ für das Ereignis ist `ChangeEvent<HTMLInputElement>`, zum Beispiel `(e: ChangeEvent<HTMLInputElement>) => { ... }`.
- `Number`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number
