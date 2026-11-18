# Globaler State mit Zustand

## Dateien

- `workspace/src/components/useLocationFilterStore.ts` (neu)
- `workspace/src/components/LocationFilter.tsx`
- `workspace/src/components/PlantCardList.tsx`

## Vorbereitung

Installiere die Bibliothek [Zustand](https://zustand.docs.pmnd.rs/). Beende dafür den Devserver und führe im Verzeichnis `workspace` diesen Befehl aus:

```bash
npm install zustand
```

Starte den Devserver danach wieder. Läuft er beim Installieren weiter, bricht die Anwendung mit dem Fehler „Invalid hook call“ ab.

## Aufgabe

Die ausgewählten Standorte des Filters stehen bisher als State in `PlantCardList` und werden per Properties an `LocationFilter` gegeben. Verschiebe sie in einen Store von Zustand, aus dem beide Komponenten direkt lesen.

## Schritte

**Lege den Store an**

1. Lege die Datei `useLocationFilterStore.ts` mit diesem Gerüst an:

   ```ts
   import { create } from "zustand";

   type LocationFilterStore = {
     selectedLocations: string[];
     toggleLocation(location: string): void;
   };

   export const useLocationFilterStore = create<LocationFilterStore>()((set) => {
     return {
       selectedLocations: [],

       toggleLocation: (location) => {
         // todo: mit set die neue Liste in selectedLocations schreiben
       },
     };
   });
   ```

   - Die zweite Klammer nach `create<LocationFilterStore>()` braucht TypeScript, um den Typ des Stores festzulegen.

2. Vervollständige `toggleLocation` mit der Logik aus `PlantCardList`. Rufe dafür `set` so auf:

   ```ts
   set((state) => {
     return { selectedLocations: /* neue Liste */ };
   });
   ```

   - Die Funktion an `set` bekommt den bisherigen Zustand und gibt ein Objekt mit den geänderten Feldern zurück. Zustand mischt dieses Objekt in den Store.
   - Auch hier muss ein neues Array entstehen. Zustand erkennt eine Änderung genau wie React am Vergleich der Referenzen.

**Stelle `LocationFilter` auf den Store um**

1. Entferne die Properties.
2. Lies die Auswahl und `toggleLocation` aus dem Store:

   ```ts
   const { selectedLocations, toggleLocation } = useLocationFilterStore();
   ```

**Stelle `PlantCardList` auf den Store um**

1. Entferne den State und die Funktion zum Umschalten.
2. Lies die Auswahl aus dem Store:

   ```ts
   const { selectedLocations } = useLocationFilterStore();
   ```

3. Render `LocationFilter` ohne Properties.

## Material

- Zustand, Einführung: https://zustand.docs.pmnd.rs/getting-started/introduction
- Zustand mit TypeScript: https://zustand.docs.pmnd.rs/guides/typescript
