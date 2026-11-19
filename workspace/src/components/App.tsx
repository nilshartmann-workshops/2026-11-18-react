import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import PlantCardListLoader from "./PlantCardListLoader.tsx";
import PlantForm from "./PlantForm.tsx";

export default function App() {
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
      <PlantForm />
    </div>
  );
}
