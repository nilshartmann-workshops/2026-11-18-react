import {useQuery, useSuspenseQuery} from "@tanstack/react-query";
import {Plant} from "../types.ts";
import PlantCardList from "./PlantCardList.tsx";

export default function PlantCardListLoader() {
	const result = useSuspenseQuery(
		{
			queryKey: ["plants", "list"],
			async queryFn() {
				const response = await fetch("http://localhost:7200/api/plants");
				const result: Plant[] = await response.json();
				return result;
		}
	})

	const allPlants = result.data;
	return <PlantCardList plants={allPlants} />;
}