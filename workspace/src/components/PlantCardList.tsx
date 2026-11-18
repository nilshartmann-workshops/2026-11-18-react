import { Plant } from "../types.ts";
import LocationFilter from "./LocationFilter.tsx";
import PlantCard from "./PlantCard.tsx";
import { useLocationFilterStore } from "./useLocationFilterStore.ts";

type PlantCardListProps = {
  plants: Plant[];
};

export default function PlantCardList({ plants }: PlantCardListProps) {
  const selectedLocations = useLocationFilterStore(
    (state) => state.selectedLocations,
  );

  const visiblePlants =
    selectedLocations.length === 0
      ? plants
      : plants.filter((p) => selectedLocations.includes(p.location));

  return (
    <>
      <LocationFilter />
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
