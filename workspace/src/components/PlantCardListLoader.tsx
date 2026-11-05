import { useSuspenseQuery } from "@tanstack/react-query";

import { Plant } from "../types.ts";
import PlantCardList from "./PlantCardList.tsx";

export default function PlantCardListLoader() {
  const { data: plants } = useSuspenseQuery({
    queryKey: ["plants", "list"],
    async queryFn() {
      const response = await fetch("http://localhost:7200/api/plants");
      // 🕵️‍♂️ Zeigen: Adresse auf /api/plants/1 ändern, der Code kompiliert und plants.map scheitert zur Laufzeit
      const body: Plant[] = await response.json();
      return body;
    },
  });

  return <PlantCardList plants={plants} />;
}
