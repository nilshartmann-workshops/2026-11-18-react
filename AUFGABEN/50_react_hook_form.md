# Umbau auf React Hook Form

## Dateien

- `workspace/src/components/PlantForm.tsx`

## Vorbereitung

Starte die Tests mit `npm run test:browser`. Sie laufen während des Umbaus weiter und zeigen dir nach jeder gespeicherten Änderung, ob das Formular noch funktioniert.

## Aufgabe

Bau das `PlantForm` von `useState` auf React Hook Form um. Am Ende verhält sich das Formular wie vorher, und die Tests für das Formular sind grün, ohne dass du sie änderst.

## Schritte

1. Leg mit `useForm` das Formular an und übergib als `resolver` den `zodResolver` mit dem `PlantFormSchema`. React Hook Form prüft die Eingaben damit selbst, `safeParse`, `handleSubmit` und `handleReset` entfallen.
2. Ersetze bei `name`, `location` und `lastWatered` den State, `value` und `onChange` durch `form.register`. Lass `id` stehen, damit das Label mit dem Feld verbunden bleibt.
3. Ein leeres Datumsfeld liefert einen Leerstring. Wandle ihn bei der Registrierung um: `form.register("lastWatered", { setValueAs: (value) => (value === "" ? undefined : value) })`
4. Der `IntervalSelector` hat die Props `interval` und `onIntervalChange` und passt deshalb nicht zu `form.register`. Binde ihn mit der Komponente `Controller` ein. Sie braucht `control`, `name` und eine Funktion `render`, die aus `field` und `fieldState` den `IntervalSelector` baut.
5. Die Fehler stehen jetzt in `form.formState.errors`, je Feld ein Eintrag mit `message`. Ersetze damit den State `errors`.
6. Übergib `handleSave` an `form.handleSubmit` und das Ergebnis an `onSubmit` des `form`-Elements.
7. Setz das Formular bei „Eingaben löschen“ mit `form.reset()` zurück.
8. Entferne die übrigen `useState`. Sind die Tests grün, ist der Umbau fertig.
9. Schick das Formular im Browser einmal leer und einmal ausgefüllt ab. Was macht React Hook Form nach dem ersten Absenden anders als die Fassung mit `useState`?

## Material

- `useForm`: https://react-hook-form.com/docs/useform
- `zodResolver`: https://github.com/react-hook-form/resolvers#zod
- `register` und `setValueAs`: https://react-hook-form.com/docs/useform/register
- `handleSubmit`: https://react-hook-form.com/docs/useform/handlesubmit
- `formState`: https://react-hook-form.com/docs/useform/formstate
- `reset`: https://react-hook-form.com/docs/useform/reset
- `Controller`: https://react-hook-form.com/docs/usecontroller/controller
