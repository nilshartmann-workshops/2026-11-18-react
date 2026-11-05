# Suspense und Error Boundary

## Dateien

- `workspace/src/components/App.tsx`
- `workspace/src/components/PlantCardListLoader.tsx`

## Aufgabe

Zeig eine Meldung an, solange die Pflanzen geladen werden. Optional zeigst du eine Fehlermeldung an, wenn das Laden scheitert.

## Schritte

**Zeige in `App.tsx` eine Ladeanzeige mit `Suspense`**

1. Pack den `PlantCardListLoader` in eine `Suspense`-Komponente:

   ```tsx
   <Suspense
     fallback={<div className="CardListFallback">Pflanzen werden geladen...</div>}
   >
     <PlantCardListLoader />
   </Suspense>
   ```

2. Teste den Fallback auf eine dieser Arten:
   - Häng in `PlantCardListLoader.tsx` an die Adresse in der `queryFn` `?slow=2000` an. Das Backend antwortet dann zwei Sekunden später.
   - Klick in den Devtools von TanStack Query auf den Eintrag und dann auf „Trigger Loading“.

**Erkenne in `PlantCardListLoader.tsx` eine gescheiterte Anfrage**

1. `fetch` wirft bei einer Antwort mit Status 404 oder 500 keine Exception. Prüfe deshalb in der `queryFn` `response.ok` und wirf selbst einen `Error`, wenn die Anfrage gescheitert ist.

**🧐 Optional (wenn du noch Zeit hast): Zeige in `App.tsx` eine Fehlermeldung mit `ErrorBoundary`**

1. Importiere die Komponente `ErrorBoundary` aus der Bibliothek `react-error-boundary` und pack die `Suspense`-Komponente hinein:

   ```tsx
   <ErrorBoundary
     fallback={<div className="error-message">{/* todo: Fehlermeldung */}</div>}
   >
     {/* todo: Suspense mit dem PlantCardListLoader hierher verschieben */}
   </ErrorBoundary>
   ```

2. Halte das Backend an und lade die Seite neu. TanStack Query wiederholt eine gescheiterte Anfrage von sich aus mehrmals, bevor der Fehler ankommt.
3. Schalte die Wiederholungen in `PlantCardListLoader.tsx` mit der Option `retry: false` in `useSuspenseQuery` ab.

## Material

- `Suspense`: https://react.dev/reference/react/Suspense
- Suspense mit TanStack Query: https://tanstack.com/query/latest/docs/framework/react/guides/suspense
- `react-error-boundary`: https://github.com/bvaughn/react-error-boundary
- Retries in TanStack Query: https://tanstack.com/query/latest/docs/framework/react/guides/query-retries
- `response.ok`: https://developer.mozilla.org/en-US/docs/Web/API/Response/ok
