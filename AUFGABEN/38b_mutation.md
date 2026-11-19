# Mutation

## Dateien

- `workspace/src/components/PlantForm.tsx`

## Aufgabe

Speichere die Daten aus dem Formular mit einer Mutation von TanStack Query. Danach zeigt die Liste die neue Pflanze.

## Schritte

1. Lege in `PlantForm` mit `useMutation` eine Mutation an. Ihre `mutationFn` schickt die Formulardaten per `fetch` an `http://localhost:7200/api/plants`:
   - mit `method: "POST"`
   - mit dem Header `"Content-Type": "application/json"`
   - mit den Daten als `body`, umgewandelt mit `JSON.stringify`
2. Wirf einen `Error`, wenn `response.ok` nicht gesetzt ist. Prüfe sonst die Antwort mit `PlantSchema.parse` und gib die neue Pflanze zurück.
3. Ruf in `handleSave` `mutation.mutate` mit den Formulardaten auf.
4. Zeig unter dem Formular eine Meldung an: bei Erfolg mit der CSS-Klasse `success-message`, bei einem Fehler mit `error-message`. Einen Fehler im Backend löst du aus, wenn du den Namen nur in Großbuchstaben eingibst.
5. Setz den Button „Pflanze hinzufügen“ auf `disabled`, solange die Mutation läuft. Mit `?slow=2000` an der Adresse siehst du das besser.
6. Nach dem Speichern zeigt die Liste die neue Pflanze noch nicht an, weil der Cache den alten Stand hat. Invalidiere in `onSuccess` den Query der Liste mit dem `queryKey`, den du im `PlantCardListLoader` angegeben hast. Den `QueryClient` bekommst du mit `useQueryClient`.

## Material

- Mutations: https://tanstack.com/query/latest/docs/framework/react/guides/mutations
- `useMutation`: https://tanstack.com/query/latest/docs/framework/react/reference/useMutation
- Invalidieren nach einer Mutation: https://tanstack.com/query/latest/docs/framework/react/guides/invalidations-from-mutations
- `useQueryClient`: https://tanstack.com/query/latest/docs/framework/react/reference/useQueryClient
- `fetch` mit Body: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#setting_a_body
