import { useSuspenseQuery } from "@tanstack/react-query";

import { PlantSchema } from "../types.ts";
import PlantCardList from "./PlantCardList.tsx";

export default function PlantCardListLoader() {
  const { data: plants } = useSuspenseQuery({
    queryKey: ["plants", "list"],
    async queryFn() {
      const response = await fetch("http://localhost:7200/api/plants");
      const body = await response.json();
      return PlantSchema.array().parse(body);
    },
  });

  return <PlantCardList plants={plants} />;
}
