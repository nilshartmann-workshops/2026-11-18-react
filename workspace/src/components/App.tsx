import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import PlantCardListLoader from "./PlantCardListLoader.tsx";
import PlantForm from "./PlantForm.tsx";

export default function App() {
  return (
    <div className={"AppContainer"}>
      <PlantForm />
    </div>
  );
}
