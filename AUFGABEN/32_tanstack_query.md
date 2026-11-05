# Daten lesen mit TanStack Query

## Dateien

- `workspace/src/main.tsx`
- `workspace/src/components/PlantCardListLoader.tsx` (neu)
- `workspace/src/components/App.tsx`

## Vorbereitung

Starte das Backend im Verzeichnis `backend` mit `npm start`, falls es noch nicht läuft. Unter http://localhost:7200/api/plants siehst du die Pflanzen als JSON.

## Aufgabe

Lies die Pflanzen mit TanStack Query, sobald die Anwendung startet.

## Schritte

**Stelle in `main.tsx` den `QueryClient` bereit**

1. TanStack Query braucht einen `QueryClient`, den der `QueryClientProvider` der Anwendung bereitstellt. Ersetze dazu den Aufruf von `createRoot`:

   ```tsx
   import { QueryClientProvider } from "@tanstack/react-query";
   import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

   import { createQueryClient } from "./create-query-client.tsx";

   const queryClient = createQueryClient();

   createRoot(document.getElementById("root")!).render(
     <QueryClientProvider client={queryClient}>
       <App />
       <ReactQueryDevtools />
     </QueryClientProvider>,
   );
   ```

**Lade die Pflanzen in `PlantCardListLoader.tsx`**

1. Lege die Komponente `PlantCardListLoader` mit diesem Gerüst an:

   ```tsx
   import { useSuspenseQuery } from "@tanstack/react-query";

   import { Plant } from "../types.ts";
   import PlantCardList from "./PlantCardList.tsx";

   export default function PlantCardListLoader() {
     const { data: plants } = useSuspenseQuery({
       // todo: queryKey
       async queryFn() {
         // todo: Daten mit fetch von http://localhost:7200/api/plants laden
         // todo: Body mit response.json() lesen und als Plant[] zurückgeben
       },
     });

     return <PlantCardList plants={plants} />;
   }
   ```

2. Überlege dir einen `queryKey`, der die Liste der Pflanzen bezeichnet, und gib ihn als Array an.
3. Lade in der `queryFn` die Daten mit `fetch`. Lies den Body mit `response.json()`, gib dem Ergebnis den Typ `Plant[]` und gib es mit `return` zurück.

**Render in `App.tsx` den `PlantCardListLoader`**

1. Render statt der `PlantCardList` den `PlantCardListLoader`.
2. Entferne die Pflanzen, die `App` bisher an die `PlantCardList` gegeben hat: die Beispiel-Pflanzen oder den State samt `loadPlants` und Button.

**Sieh dir den Query in den Devtools an**

1. Öffne unten rechts die Devtools von TanStack Query (das Symbol mit der Palme) und sieh dir den Eintrag für deinen Query an.
2. Was spricht dafür, die Daten in einer eigenen Komponente zu laden statt direkt in `PlantCardList`?

## Material

- Überblick: https://tanstack.com/query/latest/docs/framework/react/overview
- Queries: https://tanstack.com/query/latest/docs/framework/react/guides/queries
- Query Keys: https://tanstack.com/query/latest/docs/framework/react/guides/query-keys
- `useSuspenseQuery`: https://tanstack.com/query/latest/docs/framework/react/reference/useSuspenseQuery
- Devtools: https://tanstack.com/query/latest/docs/framework/react/devtools
