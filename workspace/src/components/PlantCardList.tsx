import { useState } from "react";

import { Plant } from "../types.ts";
import LocationFilter from "./LocationFilter.tsx";
import PlantCard from "./PlantCard.tsx";

type PlantCardListProps = {
  plants: Plant[];
};

export default function PlantCardList({ plants }: PlantCardListProps) {
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

  const toggleLocation = (location: string) => {
    setSelectedLocations(
      selectedLocations.includes(location)
        ? selectedLocations.filter((l) => l !== location)
        : [...selectedLocations, location],
    );
  };

  const visiblePlants =
    selectedLocations.length === 0
      ? plants
      : plants.filter((p) => selectedLocations.includes(p.location));

  return (
    <>
      <LocationFilter
        selectedLocations={selectedLocations}
        onLocationToggle={toggleLocation}
      />
      <div className={"PlantCardList"}>
        {visiblePlants.map((p) => (
          <PlantCard
            key={p.id}
            name={p.name}
            location={p.location}
            wateringInterval={p.wateringInterval}
            lastWatered={p.lastWatered}
          />
        ))}
      </div>
    </>
  );
}
