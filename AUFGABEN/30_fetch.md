# Daten laden mit fetch

## Dateien

- `workspace/src/components/App.tsx`

## Vorbereitung

Starte das Backend im Verzeichnis `backend` mit `npm start`. Unter http://localhost:7200/api/plants siehst du die Pflanzen als JSON.

## Aufgabe

Lade die Pflanzen per Klick auf einen Button vom Backend und zeig sie in der `PlantCardList` an.

## Schritte

**Lade die Pflanzen in `App`**

1. Leg einen State für die Liste der Pflanzen an. Sein initialer Wert ist ein leeres Array vom Typ `Plant[]`. Die Beispiel-Pflanzen im Code brauchst du danach nicht mehr.
2. Lege die Funktion `loadPlants` an:

   ```ts
   const loadPlants = async () => {
     // todo: Daten mit fetch von http://localhost:7200/api/plants laden
     // todo: Body mit response.json() lesen und in den State schreiben
   };
   ```

3. Lade die Daten mit `fetch`. Lies den Body mit `response.json()`, gib dem Ergebnis den Typ `Plant[]` und schreib es in den State.

**Zeige die Pflanzen an**

1. Render über der `PlantCardList` einen Button, der `loadPlants` aufruft:

   ```tsx
   <button className="primary" onClick={loadPlants}>
     Pflanzen laden
   </button>
   ```

2. Gib den State an die `PlantCardList`.

**Probiere eine falsche Adresse aus**

1. Ändere die Adresse in eine, die es nicht gibt, etwa `/api/plantz`. Was passiert, und wo siehst du den Fehler?
2. Stell die Adresse danach wieder zurück.

## Material

- `fetch`: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
- `async` und `await`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

## Hintergrund

`fetch` wirft keine Exception, wenn der Server mit 404 oder 500 antwortet. Ob die Anfrage geklappt hat, steht in `response.ok`. Bei der falschen Adresse scheitert hier erst `response.json()`.
