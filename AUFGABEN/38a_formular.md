# Ein Formular mit `useState`

## Dateien

- `workspace/src/components/PlantForm.tsx` (übernimmst du aus `live_coding`)
- `workspace/src/components/IntervalSelector.tsx` (übernimmst du aus `live_coding`)
- `workspace/src/components/App.tsx`

## Aufgabe

Übernimm das fertige Formular `PlantForm` zum Anlegen einer Pflanze und sieh dir an, wie es aufgebaut ist.

## Schritte

1. Hol dir im Verzeichnis `workspace` die beiden Dateien aus `live_coding`:

   ```bash
   git fetch origin
   git checkout origin/live_coding -- src/components/PlantForm.tsx src/components/IntervalSelector.tsx
   ```

2. Ersetze in `App` das `form`-Element mit dem `IntervalSelector` durch `<PlantForm />`. Den State für das Intervall brauchst du dort nicht mehr.
3. Sieh dir `PlantForm` an:
   - Jedes Feld ist eine Controlled Component mit eigenem State.
   - Beim Absenden prüft `PlantFormSchema.safeParse` die Eingaben. Die Meldungen aus zod stehen danach im State `errors`.
4. Schick das Formular einmal leer und einmal ausgefüllt ab und sieh dir die Konsole an.

## Material

- `safeParse`: https://zod.dev/basics#handling-errors
- `z.flattenError`: https://zod.dev/error-formatting#zflattenerror
- Controlled Components: https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable
