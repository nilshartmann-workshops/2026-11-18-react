import { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

import IntervalSelector from "./IntervalSelector.tsx";
import PlantCardListLoader from "./PlantCardListLoader.tsx";

export default function App() {
  const [interval, setInterval] = useState<number>();

  return (
    <div className={"AppContainer"}>
      <ErrorBoundary
        fallback={
          <div className={"error-message"}>
            Fehler beim Laden der Pflanzen 🥀
          </div>
        }
      >
        <Suspense
          fallback={
            <div className={"CardListFallback"}>Pflanzen werden geladen...</div>
          }
        >
          <PlantCardListLoader />
        </Suspense>
      </ErrorBoundary>
      <form>
        <IntervalSelector interval={interval} onIntervalChange={setInterval} />
      </form>
    </div>
  );
}
