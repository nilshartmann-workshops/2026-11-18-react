import { useState } from "react";

import { Plant } from "../types.ts";
import IntervalSelector from "./IntervalSelector.tsx";
import PlantCardList from "./PlantCardList.tsx";

const allPlants: Plant[] = [
  {
    id: "1",
    name: "Aloe Vera",
    location: "Schlafzimmer",
    wateringInterval: 12,
    lastWatered: "2025-06-16",
  },
  {
    id: "2",
    name: "Orchidee",
    location: "Wohnzimmer",
    wateringInterval: 1,
  },
  {
    id: "3",
    name: "Grüne Monstera",
    location: "Wohnzimmer",
    wateringInterval: 7,
    lastWatered: "2025-06-20",
  },
];

export default function App() {
  const [interval, setInterval] = useState<number>();

  return (
    <div className={"AppContainer"}>
      <PlantCardList plants={allPlants} />
      <form>
        <IntervalSelector interval={interval} onIntervalChange={setInterval} />
      </form>
    </div>
  );
}
