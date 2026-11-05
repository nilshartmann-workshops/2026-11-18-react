import { useState } from "react";

import { Plant } from "../types.ts";
import IntervalSelector from "./IntervalSelector.tsx";
import PlantCardList from "./PlantCardList.tsx";

export default function App() {
  const [interval, setInterval] = useState<number>();
  const [plants, setPlants] = useState<Plant[]>([]);

  const loadPlants = async () => {
    const response = await fetch("http://localhost:7200/api/plants");
    const body: Plant[] = await response.json();
    setPlants(body);
  };

  return (
    <div className={"AppContainer"}>
      <button className={"primary"} onClick={loadPlants}>
        Pflanzen laden
      </button>
      <PlantCardList plants={plants} />
      <form>
        <IntervalSelector interval={interval} onIntervalChange={setInterval} />
      </form>
    </div>
  );
}
