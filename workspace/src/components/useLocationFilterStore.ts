import { create } from "zustand";

type LocationFilterStore = {
  selectedLocations: string[];
  toggleLocation(location: string): void;
};

// 🕵️‍♂️ Erzählen: der Store liegt außerhalb von React, kein Provider nötig
// 🕵️‍♂️ Erzählen: die leere Klammer nach create<T> ist ein TypeScript-Detail
export const useLocationFilterStore = create<LocationFilterStore>()((set) => {
  return {
    selectedLocations: [],

    // 🕵️‍♂️ Erzählen: set bekommt einen Teil-Zustand, Zustand mischt ihn in den Store
    toggleLocation: (location) => {
      set((state) => {
        const newSelectedLocations = state.selectedLocations.includes(location)
          ? state.selectedLocations.filter((l) => l !== location)
          : [...state.selectedLocations, location];

        return { selectedLocations: newSelectedLocations };
      });
    },
  };
});
