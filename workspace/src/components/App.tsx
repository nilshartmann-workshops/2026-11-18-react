import { useState } from "react";

import IntervalSelector from "./IntervalSelector.tsx";
import PlantCardListLoader from "./PlantCardListLoader.tsx";

export default function App() {
  const [interval, setInterval] = useState<number>();

  return (
    <div className={"AppContainer"}>
      <PlantCardListLoader />
      <form>
        <IntervalSelector interval={interval} onIntervalChange={setInterval} />
      </form>
    </div>
  );
}
