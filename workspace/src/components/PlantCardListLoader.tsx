import {useQuery, useSuspenseQuery} from "@tanstack/react-query";
import {Plant, PlantSchema} from "../types.ts";
import PlantCardList from "./PlantCardList.tsx";

export default function PlantCardListLoader() {
	const result = useSuspenseQuery(
		{
			queryKey: ["plants", "list"],
			async queryFn() {
				const response = await fetch("http://localhost:7200/api/plants");
				const result = await response.json();
				const plants = PlantSchema.array().parse(result)
				return plants;
		}
	})

	const allPlants = result.data;
	return <PlantCardList plants={allPlants} />;
}